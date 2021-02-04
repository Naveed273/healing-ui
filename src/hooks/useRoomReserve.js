import {useState} from 'react';
import backendApi from '../api/backendApi';

export default () => {
    const [roomReserve, setRoomReserve] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');

    const roomReserveApi = async ({check_in, check_out, room_number}) => {
        try {
            const response = await backendApi.post(`/rooms/${room_number}/reserve/`, {
                check_in: check_in,
                check_out: check_out,
            });
            setRoomReserve(response.data);

        } catch (err) {
            setErrorMessage(err);
        }
    };

    return [roomReserve, roomReserveApi, errorMessage];
};
