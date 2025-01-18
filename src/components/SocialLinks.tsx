import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socials = [
    {
      name: "Телеграм",
      url: "https://tg.bochkarust.space",
      className: "bg-[#229ED9] hover:bg-[#1a7aa8]",
    },
    {
      name: "ВКонтакте",
      url: "https://vk.bochkarust.space",
      className: "bg-[#0077FF] hover:bg-[#0066cc]",
    },
    {
      name: "Дискорд",
      url: "https://ds.bochkarust.space",
      className: "bg-[#5865F2] hover:bg-[#4752c4]",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            className={`w-full ${social.className} text-white transition-transform hover:scale-105`}
          >
            {social.name}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;