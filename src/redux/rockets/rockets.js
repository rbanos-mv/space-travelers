import apiGetRockets from '../../modules/api';

const GET = 'spaceTravelers/Rocket/GET';
const RESERVE = 'spaceTravelers/Rocket/RESERVE';

export const getRockets = () => async (dispatch) => {
  const data = await apiGetRockets();
  const rockets = data.map((rocket) => {
    const {
      id, rocket_name: rocketName, description, flickr_images: flickrImages,
    } = rocket;
    return {
      id,
      rocketName,
      description,
      flickrImage: flickrImages[0] || '',
    };
  });
  dispatch({ type: GET, rockets });
};

export const reserveRocket = (id) => ({ type: RESERVE, id });

const updateReserved = (state, action, reserved) => [...state].map((rocket) => {
  if (rocket.id === action.id) {
    return { ...rocket, reserved };
  }
  return rocket;
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.rockets;

    case RESERVE:
      return updateReserved(state, action, true);

    default:
      return state;
  }
}
