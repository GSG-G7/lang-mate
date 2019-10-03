import React, { Component } from 'react';
import DataSource from '../../services/dataSource';

const WithSubscription = (WrappedComponent, selectData) => {
  return class extends Component {
    state = {
      data: selectData(DataSource, this.props),
    };

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange = () =>
      this.setState({ data: selectData(DataSource, this.props) });

    render() {
      const { data, props } = this.state;
      return <WrappedComponent data={data} {...props} />;
    }
  };
};

export default WithSubscription;
