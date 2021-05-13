import Toolbar from "../Components/Toolbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Toolbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
