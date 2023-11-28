import api from "@/utils/api";
import { StatusAndMessageResponse, UseUpdateClientInfo } from "@/store/useApi";
import { BusinessSignUpFormValues } from "@/components/auth/BusinessSignUpForm";

export const getUser = async () => {
  const res = await api.get("user");
  return res.data;
};

export const updateUser = async (
  postBody: any
): Promise<StatusAndMessageResponse> => {
  const res = await api.put("user", postBody);
  return res.data;
};

export const updateBusiness = async (postBody: any) => {
  const res = await api.put("business", postBody);
  return res.data;
};

export const getBusinessDetail = async () => {
  const res = await api.get("business");
  return res.data;
};

export const getAllClients = async (pageNumber = 1): Promise<any> => {
  const res = await api.get(
    `clients/all?PageSize=${10}&PageNumber=${pageNumber}`
  );
  return res.data;
};

export const getTotalClients = async (): Promise<any> => {
  const res = await api.get(`clients/count`);
  return res.data;
};

export const getTotalInvoices = async (): Promise<any> => {
  const res = await api.get(`invoices/count`);
  return res.data;
};

export const getTotalCatalogue = async (): Promise<any> => {
  const res = await api.get(`products/count`);
  return res.data;
};

export const getClientById = async (clientId: string) => {
  const res = await api.get(`clients/${clientId}`);
  if (res?.data) return res.data;
};

export type AddClientPostBody = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  address: string;
  businessName: string;
};

export const addClient = async (
  postBody: AddClientPostBody
): Promise<StatusAndMessageResponse> => {
  const res = await api.post("clients", postBody);
  return res.data;
};

export const updateClient = async ({
  clientId,
  postBody,
}: UseUpdateClientInfo): Promise<StatusAndMessageResponse> => {
  const res = await api.put(`clients/${clientId}/update`, postBody);

  return res.data;
};

export const deleteClient = async ({
  clientId,
}: {
  clientId: string;
}): Promise<StatusAndMessageResponse> => {
  console.log(clientId, "clientId");

  const res = await api.delete(`clients/${clientId}`);

  return res.data;
};
