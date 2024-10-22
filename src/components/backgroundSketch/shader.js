import snoise3D from "../backgroundSketch/snoise3D.js";
import gradient from "../backgroundSketch/gradient.js";
import pixelate from "../backgroundSketch/pixelate.js";

const vert = `#version 300 es

	in vec3 aPosition;
	in vec2 aTexCoord;

	out vec2 vTexCoord;

	void main() {
		vTexCoord = aTexCoord;
		gl_Position = vec4(aPosition.xy*2.-1., aPosition.z, 1.);
	}
`;

const frag = `#version 300 es

	precision mediump float;
	
	uniform vec2 iResolution;
	uniform vec2 iMouse;
	uniform vec2 iGrid;
	uniform sampler2D iAtlas;
	uniform vec2 iAtlasGrid;
	uniform float iLength;
	uniform float iTime;
	uniform float iType;
	uniform bool iIsShadow;
	uniform bool iIsDistortions;
	uniform float iWei;
	
	in vec2 vTexCoord;
	out vec4 fragColor;

	${snoise3D}
	${gradient}
	${pixelate}

	float map(float value, float iMin, float iMax, float oMin, float oMax) {
		return (value-iMin)*(oMax-oMin)/(iMax-iMin)+oMin;
	}

	vec4 sprite(vec2 uv, sampler2D atlas, vec2 atlasGrid, float id) {
		uv /= atlasGrid;
		uv += vec2(mod(id, atlasGrid.x), floor(id / atlasGrid.x))/atlasGrid;
		return texture(atlas, uv);
	}

	vec2 lensDistortions(vec2 uv, vec2 mouse, float wei, float range, float exp) {
    float dist = pow(length(uv - mouse), exp);
    dist = smoothstep(0., range, dist);
    vec2 lensCenter = mouse + wei * dist * (uv - mouse);
    return uv + wei * (lensCenter - uv);
	}

	void main() {
		float t = iTime*.1;
		vec2 uv = vTexCoord;
		vec2 mo = iMouse/iResolution;
		uv.y = 1.-uv.y;
		uv -= 0.5;
		mo -= 0.5;
		mo.x *= iResolution.x/iResolution.y;
		uv.x *= iResolution.x/iResolution.y;
		
		if (iIsDistortions) {
			uv = lensDistortions(uv, mo, 1., 2., iWei);
		}

		vec2 fuv = fract(uv*iGrid);
		vec2 iuv = floor(uv*iGrid);
		vec2 puv = pixelate(uv, iGrid);

		float flow;
		if (iType == 1.)      flow = vertical(puv, 2., t);
		else if (iType == 2.) flow = horizontal(puv, 2., t);
		else if (iType == 3.) flow = radial(puv, vec2(0.), 2., t);
		else if (iType == 4.) flow = conical(puv, vec2(0.), 2., t).x;
		else if (iType == 5.) flow = swirl(puv, vec2(0.), 2., t).x;
		else if (iType == 6.) flow = .5+.5*snoise(vec3(puv, t));
		
		float id = floor(map(flow, 0., 1., 0., iLength-0.0001));
		vec4 sp = sprite(fuv, iAtlas, iAtlasGrid, id);
		
		fragColor = vec4(sp.rgb, 1.);
		if (iIsShadow) {
			fragColor *= (1.-length(uv-mo));
		}
	}
`;

export { vert, frag };
