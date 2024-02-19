import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message: string, type: "success" | "error" | "info") => {
  toast(message, {
    toastId: message,
    // autoClose: 3000,
    type,
    theme: "colored"
  });
};
