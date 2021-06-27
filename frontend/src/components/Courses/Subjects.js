import React from "react";
import axios from "axios";

class Subjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      totalAmount: "",
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/course/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ subjects: response.data.subjects });
      })
      .catch((error) => {
        console.log("Error - ", error.message);
      });

    axios
      .get(`http://localhost:5000/course/amount/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ totalAmount: response.data.totalAmount });
        console.log(response.data.totalAmount);
      })
      .catch((error) => {
        console.log("Error -", error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Course Subjects</h1>
        <h4>Total Amount: {this.state.totalAmount}</h4>
        <br />
        {this.state.subjects.length > 0 &&
          this.state.subjects.map((item, index) => (
            <div key={index} className="card mb-3">
              <div>
                <h5>Name: {item.name}</h5>
                <h6>Description: {item.description}</h6>
                <h6>Amount: {item.amount}</h6>

                <br />
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Subjects;
