import * as Yup from 'yup';

export const StudentInitialValue = {
  first_name: "",
  last_name: "",
  dob: "",
  phone_number: "",
  email: "",
  gender: "",
  address: "",
  enrollment_date: "",
  status: 'Active'
};

export const studentSchema = Yup.object({
  first_name: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be at most 50 characters'),

  last_name: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be at most 50 characters'),
    
  dob: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),

  phone_number: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),

  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),

  gender: Yup.string()
    .oneOf(['Male', 'Female', 'Other'], 'Gender must be either male, female, or other')
    .required('Gender is required'),

  address: Yup.string()
    .required('Address is required')
    .min(10, 'Address must be at least 10 characters'),

  enrollment_date: Yup.date()
    .required('Enrollment date is required')
    .max(new Date(), 'Enrollment date cannot be in the future'),

    status: Yup.string()
    .oneOf(['Active', 'Suspended'], 'Status must be either active, suspended')
    .required('Status is required')
});
