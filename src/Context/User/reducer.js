import { UPDATE_USER } from "../../Constant/actions";

const UserReducer = (state, { type, payload }) => {
    switch (type) {
        case UPDATE_USER:
            return {
                ...state,
                user: payload,
            }
        default:
            return state;
    }
};
export default UserReducer;