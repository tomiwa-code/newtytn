import { toast } from "react-toastify";

export const errNotify = (wordsParam: string) =>
  toast.error(wordsParam, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
