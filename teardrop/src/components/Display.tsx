import React, { useEffect, useState } from "react";
import "particles.js";
import {
	ConnectingLineOptions,
	ControlFormInputs,
	OnHoverBehaviour,
} from "../types.ts";
import { db, onValue, ref } from "../firebase";

const Display = () => {
	const [formData, setFormData] = useState<ControlFormInputs | null>(null);

	useEffect(() => {
		// a reference to the location in the Firebase db where we find /display
		const displayRef = ref(db, "display");

		// listen for real-time changes between the form and display via Firebase
		const unsubscribe = onValue(displayRef, (current) => {
			// get info from whatever was entered into the form on change
			const data = current.val();

			if (data) {
				setFormData(data);
			}
		});

		// clean up listener once we're done rendering
		return () => unsubscribe();
	}, []);

	// set up json config to be displayed in the component
	useEffect(() => {
		// ensure formData isn't null
		if (!formData) return;

		const particlesConfig = {
			particles: {
				number: {
					value: 150,
					density: {
						enable: true,
						value_area: formData.density || 900,
					},
				},
				color: {
					value: formData.color || "#FFFFFF",
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000",
					},
				},
				opacity: {
					value: 0.85,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false,
					},
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: false,
						speed: 10,
						size_min: 0.1,
						sync: false,
					},
				},
				line_linked: {
					enable:
						formData.connectingLine === ConnectingLineOptions.Others
							? true
							: false,
					distance: 250,
					color: formData.color || "#FFFFFF",
					opacity: formData.opacity || 0.6,
					width: 1,
				},
				move: {
					enable: true,
					speed: formData.speed || 6,
					direction: "none",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				detect_on: "window",
				events: {
					onhover: {
						enable: formData.enableHover,
						mode:
							formData.hover === OnHoverBehaviour.Grab
								? "grab"
								: formData.hover === OnHoverBehaviour.Repulse
								? "repulse"
								: "",
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 140,
						line_linked: {
							opacity: 1,
						},
					},
					repulse: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
		};

		// window.particleJS is an array, check if it exists and there's at least one element
		if (window.particlesDOM && window.particlesDOM.length > 0) {
			// if there's a stale instance aka it exists, destroy it before loading a new one with the new changes
			window.particlesDOM[0]?.pJS.fn.vendors.destroyJS();
			window.particlesDOM = [];
		}

		window.particlesJS("particles-js", particlesConfig);
	}, [
		formData?.date,
		formData?.color,
		formData?.speed,
		formData?.connectingLine,
		formData?.hover,
		formData?.enableHover,
		formData?.opacity,
		formData?.density,
	]);

	return (
		<div className='double-border display-container d-flex flex-column align-items-center p-4 m-1 m-sm-5'>
			<div
				id='particles-js'
				className='particles-container'
				style={{
					backgroundColor: formData?.date,
				}}
			></div>
		</div>
	);
};

export default Display;
