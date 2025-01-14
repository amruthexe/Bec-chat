import AuthForm from './components/AuthForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column (CTA) */}
      <div
        className="lg:w-1/2 flex flex-col justify-center p-10"
        style={{ background: 'linear-gradient(45deg, #00BFFF, #0099CC)', minHeight: '50vh' }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <Image
            alt="logo"
            className="w-auto bg-white rounded-full"
            height={100}
            width={100}
            src="/images/logo.png"
          />
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 pt-8 text-center text-white">
            🚀 Welcome to Bec Alumni Chat! 🎉
          </h1>
          <p className="text-md lg:text-lg my-6 text-center text-white">
            Your Ultimate Chat Experience with <span className="font-bold text-xl lg:text-2xl">BEC Alumni</span> 🎓
          </p>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="lg:w-1/2 bg-gray-100 p-8 lg:p-10 flex items-center justify-center">
        <div className="sm:w-full sm:max-w-md">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={64}
            width={64}
            src="/images/logo.png"
          />

          <h2 className="mt-6 text-center text-2xl lg:text-3xl font-bold text-gray-900">
            🚀 Join Bec Alumni Chat Today!
          </h2>

          {/* Auth Form */}
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
