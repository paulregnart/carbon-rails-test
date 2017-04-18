import Dispatcher from 'dispatcher';
import UserConstants from 'constants/user';
import Request from 'superagent';

let csrfToken = document.getElementsByName('csrf-token')[0].content;

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
  },

  postData: (data) => {
    Request
      .post('/update')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', csrfToken)
      .end((err, response) => {
        if (!err) {
          Dispatcher.dispatch({
            actionType: UserConstants.POST_DATA,
            data: response.body
          });
        }
      });
  },

  updateValue: (key, ev) => {
    Dispatcher.dispatch({
      actionType: UserConstants.VALUE_UPDATED,
      key: key,
      value: ev.target.value
    });
  }
};

export default userActions;
