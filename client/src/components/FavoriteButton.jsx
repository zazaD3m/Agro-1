import { useToast } from "./ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteListings,
} from "@/features/user/userSlice";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const FavoriteButton = ({
  productId,
  productTitle,
  variant = "productPage",
  isMobile,
}) => {
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

  return variant === "productPage" ? (
    <Button
      variant={isFavorite ? "action" : "actionOutline"}
      onClick={handleFavoriteToggle}
      className="size-12 shrink-0 border-2 p-0 transition-all duration-300"
    >
      <Heart />
    </Button>
  ) : variant === "carousel" ? (
    <button
      onClick={handleFavoriteToggle}
      data-isfavorite={isFavorite}
      className={cn(
        "group absolute -right-2 -top-16 rounded-b-md border  bg-background p-1 pb-2 pl-2 pr-4 pt-4 transition-all duration-300 group-hover:-top-2 data-[isfavorite=true]:-top-2",
        isMobile && "-top-2",
      )}
    >
      <Heart
        className="text-action transition-all hover:scale-105 group-data-[isfavorite=true]:fill-action group-data-[isfavorite=true]:text-white"
        size={28}
      />
    </button>
  ) : null;
};

export default FavoriteButton;
