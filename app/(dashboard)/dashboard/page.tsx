import { FC } from 'react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import {db} from '@/lib/db'
import RequestApiKey from '@/components/RequestApiKey'
import ApiDashBoard from '@/components/ApiDashboard'


export const metadata : Metadata = {
    title: 'Similarity API | Dashboard',
    description: 'Free and open-source similarity API',
}

interface pageProps {
  
}

const page = async ({}) => {

  const user = await getServerSession(authOptions);

  if(!user) return notFound();

  const apiKey= await db.apiKey.findFirst({
    where: {userId: user.user.id}
  })

  return (
    <div className="max-w-7xl mx-auto mt-16">
      
      {apiKey ? 
      // @ts-expect-error Server Component
      <ApiDashBoard /> : 
      <RequestApiKey/>}
    </div>
  )
}

export default page