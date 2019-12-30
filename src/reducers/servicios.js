import { MAP_INITIAL_DATA } from "../constants/actionTypes";

const initialState = {
  titlePage: "Servicios page",
  services: [],
  serviceData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${MAP_INITIAL_DATA}_servicios`:
      return {
        ...state,
        services: action.value[action.key].serviciosAry || []
      };
    case `${MAP_INITIAL_DATA}_alquilerEquipos`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_gruposMusicales`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_carpas`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_decoraciones`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_catering`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_gestionEspacios`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    case `${MAP_INITIAL_DATA}_versatilRecording`:
      return {
        ...state,
        serviceData: action.value[action.key] || {}
      };
    default:
      return state;
  }
};
