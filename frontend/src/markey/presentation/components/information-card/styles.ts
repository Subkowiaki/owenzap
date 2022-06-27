import styled from "styled-components";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";



export const Container = styled.div` 
  color: #ffff;
  height: 150px;
  margin: 0px 0px 20px 20px;
  background-color: ${MarkeyColors.brandSecondary};
  border-radius: 30px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  
  >i{
    margin-right: 10px;
    font-size: 18px;
    color: "#ffff";
  }

  >img{
    height: 110%;
    position: absolute;
    top: 0px;
    right: -15px;
    opacity: .3;
  }

  > span{
    font-size: 18px;
    font-weight: 500;
    color: #9999;
  }

  > small{
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    color:#000;
  }

  > h1{
    font-size: 60px;
    font-weight: 900;    
  }
`;