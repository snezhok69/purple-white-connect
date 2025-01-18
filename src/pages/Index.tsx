import ServerInfo from "@/components/ServerInfo";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-[#1A1F2C]">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D1618]/50 via-[#1A1F2C]/70 to-black/80 z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/5ed568d8-999c-4e03-a7de-81de5c1ec2f4.png')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Server name with Rust-style typography */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider font-['Rust']">
            BOCHKA
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#CD412B] mb-8 tracking-wide">
            RUST
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и начните играть прямо сейчас!
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <ServerInfo />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#CD412B] mb-8 text-center">
            Наши Социальные Сети
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Index;