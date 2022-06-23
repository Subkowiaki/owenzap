export interface IStoreCheckStatus{
  geoHash: boolean;
  openDays: boolean;
  services: boolean;
  professionals: boolean;
  geoHashMessage?: string;
  openDaysMessage?: string;
  servicesMessage?: string;
  professionalsMessage?: string;
}