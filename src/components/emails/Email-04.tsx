import PeopleIcon from "../../assets/useremail.png";

export default function Email04() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32">
            <img src={PeopleIcon.src} className="size-fit" />
          </div>
          <div className="p-1">
            <p className="font-bold text-lg leading-5">[URGENTE] Avistamientos detectados cerca de su área</p>

            <p className="font-mono">notifications@fbi.gov</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Email04. Espere más instrucciones de nuestra parte una vez nos aseguremos que está bien.
          </div>
        </div>
      </div>
    </>
  );
}
