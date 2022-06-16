import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';

const setupStore = (reserved) => {
  const preloadedState = {
    rockets: [
      {
        id: 1,
        rocketName: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickrImage: 'https://imgur.com/DaCfMsj.jpg',
        reserved,
      },
    ],
    missions: [],
  };

  return configureStore({
    preloadedState,
    reducer: {
      rockets: rocketsReducer,
      missions: missionsReducer,
    },
  });
};

export default setupStore;
