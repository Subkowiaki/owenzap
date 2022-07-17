import styled from "styled-components";
export const TitleContainer = styled.div`
  > h1{
    color: ${props => props.theme.colors.text};   
        
    &::after{
      content: '';
      display: block;
      width: 36px;
      border-bottom: 5px solid ${props => props.theme.colors.text};
    }
  }
`;