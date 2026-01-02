// components/common/Card.tsx
import { PropertyProps } from '../../interfaces';

const Card: React.FC<PropertyProps> = ({ 
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover rounded-xl"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
        <button className="absolute top-3 right-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Property Details */}
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm">
          {address.city}, {address.country}
        </p>
        
        <p className="text-gray-500 text-sm">
          {offers.bed} beds · {offers.shower} showers · {offers.occupants} guests
        </p>
        
        <div className="flex flex-wrap gap-1 mt-1">
          {category.slice(0, 2).map((cat, index) => (
            <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
              {cat}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-1">
          <span className="font-semibold">${price}</span>
          <span className="text-gray-600 text-sm">night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;