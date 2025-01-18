import ServerInfo from "@/components/ServerInfo";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-[#1A1F2C]">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rustPurple/10 to-black/50 z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/5ed568d8-999c-4e03-a7de-81de5c1ec2f4.png')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Server name with dramatic styling */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            BOCHKA
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-rustPurple mb-8 tracking-wide">
            RUST
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и начните играть прямо сейчас!
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16 backdrop-blur-sm bg-black/30 p-6 rounded-lg">
          <ServerInfo />
        </div>

        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-black/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Наши Социальные Сети
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Index;