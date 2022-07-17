export interface IBilling{
  method: string,
  uid: string,
  email: string,
  date: Date | any,
  value: number,
  year: number,
  month: number,
  plan: number,
  id?: string,
}
