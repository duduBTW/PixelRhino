import React, { useState } from "react";
import { IpCardWrapper, IpTitle, IpSubTitle } from "./IpCard.styles";

interface Props {
  ip: string;
}

export default function IpCard({ ip }: Props) {
  const defMessage = "Clique para copiar";
  const [message, setMessage] = useState(defMessage);

  const copyIp = () => {
    var range = document.createRange();
    var ipNode = document.getElementById("ip");
    if (ipNode) {
      range.selectNode(ipNode);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();

      setMessage("Ip copiado!");

      setTimeout(() => {
        setMessage(defMessage);
      }, 3000);
    }
  };

  return (
    <IpCardWrapper onClick={copyIp} className="ip-card">
      <IpTitle id="ip">{ip}</IpTitle>
      <IpSubTitle>{message}</IpSubTitle>
    </IpCardWrapper>
  );
}
