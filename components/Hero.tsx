import { ArrowRight, Play, Recycle, Building, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <Recycle className="h-16 w-16 text-primary-600" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <Building className="h-12 w-12 text-primary-600" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>
          <Leaf className="h-14 w-14 text-primary-600" />
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Recycle className="h-4 w-4" />
                <span>Sustainable Innovation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Transforming 
                <span className="text-primary-600"> Plastic Waste</span> into 
                <span className="text-primary-600"> Sustainable Bricks</span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed text-balance">
                Join the RePLASTIX revolution. We're converting plastic waste into durable, 
                eco-friendly building materials, creating a cleaner future one brick at a time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-secondary-600">Plastic Bottles Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-secondary-600">Sustainable Bricks Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-secondary-600">Waste Reduction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Building className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Sustainable Building</p>
                  <p className="text-sm opacity-80">Made from Recycled Plastic</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <Recycle className="h-8 w-8 text-primary-600" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}