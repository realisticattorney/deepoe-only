import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure, Menu } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import atob from 'atob';
export default function ReviewsPopup({
  parentReviewState,
  wrapperSetParentReviewState,
  product,
  collection,
}) {
  console.log('product_id', product);
  console.log('collection_id', collection);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);
  return (
    <Menu>
      {({ parentReviewState }) => (
        <>
          <Menu.Button>More Reviews</Menu.Button>

   
        </>
      )}
    </Menu>
  );
}
