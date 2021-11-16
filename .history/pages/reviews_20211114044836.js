import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import { useState } from 'react';
import Link from 'next/link';
// import { customerCreate } from '../lib/shopify';
// import ReviewsAPI from './api/Reviews';

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

export default function Reviews() {
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
    <div>
      <div className="px-3 pb-3.5 pt-3 z-0">
        <Link href={`/`}>
          <a className="text-left pl-1 font-medium text-sm font-public-sans-normal">
            {'<'} back to homepage
          </a>
        </Link>
      </div>
      <div className="flex-col bg-deepoe-cream px-4 sm:px-6 flex mt-24 mx-2">
        <div className="mx-auto w-full max-w-2xl  bg-deepoe-cream py-2 items-center">
          <h2 className="text-2xl font-light pb-2 font-public-sans-normal ">
            Reviews
          </h2>
          <div className="relative">
      <div
        className="yotpo yotpo-main-widget "
        data-product-id={`Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTg4NjE4NTM5MDI5Nw`}
        data-currency="USD"
        data-price={`${product.variants.edges[0].node.priceV2.amount}`}
        data-name={`${product.handle}`}
        data-url={`/collections/frontpage/${product.handle}`}
        data-image-url={`${product.images.edges[0].node.originalSrc}`}
      ></div></div>
    </div></div><
  );
}
