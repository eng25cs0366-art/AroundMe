'use client'

import dynamic from 'next/dynamic'

// The app reads localStorage and window during render, so it only runs in the browser.
const AroundMeApp = dynamic(() => import('@/around_me_a_m'), { ssr: false })

export function AroundMeClient() {
  return <AroundMeApp />
}
