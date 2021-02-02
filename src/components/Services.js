import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Services = (props) => {
	const programs = props.location.state.programs;

	const services = props.location.state.services;
	const [new_services, setnew_services] = useState(
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
						<div>
							<h4>Extra Services</h4>
							<form>
								<ul className='list-unstyled'>
									{new_services.map((service) => {
										return (
											<li key={service.id}>
												<div class='form-check'>
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
														{`${service.name} for $${service.price}`}
													</label>
												</div>
											</li>
										);
									})}
								</ul>
								<h4>price ${totPrice}</h4>
								<Link
									to={{
										pathname: `/checkout`,
										state: {
											totalAmount: totPrice,
										},
									}}
								>
									<button type='submit' class='btn btn-primary'>
										Check Out
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};
export default Services;
