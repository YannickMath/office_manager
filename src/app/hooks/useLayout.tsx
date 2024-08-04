import React, { useState } from "react";

const useLayout = () => {
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = React.useState(false);
  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setToggleMenuIsOpen(!toggleMenuIsOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  return {
    isTransparent,
    toggleMenuIsOpen,
    handleOpenMenu,
    handleScroll,
  };
};

export default useLayout;
