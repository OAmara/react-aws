import React from 'react'

export default function BuyerRegister() {

	return(
		<React.Fragment>
			<h3>Buyer Register</h3>
			<div style={{backgroundColor: 'grey'}}>
			<form>
				<label>Email</label>
				<input 
					placeholder='Email'
					type='text'
				/>
				<br/>
				<label>Password</label>
				<input 
					placeholder='Password'
					type='password'
				/>
				<button>Register</button>
			</form>
			<button>Login Here</button>
			</div>
		</React.Fragment>
	)
}