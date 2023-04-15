import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label>
        Filter<br/>
        <input type="text" value={value} onChange={onChange}></input>
    </label>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};