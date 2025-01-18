import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ServerInfo = () => {
  const serverIP = "connect play1.bochkarust.space"; // Updated server IP

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast("Server IP copied to clipboard!");
  };

  return (
    <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-rustPurple-light">
      <h2 className="text-2xl font-bold text-rustPurple-dark mb-4">Server IP</h2>
      <div className="flex items-center justify-center space-x-2">
        <code className="bg-white/50 px-4 py-2 rounded text-rustPurple-dark font-mono">
          {serverIP}
        </code>
        <Button
          onClick={copyIP}
          variant="outline"
          size="icon"
          className="hover:bg-rustPurple hover:text-white transition-colors"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServerInfo;