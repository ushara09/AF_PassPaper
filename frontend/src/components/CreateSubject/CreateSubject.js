import React from "react";

const initialState = {
  subjectName: "",
  description: "",
  amount: "",
};

class CreateSubject extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Create Subject</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="subjectName"
              id="name"
              value={this.state.subjectName}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSubject;
