import React from "react";
import { connect } from "react-redux";
import { eat, play, nap, set_name, set_activity } from "../redux/actions";

const Activity = ({ activity, eat, play, nap, set_name, set_activity }) => (
  <>
    <h1>What is the cat doing?</h1>
    <p>The cat is {activity}</p>
    <button onClick={() => eat()}>Eating</button>
    <button onClick={() => play()}>Playing</button>
    <button onClick={() => nap()}>Napping</button>
    <button onClick={() => set_name()}>Name</button>
    <button onClick={() => set_activity()}>Activity</button>
  </>
);
const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};
export default connect(
  mapStateToProps, // mapStateToProps - What do I want?
  { eat, play, nap, set_name, set_activity } // mapDispatchToProps - What do I want to do?
)(Activity);
