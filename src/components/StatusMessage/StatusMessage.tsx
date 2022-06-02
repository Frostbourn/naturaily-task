import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { TStatusMessageProps } from '../../types/global';

const StatusMessage = ({ status, text, isActive }: TStatusMessageProps) => {
  const properClass = status === 'success' ? 'text-success' : 'text-danger';

  return (
    <div
      className={`p-3 my-2 rounded position-fixed top-0 alert ${
        isActive ? 'active' : ''
      }`}
    >
      {isActive && (
        <Toast>
          <ToastHeader className={`text-capitalize ${properClass}`}>
            {status}!
          </ToastHeader>
          <ToastBody className={properClass}>{text}</ToastBody>
        </Toast>
      )}
    </div>
  );
};

export default StatusMessage;
