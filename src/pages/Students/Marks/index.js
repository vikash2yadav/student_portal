import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import { RemoveCircleOutline as RemoveCircleOutlineIcon, Add as AddIcon } from "@mui/icons-material";
import { addStudentMark } from '../../../apis/student';
import { CommonsContext } from '../../../context/CommonContext';
import Buttonn from "../../../components/FormComponent/Buttonn";

const Marks = ({ open, onClose, students, subjects }) => {
  const { setOpen, setOpenModel, setMessage, setSuccessMessage } = useContext(CommonsContext);
  const [studentId, setStudentId] = useState("");
  const [marksData, setMarksData] = useState([
    { subject: "", marks: "", total: 100 },
  ]);

  const handleChange = (index, field, value) => {
    const updatedMarksData = [...marksData];
    updatedMarksData[index][field] = value;

    if (field === "marks") {
      const marksValue = value ? parseInt(value) : 0;
      updatedMarksData[index].marks = marksValue > updatedMarksData[index].total ? updatedMarksData[index].total : marksValue;
    }

    setMarksData(updatedMarksData);
  };
  const handleAddRow = () => {
    setMarksData([...marksData, { subject: "", marks: "", total: 100 }]);
  };

  const handleRemoveRow = (index) => {
    const updatedMarksData = marksData.filter((_, i) => i !== index);
    setMarksData(updatedMarksData);
  };

  const handleSubmit = async () => {

    if(studentId === "" || marksData?.length < 0){
        setOpen(true);
        setMessage('Enter required feilds');
        setSuccessMessage(false);
    }
    const marksPayload = {
      studentId,
      marks: marksData,
    };

    const data = await addStudentMark(marksPayload);
    if (data?.status === 200) {
      setOpen(true);
      setMessage(data?.data?.message);
      setSuccessMessage(true);
      setOpenModel(false)
      setStudentId("");
      setMarksData([{ subject: "", marks: "", total: 100 }]);
      window.location.reload();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Marks</DialogTitle>
      <DialogContent>
        <form>
          {/* Student Selection */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Student</InputLabel>
            <Select
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              label="Student"
            >
              {students?.map((student) => (
                <MenuItem key={student.id} value={student.id}>
                  {student.first_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Dynamic Subjects and Marks */}
          {marksData?.map((row, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              {/* Subject Dropdown */}
              <FormControl fullWidth margin="normal" style={{ flex: 1 }}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={row.subject}
                  onChange={(e) => handleChange(index, "subject", e.target.value)}
                  label="Subject"
                >
                  {subjects?.map((subject) => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Marks Input */}
              <TextField
                label="Marks"
                type="number"
                fullWidth
                margin="normal"
                value={row.marks}
                onChange={(e) => handleChange(index, "marks", e.target.value)}
                inputProps={{ min: 0, max: row.total }}
                style={{ flex: 1, marginLeft: 10 }}
              />

              {/* Total Marks (Out of) */}
              <TextField
                label="Total (Out of)"
                type="number"
                fullWidth
                margin="normal"
                onChange={(e) => handleChange(index, "total", e.target.value)}
                value={row.total}
                style={{ flex: 0.5, marginLeft: 10 }}
              />

              {/* Remove Row Button */}
              {marksData.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveRow(index)}
                  color="secondary"
                  style={{ marginLeft: 10 }}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              )}
            </div>
          ))}

          {/* Add Row Button */}
          <Buttonn
            variant="outlined"
            color="secondary"
            onClick={handleAddRow}
            title={'Add Subject'}
            startIcon={<AddIcon/>}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Buttonn onClick={onClose} color="secondary" title={'Cancel'} variant={"outlined"}/>
        <Buttonn onClick={handleSubmit} color="secondary" title={'Submit'} variant="contained" />
      </DialogActions>
    </Dialog>
  );
};

export default Marks;
