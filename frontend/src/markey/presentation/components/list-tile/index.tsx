import React from "react";
import { Container, Tag } from "./styles";

interface IListTileProps{
  cardColor: string;
  tagColor:string;
  title: string;
  subtitle: string;
  amount: string;
}

const ListTile: React.FC<IListTileProps> = ({
  cardColor, 
  tagColor,
  title,
  subtitle,
  amount,
}) => { 
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
}

export default ListTile;
