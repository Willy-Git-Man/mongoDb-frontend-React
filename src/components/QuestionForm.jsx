import React from "react";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_: Math.floor(Math.random() * 1000),
      name: "",
      content: "",
      link: "",
      isAnswered: false,
    };
  }

  handleInput(e) {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitQuestion(this.state)

  }

  render() {
    return (
      <form>
        <input type="test" name="name" value={this.state.name}></input>
        <textarea name="content" value={this.state.content}></textarea>
        <input type="test" name="link" value={this.state.link} onChange={this.handleInput}></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default QuestionForm
