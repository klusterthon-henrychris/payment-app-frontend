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
  getClientById,
} from "@/contexts/apiContext";
import { AddClientsFormValues } from "@/components/clients/AddClientsForm";

export const queryKeys = {
  getAllClients: "getAllClients",
  getClientById: "getClientById",
};

export type StatusAndMessageResponse = {
  data: { data: object };
};

export type UseGetAllClientsProp = AddClientsFormValues & { clientId: string };

export const useGetAllClients = (
  options?: UseQueryOptions<UseGetAllClientsProp[], StatusAndMessageResponse[]>
): UseQueryResult<UseGetAllClientsProp[], StatusAndMessageResponse[]> => {
  const res = useQuery([queryKeys.getAllClients], getAllClients, {
    staleTime: Infinity,
    refetchOnWindowFocus: true,
  });

  return res?.data ?? [];
};

export const useGetClientById = (
  clientId: string,
  options?: object
): UseQueryResult<UseGetAllClientsProp> => {
  const res = useQuery(
    [queryKeys.getClientById],
    () => getClientById(clientId),
    options
  );
  return res?.data ?? {};
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
