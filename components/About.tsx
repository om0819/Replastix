import { Target, Users, Globe, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize waste management by transforming plastic waste into valuable building materials, reducing environmental impact while creating sustainable solutions.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Empowering communities through job creation, environmental education, and providing affordable, sustainable building materials for local development.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Creating a world where plastic waste becomes a resource, contributing to circular economy principles and sustainable development goals.'
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Ensuring every recycled brick meets the highest standards of durability, safety, and environmental responsibility through rigorous testing and innovation.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary-600">RePLASTIX</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
            We're pioneering the future of sustainable construction by turning plastic waste 
            into high-quality building materials. Our innovative approach addresses two critical 
            challenges: plastic pollution and sustainable construction needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 group-hover:bg-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-700 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose RePLASTIX?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">
                    <strong>Environmental Impact:</strong> Each brick prevents 5-7 plastic bottles from entering landfills or oceans
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">
                    <strong>Superior Quality:</strong> Our bricks are 20% lighter yet 30% stronger than traditional concrete blocks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">
                    <strong>Cost Effective:</strong> Reduce construction costs by up to 15% while supporting sustainability
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">
                    <strong>Local Production:</strong> Supporting local economies through decentralized manufacturing
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
                <p className="text-secondary-600 mb-6">Plastic bottles diverted from waste streams</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <p className="text-sm text-secondary-600">Projects Completed</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">50+</div>
                    <p className="text-sm text-secondary-600">Partner Organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}