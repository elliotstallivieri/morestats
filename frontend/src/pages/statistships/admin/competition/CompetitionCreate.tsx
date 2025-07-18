import { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompetitionCreate() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:8000/competitions", { name });
      navigate("/statistships/admin/competitions");
    } catch (err) {
      setError("Error creating competition");
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Create Competition
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Competiton name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </form>
      <button onClick={() => navigate("/statistships/admin/competitions")}>
        Back
      </button>
    </Paper>
  );
}
