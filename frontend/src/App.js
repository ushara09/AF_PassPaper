import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateSubject from "./components/CreateSubject/CreateSubject";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <section>
          <Switch>
            <Route path="/create-course" component={CreateCourse} />
            <Route path="/create-subject" component={CreateSubject} />
            <Route path="/courses" component={Courses} exact />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
