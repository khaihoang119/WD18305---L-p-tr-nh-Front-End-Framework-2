import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  function getTime() {
    return new Date().toLocaleTimeString()
  }

  return (
    <div className="container">
      <div className='row'>
        <h2 className='p-3'>Live Search: React Application</h2>
        <form class="d-flex p-3 col-9">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className='row'>
        <h2 className='p-3'>Current Time: {getTime()}</h2>
      </div>
    </div>
  );
}

export default App;
