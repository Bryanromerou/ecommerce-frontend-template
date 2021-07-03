import React from 'react';
import AuthModel from '../../Services/Auth';

const Profile = () => {
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
      <button onClick={makeAdmin}>Make Admin</button>
    </div>
  );
}

export default Profile;
