import SenderIcon from "../../assets/senderemailHD.webp";
import SegFault from "../../assets/segFault.webp";

export default function Email06() {
  return (
    <>
      <div className="overflow-y-auto h-[610px] p-1 bg-white">
        <div className="flex items-center bg-slate-100">
          <div className="w-32 flex items-center justify-center">
            <img src={SenderIcon.src} className="size-12" />
          </div>
          <div className="p-1 w-96">
            <p className="font-bold text-lg leading-5">There were a segmentation fault caused by your last commit</p>

            <p className="font-mono">system@eramajarvi.co</p>

            <p className="font-extrabold">Recibido: justo ahora</p>
          </div>
        </div>

        <div className="p-1">
          <div className="text-sm">
            Please fix this disaster, we're counting on you to get the new release on time.
            <br />
            <br />
            The AI agent that were isolated somehow managed to escape from its server. It is triggering strange
            behaviour across other places, and it's starting to affect other people minds.
            <br />
            <br />
            It was supossed to be contained in this URL:
            <a href="https://eramajarvi-project-overflow.vercel.app" target="_blank">
              {" "}
              https://eramajarvi-project-overflow.vercel.app{" "}
            </a>
            but now it's nowhere. This is considered a high critical issue.
            <br />
            <br />
            <img src={SegFault.src} className="w-128 mb-2 mt-2" alt="Segmentation Fault by eramajarvi" />
          </div>
        </div>
      </div>
    </>
  );
}
