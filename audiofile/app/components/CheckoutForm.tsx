// components/CheckoutForm.tsx
'use client'

import { forwardRef, useImperativeHandle, useState } from "react"

export interface CheckoutForHandle{
    submitForm: () => void;
}

interface CheckoutFormProps {
  onSubmit: (data: any) => void;
  isProcessing: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: 'e-money' | 'cash';
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}

const CheckoutForm = forwardRef<CheckoutForHandle, CheckoutFormProps>(({ onSubmit, isProcessing }, ref) => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        name: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        phone: '',
        paymentMethod: 'e-money'
    });
    
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
         
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.zipCode) newErrors.zipCode = 'Postal code is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';

        if (formData.paymentMethod === 'e-money') {
            if (!formData.eMoneyNumber) newErrors.eMoneyNumber = 'E-Money number is required';
            if (!formData.eMoneyPIN) newErrors.eMoneyPIN = 'E-Money PIN is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    //   const submitFormProgrammatically = () => {
    //     if (validateForm()) {
    //         onSubmit(formData);
    //     }
    // };

 useImperativeHandle(ref, () => ({
        submitForm: submitFormProgrammatically
 }));
    
    const submitFormProgrammatically = () => {
 
  if (validateForm()) {
    console.log('✅ [CheckoutForm] Form is valid, calling onSubmit');
    onSubmit(formData);
  } else {
    console.log('❌ [CheckoutForm] Form validation failed');
  }
};

    // ADD THE RETURN STATEMENT HERE - this was missing!
    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Billing Details */}
            <div className="bg-white  rounded-lg">
                <h2 className="text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-6 text-(--main-orange)">BILLING DETAILS</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout  rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Alexei Ward"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Email Address</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="alexei@mail.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="md:col-span-1">
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Phone Number</label>
                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+234 703 890 2345 "
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white pt-1 rounded-lg">
                <h2 className="text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-6 text-(--main-orange)">SHIPPING INFO</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Address</label>
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="1137 Williams Avenue"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div>
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">ZIP Code</label>
                    <input
                    type="text"
                    name="zipCode" // Fixed: was "postalCode" but state uses "zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="10001"
                    />
                    {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                </div>

                <div>
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">City</label>
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="New York"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Country</label>
                    <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full p-3 border input-checkout rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="United States"
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white pt-2 rounded-lg">
                <h2 className="text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-6 text-(--main-orange)">PAYMENT DETAILS</h2>
                
                <div className="space-y-4">
                <div className="">
                    <label className="block tracking-[-0.12px] text-xs font-bold mb-2">Payment Method</label>
                    
                    <div className="space-y-2 w-1/2 ml-auto ">
                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.paymentMethod === 'e-money' 
                            ? 'border-(--main-orange) ' 
                            : 'border-gray-300'
                                } hover:border-(--main-orange) transition-colors`}>
                                
                                {/* Custom Radio Button */}
                                <div className="border w-3 h-3 p-2 border-gray-300 rounded-full flex items-center justify-center">

                    <div className={`mr-0 w-3 h-3 p-1  rounded-full border-2  flex items-center justify-center ${
                        formData.paymentMethod === 'e-money' 
                        ? 'border-(--main-orange) bg-(--main-orange)' 
                        : 'border-transparent bg-white'
                        }`}>
                        {/* Inner dot when selected */}
                        {formData.paymentMethod === 'e-money' && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                    </div>
                        </div>

                        <input
                        type="radio"
                        name="paymentMethod"
                        value="e-money"
                        checked={formData.paymentMethod === 'e-money'}
                        onChange={handleChange}
                        className="mr-3 hidden"
                        />
                        <span className="pl-2">E-Money</span>
                    </label>

                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.paymentMethod === 'cash' 
                            ? 'border-(--main-orange) checked:(--main-orange) ' 
                            : 'border-gray-300'
                                } hover:border-(--main-orange) transition-colors`}>


                                {/* Custom Radio Button */}
                                <div className="border w-3 h-3 p-2 border-gray-300 rounded-full flex items-center justify-center">

                            <div className={`mr-0 w-3 h-3 p-1  rounded-full border-2  flex items-center justify-center ${
                                formData.paymentMethod === 'cash' 
                                ? 'border-(--main-orange) bg-(--main-orange)' 
                                : 'border-transparent bg-white'
                                }`}>
                                {/* Inner dot when selected */}
                                {formData.paymentMethod === 'cash' && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                            </div>
                                </div>




                    <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleChange}
                        className="mr-3 hidden"
                        />
                        <span className="pl-2">Cash on Delivery</span>
                    </label>
                    </div>
                </div>

                {formData.paymentMethod === 'e-money' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block tracking-[-0.12px] text-xs font-bold mb-2">E-Money Number</label>
                        <input
                        type="text"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber || ''}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg ${errors.eMoneyNumber ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="238521993"
                        />
                        {errors.eMoneyNumber && <p className="text-red-500 text-sm mt-1">{errors.eMoneyNumber}</p>}
                    </div>

                    <div>
                        <label className="block tracking-[-0.12px] text-xs font-bold mb-2">E-Money PIN</label>
                        <input
                        type="text"
                        name="eMoneyPIN"
                        value={formData.eMoneyPIN || ''}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg ${errors.eMoneyPIN ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="6891"
                        />
                        {errors.eMoneyPIN && <p className="text-red-500 text-sm mt-1">{errors.eMoneyPIN}</p>}
                    </div>
                    </div>
                )}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-(--main-orange) text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isProcessing ? 'PROCESSING...' : 'CONTINUE & PAY'}
            </button>
        </form>
    ); 

});

CheckoutForm.displayName = 'CheckoutForm'
export default CheckoutForm;