import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';

const Table = ({ rows, columns, heading, rowHeight = 60, addBtn }) => {
  
  const navigate = useNavigate();
  return (
      <Paper
        elevation={3}
        sx={{
          padding: "2rem 2rem",
          borderRadius: "1rem",
          margin: '20px',
          width: "full",
          overflow: "hidden",
          height: "100vh",          
          boxShadow: "none",
          }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        {
        addBtn && (
          <Typography style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'end'}}>
          <Button variant="contained" color="secondary" onClick={()=> navigate(`/student/add`)}>Add</Button>
          </Typography>
        )
      }
     
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{ height: "80%" }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "black",
              color: "white",
            },
          }}
        />
        
      </Paper>
  );
};

export default Table;
