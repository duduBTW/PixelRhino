import Header from "components/features/Herder";
import IpCard from "components/features/IpCard";
import React, { ReactElement } from "react";
import { HomePageWrapper } from "./HomePage.styles";

interface Props {
  ip: string;
  discord: string;
  store: string;
}

export default function HomePage({ ip, ...rest }: Props): ReactElement {
  return (
    <HomePageWrapper>
      <Header {...rest} />
      <IpCard ip={ip} />
    </HomePageWrapper>
  );
}
