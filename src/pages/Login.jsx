import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="mt-6 text-center text-4xl font-serif font-bold text-dark">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>
        <p className="mt-2 text-center text-sm text-text-muted">
          {isLogin ? 'Sign in to access your orders and wishlist' : 'Join KNR Foods for authentic homemade flavors'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 premium-shadow rounded-3xl sm:px-10">
          
          <div className="flex bg-background rounded-full p-1 mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-full text-sm font-bold transition-colors ${isLogin ? 'bg-white text-dark shadow-sm' : 'text-text-muted hover:text-dark'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-full text-sm font-bold transition-colors ${!isLogin ? 'bg-white text-dark shadow-sm' : 'text-text-muted hover:text-dark'}`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-5" action="#" method="POST">
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-dark mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" required className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-dark mb-1">Email address / Mobile</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {isLogin ? <User className="h-5 w-5 text-gray-400" /> : <Mail className="h-5 w-5 text-gray-400" />}
                </div>
                <input type="text" required className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-dark mb-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="tel" required className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+91 9876543210" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-dark mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" required className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="••••••••" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded accent-primary" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-text-muted">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-dark transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <Link to="/account" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-primary hover:bg-dark transition-colors premium-shadow mt-4">
                {isLogin ? 'Sign in' : 'Create Account'}
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
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
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
