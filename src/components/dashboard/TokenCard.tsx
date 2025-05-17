
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Bell } from "lucide-react";

const TokenCard = () => {
  return (
    <Card className="overflow-hidden border-2 border-afrimove-purple/20">
      <CardHeader className="bg-gradient-to-r from-afrimove-purple to-afrimove-blue text-white">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">MOVE Tokens</CardTitle>
          <Bell className="h-5 w-5 text-white/80" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-500">Your Balance</p>
            <p className="text-3xl font-bold gradient-text">120 MOVE</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
            <div>
              <p className="font-medium">Last earned</p>
              <p className="text-sm text-gray-500">Today, 9:45 AM</p>
            </div>
            <p className="text-afrimove-purple font-medium">+10 MOVE</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
            <div>
              <p className="font-medium">Course completion</p>
              <p className="text-sm text-gray-500">May 15, 2025</p>
            </div>
            <p className="text-afrimove-purple font-medium">+25 MOVE</p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <Button variant="outline" className="w-[48%] border-afrimove-purple text-afrimove-purple hover:bg-afrimove-soft-purple">
            Send
          </Button>
          <Button className="w-[48%] bg-afrimove-purple hover:bg-afrimove-light-purple">
            Redeem
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenCard;
