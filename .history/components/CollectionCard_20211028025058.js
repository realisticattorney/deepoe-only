import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

const CollectionCard = ({ collection }) => {
  console.log(collection);
  const { handle, title } = collection.node;
  const { originalSrc } = collection.node.image ? collection.node.image : collection.node.products.edges[0].node.images.edges[0].node;
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
        <h3 className="mt-3 relative top-40 text-2xl font-medium text-gray-800">{title}</h3>
      </a>
    </Link>
  );
};

export default CollectionCard;
