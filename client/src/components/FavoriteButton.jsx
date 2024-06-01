import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { useToast } from "./ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteListings,
} from "@/features/user/userSlice";

const FavoriteButton = React.forwardRef(
  ({ productId, productTitle, ...props }, ref) => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const favoriteListings = useSelector(selectFavoriteListings);
    const isFavorite = favoriteListings.includes(productId);

    const handleFavoriteToggle = () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(productId));
        toast({
          title: `${productTitle}`,
          description: "წაშლილია ფავორიტებიდან!",
        });
      } else {
        dispatch(addToFavorites(productId));
        toast({
          title: `${productTitle}`,
          description: "შენახულია ფავორიტებში!",
        });
      }
    };
    return (
      <Slot
        ref={ref}
        data-isfavorite={isFavorite}
        onClick={handleFavoriteToggle}
        {...props}
      />
    );
  },
);

export default FavoriteButton;

FavoriteButton.displayName = "FavoriteButton";
