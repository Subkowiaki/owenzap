import { AdminWebApiGetway } from "../../getways/http/admin_web_api";

export async function getChurn() {
  const churnData = await new AdminWebApiGetway().getChurn();
  return churnData;
}