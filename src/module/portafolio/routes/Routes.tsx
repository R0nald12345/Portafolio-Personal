import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Informacion from "../page/Informacion";
//import DashboardLayout from "./DashboardLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal con DashboardLayout */}
        <Route path="/" element={<DashboardLayout/>}>
          {/* Aquí puedes definir rutas hijas */}
          {/* <Route index element={<h1>Bienvenido al Dashboard</h1>} /> */}
          {/* Ejemplo de otra ruta */}
          {/* <Route path="perfil" element={<h1>Página de Perfil</h1>} /> */}
          <Route
            index
            element={<Informacion/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
