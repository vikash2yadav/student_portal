import React from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Avatar, Container, Stack } from "@mui/material";
import Appbar from "../../components/Layout/Appbar";

const columns = [
  {
    field: "profile_picture",
    headerName: "Profile",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <Avatar avatar={params.row.avatar} />,
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
    field: "entrollment_date",
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
];

const Subjects = () => {
  return (
    <>
      <Layout>
        <Container component={"main"}>
          {/* <Appbar title={"Subjects"} /> */}
          <Table heading="Subjects" columns={columns} rows={[]} />
        </Container>
      </Layout>
    </>
  );
};

export default Subjects;
