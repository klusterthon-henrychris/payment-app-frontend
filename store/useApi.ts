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
  getTotalCatalogue,
  getTotalClients,
  getTotalInvoices,
  getUser,
  updateClient,
} from "@/contexts/apiContext";
import { AddClientsFormValues } from "@/components/clients/AddClientsForm";

export const queryKeys = {
  getUser: "getUser",
  getAllClients: "getAllClients",
  getClientById: "getClientById",
  getTotalClients: "getTotalClients",
  getTotalInvoices: "getTotalInvoices",
  getTotalCatalogue: "getTotalCatalogue",
};

export type StatusAndMessageResponse = {
  data: { data: object };
};

export const useGetUser = (
  options?: UseQueryOptions<AddClientsFormValues, StatusAndMessageResponse>
): UseQueryResult<AddClientsFormValues, StatusAndMessageResponse> => {
  const res = useQuery([queryKeys.getUser], getUser, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  return res?.data ?? {};
};

export type UseGetAllClientsProp = AddClientsFormValues & { clientId: string };

export type UseGetAllClientsReturn = {
  items: UseGetAllClientsProp[];
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

const initialData = {
  items: [],
  currentPage: 1,
  totalCount: 1,
  pageSize: 1,
  totalPages: 1,
};

export const useGetAllClients = (
  pageNumber: number,
  options?: UseQueryOptions<UseGetAllClientsReturn, StatusAndMessageResponse>
): UseQueryResult<UseGetAllClientsReturn, StatusAndMessageResponse> => {
  const res = useQuery(
    [queryKeys.getAllClients],
    () => getAllClients(pageNumber),
    {
      refetchOnWindowFocus: true,
    }
  );

  return res?.data ?? initialData;
};

export const useGetTotalClients = (
  options?: UseQueryOptions<UseGetAllClientsReturn, StatusAndMessageResponse>
): UseQueryResult<UseGetAllClientsReturn, StatusAndMessageResponse> => {
  const res = useQuery([queryKeys.getTotalClients], getTotalClients, {
    // refetchOnWindowFocus: true,
  });

  return res?.data;
};

export const useGetTotalInvoices = (
  options?: UseQueryOptions<UseGetAllClientsReturn, StatusAndMessageResponse>
): UseQueryResult<UseGetAllClientsReturn, StatusAndMessageResponse> => {
  const res = useQuery([queryKeys.getTotalInvoices], getTotalInvoices, {
    // refetchOnWindowFocus: true,
  });

  return res?.data;
};

export const useGetTotalCatalogue = (
  options?: UseQueryOptions<UseGetAllClientsReturn, StatusAndMessageResponse>
): UseQueryResult<UseGetAllClientsReturn, StatusAndMessageResponse> => {
  const res = useQuery([queryKeys.getTotalCatalogue], getTotalCatalogue);

  return res?.data;
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

export type UseUpdateClientInfo = {
  clientId: string;
  postBody: AddClientPostBody;
};

export const useUpdateClient = (
  options?: UseMutationOptions<
    StatusAndMessageResponse,
    StatusAndMessageResponse,
    any
  >
): UseMutationResult<
  StatusAndMessageResponse,
  StatusAndMessageResponse,
  any
> => {
  return useMutation((updateInfo) => updateClient(updateInfo), {
    ...options,
    onError: (error: any) => toast.error("Error has occurred"),
  });
};
