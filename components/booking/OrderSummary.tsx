import { CalendarDays, Star, Home } from 'lucide-react';

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  endDate: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  const total = subtotal + bookingDetails.bookingFee;
  const tax = subtotal * 0.08; // 8% tax for example

  return (
    <div className="bg-white p-4 md:p-6 shadow-lg rounded-xl border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
      
      {/* Property Overview */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="w-full sm:w-32 h-48 sm:h-32 flex-shrink-0">
          <img 
            src={bookingDetails.imageUrl} 
            alt={bookingDetails.propertyName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-800">{bookingDetails.propertyName}</h3>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-semibold">{bookingDetails.rating}</span>
            <span className="text-gray-500">({bookingDetails.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <div>
              <p className="text-sm">{bookingDetails.startDate} - {bookingDetails.endDate}</p>
              <p className="text-sm">{bookingDetails.totalNights} nights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <h3 className="font-semibold text-gray-700">Price Details</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">${bookingDetails.price} × {bookingDetails.totalNights} nights</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Cleaning fee</span>
            <span className="font-medium">$120.00</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Service fee</span>
            <span className="font-medium">${bookingDetails.bookingFee.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Occupancy taxes and fees</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</div>
              <div className="text-sm text-gray-500">USD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Refund Protection */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800">Refund Protection</h4>
            <p className="text-sm text-blue-600 mt-1">Get a full refund if you cancel due to unforeseen events.</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="pt-4 border-t border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-3">Accepted Payment Methods</h4>
        <div className="flex gap-2">
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;