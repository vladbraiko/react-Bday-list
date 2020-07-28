import React, { Component } from 'react';
import { getUsers } from './services/users-service';
import { MonthList } from './components/MonthList';

class App extends Component {
  state = {
    months: [],
  };

  componentDidMount() {
    getUsers()
      .then(users => this.transformData(users))
      .then(months =>
        this.setState({
          months,
        }),
      );
  }

  makeTransformedDataTemplate() {
    const options = { month: 'long' };
    const emptyArray = new Array(12);

    return [...emptyArray].map((item, i) => {
      const month = new Date(0, i).toLocaleString(0, options);
      return {
        month,
        users: [],
      };
    });
  }

  transformData(users) {
    const transformedDataTemplate = this.makeTransformedDataTemplate();

    return users.reduce((acc, user) => {
      const i = new Date(user.dob).getMonth();
      acc[i].users.push(user);
      return acc;
    }, transformedDataTemplate);
  }

  render() {
    return (
      <div className="container">
        <MonthList months={this.state.months} />
      </div>
    );
  }
}

export default App;
