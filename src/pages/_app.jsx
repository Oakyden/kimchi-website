import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    {/**Ad Words */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11405710909" />
    <Script id ="adwords">
      {  `      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
  
        gtag('config', 'AW-11405710909');`}

    </Script>
    {/** Data Stream / Tag Manager */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ENHZGQ4085"></Script>
    <Script id="analytics / data stream">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ENHZGQ4085');`}
    </Script>
    </>
  )

}
