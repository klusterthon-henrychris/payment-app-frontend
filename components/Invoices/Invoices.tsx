"use client";
import React, { useState, useEffect } from "react";
import api from "@/utils/api";
import { toast } from "react-toastify";
import CreateInvoice from "./CreateInvoice";
import InvoiceOptions from "./InvoiceOptions";
import { getClientsById } from "./invoiceAction/GetClientsById";

interface InvoiceItem {
  id: string;
  clientId: string;
  invoiceNo: string;
  amount: number;
  dueDate: string;
  dateOfIssuance: string;
  status: string;
  invoiceItems: [];
  clientFirstName: string;
  clientLastName: string;
}

interface InvoicesProps {
  showButton?: boolean;
}

const Invoices: React.FC<InvoicesProps> = ({ showButton = true }) => {
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);

  const getInvoices = async () => {
    try {
      const res = await api.get("invoices/all");
      if (res?.data?.success) {
        if (res?.data?.data?.items) {
          // Iterate through invoices and fetch client details for each
          const updatedInvoices = await Promise.all(
            res.data.data.items.map(async (invoice: InvoiceItem) => {
              const client = await getClientsById(invoice.clientId);
              if (client?.data) {
                return {
                  ...invoice,
                  clientFirstName: client.data.firstName,
                  clientLastName: client.data.lastName,
                };
              }
              return invoice;
            })
          );

          setInvoices(updatedInvoices);
        }
        // if (res?.data?.data.items) {
        //     setInvoices(res?.data?.data.items)
        // }
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <div className="w-full h-screen bg-[#F3F3F3] flex flex-col max-w-screen">
      {showButton && (
        <>
          <CreateInvoice />
          <div className="flex flex-row justify-between mt-[96px] ml-[24px] items-center bg-[#fff] w -[1100px] py-2">
            <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
              Invoice List
            </p>
            {/* <div className='flex flex-row gap-[8px] items-center'>
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
                </div> */}
          </div>
        </>
      )}
      <div className="relative max-w-screen overflow-x-scroll overflow-y-visible">
        {invoices && invoices.length ? (
          <table className="w-[1100px] text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[65px] w-full">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
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
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {invoices.map((item, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td scope="row" className="px-6 py-4">
                    <input type="checkbox" className="ml-4" />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    {new Date(item.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    {item.invoiceNo}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    {item.clientFirstName} {item.clientLastName}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    {item.amount}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    0
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    {item.status}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    <InvoiceOptions invoiceId={item.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center h-[200px] w-full bg-white m-6 ml-0 mt-2">
            <p className="title mt-10">No invoices yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoices;
