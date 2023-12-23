import { STORE_USERS, UPDATE_USER } from '../Constant/actions';
import { useUserProvider } from '../Context/User/provader'
import useHttp from './useHttp';

const useUser = () => {
  const [state, dispatch] = useUserProvider();
  const { _get } = useHttp()
  const get = () => {
    _get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(data => dispatch({ type: STORE_USERS, payload: data }))
  }
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
    get,
  }
}

export default useUser