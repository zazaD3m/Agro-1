const TipTapCharCounter = ({ editor, limit }) => {
  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <svg className="size-5" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" className="fill-accent-dark" />
        <circle
          r="5"
          cx="10"
          cy="10"
          className="stroke-primary"
          strokeWidth="10"
          strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
          transform="rotate(-90) translate(-20)"
        />
        <circle r="6" cx="10" cy="10" className="fill-background" />
      </svg>
      <p className="text-xs">
        {editor.storage.characterCount.characters()} / {limit}
        <span className="text-xxs"> სიმბოლო</span>
      </p>
    </div>
  );
};
export default TipTapCharCounter;
