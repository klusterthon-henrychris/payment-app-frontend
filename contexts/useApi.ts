"use client";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { UserSignUpFormValues } from "@/components/auth/UserSignUpForm";

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
        `Error getting user: ${err?.response?.data?.errors[0]?.description}`
      );
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};

export const useClients = () => {
  const [clients, setClients] = useState<UserSignUpFormValues | null>(null);

  const getAllClients = async () => {
    try {
      const res = await api.get("clients/all");
      if (res?.data?.success) {
        setClients(res.data.data);
        console.log(res, "clients");
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        `Error getting clients: ${err?.response?.data?.errors[0]?.description}`
      );
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return { clients };
};
