import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Talk {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with React and Node.js",
    image: "https://picsum.photos/seed/ecommerce/300/200.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "https://picsum.photos/seed/taskapp/300/200.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps",
    image: "https://picsum.photos/seed/weather/300/200.jpg"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Data visualization platform for social media metrics",
    image: "https://picsum.photos/seed/analytics/300/200.jpg"
  }
];

const talks: Talk[] = [
  {
    id: 1,
    title: "Modern Web Development Trends",
    summary: "Exploring the latest technologies and best practices in web development, including frameworks, tools, and methodologies that are shaping the future of the industry.",
    image: "https://picsum.photos/seed/talk1/200/150.jpg"
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    summary: "Architectural patterns and strategies for creating applications that can handle growth and maintain performance under increasing load.",
    image: "https://picsum.photos/seed/talk2/200/150.jpg"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* About Me Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/profile/400/400.jpg" 
                  alt="Profile picture of a professional developer" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About me</h2>
                <p className="text-gray-600 mb-4">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating elegant solutions to complex problems and building applications 
                  that make a real difference in people's lives.
                </p>
                <p className="text-gray-600 mb-4">
                  With over 5 years of experience in the industry, I've worked on various 
                  projects ranging from small business websites to large-scale enterprise applications. 
                  My focus is always on creating clean, maintainable, and performant code.
                </p>
                <p className="text-gray-600 mb-6">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge through 
                  technical writing and speaking engagements.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Talks</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {talks.map((talk) => (
                <div key={talk.id} className="bg-white rounded-lg shadow-md p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={talk.image} 
                      alt={talk.title}
                      className="w-32 h-24 rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{talk.summary}</p>
                    <Link 
                      href={`/talks/${talk.id}`}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Ver charla
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} My Website. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Twitter/X
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                TikTok
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
