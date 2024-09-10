import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='container pt-24 pb-8  max-h-full flex justify-center '>
      <SignUp />
    </div>
  )
}