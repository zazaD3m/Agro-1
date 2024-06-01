import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  getHiddenPhoneNumber,
  getPhoneNumberForHref,
  getShownPhoneNumber,
} from "@/helpers/parsePhoneNumber";
import { useLocation } from "react-router-dom";
import { Spinner } from "./ui/spinner";

const ProductPageCallNumberButton = ({
  showNumber,
  handlePhoneNumberClick,
  hrefPhoneNumber,
  shownPhoneNumber,
  handleShowNumber,
  hiddenPhoneNumber,
}) => {
  return (
    <Button
      asChild={showNumber}
      onClick={() => {
        if (!showNumber) {
          handleShowNumber();
        } else {
          handlePhoneNumberClick();
        }
      }}
      size="lg"
      variant="primary"
      className="w-full gap-x-2 font-bold lg:w-auto"
    >
      {showNumber ? (
        <a href={hrefPhoneNumber} className="flex items-center gap-x-1">
          <Phone size={18} />
          <span className="">
            <span className="opacity-70">{`(+995) `}</span>
            {shownPhoneNumber}
          </span>
        </a>
      ) : (
        <>
          <Phone size={18} />
          {hiddenPhoneNumber}
        </>
      )}
    </Button>
  );
};

const CarouselCallNumberButton = ({
  showNumber,
  handlePhoneNumberClick,
  hrefPhoneNumber,
  shownPhoneNumber,
  handleShowNumber,
  hiddenPhoneNumber,
}) => {
  return (
    <Button
      asChild={showNumber}
      variant="primary"
      onClick={() => {
        if (!showNumber) {
          handleShowNumber();
        } else {
          handlePhoneNumberClick();
        }
      }}
      className="shrink-0 rounded-full bg-primary/90 font-bold"
    >
      {showNumber ? (
        <a href={hrefPhoneNumber} className="flex items-center gap-x-1">
          <Phone size={16} />
          {shownPhoneNumber}
        </a>
      ) : (
        <span className="flex items-center gap-x-1">
          <Phone size={16} />
          {hiddenPhoneNumber}
        </span>
      )}
    </Button>
  );
};

const CallNumberButton = ({ phoneNumber, variant = "productPage" }) => {
  let location = useLocation();
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    setShowNumber(false);
  }, [location]);

  const handlePhoneNumberClick = () => {
    // if (!showNumber) {
    //   e.preventDefault();
    //   setShowNumber(true);
    // }
  };

  const handleShowNumber = () => {
    if (!showNumber) {
      setShowNumber(true);
    }
  };

  const hrefPhoneNumber = getPhoneNumberForHref(phoneNumber);
  const hiddenPhoneNumber = getHiddenPhoneNumber(phoneNumber);
  const shownPhoneNumber = getShownPhoneNumber(phoneNumber);

  return variant === "productPage" ? (
    <ProductPageCallNumberButton
      showNumber={showNumber}
      handlePhoneNumberClick={handlePhoneNumberClick}
      handleShowNumber={handleShowNumber}
      phoneNumber={phoneNumber}
      hrefPhoneNumber={hrefPhoneNumber}
      shownPhoneNumber={shownPhoneNumber}
      hiddenPhoneNumber={hiddenPhoneNumber}
    />
  ) : variant === "carousel" ? (
    <CarouselCallNumberButton
      showNumber={showNumber}
      handlePhoneNumberClick={handlePhoneNumberClick}
      handleShowNumber={handleShowNumber}
      phoneNumber={phoneNumber}
      hrefPhoneNumber={hrefPhoneNumber}
      shownPhoneNumber={shownPhoneNumber}
      hiddenPhoneNumber={hiddenPhoneNumber}
    />
  ) : (
    <Spinner />
  );
};

export default CallNumberButton;
