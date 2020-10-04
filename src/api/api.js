import axios from 'axios';


export default axios.create({
	baseURL : 'https://api.unsplash.com',
	 headers :{
            Authorization: 'Client-ID odCmDPY9_DMOEYD5zzaRwkREmyR8mwiJcnZKf97HmoE'
        }
        
})

