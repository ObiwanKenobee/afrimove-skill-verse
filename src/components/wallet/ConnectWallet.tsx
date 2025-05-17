
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  
  const connectWallet = async () => {
    // Simulating wallet connection with a delay
    setIsConnecting(true);
    
    try {
      // In a real app, this would be replaced with actual wallet connection logic
      // using something like wagmi, ethers.js or web3modal
      setTimeout(() => {
        const mockAddress = '0x' + Math.random().toString(16).slice(2, 12);
        setAddress(mockAddress);
        setIsConnected(true);
        setIsConnecting(false);
      }, 1000);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
  };
  
  if (isConnected) {
    return (
      <div className="flex items-center space-x-2">
        <div className="bg-afrimove-soft-purple text-afrimove-purple font-medium rounded-full px-3 py-1 text-sm">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={disconnectWallet}
          className="text-gray-500 hover:text-gray-700"
        >
          Disconnect
        </Button>
      </div>
    );
  }
  
  return (
    <Button 
      onClick={connectWallet} 
      disabled={isConnecting}
      className="bg-afrimove-purple hover:bg-afrimove-light-purple text-white"
    >
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};

export default ConnectWallet;
