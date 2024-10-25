export const EmailToolBar = ({ iconSrc, buttonLabel, onClick, isAnswer }) => {
  return (
    <div className="h-10 flex items-center">
      <button className="flex items-center mx-0.5 h-6">
        <img src={iconSrc} className="size-4 -ml-1 mr-1" />
        <p>{buttonLabel}</p>
      </button>
    </div>
  );
};
