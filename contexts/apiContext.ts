"use client";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { UserSignUpFormValues } from "@/components/auth/UserSignUpForm";
import { StatusAndMessageResponse } from "@/store/useApi";

export const useUser = () => {
  const [user, setUser] = useState<UserSignUpFormValues | null>(null);

  const getUser = async () => {
    try {
      const res = await api.get("user");
      if (res?.data?.success) {
        setUser(res.data.data);
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        `Error getting user: ${
          err?.response?.data?.errors[0]?.description || err
        }`
      );
      toast.clearWaitingQueue();
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};

export const getAllClients = async (): Promise<any> => {
  const res = await api.get("clients/all");

  return res.data;
};

export type AddClientPostBody = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  address: string;
  businessName: string;
};

// export const addClient = async (
//   postBody: AddClientPostBody
// ): Promise<StatusAndMessageResponse> => {
//   const res = await api.post("clients", postBody);
//   return res.data;
// try {
//   const res = await api.post("clients", postBody);
//   if (res?.data?.success) {
//     //   setClients(res.data.data);
//     console.log(res, "client add");
//   } else {
//     throw new Error("Error has occurred");
//   }
// } catch (err: any) {
//   console.error(err);
//   toast.error(
//     `Error adding client: ${
//       err?.response?.data?.errors[0]?.description || err
//     }`
//   );
// }
// };

export const addClient = async (
  postBody: AddClientPostBody
): Promise<StatusAndMessageResponse> => {
  const res = await api.post("clients", postBody);
  return res.data;
};
