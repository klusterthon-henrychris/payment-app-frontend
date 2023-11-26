"use client"
import React,{useState} from 'react'
import api from "@/utils/api";
import { toast } from "react-toastify";

interface OptionProps {
    params: { open: string, close: () => void, catalogueId: string }
}
const DeleteCatalogue = ({ params: { open, close, catalogueId } }: OptionProps) => {
    const deleteCatalogue = async () => {
        try {
          const res = await api.get(`products/:${catalogueId}`);
          if (res?.data?.success) {
            console.log("res:", res?.data);
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
    return (
        <div className='flex absolute'>
            {open && <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                zIndex: "9999",
                transition: "opacity 0.3s ease-in-out",
                backdropFilter: "blur(8px)"
            }}>
                <figure className='w-[428px] h-[196px] bg-[#fff] rounded-[8px] relative top-[30%] left-[35%]'>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[16px] font-Satoshi text-[#000] font-bold ml-[24px] mt-[24px]'>Delete product</p>
                            <button className='mr-[24px]' onClick={close}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#1E1E1E" />
                                    <path d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z" fill="#1E1E1E" />
                                    <path d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z" fill="#1E1E1E" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col ml-[24px]'>
                            <p className='text-[14px] font-Satoshi font-normal text-[#000]'>Are you sure you want to delete this product?</p>
                            <p className='text-[14px] font-Satoshi font-normal text-[#000]'>This action cannot be reversed.</p>
                        </div>
                        <div className='flex flex-row justify-between mt-[24px]'>
                            <button className='ml-[24px] absolute bottom-[24px] text-[#1E1E1E] font-Satoshi text-[14px] font-medium' onClick={close}>Cancel</button>
                            <button className='absolute bottom-[24px] right-[24px] w-20 h-10 rounded-[8px] p-2.5 bg-[#F44336] text-[#fff] font-Satoshi text-[14px] font-medium' onClick={deleteCatalogue}>Delete</button>
                        </div>
                    </div>
                </figure>
            </div>}
        </div>
    )
}

export default DeleteCatalogue
