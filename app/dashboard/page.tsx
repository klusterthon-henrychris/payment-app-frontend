import React from 'react'

function Dashboard() {
    return (
        <div className='w-full h-full bg-[#F3F3F3] flex flex-col'>
            <div className='flex flex-row justify-between items-center mt-[24px]'>
                <p className='ml-[24px] text-[24px] font-bold font-Satoshi text-[#1E1E1E]'>Hi Wade 👋</p>
                <button className='ml-auto bg-[#008678] text-[#fff] rounded-[8px] p-3 mr-[24px]'>+ Generate Invoice</button>
            </div>
            <div className='flex flex-row gap-[24px] ml-[24px] mt-[24px]'>
                <div className='w-[255px] h-[100px] rounded-[8px] bg-[#fff] flex flex-col'>
                    <p className='font-Satoshi text-[#9A9A9A] text-[10px] font-bold ml-[24px] mt-[24px]'>No. of Clients</p>
                    <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold ml-[24px]'>100</p>
                </div>
                <div className='w-[255px] h-[100px] rounded-[8px] bg-[#fff] flex flex-col'>
                    <p className='font-Satoshi text-[#9A9A9A] text-[10px] font-bold ml-[24px] mt-[24px]'>Catalogue Size</p>
                    <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold ml-[24px]'>158</p>
                </div>
                <div className='w-[255px] h-[100px] rounded-[8px] bg-[#fff] flex flex-col'>
                    <p className='font-Satoshi text-[#9A9A9A] text-[10px] font-bold ml-[24px] mt-[24px]'>Pending Invoices</p>
                    <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold ml-[24px]'>17</p>
                </div>
                <div className='w-[255px] h-[100px] rounded-[8px] bg-[#fff] flex flex-col'>
                    <p className='font-Satoshi text-[#9A9A9A] text-[10px] font-bold ml-[24px] mt-[24px]'>Expired Invoices</p>
                    <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold ml-[24px]'>8</p>
                </div>
            </div>
            <div className='flex flex-row gap-[24px] mt-[24px] ml-[24px]'>
                <div className='w-[680px] h-[400px] bg-[#fff] rounded-[8px]'>
                    Sales trend
                </div>
                <div className='flex flex-col gap-[24px] w-[385px] h-[400px] rounded-[8px] bg-[#fff]'>
                    <div className='w-[340px] h-[130px] bg-[#DCF7ED] rounded-[8px] mt-[24px] ml-[24px]'>
                        <p className='font-Satoshi text-[#1E1E1E] text-[10px] font-bold mt-[24px] ml-[16px]'>Total Earnings</p>
                        <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold mt-[24px] ml-[16px]'>$200,546</p>
                    </div>
                    <div className='w-[340px] h-[130px] bg-[#FFF6DA] rounded-[8px] mt-[24px] ml-[24px]'>
                        <p className='font-Satoshi text-[#1E1E1E] text-[10px] font-bold mt-[24px] ml-[16px]'>Estimated Future Earnings</p>
                        <p className='font-Satoshi text-[#1E1E1E] text-[32px] font-bold mt-[24px] ml-[16px]'>$48,025</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-[#1E1E1E] font-Satoshi text-[10px] font-normal ml-[24px]'>From 325 payments</p>
                        <div className='flex flex-row mr-[24px] items-center gap-[4px]'>
                            <p className='font-Satoshi text-[14px] font-medium text-[#008678]'>See all trasactions</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008678" className="w-[16px] h-[16px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between mt-[24px]'>
                <div className=''>
                    <div className='flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] py-5 rounded-[8px]'>
                        <p className='text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]'>Payment history</p>
                        <div className='flex flex-row mr-[24px] items-center gap-[4px]'>
                            <p className='font-Satoshi text-[14px] font-medium text-[#008678]'>See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008678" className="w-[16px] h-[16px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto ml-[24px]">
                        <table className="text-sm text-left rtl:text-right text-gray-500 rounded-[8px]">
                            <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Client name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tx Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount
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
                                        4584879584
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        $250
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
                                        4584879584
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        $250
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
                                        4584879584
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        $250
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-[#fff] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex items-center'>
                        <p className='mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]'>Showing 1-50 of 2000</p></div>
                </div>
                <div className='mr-[24px]'>
                    <div className='flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] py-5 rounded-[8px]'>
                        <p className='text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]'>Invoices</p>
                        <div className='flex flex-row mr-[24px] items-center gap-[4px]'>
                            <p className='font-Satoshi text-[14px] font-medium text-[#008678]'>See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008678" className="w-[16px] h-[16px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto ml-[24px]">
                        <table className="text-sm text-left rtl:text-right text-gray-500 rounded-[8px]">
                            <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Issued Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Due Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Issued to
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        1
                                    </th>
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </th>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        $250
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        Leslie Alexander
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        -
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        2
                                    </th>
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </th>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        $250
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        Leslie Alexander
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        -
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        3
                                    </th>
                                    <th scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </th>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        $250
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                                        Nov 10, 2023
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        Leslie Alexander
                                    </td>
                                    <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                                        -
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-[#fff] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex items-center'>
                        <p className='mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]'>Showing 1-50 of 2000</p></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
