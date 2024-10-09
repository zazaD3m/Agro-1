import { getCatType } from "@/data/categories-data";
import { useState } from "react";

const MyProductsPage = () => {
  const [state, setState] = useState("");
  return (
    <div className="animate-fadeIn duration-300">
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button
        onClick={() => {
          console.log(getCatType(parseInt(state)));
        }}
      >
        click
      </button>
    </div>
  );
};
export default MyProductsPage;
