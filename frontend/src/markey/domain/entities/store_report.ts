export interface IStoreReport{
  totalSchedulesCount?: string,
  totalValueSum?: string,
  month: number,
  year: number,
  ref: string,
  totalValue: number,
  totalSchedules: number,
  storeName: string,
  profilePic: string,
  professionals: {
    totalValue: number,
    totalSchedules: number,
    uidProfessional: string,
    name: string,
    profilePic: string,
  }[]
}