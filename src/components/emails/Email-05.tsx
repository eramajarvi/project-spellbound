import SenderIcon from "../../assets/senderemailHD.webp";

export default function Email05() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">Vomistar te envía la factura de tu servicio</p>

            <p className="font-mono">facturas@vomistar.com</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Estimado cliente, adjunto encontrará la factura para este mes.
            <br />
            <br />
            <p className="font-semibold">Total a pagar:</p>
            $5 millones de dólares
            <br />
            <br />
            <p className="font-semibold">Fecha límite de pago:</p>
            Ayer
            <br />
            <br />
            <p className="font-semibold">Aviso:</p>
            Dado que se ha tartado más de 10 segundos en pagarnos, ahora le demandaremos y haremos un reporte a todas
            las centrales de riesgo en contra suya.
            <br />
            <br />
            Gracias por usar nuestros servicios.
          </div>
        </div>
      </div>
    </>
  );
}
