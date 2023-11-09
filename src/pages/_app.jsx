import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11405710909" />
    <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
  
        gtag('config', 'AW-11405710909');
    </Script>
    </>
  )

}
