import React from 'react';
import ImageList from './ImageList';
import axios from 'axios';
import SearchBar from './SearchBar';
import Api  from '../api/api';
class App extends React.Component{

    state={images : []};
      handleSubmitButtonChange=async term=>{
        
        

        const response=await Api.get('/search/photos',{

        params :{ query :term

        }
       
        
        });

        this.setState({images :response.data.results});
        
    }
    render(){
    return (<div className='ui container' style={{marginTop :'10px'}}>
        <SearchBar onSubmt={this.handleSubmitButtonChange}/>
        <ImageList  images={this.state.images}/>
     </div>
    );
 }
};

export default App;

