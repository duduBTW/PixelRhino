import MainTitle from "components/elements/MainTitle";
import MainButtonGroup from "components/modules/MainButtonGroup";
import React, { ReactElement } from "react";
import { HeaderBackground, HeaderWrapper } from "./Header.styles";

interface Props {
  discord: string;
  store: string;
}

export default function Header(props: Props): ReactElement {
  return (
    <HeaderWrapper className="header">
      <HeaderBackground />
      <MainTitle label="PixelRhino" />
      <MainButtonGroup {...props} />
    </HeaderWrapper>
  );
}
