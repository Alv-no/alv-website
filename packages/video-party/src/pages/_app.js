import "../styles/global.css";
import { Source_Sans_Pro } from "next/font/google";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sourceSansPro.className}>
      <Component {...pageProps} />
    </main>
  );
}
