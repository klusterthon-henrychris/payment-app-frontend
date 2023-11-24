import api from "@/utils/api";
export async function createCatalogue(Name: string, ProductType:string, Description:string, Price: number, Quantity: number, ProductImage: File){
    try {
        // const data = {
        //     Name,
        //     ProductType,
        //     Description,
        //     Price,
        //     Quantity,
        //     ProductImage
        //   };
        const formData = new FormData();
    formData.append("Name", Name);
    formData.append("ProductType", ProductType);
    formData.append("Description", Description);
    formData.append("Price", String(Price));
    formData.append("Quantity", String(Quantity));
    formData.append("ProductImage", ProductImage);
        const res = await api.post("products", formData);
        if (res?.data?.success) {
          // setUser(res.data.data);
          console.log("res:", res.data)
        } else {
          throw new Error("Error has occurred");
        }
      } catch (err: any) {
        console.error(err);
        // toast.error(
        //   `Error getting user: ${err?.response?.data?.errors[0]?.description}`
        // );
      }
}