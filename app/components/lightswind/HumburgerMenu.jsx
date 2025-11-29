import { Home, Search, User, Settings } from "lucide-react";
import HamburgerMenuOverlay from "@/src/components/lightswind/hamburger-menu-overlay";
import React from "react";

const HumburgerMenu = () => {
  const menuItems = [
    {
      label: "Home",
      icon: <Home size={20} />,
      href: "/",
    },
    {
      label: "About me",
      icon: <User size={20} />,
    },
    { label: "Portfolio", icon: <Settings size={20} />, href: "/settings" },
    { label: "Message", icon: <Search size={20} />, href: "/search" },
  ];
  <HamburgerMenuOverlay items={menuItems} />;
  return (
    <div>
      <HamburgerMenuOverlay
        items={menuItems}
        overlayBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        fontSize="xl"
        enableBlur={true}
        menuAlignment="center"
        animationDuration={1}
      />
      <HamburgerMenuOverlay
        items={menuItems}
        buttonColor="#000"
        buttonTop="30px"
        buttonLeft="30px"
        // buttonColor="#22c55e"
        textColor="#f8bd49"
        overlayBackground="#131313"
      />
    </div>
  );
};

export default HumburgerMenu;
