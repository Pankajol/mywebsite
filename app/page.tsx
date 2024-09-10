import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12 md:py-20 px-4 text-center">
          <div className="container mx-auto">
            <Image
              src="https://pbs.twimg.com/profile_images/1515322078547038209/7rbwlF8F_400x400.jpg"
              alt="Pankaj Yadav"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-blue-600 bg-slate-700"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Pankaj Yadav
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-4">
              Full Stack Developer | Software Engineering
            </p>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
              I’m a passionate web developer specializing in building and designing modern web applications using the latest technologies. 
              I have experience in front-end and back-end development.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://github.com/Pankajol" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 hover:text-black text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/pankaj-darasingh-yadav-058678259/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 hover:text-blue-800 text-3xl" />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-600 text-3xl" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 md:py-20 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">JavaScript</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">React.js</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Node.js</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">NextJs</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">AWS</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Python</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Tailwind CSS</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">MongoDB</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 md:py-20 bg-gray-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg"
                  alt="Project 1"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">My YouTube ShowCase</h3>
                <p className="text-gray-600">"Our platform allows users to easily upload and showcase their videos and images. Whether you're sharing memories, tutorials, or creative content, our app provides a simple and user-friendly interface to upload, manage, and display media. Perfect for creators looking to share their visual stories with the world."</p>
                <Link href="/home" className='text-blue-400 '>See Here</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHx8fDA%3D"
                  alt="Project 2"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">Write Notes</h3>
                <p className="text-gray-600">This app combines the simplicity of note-taking with powerful media features, allowing users to upload videos and images directly within their notes. Organize thoughts, ideas, and media in one place, making it easy to track projects or share content. Perfect for creators, students, and professionals alike!</p>
                <Link href="/home" className='text-blue-400'>See Here</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid"
                  alt="Project 3"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">See Websites</h3>
                <p className="text-gray-600">"As a web developer, I specialize in building dynamic, responsive websites and applications that offer seamless user experiences. My expertise spans front-end and back-end development, utilizing modern technologies like HTML, CSS, JavaScript, and MERN stack. I focus on creating efficient, scalable solutions tailored to meet the needs of businesses and users alike."</p>
                <a href="https://taroncom-pankaj-yadavs-projects-906bd380.vercel.app/" className='text-blue-400'>See Here</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    </div>
  );
}
