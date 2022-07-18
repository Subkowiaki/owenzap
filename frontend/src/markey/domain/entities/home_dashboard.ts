
import { IBillingReport } from "./billing_report";
import { IGetAnalyticsChatbotResponse } from "./get_analytics_chatbot_response";

export interface IHomeDashBoard{
  payments: IBillingReport,
  chatbot: IGetAnalyticsChatbotResponse,
}