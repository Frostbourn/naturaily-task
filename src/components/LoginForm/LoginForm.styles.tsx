import styled from 'styled-components';
import { Form } from 'reactstrap';

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  height: 100%;
  margin: 0px;
  padding: 0px;
  gap: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoginBackground = styled.div`
  display: none;

  svg {
    max-width: 50vw;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    height: 100%;

    background-color: #0d6efd;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .alert {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.3s ease-in-out;
    will-change: transition;

    &.active {
      opacity: 1;
      transform: translateY(0px);
    }

    .toast {
      width: auto;
      min-width: 200px;
    }
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  padding-block: 24px;
`;
