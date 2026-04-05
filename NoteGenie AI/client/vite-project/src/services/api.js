import axios from "axios";
import { serverUrl } from "../App"
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(serverUrl + "/api/user/currentuser", { withCredentials: true });
        
        if (result.data.success) {
            dispatch(setUserData(result.data));
        } else {
            dispatch(setUserData(null));
        }
    } catch (error) {
        if (error.response && error.response.status !== 401) {
            console.error("Error fetching user:", error);
        }
    }
}