import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from "./components/Dashboard"
import ChatwootWidget from "./components/Chatwoot"
import Create from "./crud/Create";

function App() {
return (
  <>
    <div className="App"></div>
    <Dashboard />
    <ChatwootWidget />
    <Create />
  </>
);
}

export default App

