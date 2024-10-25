import SenderIcon from "../../assets/senderemailHD.webp";

import LaPurga from "../../assets/hackathon-projects/lapurga.jpg";
import Hauntedfolio from "../../assets/hackathon-projects/hauntedfolio.webp";
import GhostSpotters from "../../assets/hackathon-projects/ghostspotters.jpg";
import SpookyCustomize from "../../assets/hackathon-projects/spookycustomize.webp";
import VHSStory from "../../assets/hackathon-projects/vhsstory.webp";
import SpectralVision from "../../assets/hackathon-projects/spectralvision.webp";
import Ghouglify from "../../assets/hackathon-projects/ghouglify.webp";
import ShowMeYourStyle from "../../assets/hackathon-projects/showmeyourstyle.webp";
import Spooklens from "../../assets/hackathon-projects/spooklens.webp";
import SpookyHack from "../../assets/hackathon-projects/spookyhack.webp";
import HackathonCloudinaryProject from "../../assets/hackathon-projects/hackathoncloudinary.webp";
import HechizosCulinarios from "../../assets/hackathon-projects/hechizosculinarios.webp";
import Ailloween from "../../assets/hackathon-projects/ailloween.webp";
import ScaryLetter from "../../assets/hackathon-projects/scaryletter.webp";
import Spookify from "../../assets/hackathon-projects/spookify.webp";

export default function Email02() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">
              [NUEVO] ¡Ya están aquí los resultados de los proyectos de la Spooky AI Hackathon de Cloudinary!
            </p>

            <p className="font-mono">notifications@midu.dev</p>

            <p className="font-extrabold">Recibido: 23/10/2024 11:01</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Explora los proyectos geniales hechos por la comunidad para la Spooky AI Hackathon de Cloudinary
            <br />
            <br />
            <p className="font-semibold">La Purga de Halloween</p>
            <a href="https://lapurga.vercel.app/" target="_blank">
              <img src={LaPurga.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Hauntedfolio 👻</p>
            <a href="https://hauntedfolio.vercel.app/" target="_blank">
              <img src={Hauntedfolio.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">GhostSpotters</p>
            <a href="https://ghost-spotters.vercel.app/" target="_blank">
              <img src={GhostSpotters.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Spooky Customize AI</p>
            <a href="https://spooky-customize-ai.vercel.app/" target="_blank">
              <img src={SpookyCustomize.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">VHS Story</p>
            <a href="https://vhs-story.vercel.app/" target="_blank">
              <img src={VHSStory.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Spectral Vision</p>
            <a href="https://spectral-vision.vercel.app/" target="_blank">
              <img src={SpectralVision.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Ghouglify</p>
            <a href="https://ghouglify.art/" target="_blank">
              <img src={Ghouglify.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Show Me Your Style</p>
            <a href="https://showmeyourstyle.vercel.app/" target="_blank">
              <img src={ShowMeYourStyle.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Spooklens</p>
            <a href="https://spooklens.vercel.app/" target="_blank">
              <img src={Spooklens.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Spooky Hack</p>
            <a href="https://spooky-hack.jesusnoseq.com/" target="_blank">
              <img src={SpookyHack.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Hackathon Cloudinary Project</p>
            <a href="https://hackathon-cloudinary.onrender.com/" target="_blank">
              <img src={HackathonCloudinaryProject.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Hechizos Culinarios</p>
            <a href="https://culinary-spells-frontend.netlify.app/" target="_blank">
              <img src={HechizosCulinarios.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">AIlloween</p>
            <a href="https://ailloween.netlify.app/" target="_blank">
              <img src={Ailloween.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">Scary Letter</p>
            <a href="https://scary-stories.vercel.app/" target="_blank">
              <img src={ScaryLetter.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
            <br />
            <p className="font-semibold">spookify</p>
            <a href="https://spookify.davidpoza.com/" target="_blank">
              <img src={Spookify.src} className="w-128 mb-2 mt-2" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
