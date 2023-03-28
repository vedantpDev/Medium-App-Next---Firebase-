import "@/styles/globals.css";
import { MediumProvider } from "@/context/mediumContext";

export default function App({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}
