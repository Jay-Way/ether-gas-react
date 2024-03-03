'use client'

import MainCard from "@/components/mainCard";
import {Providers} from "@/app/providers";

export default function Home() {
  return (
      <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
          <MainCard/>
      </Providers>
    );
}
