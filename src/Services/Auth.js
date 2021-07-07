import axios from 'axios';
const URL = 'http://localhost:4000/api/v1/users'

class AuthModel {
  static googleLogin = async(tokenId)=>{
    console.log(tokenId)
    const {data} = await axios.post(`${URL}/googleLogin`,{tokenId:tokenId})
    if(!data) return new Error("Invalid Credentials")
    this.saveUserFromLocalStorage(data.user);
    return data.user
  }

  static makeAdmin(){
    console.log(`${URL}/makeAdmin`)
    console.log({headers:this.getUserFromLocalStorage()})
    return axios.post(`${URL}/makeAdmin`,{secretKey:"Paloma123"},{headers:this.getUserFromLocalStorage()})
  }

  static getUserFromLocalStorage(){
    const user = JSON.parse(localStorage.getItem("user"));

		if (user && user.token) {
			return { "x-access-token": user.token }; // for Node.js Express back-end
		} else {
			return {};
		}
  }
  
  static saveUserFromLocalStorage(user){
    localStorage.setItem("user",JSON.stringify(user))
  }
}

export default AuthModel;