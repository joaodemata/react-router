import {HashRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider, AuthRoute } from './auth'
import { Menu } from './menu';
import { HomePage } from './home_page';
import { BlogPage } from './blog_page';
import { ProfilePage } from './profile_page';
import { BlogPost } from './blog_post';
import { LoginPage } from './login_page';
import { LogoutPage } from './logout_page';

function App() {
  return (
    <>
        <HashRouter>
          <AuthProvider>
              <Menu />

              <Routes>
                <Route path="/" element={<HomePage/>} />

                <Route path="/blog" element={<BlogPage/>} >
                  <Route path=":slug" element={<BlogPost/>} />
                </Route>

                <Route path='/login' element={<LoginPage/>}/>
                <Route 
                  path="/logout" 
                  element={
                    <AuthRoute>
                      <LogoutPage/>
                    </AuthRoute>
                  } 
                />
                <Route 
                  path="/profile/:username" 
                  element={
                    <AuthRoute>
                      <ProfilePage/>
                    </AuthRoute>
                  } 
                />

                <Route path='*' element={<p>Not found</p>}/>
              </Routes>

            </AuthProvider>
        </HashRouter>
    </>
  );
}

export default App;
