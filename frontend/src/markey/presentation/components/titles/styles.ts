import styled from "styled-components";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";

export const H1Container = styled.div`
  padding: 10px 0px 10px 0px;
  > h1{
    font-size: 36px;
    font-weight: 900;
    
    &::after{
      content: '';
      display: block;
      width: 36px;
      border-bottom: 10px solid ${MarkeyColors.brandPrimary};
    }
  }
`;

export const H2Container = styled.div`
> h1{
  font-size: 24px;
  font-weight: 700px;

  &::after{
    content: '';
    display: block;
    width: 24px;
    border-bottom: 5px solid ${MarkeyColors.brandPrimary};
  }
}
`;

export const H3Container = styled.div`
  > h1{
  font-size: 18px;
  font-weight: 700px;
}
`;

export const Subtitle = styled.div`
> small{
font-size: 18px;
color: #ddd
}
`;
