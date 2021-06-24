const Course = require("../models/course.model");

const createCourse = async (req, res) => {
  if (req.body) {
    const course = new Course(req.body);
    await course
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllCourses = async (req, res) => {
  await Course.find({})
    .populate("subjects", "name description amount")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getSubjectsForCourse = async (req, res) => {
  if (req.params && req.params.id) {
    await Course.findById(req.params.id)
      .populate("subjects", "name description amount")
      .then((data) => {
        res.status(200).send({ subjects: data.subjects });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

// const calculateAmount = async (req, res) => {
//   if (req.params && req.params.id) {
//     const course = await Course.findById(req.params.id); /*.populate(
//       "subjects",
//       "amount"
//     );*/
//     let totalAmount = 0;
//     console.log(course);
//     // console.log(totalAmount); //test
//     if (course.subjects.length > 0) {
//       console.log(course.subjects.length); //test
//       course.subjects.map((subject) => {
//         console.log(subject._id.amount); //test
//         //totalAmount += subject.amount;
//         totalAmount = totalAmount + subject.amount;
//       });
//     }
//     res.status(200).send({ totalAmount: totalAmount });
//   }
// };

const calculateAmount = async (req, res) => {
  if (req.params && req.params.id) {
    const course = await Course.findById(req.params.id).populate(
      "subjects",
      "amount"
    );

    let totalAmount = 0;
    console.log(course);
    if (course.subjects.length > 0) {
      course.subjects.map((subject) => {
        totalAmount += subject.amount;
      });
    }

    res.status(200).send({ totalAmount: totalAmount });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getSubjectsForCourse,
  calculateAmount,
};
