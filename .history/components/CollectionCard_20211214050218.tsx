import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { Collection } from '../lib/types/all';

const CollectionCard = (collection: Collection) => {
  console.log('COOOOLLEECTION', collection);
  console.log('COOOOLLEECTIONasdadsad', collection.node.products.edges);
  const { handle, title } = collection.node;
  const { originalSrc } = collection.node.image
    ? collection.node.image
    : collection.node.products.edges[0].node.images.edges[0].node;
  return (
    <Link href={`/collections/${handle}`}>
      <a className="group px-2">
        <div className="w-full  overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={originalSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-3 relative -top-14 left-2 text-2xl text-white font-medium">
          {title}
        </h3>
      </a>
    </Link>
  );
};

export default CollectionCard;
