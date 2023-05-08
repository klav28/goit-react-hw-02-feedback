import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(btn => (
      <button key={btn} type="button" onClick={onLeaveFeedback} name={btn}>
        {btn}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
