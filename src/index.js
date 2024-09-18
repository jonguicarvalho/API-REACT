import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAcount';
import Home from './pages/Home';
import Init from './pages/Init';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Task from './pages/Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Init />} exact />
        <Route path="/createaccount" element={<CreateAccount />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/tasks/:id" element={<Task />} exact />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
