import {
  CATEGORIES,
  MAIN_CAT_ID_TO_SUB_CAT_IDS,
  MAIN_CAT_IDS,
  SUB_CAT_ID_TO_CAT_IDS,
} from "@/data/categories-data";
import { useState } from "react";

const AddNewProductCategory = () => {
  const [selectedCatType, setSelectedCatType] = useState("mainCat");
  const [selectedMainCatId, setSelectedMainCatId] = useState(null);
  const [selectedSubCatId, setSelectedSubCatId] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  return (
    <div className="flex flex-col gap-2">
      {!selectedMainCatId &&
        MAIN_CAT_IDS.map((id) => (
          <div
            key={id}
            onClick={(e) => {
              if (CATEGORIES[MAIN_CAT_ID_TO_SUB_CAT_IDS[id][0]].name) {
                setSelectedMainCatId(id);
              } else {
                setSelectedMainCatId(id);
                setSelectedSubCatId(MAIN_CAT_ID_TO_SUB_CAT_IDS[id][0]);
              }
            }}
          >
            {CATEGORIES[id].name}
          </div>
        ))}
      {selectedMainCatId &&
        !selectedSubCatId &&
        MAIN_CAT_ID_TO_SUB_CAT_IDS[selectedMainCatId].map((id) => (
          <div
            key={id}
            onClick={(e) => {
              setSelectedSubCatId(id);
            }}
          >
            {CATEGORIES[id].name}
          </div>
        ))}
      {selectedSubCatId &&
        !selectedCatId &&
        SUB_CAT_ID_TO_CAT_IDS[selectedSubCatId].map((id) => (
          <div
            key={id}
            onClick={(e) => {
              setSelectedCatId(id);
            }}
          >
            {CATEGORIES[id].name}
          </div>
        ))}
      {selectedCatId && (
        <div className="flex flex-col">
          <div>1 {selectedMainCatId}</div>
          <div>2 {selectedSubCatId}</div>
          <div>3 {selectedCatId}</div>
        </div>
      )}
    </div>
  );
};
export default AddNewProductCategory;
