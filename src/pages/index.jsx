import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Contact } from '@/components/Contact'
import { PrimaryFeatures } from '@/components/Portfolio'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Helmet } from 'react-helmet'

export default function Home() {

  return (
    <>
      <Head>
        <title>Kimchi Digital - Website and Mobile App Development </title>
        <meta
          name="description"
          content="A york based digital agency specialising in React, React Native and Drupal."
        />
      </Head>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11405710909">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-11405710909');
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures /> 
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
