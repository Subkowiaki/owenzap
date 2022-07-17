import axios from "axios";

import { IHealthCheck } from "../../domain/entities/health_check";
import { IBilling } from "../../domain/entities/billing";
import { ILatePaymentStore } from "../../domain/entities/late_payment_store";
import { IStoreReport } from "../../domain/entities/store_report";
import { EConnections } from "../connections";
import { EAdminWebAPI } from "../endpoints";
import { IHomeDashBoard } from "../../domain/entities/home_dashboard";

export class AdminWebApiGetway{ 
  async getHomeData(year: number, month: number) {
    const url = `${EAdminWebAPI.getHomeData}?month=${month}&year=${year}`;
    return await httpConnectionGet(url) as IHomeDashBoard;  
  }

  async getResetLink(email: string) {
    const url = `${EAdminWebAPI.getPasswordReset}?email=${email}`;
    const linkData = await httpConnectionGet(url);    
    return linkData.link;
  }

  async getHealthCheck(email:string) {
    const url = `${EAdminWebAPI.getHealthCheck}?email=${email}`;
    return await httpConnectionGet(url) as IHealthCheck;
  }

  async getLastPayments() {
    const url = `${EAdminWebAPI.getLastPayments}`;
    return await httpConnectionGet(url) as IBilling[];
  }

  async getLatePayment() {
    return await httpConnectionGet(EAdminWebAPI.getLatePayment) as ILatePaymentStore[];
  }

  async getChurn() {
    return await httpConnectionGet(EAdminWebAPI.getChurn) as ILatePaymentStore[];
  }

  async getStoreReport(email: string) {
    return await httpConnectionGet(`${EAdminWebAPI.getStoreSalesReport}?email=${email}`) as IStoreReport[];
  }

  async postNewPayment(email: string, method: string) {
    const url = `${EAdminWebAPI.postNewPayment}`;
    const body = {
      email,
      method
    };

    return await httpConnectionPost(url, body);
  }  
}

async function httpConnectionGet(url: string) {
  const baseUrl = EConnections.markeyWebAdmin;
  const _url = `${baseUrl}${url}`;;

  return axios.get(_url).then((response) => {  
    return response.data;
  }); 
}

async function httpConnectionPost(url: string, body: any) {
  const baseUrl = EConnections.markeyWebAdmin;
  const _url = `${baseUrl}${url}`;

  return axios.post(_url, body).then((response) => {  
    return response.data;
  }); 
}