"use client"
import React, { useState, useEffect } from 'react'
import api from "@/utils/api";
import { toast } from "react-toastify";
import CreateInvoice from './CreateInvoice';

interface InvoiceItem {
    invoiceNo: string,
    amount: number,
    dueDate: string,
    dateOfIssuance: string
    status: string,
    invoiceItems: []
}

function Invoices() {
    const [invoices, setInvoices] = useState<InvoiceItem[]>([]);

    const getInvoices = async () => {
        try {
            const res = await api.get("invoices/all");
            if (res?.data?.success) {
                if (res?.data?.data.items) {
                    setInvoices(res?.data?.data.items)
                }
            } else {
                throw new Error("Error has occurred");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(
                `Error getting user: ${err?.response?.data?.errors[0]?.description}`
            );
        }
    };

    useEffect(() => {
        getInvoices();
    }, []);

    return (
        <div className='w-full h-screen bg-[#F3F3F3] flex flex-col'>
            <CreateInvoice />
            <div className='flex flex-row justify-between mt-[96px] ml-[24px] items-center bg-[#fff] w-[1100px] py-2'>
                <p className='text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]'>Invoice List</p>
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
                    <div className='w-[302px] h-[25px] bg-[#fff] py-6 px-16 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px]'></div>
                    <div className='w-[50px] h-[25px] bg-[#fff] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] mr-[60px]'></div>
                </div>
            </div>
            <div className="relative overflow-x-auto ml-[24px]">
                <table className="w-[1100px] text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Invoice No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Issued to
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Outstanding
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices && invoices.map((item, index) => (
                            <tr className="bg-white border-b" key={index}>
                                <td>
                                    <input type="checkbox" className='ml-4' />
                                </td>
                                <td scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">{new Date(item.dueDate).toLocaleDateString()}</td>
                                <td scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">{item.invoiceNo}</td>
                                <td>-</td>
                                <td scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">{item.amount}</td>
                                <td>-</td>
                                <td scope="row" className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-[#fff] w-[1100px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex'>
                <p className='mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]'>Showing 1-50 of 2000</p></div>
        </div>
    )
}

export default Invoices
