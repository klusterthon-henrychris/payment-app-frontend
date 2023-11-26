"use client"
import React, { useState, useEffect } from 'react'
import { getAllClients, getClientById } from '@/contexts/apiContext';
import { error } from 'console';
import { createInvoice } from './invoiceAction/Create';
import { getBusinessOfLoggedInUser } from './invoiceAction/GetBusinessOfLoggedInUser';
import { getClientsById } from './invoiceAction/GetClientsById';
interface InvoiceProps {
  close: () => void;
  amount: number;
  invoiceItems: object;
}
interface ClientsType {
  id: string,
  clientId: string,
  firstName: string,
  lastName: string,
  emailAddress: string,
  businessName: string,
  address: string
}
const SendInvoice = ({ close, amount, invoiceItems }: InvoiceProps) => {
  const [clients, setClients] = useState<ClientsType[]>([])
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [businessId, setBusinessId] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  useEffect(() => {
    async function fetchAllClients() {
      const data = await getAllClients()
      if (data && data?.data) {
        setClients(data?.data.items)
      }
    }
    fetchAllClients()
  }, [])

  useEffect(() => {
    async function fetchClientsById() {
      try {
        if (selectedClient.length > 0) {
          const data = await getClientsById(selectedClient);
          if (data && data?.data) {
            setBillingAddress(data.data.address);
          }
        }
      } catch (error) {
        console.error("Error fetching client by ID:", error);
      }
    }
    fetchClientsById();
  }, [selectedClient]);
  useEffect(() => {
    async function fetchBusiness() {
      const data = await getBusinessOfLoggedInUser()
      if (data && data?.data) {
        setBusinessId(data?.data.name)
      }
    }
    fetchBusiness()
  }, [])

  const create = async () => {
    if (selectedClient) {
      try {
        const invoiceItemsArray = Object.values(invoiceItems).map(item => ({
          Name: item.name,
          Price: item.price,
          Quantity: item.quantity,
        }));

        await createInvoice(amount, invoiceItemsArray, billingAddress, selectedClient, businessId);
        window.location.reload();
        close();
      } catch (error) {
        console.error('Error creating invoice:', error);
      }
    }
  }

  return (
    <div className='w-[428px] h-[374px] bg-[#fff] rounded-[8px] flex flex-col'>
      <div className='flex flex-row justify-between'>
        <p className='text-[16px] font-Satoshi text-[#000] font-bold ml-[24px] mt-[24px]'>Generate invoice</p>
        <button className='mr-[24px]' onClick={close}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#1E1E1E" />
            <path d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z" fill="#1E1E1E" />
            <path d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z" fill="#1E1E1E" />
          </svg>
        </button>
      </div>
      <div className='flex flex-col gap-[4px] ml-[24px] mt-[24px]'>
        <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Billed to</label>
        <select style={{ textIndent: "16px" }} placeholder='Select client' className='w-[380px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9] text-[14px] outline-none placeholder:text-[#9A9A9A]' onChange={((e) => setSelectedClient(e.target.value))}>
          <option>Select client</option>
          {clients.length > 0 && clients.map((item, index) => (
            <option key={index} value={item.clientId}>{item.firstName} {item.lastName}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-[4px] ml-[24px] mt-[24px]'>
        <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Email Message</label>
        <textarea style={{ textIndent: "16px" }} placeholder='Your message to client...' className='w-[380px] h-[104px] rounded-[8px] border border-[1px] border-[#D9D9D9]  text-[14px] outline-none placeholder:text-[#9A9A9A]' />
      </div>
      <div className='flex flex-row justify-between mt-[24px]'>
        <button className='ml-[24px] text-[#F44336] font-Satoshi text-[14px] font-medium' onClick={close}>Cancel</button>
        <button className='w-50 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium mr-[24px]' onClick={create}>Send Invoice</button>
      </div>
    </div>
  )
}

export default SendInvoice
