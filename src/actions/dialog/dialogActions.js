import { OPEN_DIALOG, CLOSE_DIALOG } from "../../constants/actionTypes";

export const openDialog = (isPolicy) => {
  debugger;
    return {
        type: OPEN_DIALOG,
        value: isPolicy
      }
};

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG
      }
};
