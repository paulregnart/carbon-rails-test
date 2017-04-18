import React from 'react';
import { connect } from 'carbon/lib/utils/flux';
import UserStore from 'stores/user';
import UserActions from 'actions/user';

import Form from 'carbon/lib/components/form';
import Textbox from 'carbon/lib/components/textbox';

class User extends React.Component {
  componentWillMount() {
    if (!global.USER_DATA) {
      UserActions.getData();
    }
  }

  submit = (ev, valid) => {
    ev.preventDefault();

    if (valid) {
      UserActions.postData(this.state.userStore.get('user'));
    }
  }

  render() {
    let userStore = this.state.userStore,
        firstName = userStore.getIn(["user", "first_name"]),
        lastName = userStore.getIn(["user", "last_name"]);

    return (
      <Form afterFormValidation={ this.submit }>
        <h1>Hello, { firstName } { lastName }</h1>

        <Textbox
          label="First Name"
          value={ firstName }
          onChange={ UserActions.updateValue.bind(this, 'first_name') }
        />

        <Textbox
          label="Last Name"
          value={ lastName }
          onChange={ UserActions.updateValue.bind(this, 'last_name') }
        />
      </Form>
    );
  }
}

export default connect(User, UserStore);
