import JsonTable from "../components/JsonTable";
import { getCustomerDataContext } from "../controllers/contextController";

export default function Customers() {
  return <JsonTable getContextFunction={getCustomerDataContext} />;
}
