import { apiGetMissions } from '../../modules/api';

export const RETRIEVE_MISSIONS = 'space-travelers/missions/RETRIEVE_MISSIONS';
export const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
export const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';

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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export default function missionsReducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.missions;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return newState;
    }
    default: return state;
  }
}
