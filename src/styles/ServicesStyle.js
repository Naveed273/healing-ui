import styled from 'styled-components';

const ServicesStyle = styled.div`
    padding: 2rem;
    background: white;
    border-radius: 1.5rem;
    border: 1px solid #f3f3f3;
    max-width: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: stretch;
        flex-direction: column;
    }
    h3{
        font-size: 20px;
        font-weight: 500;
        padding-bottom: 1rem;
    }
    .label-holder{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    li{
        color: rgb(78,79,79);
        width: 100%;
       
    }
    span{
        color: #040404;
        :before {
            content: '$';
            font-size: 0.7rem;
            vertical-align: top;
        }
    }
    button{
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.8rem;
        background-color: #3DC2E8;
        border: none;
        &:hover{
            background-color: #3DC2E9;
        }
    }
    h4{
        
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
    .line-up{
        border-top: 1px solid #E5E6E6;
        padding: 1rem 0 1rem 0;
    }
`;

export default ServicesStyle;