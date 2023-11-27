"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { CatalogueItem } from '@/components/Catalogue/Catalogue';
import api from "@/utils/api";
import { toast } from "react-toastify";

interface CatalogueProps {
    Id: string
}
const ViewCatalogue = ({ Id }: CatalogueProps) => {
    const [catalogue, setCatalogue] = useState<CatalogueItem[]>([])

    useEffect(() => {
        async function fetchCatalogue() {
            try {
                const res = await api.get(`products/${Id}`);
                if (res?.data?.success) {
                    setCatalogue(res?.data?.data.items);
                } else {
                    throw new Error("Error has occurred");
                }
            } catch (err: any) {
                console.error(err);
                toast.error(
                    `Error getting user: ${err?.response?.data?.errors[0]?.description}`
                );
            }
        }
        fetchCatalogue()
    }, [])

    return (
        <div className='w-full min-h-screen bg-light-white p-6 flex'>
            <div className='flex flex-row ml-auto mr-[16px]'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#F44336" />
                    <path d="M33 18.73C32.98 18.73 32.95 18.73 32.92 18.73C27.63 18.2 22.35 18 17.12 18.53L15.08 18.73C14.66 18.77 14.29 18.47 14.25 18.05C14.21 17.63 14.51 17.27 14.92 17.23L16.96 17.03C22.28 16.49 27.67 16.7 33.07 17.23C33.48 17.27 33.78 17.64 33.74 18.05C33.71 18.44 33.38 18.73 33 18.73Z" fill="#F44336" />
                    <path d="M20.5 17.72C20.46 17.72 20.42 17.72 20.37 17.71C19.97 17.64 19.69 17.25 19.76 16.85L19.98 15.54C20.14 14.58 20.36 13.25 22.69 13.25H25.31C27.65 13.25 27.87 14.63 28.02 15.55L28.24 16.85C28.31 17.26 28.03 17.65 27.63 17.71C27.22 17.78 26.83 17.5 26.77 17.1L26.55 15.8C26.41 14.93 26.38 14.76 25.32 14.76H22.7C21.64 14.76 21.62 14.9 21.47 15.79L21.24 17.09C21.18 17.46 20.86 17.72 20.5 17.72Z" fill="#F44336" />
                    <path d="M27.21 34.75H20.79C17.3 34.75 17.16 32.82 17.05 31.26L16.4 21.19C16.37 20.78 16.69 20.42 17.1 20.39C17.52 20.37 17.87 20.68 17.9 21.09L18.55 31.16C18.66 32.68 18.7 33.25 20.79 33.25H27.21C29.31 33.25 29.35 32.68 29.45 31.16L30.1 21.09C30.13 20.68 30.49 20.37 30.9 20.39C31.31 20.42 31.63 20.77 31.6 21.19L30.95 31.26C30.84 32.82 30.7 34.75 27.21 34.75Z" fill="#F44336" />
                    <path d="M25.66 29.25H22.33C21.92 29.25 21.58 28.91 21.58 28.5C21.58 28.09 21.92 27.75 22.33 27.75H25.66C26.07 27.75 26.41 28.09 26.41 28.5C26.41 28.91 26.07 29.25 25.66 29.25Z" fill="#F44336" />
                    <path d="M26.5 25.25H21.5C21.09 25.25 20.75 24.91 20.75 24.5C20.75 24.09 21.09 23.75 21.5 23.75H26.5C26.91 23.75 27.25 24.09 27.25 24.5C27.25 24.91 26.91 25.25 26.5 25.25Z" fill="#F44336" />
                </svg>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#008678" />
                    <path d="M32.62 25.07C32.24 25.07 31.92 24.78 31.87 24.4C31.63 22.14 30.41 20.09 28.53 18.79C28.19 18.55 28.11 18.09 28.34 17.75C28.58 17.41 29.05 17.33 29.38 17.56C31.62 19.11 33.06 21.55 33.35 24.24C33.39 24.65 33.1 25.02 32.68 25.07C32.67 25.07 32.64 25.07 32.62 25.07Z" fill="#008678" />
                    <path d="M15.49 25.12C15.46 25.12 15.44 25.12 15.41 25.12C15 25.07 14.7 24.7 14.74 24.29C15.01 21.6 16.44 19.17 18.65 17.6C18.99 17.36 19.46 17.44 19.7 17.78C19.94 18.12 19.86 18.59 19.52 18.83C17.66 20.14 16.46 22.19 16.23 24.45C16.2 24.83 15.87 25.12 15.49 25.12Z" fill="#008678" />
                    <path d="M24.06 34.61C22.58 34.61 21.17 34.27 19.85 33.61C19.48 33.42 19.33 32.97 19.52 32.6C19.71 32.23 20.16 32.08 20.53 32.27C22.69 33.36 25.29 33.38 27.47 32.33C27.84 32.15 28.29 32.31 28.47 32.68C28.65 33.05 28.49 33.5 28.12 33.68C26.84 34.3 25.48 34.61 24.06 34.61Z" fill="#008678" />
                    <path d="M24.06 20.44C22.11 20.44 20.53 18.86 20.53 16.91C20.53 14.96 22.11 13.38 24.06 13.38C26.01 13.38 27.59 14.96 27.59 16.91C27.59 18.86 26 20.44 24.06 20.44ZM24.06 14.89C22.94 14.89 22.03 15.8 22.03 16.92C22.03 18.04 22.94 18.95 24.06 18.95C25.18 18.95 26.09 18.04 26.09 16.92C26.09 15.8 25.17 14.89 24.06 14.89Z" fill="#008678" />
                    <path d="M16.83 32.67C14.88 32.67 13.3 31.09 13.3 29.14C13.3 27.2 14.88 25.61 16.83 25.61C18.78 25.61 20.36 27.19 20.36 29.14C20.36 31.08 18.78 32.67 16.83 32.67ZM16.83 27.11C15.71 27.11 14.8 28.02 14.8 29.14C14.8 30.26 15.71 31.17 16.83 31.17C17.95 31.17 18.86 30.26 18.86 29.14C18.86 28.02 17.95 27.11 16.83 27.11Z" fill="#008678" />
                    <path d="M31.17 32.67C29.22 32.67 27.64 31.09 27.64 29.14C27.64 27.2 29.22 25.61 31.17 25.61C33.12 25.61 34.7 27.19 34.7 29.14C34.69 31.08 33.11 32.67 31.17 32.67ZM31.17 27.11C30.05 27.11 29.14 28.02 29.14 29.14C29.14 30.26 30.05 31.17 31.17 31.17C32.29 31.17 33.2 30.26 33.2 29.14C33.19 28.02 32.29 27.11 31.17 27.11Z" fill="#008678" />
                </svg>
                <button className='w-20 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium'>Edit product</button>
            </div>
            {catalogue && <div className='w-[1152px] h-[248px] bg-[#fff] rounded-[8px] flex flex-row mt-[12px]'>
                <Image src={catalogue.imageUrl} width={100} height={100} alt={`catalogue image-${catalogue.id}`} />
                <div className='flex flex-col ml-[24px]'>
                    <p className='font-Satoshi text-[32px] font-bold text-[#1E1E1E]'>{catalogue.name}</p>
                    <p className='font-Satoshi text-[18px] font-bold text-[#1E1E1E] mt-[8px]'>₦{catalogue.price}</p>
                    <p className='font-Satoshi text-[10px] font-bold text-[#1E1E1E] mt-[24px]'>Description</p>
                    <p className='font-Satoshi text-[14px] font-bold text-[#1E1E1E] mt-[8px]'>{catalogue.description}</p>
                </div>
            </div>}
        </div>
    )
}

export default ViewCatalogue
