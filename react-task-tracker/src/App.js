import Header from './components/Header'


// // Using ES6 classes
// import React from 'react';
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

function App() {
  const name = 'Brad';
  const x = true

  return (
    <div className="Container">
      <Header title='Hello'/>
    </div>
  );
}

export default App;
