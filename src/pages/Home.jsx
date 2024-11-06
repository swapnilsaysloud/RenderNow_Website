import { Zap, Cpu, Gauge, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import swapnilImage from '../assets/Swapnil_new.jpg';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: 'Bigger Crawl Budget',
    description: 'Crawl often without wasting budget'
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: 'Faster Indexation',
    description: 'Get your site indexed faster to rank higher'
  },
  {
    icon: <Gauge className="w-8 h-8 text-green-500" />,
    title: 'No more missing content',
    description: `Serve dynamic content that's ready to go!`
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            RenderNow
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your Javascript websites pre-rendered with our solution. 
            Optimize performance, SEO, and user experience in one powerful tool.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/swapnilsaysloud/RenderNow" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/why-render"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Developer</h2>
          <div className="flex flex-col items-center">
            <img 
              src={swapnilImage}
              alt="Swapnil"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Swapnil</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-4">
            Crafting efficient, impactful software solutions
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/swapnil-saraswat-a66024255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}