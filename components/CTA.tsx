import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-16 text-center text-white mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Build a <span className="text-primary-200">Sustainable Future?</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto text-balance">
            Join thousands of builders, architects, and environmentalists who are choosing 
            RePLASTIX bricks for their sustainable construction projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300">
            <div className="bg-primary-100 group-hover:bg-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Mail className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-700 transition-colors duration-300">
              Email Us
            </h3>
            <p className="text-secondary-600 mb-4">
              Get in touch for project inquiries and partnerships
            </p>
            <a 
              href="mailto:info@replastix.com" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              info@replastix.com
            </a>
          </div>

          <div className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300">
            <div className="bg-primary-100 group-hover:bg-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Phone className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-700 transition-colors duration-300">
              Call Us
            </h3>
            <p className="text-secondary-600 mb-4">
              Speak with our sustainability experts
            </p>
            <a 
              href="tel:+1-555-PLASTIX" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              +1 (555) PLASTIX
            </a>
          </div>

          <div className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300">
            <div className="bg-primary-100 group-hover:bg-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <MapPin className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-700 transition-colors duration-300">
              Visit Us
            </h3>
            <p className="text-secondary-600 mb-4">
              Tour our sustainable manufacturing facility
            </p>
            <address className="text-primary-600 not-italic">
              123 Green Innovation Blvd<br />
              Sustainability City, SC 12345
            </address>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated on Sustainability
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Get the latest news on sustainable construction, recycling innovations, 
              and environmental impact stories delivered to your inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-secondary-500 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}