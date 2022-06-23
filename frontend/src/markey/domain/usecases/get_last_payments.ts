import { AdminWebApiGetway } from "../../getways/http/admin_web_api";
import { IBilling } from "../entities/billing";

export async function getLastPayment(){
  return await new AdminWebApiGetway().getLastPayments() as IBilling[];
}