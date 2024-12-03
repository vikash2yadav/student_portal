import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Avatar, Container, Stack } from "@mui/material";
import { SubjectsContext } from "../../context/SubjectContext";
import { CommonsContext } from "../../context/CommonContext";
import Loader from "../../components/Loader";

const columns = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "code",
    headerName: "Code",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "table-header",
    width: 400,
  },
];

const Subjects = () => {
  const {loading} = useContext(CommonsContext);
  const {subjects, subjectList} = useContext(SubjectsContext);

  useEffect(()=>{
    subjectList();
  }, []);

  return (
    <>
     {
      loading ? (<><Loader /></>):
      (
        <Layout>
        <Container component={"main"}>
          {/* <Appbar title={"Subjects"} /> */}
          <Table heading="Subjects" columns={columns} rows={subjects} />
        </Container>
      </Layout>
      )
     }
    </>
  );
};

export default Subjects;
