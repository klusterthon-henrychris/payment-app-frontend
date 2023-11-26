import React from "react";
import Image from "next/image";

const SettingsProfile: React.FC = () => {
  return (
    <div>
      <p className="bold-title mb-6">General</p>
      <hr />

      <div className="">
        <div className="grid grid-cols-2 items-center w-full">
          <p className="title py-6">User details</p>
          <p className="cursor-pointer flex items-center gap-2">
            <Image src="/icon-edit.svg" alt="edit" width={20} height={20} />
            <span className="text-primary">Edit</span>
          </p>
        </div>
        <div className="grid grid-cols-2 items-center w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Full name -
              </p>
              <p className="text-neutral-black text-sm w-full">Wade Wilson</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Email -
              </p>
              <p className="text-neutral-black text-sm w-full">
                business@simplebiz.com
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Address -
              </p>
              <p className="text-neutral-black text-sm w-full">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-2 items-center w-full">
          <p className="title py-6">Business details</p>
          <p className="cursor-pointer flex items-center gap-2">
            <Image src="/icon-edit.svg" alt="edit" width={20} height={20} />
            <span className="text-primary">Edit</span>
          </p>
        </div>
        <div className="grid grid-cols-2 items-center w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Business name -
              </p>
              <p className="text-neutral-black text-sm w-full">Simple Biz</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Business address -
              </p>
              <p className="text-neutral-black text-sm w-full">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                RC number -
              </p>
              <p className="text-neutral-black text-sm w-full">RN485167</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Business description -
              </p>
              <p className="text-neutral-black text-sm w-full">
                Enabling small businesses to manage their payments efficiently.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-grey-light text-sm w-[200px] text-right">
                Industry -
              </p>
              <p className="text-neutral-black text-sm w-full">Finance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
