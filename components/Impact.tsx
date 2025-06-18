import { TreePine, Waves, Factory, Users } from 'lucide-react'

export default function Impact() {
  const impacts = [
    {
      icon: TreePine,
      title: 'Environmental Protection',
      value: '2.5M',
      unit: 'Plastic bottles recycled',
      description: 'Preventing plastic waste from polluting our oceans and landfills',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Waves,
      title: 'Ocean Conservation',
      value: '15K',
      unit: 'Tons of CO2 saved',
      description: 'Reducing carbon footprint through sustainable manufacturing',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Factory,
      title: 'Sustainable Production',
      value: '500+',
      unit: 'Construction projects',
      description: 'Supporting sustainable building practices worldwide',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Community Impact',
      value: '1,200',
      unit: 'Jobs created',
      description: 'Empowering communities through green employment opportunities',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  return (
    <section id="impact" className="section-padding gradient-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Global <span className="text-primary-600">Impact</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
            Every RePLASTIX brick represents a step towards a more sustainable future. 
            See how we're making a difference across environmental, social, and economic dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="card p-8 text-center group hover:bg-white/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${impact.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <impact.icon className={`h-8 w-8 ${impact.color}`} />
              </div>
              
              <div className="mb-4">
                <div className={`text-3xl font-bold ${impact.color} mb-1`}>
                  {impact.value}
                </div>
                <div className="text-sm font-medium text-secondary-700">
                  {impact.unit}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-700 transition-colors duration-300">
                {impact.title}
              </h3>
              
              <p className="text-secondary-600 text-sm leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Impact Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Creating Lasting Change
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Circular Economy Leadership</h4>
                    <p className="text-secondary-600">
                      We're pioneering circular economy principles by transforming waste into valuable resources, 
                      creating a closed-loop system that benefits both environment and economy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Technology Innovation</h4>
                    <p className="text-secondary-600">
                      Our proprietary processing technology sets new standards for plastic recycling, 
                      achieving higher quality outputs with lower energy consumption.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Partnerships</h4>
                    <p className="text-secondary-600">
                      Collaborating with governments, NGOs, and businesses worldwide to scale 
                      sustainable solutions and maximize environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Progress Bars */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">Waste Reduction Goal</span>
                  <span className="text-sm text-primary-600">78%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">Carbon Neutrality</span>
                  <span className="text-sm text-primary-600">85%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">Community Engagement</span>
                  <span className="text-sm text-primary-600">92%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              {/* Awards */}
              <div className="bg-primary-50 p-6 rounded-2xl">
                <h4 className="font-semibold mb-4 text-primary-800">Recognition & Awards</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-secondary-700">UN Sustainable Development Goals Award 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-secondary-700">Green Innovation Excellence Award</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-secondary-700">Circular Economy Pioneer Recognition</span>
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