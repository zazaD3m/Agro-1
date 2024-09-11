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

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    <button
      onClick={handleFavoriteToggle}
      data-isfavorite={isFavorite}
      className={cn(
        "group/button flex size-12 shrink-0 items-center justify-center rounded-md bg-accent",
        isMobile && "",
      )}
    >
      <Heart
        className="text-teal-900 group-data-[isfavorite=true]/button:fill-action group-data-[isfavorite=true]/button:text-action lg:group-hover/button:text-action"
        size={20}
        strokeWidth={2.5}
      />
    </button>
  ) : variant === "carousel" ? (
    <button
      onClick={handleFavoriteToggle}
      data-isfavorite={isFavorite}
      className={cn(
        "group/button rounded-md bg-accent p-1.5 shadow-md transition-all duration-300 xs:p-2 sm:p-2.5",
        isMobile && "",
      )}
    >
      <Heart
        className="text-teal-900 group-data-[isfavorite=true]/button:fill-action group-data-[isfavorite=true]/button:text-action lg:group-hover/button:text-action"
        size={20}
        strokeWidth={2.5}
      />
    </button>
  ) : variant === "catalogPage" ? (
    <button
      onClick={handleFavoriteToggle}
      data-isfavorite={isFavorite}
      className={cn(
        "group/button rounded-md bg-accent p-1.5 shadow-md transition-all duration-300 xs:p-2 sm:p-2.5",
        isMobile && "",
      )}
    >
      <Heart
        className="text-teal-900 group-data-[isfavorite=true]/button:fill-action group-data-[isfavorite=true]/button:text-action lg:group-hover/button:text-action"
        size={20}
        strokeWidth={2.5}
      />
    </button>
  ) : null;
};

export default FavoriteButton;
