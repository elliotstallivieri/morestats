import React from "react";
import { Box } from "@mui/material";
import { Item } from "../../types/Item";

interface ItemSectionProps {
  items: Item[];
}

const ItemSection: React.FC<ItemSectionProps> = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "row",
        //border: "1px solid purple",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          component={"img"}
          src={item.icon}
          sx={{ height: "3rem", borderRadius: "7%" }}
        />
      ))}
    </Box>
  );
};

export default ItemSection;
