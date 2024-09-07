// import { Roboto_Serif } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Roboto:['Roboto','serif'],
      },
      // colors: {
      //   primary:'#026DEB',
      //   secondary:'#15171C',
      
      // },
    }
  },
  
 plugins: [],
};
export default config;
