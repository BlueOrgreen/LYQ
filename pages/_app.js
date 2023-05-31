import Layout from "../components/Layout"
import { Theme } from "../context/Theme"
import "../styles/globals.css"
import { wrapper } from "../store/store";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("router", router);
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default wrapper.withRedux(MyApp)
