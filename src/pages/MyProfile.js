import ReservedMissions from '../components/ReservedMissions';
import ReservedRockets from '../components/ReservedRockets';

const MyProfile = () => (
  <div className="row pages-content profile-row">
    <div className="profile">
      <h2>My Missions</h2>
      <ReservedMissions />
    </div>
    <div className="profile">
      <h2>My Rockets</h2>
      <ReservedRockets />
    </div>
  </div>
);

export default MyProfile;
