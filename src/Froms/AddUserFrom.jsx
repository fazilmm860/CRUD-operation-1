import React,{useState} from "react";



function AddUserFrom(props) {
    const initUser={id: null,name:'',username:''}
    const [user,setUser]=useState(initUser);
  return (
  <form>
    <label>Name</label>
    <input type="text" className="u-full-width" name='name' value={user.name} />
    <label>Username</label>
    <input type="text" className="u-full-width" name='name' value={user.username} />
    <button className="button-primary" type="submit">Add user</button>
  </form>
  )
}

export default AddUserFrom
