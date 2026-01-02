import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    endDate: "27 August 2024",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.76,
    reviewCount: 345
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Complete your booking</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Form and Policies */}
        <div className="lg:w-2/3">
          <BookingForm />
          <CancellationPolicy />
        </div>
        
        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}