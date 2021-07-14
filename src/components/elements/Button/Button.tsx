import React, { ReactElement } from "react";
import { ButtonVariant, ButtonWrapper } from "./Button.styles";

type Props = {
  url: string;
  label: string;
  onClick?: () => void;
  variant: ButtonVariant;
};

export default function Button({
  label,
  onClick,
  variant,
  url,
}: Props): ReactElement {
  return (
    <ButtonWrapper
      target="_blank"
      href={url}
      className="button"
      onClick={onClick}
      variant={variant}
    >
      {label}
    </ButtonWrapper>
  );
}
