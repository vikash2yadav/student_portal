import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Avatar, Container, Modal } from "@mui/material";
import { StudentsContext } from "../../context/StudentContext";
import { CommonsContext } from "../../context/CommonContext";
import Loader from "../../components/Loader";

const columns = [
  {
    field: "profile_picture",
    headerName: "Profile",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <Avatar src={params?.row?.profile_picture} />,
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
    field: "status",
    headerName: "Status",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "Action",
    headerName: "Action",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => <>

    </>,
  },
];

const Students = () => {
  const {loading} = useContext(CommonsContext);
  const {students, studentList} = useContext(StudentsContext);

  useEffect(()=> {
    studentList();
  }, []);

  return (
    <>
      {
        loading ? (<><Loader /></>): 
        (
          <Layout>
        <Container component={"main"}>
          {/* <Appbar title={"Subjects"} /> */}
          <Table heading="Students" columns={columns} rows={students} addBtn={true} />
        </Container>
      </Layout>
        )
      }
    </>
  );
};

export default Students;
