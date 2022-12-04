import React from "react";
import {Title} from "./styles"
import {TitleSmall} from "./styles"

export default function Titles() {
  return (
    <div className="titles">
      <Title fontSize={20}>
        TypeScript
        <span>Texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}
