import "../styles/global.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sourceSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
