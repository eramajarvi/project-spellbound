export const EmailsListItem = ({ contactSrc, headerText, previewText, onClick }) => {
  return (
    <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5" onClick={onClick}>
      <div className="w-8">
        <img className="pixelated" src={contactSrc} />
      </div>
      <div className="ml-3">
        <p className="leading-4 font-semibold">{headerText}</p>
        <p className="leading-4">{previewText}</p>
      </div>
    </li>
  );
};
