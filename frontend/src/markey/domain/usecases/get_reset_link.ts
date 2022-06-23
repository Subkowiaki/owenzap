import { AdminWebApiGetway } from "../../getways/http/admin_web_api";

export function getResetLink(email:string) {
  const link = new AdminWebApiGetway().getResetLink(email);
  return link;
}