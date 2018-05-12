import React, {Component} from 'react'

class Search_Bar extends Component {
    constructor (props){
        super (props);

    this.state={ term : ""};
    }

    render(){
        return ( <div className='search-bar' > 
        <input value={this.state.term}
         onChange={ e=> this.onInputChange(e.target.value) }/>
              </div> );
    }

     onInputChange(term){
       this.setState ({term});
       this.props.onSearchTermChange(term);
     }

}




export default Search_Bar; 