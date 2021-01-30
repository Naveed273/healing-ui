import React, { useState } from 'react';
import room_img from '../assets/room_img.png';
import Button from '@material-ui/core/Button';
import ServiceTransferList from './ServiceTransferList';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
	const programs = props.location.state.programs;
    let services = props.location.state.services;
    const selectedRoomNumber = 2;
	const selectedProgramType = props.location.state.programType;
	const [totPrice, SetTotPrice] = useState(0);
	const [selectedServices, setSelectedServices] = useState([]);

	const programDefaultServices = programs.find(
		(program) => program.type === selectedProgramType
	).services;

	const hashService = ({ id, name, price }) => `${id} ${name} ${price}`;

	const hashSet = new Set(programDefaultServices.map(hashService));

	services = services.filter((p) => !hashSet.has(hashService(p)));
	return (
		<div>
			<ul className='list-unstyled'>
				<h4>Available Rooms</h4>
				<li>room 1</li>
				<li>room 2</li>
			</ul>
			<Container>
				<Col className='flex-row align-items-center' lg={8}>
					<Card>
						<Card.Img variant={'top'} src={room_img} />
						<Card.Body>
							
							<Card.Subtitle>
								{!services && !programDefaultServices ? null : (
									<ServiceTransferList
										allServices={services}
										programDefaultServices={programDefaultServices}
										totalPrice={(price) => {
											SetTotPrice(price);
										}}
										selectedServices={(rightServices) => {
											setSelectedServices(rightServices);
										}}
									/>
								)}
							</Card.Subtitle>
						</Card.Body>
						<Card.Footer>
							<Link
								to={{
									pathname: `/checkout`,
									state: {
										programType: selectedProgramType,
										extraServices: selectedServices,
										roomNumber: selectedRoomNumber,
										totalAmount: totPrice,
										programs: programs,
									},
								}}
							>
								<Button
									className='float-right'
									variant={'contained'}
									color={'primary'}
								>
									Check Out
								</Button>
							</Link>
						</Card.Footer>
					</Card>
				</Col>
			</Container>
		</div>
	);
};
export default Services;
