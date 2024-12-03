import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Container } from "@mui/material";
import { SubjectsContext } from "../../context/SubjectContext";
import { CommonsContext } from "../../context/CommonContext";
import Loader from "../../components/Loader";
import Buttonn from "../../components/FormComponent/Buttonn";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { deleteSubject, subjectStatusUpdate } from "../../apis/subject";

const Subjects = () => {
  const { loading, setOpen, setMessage, setSuccessMessage } =
    useContext(CommonsContext);
  const { subjects, subjectList } = useContext(SubjectsContext);

  const statusUpdate = async (id, status) => {
    let body = { id, status };
    if (status === "Active") {
      body = { ...body, status: "Inactive" };
    } else {
      body = { ...body, status: "Active" };
    }
    let data = await subjectStatusUpdate(body);
    if (data?.status === 200) {
      setOpen(true);
      setSuccessMessage(true);
      setMessage(data?.data?.message);
      subjectList();
    } else {
      setOpen(true);
      setSuccessMessage(false);
      setMessage(data?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    let data = await deleteSubject(id);

    if (data?.status === 200) {
      setOpen(true);
      setSuccessMessage(true);
      setMessage(data?.data?.message);
      subjectList();
    } else {
      setOpen(true);
      setSuccessMessage(false);
      setMessage(data?.data?.message);
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "table-header",
      width: 250,
    },
    {
      field: "code",
      headerName: "Code",
      headerClassName: "table-header",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "table-header",
      width: 250,
      renderCell: (params) => (
        <>
          <Buttonn
            sx={{
              backgroundColor: `${
                params?.row?.status === "Active" ? "green" : "red"
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
      field: "Action",
      headerName: "Action",
      headerClassName: "table-header",
      width: 250,
      renderCell: (params) => (
        <div className="mt-3 flex space-x-4">
          <DeleteIcon
            className="cursor-pointer"
            onClick={() => handleDelete(params?.row?.id)}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    subjectList();
  }, []);

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
            <Table heading="Subjects" columns={columns} rows={subjects} />
          </Container>
        </Layout>
      )}
    </>
  );
};

export default Subjects;
