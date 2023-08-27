const axios = require('axios');
const address = 'https://www.google.com';


axios.get(address)
.then((response) => {
   console.log(response); 
})
.catch((error) => {
    console.log(error);
})
.then(() =>{
    console.log("All dones");
});