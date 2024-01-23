'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './styles.css';
export default function FlipCard({ children, img }) {
	function clickHandler(e) {
		e.target.closest('.container').classList.contains('rotate')
			? e.target.closest('.container').classList.remove('rotate')
			: e.target.classList.add('rotate');
		console.log(e.target.closest('.container'));
	}
	return (
		<div className="container" onClick={(e) => clickHandler(e)}>
			<div className="card-wrapper">
				{/* //front */}
				<div className={`flip-card front`}>
						<Image src={img} alt="" className="front-image" width={70} height={70} />
				</div>
				{/* //back */}
				<div className={`flip-card back`}>
					<div className='content'>{children}</div>
				</div>
			</div>
		</div>
	);
}
