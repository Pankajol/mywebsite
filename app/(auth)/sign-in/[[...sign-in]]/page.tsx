import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='container pt-24 pb-28  max-h-full flex justify-center  '>
      <SignIn  />
    </div>
  )
}