import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import yodhaAppStore from '@/images/screenshots/yodha-store.webp'
import rmn from '@/images/screenshots/rmn-appstore.webp'
import outokumpu from '@/images/screenshots/outokumpu.webp'

const features = [
  {
    name: 'Reward Me Now',
    summary:
      'Reward Me Now is a voucher app with built in health rewards',
    description:
      'Partnering with hundreds of brands, Reward Me Now is an app that gives large discounts to its users, whilst also allowing organisations to sign up and set a health rewards plan for their employees. Increased physical activity each week rewards credits that can be spent on big name brands.',
    image: rmn,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Yodha',
    summary: "A web app and mobile app, together providing the world's first 'connected health platform'",
    description:
      "Yodha is Latus Health's all new connected health platform. The web app provides a dashboard for appointment scheduling as well as medical data capturing, while the accompanying mobile app provides wellbeing perks to staff via third party integrations such as vouchers off big brands through the Simfoni retailer network, with GP and counselling through Health Hero.",
    image: yodhaAppStore,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path d="M161.64,129.41c0,6.62-.06,13.24,0,19.86.12,12.18,10.31,23.24,22.21,24.16,14.3,1.11,26.32-7.2,27.8-20.4,1.09-9.66.63-19.5.79-29.26.09-5.35-.06-10.72.05-16.08.13-5.62,1.92-7.4,7.37-7.44q14-.07,27.91,0c4.83,0,7,1.76,7,6.68,0,16.23-.05,32.46-.56,48.68-.55,17.51-9.31,31.33-21.67,42.79-5.16,4.8-11.71,8.29-18,11.58-3.38,1.75-4.44,3.59-4.39,7.16.16,14,.07,28.07.07,42.1,0,8.36-1.25,9.62-9.53,9.63q-11.84,0-23.65,0c-8.82,0-9.85-1-9.86-9.65,0-13.87-.12-27.75.08-41.62.05-3.57-1.1-5.24-4.49-6.49-21.12-7.82-33.94-23.32-41-44.34-2.92-8.67-3.6-17.43-3.51-26.41.11-10.57,0-21.13,0-31.7,0-5.64,2.72-8.38,8.29-8.41q14-.07,27.91,0c5.4,0,7.12,1.79,7.18,7.4C161.68,114.9,161.63,122.15,161.64,129.41Z"/><path d="M14.74,354V168.85c13.89-4.53,23.59-9.64,37.35-16V317c1.17.05,2.08.13,3,.13q132.45,0,264.9.06c2.55,0,3.44-.57,3.44-3.3q-.12-132.31,0-264.64c0-2.7-.83-3.33-3.41-3.33q-79.26.1-158.52,0H156.8c1.46-3,2.42-4.6,3.51-7,2-4.38,3.7-8.78,5.56-13.2,2.2-5.22,4-10.6,6.12-15.86.26-.65.62-1.44.62-1.44.57,0,2.78,0,3.47,0h184V354Z"/><path d="M132,8.66c-.76,2.1-1.26,3.91-2,5.58-2.58,5.54-5.12,11.1-7.93,16.52C119.76,35.18,116.24,42,113,46c0,0-1,0-3,0Q83,45.91,55.86,46c-3.69,0-3.69,0-3.69,3.71,0,17.9-.16,35.8.12,53.69.06,4,.18,5.08.06,5.17-7.37,5.17-18.76,11-27.49,15.09-3.16,1.46-6.43,2.74-10.17,4.3V12.36c0-3.87,0-3.88,3.84-3.88H128.26C129.36,8.48,130.46,8.58,132,8.66Z"/>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Outokumpu OK2HealthyLife',
    summary:
      'A health and wellbeing app for works at Outokumpu', 
    description:
      'Outokumpu steel works in sheffield were starting an employee health and wellness programme called OK2HealthyLife. We made an accompanying app that tracked steps, listed nutritional recipes',
    image: outokumpu,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-rose-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-rose-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto aspect-[944/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                src={feature.image}
                alt=""
                layout="fill"
                object="contain" 
              /> 
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="relative aspect-[660/280] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      src={feature.image}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Mobile Apps
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            By using React Native, one set of code can produce two native apps for both iOS and Android. Fully compatible with the Play Store / App Store.
          </p>
        </div>
        <FeaturesMobile /> 
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
