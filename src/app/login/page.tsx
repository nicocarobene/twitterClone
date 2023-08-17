import { AuthButtonServer } from '../Component/AuthButton-Server'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen'>
        <h1 className='text-xl font-bold mb-4'>Start session at TwitterClone</h1>
        <AuthButtonServer/>
    </section>
  )
}
