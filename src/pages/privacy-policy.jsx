import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Logo } from '@/components/Logo'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
    <div className="flex flex-col mt-2 text-gray-700 m-8">
        <Link href="/" aria-label="Home">
        <Logo className="h-30 w-auto" />
        </Link>
        <div className="mt-20">
        <h2 className="text-lg font-semibold text-gray-900">
            Privacy Policy
        </h2>

        <p className="mt-2 text-sm text-gray-700">
{`Our Company is part of the Our Company Group which includes Our Company International and Our Company Direct. This privacy policy will explain how our organisation uses the personal data we collect from you when you use our website.`}
</p>

<h3 className="text-lg font-semibold text-gray-900 mt-4">{`Topics:`}</h3>

<ul className="list-disc">
    <li>{`What data do we collect?`}</li>
    <li>{`How do we collect your data?`}</li>
    <li>{`How will we use your data?`}</li>
    <li>{`How do we store your data?`}</li>
    <li>{`Marketing`}</li>
    <li>{`What are your data protection rights?`}</li>
    <li>{`What are cookies?`}</li>
    <li>{`How do we use cookies?`}</li>
    <li>{`What types of cookies do we use?`}</li>
    <li>{`How to manage your cookies`}</li>
    <li>{`Privacy policies of other websites`}</li>
    <li>{`Changes to our privacy policy`}</li>
    <li>{`How to contact us`}</li>
    <li>{`How to contact the appropriate authorities`}</li>
</ul>


<h3 className="text-lg font-semibold text-gray-900 mt-4">{`What data do we collect?`}</h3>

<p className="mt-2 text-sm text-gray-700">{`Our Company collects the following data:`}</p>

<ul>
    <li>{`Personal identification information (Name, email address, phone number, etc.)`}</li>
</ul>

<h3 className="text-lg font-semibold text-gray-900 mt-4">{`How do we collect your data?`}</h3>

<p className="mt-2 text-sm text-gray-700">{`You directly provide Kimchi Digital with the data in the contact form. We collect data and process data when you:`}</p>

<ul className="list-disc">
    <li>{`Register online or place an order for any of our products or services.`}</li>
    <li>{`Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.`}</li>
    <li>{`Use or view our website via your browser's cookies.`}</li>
    <li>{`Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.`}</li>
</ul>


<h3 className="text-lg font-semibold text-gray-900 mt-4">{`How will we use your data?`}</h3>

<p className="mt-2 text-sm text-gray-700">{`Our Company collects your data so that we can:`}</p>
<ul className="list-disc">
    <li>{`Process your order and manage your account.`}</li>
    <li>{`Email you with special offers on other products and services we think you might like.`}</li>
</ul>


<h3 className="text-lg font-semibold text-gray-900 mt-4">{`How do we store your data?`}</h3>
<p className="mt-2 text-sm text-gray-700">Our Company securely stores your data with <a href="https://www.netlify.com/"> Netlify</a>.

{`Our Company will keep your name, email, phone number for up to 2 years from teh point of our last engagement. Once this time period has expired, we will delete your data by deleting form entries from netlify. `}</p>


<h3 className="text-lg font-semibold text-gray-900 mt-4">{`What are your data protection rights?`}</h3>
<p className="mt-2 text-sm text-gray-700">
{`Our Company would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:`}
<ul className="list-disc">
    <li>{`The right to access - You have the right to request Kimchi Digital for copies of your personal data. We may charge you a small fee for this service.`}</li>
    <li>{`The right to rectification - You have the right to request that our company correct any information you believe is inaccurate. You also have the right to request Kimchi Digital to complete the information you believe is incomplete.`}</li>
    <li>{`The right to erasure - You have the right to request that Kimchi Digital erase your personal data, under certain conditions.`}</li>
    <li>{`The right to restrict processing - You have the right to request that our company restricts the processing of your personal data, under certain conditions.`}</li>
    <li>{`The right to object to processing - You have the right to object to our Company's processing of your personal data, under certain conditions.`}</li>
    <li>{`The right to data portability - You have the right to request that Kimchi Digital transfer the data that we have collected to another organisation, or directly to you, under certain conditions.`}</li>
    <li>{`The right to data portability - You have the right to request that Kimchi Digital transfer the data that we have collected to another organisation, or directly to you, under certain conditions.`}</li>
</ul>



<p className="mt-2 text-sm text-gray-700">{`If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: hello@kimchidigital.com`} </p>

<p className="mt-2 text-sm text-gray-700">{`Call us at: 07707 390573`}</p>

<p className="mt-2 text-sm text-gray-700">{`Or write to us:  20-22 Wenlock Road London N1 7GU`}</p>
</p>
        </div>
    </div>
    </>
  )
}