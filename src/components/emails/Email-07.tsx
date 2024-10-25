import SenderIcon from "../../assets/senderemailHD.webp";

export default function Email07() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">¿Te acuerdas de mi? Ya ha pasado mucho tiempo</p>

            <p className="font-mono">notifications@fbi.gov</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Email07. Espere más instrucciones de nuestra parte una vez nos aseguremos que está bien.
          </div>
        </div>
      </div>
    </>
  );
}
