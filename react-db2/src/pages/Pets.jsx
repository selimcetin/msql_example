import JsonTable from "../components/JsonTable";
import { getPetDataContext } from "../controllers/contextController";

const Pets = () => {
  return <JsonTable getContextFunction={getPetDataContext} />;
};

export default Pets;
