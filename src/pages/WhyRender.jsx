import Navbar from '../components/Navbar';

export default function WhyRender() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-20">
        <h1 className="text-4xl font-bold text-center mb-12">Why Choose RenderNow?</h1>
        
        {/* Video Section */}
        <div className="aspect-w-16 aspect-h-9 mb-12">
          <iframe
            className="w-full h-[500px] rounded-xl"
            src="https://youtu.be/9JNqn3ex1MM"
            title="Why Choose renderNow"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Maximize Crawl Budgets</h2>
            <p className="text-gray-600 dark:text-gray-300">
            Manage your own crawl budget before Google does. 
            RenderNow makes it possible to optimize crawl budgets so that JavaScript doesn’t eat it up on slow dynamic websites. 
            Our prerendering solution will seamlessly render your content in static HTML so that Google can easily see it, crawl it, and index it super fast, without errors. 
            Now, you can use your crawl budget wisely. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Better Indexing</h2>
            <p className="text-gray-600 dark:text-gray-300">
            Organic search performance hinges on your technical SEO efforts. 
            For your JavaScript website to stand a chance against standard HTML sites, you need to get indexed faster. 
            And the preferred method for doing so is dynamic rendering. 
            RenderNow will ensure your content is indexed for SERPs, every time. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Simple Implementation</h2>
            <p className="text-gray-600 dark:text-gray-300">
            JavaScript SEO workarounds like SSR are labor-intensive, and complicated to master—but that’s not how RenderNow works. 
            Our solution is compatible with most programming languages,
            so you can continue rolling like clockwork without interruptions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}