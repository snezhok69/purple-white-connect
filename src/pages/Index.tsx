import ServerInfo from "@/components/ServerInfo";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rustPurple-light/20 to-rustPurple/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-rustPurple-dark mb-4 animate-float">
            Welcome to Our Rust Server
          </h1>
          <p className="text-lg text-rustPurple-dark/80 mb-8">
            Join our community and start playing today!
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <ServerInfo />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-rustPurple-dark mb-8 text-center">
            Connect With Us
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Index;