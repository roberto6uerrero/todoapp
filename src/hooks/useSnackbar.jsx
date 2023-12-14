import { useState } from "react";
import { Alert, Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useSnackbar = () => {

  const handleClick = () => {
    // setOpen(true);
    setOpen(prev => (
      {
        ...prev,
        state: true
      }
    ))
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
    setOpen(prev => (
      {
        ...prev,
        state: false
      }
    ))
  };

  const [open, setOpen] = useState({type:"success", message:"This a message", vertical: 'bottom', horizontal: 'right', state:false})
  const {horizontal, vertical, type, message, state } = open;

  const openSnackbar = (config) => {
    setOpen(prev => (
      {
        ...prev,
        ...config
      }
    ))
  }

  const SnackbarComponent = () => {
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={state}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    );
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return { SnackbarComponent, setOpen, handleClick, handleClose, openSnackbar };
};

export default useSnackbar;
