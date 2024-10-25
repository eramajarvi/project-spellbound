export const EmailsListItem = ({ contactSrc, headerText, previewText, onClick, isSelected }) => {
  return (
    <li
      className={`flex items-center ${isSelected ? "bg-[#3d64bd] text-white" : "hover:bg-[#3d64bd] hover:text-white"}  p-1.5`}
      onClick={onClick}
    >
      <div className="size-8">
        <img className="pixelated" src={contactSrc} />
      </div>
      <div className="ml-3 w-72">
        <p className="leading-4 font-semibold">{headerText}</p>
        <p className="leading-4">{previewText}</p>
      </div>
    </li>
  );
};
