import React from 'react'

export default function SellerLogin() {

	return(
		<React.Fragment>
			<h3>Seller Login</h3>
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
				<button>Login</button>
			</form>
			<button>Register Here</button>
			</div>
		</React.Fragment>
	)
}