import React from 'react';
import './index.scss';
export default function SignUpForm(props) {
	const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://52.8.172.233:3001';
	const onSubmit = (e) => {
		e.preventDefault()
		fetch(`${backendUrl}/sign-up`, {
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
					alert(data.message);
				} else {
					alert('Sign up failed');
				}
			}
			);
	};
	return (
		<form className='signup-form' onSubmit={onSubmit}>
			<h3 className="signup-form__title">Sign Up - 19120129</h3>
			<input className="signup-form__input" name='username' type='text' placeholder="Username" />
			<input className="signup-form__input" name='password' type='password' placeholder="Password" />
			<button className="signup-form__button" type='submit'> Signup </button>
		</form>
	);
}