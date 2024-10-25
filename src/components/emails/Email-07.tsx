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

            <p className="font-mono">anon@yopmail.com</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            No se cómo he podido extrañarte tanto, así que te envío este poema que vi en una película llamada Cuatro
            bodas y un funeral:
            <br />
            <br />
            <code>
              él era mi norte mi sur mi este mi oeste
              <br />
              mi semana laboral y mi descanso dominical
              <br />
              mi medio día mi media noche mis palabras mi canción
              <br />
              creí que este amor sería para siempre: me equivoqué
              <br />
              ya no quiero las estrellas: apáguenlas todas
              <br />
              empaquen la luna y desarmen el sol
              <br />
              desborden el océano y levanten los bosques
              <br /> ya que nada ahora puede tener sentido
            </code>
          </div>
        </div>
      </div>
    </>
  );
}
