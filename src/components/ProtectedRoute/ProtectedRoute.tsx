import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/User/context';
import { TProtectedRouteProps } from '../../types/global';

const ProtectedRoute = ({ children }: TProtectedRouteProps): JSX.Element => {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
