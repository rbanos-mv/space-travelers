import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MissionsList = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();
  const joinMissionHandeler = (id) => {
    dispatch(joinMission(id));
  };
  const leaveMissionHandeler = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th><h4 className="mission-title">Mission</h4></th>
          <th className="desc-col"><p>Description</p></th>
          <th className="status-col"><p>Status</p></th>
          <th className="join-col"> </th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="left-col">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved && (
                <div className="status active-member">
                  Active Member
                </div>
                )}
                {!mission.reserved && (
                <div className="status">
                  NOT A MEMBER
                </div>
                )}
              </td>
              <td>
                {mission.reserved && (
                <button className="join-btn leave-btn" type="button" onClick={() => leaveMissionHandeler(mission.mission_id)}>
                  Leave Mission
                </button>
                )}
                {!mission.reserved && (
                <button className="join-btn" type="button" onClick={() => joinMissionHandeler(mission.mission_id)}>
                  Join Mission
                </button>
                )}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default MissionsList;
