//navigation bar here
import { Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Meme from './components/Meme';
import MainNavigation from './components/MainNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
export default function App() {
	const queryClient = new QueryClient()
	const user = useMemo(() => {
		const username = localStorage.getItem('username') || null;
		return username;
	}, [])
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<MainNavigation />
					{user ?
						<Routes>
							<Route path="/" element={<h2 className='title'>Đây là trang chủ</h2>} />
							<Route path="/meme-page" element={<Meme />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
						:
						<Routes>
							<Route path="/login" element={<LoginForm />} />
							<Route path="*" element={<Navigate to="/login" />} />
						</Routes>
					}
				</BrowserRouter>
			</QueryClientProvider>
		</Suspense>
	);
}