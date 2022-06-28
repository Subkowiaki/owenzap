import styled from "styled-components";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";

interface Iprop{
  color: string
}
export const Container = styled.li`
  background-color: ${MarkeyColors.light};

  list-style: none;
  border-radius: 4px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all .3s;
  
  position: relative;

  &:hover{
    opacity: .7;
    transform: translateX(10px)
  }

  >div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    > span{
      font-weight: 700;  
      font-size: 18px; 
    }
  }
`;

export const Tag = styled.div<Iprop>`
  width: 10px;
  height: 100%;
  background-color: ${props => props.color};
  position: absolute;
  left: 0;
  border-radius:4px 0 0 4px;
`;
