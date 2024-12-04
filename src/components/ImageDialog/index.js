import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";

const ImageDialog = ({ open, setOpen, image }) => {
    const [profile, setProfile] = useState(null);

    useEffect(()=> {
        setProfile("./profile.png")
    }, []);
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <img
            src={image || profile}
            alt="Profile"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageDialog;
