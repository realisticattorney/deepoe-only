import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

const CollectionCard = ({ collection }) => {
   console.log(collection)
  const { handle, title } = collection.node;

  if(collection.node.image){
  const { originalSrc } = collection.node.image;
} else {
   originalSrc
}

  return (
    <Link href={`/products/${handle}`}>
      <a className="group px-2">
        <div className="w-full  overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
         {originalSrc ?  <Image
              src={originalSrc}
                alt={altText}
              alt={title}
              layout="fill"
              objectFit="cover"
            /> : null}  
          </div>
        </div>
        <h3 className="mt-3 text-2xl font-medium text-gray-800">{title}</h3>
      </a>
    </Link>
  );
};

export default CollectionCard;
