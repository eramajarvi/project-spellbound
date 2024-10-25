import SenderIcon from "../../assets/senderemailHD.webp";

export default function Email08() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">Reenvía este email a 256 personas diferentes o ya verás</p>

            <p className="font-mono">anon@ymail.com</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Haz caído en la maldición del príncipe nigeriano, ahora debes reenviar este correo a todos tus contactos.
          </div>
        </div>
      </div>
    </>
  );
}
