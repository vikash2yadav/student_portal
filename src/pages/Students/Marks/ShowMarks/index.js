import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const ShowMarks = ({ open, onClose, studentsMarks }) => {

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Marks List</DialogTitle>
      <DialogContent>
        {studentsMarks?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell>Marks Obtained</TableCell>
                  <TableCell>Total Marks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsMarks.map((mark, index) => (
                  <TableRow key={index}>
                    <TableCell>{mark.subject?.name || "Unknown"}</TableCell>
                    <TableCell>{mark.mark}</TableCell>
                    <TableCell>{mark.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p className="text-center">No data available.</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};


