import AuthForm from './components/AuthForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left Column (CTA) */}
      <div
        className="lg:w-1/2 p-10"
        style={{ background: 'linear-gradient(45deg, #00BFFF, #0099CC)' }}
      >
        <div className="flex flex-col justify-center h-full">
          <Image
            alt="logo"
            className="mx-auto w-auto bg-white rounded-full"
            height={100}
            width={100}
            src="/images/logo.png"
          />
          
          <h1 className="text-4xl font-bold mb-2 pt-8 text-center text-white">
            🚀 Welcome to Bec Alumni Chat! 🎉
          </h1>
          <p className="text-lg my-6 mx-auto text-center text-white">
          Your Ultimate Chat Experience with <span className='font-bold text-2xl'>BEC Alumni</span> 🎓
          </p>
          
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="lg:w-1/2 bg-gray-100 p-10">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-md">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={64}
            width={64}
            src="/images/logo.png"
          />

          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
            🚀 Join Bec Alumni Chat Today! 
          </h2>

          {/* Auth Form */}
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
