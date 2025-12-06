import StreamingOne from '@/app/components/StreamingOne'
import StreamingThree from '@/app/components/StreamingThree'
import StreamingTwo from '@/app/components/StreamingTwo'
import { Suspense } from 'react'
import React from 'react'

export default function page() {
  return (
    <div>
       
        <StreamingOne/>

        <Suspense fallback={<p>Loading...</p>}>
                  <StreamingTwo/>
        </Suspense>
        
        <StreamingThree/>
    </div>
  )
}
