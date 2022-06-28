import React from "react";
import { TitleContainer } from "./styles";

interface ISubtitle{
  title: string; 
}

const ContentSubtitle: React.FC<ISubtitle> = ({ title }) => { 
  return (   
      <TitleContainer>
       <h1>{title}</h1>
      </TitleContainer>        
  );
}

export default ContentSubtitle;