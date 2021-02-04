import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
import backendApi from '../api/backendApi';
const stripePromise = loadStripe(
	'pk_test_51FJW6JEjkdsuq2ybrjKRjxRrl9iBW0LB67BhJuWA5TY1JxEZwncXTocqEhFsp9GHNf5jQ0pxvBRlgqXUTrNRLLZA00vFJyXvof'
);

const Message = ({ message }) => (
	<section className='section__Message'>
		<p>{message}</p>
	</section>
);
export default function Checkout1(props) {
	let check_in;
	let check_out;
	let room_number;
	let totalAmount;
	if (props.location.state !== undefined) {
		check_in = props.location.state.check_in;
		check_out = props.location.state.check_out;
		room_number = props.location.state.room_number;
		totalAmount = props.location.state.totalAmount;
	}

	const [message, setMessage] = useState('');
    useEffect(() => {

        
		const query = new URLSearchParams(window.location.search);

		if (query.get('success')) {
			toast('Success! Check email for details', { type: 'success' });
		}

		if (query.get('canceled')) {
			toast(
				'Order canceled -- continue to shop around and checkout when you are ready.',
				{ type: 'error' }
			);
		}
	}, []);
	const handleClick = async (event) => {
		const stripe = await stripePromise;

		const response = await backendApi.post('/create-checkout-session/', {
			totalAmount,
			check_in,
			check_out,
			room_number,
		});

		const session = await response.data;

		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});
	};

	return message ? <Message message={message} /> : handleClick();
}
