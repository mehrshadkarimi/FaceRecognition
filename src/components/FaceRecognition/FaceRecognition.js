import React from 'react';
import './FaceRecognition.css';


const FaceRecognition =({imageUrl,box}) => {
	return(
		<div className="center pa2">
		   <div className='absolute shadow-5 mt2'>
				 <img alt=''  id='inputimage' src={imageUrl} width='500px' heigh='auto'/>
				 <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		   </div>
		</div>
	);
}

export default FaceRecognition;