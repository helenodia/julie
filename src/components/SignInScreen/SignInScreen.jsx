import React, { Component } from "react";

class SignInScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			input : ""
		};

		this.handleInput = this.handleInput.bind(this);

	};

	handleInput (e) {
		this.setState({ input : e.currentTarget.value})
		console.log(this.state.input)
	};


	render () {

		return (

			<React.Fragment>

				<h1>Sign in to your account</h1>

				<form>
					<label htmlFor="Username">Enter Username</label>
					<input
						onChange={ this.handleInput }
						type="input"
						id="Username"
					/>
				</form>
				<button
					onClick={ () => this.props.onSubmit(this.state.input)}
				>
					Sign In
				</button>


			</React.Fragment>
		);
	};
};

export default SignInScreen;
