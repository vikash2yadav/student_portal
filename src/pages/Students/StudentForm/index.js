import React, { useContext, useEffect } from "react";
import Layout from "../../../components/Layout";
import { Container, Paper } from "@mui/material";
import Appbar from "../../../components/Layout/Appbar";
import Input from "../../../components/FormComponent/Input";
import Selectbox from "../../../components/FormComponent/Selectbox";
import TextArea from "../../../components/FormComponent/TextArea";
import Buttonn from "../../../components/FormComponent/Buttonn";
import { useFormik } from "formik";
import { StudentInitialValue, studentSchema } from "./Schema";
import {
  addStudent,
  getStudentProfile,
  updateStudent,
} from "../../../apis/student";
import { useNavigate, useParams } from "react-router-dom";
import DatePickerComponent from "../../../components/FormComponent/DatePickerComponent";
import { CommonsContext } from "../../../context/CommonContext";

export const genderOptions = [
  {
    title: "Male",
    value: "Male",
  },
  {
    title: "Female",
    value: "Female",
  },
  {
    title: "Other",
    value: "Other",
  },
];

export const statusOptions = [
  {
    title: "Active",
    value: "Active",
  },
  {
    title: "Inactive",
    value: "Inactive",
  },
];

const StudentForm = () => {
  const params = useParams();
  const { setOpen, setMessage, setSuccessMessage } = useContext(CommonsContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: StudentInitialValue,
    validationSchema: studentSchema,
    onSubmit: async (values) => {
      if (params?.type === "add") {
        let data = await addStudent(values);
        if (data?.status === 200) {
          setOpen(true);
          setSuccessMessage(true);
          setMessage(data?.data?.message);
          navigate("/student");
        } else {
          setOpen(true);
          setSuccessMessage(false);
          setMessage(data?.data?.message);
        }
      } else {
        let data = await updateStudent(values);

        if (data.status === 200) {
          setOpen(true);
          setSuccessMessage(true);
          setMessage(data?.data?.message);
          navigate("/student");
        } else {
          setOpen(true);
          setSuccessMessage(false);
          setMessage(data?.data?.message);
        }
      }
    },
  });

  const editCall = async () => {
    const id = localStorage.getItem("std_id");
    let data = await getStudentProfile(id);
    if (data?.status === 200) {
      formik.setValues(data?.data?.data);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("std_id") && params?.type === "edit") {
      editCall();
    }
  }, []);

  return (
    <Layout>
      <Container component={"main"}>
        <Appbar
          title={`${
            params?.type === "edit" ? "Update Student" : "Add Student"
          }`}
        />
        <Paper
          elevation={3}
          sx={{
            padding: "0rem 2rem",
            borderRadius: "1rem",
            width: "full",
            overflow: "hidden",
            height: "full",
            boxShadow: "none",
          }}
        >
          <form onSubmit={formik.handleSubmit} className="mt-5">
            <div className="grid grid-cols-2 gap-8 mb-5">
              <div>
                <Input
                  label="First Name"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                />
                {formik.errors.first_name && (
                  <span className="text-sm text-red-600">
                    {formik.errors.first_name}
                  </span>
                )}
              </div>

              <div>
                <div>
                  <Input
                    label="Last Name"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full"
                  />
                  {formik.errors.last_name && (
                    <span className="text-sm text-red-600">
                      {formik.errors.last_name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5">
              <div>
                <Input
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                />
                {formik.errors.email && (
                  <span className="text-sm text-red-600">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <div>
                <Selectbox
                  label="Gender"
                  option={genderOptions}
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                />
                {formik.errors.gender && (
                  <span className="text-sm text-red-600">
                    {formik.errors.gender}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5">
              <div>
                <Input
                  label="Phone Number"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                />
                {formik.errors.phone_number && (
                  <span className="text-sm text-red-600">
                    {formik.errors.phone_number}
                  </span>
                )}
              </div>
              <div>
                <DatePickerComponent
                  label="Birth Date"
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.setFieldValue}
                  className="w-full"
                />
                {formik.errors.dob && (
                  <span className="text-sm text-red-600">
                    {formik.errors.dob}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5">
              <div>
                <DatePickerComponent
                  label="Enrollment Date"
                  name="enrollment_date"
                  value={formik.values.enrollment_date}
                  onChange={formik.setFieldValue}
                  className="w-full"
                />
                {formik.errors.enrollment_date && (
                  <span className="text-sm text-red-600">
                    {formik.errors.enrollment_date}
                  </span>
                )}
              </div>
              <div>
                <Selectbox
                  label="Status"
                  option={statusOptions}
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                />
                {formik.errors.status && (
                  <span className="text-sm text-red-600">
                    {formik.errors.status}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 mb-5">
              <TextArea
                placeholder="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              {formik.errors.address && (
                <span className="text-sm text-red-600">
                  {formik.errors.address}
                </span>
              )}
            </div>

            <div className="flex justify-center items-center mb-5">
              <Buttonn
                title={`${params?.type === "edit" ? "Update" : "Add"}`}
                variant="contained"
                color="secondary"
                className="w-28"
                type="submit"
              />
            </div>
          </form>
        </Paper>
      </Container>
    </Layout>
  );
};

export default StudentForm;
