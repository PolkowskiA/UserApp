import { Routes, Route, Navigate } from "react-router";
import UserForm from "../pages/UserForm";
import UserProfile from "../pages/UserProfile";
import { ROUTES } from "./routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.USER_FORM} element={<UserForm />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route
        path={ROUTES.NOT_FOUND}
        element={<Navigate to={ROUTES.USER_FORM} />}
      />
    </Routes>
  );
};
