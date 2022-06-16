import { shallowEqual, useSelector } from 'react-redux';
import RocketList from '../components/RocketList';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets, shallowEqual);
  return (
    <div className="rockets-page">
      <RocketList rockets={rocketList} />
    </div>
  );
};

export default Rockets;
