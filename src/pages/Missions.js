import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMissions } from '../redux/missions/missions';
import MissionsList from '../components/MissionsList';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(retrieveMissions());
    }
  }, []);

  return (
    <div className="missions-page">
      <MissionsList missions={missions} />
    </div>
  );
};

export default Missions;
