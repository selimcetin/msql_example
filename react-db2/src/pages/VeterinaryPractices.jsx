import JsonTable from "../components/JsonTable";
import { getVeterinaryDataContext } from "../controllers/contextController";

const VeterinaryPractices = () => {
  return <JsonTable getContextFunction={getVeterinaryDataContext} />;
};

export default VeterinaryPractices;
