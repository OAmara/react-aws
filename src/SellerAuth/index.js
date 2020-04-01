import React from 'react'
import SellerLogin from './SellerLogin'
import SellerRegister from './SellerRegister'

export default function SellerAuth() {

	return(
		<React.Fragment>
			<SellerLogin />
			<SellerRegister />
		</React.Fragment>
	)
}