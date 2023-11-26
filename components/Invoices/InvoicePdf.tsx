import React from 'react'

const InvoicePdf = () => {

    return (
        <div className='w-[595px] h-[842px] bg-[#fff] rounded-[8px] flex flex-col overflow-y-auto'>
            <div className='flex flex-row justify-between items-center mt-[32px]'>
                <p className='font-[YoungSerif] font-semibold text-[32px] text-[#1E1E1E] ml-[32px]'>Invoice</p>
                <div className='flex flex-row gap-[4px] mr-[32px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
                        <path d="M10.3941 0H14.7353C14.9118 0 15 0.120001 15 0.300001V0.9C15 1.1 14.9118 1.2 14.7353 1.2C13.8706 1.2 13.4471 2.02 13.4647 3.1V14.7C13.4647 14.9 13.3588 15 13.2 15H11.9824C11.8412 15 11.7529 14.96 11.6471 14.84L3.31765 3.94V11.9C3.31765 13 3.74118 13.8 4.60588 13.8C4.78235 13.8 4.87059 13.92 4.87059 14.1V14.7C4.87059 14.9 4.78235 15 4.60588 15H0.264706C0.0882353 15 0 14.9 0 14.7V14.1C0 13.92 0.0882353 13.8 0.264706 13.8C1.11176 13.8 1.53529 13 1.53529 11.9V1.72C1.2 1.38 0.864706 1.2 0.423529 1.2C0.264706 1.2 0.158824 1.1 0.158824 0.9V0.300001C0.158824 0.120001 0.264706 0 0.423529 0.0200009H3.47647C3.61765 0.0200009 3.72353 0.0600004 3.81176 0.18L11.6824 10.38V3.1C11.6824 2.02 11.2588 1.2 10.3941 1.2C10.2176 1.2 10.1294 1.1 10.1294 0.9V0.300001C10.1294 0.120001 10.2176 0 10.3941 0Z" fill="#1E1E1E" />
                        <path d="M25 10.9166V10.1786C25 10.0785 24.9467 10.0119 24.8402 10.0119H17.1598C17.0639 10.0119 17 10.0785 17 10.1786V10.9166C17 11.0166 17.0639 11.0833 17.1598 11.0833H24.8402C24.9467 11.0833 25 11.0166 25 10.9166ZM20.1318 8.53586C20.3981 8.59143 20.6644 8.62478 20.9308 8.62478C22.7949 8.62478 24.4993 7.20213 24.9041 5.17931C24.968 4.86811 25 4.55691 25 4.2457C25 2.27845 23.7217 0.511263 21.8575 0.0889152C21.5806 0.0333432 21.3142 0 21.0479 0C19.1838 0 17.5007 1.41153 17.0852 3.43435C17.0213 3.74555 17 4.05676 17 4.35685C17 6.33521 18.257 8.11351 20.1318 8.53586ZM20.3236 7.58002C19.0133 7.29105 18.5872 6.14627 18.5872 4.94591C18.5872 4.56802 18.6298 4.1679 18.7044 3.80113C18.9814 2.42294 19.7483 0.989182 21.1545 0.989182C21.3142 0.989182 21.4847 1.01141 21.6658 1.05587C22.976 1.34484 23.4128 2.47851 23.4128 3.67887C23.4128 4.05676 23.3702 4.44576 23.2956 4.81254C23.008 6.19072 22.2304 7.6356 20.8242 7.6356C20.6644 7.6356 20.494 7.62448 20.3236 7.58002Z" fill="#1E1E1E" />
                    </svg>
                    <p>A01</p>
                </div>
            </div>
            <div className='flex flex-row justify-around mt-[32px]'>
                <div className='flex flex-col'>
                    <p className='font-Inter text-[10px] font-semibold text-[#1E1E1E]'>Payable $6,600.00</p>
                    <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>Dues 15/08/2023</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>Issued 01/08/2023</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>Ref. #INV-057</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-Inter text-[10px] font-semibold text-[#1E1E1E]'>Billed to</p>
                    <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>Company Name</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>Company Address</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>City, Country - 00000</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>phone</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-Inter text-[10px] font-semibold text-[#1E1E1E]'>From</p>
                    <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>Panda, Inc</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>Business Address</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>City, State, IN - 000 000</p>
                    <p className='font-Inter text-[10px] font-light text-[#5E6470]'>TAX ID 00XXXXX1234X0XX</p>
                </div>
            </div>
            <div className='flex flex-row ml-auto mr-[42px] mt-[64px] gap-[16px]'>
                <div className='w-[2px] h-[196px] bg-[#008678]'></div>
                <div className='flex flex-col'>
                    <p className='font-Inter text-[10px] font-bold text-[#1E1E1E]'>Order items</p>
                    <div className='flex flex-col gap-[12px] mt-[16px]'>
                        <div className='flex flex-row justify-between'>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>Item description</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>Qty</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470] uppercase'>Rate</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>Amount</p>
                        </div>
                        <div className='flex flex-row justify-between gap-[12px]'>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>Item Name</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>1</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470] uppercase'>$3,000.00</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>$3,000.00</p>
                        </div>
                        <div className='flex flex-row justify-between gap-[12px]'>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>Item Name</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>1</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470] uppercase'>$3,000.00</p>
                            <p className='font-Inter text-[8px] font-semibold text-[#5E6470]'>$3,000.00</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="387" height="2" viewBox="0 0 387 2" fill="none">
                            <path d="M0 1H387" stroke="#D7DAE0" />
                        </svg>
                        <div className='flex flex-row justify-between gap-[12px]'>
                            <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>Subtotal</p>
                            <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>$6,000.00</p>
                        </div>
                        <div className='flex flex-row justify-between gap-[12px]'>
                            <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>Tax (10%)</p>
                            <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>$6,00.00</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="387" height="2" viewBox="0 0 387 2" fill="none">
                            <path d="M0 1H387" stroke="#D7DAE0" stroke-width="0.5" />
                        </svg>
                        <div className='flex flex-row justify-between gap-[12px]'>
                            <div className='flex flex-row'>
                                <p className='font-Inter text-[12px] font-bold text-[#1E1E1E]'>Total</p>
                                <p className='font-Inter text-[12px] font-bold text-[#5E6470]'>(USD)</p>
                            </div>
                            <p className='font-Inter text-[10px] font-semibold text-[#008678]'>$6,600.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col ml-auto mr-[32px] mt-auto mb-[28px]'>
                <div className='flex flex-row gap-[24px] justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="62" viewBox="0 0 2 62" fill="none">
                        <path d="M1 1V61" stroke="#5E6470" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <div className='flex flex-col'>
                        <p className='font-Inter text-[10px] font-semibold text-[#1E1E1E]'>Payment details</p>
                        <p className='font-Inter text-[10px] font-normal text-[#5E6470]'>Please pay within 15 days of</p>
                        <p className='font-Inter text-[10px] font-normal text-[#5E6470]'>receiving this invoice.</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-Inter text-[10px] font-medium text-[#1E1E1E]'>Bank name</p>
                        <p className='font-Inter text-[10px] font-medium text-[#1E1E1E]'>IFS code</p>
                        <p className='font-Inter text-[10px] font-medium text-[#1E1E1E]'>Swift code</p>
                        <p className='font-Inter text-[10px] font-medium text-[#1E1E1E]'>Account #</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-Inter text-[10px] font-medium text-[#5E6470]'>ABCD BANK</p>
                        <p className='font-Inter text-[10px] font-medium text-[#5E6470]'>ABCD000XXXX</p>
                        <p className='font-Inter text-[10px] font-medium text-[#5E6470]'>ABCDUSBBXXX</p>
                        <p className='font-Inter text-[10px] font-medium text-[#5E6470]'>3747489 2300011</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                        <path d="M1 1V13" stroke="#5E6470" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <p className='font-Inter text-[10px] font-semibold text-[Thanks for the business.]'>Thanks for the business.</p>
                    <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>hello@email.com</p>
                    <p className='font-Inter text-[10px] font-semibold text-[#5E6470]'>+91 00000 00000</p>
                </div>
            </div>
        </div>
    )
}

export default InvoicePdf
