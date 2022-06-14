import PropTypes from 'prop-types';

const MissionsList = (props) => {
  const { missions } = props;
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
            <tr key={missions.indexOf(mission)}>
              <td className="left-col">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>NOT A MEMBER</td>
              <td><button className="join-btn" type="button">Join Mission</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default MissionsList;
