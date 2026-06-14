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
