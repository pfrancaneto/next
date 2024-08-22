import Width from "@/components/Width";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página do Sobre'
}

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  );
}
