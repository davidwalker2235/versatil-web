import { OPEN_MODAL_VIDEO, CLOSE_MODAL_VIDEO } from "../../constants/actionTypes";

export const openModalVideo = (key) => {
    return {
        type: OPEN_MODAL_VIDEO,
        key
      }
};

export const closeModalVideo = () => {
    return {
        type: CLOSE_MODAL_VIDEO
      }
};
