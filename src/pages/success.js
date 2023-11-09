import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Logo } from '@/components/Logo'

export default function Success() {
  return (
    <>
      <Head>
        <title>Sign In - Kimchi Digital</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-30 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Form Successfully Sent!
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              <Link
                href="/register"
                className="font-medium text-rose-600 hover:underline"
              >
                Thank you,
              </Link>{' '}
              we'll get back to you soon.
            </p>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
