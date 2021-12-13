import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Contact() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    console.log(values);
    let config = {
      method: 'post',
      url: `/api/contact`,
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
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="flex-col bg-deepoe-cream px-6 sm:px-6 flex md:w-145 mx-auto">
      <div className="mx-auto w-full    bg-deepoe-cream py-2 items-center">
        <h2 className="text-2xl font-thin pt-5 font-mono tracking-tighter">
          Questions? Get in touch.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-2.5 mt-3"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
              })}
              className={`block w-full shadow-sm border rounded-none bg-deepoe-cream text-sm font-light font-mono  py-1 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-1 resize-none ${
                errors.name ? 'ring-0 focus:outline-none ' : null
              }`}
              placeholder="name*"
            />
            <span className="font-mono text-sm py-2">
              {errors?.name?.message}
            </span>
          </div>
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
                  message: 'Please enter your email address',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },
              })}
              className={`block w-full border rounded-none shadow-sm bg-deepoe-cream text-sm font-light font-mono  py-1 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-1 resize-none ${
                errors.email ? 'ring-0 focus:outline-none ' : null
              }`}
              placeholder="e-mail*"
            />
            <span className="font-mono text-sm py-2">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              phone
            </label>
            <textarea
              name="phone"
              rows="1"
              {...register('phone', {
                required: {
                  value: false,
                  // message: 'You need to enter your message',
                },
                maxLength: {
                  value: 30,
                  message: "Your phone number can't be this long",
                },
                minLength: {
                  value: 8,
                  message: "Your phone number can't be this long",
                },
                pattern: {
                  value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                  message: 'This needs to be a valid US number',
                },
              })}
              className={`block w-full shadow-sm border rounded-none bg-deepoe-cream text-sm font-light font-mono  py-1 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-500 focus:outline-none focus:ring-1 resize-none ${
                errors.message ? 'ring-0 focus:outline-none ' : null
              }`}
              placeholder="phone number (optional)"
            ></textarea>
            {/* <span className="font-mono text-sm py-2">
              {errors?.message?.message}
            </span> */}
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              subject
            </label>
            <textarea
              name="subject"
              type="text"
              rows="1"
              {...register('subject', {
                required: {
                  value: false,
                  message: 'You need to enter your subject',
                },
                maxLength: {
                  value: 1000,
                  message: 'Your subject must be shorter',
                },
                minLength: {
                  value: 10,
                  message: 'Your subject must be longer than this!',
                },
              })}
              className={`block w-full shadow-sm border rounded-none bg-deepoe-cream text-sm font-light font-mono  py-1 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-500 focus:outline-none focus:ring-1 resize-none ${
                errors.message ? 'ring-0 focus:outline-none ' : null
              }`}
              placeholder="subject"
            ></textarea>
        
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              rows="8"
              {...register('message', {
                required: {
                  value: true,
                  message: 'Please enter your message',
                },
                maxLength: {
                  value: 1000,
                  message: 'Maximum length is 1000 characters',
                },
                minLength: {
                  value: 20,
                  message: 'Minumum length is 20 characters',
                },
              })}
              className={`block w-full shadow-sm border rounded-none bg-deepoe-cream text-sm font-light font-mono  py-1 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-500 focus:outline-none  focus:ring-1 resize-none ${
                errors.message ? 'ring-0 focus:outline-none ' : null
              }`}
              placeholder="message"
            ></textarea>
            <span className="font-mono text-sm py-2">
              {errors?.message?.message}
            </span>
          </div>
          <div className="justify-self-end">
            <button
              type="submit"
              className="inline-flex font-mono font-light items-center self-center justify-center py-1.2 mt-2 w-32 border border-transparent shadow text-xl  text-white bg-deepoe-chocolate focus:outline-none focus:ring-1 focus:ring-offset-2 active:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col w-full  font-mono">
        <h4 className="text-2xl font-thin pt-2 py-2 font-mono tracking-tighter">
          Or check our{' '}
          <span className="underline">
            <Link href={`/deepoe/faq`}>
              <a>FAQ's</a>
            </Link>
          </span>
        </h4>
       
      </div>
    </div>
  );
}
