import React from "react";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    // this.setState({ loading: true });
    // this.unsubscribe = this.props.firebase.charts().onSnapshot(snapshot => {
    //   let charts = [];
    //
    //   snapshot.forEach(doc => {
    //     charts.push({ ...doc.data(), chartId: doc.id });
    //   });
    //
    //   this.setState({
    //     charts: charts,
    //     loading: false
    //   });
    // });
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <p className="title">Home</p>

        {loading && <div>Loading...</div>}
      </div>
    );
  }
}

export default compose(withFirebase)(HomePage);
