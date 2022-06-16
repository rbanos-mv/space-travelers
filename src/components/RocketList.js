import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = (props) => {
  const { rockets } = props;
  return (
    <ul>
      {rockets.map((rocket) => {
        const {
          id, rocketName, description, flickrImage, reserved,
        } = rocket;
        return (
          <Rocket
            key={id}
            {...{
              id,
              rocketName,
              description,
              flickrImage,
              reserved,
            }}
          />
        );
      })}
    </ul>
  );
};

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flickrImage: PropTypes.string.isRequired,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
};

export default RocketList;
