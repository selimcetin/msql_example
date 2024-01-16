import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import VeterinaryPractices from "./pages/VeterinaryPractices";
import Customers from "./pages/Customers";
import DataContextProvider from "./context/DataContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="veterinary_practices" element={<VeterinaryPractices />} />
      <Route path="customers" element={<Customers />} />
      <Route path="pets" element={<Pets />} />
    </Route>
  )
);

function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  );
}

export default App;
