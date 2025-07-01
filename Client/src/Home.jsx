import {useNavigate} from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome to Home Page</h2>
                <p className="text-gray-600 text-center mb-8">This is the home page of your application.</p>
                
                <div className="space-y-4">
                    <button
                        onClick={handleLoginClick}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                    
                    <button
                        onClick={handleSignUpClick}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}