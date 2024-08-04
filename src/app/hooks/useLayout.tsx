import React, { useState } from "react";

const useLayout = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  return {
    isTransparent,
    handleScroll,
  };
};

export default useLayout;
