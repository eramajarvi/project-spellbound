import SenderIcon from "../../assets/senderemailHD.webp";
import MomCryingPhoto from "../../assets/momcrying.jpg";

export default function Email03() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">
              Estamos preocupados por ti, tu madre no hace sino llorar todo el día
            </p>

            <p className="font-mono">notanentity@ymail.com</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Por favor contéstanos el teléfono. Nos llamaron unos agentes de una tal agencia y nos dijeron que puedes
            estar en peligro inminente.
            <br />
            <br />
            Que les contestes también el email que te acabaron de enviar y envies una foto tuya.
            <br />
            <br />
            Mientras tanto te envío una foto de tu madre llorando.
            <br />
            <br />
            <img src={MomCryingPhoto.src} className="w-64 mb-2 mt-2" alt="A mother cries for his son" />
            <br />
            Se que no se parece a ella, pero te juro que es ella.
          </div>
        </div>
      </div>
    </>
  );
}
