import barber from "../../assets/barber.svg";
import calendar from "../../assets/calendar.svg";
import money from "../../assets/money.svg";
import robot from "../../assets/robot.svg";
import h24 from "../../assets/24h.svg";
import mes from "../../assets/mes.svg"; 
import headphone from "../../assets/headphone.svg";

export function SvgFactory(icon: string) {
  switch (icon) {
    case "money":
      return money;
    case "robot":
      return robot;
    case "barber":
      return barber;
    case "calendar":
      return calendar;  
    case "24h":
      return h24;
    case "mes":
      return mes;
    case "headphone":
      return headphone;
    
    default:
      return barber;
  }
}