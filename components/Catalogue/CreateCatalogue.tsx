"use client"
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { createCatalogue } from './actions/Create'
import { toast } from "react-toastify";

const CreateCatalogue = () => {
  //Catalogue creation model
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [modelContent, setModelContent] = useState(1)
  //Selected image file
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  //Catalogue creation required fields
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  //Warning
  const [warning, setWarning] = useState("")
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen)
  }
  const closeModel = () => {
    setIsModelOpen(false)
    setModelContent(1)
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Perform any additional validation if needed
      setSelectedFile(file);
      // Create a preview URL for the selected file
      const imageURL = URL.createObjectURL(file);
      setPreviewURL(imageURL);
    }
    setWarning("")
  };
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeSelectedPicture = () => {
    setSelectedFile(null)
  }
  const create = async () => {
    if (selectedFile) {
      try {
        await createCatalogue(name, type, description, price, quantity, selectedFile);
        window.location.reload();
        closeModel();
      } catch (error) {
        console.error('Error creating catalogue:', error);
      }
    } else {
      setWarning('Please select a file before creating a catalogue.');
      toast.warn('Please select a file before creating a catalogue.');
    }
  }

  return (
    <div className='flex'>
      <button className="ml-auto bg-[#008678] text-[#fff] rounded-[8px] p-3 mt-[24px] mr-[24px]" onClick={toggleModel}>
        + Add new product
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
      }}><figure className='w-[428px] h-[602px] bg-[#fff] rounded-[8px] mt-[96px] mx-auto relative'>
          {warning.length > 0 && (
            <div className='w-full h-10 bg-[red] flex justify-center items-center'>
              <p className='text-[#fff]'>{warning}</p>
            </div>
          )}
          <div className='flex flex-row justify-between'>
            <p className='text-[16px] font-Satoshi text-[#000] font-bold ml-[24px] mt-[24px]'>Add new product</p>
            <button className='mr-[24px]' onClick={closeModel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#1E1E1E" />
                <path d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z" fill="#1E1E1E" />
                <path d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z" fill="#1E1E1E" />
              </svg>
            </button>
          </div>
          {modelContent === 1 && (<div className='flex flex-col gap-[24px] justify-center items-center mt-[24px]'>
            <div className='flex flex-col gap-[4px]'>
              <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Product name</label>
              <input style={{ textIndent: "16px" }} placeholder='Name' className='w-[380px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9] outline-none text-[14px] placeholder:text-[#9A9A9A]' onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='flex flex-col gap-[4px]'>
              <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Product type</label>
              <select style={{ textIndent: "16px" }} placeholder='Select type' className='w-[380px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9] text-[14px] outline-none placeholder:text-[#9A9A9A]' onChange={(event) => setType(event.target.value)}>
                <option>Select type</option>
                <option>Physical</option>
                <option>Digital</option>
              </select>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Product description</label>
              <textarea style={{ textIndent: "16px" }} placeholder='Description' className='w-[380px] h-[104px] rounded-[8px] border border-[1px] border-[#D9D9D9]  text-[14px] outline-none placeholder:text-[#9A9A9A]' onChange={(event) => setDescription(event.target.value)} />
            </div>
            <div className='flex flex-col gap-[4px]'>
              <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Price</label>
              <div className='flex flex-row gap-[4px]'>
                <select style={{ textIndent: "16px" }} className='w-[84px] h-[40px] rounded-[8px] bg-[#9A9A9A] text-[#fff] border border-[1px] border-[#D9D9D9] text-[14px] outline-none placeholder:text-[#9A9A9A]'>
                  <option>USD</option>
                </select>
                <input type="number" style={{ textIndent: "16px" }} placeholder='0' className='w-[292px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9]  text-[14px] outline-none placeholder:text-[#9A9A9A]' onChange={(event) => setPrice(parseFloat(event.target.value))} />
              </div>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <label className='text-[#1E1E1E] text-[10px] font-bold font-Satoshi'>Quantity</label>
              <div className='flex flex-row gap-[4px]'>
                <select style={{ textIndent: "16px" }} className='w-[84px] h-[40px] rounded-[8px] bg-[#9A9A9A] text-[#fff] border border-[1px] border-[#D9D9D9] text-[14px] outline-none placeholder-[#9A9A9A] text-[#000]'>
                  <option>Limited</option>
                </select>
                <input style={{ textIndent: "16px" }} placeholder='0' className='w-[292px] h-[40px] rounded-[8px] border border-[1px] border-[#D9D9D9] text-[14px] outline-none placeholder:text-[#9A9A9A]' onChange={(event) => setQuantity(parseFloat(event.target.value))} />
              </div>
            </div>
          </div>)}
          {modelContent === 2 && (
            <div className='flex flex-col gap-[48px] justify-center items-center mt-[24px]'>
              <div className='flex flex-col'>
                <p className='text-[14px] font-Satoshi font-normal text-[#000]'>Add a high product image for this item to clearly describe</p>
                <p className='text-[14px] font-Satoshi font-normal text-[#000]'>what it looks like</p>
              </div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7202 45.5001H11.1802C8.14022 45.5001 5.36022 43.9601 3.76022 41.3601C2.16022 38.7601 2.02022 35.6001 3.38022 32.8601L6.82022 25.9601C7.94022 23.7201 9.74022 22.3201 11.7602 22.1001C13.7802 21.8801 15.8402 22.8801 17.4002 24.8201L17.8402 25.3801C18.7202 26.4601 19.7402 27.0401 20.7402 26.9401C21.7402 26.8601 22.6602 26.1401 23.3402 24.9201L27.1202 18.1001C28.6802 15.2801 30.7602 13.8201 33.0202 13.9201C35.2602 14.0401 37.1802 15.7201 38.4602 18.6801L44.7202 33.3001C45.8802 36.0001 45.6002 39.0801 43.9802 41.5401C42.3802 44.0401 39.6602 45.5001 36.7202 45.5001ZM12.3202 25.1001C12.2402 25.1001 12.1602 25.1001 12.0802 25.1201C11.0802 25.2201 10.1602 26.0201 9.50022 27.3201L6.06022 34.2201C5.16022 36.0001 5.26022 38.1001 6.30022 39.8001C7.34022 41.5001 9.18022 42.5201 11.1802 42.5201H36.7002C38.6602 42.5201 40.4002 41.5801 41.4802 39.9401C42.5602 38.3001 42.7402 36.3401 41.9602 34.5401L35.7002 19.9201C34.9402 18.1201 33.8802 17.0201 32.8602 16.9801C31.9202 16.9201 30.7002 17.9201 29.7402 19.6201L25.9602 26.4401C24.8002 28.5201 22.9802 29.8201 21.0002 30.0001C19.0202 30.1601 17.0002 29.2001 15.5002 27.3201L15.0602 26.7601C14.2202 25.6601 13.2602 25.1001 12.3202 25.1001Z" fill="#9A9A9A" />
                <path d="M13.9399 17.5C9.81994 17.5 6.43994 14.14 6.43994 10C6.43994 5.86 9.79994 2.5 13.9399 2.5C18.0799 2.5 21.4399 5.86 21.4399 10C21.4399 14.14 18.0799 17.5 13.9399 17.5ZM13.9399 5.5C11.4599 5.5 9.43994 7.52 9.43994 10C9.43994 12.48 11.4599 14.5 13.9399 14.5C16.4199 14.5 18.4399 12.48 18.4399 10C18.4399 7.52 16.4199 5.5 13.9399 5.5Z" fill="#9A9A9A" />
              </svg>
              <div className="custom-upload-button" onClick={handleButtonClick}>
                <div className='w-[380px] h-[48px] rounded-[8px] border border-[1px] border-[#1E1E1E] py-[12px] px-[24px] flex'><p className='mx-auto text-[14px] text-[#1E1E1E] font-Satoshi font-medium'>+ Add image</p></div>
                <input
                  type="file"
                  accept="image/*" // Allow only image files
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
              </div>
            </div>
          )}
          {modelContent === 3 && (
            <div className='flex flex-col gap-[48px] items-center mt-[24px]'>
              <div className='flex flex-col mx-auto'>
                <p className='text-[14px] font-Satoshi font-normal text-[#000]'>Add a high product image for this item to clearly describe</p>
                <p className='text-[14px] font-Satoshi font-normal text-[#000]'>what it looks like</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                {selectedFile && previewURL && <div className='flex flex-row gap-[16px] items-center'><Image src={previewURL} width={100} height={100} alt='selected-product-image' />
                  <p>{selectedFile?.name}</p>
                </div>}
                <button onClick={removeSelectedPicture}>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0002 7.22998C20.9802 7.22998 20.9502 7.22998 20.9202 7.22998C15.6302 6.69998 10.3502 6.49998 5.12016 7.02998L3.08016 7.22998C2.66016 7.26998 2.29016 6.96998 2.25016 6.54998C2.21016 6.12998 2.51016 5.76998 2.92016 5.72998L4.96016 5.52998C10.2802 4.98998 15.6702 5.19998 21.0702 5.72998C21.4802 5.76998 21.7802 6.13998 21.7402 6.54998C21.7102 6.93998 21.3802 7.22998 21.0002 7.22998Z" fill="#1E1E1E" />
                    <path d="M8.49977 6.22C8.45977 6.22 8.41977 6.22 8.36977 6.21C7.96977 6.14 7.68977 5.75 7.75977 5.35L7.97977 4.04C8.13977 3.08 8.35977 1.75 10.6898 1.75H13.3098C15.6498 1.75 15.8698 3.13 16.0198 4.05L16.2398 5.35C16.3098 5.76 16.0298 6.15 15.6298 6.21C15.2198 6.28 14.8298 6 14.7698 5.6L14.5498 4.3C14.4098 3.43 14.3798 3.26 13.3198 3.26H10.6998C9.63977 3.26 9.61977 3.4 9.46977 4.29L9.23977 5.59C9.17977 5.96 8.85977 6.22 8.49977 6.22Z" fill="#1E1E1E" />
                    <path d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z" fill="#1E1E1E" />
                    <path d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z" fill="#1E1E1E" />
                    <path d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z" fill="#1E1E1E" />
                  </svg>
                </button>
              </div>
              <div className="custom-upload-button" onClick={handleButtonClick}>
                <div className={`w-[380px] h-[48px] rounded-[8px] border border-[1px] border-[#1E1E1E] py-[12px] px-[24px] flex ${selectedFile ? "" : 'cursor-pointer'}`}><p className='mx-auto text-[14px] text-[#1E1E1E] font-Satoshi font-medium'>+ Add image</p></div>
                <input
                  type="file"
                  accept="image/*" // Allow only image files
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  disabled={!!selectedFile}
                />
              </div>
            </div>
          )}
          {modelContent !== 3 ? <div className='flex flex-row justify-between mt-[24px]'>
            <button className='ml-[24px] absolute bottom-[24px] text-[#F44336] font-Satoshi text-[14px] font-medium' onClick={closeModel}>Cancel</button>
            <button className='absolute bottom-[24px] right-[24px] w-20 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium' onClick={() => setModelContent((prev) => prev + 1)}>Next</button>
          </div> : (
            <div className='flex flex-row justify-between mt-[24px]'>
              <button className='ml-[24px] absolute bottom-[24px] text-[#1E1E1E] font-Satoshi text-[14px] font-medium' onClick={() => setModelContent((prev) => prev - 1)}>Back</button>
              <button className='absolute bottom-[24px] right-[24px] w-20 h-10 rounded-[8px] p-2.5 bg-[#008678] text-[#fff] font-Satoshi text-[14px] font-medium' onClick={create}>Save</button>
            </div>
          )}
        </figure>
      </div>}
    </div>
  )
}

export default CreateCatalogue
