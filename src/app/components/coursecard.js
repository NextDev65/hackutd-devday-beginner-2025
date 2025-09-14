import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
      <h1 className="text-4xl font-bold text-emerald-800 mb-1">
        {props.courseCode}
      </h1>
      <h2 className="text-xl font-semibold text-emerald-500 mb-1">
        {props.title}
      </h2>
      <p className="text-gray-500 mb-2">
        {props.description}
      </p>
      <div className="inline-block">
        <span className="bg-emerald-300 text-fuchsia-900 px-3 py-l rounded-full text-sm font-medium">
          {props.creditHours} Credit Hours
        </span>
      </div>
    </div>
  );
};

export default CourseCard;