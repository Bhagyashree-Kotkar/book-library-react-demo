import React from 'react';
import './App.css';
import UserContext from './Context/UserContext';
import { RouterProvider } from 'react-router';
import newCustomeRoute from './newCustomeRoute';

function App() {
  return (
    <div>
      <div className='main-style'>

      {/* <Headers></Headers> */}
      <UserContext.Provider value={{newCustomeRoute}}>
        <RouterProvider router={newCustomeRoute}>
        </RouterProvider>
      </UserContext.Provider>

      {/*
        <BrowserRouter>
        <Headers></Headers>
          <Routes>
            <Route exact path='/menuListAccount' element={<MenuListAccount></MenuListAccount>}></Route>
            <Route exact path='/home' element={<Home></Home>}></Route>
            <Route exact path='/about' element={<About></About>}></Route>
            <Route exact path='/collections' element={<BooksCollections></BooksCollections>}></Route>
            <Route exact path='/donate' element={<Donate></Donate>}></Route>
            <Route exact path='/login' element={<Login></Login>}></Route>
            <Route exact path='/register' element={<Register></Register>}></Route>
            <Route exact path='/forgotPassword' element={<ForgetPassword></ForgetPassword>}></Route>
            <Route exact path='/userDashboard' element={<UserDashBoard></UserDashBoard>}></Route>
            <Route exact path='/adminDashboard' element={<AdminDashBoard></AdminDashBoard>}></Route>
          </Routes>
  </BrowserRouter> */}
      </div>
      <div>
        {/*<HomePage></HomePage>*/}
      </div>
    </div>
  );
}

export default App;
