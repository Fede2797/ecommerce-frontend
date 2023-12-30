
export const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1200px] min-h-[72px] mx-auto flex items-center justify-between">
        {/* Left side navbar */}
        <div className="p-4 font-bold">
          Urbaneer
        </div>
        {/* Middle navbar */}
        <ul className="w-full max-w-[320px] p-4 gap-2 flex justify-between">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
        </ul>
        {/* Right side navbar */}
        <div className="p-4">
          Right
        </div>
      </div>
    </div>
  )
}
