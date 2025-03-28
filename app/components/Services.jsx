const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <p className="max-w-3xl text-gray-600 mb-8">
        We provide top-notch cleaning services tailored to your needs. Whether it's home, office, or commercial cleaning, 
        our team ensures a spotless environment using eco-friendly solutions. Our trained professionals guarantee 
        high-quality results with attention to detail.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Home Cleaning</h3>
          <p className="text-gray-500">Comprehensive home cleaning to keep your space fresh and hygienic, including deep cleaning and regular maintenance.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
          <p className="text-gray-500">Professional office cleaning for a productive and clean workspace, ensuring a healthy environment for employees.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
          <p className="text-gray-500">High-quality cleaning services for businesses and commercial spaces, customized to meet specific needs.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Move-in/Move-out Cleaning</h3>
          <p className="text-gray-500">Thorough cleaning to prepare a space for new occupants or ensure a spotless exit from your previous home.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Carpet & Upholstery Cleaning</h3>
          <p className="text-gray-500">Deep cleaning for carpets and furniture to remove dirt, allergens, and stains, leaving them fresh and renewed.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Post-Construction Cleaning</h3>
          <p className="text-gray-500">Detailed cleaning services to clear away dust and debris after renovations or construction projects.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
