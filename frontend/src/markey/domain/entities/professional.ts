export interface IProfessional{
  nome: string;
  email: string;
  funcionamento: IOpening;
  servico: number[];
  ativo:number;
}

interface IOpening{
  dom: boolean;
  seg: boolean;
  ter: boolean;
  qua: boolean;
  qui: boolean;
  sex: boolean;
  sab: boolean;
}