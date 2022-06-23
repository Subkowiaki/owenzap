import { IService } from "./service";

export interface IStore{
  nomeEstabelecimento?: string;
  nome?: string;
  ativo?: number;
  email?: string;
  dataVencimento?: string;
  uidEstabelecimento?: string;
  link?: string;
  statusPagamento?: number;
  hash?: string;
  servico?: IService[];
}
