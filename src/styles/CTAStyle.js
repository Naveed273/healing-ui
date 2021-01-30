import styled from 'styled-components';
import CTAimg from '../static/CTAimg2.png'

const CTAStyle = styled.div`
    max-height: 100vh;
    padding: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${CTAimg});
    background-position: center center;
    background-size: cover;

    h4{
        font-size: 60px;
        font-weight: 300;
        color: white;
        margin: 3rem 0 3rem 0;
    }

`;

export default CTAStyle;