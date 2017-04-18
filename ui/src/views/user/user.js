// ui/src/views/user/user.js

import React from 'react';
import { connect } from 'carbon/lib/utils/flux';
import UserStore from 'stores/user';
import UserActions from 'actions/user';

class User extends React.Component {
  componentWillMount() {
    UserActions.getData();
  }

  render() {
    let userStore = this.state.userStore,
        firstName = userStore.getIn(["user", "first_name"]),
        lastName = userStore.getIn(["user", "last_name"]);

    return (
      <h1>Hello, { firstName } { lastName }</h1>
    );
  }
}

export default connect(User, UserStore);
