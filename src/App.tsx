import { BrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import { AppRoutes } from "./routing/AppRoutes";
import { NavProvider } from "./contexts/NavContext";

function App() {
  return (
    <BrowserRouter>
      <NavProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </NavProvider>
    </BrowserRouter>
  );
}

export default App;
