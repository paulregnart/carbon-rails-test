// ui/src/actions/user/user.js

import Dispatcher from 'dispatcher';
import UserConstants from 'constants/user';
import Request from 'superagent';

let userActions = {
  getData: () => {
    Request
      .get('/')
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (!err) {
          Dispatcher.dispatch({
            actionType: UserConstants.GET_DATA,
            data: response.body
          });
        }
      });
  }
};

export default userActions;
