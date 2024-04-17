function BotFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>© {year} Fragrance</p>
    </footer>
  );
}

export default BotFooter;