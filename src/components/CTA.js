import React, { useState } from 'react';
import Datepicker from './datePicker/Datepicker';
import useRoomsList from '../hooks/useRoomsList';
import usePrograms  from '../hooks/usePrograms'
import {Link}  from 'react-router-dom'
import CTAStyle from '../styles/CTAStyle';
import wlotus from '../static/lotuswhite.png';
import useServices from '../hooks/useServices';

const CTA = () => {
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [checkIn, setcheckIn] = useState(new Date());
	const [program, setprogram] = useState('');
	const [programs] = usePrograms();
	const [services] = useServices();
	const [people, setpeople] = useState(2);
    const [comment, setcomment] = useState('');
    const [rooms,searchApi] = useRoomsList();
	const SubmitHandler = (evt) => {
		evt.preventDefault();
		searchApi({
			firstName,
			lastName,
			checkIn,
			program,
			people,
			comment,
		});
		
			
		

		
    };
    
	return (
		<CTAStyle>
			<img src={wlotus} alt='' />
			<h4>
				Ultimate Relaxation <br />
				For Your Body &amp; Soul.
			</h4>
			<form onSubmit={SubmitHandler}>
				<div className='row'>
					<div className='col-lg-6 col-sm-12'>
						<input
							type='text'
							className='form-control'
							placeholder='First name'
							onChange={(e) => setfirstName(e.target.value)}
						/>
					</div>
					<div className='col-lg-6 col-sm-12'>
						<input
							type='text'
							className='form-control'
							placeholder='Last name'
							onChange={(e) => setlastName(e.target.value)}
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<Datepicker
							checkIn={checkIn}
							setCheckIn={(date) => setcheckIn(date)}
							className='form-control'
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<select
							class='form-control'
							placeholder='Program'
							onChange={(e) => setprogram(e.target.value)}
						>
							<option>Program</option>
							<option>2 DAYS</option>
							<option>7 DAYS</option>
						</select>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col'>
						<input
							type='number'
							className='form-control'
							placeholder='no of people to reserve for'
							onChange={(e) => setpeople(e.target.value)}
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<textarea
							className='form-control'
							name='message'
							rows='3'
							placeholder='Additional Comment? (optional)'
							onChange={(e) => setcomment(e.target.value)}
						></textarea>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col-12'>
						<Link
							to={{
								pathname: `/services`,
								state: {
									rooms:[1,2,3],
									programType: program,
									programs: programs,
									services
								},
							}}
						>
						<input type='submit' value='Reserve' /></Link>
					</div>
				</div>
			</form>
		</CTAStyle>
	);
};

export default CTA;
