import React from "react";
import { Box, Typography, Select, MenuItem, Button } from "@mui/material";

interface ButtonBarProps {
  name: string;
}
// à modifier pour le onClick
const ButtonBar: React.FC<ButtonBarProps> = ({ name }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#091428",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0 40% 0 5%",
        mb: 2,
      }}
      className="button-bar"
    >
      {["Overview", "Items", "Masteries", "Sums", "Spells", "Stats"].map(
        (label) => (
          <Button key={label} variant="text" sx={{ color: "#0397AB" }}>
            {label}
          </Button>
        )
      )}
    </Box>
  );
};

export default ButtonBar;
