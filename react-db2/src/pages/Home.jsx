import { useEffect } from "react";
import FormModal from "../components/FormModal";
import CustomerForm from "../components/CustomerForm";
import { useDataContext } from "../hooks/useDataContext";
import { getData } from "../utils/fetchHelper";
import {
  GET_PATH_CUSTOMERS,
  GET_PATH_PETS,
  GET_PATH_VETERINARY_PRACTICES,
} from "../constants/apiRequestPaths";

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
          type: "INIT_CONTEXT",
          context: key,
          payload: jsonData,
        });
      }
    };
    initializeContexts();
  }, []);

  return (
    <div>
      <FormModal title="Customer" buttonText="Add Customer">
        <CustomerForm />
      </FormModal>
    </div>
  );
};

export default Home;
