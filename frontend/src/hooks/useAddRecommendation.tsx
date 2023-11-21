import { useRef } from "react";
import { Id, toast } from "react-toastify";
import axios from "axios";

const useAddRecommendation = () => {
    const toastID = useRef<Id>();
  
    const addRecommendation = async (data: object) => {
      toastID.current = toast.loading("Adding recommendation...");
  
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + "/api/recommendations",
          data,
          {
            withCredentials: true,
          }
        );
  
        toast.update(toastID.current ?? "", {
          render: response.data.message,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          type: "success",
          isLoading: false,
        });
      } catch (error: any) {
        toast.update(toastID.current ?? "", {
          render: error.response?.data?.message ?? error.message,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          type: "error",
          isLoading: false,
        });
      }
    };
  
    return { addRecommendation };
  };
  
  export default useAddRecommendation;
