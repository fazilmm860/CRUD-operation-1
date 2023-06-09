
import React,{useState, useEffect}from 'react'
import userList from './data.js';
import UserTable from './Tables/UserTable';
import AddUserFrom from './Froms/AddUserFrom.jsx';
import EditUserForm from './Froms/EditUserForm.jsx';
import useAsyncRequest from './hooks/UseAsyncRequest.js';

const App=()=> {
  const [users,setUsers]=useState(userList);

  const addUser = user =>{
    // user.id =users.length + 1;
    user.id=users[users.length - 1].id + 1;
    setUsers([...users,user])
  }
  const deleteUser= (roll) => {
    setUsers(users.filter(user => user.roll !== roll))
  }
  const [editing, setEditing]= useState(false)

  const initialUser= {roll: null, name:'', clas:''}
  const [currentUser,setCurrentUser]=useState(initialUser)

  const editUser=(id,user)=>{
    setEditing(true);
    setCurrentUser(user);
  }
  const updateUser= (newUser)=>{
    setUsers(users.map(user=>(user.roll === currentUser.roll ? newUser : user))
    );
    setCurrentUser(initialUser)
    setEditing(false)
  }
  const [data,loading]=useAsyncRequest(3);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          roll: obj.roll,
          name: obj.name,
          clas: obj.clas ,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);
 
  return (
    <div className="container">
     <h1>Reack CRUD App with Hooks</h1>
   <div className="row">
  <div className="five column">
    { editing ? (
      <div>
        <h2>Edit user</h2>
        <EditUserForm
          currentUser={currentUser}
          setEditing={setEditing}
          updateUser={updateUser}
          />
      </div>
     ) : (
            <div>
            <h2>Add users</h2>
            <AddUserFrom addUser={addUser}/>
    
           </div>
     )}

     </div> 
     {loading || !users ? (
          <p>Loading...</p>
        ) : (
     
    <div className="seven column">
    
     <h2>View users</h2>
     
     <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
    
    </div>
    )}
   </div>
  </div>
  );
}

export default App;
