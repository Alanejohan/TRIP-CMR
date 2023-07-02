import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Recommendation from './pages/recommendation/top recommendations';
//import logo from "./logo192.png"



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/top-recommendation" element={<Recommendation/>}/>
      </Routes>
    </BrowserRouter>
  )
}



























////////////////////////---------------Play Ground-----------------////////////////////////
/*
//adding loading and error states to the fetched data
function App({ username }) {

  //declaring the various states of the API call
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  //fetching the data from the API
  useEffect(() => {
    if (!username) return;
    setLoading(true);
    fetch(`http://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [username]);


  //changing the information displayed based on the current state of the useState
  if (loading) return <h1>loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <h3>there is no data to be displayed</h3>;
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.company}</h2>
    </div>
  );
}

*/



/*
//fetchin data with react hooks (useEffect and useState) 
function App({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.company}</h2>
      </div>
    );
  }

  return(
    <>
      <p>no user available</p>
    </>
  );
}
*/


/*

//reducer functions take in the current state and gives out the opposite, they take in 2 paramenters the fucntion and the initial state.

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  return(
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      
      <p>{checked ? "checked" : "not checked" }</p>

    </>
  );
}

*/


/*

//making use of the use effect method in react to watch for changes in the values of the mood and action to be done based on the mood.
function App() {
  const  [mood, setMood]= useState("Happy");
  const  [action, setAction]= useState("Work");

  useEffect(() => {
    console.log(`here is the current mood in here: ${mood}`);
  }, [mood]);

  useEffect(() => {
    console.log(`We are currently taking this action: ${action}`);
  }, [action]);

  console.log(mood);
  return(
    <>
      <h1>
        My current mood is {mood} and i am {action}
      </h1>
      <button onClick={() => setMood("Angry")}>
        Serious
      </button>
      <button onClick={() => setMood("Furious")}>
        Furious
      </button>
      <button onClick={() => setAction("Rest")}>
        Rest
      </button>
      <button onClick={() => setAction("Work Harder")}>
        work Harder
      </button>
    </>
  );
}

*/


/*

//making uuse of the use state method to change the mood of the user.
//it takes in 2 vairables the fist variable is the default state and the second is the function that is used to update the state of the objact based on the value we are passing to it.
function App() {
  const  [mood, setMood]= useState("Happy");
  console.log(mood);
  return(
    <>
      <h1>
        My current mood is: {mood}
      </h1>
      <button onClick={() => setMood("Angry")}>
        Serious
      </button>
      <button onClick={() => setMood("Furious")}>
        Furious
      </button>
    </>
  );
}

*/


/*
//destructuring an array to assign some variables tha values in an array
const [best, instructive] = ["Can't hurt me", "Rich Dad Poor Dad", "No Excuses"];
console.log(instructive, best);

function PublicComponent(){
  return(
    <h1>
      this is resource is public for the normal users
    </h1>
  );
}

function PrivateComponent(){
  return(
    <h1>
      this resource is reserved to authorized users
    </h1>
  );
}

//conditional rendering based on props passed in index for the whole component
function App(props) {

  if(props.authorized) {
    return (
      <PrivateComponent />
    );
  }
  else {
    return (
      <PublicComponent />
    );
  }
  //shorthandle for if else statement 
  
  return (
    <>
    {props.authorized ? (<PublicComponent />) : (<PrivateComponent />)};
    </>
  );
  
}

*/

/*

//declaring a constant to be used as a prop in react
const actionsteps = [
  "update my list of yearly, monthly, weekly and daily goals",
  "Filter throught them usign the 80 - 20 principle",
  "focus on the 20% that will give the most results and get them done right away",
  "Iterate and learn from each day I practice to ensure I got the most out of myself and my skills"
];

//defining the id for each element in our array so we map each element to the correspoding list item
const actionObjects = actionsteps.map((actionstep, i) => ({ id: i, title: actionstep}))

//declairing function taht will make use of our props

function Body(props) {
  return(
    
    <ul>
      {props.action.map((actionstep) => (
      <li key={actionstep.id}>{actionstep.title}</li>
      ))}
    </ul>
  );
}

function Header() {
  return(
    <h1>
      I really have a fucked up mentality but must change it in less than a week to cope with the current objectives I have.
    </h1>,
    <h2>
    Three action steps to put in place to ensure i reach my daily objectives
    </h2>,
    <img src={logo} alt="images in react"/>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body action={actionObjects}/>
    </div>
  );
}

*/
/*
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now to finish your final year project in time.
        </a>
      </header> 
      
    </div>
  );
}
*/
export default App;
