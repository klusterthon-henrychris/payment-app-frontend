import React, { useState } from "react";
import Image from "next/image";
import { AddClientsFormValues } from "../clients/AddClientsForm";
import {
  BusinessSignUpRes,
  queryKeys,
  useUpdateBusiness,
  useUpdateUser,
} from "@/store/useApi";
import ModalPopup from "../common/ModalPopup";
import BusinessSignUpForm, {
  BusinessSignUpFormValues,
} from "../auth/BusinessSignUpForm";
import { toast } from "react-toastify";
import UserSignUpForm, { UserSignUpFormValues } from "../auth/UserSignUpForm";
import { useQueryClient } from "@tanstack/react-query";
import { getBusinessDetail, getUser } from "@/contexts/apiContext";

interface ISettingsProfile {
  user: AddClientsFormValues;
  business: BusinessSignUpRes;
}

const SettingsProfile: React.FC<ISettingsProfile> = ({ user, business }) => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: updateBusiness } = useUpdateBusiness();

  const queryClient = useQueryClient();

  const refetchUserDetail = () =>
    queryClient.fetchQuery([queryKeys.getUser], getUser);

  const refetchBusinessDetail = () =>
    queryClient.fetchQuery([queryKeys.getBusinessDetail], getBusinessDetail);

  const handleUserUpdate = (values: UserSignUpFormValues) => {
    updateUser(
      {
        address: values?.address,
        firstName: values?.firstName,
        lastName: values?.lastName,
        emailAddress: values?.emailAddress,
      },
      {
        onSuccess: () => {
          refetchUserDetail();
          setUserModalOpen(false);
          toast.success("User info updated");
        },
      }
    );
  };

  const handleBusinessUpdate = (values: BusinessSignUpFormValues) => {
    updateBusiness(
      {
        address: values?.businessAddress,
        name: values?.businessName,
        rcNumber: values?.rcNumber,
        description: values?.businessDescription,
        industry: values?.industry,
      },
      {
        onSuccess: () => {
          refetchBusinessDetail();
          setBusinessModalOpen(false);
          toast.success("Business info updated");
        },
      }
    );
  };

  return (
    <div>
      <ModalPopup
        isModalOpen={userModalOpen}
        toggleModal={() => setUserModalOpen(false)}
        heading="Edit user details"
        CustomBody={
          <UserSignUpForm
            handleSubmit={handleUserUpdate}
            oldValues={{
              emailAddress: user?.emailAddress,
              firstName: user?.firstName,
              lastName: user?.lastName,
              address: user?.address,
            }}
          />
        }
      />
      <ModalPopup
        isModalOpen={businessModalOpen}
        toggleModal={() => setBusinessModalOpen(false)}
        heading="Edit business details"
        CustomBody={
          <BusinessSignUpForm
            handleSubmit={handleBusinessUpdate}
            oldValues={{
              businessAddress: business?.address,
              businessName: business?.name,
              rcNumber: business?.rcNumber,
              industry: business?.industry,
              businessDescription: business?.description,
            }}
          />
        }
      />
      <p className="bold-title mb-6">General</p>
      <hr />

      {user ? (
        <div className="">
          <div className="grid grid-cols-2 items-center w-full">
            <p className="title py-6">User details</p>
            <button
              onClick={() => setUserModalOpen(true)}
              className="cursor-pointer flex items-center gap-2"
            >
              <Image src="/icon-edit.svg" alt="edit" width={20} height={20} />
              <span className="text-primary">Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-2 items-center w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Full name -
                </p>
                <p className="text-neutral-black text-sm w-full">{`${user?.firstName} ${user?.lastName}`}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Email -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {user?.emailAddress}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Address -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {user?.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="title mt-5">Loading user detail...</p>
        </div>
      )}

      {business ? (
        <div className="">
          <div className="grid grid-cols-2 items-center w-full">
            <p className="title py-6">Business details</p>
            <button
              onClick={() => setBusinessModalOpen(true)}
              className="cursor-pointer flex items-center gap-2"
            >
              <Image src="/icon-edit.svg" alt="edit" width={20} height={20} />
              <span className="text-primary">Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-2 items-center w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Business name -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {business?.name}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Business address -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {business?.address}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  RC number -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {business?.rcNumber}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Business description -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {business?.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-grey-light text-sm w-[200px] text-right">
                  Industry -
                </p>
                <p className="text-neutral-black text-sm w-full">
                  {business?.industry}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="title mt-10">Loading business detail...</p>
        </div>
      )}
    </div>
  );
};

export default SettingsProfile;
