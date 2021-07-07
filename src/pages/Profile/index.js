import React from 'react';
import AuthModel from '../../Services/Auth';

const Profile = () => {
  const localUser =  JSON.parse(localStorage.getItem("user"))
  const makeAdmin = async () =>{
    const {data} = await AuthModel.makeAdmin();
    const user = JSON.parse(localStorage.getItem("user"))
    user.role = data.savedUser.role;
    localStorage.setItem("user",JSON.stringify(user))
    window.location.reload();
  }
  return (
    <div>
      Profile
      <h2>
      {localUser.name}
      </h2>
      {localUser.role =="ADMIN"?
      <h3>You are an Admin!</h3>:
      <button onClick={makeAdmin}>Make Admin</button>
      }
    </div>
  );
}

export default Profile;
