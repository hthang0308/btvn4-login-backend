import React from 'react';
import './index.scss';
export default function SignUpForm(props) {
	const onSubmit = (e) => {
		e.preventDefault()
		fetch('http://localhost:3001/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					alert('Sign up successfully');
				} else {
					alert('Sign up failed');
				}
			}
			);
	};
	return (
		<form className='signup-form' onSubmit={onSubmit}>
			<h3 className="signup-form__title">Sign Up</h3>
			<input className="signup-form__input" name='username' type='text' placeholder="Username" />
			<input className="signup-form__input" name='password' type='password' placeholder="Password" />
			<button className="signup-form__button" type='submit'> Signup </button>
		</form>
	);
}