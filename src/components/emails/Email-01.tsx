import FBISeal from "../../assets/fbi-seal.webp";
import Horror02 from "../../assets/horror-02.webp";

export default function Email01() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32">
            <img src={FBISeal.src} className="size-fit" />
          </div>
          <div className="p-1">
            <p className="font-bold text-lg leading-5">[URGENTE] Avistamientos detectados cerca de su área</p>

            <p className="font-mono">notifications@fbi.gov</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            <p className="font-extrabold">
              Haga click en Responder a este email y <u>enviénos una foto suya</u> para asegurarnos que está bien.
              <br />
              Por favor cierre todas las puertas y ventanas de su casa y no le abra a nadie.
            </p>
            <img src={Horror02.src} className="size-64 mb-2 mt-2" />
            Recientemente nuestros equipos de mediciones detectaron niveles anormales de avistamientos de{" "}
            <p className="font-semibold inline-block">conceptos ininteligibles</p> cerca de su área.
            <br />
            <br />
            Sólo son detectables al utilizar cualquier dispositivo que sea capaz de capturar fotones.
            <br />
            <br />
            Estas entidades más allá de la comprensión humana tienen la capacidad de aparecer en fotografías tomadas en
            cámaras comunes. Es díficil saber cuándo aparecerán.
            <br />
            <br />
            Espere más instrucciones de nuestra parte una vez nos aseguremos que está bien.
          </div>
        </div>
      </div>
    </>
  );
}
