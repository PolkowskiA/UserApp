import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type NavContextType = {
  isNavExpanded: boolean;
  expandNav: Dispatch<SetStateAction<boolean>>;
};
const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <NavContext.Provider
      value={{ isNavExpanded: isExpanded, expandNav: setIsExpanded }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav doesn't exist");
  return context;
};
