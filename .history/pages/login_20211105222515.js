import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Login() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `/api/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Check your email box to confirm your account'
        );
      }
    } catch (err) {}
  }


  return (
    <div className="flex-col bg-deepoe-cream px-4 sm:px-6 flex">
      <div className="mx-auto w-full max-w-2xl  bg-deepoe-cream py-2 items-center">
        <h2 className="text-2xl font-light pb-2 font-public-sans-normal ">
          Welcome Back!
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-2.5"
        >
          <div>
            <label for="email" className="sr-only">
              Email
            </label>
            <input
              name="email"
              type="text"
              {...register('email', {
                required: {
                  value: true,
                  message: 'You must enter your email address',
                },
                minLength: {
                  value: 8,
                  message: 'This is not long enough to be an email',
                },
                maxLength: {
                  value: 120,
                  message: 'This is too long',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },
              })}
              className={`block w-full border shadow-sm bg-deepoe-cream text-sm font-light font-public-sans-normal  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 ${
                errors.email ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="e-mail*"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password*
            </label>
            <input
              type="password"
              name="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
              })}
              className={`block w-full shadow-sm border bg-deepoe-cream text-sm font-light font-public-sans-normal  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 ${
                errors.password ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="password*"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.password?.message}
            </span>
          </div>
          <div className="justify-self-end">
            
            <Link href="/forgot-password">
               <a className="text-xs  font-mono font-medium  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2">
                  Forgot Password?
               </a>
            </Link>
        </div>
          <div className="w-full justify-self-stretch">
            <button
              type="submit"
              className="inline-flex justify-center py-1.5 px-6 border border-transparent shadow text-base  text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>

    
        
      </div>
      </div>
   );
}