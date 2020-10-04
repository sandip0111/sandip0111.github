import React from 'react';


class SearchBar extends React.Component {



    // onInputChange(event){
    //     console.log(event.target.value);

    // };
    state={term:''};
    handleSubmitButtonChange=event=>{
        event.preventDefault();
        this.props.onSubmt(this.state.term);

    }

    
    render(){
    return (<div className='ui segment'>

        <form onSubmit={this.handleSubmitButtonChange} className='ui form'>
            <div className='field'>
                <label>image Search</label> 
            <input text='text' 
            value={this.state.term}
            onChange={(e)=>this.setState({term :e.target.value})}/>
            </div>
        </form>
    </div>);
};
}


export default SearchBar;