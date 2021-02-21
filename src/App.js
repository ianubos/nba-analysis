import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AppStyle from "./App.module.scss"
import Header from "./components/header/Header"

const AnotherPage = () => <h1>Another Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
const Home = () => <h2>home here!!!</h2>

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/another-page"><AnotherPage /></Route>
      </Switch>
    </div>
  </Router>
);

export default App;






// class Home extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/.netlify/functions/server/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/.netlify/functions/server/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();

//     this.setState({ responseToPost: body });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <p>{this.state.response}</p>
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <strong>Post to Server:</strong>
//             </p>
//             <input
//               type="text"
//               value={this.state.post}
//               onChange={e => this.setState({ post: e.target.value })}
//             />
//             <button type="submit">Submit</button>
//           </form>
//           <p>{this.state.responseToPost}</p>
//         </header>
//       </div>
//     );
//   }
// }