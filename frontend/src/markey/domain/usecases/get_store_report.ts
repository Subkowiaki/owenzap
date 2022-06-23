import * as lodadh from "lodash";
import { AdminWebApiGetway } from "../../getways/http/admin_web_api";
import { valueFormaterBrl } from "../../utils/value_formater_brl";

export async function getStoreReport(email: string) {
  const fullReport = await new AdminWebApiGetway().getStoreReport(email);
  const date = new Date();
  let schadulesSum = 0;
  let schadulesCount = 0;  

  const filter = lodadh.filter(fullReport, ({ year, month, totalSchedules, totalValue }) => { 
    const success = (year <= date.getFullYear() && (month - 1) <= date.getMonth());
    if (success) {
      schadulesSum = schadulesSum + totalValue;
      schadulesCount = schadulesCount + totalSchedules;
    }
    return success;
  });

  filter[0].totalSchedulesCount = schadulesCount.toString();
  filter[0].totalValueSum = valueFormaterBrl(schadulesSum);

  return filter;
}