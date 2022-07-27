import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/gradient.png'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-rose-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {`It’s time to get that idea out of your head and into the world. Whether it's a practical internal tool such as a sales CRM or a public facing webapp / mobile app, we're keen to hear from you.`}
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
