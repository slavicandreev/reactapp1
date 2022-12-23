import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Button />
      <Profile firstName='Slavic'/>
      <Profile />
    </div>
  );
}

export default App;
