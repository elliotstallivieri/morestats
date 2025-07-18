import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";

export default function CompetitionEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  console.log("Editing competition with ID:", id);
  // Récupère les infos de la compétition à éditer
  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/competitions/id/${id}`
        );
        setName(res.data.name);
      } catch (err) {
        setError("Could not fetch competition");
      }
    };
    fetchCompetition();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`http://localhost:8000/competitions/${id}`, { name });
      navigate("/statistships/admin/competitions");
    } catch (err) {
      setError("Error updating competition");
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Modifier la compétition
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">
            Save
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