import { Header, HeaderMenuButton, HeaderName, Theme } from "@carbon/react";
import logo from "../assets/logo.svg";
import { useNav } from "../contexts/NavContext";
import SiedNavigation from "./SideNavigation";
import styles from "./Header.module.css";
import { AppHeaderNavigation } from "./AppHeaderNavigation";

const AppHeader = () => {
  const { expandNav, isNavExpanded } = useNav();
  const handleHeaderMenuButtonClick = () => {
    expandNav((prev) => !prev);
  };

  return (
    <Header aria-label="User Profile App">
      <HeaderMenuButton
        isActive={isNavExpanded}
        onClick={handleHeaderMenuButtonClick}
      />
      <img src={logo} className={styles.logo} alt="logo" />
      <HeaderName prefix="">User Profile App</HeaderName>
      <AppHeaderNavigation />
      <Theme theme="g100">
        <SiedNavigation />
      </Theme>
    </Header>
  );
};

export default AppHeader;
