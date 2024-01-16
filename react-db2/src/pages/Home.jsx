import { useEffect } from "react";
import { useDataContext } from "../hooks/useDataContext";
import { getData } from "../utils/fetchHelper";
import {
  GET_PATH_CUSTOMERS,
  GET_PATH_PETS,
  GET_PATH_VETERINARY_PRACTICES,
} from "../constants/apiRequestPaths";
import { actionTypes } from "../reducers/customReducer";
import VeterinaryPracticeModal from "../components/modals/VeterinaryPracticeModal";
import CustomerModal from "../components/modals/CustomerModal";
import PetModal from "../components/modals/PetModal";

const Home = () => {
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

  return <div></div>;
};

export default Home;
