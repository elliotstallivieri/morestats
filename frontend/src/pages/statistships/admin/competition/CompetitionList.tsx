import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { Competition } from "../../../../types/Competition";

import "./Competition.css";

export default function CompetitionList() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/competitions")
      .then((res) => setCompetitions(res.data))
      .catch(() => setError("Erreur lors du chargement des compétitions"));
  }, []);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await axios.delete(`http://localhost:8000/competitions/${selectedId}`);
      setCompetitions((prev) => prev.filter((comp) => comp.id !== selectedId));
      setOpenDialog(false);
      setSnackbarMessage("Compétition supprimée avec succès !");
      setSnackbarOpen(true);
    } catch {
      setError("Erreur lors de la suppression");
    } finally {
      setSelectedId(null);
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        All Competitions
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <Table className="competition-table">
        <TableHead className="competition-table">
          <TableRow className="competition-table">
            <TableCell className="competition-table">Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitions.map((comp) => (
            <TableRow key={comp.id}>
              <TableCell
                onClick={() =>
                  navigate(`/statistships/admin/competition/${comp.id}/edit`)
                }
              >
                {comp.name}
              </TableCell>
              <TableCell
                onClick={() =>
                  navigate(`/statistships/admin/competition/${comp.id}/edit`)
                }
              >
                {comp.id}
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => confirmDelete(comp.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        onClick={() => navigate("/statistships/admin/competition/create")}
      >
        Create new
      </Button>

      {/* Dialog de confirmation */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Es-tu sûr de vouloir supprimer cette compétition ? Cette action est
            irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Annuler</Button>
          <Button onClick={handleDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar de confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbarOpen(false)}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
