import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const missionsList = useSelector((state) => state.missions);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);
  return (
    <div>
      {!!reservedMissions.length && (
        <ul className="joined-missions">
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id} className="profile-item">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      )}
      {!reservedMissions.length && <h4>No reserved missions!</h4>}
    </div>
  );
};

export default ReservedMissions;
