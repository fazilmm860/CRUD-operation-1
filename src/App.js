
import React,{useState}from 'react'
import userList from './data.js';
import UserTable from './Tables/UserTable';
import AddUserFrom from './Froms/AddUserFrom.jsx';
import './App.css';

function App() {
  const [users,setUsers]=useState(userList);
  const addUser = user =>{
    user.id =users.length + 1;
    setUsers([...users,user])
  }
  return (
    <div className="container">
<h1>Reack CRUD App with Hooks</h1>
<div className="row">
  <div className="five column">
    <h2>Add users</h2>
    <AddUserFrom addUser={addUser}/>
    
    </div>
    <div className="seven column">
     <h2>View users</h2>
     <UserTable users={users}/>
    
    </div>
   </div>
    </div>
  );
}

export default App;
