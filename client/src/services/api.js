import { serverUrl } from "../App";
import axios from "axios";
import { setUserData } from "../Redux/userSlice";
import { useDispatch } from "react-redux";




export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(
            "http://localhost:5001/api/user/currentUser",
            {
                withCredentials: true,
            }
        );

        dispatch(setUserData(result.data));
        console.log("Dispatched");

    } catch (error) {
        console.log(error);

    }
}

export const generateNotes = async ( payload) => {
    try {
        const result = await axios.post(serverUrl + "/api/notes/generate-notes",
            payload,
            { withCredentials: true });

        console.log(result.data);
        return result.data;

    } catch (error) {
        console.log(error);
        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);
        console.log("Message:", error.message);
    }

}
