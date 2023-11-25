import api from "@/utils/api";
import { StatusAndMessageResponse, UseUpdateClientInfo } from "@/store/useApi";

export const getUser = async () => {
  const res = await api.get("user");
  console.log(res, "user res");
  return res.data;
};

export const getAllClients = async (pageNumber = 1): Promise<any> => {
  const res = await api.get(`clients/all`);
  console.log(res, "from res");

  return res.data;
};

export const getClientById = async (clientId: string) => {
  const res = await api.get(`clients/${clientId}`);

  return res.data;
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
