export interface ILineChart {
  data: any[];
  lines: {
    title: string;
    color: string;
    dataKey: string;
  }[];  
  XAxisKey: string;
} 
