import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="text-4xl font-inter font-bold text-charcoal mb-4">404 - Page Not Found</h1>
        <p className="text-lg font-open-sans text-charcoal/70 mb-8">
          Redirecting to home page...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
