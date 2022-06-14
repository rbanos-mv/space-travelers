import { apiGetMissions } from '../../modules/api';

const RETRIEVE_MISSIONS = 'space-travelers/missions/RETRIEVE_MISSIONS';

export const retrieveMissions = () => async (dispatch) => {
  const data = await apiGetMissions();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({
    type: RETRIEVE_MISSIONS,
    missions,
  });
};

export default function missionsReducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      console.log('action.missions', action.missions);
      return [...action.missions];
    default: return state;
  }
}
