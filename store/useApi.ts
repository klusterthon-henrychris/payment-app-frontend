import {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  AddClientPostBody,
  addClient,
  getAllClients,
} from "@/contexts/apiContext";
import { AddClientsFormValues } from "@/components/clients/AddClientsForm";

export const queryKeys = {
  getAllClients: "getAllClients",
};

export type StatusAndMessageResponse = {
  data: { data: object };
};

export const useGetAllClients = (
  options?: UseQueryOptions<AddClientsFormValues[], StatusAndMessageResponse[]>
): UseQueryResult<AddClientsFormValues[], StatusAndMessageResponse[]> => {
  const res = useQuery([queryKeys.getAllClients], getAllClients, {
    staleTime: Infinity,
    refetchOnWindowFocus: true,
  });

  return res?.data ?? [];
};

export const useAddClient = (
  options?: UseMutationOptions<
    StatusAndMessageResponse,
    StatusAndMessageResponse,
    AddClientPostBody
  >
): UseMutationResult<
  StatusAndMessageResponse,
  StatusAndMessageResponse,
  AddClientPostBody
> => {
  return useMutation((postBody: AddClientPostBody) => addClient(postBody), {
    ...options,
    onError: (error: any) => toast.error("Error has occurred"),
  });
};
