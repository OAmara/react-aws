import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import SellerAuth from '../SellerAuth'
import BuyerAuth from '../BuyerAuth'

// Component that is source for user routes/ pages in app
export default function Routes(props) {
	return(
		<React.Fragment>
			<h1>Route here</h1>
			<BuyerAuth />
			<button>Seller's Login</button>
			<SellerAuth />
			{
				// create seperate User login components here and route then redirect upon login/ register 'success'.
				// ^In components, create seperate forms using styled components
			}
		</React.Fragment>
	)
}