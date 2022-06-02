import { useState } from 'react';
import { useUserContext } from '../../contexts/User/context';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from 'reactstrap';

const Dashboard = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleLogOut,
    userDetails: { firstName, lastName },
  } = useUserContext();

  const toggleHamburger = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Dashboard</NavbarBrand>
        <NavbarText className="">
          Welcome, {firstName} {lastName}!
        </NavbarText>
        <NavbarToggler onClick={toggleHamburger} />
        <Collapse isOpen={isOpen} navbar>
          <Button
            className="my-2 ms-md-auto"
            type="submit"
            color="danger"
            size="md"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Collapse>
      </Navbar>
      <Breadcrumb className="m-5">
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Dashboard;
