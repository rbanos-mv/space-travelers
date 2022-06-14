import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMissions } from '../redux/missions/missions';
import MissionsList from '../components/MissionsList';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveMissions());
  }, []);

  return (
    <div className="missions-page">
      <MissionsList missions={missions} />
    </div>
  );
};

export default Missions;
