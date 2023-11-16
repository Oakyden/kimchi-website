import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.jpeg'
import avatarImage2 from '@/images/avatars/avatar-2.jpeg'
import avatarImage3 from '@/images/avatars/avatar-3.jpeg'

const testimonials = [
  [
    {
      content:
        'Alan at Kimchi helped me launch the first ebook on my website shop, and created a photography portfolio website for my latest business venture. Both times, Alan maintained communication and created a product I was really happy with.',
      author: {
        name: 'Emily Young',
        role: `Emily's Journal Blog`,
        image: avatarImage1,
      },
    },
  ],
  [
    {
      content:
      <>
        I had the privilege today of hosting a podcast with Alan Oakden, and getting a glimpse into his genius mind. 
        Alan is the brains behind Yodha Health and leads our R&D projects at LATUS, which is quickly becoming a vital part of our business, 
        and a key differentiator against the rest of the dinosaur occupational health industry.  <a className="text-rose-600" href="https://www.linkedin.com/posts/jack-latus-12497384_health-healthtech-aihealthcare-activity-6892573773187686400-FuTT?utm_source=linkedin_share&utm_medium=member_desktop_web">LinkedIn Post</a>
      </>
,
      author: {
        name: 'Jack Latus',
        role: 'CEO at Latus Health',
        image: avatarImage2,
      },
    }
  ],
  [
    {
      content: `A pleasure to work with! Not only was time taken to revamp the gulp files on the WaterAid project to ensure the front end development experience was easier, time was also dedicated to helping peers and answering any questions.`,
      author: {
        name: 'Rakesh James',
        role: 'Formerly Senior Developer at Access',
        image: avatarImage3,
      },
    }
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Testimonials 
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {`Working across all sectors, from small to large businesses we've proven to be reliable partners and able to deliver on a variety of requirements.`}
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={testimonial.author.image} alt="" />
                        </div>
                      </figcaption>
                    </figure>
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
