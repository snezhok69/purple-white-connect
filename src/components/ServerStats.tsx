
const ServerStats = () => {
  return (
    <div className="mb-8 bg-[#1A1F2C]/90 p-6 rounded border border-[#CD412B]/30 shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-[#CD412B] mb-6">Статистика сервера</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-[#2D1618]/50 rounded border border-[#CD412B]/20">
          <h3 className="text-gray-400 mb-2">Онлайн</h3>
          <div className="text-2xl font-bold text-white">-</div>
        </div>
        <div className="p-4 bg-[#2D1618]/50 rounded border border-[#CD412B]/20">
          <h3 className="text-gray-400 mb-2">Подключаются</h3>
          <div className="text-2xl font-bold text-white">-</div>
        </div>
        <div className="p-4 bg-[#2D1618]/50 rounded border border-[#CD412B]/20">
          <h3 className="text-gray-400 mb-2">В очереди</h3>
          <div className="text-2xl font-bold text-white">-</div>
        </div>
        <div className="p-4 bg-[#2D1618]/50 rounded border border-[#CD412B]/20">
          <h3 className="text-gray-400 mb-2">Макс. игроков</h3>
          <div className="text-2xl font-bold text-white">-</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        Последнее обновление: <span>-</span>
        <br />
        Следующее обновление через: <span>30с</span>
      </div>
    </div>
  );
};

export default ServerStats;
