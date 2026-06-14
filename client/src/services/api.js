import { serverUrl } from "../App";
import axios from "axios";
export const getCurrentUser = async () => {
    try {
        const result = await axios.get(
            "http://localhost:5001/api/user/currentUser",
            {
                withCredentials: true,
            }
        );
        console.log(result.data);

    } catch (error) {
        console.log(error);

    }
}