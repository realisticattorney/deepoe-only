import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import { useState } from 'react';
import Link from 'next/link';
// import { customerCreate } from '../lib/shopify';
// import signupAPI from './api/signup';

// const CREATE_CUSTOMER_ACCESS_TOKEN = gql`mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
//   customerAccessTokenCreate(input: $input) {
//     customerAccessToken {
//       accessToken
//       expiresAt
//     }
//     customerUserErrors {
//       code
//       field
//       message
//     }
//   }
// }
// ​`

const CREATE_CUSTOMER = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export default function Signup() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  const [createCustomer, { data, loading, error }] =
    useMutation(CREATE_CUSTOMER);

  // if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;
  if (data) {
    //data is NOT sufficient criteria to determine if the user is logged in
    // console.log("data",data);
  }

  async function onSubmitForm(values) {
    const { email, password } = values;
    // console.log(values);

    try {

      const checkoutId = await 

      const response = await createCustomer({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      console.log('response', response);
      if (response.data.customerCreate.customer) {
        console.log('data', response.data.customerCreate.customer.id);
        toast('success', 'Check your email box to confirm your account');

        reset();
        router.push('/');
      } else if (response.data.customerCreate.customerUserErrors) {
        error = response.data.customerCreate.customerUserErrors[0].message;
        console.log(
          'eerr',
          response.data.customerCreate.customerUserErrors[0].message
        );
        toast(
          'error',
          `${response.data.customerCreate.customerUserErrors[0].message}`
        );
      }
    } catch (err) {
      console.log('err', err);
      toast('error', `${err}`);
    }
  }

  return (
    <div className="flex-col bg-deepoe-cream px-4 sm:px-6 flex mt-24 mx-2">
      <div className="mx-auto w-full max-w-2xl  bg-deepoe-cream py-2 items-center">
        <h2 className="text-2xl font-light pb-2 font-mono ">Signup</h2>
        <form
          onSubmit={
            handleSubmit(onSubmitForm)
            // (e) => {
            // e.preventDefault();
            // createCustomer({
            //   variables: {
            //     input: {
            //       email: e.target[0].value,
            //       password: e.target[1].value,
            //     },
            //   },
            // });
            // }
          }
          className="grid grid-cols-1 gap-y-2.5"
        >
          <div>
            <label htmlFor="email" className="sr-only">
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
              className={`block w-full border shadow-sm bg-deepoe-cream text-sm font-light font-mono  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 ${
                errors.email ? 'ring-2 ring-red-500' : ''
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
              className={`block w-full shadow-sm border bg-deepoe-cream text-sm font-light font-mono  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 ${
                errors.password ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="password*"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.password?.message}
            </span>
          </div>
          <div className="w-full pt-4">
            <button
              type="submit"
              className=" w-full inline-flex justify-center py-1.5 px-6 border border-transparent shadow text-base   text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="justify-self-end inline-flex py-4 px-1.5 text-sm font-mono">
          <h3 className="">Already have an account?</h3>
          <Link href="/login">
            <a className=" placeholder-gray-700 pl-1 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 underline">
              Log In
            </a>
          </Link>
        </div>

        {loading ? <p className="text-gray-700">Loading...</p> : null}
        {error ? (
          <p className="text-red-700">Submission error! {error.message}</p>
        ) : null}
      </div>
    </div>
  );
}
