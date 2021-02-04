import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import useRoomReserve from "../hooks/useRoomReserve";
const Checkout = (props) => {
	const query = new URLSearchParams(window.location.search);
	const [roomReserve, roomReserveApi]=useRoomReserve()
	const success = query.get('success');
	const check_in=query.get('check_in')
	const check_out=query.get('check_out')
	const room_number=query.get('room_number')

	useEffect(()=>{
		if(success){
			roomReserveApi({check_in, check_out, room_number});
		}

	},[])


	return success  ? (
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
