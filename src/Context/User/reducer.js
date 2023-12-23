import { STORE_USERS, UPDATE_USER } from "../../Constant/actions";

const UserReducer = (state, { type, payload }) => {
  console.log(type , payload);
  switch (type) {
    case STORE_USERS:
      return{
        ...state,
        users:payload, 
      }
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