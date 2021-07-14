import { css } from "@emotion/react";
import styled from "@emotion/styled";

export enum ButtonVariant {
  outlined,
  contained,
}

interface ButtonProps {
  variant: ButtonVariant;
}

const outlined = css`
  background: white;
  color: #262626;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);

  :hover {
    background: #f8f8f8;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const contained = css`
  background: #262626;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;

  :hover {
    background: #000000;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonWrapper = styled.a<ButtonProps>`
  text-decoration: none;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;

  flex: 1;
  border: none;
  outline: none;

  min-height: 40px;
  border-radius: 30px;
  padding: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;

  ${({ variant }) =>
    variant === ButtonVariant.contained ? contained : outlined}
`;
