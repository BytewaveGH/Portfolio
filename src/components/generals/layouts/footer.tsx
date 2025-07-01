import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20 bottom-0">
      <div className="flex justify-between w-full">
        {/* Nav Section */}
        <aside className="w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-white">Explore</h3>
          <ul className="text-lg flex space-x-4 ">
            <li>
              <a href="#" className="transition duration-300 hover:text-yellow-300 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition duration-300 hover:text-yellow-300 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition duration-300 hover:text-yellow-300 hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="transition duration-300 hover:text-yellow-300 hover:underline">
                Services
              </a>
            </li>
          </ul>
          <div className="text-start text-gray-500 mt-8">{"© 2025 Misbahu Ahmed. All Rights Reserved."}</div>

        </aside>

        {/* Social Media & Newsletter (Right Side) */}
        <aside className="w-1/2 justify-end space-y-2 ">
          <h3 className="text-2xl font-semibold text-white">Find me on</h3>
          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition duration-300 transform hover:scale-110 hover:text-pink-400"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition duration-300 transform hover:scale-110 hover:text-blue-400"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition duration-300 transform hover:scale-110 hover:text-blue-700"
            >
              <Linkedin />
            </a>
          </div>

          {/* Subscribe Form */}
          <h3 className="text-2xl font-semibold text-white">Email</h3>
          <form className="flex w-full max-w-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-pink-600 px-6 py-2 rounded-r-md hover:bg-pink-700 transition duration-300">
              Send 
            </button>
          </form>
        </aside>
      </div>
    </footer>
  )
}

export default Footer
