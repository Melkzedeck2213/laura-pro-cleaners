const Services = () => {
    return (
      <section id="services" className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="max-w-2xl text-gray-600 mb-8">
          We provide top-notch cleaning services tailored to your needs. Whether it's home, office, or commercial cleaning, 
          our team ensures a spotless environment using eco-friendly solutions.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Home Cleaning</h3>
            <p className="text-gray-500">Comprehensive home cleaning to keep your space fresh and hygienic.</p>
          </div>
  
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
            <p className="text-gray-500">Professional office cleaning for a productive and clean workspace.</p>
          </div>
  
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
            <p className="text-gray-500">High-quality cleaning services for businesses and commercial spaces.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  