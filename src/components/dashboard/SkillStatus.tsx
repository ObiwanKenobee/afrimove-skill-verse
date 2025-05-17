
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillStatus = () => {
  const skills = [
    {
      name: "Web Development",
      progress: 80,
      level: "Advanced",
      color: "from-afrimove-purple to-afrimove-blue"
    },
    {
      name: "Data Analysis",
      progress: 60,
      level: "Intermediate",
      color: "from-afrimove-blue to-cyan-400"
    },
    {
      name: "Digital Marketing",
      progress: 40,
      level: "Beginner",
      color: "from-afrimove-orange to-amber-400"
    }
  ];
  
  return (
    <Card className="border-2 border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Your Skills</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">{skill.name}</p>
                <span className="text-xs bg-afrimove-soft-purple text-afrimove-purple rounded-full px-2 py-1">
                  {skill.level}
                </span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${skill.progress}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color}`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{skill.progress}% Mastery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button className="text-afrimove-purple font-medium text-sm hover:underline w-full text-center">
            View All Skills
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillStatus;
