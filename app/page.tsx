"use client";

import MainCard from "@/components/mainCard";
import { Providers } from "@/app/providers";
import '../i18nconfig';

export default function Home() {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <MainCard />
    </Providers>
  );
}
