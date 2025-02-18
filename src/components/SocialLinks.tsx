import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socials = [
    {
      name: "Телеграм",
      url: "https://tg.bochkarust.space",
      className: "bg-[#2D1618] hover:bg-[#CD412B] border border-[#CD412B]/30",
    },
    {
      name: "ВКонтакте",
      url: "https://vk.bochkarust.space",
      className: "bg-[#2D1618] hover:bg-[#CD412B] border border-[#CD412B]/30",
    },
    {
      name: "Дискорд",
      url: "https://ds.bochkarust.space",
      className: "bg-[#2D1618] hover:bg-[#CD412B] border border-[#CD412B]/30",
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
            className={`w-full ${social.className} text-gray-300 transition-all hover:scale-105 hover:text-white`}
          >
            {social.name}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;