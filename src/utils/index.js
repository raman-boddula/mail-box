import { ApiService } from "../services/api.service";

export const getEmailListing = async () => {
    let res = await ApiService.getEmailList();
    if (res.status == 200) {
        return res.data;
    } else {
        throw new Error("GET EMAIL LISITING FAILED")
    }
}