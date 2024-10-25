import SenderIcon from "../../assets/senderemailHD.webp";

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

            <p className="font-mono">notifications@fbi.gov</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">Mira</div>
        </div>
      </div>
    </>
  );
}
