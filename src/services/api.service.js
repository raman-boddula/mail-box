import axios from "axios";

export const ApiService = {
    getEmailList() {
        return axios.get('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123')
    }
}