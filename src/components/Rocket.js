import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImage, reserved,
  } = props;
  const dispatch = useDispatch();
  const cancel = () => dispatch(cancelRocket(id));
  const reserve = () => dispatch(reserveRocket(id));

  return (
    <li className="row rocket-card">
      <img src={flickrImage} alt="{rocketName}" width="250" />
      <div className="column rocket-info">
        <h3 className="rocket-name">{rocketName}</h3>
        <p className="rocket-description">{description}</p>
        {!reserved && (
          <button type="button" id={id} className="reserve-btn" onClick={reserve}>
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button type="button" id={id} className="cancel-btn" onClick={cancel}>
            Cancel Reservation
          </button>
        )}
      </div>
    </li>
  );
};

Rocket.defaultProps = { reserved: false };

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Rocket;
