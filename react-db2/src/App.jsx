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
import { useEffect } from "react";
import { useDataContext } from "./hooks/useDataContext";
import { getData } from "./utils/fetchHelper";
import {
  GET_PATH_CUSTOMERS,
  GET_PATH_PETS,
  GET_PATH_VETERINARY_PRACTICES,
} from "./constants/apiRequestPaths";
import { actionTypes } from "./reducers/customReducer";

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
  const { dispatch } = useDataContext();
  const method = "GET";
  const contexts = {
    veterinaryPracticeData: GET_PATH_VETERINARY_PRACTICES,
    customerData: GET_PATH_CUSTOMERS,
    petData: GET_PATH_PETS,
  };

  useEffect(() => {
    const initializeContexts = async () => {
      for (const key in contexts) {
        const urlValue = contexts[key];
        const jsonData = await getData(urlValue, method);
        dispatch({
          type: actionTypes.INIT_CONTEXT,
          context: key,
          payload: jsonData,
        });
      }
    };
    initializeContexts();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
