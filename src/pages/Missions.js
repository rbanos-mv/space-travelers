import store from '../redux/configureStore';
import { retrieveMissions } from '../redux/missions/missions';

const Missions = () => {
  store.dispatch(retrieveMissions());
  return (
    <div>
      Missions page
    </div>
  );
};

export default Missions;
