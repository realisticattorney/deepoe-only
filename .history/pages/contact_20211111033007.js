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
    <div className="flex-col bg-deepoe-cream px-4 sm:px-6 flex">
      <div className="mx-auto w-full max-w-2xl  bg-deepoe-cream py-2 items-center">
        <h2 className="text-2xl font-light pb-2 font-public-sans-normal ">
          Questions? Get in touch.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-2.5"
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
              className={`block w-full shadow-sm border bg-deepoe-cream text-sm font-light font-public-sans-normal  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-600 focus:outline-none focus:ring-2 ${
                errors.name ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="name*"
            />
            <span className="text-red-400 text-sm py-2">
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
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              {...register('message', {
                required: {
                  value: true,
                  message: 'You need to enter your message',
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 20,
                  message: 'Your message must be longer than this!',
                },
              })}
              className={`block w-full shadow-sm border bg-deepoe-cream text-sm font-light font-public-sans-normal  py-0.5 px-1.5 placeholder-gray-700 focus:ring-deepoe-chocolate focus:border-deepoe-chocolate border-gray-500 focus:outline-none focus:ring-2 ${
                errors.message ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="message"
            ></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors?.message?.message}
            </span>
          </div>
          <div className="justify-self-end">
            <button
              type="submit"
              className="inline-flex justify-center py-1.5 px-6 border border-transparent shadow text-base  text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col w-full pt-8">
        <h4 className="px-2.5 py-2 text-2xl font-light font-public-sans-normal">
          Or check our{' '}
          <span className="underline">
            <Link href={`/deepoe/faq`}>
              <a>FAQ's</a>
            </Link>
          </span>
        </h4>
        <button className="group focus:outline-none px-3" onClick={handleShow}>
          <div className="flex justify-between py-2 text-sm font-public-sans-normal text-left text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Where's my order?</span>

            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2 font-public-sans-normal group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none px-3">
          <div className="flex justify-between py-2 text-sm font-public-sans-normal text-left text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">
              How can I change or cancel my order?
            </span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2 font-public-sans-normal group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none px-3">
          <div className="flex justify-between py-2 text-sm font-public-sans-normal text-left text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Do your items have a warranty?</span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2 font-public-sans-normal  group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <div className="justify-self-end pt-2.5 self-end">
          <Link href={`deepoe/faq`}>
            <button
              type="submit"
              className="inline-flex justify-center py-0.5 px-6 border border-transparent shadow text-xs font-light text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
