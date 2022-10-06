import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Client from '../../services/http/client';
import Config from '../../config';
import { actionUserDataReceived } from '../../redux/user/userActions';
import { actionUpdateSession } from '../../redux/session/sessionActions';

import Loading from '../Loading';


function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        await Client.getInstance()
        // Send token to the server
          .get(Config.API_URL_MEMBER)

          // Token is valid
          .then((response) => {
            const userData = response.data;
            dispatch(actionUserDataReceived(userData));
            dispatch(actionUpdateSession());
            //console.log('Valid Token');
          })
          // No token / Token is not valid
          .catch((error) => console.log('No token', error));
      }
      catch (error) {
        console.log('No token', error);
      }
      finally {
        setIsLoading(false);
      }
    }());
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Outlet />}
    </>
  );
}

export default PersistLogin;
