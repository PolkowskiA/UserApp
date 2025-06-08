import { HeaderMenuItem, HeaderNavigation } from "@carbon/react";
import { Link, useLocation } from "react-router";
import { isActivePath } from "../routing/roating";
import { ROUTES } from "../routing/routes";

export const AppHeaderNavigation = () => {
  const { pathname } = useLocation();
  return (
    <HeaderNavigation>
      <HeaderMenuItem
        id="nav-link-user-form"
        as={Link}
        to={ROUTES.USER_FORM}
        isActive={isActivePath(ROUTES.USER_FORM, pathname)}
      >
        User From
      </HeaderMenuItem>
      <HeaderMenuItem
        id="nav-link-user-profile"
        as={Link}
        to={ROUTES.USER_PROFILE}
        isActive={isActivePath(ROUTES.USER_PROFILE, pathname)}
      >
        User Info
      </HeaderMenuItem>
    </HeaderNavigation>
  );
};
