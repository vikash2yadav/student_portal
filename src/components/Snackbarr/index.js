import React, { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import { CommonsContext } from "../../context/CommonContext";

const Snackbarr = () => {
  const { open, setOpen, message, successMessage } = useContext(CommonsContext);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={""}
          severity={`${successMessage ? "success" : "error"}`}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Snackbarr;
