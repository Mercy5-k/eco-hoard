import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-ngo-green mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="lg" 
            className="group"
            onClick={() => window.location.href = "/"}
          >
            <Home className="w-5 h-5" />
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
