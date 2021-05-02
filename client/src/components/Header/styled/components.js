import styled, { keyframes } from 'styled-components';
import bg from '../assets/sectionBg.png';
import spark1 from '../assets/spark1.png';
import spark2 from '../assets/spark2.png';
import spark3 from '../assets/spark3.png';
import spark4 from '../assets/spark4.png';

export const TopSection = styled.section`
    width: 100%;
	background: url(${bg}) no-repeat;
	background-size: cover;
	margin-top: -10px;
`;

const sparking5 = keyframes`
	0% {
		bottom: -180px;
		transform: scale(.6);
		opacity: 1
	}
	25% {
		bottom: -120px;
		transform: scale(.7);
		opacity: 1
	}
	50% {
		bottom: -60px;
		transform: scale(.8);
		opacity: 1
	}
	75% {
		bottom: 0;
		transform: scale(.9);
		opacity: .5
	}
	to {
		bottom: 60px;
		transform: scale(1);
		opacity: 0
	}
`;

const sparking3 = keyframes`
		0% {
		bottom: -140px;
		transform: scale(.6);
		opacity: 1
	}
	25% {
		bottom: -80px;
		transform: scale(.7);
		opacity: 1
	}
	50% {
		bottom: -20px;
		transform: scale(.8);
		opacity: 1
	}
	75% {
		bottom: 40px;
		transform: scale(.9);
		opacity: .5
	}
	to {
		bottom: 100px;
		transform: scale(1);
		opacity: 0
	}
`;

const sparking1 = keyframes`
		0% {
		bottom: -320px;
		transform: scale(.6);
		opacity: 1
	}
	25% {
		bottom: -240px;
		transform: scale(.7);
		opacity: 1
	}
	50% {
		bottom: -160px;
		transform: scale(.8);
		opacity: 1
	}
	75% {
		bottom: -80px;
		transform: scale(.9);
		opacity: .5
	}
	to {
		bottom: 0;
		transform: scale(1);
		opacity: 0
	}
`;

export const Sparks = styled.div`
	position: absolute;
    width: 1200px;
    left: 50%;
    margin-left: -600px;
    bottom: 320px;
    z-index: 10;
`;

export const Spark1 = styled.div`
	background: url(${spark1}) no-repeat;
    position: absolute;
    width: 764px;
    height: 313px;
    right: 0;
    bottom: -120px;
    transform: scale(.6);
    animation: ${sparking1} 4s linear infinite;
    animation-delay: 1s;
`;

export const Spark2 = styled.div`
	background: url(${spark2}) no-repeat;
	position: absolute;
    width: 179px;
    height: 335px;
    right: 230px;
    bottom: -320px;
    transform: scale(.6);
    animation: ${sparking1} 4s linear infinite;
    animation-delay: 2s;
`;

export const Spark3 = styled.div`
	background: url(${spark3}) no-repeat;
	position: absolute;
    width: 128px;
    height: 165px;
    right: 280px;
    bottom: -140px;
    transform: scale(.6);
    animation: ${sparking3} 4s linear infinite;
    animation-delay: 2s;
`;

export const Spark4 = styled.div`
	background: url(${spark4}) no-repeat;
	position: absolute;
    width: 794px;
    height: 176px;
    right: 0;
    bottom: -180px;
    transform: scale(.6);
    animation: ${sparking5} 4s linear infinite;
`;

export const Spark5 = styled.div`
	background: url(${spark4}) no-repeat;
    width: 794px;
    height: 176px;
    right: 40px;
    bottom: -180px;
    transform: scale(.6);
    animation: ${sparking5} 4s linear infinite;
	animation-delay: 2s;
`;
