import FBISeal from "../../assets/fbi-seal.webp";

export default function Email01() {
  return (
    <>
      <div className="overflow-y-auto h-[650px] p-2 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32">
            <img src={FBISeal.src} className="size-fit" />
          </div>
          <div className="p-2">
            <p className="font-bold text-lg leading-5">
              [URGENTE] Avistamientos detectados cerca de tu área
            </p>

            <p className="font-mono">notifications@fbi.gov</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="mt-2 p-2">
          <p className="text-sm">
            <br />
            Recientemente nuestros equipos de mediciones detectaron niveles
            anormales de avistamientos de{" "}
            <p className="font-semibold inline-block">
              conceptos ininteligibles
            </p>{" "}
            cerca de tu área.
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
