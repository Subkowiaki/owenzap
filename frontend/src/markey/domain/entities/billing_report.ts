import { IBilling } from "./billing";
import { IBillingMonthResume } from "./billing_month_resume";

export interface IBillingReport{
  targetAllPayments: IBilling[],
  allPayments: IBilling[],
  targetResumeData: IBillingMonthResume[],
  resumeData: IBillingMonthResume[],
}