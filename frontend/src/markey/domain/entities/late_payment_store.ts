export interface ILatePaymentStore{
  uid: string;
  nomeEstabelecimento: string;
  telefone: string;
  dataVencimento: string;
  dataFinal: string;
  nome: string;
  totalAgendamento: number;
  email: string;
  ultimoAgendamento?: string | any;
  clientStatus?: string;
  totalPayments?: number;
  totalValue?: number;
  churnPeriod?: string;
  churnMonth?: number;
  churnYear?: number;
}
