import {useNavigate} from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    navigate('/home');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Home Page</h2>
        <p className="text-gray-600 text-center">This is the home page of your application.</p>
      </div>
    </div>
  );
}