import React from "react";
import { Toaster } from "sonner";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: "border-0 w-full shadow rounded-lg",
      }}
    />
  );
};

export default ToastProvider;
