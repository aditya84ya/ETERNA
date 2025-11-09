import React, { useState } from "react";
import bg from "./assets/bg.webp";
import IconEye from "./components/IconEye";
import "./index.css"; // for font imports

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Outer rounded container with white border */}
      <div className="relative w-[90%] md:w-[80%] max-w-6xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left panel - semi-transparent overlay */}
        <div className="relative flex-1 flex flex-col justify-between text-white p-8 md:p-12 z-10 bg-black/40">
          {/* inner curved border separation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 tracking-widest">
            <span>A WISE QUOTE</span>
            <div className="flex-1 h-px bg-white/70"></div>
          </div>
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Get<br />Everything<br />You Want
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-white/80 max-w-xs md:max-w-sm leading-relaxed">
              You can get everything you want if you work hard, trust the process,
              and stick to the plan.
            </p>
            <div className="hidden md:block mt-4">
              <p className="text-[10px] text-white/60">© 2025 Cogie</p>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="relative flex-1 bg-white z-10 flex flex-col justify-center p-8 md:p-12">
          {/* inner curved border separation */}

          <div className="w-full max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="2" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold">Cogie</span>
              </div>
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-2 text-center">
              Welcome Back
            </h1>
            <p className="text-center text-sm text-gray-600 mb-6">
              Enter your email and password to access your account
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <IconEye open={showPassword} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mt-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  Remember me
                </label>
                <a href="#" className="text-gray-600 hover:text-black">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full mt-3 py-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm">Sign In with Google</span>
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-black">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
