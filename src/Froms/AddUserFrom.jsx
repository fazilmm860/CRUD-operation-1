import React,{useState} from "react";



function AddUserFrom(props) {
    const initUser={id: null,name:'',username:''}
    const [user,setUser]=useState(initUser);

    const handleChange = e =>{
        const {name,value} =e.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit =e =>{
        e.preventDefault();
        if(user.name && user.username){
            handleChange(e,props.addUser(user))
        }
    }
  return (
  <form>
    <label>Name</label>
    <input type="text" className="u-full-width" name='name' value={user.name} onChange={handleChange}/>
    <label>Username</label>
    <input type="text" className="u-full-width" name='name' value={user.username} onChange={handleChange}/>
    <button className="button-primary" type="submit" onClick={handleSubmit}>Add user</button>
  </form>
  )
}

export default AddUserFrom
