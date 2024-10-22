export const RemoteFolderListItem = ({ imgSrc, text, onClick }) => {
  return (
    <li onClick={onClick}>
      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white">
        <img className="pixelated w-6" src={imgSrc} alt={text} />
        <p className="ml-1">{text}</p>
      </div>
    </li>
  );
};
