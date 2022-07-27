import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Do you do Wordpress sites?',
      answer:
        `Of course! We can do new sites or help maintain existing ones. If you are looking for an enterprise site that can scale then we'd advise Drupal - and we can help with that too!`,
    },
    {
      question: 'Do you do mobile apps?',
      answer: 'Absolutely, you can see some examples further up this page.',
    },
    {
      question: 'Are you available for open-ended contract work?',
      answer:
        `Yes, we're able to supplement your existing team by providing contractors to work with (primarily React, React Native, Gatsby and Drupal front end work), use the contact form to let us know your requirements and we'll get back to you ASAP.`,
    },
    {
      question: 'Do you provide design and UI / UX work',
      answer:
        `We are familiar with tools such as Adobe XD, Figma and UIzard. If you wish for your application to be visually designed before a line of code is written, then we are happy to do so.`,
    },
  ],
  [
    {
      question: `What is your working process like?`,
      answer:
        `It depends on the project, but usually we like to have a 30m to 1hr phone or video call to meet you and get your requirements. From there, we'll provide a quote and (if singed off) a scope of work that captures all your requirements and means we'll miss nothing during build time. Finally, we'll provide full design mock ups of your final product before commencing with coding.`
    },
    {
      question:
        'Should I seek a larger, more established agency for my project?',
      answer:
        `From previous experience in the industry, very often when you work with a large agency in reality you are only receiving direct attention from two or three people within the business. While large agencies do come with some reputation and experience, the reality is they will only dedicate a few staff on your project, all of whom will also be dividing their time across other clients, often diverting their attention from your project and for a much higher price.`,
    },
  ],
  [
    {
      question:
        'What if I want to make changes to the final product?',
      answer:
        `The scope of work at the start of a project is key to success. We'll ask a series of questions that will get you thinking in detail about what you want to achieve. We take our time at the starting phase to make sure all requirements are captured to avoid any missed functionality later down the line. Nevertheless, lessons are learned and requirements change as projects are done, we use 'Agile' methodology on our projects, regularly delivering new functionality for testing at the earliest possible stage, to ensure any amendments or changes are captured as soon as possible.`,
    },
    {
      question: 'Do you do payment upfront or on completion?',
      answer: `It depends on requirements. If you are after developers to supplement your existing team or to be guided in their day to day tasks by one of your in-house staff we will invoice the hours on a weekly basis. For small projects we'll quote and invoice on completion. For larger projects we'll detail 'phases' and invoice at the end of each phase, we may ask for an upfront payment to secure our time and enable us to plan resource.`,
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-16"
    >
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Feel free to use the contact form if any of your questions aren't answered below.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
