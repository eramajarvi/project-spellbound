import FBISeal from "../../assets/fbi-seal.webp";

export default function Email01() {
  return (
    <>
      <div className="overflow-y-auto h-[650px] p-2">
        <div className="bg-white rounded-lg p-2">
          <p className="font-bold text-lg leading-5">
            [URGENTE] Avistamientos detectados cerca de tu área
          </p>

          <p className="font-mono">notifications@fbi.gov</p>

          <p className="font-extrabold">Recibido: justo ahora</p>
        </div>

        <div className="mt-2 p-2">
          <p className="text-sm">
            Recientemente nuestros equipos de mediciones detectaron niveles
            anormales de avistamientos de{" "}
            <p className="font-semibold inline-block">
              conceptos ininteligibles
            </p>{" "}
            cerca de tu área.
            <br />
            Este es un correo electrónico certificado enviado por el FBI.
            <img src={FBISeal.src} className="size-40" />
          </p>
        </div>
      </div>
    </>
  );
}
