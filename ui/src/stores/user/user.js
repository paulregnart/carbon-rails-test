import Dispatcher from 'dispatcher';
import Store from 'carbon/lib/utils/flux/store';
import ImmutableHelper from 'carbon/lib/utils/helpers/immutable';

import UserConstants from 'constants/user';

let data = ImmutableHelper.parseJSON({
  user: {
    first_name: "",
    last_name: ""
  }
});

class UserStore extends Store {
  [UserConstants.GET_DATA](action) {
    this.data = this.data.set('user', ImmutableHelper.parseJSON(action.data));
  }
}

export default new UserStore('userStore', data, Dispatcher);
