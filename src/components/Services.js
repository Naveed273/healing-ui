import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ServiceStyle from '../styles/ServicesStyle';

const Services = (props) => {
	window.scrollTo(0, 0)

	const programs = props.location.state.programs;
	const checkIn = props.location.state.checkIn
	const checkOut = props.location.state.checkOut
	const services = props.location.state.services;
	const selectedRoom = props.location.state.pickedRoom
	const [new_services, setNewServices] = useState(
		services.map((service) => {
			return { ...service, isChecked: false };
		})
	);

	const selectedProgramType = props.location.state.programType;

	const programDefaultServices = programs.find(
		(program) => program.type === selectedProgramType
	).services;

	const programDefaultPrice = programDefaultServices.reduce(
		(result, current) => result + current.price,
		0
	);
	const [totPrice, SetTotPrice] = useState(programDefaultPrice);

	const handlePrice = (service) => {
		if (!service.isChecked) {
			SetTotPrice(totPrice + service.price);
			service.isChecked = true;
		} else {
			SetTotPrice(totPrice - service.price);
			service.isChecked = false;
		}
	};
	return (
		<section id='extra'>
			<Navigation />
			<div className='container' style={{ height: '60vh' }}>
				<div className='row h-100 d-flex justify-content-center align-middle align-items-center'>
					<div className='col d-flex justify-content-center align-middle'>
						<ServiceStyle>
						<form>
								<div className="label-holder"><h3>{selectedProgramType}</h3><span>{programDefaultPrice}</span></div>
								<h3 className="line-up">Extras</h3>
								<ul className='list-unstyled'>
									{new_services.map((service) => {
										return (
											<li key={service.id}>
												<div class='form-check label-holder'>
													<label class='form-check-label' for={`${service.id}`}>
														<input
															type='checkbox'
															class='form-check-input'
															id={`${service.id}`}
															value={service.isChecked}
															onChange={(e) => {
																handlePrice(service);
															}}
														/>
														{`${service.name}`} 
													</label>
													<span>{`${service.price}`}</span>
												</div>
											</li>
										);
									})}
								</ul>
								<h4 className="line-up">Total <span>{totPrice}</span></h4>
								<Link
									to={{
										pathname: `/checkout1`,
										state: {
											totalAmount: totPrice,
											room_number: selectedRoom,
											check_in:checkIn,
											check_out:checkOut,
										},
									}}
								>
									<button type='submit' class='btn btn-primary' >
										Check Out
									</button>
								</Link>
							</form>
						</ServiceStyle>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};
export default Services;
