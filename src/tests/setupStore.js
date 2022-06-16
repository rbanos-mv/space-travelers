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
    missions: [
      {
        mission_id: '9D1B7E0',
        mission_name: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved,
      },
    ],
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
