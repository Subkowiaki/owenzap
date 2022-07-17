import React from "react";
import ReactLoading from "react-loading";
import { SvgFactory } from "../../../utils/svg_factory";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";
import { Container } from "./styles";

interface props {
  title: string;
  value: string;
  subtitle: string;
  icon: "money" | "robot" | "barber" | "calendar";
  isLoading: boolean;
}


export const InfoCard: React.FC<props> = ({ title, value, subtitle, icon, isLoading }) => {
  const urlIcon = SvgFactory(icon);  
  return (
    <Container className="shadow">
      <span>{title}</span>
      {isLoading ?<ReactLoading type="bars" color={MarkeyColors.brandPrimary} />:< h1 > { value }</h1>}
      <small>{subtitle}</small>
      <img src={urlIcon} alt={title}/>
    </Container>
  );
}
