import React, { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

    handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: ''
    });
  }

  render() { 

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor={this.nameInputId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
        <h2>Contacts</h2>
        <ul>
          <li>
            Rosie Simpson
          </li>
          <li>
            Rosie Simpson
          </li>
          <li>
            Rosie Simpson
          </li>
        </ul>
      </form>
    )
  }
}

export default Form;