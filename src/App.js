import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './Blogdetails';
import Notfound from './Notfound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/test" element={(
              <div>
                <h2>Test</h2>
                <p>Yes it is a test</p>
              </div>
            )} />
            <Route path="/redirect" element={<Navigate to="/" />} />
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
