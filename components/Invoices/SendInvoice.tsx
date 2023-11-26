"use client"
import React, { useState, useEffect } from 'react'
import { getAllClients, getClientById } from '@/contexts/apiContext';
import { error } from 'console';
import { createInvoice } from './invoiceAction/Create';
import { getBusinessOfLoggedInUser } from './invoiceAction/GetBusinessOfLoggedInUser';
import { getClientsById } from './invoiceAction/GetClientsById';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface InvoiceProps {
  close: () => void;
  setModelContent: React.Dispatch<React.SetStateAction<number>>;
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
const SendInvoice = ({ close, setModelContent, amount, invoiceItems }: InvoiceProps) => {
  const [clients, setClients] = useState<ClientsType[]>([])
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [businessId, setBusinessId] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
    if (selectedClient && selectedDate) {
      try {
        const invoiceItemsArray = Object.values(invoiceItems).map(item => ({
          Name: item.name,
          Price: item.price,
          Quantity: item.quantity,
        }));

        await createInvoice(amount, invoiceItemsArray, billingAddress, selectedClient, businessId, selectedDate);
        setModelContent((prev)=>prev+1)
      } catch (error) {
        console.error('Error creating invoice:', error);
      }
    }
  }

  return (
    <div className='w-[428px] h-[444px] bg-[#fff] rounded-[8px] flex flex-col'>
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
      <div className='flex flex-col gap-[4px] ml-[24px] mt-[24px] relative'>
        <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Due date</label>
        <div className='flex flex-row items-center'>
          <DatePicker className='w-[380px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9]  text-[14px] outline-none placeholder:text-[#9A9A9A]'
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
          />
          <p style={{ textIndent: "16px" }} className='absolute right-100 font-Satoshi font-normal text-[14px] text-[#9A9A9A]'>{selectedDate ? "" : "DD - MM - YYYY"}</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-10'>
            <path d="M5.33325 3.83325C5.05992 3.83325 4.83325 3.60659 4.83325 3.33325V1.33325C4.83325 1.05992 5.05992 0.833252 5.33325 0.833252C5.60659 0.833252 5.83325 1.05992 5.83325 1.33325V3.33325C5.83325 3.60659 5.60659 3.83325 5.33325 3.83325Z" fill="#1E1E1E" />
            <path d="M10.6667 3.83325C10.3934 3.83325 10.1667 3.60659 10.1667 3.33325V1.33325C10.1667 1.05992 10.3934 0.833252 10.6667 0.833252C10.9401 0.833252 11.1667 1.05992 11.1667 1.33325V3.33325C11.1667 3.60659 10.9401 3.83325 10.6667 3.83325Z" fill="#1E1E1E" />
            <path d="M5.66667 9.66655C5.58 9.66655 5.49333 9.64656 5.41333 9.61322C5.32667 9.57989 5.26 9.53321 5.19333 9.47321C5.07333 9.34654 5 9.17988 5 8.99988C5 8.91322 5.02 8.82655 5.05333 8.74655C5.08667 8.66655 5.13333 8.59322 5.19333 8.52655C5.26 8.46655 5.32667 8.41987 5.41333 8.38654C5.65333 8.28654 5.95333 8.33989 6.14 8.52655C6.26 8.65322 6.33333 8.82655 6.33333 8.99988C6.33333 9.03988 6.32667 9.08656 6.32 9.13322C6.31333 9.17322 6.3 9.21322 6.28 9.25322C6.26667 9.29322 6.24667 9.33321 6.22 9.37321C6.2 9.40655 6.16667 9.43988 6.14 9.47321C6.01333 9.59321 5.84 9.66655 5.66667 9.66655Z" fill="#1E1E1E" />
            <path d="M7.99992 9.66658C7.91325 9.66658 7.82658 9.64659 7.74658 9.61326C7.65992 9.57992 7.59325 9.53324 7.52659 9.47324C7.40659 9.34658 7.33325 9.17992 7.33325 8.99992C7.33325 8.91325 7.35325 8.82658 7.38659 8.74658C7.41992 8.66658 7.46659 8.59325 7.52659 8.52659C7.59325 8.46659 7.65992 8.41991 7.74658 8.38657C7.98658 8.27991 8.28658 8.33992 8.47325 8.52659C8.59325 8.65325 8.66659 8.82658 8.66659 8.99992C8.66659 9.03992 8.65992 9.08659 8.65325 9.13326C8.64659 9.17326 8.63325 9.21325 8.61325 9.25325C8.59992 9.29325 8.57992 9.33325 8.55325 9.37325C8.53325 9.40658 8.49992 9.43991 8.47325 9.47324C8.34658 9.59324 8.17325 9.66658 7.99992 9.66658Z" fill="#1E1E1E" />
            <path d="M10.3334 9.66658C10.2467 9.66658 10.1601 9.64659 10.0801 9.61326C9.99341 9.57992 9.92675 9.53324 9.86008 9.47324C9.83342 9.43991 9.80675 9.40658 9.78008 9.37325C9.75341 9.33325 9.73342 9.29325 9.72008 9.25325C9.70008 9.21325 9.68675 9.17326 9.68008 9.13326C9.67342 9.08659 9.66675 9.03992 9.66675 8.99992C9.66675 8.82658 9.74008 8.65325 9.86008 8.52659C9.92675 8.46659 9.99341 8.41991 10.0801 8.38657C10.3267 8.27991 10.6201 8.33992 10.8067 8.52659C10.9267 8.65325 11.0001 8.82658 11.0001 8.99992C11.0001 9.03992 10.9934 9.08659 10.9867 9.13326C10.9801 9.17326 10.9667 9.21325 10.9467 9.25325C10.9334 9.29325 10.9134 9.33325 10.8867 9.37325C10.8667 9.40658 10.8334 9.43991 10.8067 9.47324C10.6801 9.59324 10.5067 9.66658 10.3334 9.66658Z" fill="#1E1E1E" />
            <path d="M5.66667 12C5.58 12 5.49333 11.9801 5.41333 11.9467C5.33333 11.9134 5.26 11.8667 5.19333 11.8067C5.07333 11.68 5 11.5067 5 11.3334C5 11.2467 5.02 11.16 5.05333 11.08C5.08667 10.9934 5.13333 10.92 5.19333 10.86C5.44 10.6134 5.89333 10.6134 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3334C6.33333 11.5067 6.26 11.68 6.14 11.8067C6.01333 11.9267 5.84 12 5.66667 12Z" fill="#1E1E1E" />
            <path d="M7.99992 12C7.82659 12 7.65325 11.9267 7.52659 11.8067C7.40659 11.68 7.33325 11.5067 7.33325 11.3334C7.33325 11.2467 7.35325 11.16 7.38659 11.08C7.41992 10.9934 7.46659 10.92 7.52659 10.86C7.77325 10.6134 8.22658 10.6134 8.47325 10.86C8.53325 10.92 8.57992 10.9934 8.61325 11.08C8.64658 11.16 8.66659 11.2467 8.66659 11.3334C8.66659 11.5067 8.59325 11.68 8.47325 11.8067C8.34658 11.9267 8.17325 12 7.99992 12Z" fill="#1E1E1E" />
            <path d="M10.3334 11.9999C10.1601 11.9999 9.98675 11.9266 9.86008 11.8066C9.80008 11.7466 9.75342 11.6733 9.72008 11.5866C9.68675 11.5066 9.66675 11.4199 9.66675 11.3333C9.66675 11.2466 9.68675 11.1599 9.72008 11.0799C9.75342 10.9933 9.80008 10.9199 9.86008 10.8599C10.0134 10.7066 10.2467 10.6333 10.4601 10.6799C10.5067 10.6866 10.5467 10.6999 10.5867 10.7199C10.6267 10.7333 10.6667 10.7533 10.7067 10.78C10.7401 10.8 10.7734 10.8333 10.8067 10.8599C10.9267 10.9866 11.0001 11.1599 11.0001 11.3333C11.0001 11.5066 10.9267 11.6799 10.8067 11.8066C10.6801 11.9266 10.5067 11.9999 10.3334 11.9999Z" fill="#1E1E1E" />
            <path d="M13.6666 6.56006H2.33325C2.05992 6.56006 1.83325 6.33339 1.83325 6.06006C1.83325 5.78673 2.05992 5.56006 2.33325 5.56006H13.6666C13.9399 5.56006 14.1666 5.78673 14.1666 6.06006C14.1666 6.33339 13.9399 6.56006 13.6666 6.56006Z" fill="#1E1E1E" />
            <path d="M10.6667 15.1666H5.33333C2.9 15.1666 1.5 13.7666 1.5 11.3333V5.66659C1.5 3.23325 2.9 1.83325 5.33333 1.83325H10.6667C13.1 1.83325 14.5 3.23325 14.5 5.66659V11.3333C14.5 13.7666 13.1 15.1666 10.6667 15.1666ZM5.33333 2.83325C3.42667 2.83325 2.5 3.75992 2.5 5.66659V11.3333C2.5 13.2399 3.42667 14.1666 5.33333 14.1666H10.6667C12.5733 14.1666 13.5 13.2399 13.5 11.3333V5.66659C13.5 3.75992 12.5733 2.83325 10.6667 2.83325H5.33333Z" fill="#1E1E1E" />
          </svg>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-[24px]'>
        <button className='ml-[24px] text-[#F44336] font-Satoshi text-[14px] font-medium' onClick={close}>Cancel</button>
        <button className='w-50 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium mr-[24px]' onClick={create}>Send Invoice</button>
      </div>
    </div>
  )
}

export default SendInvoice
