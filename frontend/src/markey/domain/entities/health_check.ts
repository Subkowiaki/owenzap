import { IProfessional } from "./professional";
import { IService } from "./service";
import { IStore } from "./store";
import { IStoreCheckStatus } from "./store_check_status";

export interface IHealthCheck{
  storeData: IStore;
  professionals: IProfessional[];
  services: IService[];
  storeCheck: IStoreCheckStatus
}