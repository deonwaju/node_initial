const axios = require('axios');
const address = 'https://wwww.google.com';


axios.get(address)
.then((response) => {
   console.log(response); 
})
.catch((error) => {
    console.log(error);
})
.then(() =>{
    console.log("All done");
});