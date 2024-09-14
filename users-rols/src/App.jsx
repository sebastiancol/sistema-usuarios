import { Route, Routes } from 'react-router-dom';
import './App.css'
import {Login} from './components/Login';
import {Dashboard} from './components/Dashboard';
import { UserCreate } from './components/UserCreate';
import { UserGet } from './components/UserGet';

export const  App = () => {

  return (
    <>
      <Routes>
        <Route path='/app/login' element={<Login/>}></Route>
        <Route path='/app/dashboard' element={<Dashboard/>}></Route>
        <Route path='/app/usercreate' element={<UserCreate/>}></Route>
        <Route path='/app/userget' element={<UserGet/>}></Route>
        <Route path='/app/cancel' ></Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  )
}
