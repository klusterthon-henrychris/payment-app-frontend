"use client"
import React, { useState, useEffect } from 'react'
import { searchProducts } from './invoiceAction/SearchProducts'
import Image from 'next/image'
import { CatalogueItem } from '../Catalogue/Catalogue'
import InvoicePdf from './InvoicePdf'
import SendInvoice from './SendInvoice'
import InvoiceSent from './InvoiceSent'

const CreateInvoice = () => {
  //Catalogue creation model
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [modelContent, setModelContent] = useState(1)
  //Products
  const [products, setProducts] = useState<CatalogueItem[]>([])
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>({});
  const [amount, setAmount] = useState(0)
  // State to store selected items
  const [selectedItems, setSelectedItems] = useState<{ [itemId: string]: { name: string, price: number, quantity: number } }>({});
  //Warning
  const [warning, setWarning] = useState("")
  useEffect(() => {
    async function getSearchProducts() {
      const data = await searchProducts();
      if (data && data?.data) {
        console.log("data:", data)
        const initialQuantities = data.data.items.reduce((acc: { [productId: string]: number }, item: CatalogueItem) => {
          acc[item.id] = 0;
          return acc;
        }, {});
        setQuantities(initialQuantities);
        setProducts(data?.data.items)
      }
    }
    getSearchProducts()
  }, [])

  useEffect(() => {
    if (isModelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModelOpen]);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedItems]);

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen)
  }
  const closeModel = () => {
    setIsModelOpen(false)
    setModelContent(1)
    setSelectedItems({})
  }
  // Function to update the quantity for a specific product
  const updateQuantity = (productId: string, increment: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, prevQuantities[productId] + increment), // Ensure quantity is not negative
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const itemId in selectedItems) {
      const { price, quantity } = selectedItems[itemId];
      totalPrice += price * quantity;
    }
    setAmount(totalPrice);
  };

  const handleNextPageClick = () => {
    setModelContent((prev) => prev + 1)
  }
  return (
    <div className='flex'>
      <button className="ml-auto bg-[#008678] text-[#fff] rounded-[8px] p-3 mt-[24px] mr-[24px]" onClick={toggleModel}>
        + Generate new invoice
      </button>
      {isModelOpen && <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        zIndex: "9999",
        transition: "opacity 0.3s ease-in-out",
        backdropFilter: "blur(8px)"
      }}>{modelContent === 1 && <figure className='w-[428px] h-[602px] bg-[#fff] rounded-[8px] mt-[96px] mx-auto relative overflow-y-auto'>
        {warning.length > 0 && (
          <div className='w-full h-10 bg-[red] flex justify-center items-center'>
            <p className='text-[#fff]'>{warning}</p>
          </div>
        )}
        <div className='flex flex-row justify-between'>
          <p className='text-[16px] font-Satoshi text-[#000] font-bold ml-[24px] mt-[24px]'>Generate invoice</p>
          <button className='mr-[24px]' onClick={closeModel}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#1E1E1E" />
              <path d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z" fill="#1E1E1E" />
              <path d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z" fill="#1E1E1E" />
            </svg>
          </button>
        </div>
        <div className='flex flex-row items-center ml-[24px] mt-[24px]'>
          <form className="flex items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <input type="text" id="voice-search" style={{ textIndent: "16px" }} className="w-[380px] h-[40px] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-[#1E1E1E]" placeholder="Search..." required />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        {products.length > 0 && products.map((item, index) => (
          <div className='flex flex-row items-center justify-between mt-[24px]' key={index}>
            <div className='flex flex-row items-center ml-[24px] gap-[8px]'>
              <input type="checkbox" onChange={(e) => {
                const isChecked = e.target.checked;
                setSelectedItems((prevSelectedItems) => {
                  if (isChecked) {
                    return {
                      ...prevSelectedItems,
                      [item.id]: {
                        name: item.name,
                        price: item.price,
                        quantity: quantities[item.id],
                      },
                    };
                  } else {
                    const { [item.id]: removedItem, ...rest } = prevSelectedItems;
                    return rest;
                  }
                });
              }} />
              <Image src={item.imageUrl} height={50} width={50} alt={`Product: ${item.name}`} />
              <div className='flex flex-col items-center'>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
            <div className='flex flex-row items-center mr-[24px] gap-[8px]'>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <input id="quantity" placeholder='0' type="number" value={quantities[item.id]} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)} style={{ textIndent: "16px" }} className="w-[56px] h-[40px] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-[#9A9A9A]" required />
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
        <div className='flex flex-row justify-between mt-[24px]'>
          <button className='ml-[24px] absolute bottom-[24px] text-[#F44336] font-Satoshi text-[14px] font-medium' onClick={closeModel}>Cancel</button>
          <button className='absolute bottom-[24px] right-[24px] w-20 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium' onClick={handleNextPageClick}>Next</button>
        </div>
      </figure>}
        {modelContent === 2 && amount && (
          <div className='flex flex-row gap-[24px] justify-center'>
            <InvoicePdf />
            <SendInvoice close={closeModel} amount={amount} invoiceItems={selectedItems} />
          </div>
        )}
        {modelContent === 3 && <InvoiceSent open={isModelOpen} close={closeModel} />}
      </div>}
    </div>
  )
}

export default CreateInvoice
