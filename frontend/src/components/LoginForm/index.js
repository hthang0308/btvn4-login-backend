import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
export default function LoginForm(props) {
	const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://52.8.172.233:3001';
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		fetch(`${backendUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: data.username,
				password: data.password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					localStorage.setItem('username', data.username);
					window.location.reload();
				} else {
					alert('Sign up failed');
				}
			}
			);
	}
	return (
		<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className="login-form__title">Trang đăng nhập - 19120129</h3>
			<h4 className="login-form__title">Mặc định username: admin, password: admin</h4>
			<input className="login-form__input" name='username' type='text' placeholder="Username" defaultValue="admin" {...register('username', { required: true })} />
			{errors.username && <span className="login-form__error">Vui lòng nhập username</span>}
			<input className="login-form__input" name='password' type='password' placeholder="Password" defaultValue="admin" {...register('password', { required: true })} />
			{errors.password && <span className="login-form__error">Vui lòng nhập password</span>}
			<button className="login-form__button" type='submit'>Đăng nhập</button>
		</form>
	);
}