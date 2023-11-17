import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
} 


export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-rose-400" />
              <span className="relative">Reach out to us,</span>
            </span>{' '}
            projects of any size.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {`It doesn’t matter what size your business is, or how demanding your requirements are, we're keen to hear from you!`}
          </p>
        </div>
        <div className="rounded-lg relative">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 rounded-lg overflow-hidden bg-gray-50"></div>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="bg-rose-500  rounded-lg overflow-hidden py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Get in touch</h2>
                <p className="mt-3 text-lg leading-6 text-white">{`We'd love to hear from you. Get in touch with us and we should get back to you the same working day.`}</p>
                <dl className="mt-8 text-base text-white">
                  <div>
                    <dt className="sr-only">Registered Address</dt>
                    <dd>
                      <p>20-22 Wenlock Road</p>
                      <p>London</p>
                      <p>N1 7GU</p>
                      <small>We work mainly from Yorkshire. The above is our Registered Address - no post please!</small>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">{`Email`}</dt>
                    <dd className="flex">
                      <svg className="flex-shrink-0 h-6 w-6 text-white-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="ml-3">{`hello@kimchidigital.com`}</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">{`Email`}</dt>
                    <dd className="flex">
                      <svg className="flex-shrink-0 h-6 w-6 text-white-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 26" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                      </svg>
                      <span className="ml-3">{`+44 (0) 7707 390573`}</span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 font-bold text-base text-white">
                  Looking for careers?
                  <span className="font-medium text-white-700">{` We're open to hearing from you too!`}</span>
                </p>
              </div>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none"> 
                <form name="contact" action="/success" method="POST" className="grid grid-cols-1 gap-y-6" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="full-name" className="sr-only">Full name</label>
                    <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 focus:border-rose-500 border-gray-300 rounded-md" placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 focus:border-rose-500 border-gray-300 rounded-md" placeholder="Email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 focus:border-rose-500 border-gray-300 rounded-md" placeholder="Phone" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 focus:border-rose-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
