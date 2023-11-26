import api from "@/utils/api";
import { toast } from "react-toastify";

export async function getClientsById(id: string){
    try {
        const res = await api.get(`/clients/${id}`);
        if (res?.data?.success) {
            return res?.data
        } else {
            throw new Error("Error has occurred");
        }
    } catch (err: any) {
        console.error(err);
        toast.error(
            `Error getting user: ${err?.response?.data?.errors[0]?.description}`
        );
    }
}