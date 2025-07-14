import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      onClick={() => navigate("/")}
      startIcon={<HomeIcon />}
    >
      Home
    </Button>
  );
};

export default HomeButton;
