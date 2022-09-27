import '../styles/globals.css'

// https://stackoverflow.com/questions/59475858/next-js-single-page-application
// consider wix and wordpress alternatives

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
