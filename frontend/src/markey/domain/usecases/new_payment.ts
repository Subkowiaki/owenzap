import { AdminWebApiGetway } from "../../getways/http/admin_web_api";

export async function newPayment(email: string, method: string) {
  return await new AdminWebApiGetway().postNewPayment(email, method);
}