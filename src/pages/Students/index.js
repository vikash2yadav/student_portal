import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Avatar, Container } from "@mui/material";
import { StudentsContext } from "../../context/StudentContext";
import { SubjectsContext } from "../../context/SubjectContext";
import { CommonsContext } from "../../context/CommonContext";
import Loader from "../../components/Loader";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  AddCircle as AddCircleIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { deleteStudent, studentStatusUpdate } from "../../apis/student";
import { useNavigate } from "react-router-dom";
import Buttonn from "../../components/FormComponent/Buttonn";
import Marks from "./Marks";
import { ShowMarks } from "./Marks/ShowMarks";

const Students = () => {
  const navigate = useNavigate();
  const {
    loading,
    setIsEdit,
    setOpen,
    setMessage,
    setSuccessMessage,
    openModel,
    setOpenModel,
  } = useContext(CommonsContext);
  const { students, studentList } = useContext(StudentsContext);
  const { subjects, subjectList } = useContext(SubjectsContext);
  const [markData, setMarkData] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleEdit = async (id) => {
    localStorage.setItem("std_id", id);
    setIsEdit(true);
    navigate("/student/edit");
  };

  const handleDelete = async (id) => {
    let data = await deleteStudent(id);

    if (data?.status === 200) {
      setOpen(true);
      setSuccessMessage(true);
      setMessage(data?.data?.message);
      studentList();
    } else {
      setOpen(true);
      setSuccessMessage(false);
      setMessage(data?.data?.message);
    }
  };

  const statusUpdate = async (id, status) => {
    let body = { id, status };
    if (status === "Active") {
      body = { ...body, status: "Suspended" };
    } else {
      body = { ...body, status: "Active" };
    }
    let data = await studentStatusUpdate(body);
    if (data?.status === 200) {
      setOpen(true);
      setSuccessMessage(true);
      setMessage(data?.data?.message);
      studentList();
    } else {
      setOpen(true);
      setSuccessMessage(false);
      setMessage(data?.data?.message);
    }
  };

  const handleShowMarks = (data) => {
    setMarkData(data);
    setIsDialogOpen(true)
  }
  const columns = [
    {
      field: "profile_picture",
      headerName: "Profile Picture",
      headerClassName: "table-header",
      width: 150,
      renderCell: (params) => (
        <Avatar className="mt-3" src={params?.row?.profile_picture} />
      ),
    },
    {
      field: "first_name",
      headerName: "First Name",
      headerClassName: "table-header",
      width: 150,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      headerClassName: "table-header",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      headerClassName: "table-header",
      width: 150,
    },
    {
      field: "dob",
      headerName: "Birth Date",
      headerClassName: "table-header",
      width: 150,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      headerClassName: "table-header",
      width: 250,
    },
    {
      field: "enrollment_date",
      headerName: "Enrollment Date",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "show_marks",
      headerName: "Show Marks",
      headerClassName: "table-header",
      width: 150,
      renderCell: (params) => (<><VisibilityIcon
        onClick={() => { handleShowMarks(params?.row?.marks) }}
      />
      </>)
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <>
          <Buttonn
            sx={{
              backgroundColor: `${params?.row?.status === "Active" ? "green" : "red"
                }`,
              color: "white",
              width: "100px",
            }}
            onClick={() => statusUpdate(params?.row?.id, params?.row?.status)}
            title={params?.row?.status}
          />
        </>
      ),
    },
    {
      field: "Add Marks",
      headerName: "Add Maks",
      headerClassName: "table-header",
      width: 100,
      renderCell: (params) => (
        <AddCircleIcon
          className="cursor-pointer"
          onClick={() => setOpenModel(true)}
        />
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <div className="mt-3 flex space-x-4">
          <EditIcon
            className="cursor-pointer"
            onClick={() => handleEdit(params?.row?.id)}
          />
          <DeleteIcon
            className="cursor-pointer"
            onClick={() => handleDelete(params?.row?.id)}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    studentList();
  }, [setOpenModel]);

  useEffect(()=>{
    subjectList();
  },[]);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <Layout>
          <Container component={"main"}>
            {/* <Appbar title={"Subjects"} /> */}
            <Table
              heading="Students"
              columns={columns}
              rows={students}
              addBtn={true}
            />
          </Container>
          <Marks
            open={openModel}
            onClose={() => setOpenModel(false)}
            // onSubmit={handleSubmitMarks}
            students={students}
            subjects={subjects}
          />
          <ShowMarks
            open={isDialogOpen}
            onClose={()=> setIsDialogOpen(false)}
            studentsMarks={markData}
          />

        </Layout>
      )}
    </>
  );
};

export default Students;
