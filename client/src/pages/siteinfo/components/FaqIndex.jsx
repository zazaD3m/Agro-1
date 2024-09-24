import { FilePlus, UserCog } from "lucide-react";
import { Link } from "react-router-dom";

const FaqIndex = () => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      <Link
        to="registracia-angarishis-martva"
        className="flex flex-col items-center gap-4 rounded-lg border-2 bg-background px-4 py-8 shadow-sm transition-all hover:shadow-md"
      >
        <UserCog size={28} className="text-primary" />
        <span>რეგისტრაცია/ანგარიშის მართვა</span>
      </Link>
      <Link
        to="rogor-davamato-gancxadeba"
        className="flex flex-col items-center gap-4 rounded-lg border-2 bg-background px-4 py-8 shadow-sm transition-all hover:shadow-md"
      >
        <FilePlus size={28} className="text-primary" />
        <span>როგორ დავამატო განცხადება</span>
      </Link>
    </div>
  );
};
export default FaqIndex;
