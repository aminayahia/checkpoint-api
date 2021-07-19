
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserList from './components/UserList';
function App() {
  const [users, setUsers] = useState([])
  const [load, setLoad] = useState(true)
  const getUsers = () => {
      axios.get("https://jsonplaceholder.typicode.com/users") 
      .then(res => {
          setUsers(res.data)
          setLoad(false)
          console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
      getUsers()
  }, [])
  return (
    <div className="App">
      <UserList  users={users} load={load} />
    </div>
  );
}

export default App;
