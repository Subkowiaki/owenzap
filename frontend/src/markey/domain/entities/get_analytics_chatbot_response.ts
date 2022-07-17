import { IChatbotAnalytics } from "./chatbot_analytics";

export interface IGetAnalyticsChatbotResponse{
  allStores: string[],
  allMonthDays: IChatbotAnalytics[]
}