import React from 'react';

const Button = ({ variant = 'main', className = '', children, ...rest }) => {
	const bgColor =
		variant === 'main'
			? 'bg-main text-white'
			: variant === 'hidden'
			? 'bg-transparent text-black'
			: variant === 'danger'
			? 'bg-danger text-white'
			: variant === 'dropdown'
			? 'bg-white text-black'
			: null;
	return (
		<button
			className="btn-primary"
		>
			{children}
		</button>
	);
};

export default Button;