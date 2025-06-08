import { matchPath } from "react-router";

export const isActivePath = (
  currentPath: string,
  targetPath: string
): boolean => {
  return !!matchPath({ path: targetPath, end: false }, currentPath);
};
