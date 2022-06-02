import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('This field is required')
    .min(5, 'This field must be at least 5 characters long'),
  password: yup
    .string()
    .required('This field is required')
    .min(5, 'This field must be at least 5 characters long'),
});
