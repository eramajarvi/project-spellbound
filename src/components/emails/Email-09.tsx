import SenderIcon from "../../assets/senderemailHD.webp";

export default function Email09() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">Llamé a un taxista no a un taxidermista</p>

            <p className="font-mono">user683h34bjk@umail.co</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Esta es la quinta vez que presento una queja formal ante ustedes y, sinceramente, ya no sé cómo explicarlo
            de manera más clara. Mi historia comienza un lunes por la mañana, cuando decidí usar una aplicación para
            solicitar un taxi. Tenía una reunión importante y el tiempo apremiaba.
            <br />
            <br />
            Algunos minutos después, un coche negro se detuvo frente a mi puerta. Al abrir la puerta, un hombre de
            aspecto extraño me sonrió. Su cabello era desordenado y llevaba una gorra de piel. Me hizo un gesto para que
            subiera. Aunque me pareció un poco raro, el tiempo no estaba de mi lado, así que decidí no pensar demasiado.
            <br />
            <br />
            Durante el trayecto, el hombre comenzó a hablarme de su afición por la taxidermia. "Es un arte muy bonito",
            dijo con una sonrisa. En ese momento, me di cuenta de que no era un taxista cualquiera. Pero, ignorando mi
            creciente incomodidad, le hice algunas preguntas sobre su trabajo.
            <br />
            <br />
            La conversación se volvió cada vez más extraña. Mientras él me hablaba sobre cómo preservaba a los animales,
            yo no podía evitar mirar por la ventana, deseando llegar a mi destino. Cada vez que mencionaba una técnica,
            una imagen de un gato disecado invadía mi mente.
            <br />
            <br />
            Finalmente, llegamos a mi oficina. Al bajarme, le dije que su enfoque era fascinante, pero que había llamado
            a un taxista, no a un taxidermista. Él se rió, como si fuera una broma, y me despidió con un saludo. Sin
            embargo, mientras me alejaba, sentí un escalofrío recorriendo mi espalda.
            <br />
            <br />
            Desde entonces, siempre reviso la calificación del conductor antes de subir. Aunque la historia fue extraña
            y, en ocasiones, divertida, aprendí que no siempre es bueno ignorar las señales. Así que, por favor, cuando
            pidan un taxi, asegúrense de que sea un taxista de verdad, no un taxidermista con sueños de conservación.
            <br />
            <br />
            Atentamente,
            <br />
            El señor que solicitó un taxista y no a un taxidermista
          </div>
        </div>
      </div>
    </>
  );
}
