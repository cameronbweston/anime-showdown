import React, { Component } from 'react';

class Search extends Component {
    state = { 
        invalidForm: true,
		formData: {
			query: '',
			type: 'anime'
		},
     }
     formRef = React.createRef();

     handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};
    handleSubmit = e => {
		e.preventDefault();
    this.props.history.push(`/search/${this.state.formData.query}`)
  };
    render() { 
        return ( 
            <>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>

                    <input  
                    name='query'
                    value={this.state.formData.query}
                    onChange={this.handleChange}
                    className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" 
                    type="text" 
                    placeholder="Search">

                    </input>

                </form>
            </>
         );
    }
}
 
export default Search;