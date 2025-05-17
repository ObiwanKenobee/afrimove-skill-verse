
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Globe, ArrowRight } from "lucide-react";

const TravelEligibility = () => {
  const countries = [
    {
      name: "Kenya",
      accessible: true,
      tokenCost: 50,
    },
    {
      name: "Rwanda",
      accessible: true,
      tokenCost: 75,
    },
    {
      name: "Ghana",
      accessible: false,
      tokenCost: 100,
    },
    {
      name: "Nigeria",
      accessible: false,
      tokenCost: 150,
    },
  ];
  
  return (
    <Card className="border-2 border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Travel Eligibility</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Eligible Countries</p>
            <p className="text-2xl font-bold gradient-text">2 of 4</p>
          </div>
          <div className="bg-gray-100 rounded-full p-3">
            <Globe className="h-6 w-6 text-afrimove-purple" />
          </div>
        </div>
        
        <div className="space-y-4">
          {countries.map((country, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${country.accessible ? 'bg-green-100' : 'bg-gray-200'}`}>
                  {country.accessible ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <span className="text-xs font-medium text-gray-500">{country.tokenCost}</span>
                  )}
                </div>
                <span className="font-medium">{country.name}</span>
              </div>
              <Button
                variant={country.accessible ? "default" : "outline"}
                size="sm"
                className={country.accessible ? "bg-afrimove-purple hover:bg-afrimove-light-purple" : "text-gray-500"}
              >
                {country.accessible ? "Apply" : "Unlock"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2 border-afrimove-purple text-afrimove-purple hover:bg-afrimove-soft-purple">
            <span>Explore All Opportunities</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelEligibility;
