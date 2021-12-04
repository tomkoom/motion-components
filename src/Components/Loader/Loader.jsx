import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		trasition: {
			x: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 0.5,
				type: "spring",
				bounce: 0.25,
			},
			y: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 0.25,
				ease: "easeOut",
				type: "spring",
				bounce: 0.25,
			},
		},
	},
};

const Loader = () => {
	return (
		<>
			<motion.div
				className="loader"
				animate={{ x: [-20, 20], y: [0, -20] }}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: "reverse",
						duration: 0.5,
					},
					y: {
						repeat: Infinity,
						repeatType: "reverse",
						duration: 0.25,
						ease: "easeOut",
					},
				}}
			></motion.div>
		</>
	);
};

export default Loader;
