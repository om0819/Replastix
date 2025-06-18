import { Shield, Zap, Leaf, DollarSign, Thermometer, Droplets } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Superior Durability',
      description: 'Our recycled plastic bricks are engineered to last 50+ years with minimal maintenance.',
      stats: '3x stronger than concrete'
    },
    {
      icon: Thermometer,
      title: 'Thermal Insulation',
      description: 'Excellent thermal properties reduce energy costs for heating and cooling by up to 40%.',
      stats: '40% energy savings'
    },
    {
      icon: Droplets,
      title: 'Water Resistant',
      description: 'Non-porous surface prevents water absorption, eliminating mold and structural damage.',
      stats: '100% waterproof'
    },
    {
      icon: Zap,
      title: 'Quick Installation',
      description: 'Lightweight design and precision molding enable faster construction with fewer workers.',
      stats: '50% faster build time'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Each brick diverts 5-7 plastic bottles from landfills while reducing carbon footprint.',
      stats: '80% less CO2 emissions'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Lower material and labor costs make sustainable construction affordable for everyone.',
      stats: '25% cost reduction'
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why Choose <span className="text-primary-600">RePLASTIX</span> Bricks?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
            Our innovative recycled plastic bricks offer superior performance, 
            environmental benefits, and economic advantages over traditional building materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-8 group hover:bg-primary-50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 group-hover:bg-primary-200 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="bg-primary-100 group-hover:bg-primary-200 px-3 py-1 rounded-full inline-block transition-colors duration-300">
                    <span className="text-sm font-medium text-primary-700">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              RePLASTIX vs Traditional Materials
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              See how our recycled plastic bricks outperform conventional building materials
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">RePLASTIX Bricks</th>
                  <th className="px-6 py-4 text-center font-semibold">Concrete Blocks</th>
                  <th className="px-6 py-4 text-center font-semibold">Clay Bricks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium">Weight</td>
                  <td className="px-6 py-4 text-center text-primary-600 font-semibold">20% Lighter</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Heavy</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Heavy</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium">Strength</td>
                  <td className="px-6 py-4 text-center text-primary-600 font-semibold">30% Stronger</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Standard</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Standard</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium">Water Resistance</td>
                  <td className="px-6 py-4 text-center text-primary-600 font-semibold">100% Waterproof</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Porous</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Absorbs Water</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium">Environmental Impact</td>
                  <td className="px-6 py-4 text-center text-primary-600 font-semibold">Carbon Negative</td>
                  <td className="px-6 py-4 text-center text-secondary-600">High CO2</td>
                  <td className="px-6 py-4 text-center text-secondary-600">High CO2</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium">Cost</td>
                  <td className="px-6 py-4 text-center text-primary-600 font-semibold">25% Less</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Standard</td>
                  <td className="px-6 py-4 text-center text-secondary-600">Higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}