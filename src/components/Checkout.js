import React from 'react';
import { Link } from 'react-router-dom';
const Checkout = (props) => {
	const confirmation = String(props.location.search);

	return confirmation === '?success=true' ? (
		<h5>
			Success! Check email for details <br />
			<Link to='/'>back to home</Link>
		</h5>
	) : (
		<h5>
			Order canceled -- continue to shop around and checkout when you are ready.
			<br />
			<Link to='/'>back to home</Link>
		</h5>
	);
};
export default Checkout;
