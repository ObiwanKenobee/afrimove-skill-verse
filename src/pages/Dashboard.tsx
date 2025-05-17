
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TokenCard from '@/components/dashboard/TokenCard';
import SkillStatus from '@/components/dashboard/SkillStatus';
import TravelEligibility from '@/components/dashboard/TravelEligibility';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <TokenCard />
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillStatus />
                <TravelEligibility />
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl border-2 border-gray-100">
            <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "JavaScript Fundamentals",
                  category: "Web Development",
                  tokens: 25,
                  difficulty: "Beginner",
                  background: "bg-gradient-to-r from-afrimove-purple to-afrimove-blue"
                },
                {
                  title: "Data Analysis with Python",
                  category: "Data Science",
                  tokens: 35,
                  difficulty: "Intermediate",
                  background: "bg-gradient-to-r from-afrimove-blue to-cyan-400"
                },
                {
                  title: "Digital Marketing Essentials",
                  category: "Marketing",
                  tokens: 20,
                  difficulty: "Beginner",
                  background: "bg-gradient-to-r from-afrimove-orange to-amber-400"
                }
              ].map((course, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm card-hover"
                >
                  <div className={`h-24 ${course.background}`}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">{course.category}</p>
                        <h3 className="font-bold">{course.title}</h3>
                      </div>
                      <div className="bg-afrimove-soft-purple text-afrimove-purple text-sm font-medium px-2 py-1 rounded-full">
                        +{course.tokens} MOVE
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {course.difficulty}
                      </span>
                      <button className="text-afrimove-purple text-sm font-medium hover:underline">
                        Start Learning →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
