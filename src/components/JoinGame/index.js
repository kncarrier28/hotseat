import React from "react";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  playerName: "",
  gameCode: ""
};

export class JoinGamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const { playerName, gameCode } = this.state;
    this.props.firebase
      .game(gameCode)
      .set(
        {
          players: [{ name: playerName, score: 0 }]
        },
        { merge: true }
      )
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.GAMES + "/" + gameCode);
      });
  }

  render() {
    return (
      <>
        <div className="level">
          <div className="level-item">
            <p className="title">Join A Game</p>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Player Name</label>
            <input
              type="text"
              className="input"
              name="playerName"
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </div>
          <div className="control is-expanded">
            <label className="label">Game Code</label>
            <input
              type="text"
              className="input"
              name="gameCode"
              value={this.state.gameCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <label className="label">&nbsp;</label>
            <button className="button is-primary" onClick={this.handleSubmit}>
              Join Game
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default compose(withFirebase)(JoinGamePage);
