import api from "@/utils/api";
import { toast } from "react-toastify";
interface InvoiceItem {
    Name: string;
    Price: number;
    Quantity: number;
}
export async function createInvoice(Amount: number, invoiceItems: InvoiceItem[], billingAddress: string, clientId: string, businessId: string, dueDate: Date) {
    try {
        const formData = new FormData();
        formData.append("Amount", String(Amount));
        formData.append("invoiceItems", JSON.stringify(invoiceItems));
        formData.append("billingAddress", billingAddress);
        formData.append("clientId", clientId);
        formData.append("businessId", businessId);
        formData.append("dueDate", dueDate.toISOString());
        
        const res = await api.post("invoices", formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res?.data?.success) {
            console.log("catalogue:", res)
            return res?.data?.success
        } else {
            console.log("i:", formData)
            throw new Error("Error has occurred");

        }
    } catch (err: any) {
        console.error("Errrror:", err);
        toast.error(
            `Error getting user: ${err?.response?.data?.errors[0]?.description}`
        );
    }
}