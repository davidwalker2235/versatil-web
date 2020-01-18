import { OPEN_DIALOG, CLOSE_DIALOG } from "../../constants/actionTypes";

export const openDialog = (title, content) => {
    return {
        type: OPEN_DIALOG,
        title,
        content
      }
};

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG
      }
};
