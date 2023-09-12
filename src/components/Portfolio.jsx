import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/gradient.png'
import latushealthmock from '@/images/screenshots/latushealthmock.png'
import lawwalesmock from '@/images/screenshots/lawwalesmock.png'
import macallanmock from '@/images/screenshots/macallanmock.png'
import wateraidscreen from '@/images/screenshots/wateraidscreen.png'
import wateraidmock from '@/images/screenshots/wateraidmock.png'
import waterAidWhite from '@/images/logos/wateraid-white.webp'
import macallan from '@/images/logos/macallan.png'
import latusHorizWhite from '@/images/logos/latus-horiz-white.png'
import yodhaWhite from '@/images/logos/yodhaWhite.png'
import wgLogo from '@/images/logos/wg-logo_1.png'

const features = [
  {
    title: 'WaterAid',
    logo: waterAidWhite,
    description:
      `Via a previous role while working for Access in Manchester. Deliverables included; rolling out new interactive content such as quizzes on the site via the H5P plugin, integrating 'shorthand' for interactive pages for TV-based campaigns, re-design and launch of multiple home pages for various different WaterAid countries.`,
    image: wateraidmock
  },
  {
    title: 'The Macallan',
    logo: macallan,
    description:
      "The Macallan needed alterations to their checkout experience to handle US customers. While most customers go via their shopify checkout, US customers needed a bespoke custom React based checkout that utilised the Thristie retailer network API. Payments are taken via braintree payment gateway.",
    image: macallanmock,
  },
  {
    title: 'Latus Health',
    logo: latusHorizWhite,
    description:
      "Latus Health are an occupational health company seeing rapid growth over the past few years. In our time with them we have; delivered a custom CRM to handle client data, built and launched a bespoke EMR system (see Yodha) and accompanying mobile app as well as previously launched another wellbeing app that monitored steps, weight and diet (OK2HealthyLife).",
    image: latushealthmock,
  },
  {
    title: 'Law Wales',
    logo: wgLogo,
    description:
      "The Welsh Government required a new site to cover Welsh law. Built with Drupal, and themed to follow the government GEL style guidelines, the site also features bilingual translations in English and Welsh.",
    image: lawwalesmock,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="portfolio"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-rose-600 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          width={3045}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our previous work
          </h2>
          <p className="mt-6 text-lg tracking-tight text-rose-100">
            {`Over the years, we've worked on a variety of interesting work.`}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-rose-600 lg:text-white'
                              : 'text-rose-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          <Image
                            src={feature.logo}
                            alt={feature.title}
                            width={150}
                            height={40}
                            layout="fixed"
                            objectFit='contain'
                            unoptimized
                          />
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-rose-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        layout="fill"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
