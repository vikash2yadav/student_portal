import React from 'react'
import Layout from '../../../components/Layout'
import { Container, Paper, TextField, Typography } from '@mui/material'
import Appbar from '../../../components/Layout/Appbar'
import Input from '../../../components/FormComponent/Input'
import Selectbox from '../../../components/FormComponent/Selectbox'
import DatePickerr from '../../../components/FormComponent/DatePickerr'
import DatePickerComponent from '../../../components/FormComponent/DatePickerr'
import TextArea from '../../../components/FormComponent/TextArea'
import Buttonn from '../../../components/FormComponent/Buttonn'

export const genderOptions = [
  {
    title: 'Male',
    value: 'Male'
  },
  {
    title: 'Female',
    value: 'Female'
  },
  {
    title: 'Other',
    value: 'Other'
  }
];

export const statusOptions = [{
  title: 'Active',
  value: 'Active'
},
{
  title: 'Inactive',
  value: 'Inactive'
}];

const StudentForm = () => {
  return (
    <Layout>
      <Container component={'main'}>
        <Appbar title="Add Student" />
        <Paper elevation={3}
          sx={{
            padding: "0rem 2rem",
            borderRadius: "1rem",
            width: "full",
            overflow: "hidden",
            height: "full",
            boxShadow: "none",
          }}>

          <div className='mt-5'>
            <div className="grid grid-cols-2 gap-8 mb-5">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5">
              <Input label="Email" />
              <Selectbox label="Birth date" option={genderOptions} />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-5">
              <Input label="Phone Number" />
              <DatePickerComponent label="Last Name" />
            </div>
           
            <div className="grid grid-cols-2 gap-8 mb-5">
              <DatePickerComponent label="Enrollment Number" />
              <Selectbox label="Status" option={statusOptions} />
            </div>

            <div className="grid grid-cols-1 mb-5">
              <TextArea placeholder="Address" />
            </div>

            <div className="flex justify-center items-center mb-5">
              <Buttonn title="Submit" variant="contained" color="secondary" className="w-28" />
            </div>
          </div>
        </Paper>
      </Container>
    </Layout>
  )
}

export default StudentForm
