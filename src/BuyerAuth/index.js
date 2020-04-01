import React from 'react'
import BuyerLogin from './BuyerLogin'
import BuyerRegister from './BuyerRegister'

export default function BuyerAuth() {

	return(
		<React.Fragment>
			<BuyerLogin />
			<BuyerRegister />
		</React.Fragment>
	)
}