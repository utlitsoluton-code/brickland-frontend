import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";

export default function PropertyCard({ listing }) {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikedCount(liked ? likedCount - 1 : likedCount + 1);
  };
  return (
    <div className='bg-white shadow-md hover:shadow-lg
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] h-[460px]'>
      <Link to={`https://brickland-backend-4.onrender.com/api/data/`}>
        <img src={listing.imageUrls[1]}
          alt="listings"
          className='h-[320px] sm:h-[220px] w-full
         object-cover hover:scale-105 transition-scale duration-300'
        />

        <div className='p-3 flex flex-col gap-2 w-full'>
          <div className="listss d-flex justify-between align-middle">

          <p className='truncate capitalize text-lg font-semibold
           text-slate-700'>{listing.name}</p>
          <div className="font-bold fs-2">
              <a href="#" onClick={handleLike}>
                <i className={`ri-heart-line ${liked ? 'text-red-500' : ''}`} />
              </a>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-grey-600 truncate w-full'>{listing.address}</p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description} </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            ₹{' '}
            {listing.offer ? listing.discountPrice.toLocaleString('en-in') :
              listing.regularPrice.toLocaleString('en-in')}
            {listing.type === 'rent' && '/month'}
          </p>
          <div className='text-slate-700 flex  gap-4 '>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1 ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}


            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms`
                : `${listing.bathrooms} bathroom`}
            </div>
           
          </div>

        </div>
      </Link>
    </div>
  )
}