import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import { getData } from "./utils/fetchHelper";
import VeterinaryPractices from "./pages/VeterinaryPractices";
import Customers from "./pages/Customers";
import DataContextProvider from "./context/DataContextProvider";
import {
  GET_PATH_VETERINARY_PRACTICES,
  GET_PATH_CUSTOMERS,
  GET_PATH_PETS,
} from "./constants/apiRequestPaths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="veterinary_practices"
        element={<VeterinaryPractices />}
        loader={() => getData(GET_PATH_VETERINARY_PRACTICES, "GET")}
      />
      <Route
        path="customers"
        element={<Customers />}
        loader={() => getData(GET_PATH_CUSTOMERS, "GET")}
      />
      <Route
        path="pets"
        element={<Pets />}
        loader={() => getData(GET_PATH_PETS, "GET")}
      />
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
