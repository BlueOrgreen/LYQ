import Layout from "../components/Layout"
import { Theme } from "../context/Theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {

  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default MyApp
