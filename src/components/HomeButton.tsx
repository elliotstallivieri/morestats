import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const HomeButton = () => {
    return (
        <Button variant="outlined" startIcon={<HomeIcon />}>
            Home
        </Button>
    );
}

export default HomeButton;
