import { AdminWebApiGetway } from "../../getways/http/admin_web_api";

export async function getHealthCheck(email: string) {
  const data = await new AdminWebApiGetway().getHealthCheck(email);
  return data;
}
