import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAcount';
import Home from './pages/Home';
import Init from './pages/Init';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Task from './pages/Tasks';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import CreateList from './pages/CreateList';
import UpdateList from './pages/UpdateList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Init />} exact />
        <Route path="/createaccount" element={<CreateAccount />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/createlist" element={<CreateList />} exact />
        <Route path="/updatelist/:id" element={<UpdateList />} exact />
        <Route path="/tasks/:id" element={<Task />} exact />
        <Route path="/createtask/:id" element={<CreateTask />} exact />
        <Route path="/updatetask/:id" element={<UpdateTask />} exact />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
