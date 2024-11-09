import { useNavigate, useOutletContext } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useLayoutEffect, useState } from "react";
import MyProductsControl from "./MyProductsControl";

const MyProductsActive = () => {
  const navigate = useNavigate();
  const { products } = useOutletContext();
  const [isAllIdsSelected, setIsAllIdsSelected] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const isProductSelected = selectedIds.length > 0;

  console.log(products);
  console.log(isAllIdsSelected);
  console.log(selectedIds);

  useLayoutEffect(() => {
    if (products.length === 0) {
      navigate("/account/my-products", { replace: true });
    }
  }, [products]);

  const handleAllIdsSelected = () => {
    if (isAllIdsSelected) {
      setIsAllIdsSelected((p) => !p);
      setSelectedIds([]);
    } else {
      setIsAllIdsSelected((p) => !p);
      setSelectedIds(products.map((p) => p._id));
    }
  };

  const handleSelectedIds = (_id) => {
    if (selectedIds.includes(_id)) {
      setSelectedIds((p) => p.filter((id) => id !== _id));
      if (isAllIdsSelected) {
        setIsAllIdsSelected((p) => !p);
      }
    } else {
      if (products.length - 1 === selectedIds.length) {
        setIsAllIdsSelected((p) => !p);
      }
      setSelectedIds((p) => [...p, _id]);
    }
  };

  const handleCloseControl = () => {
    setSelectedIds([]);
    setIsAllIdsSelected(false);
  };

  return (
    <div className="h-full w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                checked={isAllIdsSelected}
                onCheckedChange={handleAllIdsSelected}
              />
            </TableHead>
            <TableHead className="w-[100px]">სათაური</TableHead>
            <TableHead>ფასი</TableHead>
            <TableHead>ვადა</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="">
                <Checkbox
                  checked={selectedIds.includes(product._id)}
                  onCheckedChange={() => handleSelectedIds(product._id)}
                />
              </TableCell>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
      {isProductSelected && (
        <MyProductsControl
          pageActive={true}
          selectedIds={selectedIds}
          handleCloseControl={handleCloseControl}
        />
      )}
    </div>
  );
};
export default MyProductsActive;
