import type { Metadata } from "next";
import HomePage from "./_components/home/home-page";

export const metadata: Metadata = {
  title: "KBM - Beranda",
};

export default function Home() {
  return <HomePage />;
}
