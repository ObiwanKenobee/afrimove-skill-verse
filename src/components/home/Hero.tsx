
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-afrimove-soft-purple/50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learn, Earn, and <span className="gradient-text">Travel Across Africa</span>
            </h1>
            <p className="text-xl text-gray-600">
              Build valuable skills, earn tokens, and unlock mobility opportunities across the African continent.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-afrimove-purple hover:bg-afrimove-light-purple text-lg py-6 px-8">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-afrimove-purple text-afrimove-purple hover:bg-afrimove-soft-purple text-lg py-6 px-8"
                asChild
              >
                <a href="#learn-more">Learn More</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs">👤</span>
                  </div>
                ))}
              </div>
              <p><span className="font-medium">500+</span> learners already enrolled</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-afrimove-purple to-afrimove-blue rounded-3xl p-6 shadow-xl">
              <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-white font-semibold">AfriMove Pass</p>
                      <h3 className="text-white text-2xl font-bold">Digital Skills</h3>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <p className="text-white font-medium">Basic</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-white/30 rounded-full w-full"></div>
                    <div className="h-4 bg-white/30 rounded-full w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded-full w-1/2"></div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-white text-sm mb-2">Progress</p>
                      <div className="w-full bg-white/30 h-3 rounded-full">
                        <div className="bg-white h-3 rounded-full w-3/5"></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-white/80 text-xs">3/5 Complete</p>
                        <p className="text-white/80 text-xs">60%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-afrimove-purple font-bold text-xl">
                        AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-afrimove-orange rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
              <div className="text-white text-center">
                <p className="font-bold text-2xl">120</p>
                <p className="font-medium text-sm">Tokens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute w-64 h-64 bg-afrimove-purple/20 rounded-full blur-3xl -top-32 -right-32 z-0"></div>
      <div className="absolute w-96 h-96 bg-afrimove-blue/10 rounded-full blur-3xl -bottom-48 -left-48 z-0"></div>
    </div>
  );
};

export default Hero;
