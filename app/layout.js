import { Reddit_Mono } from "next/font/google";
import styles from './globals.css'

const redditMono = Reddit_Mono({
  subsets: ['latin'],
  variable: '--font-reddit-mono',
  display: 'swap',
});

export const metadata = {
  title: "buyTicket",
  description: "Application for searching and buying tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={redditMono.variable}>
      <body 
      // className={ redditMono.className }
      >
        <main className='main'>
          {children}
        </main>
      </body>
    </html>
  );
}
