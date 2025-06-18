import { Recycle, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Impact', href: '#impact' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
    ],
    products: [
      { label: 'Recycled Bricks', href: '#' },
      { label: 'Custom Solutions', href: '#' },
      { label: 'Technical Specs', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Certifications', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Installation Guide', href: '#' },
      { label: 'Sustainability Report', href: '#' },
      { label: 'Research Papers', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Technical Support', href: '#' },
      { label: 'Partner Program', href: '#' },
      { label: 'Distributor Network', href: '#' },
      { label: 'Training', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                re<span className="text-primary-400">PLASTIX</span>
              </span>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Transforming plastic waste into sustainable building materials. 
              Join us in creating a cleaner, more sustainable future through innovative recycling solutions.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-200 group"
                >
                  <social.icon className="h-5 w-5 text-secondary-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-secondary-400 text-sm">
                © 2024 RePLASTIX. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-secondary-400">
              <span>🌱 Carbon Neutral Certified</span>
              <span>♻️ 100% Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}