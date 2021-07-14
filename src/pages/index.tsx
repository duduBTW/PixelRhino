import { GetStaticPropsResult } from "next";
import { ReactElement } from "react";
import HomePage from "components/templates/templates";

interface Props{
  ip: string;
  discord: string;
  store: string;
}

export default function Home(props: Props): ReactElement {
  return (
   <HomePage {...props} />
  )
}


export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      ip: process.env.SERVER_IP ?? "Ip.placeholder.com",
      discord: process.env.DISCORD_URL ?? "",
      store: process.env.STORE_URL ?? ""
    }, 
  }
}