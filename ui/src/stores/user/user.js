import Dispatcher from 'dispatcher';
import Store from 'carbon/lib/utils/flux/store';
import ImmutableHelper from 'carbon/lib/utils/helpers/immutable';

import UserConstants from 'constants/user';

let data = ImmutableHelper.parseJSON({
  user: global.USER_DATA
});

class UserStore extends Store {
  [UserConstants.GET_DATA](action) {
    this.data = this.data.set('user', ImmutableHelper.parseJSON(action.data));
  }

  [UserConstants.VALUE_UPDATED](action) {
    this.data = this.data.setIn(['user', action.key], action.value);
  }
}

export default new UserStore('userStore', data, Dispatcher);
