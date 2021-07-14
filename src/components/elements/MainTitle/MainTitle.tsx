import React, { ReactElement } from "react";
import {
  MainTitleWrapper,
  MainTitleContent,
  MainTitleShadow,
} from "./MainTitle.styles";

type Props = {
  label: string;
};

export default function MainTitle({ label }: Props): ReactElement {
  const repeat = [50, 40, 30, 20];

  return (
    <MainTitleWrapper>
      <MainTitleContent>{label}</MainTitleContent>
      {repeat.map((r, index) => (
        <MainTitleShadow opacity={r} offset={(index + 1) * 3} key={r}>
          {label}
        </MainTitleShadow>
      ))}
    </MainTitleWrapper>
  );
}
