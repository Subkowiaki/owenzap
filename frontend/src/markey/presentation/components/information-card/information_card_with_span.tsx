import React from "react";
import ReactLoading from "react-loading";
import { SvgFactory } from "../../../utils/svg_factory";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";
import { Container } from "./styles";

interface props {
  title: string;
  value: string;
  subtitle: string;
  icon:string;
  spanClass: string,
  isLoading: boolean;
}


export const InfoCardWhitSpan: React.FC<props> = ({ title, value, subtitle, icon, isLoading, spanClass }) => {
  const urlIcon = SvgFactory(icon);  
  return (
    <Container className="shadow">
      <span><i className={spanClass}/>{title}</span>
      {isLoading ?<ReactLoading type="bars" color={MarkeyColors.brandPrimary} />:< h1 > { value }</h1>}
      <small>{subtitle}</small>
      <img src={urlIcon} alt={title}/>
    </Container>
  );
}
