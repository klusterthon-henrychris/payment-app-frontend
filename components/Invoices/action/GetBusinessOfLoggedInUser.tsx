import api from "@/utils/api";
import { toast } from "react-toastify";

export async function getBusinessOfLoggedInUser(){
    try {
        const res = await api.get("/business");
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