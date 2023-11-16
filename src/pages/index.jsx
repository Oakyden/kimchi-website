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

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimchi Digital - Website and Mobile App Development </title>
        <meta
          name="description"
          content="A York based web development and mobile app development agency specialising in React, React Native and Drupal."
        />
      </Head>
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
