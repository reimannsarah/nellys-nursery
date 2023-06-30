import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="name">Latin Name:</label>
        <input type="text" id="name" name="latin-name" required />
        
        <label htmlFor="colloquial">Colloquial Name:</label>
        <input type="text" id="colloquial" name="colloquial-name" required />

        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity"></input>

        <button type="submit">{props.buttonText}</button>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;