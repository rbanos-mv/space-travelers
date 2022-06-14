import { apiGetRockets } from '../../modules/api';

const GET = 'spaceTravelers/Rocket/GET';

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

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.rockets;

    default:
      return state;
  }
}
