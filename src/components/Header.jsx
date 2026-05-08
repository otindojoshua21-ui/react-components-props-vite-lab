function Header({ name }) {
  return (
    <header className="bg-blue-700 text-white py-6 px-8 shadow-md">
      <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
    </header>
  );
}

export default Header;