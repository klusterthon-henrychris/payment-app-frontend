import React from 'react'

function Client() {
    return (
        <div className='w-full h-screen bg-[#F3F3F3] flex flex-col'>
            <button className='ml-auto bg-[#008678] text-[#fff] rounded-[8px] p-3 mt-[24px] mr-[24px]'>+ Add new client</button>
            <div className='flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] w-[1100px] py-2'>
                <p className='text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]'>Client List</p>
                <div className='flex flex-row gap-[8px] items-center'>
                    <div className='flex flex-row items-center'>
                        <form className="flex items-center">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input type="text" id="voice-search" style={{ textIndent: "16px" }} className="w-[283px] h-[25px] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-[#1E1E1E]" placeholder="Search..." required />
                                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto ml-[24px]">
                <table className="w-[1100px] text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Client name
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Phone number
                            </th>
                            <th scope="col" className="px-6 py-3">
                            No. Invoices
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Billing address
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                1
                            </th>
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            Esther Howard
                            </th>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            Ehoward@email.com
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            +234 84514786598
                            </td>
                            <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                25
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            2972 Westheimer Rd. Santa Ana, Illinois 85486 
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                2
                            </th>
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                NCourtney Henry
                            </th>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            Ehoward@email.com
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            +234 84514786598
                            </td>
                            <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                25
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            1901 Thornridge Cir. Shiloh, Hawaii 81063
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                3
                            </th>
                            <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            Dianne Russell
                            </th>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            Ehoward@email.com
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            +234 84514786598
                            </td>
                            <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                25
                            </td>
                            <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                            2972 Westheimer Rd. Santa Ana, Illinois 85486 
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-[#fff] w-[1100px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex'>
                <p className='mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]'>Showing 1-50 of 2000</p></div>
        </div>
    )
}

export default Client
