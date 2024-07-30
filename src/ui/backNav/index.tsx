'use client'
import { useRouter } from 'next/navigation'

export const BackNav = () => {
  const router = useRouter();

  return(
    <button
      onClick={() => {
        router.back()
      }}
    >
      Back
    </button>
  )
}