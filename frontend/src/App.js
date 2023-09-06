import React from "react";
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Home from './pages/home';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import Login from "./pages/login/Login"
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./components/hooks/useAuthContext";


const App = () => {
  const theme = createTheme();
  const {user} = useAuthContext();
  
  return (
		<>
		<Toaster position='bottom-right' toastOptions={{duration: 5000}} />
		<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route>
						<Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
							<Route path='/home' element={<Home />} />
							<Route
								path="/"
								element={user ? <Home /> : <Navigate to="/login" />}
							/>
							<Route path='/home' element={<Home />} />

						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	  )
  
  
}
export default App;