import {HashRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './menu';
import { HomePage } from './home_page';
import { BlogPage } from './blog_page';
import { ProfilePage } from './profile_page';
import { BlogPost } from './blog_post';

function App() {
  return (
    <>
      <HashRouter>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="/blog" element={<BlogPage/>} >
              <Route path=":slug" element={<BlogPost/>} />
            </Route>

            <Route path="/profile" element={<ProfilePage/>} />

            <Route path='*' element={<p>Not found</p>}/>
          </Routes>

      </HashRouter>
    </>
  );
}

export default App;
