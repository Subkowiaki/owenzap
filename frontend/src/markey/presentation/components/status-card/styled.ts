import styled from "styled-components";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";

interface IContainerProps{
  color: string;
}

export const Card = styled.div`
  border-radius: 18px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  margin: 10px; 
 
  > h1{
    font-size: 32px;
    font-weight: 900;    
  }
`;

export const TitleCard = styled.div<IContainerProps>`
  display: inline;
  justify-content: center;

  > h1{
    color: #000;    

  &::after{
    content: '';
    display: block;
    width: 36px;
    border-bottom: 5px solid ${(props) => {
    if (props.color === "danger") {
      return MarkeyColors.danger;
    }
    return MarkeyColors.success;
  }
  };
  }
}`;

export const IconCard = styled.i<IContainerProps>`
 color: ${(props) => {
    if (props.color === "danger") {
      return MarkeyColors.danger;
    }
    return MarkeyColors.success;
  }
};
`;