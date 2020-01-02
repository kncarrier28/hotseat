import React from "react";
import { compose } from "recompose";
import randomize from "randomatic";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  playerName: ""
};

export class NewGamePage extends React.Component {
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
    const { playerName } = this.state;
    const newGameCode = randomize("A", 4);
    this.props.firebase
      .game(newGameCode)
      .set({
        answers: [],
        question: ""
      })
      .then(() => {
        this.props.firebase
          .players(newGameCode)
          .add({
            score: 0,
            name: playerName
          })
          .then(player => {
            this.props.firebase.game(newGameCode).update({ hotseat: player });
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.GAMES + "/" + newGameCode);
      });
  }

  render() {
    return (
      <>
        <div className="level">
          <div className="level-item">
            <p className="title">Start New Game</p>
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
          <div className="control">
            <label className="label">&nbsp;</label>
            <button className="button is-primary" onClick={this.handleSubmit}>
              Start Game
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default compose(withFirebase)(NewGamePage);
