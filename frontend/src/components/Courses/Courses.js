import React from "react";
import axios from "axios";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/course/").then((response) => {
      this.setState({ courses: response.data.data });
    });
  }

  navigateSubjectPage(e, courseId) {
    window.location = `/${courseId}`;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.state.courses.length > 0 &&
          this.state.courses.map((item, index) => (
            <div key={index} className="card mb-3">
              <div onClick={(e) => this.navigateSubjectPage(e, item._id)}>
                <h5>Course Name: {item.name}</h5>
                <h6>Lecture: {item.lecture}</h6>
                <h6>Passmark: {item.passmark}</h6>
                <h6>Code: {item.code}</h6>
                <br />
                <br />
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Courses;
