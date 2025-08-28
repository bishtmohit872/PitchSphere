// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import 'easymde/dist/easymde.min.css'
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const workSans = localFont({
  src:[
    {
      path:'./fonts/WorkSans-Black.ttf',
      weight:'900',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-ExtraBold.ttf',
      weight:'800',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-Bold.ttf',
      weight:'700',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-SemiBold.ttf',
      weight:'600',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-Medium.ttf',
      weight:'500',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-Regular.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-Black.ttf',
      weight:'900',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-Thin.ttf',
      weight:'200',
      style:'normal'
    },
    {
      path:'./fonts/WorkSans-ExtraLight.ttf',
      weight:'100',
      style:'normal'
    },
  ],
  variable:'--font-work-sans'
})

export const metadata = {
  title: "PitchSphere",
  description: "PitchSphere is a modern platform designed for startups, creators, and entrepreneurs to build compelling and investor-ready pitch decks. With smart templates, clean design, and step-by-step guidance, it transforms ideas into impactful stories that capture attention and drive results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
      </body>
    </html>
  );
}
