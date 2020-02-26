import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Facelogo from './face-logo.jpg';
const Logo = () => {

	return(
	<div className="ma2 pa4">
		<Tilt className="Tilt" options={{ max : 70}} style={{ height: 150, width: 150 }} >
	 		<div className="Tilt-inner shadow-5 logo">
	 			<img src={Facelogo} alt="logo"/>
	 		</div>
		</Tilt>
	</div>
	);
}
export default Logo;