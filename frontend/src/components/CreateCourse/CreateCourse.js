import React from "react";
import Select from "react-select";
import axios from "axios";

const initialState = {
  subjectName: "",
  code: "",
  passmark: "",
  lecture: "",
  subjects: [],
  options: [],
  selectedSubjects: [],
};

class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubjectSelect = this.onSubjectSelect.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/subject").then((response) => {
      this.setState({ subjects: response.data.data }, () => {
        let data = [];
        this.state.subjects.map((item, index) => {
          let subject = {
            value: item._id,
            label: item.name,
          };
          data.push(subject);
        });
        this.setState({ options: data });
      });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubjectSelect(e) {
    this.setState({ selectedSubjects: e ? e.map((item) => item.value) : [] });
  }

  onSubmit(e) {
    e.preventDefault();
    let course = {
      name: this.state.subjectName,
      code: this.state.code,
      passmark: this.state.passmark,
      lecture: this.state.lecture,
      subjects: this.state.selectedSubjects,
    };

    axios
      .post("http://localhost:5000/course/create", course)
      .then((response) => {
        alert("Course inserted sucessfully !");
        console.log(response.data.data);
      })
      .catch((error) => {
        alert("Course didnt entered");
        console.log("Error -", error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Create Course</h1>

        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id=""
              name="subjectName"
              value={this.state.subjectName}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              className="form-control"
              id=""
              name="code"
              value={this.state.code}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Passmark</label>
            <input
              type="number"
              className="form-control"
              id=""
              name="passmark"
              value={this.state.passmark}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Lecture</label>
            <input
              type="text"
              className="form-control"
              id=""
              name="lecture"
              value={this.state.lecture}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label className="form-label">Subjects</label>
            <Select
              className="basic-multi-select"
              options={this.state.options}
              isMulti
              onChange={this.onSubjectSelect}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateCourse;
