import PropTypes from 'prop-types';

function Notification({ message }) {
  return <>{message && <div>{message}</div>}</>;
}

Notification.propTypes = { message: PropTypes.string };

export default Notification;
