import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// // Using ES6 classes
// import React from 'react';
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at :30 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30 PM",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
