import { OPEN_LOADING, CLOSE_LOADING } from "../../constants/actionTypes";

export const openLoading = () => ({
    type: OPEN_LOADING,
})

export const closeLoading = () => ({
    type: CLOSE_LOADING,
})