import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationPolicy = () => (
  <div className="bg-white p-4 md:p-6 shadow-lg rounded-xl border border-gray-200">
    {/* Cancellation Policy */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-100 p-2 rounded-lg">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Cancellation Policy</h2>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-start gap-3 mb-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-700">Free cancellation</h4>
            <p className="text-gray-600 mt-1">
              Cancel by <span className="font-semibold">Aug 23, 2024</span> for a full refund.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 mt-4">
          <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-700">Partial refund</h4>
            <p className="text-gray-600 mt-1">
              Cancel before check-in on <span className="font-semibold">Aug 24, 2024</span> for a 50% refund.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Ground Rules */}
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">House Rules</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Check-in & Check-out
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Check-in: After 3:00 PM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Check-out: Before 11:00 AM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Self check-in with smart lock</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Guest Requirements
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>No smoking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>No pets allowed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>No parties or events</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Important Notes
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Follow the house rules provided by your host</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Treat your host's home like your own</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Respect neighbors and keep noise levels down after 10 PM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Report any damages or issues immediately</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Security Information */}
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Secure Payment</h4>
          <p className="text-sm text-gray-600 mt-1">
            Your payment information is encrypted and secure. We never store your credit card details.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CancellationPolicy;