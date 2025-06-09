import { SideNav, SideNavItems, SideNavLink } from "@carbon/react";
import { Link, useLocation } from "react-router";
import { useNav } from "../contexts/NavContext";
import { ROUTES } from "../routing/routes";
import { isActivePath } from "../routing/roating";

const SiedNavigation = () => {
  const { pathname } = useLocation();
  const { isNavExpanded, expandNav } = useNav();

  const handleCloseNav = () => {
    setTimeout(() => {
      expandNav((prev) => !prev);
    }, 250);
  };

  return (
    <SideNav aria-label="User App" expanded={isNavExpanded} isFixedNav>
      <SideNavItems aria-label="App Navigation">
        <SideNavLink
          as={Link}
          to={ROUTES.USER_FORM}
          isActive={isActivePath(ROUTES.USER_FORM, pathname)}
          onClick={handleCloseNav}
        >
          User Form
        </SideNavLink>
        <SideNavLink
          as={Link}
          to={ROUTES.USER_PROFILE}
          isActive={isActivePath(ROUTES.USER_PROFILE, pathname)}
          onClick={handleCloseNav}
        >
          User Profile
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default SiedNavigation;
