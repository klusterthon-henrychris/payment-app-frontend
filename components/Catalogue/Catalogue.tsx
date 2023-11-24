"use client"
import Image from 'next/image'
import { it } from 'node:test'
import React, { useEffect, useState } from 'react'
import CreateCatalogue from './CreateCatalogue'
import CatalogueOptions from './CatalogueOptions'
import api from "@/utils/api";
import { toast } from "react-toastify";

interface CatalogueItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  productType: string;
}
const Catalogue = () => {
  const [catalogues, setCatalogues] = useState<CatalogueItem[]>([]);
  const [isToggled, setIsToggled] = useState<boolean[]>([]);

  const handleToggle = (index: number) => {
    const newToggledState = [...isToggled];
    newToggledState[index] = !newToggledState[index];
    setIsToggled(newToggledState);
  };

  const getCatalogue = async () => {
    try {
      const res = await api.get("products/all");
      if (res?.data?.success) {
        console.log("res:", res?.data)
        setCatalogues(res?.data?.data)
        setIsToggled(new Array(res?.data?.data.length).fill(true));
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
    getCatalogue();
  }, []);
  
  return (
    <div className='w-full h-screen bg-[#F3F3F3] flex flex-col'>
      <CreateCatalogue />
      <div className="flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] w-[1100px] py-2 rounded-[8px]">
        <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
          Product List
        </p>
        <div className="flex flex-row gap-[8px] items-center">
          <div className="flex flex-row items-center">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  style={{ textIndent: "16px" }}
                  className="w-[283px] h-[25px] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-[#1E1E1E]"
                  placeholder="Search..."
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className='w-[302px] h-[25px] bg-[#fff] py-6 px-16 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px]'></div>
          <div className='w-[50px] h-[25px] bg-[#fff] py-6 font-Satoshi border border-[1px] border-[#D9D9D9] rounded-[8px] mr-[60px]'></div>
        </div>
      </div>
      <div className="flex flex-wrap space-x-[24px]">
        {catalogues.length > 0 && catalogues.map((item, index) => (
          <div key={index} className='w-[270px] h-[350px] bg-[#fff] rounded-[8px] flex flex-col mt-[24px] ml-[24px]'>
            <Image src={item.imageUrl} width={238} height={50} alt='catalogue-image' className='rounded-[8px] mx-auto mt-[16px]' />
            <div className='flex flex-row justify-between mt-[16px]'>
              <p className='text-[16px] text-[#1E1E1E] font-Satoshi font-normal ml-[16px]'>{item.name}</p>
              <CatalogueOptions />
            </div>
            <div className='flex flex-row justify-around mt-[16px] items-center'>
              <button
                className={`bg-[#008678] w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${isToggled[index] ? 'justify-end' : 'justify-start'}`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-[#fff] shadow-md transition-transform duration-300`}
                />
              </button>
              <div className='flex items-center justify-between w-[60px[ h-[24px] rounded-full border border-[1px] border-[#9A9A9A] p-4'>
                <p className='text-[#9A9A9A] text-[12px] font-Satoshi font-medium '>{item.productType}</p>
              </div>
              <p className='font-Satoshi text-[16px] text-[#1E1E1E] font-bold'>₦{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue
