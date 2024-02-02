
export const Footer = () => {
  return (
    <div className="w-full py-10 px-4 bg-black mt-auto">
      <div className="w-full max-w-[1200px] min-h-[72px] mx-auto flex items-start justify-between text-white">
        {/* Logo & description */}
        <section className="w-full">
          <h1 className="font-bold tracking-[-0.5px]">Urbaneer</h1>
          <p className="max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ducimus.</p>
        </section>
        {/* Sections */}
        <section className="w-full flex justify-between">
          <ul>
            <li className="text-green font-semibold">Men</li>
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
          <ul>
            <li className="text-green font-semibold">Women</li>
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
          <ul>
            <li className="text-green font-semibold">Kids</li>
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
