import { shallowEqual, useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rocketList = useSelector((state) => state.rockets, shallowEqual);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved);

  return (
    <div>
      {!!reservedRockets.length && (
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className="profile-item">
              {rocket.rocketName}
            </li>
          ))}
        </ul>
      )}
      {!reservedRockets.length && <h4>No reserved rockets!</h4>}
    </div>
  );
};

export default ReservedRockets;
