import styled from "styled-components";
export const TitleContainer = styled.div`
  > h1{
    color: #9999;   
        
    &::after{
      content: '';
      display: block;
      width: 36px;
      border-bottom: 5px solid #1acccc;
    }
  }
`;