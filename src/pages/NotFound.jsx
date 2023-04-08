import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title text-6xl mb-4'>404</h1>
          <h2 className='subtitle text-4xl mb-5'>Page not found</h2>
          <Link
            to='/'
            className='btn btn-primary'
          >
            <FaHome />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
