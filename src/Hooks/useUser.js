import { UPDATE_USER } from '../Constant/actions';
import { useUserProvider } from '../Context/User/provader'

const useUser = () => {
    const [state, dispatch] = useUserProvider();
    const update = () => {
        dispatch({
            type: UPDATE_USER,
            payload: {
                id: 2,
                name: "fatemeh",
            }
        });
    }

    return {
        state,
        dispatch,
        update,

    }
}

export default useUser