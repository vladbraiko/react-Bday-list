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
    const template = [];

    for (let i = 0; i <= 11; i += 1) {
      const month = new Date(0, i).toLocaleString(0, options);
      template.push({ month, users: [] });
    }
    return template;
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
