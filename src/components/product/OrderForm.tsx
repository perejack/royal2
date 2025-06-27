import React from 'react';
import { Send, Check, AlertTriangle } from 'lucide-react';
import { Product } from '../../types/product';

interface OrderFormProps {
  product: Product;
  selectedGauge: string;
  selectedFinish: string;
  quantity: number;
  onGaugeChange: (gauge: string) => void;
  onFinishChange: (finish: string) => void;
  onQuantityChange: (quantity: number) => void;
  onSubmit: () => void;
  total: number;
}

const PricingSection: React.FC<{ product: Product; selectedGauge: string; onSelect: (gauge: string) => void }> = ({
  product,
  selectedGauge,
  onSelect,
}) => {
  if (!product.priceVariants || product.priceVariants.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <span className="font-medium">Special Discount!</span> Limited time offer on selected products.
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900">Pricing:</h3>
      <div className="space-y-3">
        {product.priceVariants.map((variant, index) => {
          const isSelected = selectedGauge === variant.name;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(variant.name)}
              className={`w-full text-left p-4 border rounded-lg transition-colors ${isSelected 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{variant.name}</span>
                <div className="flex items-center">
                  <span className="text-gray-900 font-medium">{variant.price}</span>
                  {isSelected && <Check className="ml-2 h-5 w-5 text-blue-500" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {product.availableColors && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">Available In:</h4>
          <p className="text-sm text-gray-600 mt-1">{product.availableColors}</p>
        </div>
      )}
    </div>
  );
};

export const OrderForm: React.FC<OrderFormProps> = ({
  product,
  selectedGauge,
  selectedFinish,
  quantity,
  onGaugeChange,
  onFinishChange,
  onQuantityChange,
  onSubmit,
  total,
}) => {
  // Check if this is a product that doesn't need gauge selection (like roofing accessories)
  const isGaugeSelectionNeeded = !product.specifications?.gaugeOptions?.includes('N/A');
  
  // Calculate selected variant for gauge selection
  const getSelectedVariant = () => {
    if (!product.priceVariants || product.priceVariants.length === 0) return null;
    
    if (isGaugeSelectionNeeded) {
      return product.priceVariants.find(v => v.name === selectedGauge);
    }
    return product.priceVariants[0];
  };

  const handleGaugeSelect = (variantName: string) => {
    if (isGaugeSelectionNeeded) {
      // Extract the gauge number from the variant name (e.g., "Box profile gauge 28" -> "28")
      const gaugeMatch = variantName.match(/(\d+)/);
      const gauge = gaugeMatch ? gaugeMatch[0] : '';
      onGaugeChange(gauge);
    } else {
      // For non-gauge products, just use the variant name as is
      onGaugeChange(variantName);
    }
  };

  return (
    <div className="space-y-6">
      {isGaugeSelectionNeeded ? (
        <PricingSection 
          product={product} 
          selectedGauge={selectedGauge} 
          onSelect={handleGaugeSelect} 
        />
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Pricing:</h3>
          <div className="space-y-3">
            {product.priceVariants?.map((variant, index) => (
              <div 
                key={index}
                className="w-full p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{variant.name}</span>
                  <span className="text-gray-900 font-medium">{variant.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {product.specifications?.finishOptions && (
        <div>
          <label className="block text-sm font-medium mb-2">Finish</label>
          <select 
            className="w-full border rounded-md p-2"
            value={selectedFinish}
            onChange={(e) => onFinishChange(e.target.value)}
            required
          >
            <option value="">Select Finish</option>
            {product.specifications.finishOptions.map((finish, index) => (
              <option key={index} value={finish}>{finish}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Quantity (in meters)</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
          className="w-full border rounded-md p-2"
          required
        />
      </div>

      <div className="text-2xl font-bold">
        Total: KSh {total.toFixed(2)}
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isGaugeSelectionNeeded && !selectedGauge}
        className={`w-full py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors ${(isGaugeSelectionNeeded && !selectedGauge) 
          ? 'bg-gray-300 cursor-not-allowed text-gray-600' 
          : 'bg-green-600 text-white hover:bg-green-700'}`}
      >
        <Send className="w-5 h-5" />
        {!isGaugeSelectionNeeded || selectedGauge ? 'Order via WhatsApp' : 'Select an option above'}
      </button>

      <button
        type="button"
        onClick={() => {
          // Handle call to order
          window.location.href = 'tel:+254712345678';
        }}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call to Order
      </button>
    </div>
  );
};