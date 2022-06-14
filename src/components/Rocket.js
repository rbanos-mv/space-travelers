import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImage,
  } = props;

  return (
    <li className="row rocket-card">
      <img src={flickrImage} alt="{rocketName}" width="250" />
      <div className="column rocket-info">
        <h3 className="rocket-name">{rocketName}</h3>
        <p className="rocket-description">{description}</p>
        <button type="button" id={id} className="reserve-btn">
          Reserve Rocket
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
};

export default Rocket;
