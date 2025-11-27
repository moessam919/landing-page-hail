import localFont from "next/font/local";

export const diodrum = localFont({
  src: [
    {
      path: "./../public/fonts/diodrum/DiodrumCyrillic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/diodrum/DiodrumCyrillic-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../public/fonts/diodrum/DiodrumCyrillic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-diodrum",
});
