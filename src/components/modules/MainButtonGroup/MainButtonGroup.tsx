import Button from "components/elements/Button";
import { ButtonVariant } from "components/elements/Button/Button.styles";
import React, { ReactElement } from "react";
import { MainButtonGroupWrapper } from "./MainButtonGroup.styles";

interface Props {
  discord: string;
  store: string;
}

export default function MainButtonGroup({
  discord,
  store,
}: Props): ReactElement {
  return (
    <MainButtonGroupWrapper>
      <Button url={store} variant={ButtonVariant.outlined} label="Loja" />
      <Button url={discord} variant={ButtonVariant.contained} label="Contato" />
    </MainButtonGroupWrapper>
  );
}
