import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ServerInfo = () => {
  const serverIP = "connect play1.bochkarust.space";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast("IP сервера скопирован в буфер обмена!");
  };

  return (
    <div className="bg-[#1A1F2C]/90 p-6 rounded border border-[#CD412B]/30 shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-[#CD412B] mb-4">IP Сервера</h2>
      <div className="flex items-center justify-center space-x-2">
        <code className="bg-[#2D1618]/50 px-4 py-2 rounded text-gray-300 font-mono">
          {serverIP}
        </code>
        <Button
          onClick={copyIP}
          variant="outline"
          size="icon"
          className="border-[#CD412B] hover:bg-[#CD412B] hover:text-white transition-colors"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServerInfo;