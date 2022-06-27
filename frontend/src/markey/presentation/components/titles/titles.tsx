import React from "react";
import { H1Container, H2Container, H3Container, Subtitle } from "./styles";

interface Props {
  title: string;
}

export const TitleH1: React.FC<Props> = ({title}) => {
  return (
    <H1Container>
      <h1>
        {title}
      </h1>
    </H1Container>
  );
}


export const TitleH2: React.FC<Props> = ({title}) => {
  return (
    <H2Container>
      <h1>
        {title}
      </h1>
    </H2Container>
  );
}


export const TitleH3: React.FC<Props> = ({title}) => {
  return (
    <H3Container>
      <h1>
        {title}
      </h1>
    </H3Container>
  );
}


export const SubtitleH4: React.FC<Props> = ({title}) => {
  return (
    <Subtitle>
      <small>
        {title}
      </small>
    </Subtitle>
  );
}