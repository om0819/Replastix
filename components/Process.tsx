import { Trash2, Zap, Hammer, Building } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Trash2,
      title: 'Collection & Sorting',
      description: 'We collect plastic waste from various sources and sort them by type and quality to ensure optimal processing.',
      details: ['PET bottles collection', 'Quality assessment', 'Contamination removal', 'Material categorization']
    },
    {
      icon: Zap,
      title: 'Processing & Melting',
      description: 'Advanced thermal processing transforms sorted plastics into moldable material while maintaining structural integrity.',
      details: ['Thermal processing', 'Additive integration', 'Quality control', 'Material homogenization']
    },
    {
      icon: Hammer,
      title: 'Molding & Shaping',
      description: 'Precision molding creates uniform, high-quality bricks with consistent dimensions and superior strength.',
      details: ['Precision molding', 'Compression forming', 'Cooling process', 'Dimensional accuracy']
    },
    {
      icon: Building,
      title: 'Quality & Distribution',
      description: 'Rigorous testing ensures each brick meets construction standards before distribution to building projects.',
      details: ['Strength testing', 'Durability assessment', 'Quality certification', 'Sustainable packaging']
    }
  ]

  return (
    <section id="process" className="section-padding gradient-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
            From waste to wonder - discover how we transform discarded plastic 
            into durable, sustainable building materials through our innovative 4-step process.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-400 rounded-full"></div>
                  </div>
                )}

                <div className="card p-8 text-center relative z-10 group hover:bg-primary-50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="bg-primary-100 group-hover:bg-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center space-x-2 text-sm text-secondary-500">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Metrics */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Process Efficiency</h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our optimized process ensures maximum efficiency while maintaining the highest quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">24h</span>
              </div>
              <h4 className="font-semibold mb-2">Processing Time</h4>
              <p className="text-sm text-secondary-600">From waste to finished brick</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">95%</span>
              </div>
              <h4 className="font-semibold mb-2">Material Recovery</h4>
              <p className="text-sm text-secondary-600">Plastic waste utilization rate</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">50%</span>
              </div>
              <h4 className="font-semibold mb-2">Energy Savings</h4>
              <p className="text-sm text-secondary-600">Compared to traditional methods</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">100%</span>
              </div>
              <h4 className="font-semibold mb-2">Quality Tested</h4>
              <p className="text-sm text-secondary-600">Every brick meets standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}