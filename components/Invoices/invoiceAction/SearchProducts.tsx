import api from "@/utils/api";
import { toast } from "react-toastify";

export async function searchProducts(){
    try {
        const res = await api.get("/products/all?&Search");
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