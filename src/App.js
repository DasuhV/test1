import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import { BrowserRouter, Route, Router, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import store from './redux/reduxStore'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/Profile-container";
import HeaderContainer from "./components/Header/Header-container";
import Login from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

//import UsersContainer from "./components/Users/Users-container";
const UsersContainer = React.lazy(() => import('./components/Users/Users-container'));
//import MessagesContainer from "./components/Messages/Messages-container";
const MessagesContainer = React.lazy(() => import('./components/Messages/Messages-container'));


class App extends Component {

	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) return <Preloader />
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<MainMenu />
				<div className="app-wrapper__content">
				<Suspense fallback={<Preloader/>}>
					<Routes>
						<Route path="/profile/:userId?" element={<ProfileContainer />} />
						<Route path="/messages/*" element={<MessagesContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/login" element={<Login />} />
						</Routes>
					</Suspense>
				</div>

			</div>

		);
	}
}
const mapStateToProps = (state) => ({ initialized: state.app.initialized })
function withRouter(Router) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Router
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}
let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}

export default MainApp;