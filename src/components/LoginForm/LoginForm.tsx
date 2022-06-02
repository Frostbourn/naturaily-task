import {
  Button,
  Col,
  Container,
  FormFeedback,
  FormGroup,
  Input,
  Row,
  Spinner,
} from 'reactstrap';

import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import { useUserContext } from '../../contexts/User/context';
import StatusMessage from '../StatusMessage/StatusMessage';
import { schema } from '../../constans/yupSchema';

import {
  LoginBackground,
  LoginWrapper,
  FormWrapper,
  StyledForm,
  FormTitle,
} from './LoginForm.styles';
import { initialFormValues } from '../../constans/initial';

const LoginForm = (): JSX.Element => {
  const { isAuthenticated, isLoading, handleLogIn, message } = useUserContext();

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      const { username, password } = values;
      await handleLogIn(username, password);
    },
  });

  return !isAuthenticated ? (
    <Container fluid>
      <Row className="justify-content-center align-items-center vh-100 p-4 p-md-0">
        <LoginWrapper>
          <LoginBackground />
          <FormWrapper>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <StatusMessage
                status={message.status}
                text={message.text}
                isActive={message.status.length > 0}
              />
              <FormTitle role="heading">Login to continue</FormTitle>
              <StyledForm onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="username"
                    bsSize="lg"
                    className="mb-3"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                  />
                  <FormFeedback>{formik.errors.username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    bsSize="lg"
                    className="mb-3"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                  />
                  <FormFeedback>{formik.errors.password}</FormFeedback>
                </FormGroup>

                <Button
                  className="w-100"
                  type="submit"
                  color="primary"
                  size="lg"
                >
                  {isLoading ? <Spinner color="light" size="sm" /> : 'Sign in'}
                </Button>
              </StyledForm>
            </Col>
          </FormWrapper>
        </LoginWrapper>
      </Row>
    </Container>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default LoginForm;
