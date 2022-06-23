import { AdminWebApiGetway } from "../../getways/http/admin_web_api";
import { ILatePaymentStore } from "../entities/late_payment_store";

export async function getLatePayment(){
  return await new AdminWebApiGetway().getLatePayment()as ILatePaymentStore[];    
}