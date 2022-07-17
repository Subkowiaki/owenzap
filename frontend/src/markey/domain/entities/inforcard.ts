
export interface IInfoCardInterface {
  title: string,
  subtitle: string,
  color: "success" | "info" | "warning"| "danger",
  value: string,
  icon: "money" | "down" | "up" | "barber" | "chatbot",
  onClick: Function  | undefined
} 
