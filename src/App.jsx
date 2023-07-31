import { useState } from "react";
import "./App.css";
import Question from "./Question";

function App() {
  return (
    <>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "This is first question",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nisi. Sed beatae incidunt praesentium perferendis, repudiandae ab molestiae! Asperiores, dignissimos doloribus quaerat excepturi nobis quia minus vitae repellendus perferendis consectetur?",
  },
  {
    id: 2,
    title: "yet another question",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nisi. Sed beatae incidunt praesentium perferendis, repudiandae ab molestiae! Asperiores, dignissimos doloribus quaerat excepturi nobis quia minus vitae repellendus perferendis consectetur?",
  },
  {
    id: 3,
    title: "This is first question",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nisi. Sed beatae incidunt praesentium perferendis, repudiandae ab molestiae! Asperiores, dignissimos doloribus quaerat excepturi nobis quia minus vitae repellendus perferendis consectetur?",
  },
];

export default App;
