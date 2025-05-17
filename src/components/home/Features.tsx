
import { Book, Award, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Book className="w-8 h-8 text-afrimove-purple" />,
      title: "Learn Digital Skills",
      description: "Access high-quality courses designed to prepare you for the global digital economy and build in-demand skills."
    },
    {
      icon: <Award className="w-8 h-8 text-afrimove-orange" />,
      title: "Earn MOVE Tokens",
      description: "Complete courses and assessments to earn MOVE tokens, which serve as proof of your skills and qualifications."
    },
    {
      icon: <Globe className="w-8 h-8 text-afrimove-blue" />,
      title: "Access Travel Opportunities",
      description: "Use your earned tokens to unlock travel, work, and networking opportunities across the African continent."
    }
  ];
  
  return (
    <section id="learn-more" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Future of <span className="gradient-text">Skills and Mobility</span> in Africa
          </h2>
          <p className="text-gray-600 text-lg">
            AfriMove connects learning with opportunities through a tokenized platform that rewards skill development and enables greater mobility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
            >
              <div className="mb-6 bg-afrimove-soft-purple/50 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-afrimove-purple to-afrimove-blue rounded-3xl p-1">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</p>
                <p className="text-gray-600">Enrolled Learners</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">20</p>
                <p className="text-gray-600">Course Modules</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">5</p>
                <p className="text-gray-600">Partner Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
