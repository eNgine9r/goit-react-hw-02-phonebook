import React from "react";
import Form from '../Form/Form';


class Phonebook extends React.Component {

  formSubmitHandler = data => {
    console.log(data);
  };


  render() {
    return (
      <Form onSubmit={this.formSubmitHandler} />
    );
  }
}

export default Phonebook;