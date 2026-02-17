'use client';

import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';
import { Country, countries } from './CountrySelector';

interface PricingData {
  service: string;
  icon: string;
  marketPrice: string;
  ourPrice: string;
  includes: string[];
  popular?: boolean;
}

const pricingByCountry: Record<Country, PricingData[]> = {
  ES: [
    { service: 'Landing Page', icon: '🚀', marketPrice: '600-1,500€', ourPrice: '360-900€', includes: ['Diseño personalizado', 'SEO básico', 'Hosting 1 año', 'SSL incluido'] },
    { service: 'Web Corporativa', icon: '🏢', marketPrice: '1,800-4,500€', ourPrice: '1,080-2,700€', includes: ['Diseño a medida', 'CMS integrado', 'Blog + Formularios', 'SEO + Analytics'], popular: true },
    { service: 'E-Commerce Básico', icon: '🛒', marketPrice: '2,000-5,000€', ourPrice: '1,200-3,000€', includes: ['Hasta 50 productos', 'Pasarela de pago', 'Gestión inventario', 'Panel admin'] },
    { service: 'E-Commerce Avanzado', icon: '🏪', marketPrice: '5,000-10,000€', ourPrice: '3,000-6,000€', includes: ['Productos ilimitados', 'Múltiples pasarelas', 'Automatizaciones', 'Multi-idioma'] },
    { service: 'App Web / SaaS', icon: '⚙️', marketPrice: '8,000-20,000€', ourPrice: '4,800-12,000€', includes: ['Backend completo', 'API REST/GraphQL', 'Dashboard admin', 'Autenticación'], popular: true },
    { service: 'Sistema CRM', icon: '📊', marketPrice: '10,000-25,000€', ourPrice: '6,000-15,000€', includes: ['100% personalizado', 'Integraciones', 'Módulos a medida', 'Reportes avanzados'] },
  ],
  CO: [
    { service: 'Landing Page', icon: '🚀', marketPrice: '$800K-2M', ourPrice: '$480K-1.2M', includes: ['Diseño personalizado', 'SEO básico', 'Hosting 1 año', 'SSL incluido'] },
    { service: 'Web Corporativa', icon: '🏢', marketPrice: '$2.5M-6M', ourPrice: '$1.5M-3.6M', includes: ['Diseño a medida', 'CMS integrado', 'Blog + Formularios', 'SEO + Analytics'], popular: true },
    { service: 'E-Commerce Básico', icon: '🛒', marketPrice: '$3M-6M', ourPrice: '$1.8M-3.6M', includes: ['Hasta 50 productos', 'Pasarela de pago', 'Gestión inventario', 'Panel admin'] },
    { service: 'E-Commerce Avanzado', icon: '🏪', marketPrice: '$6M-10M', ourPrice: '$3.6M-6M', includes: ['Productos ilimitados', 'Múltiples pasarelas', 'Automatizaciones', 'Multi-idioma'] },
    { service: 'App Web / SaaS', icon: '⚙️', marketPrice: '$10M-25M', ourPrice: '$6M-15M', includes: ['Backend completo', 'API REST/GraphQL', 'Dashboard admin', 'Autenticación'], popular: true },
    { service: 'Sistema CRM', icon: '📊', marketPrice: '$15M-35M', ourPrice: '$9M-21M', includes: ['100% personalizado', 'Integraciones', 'Módulos a medida', 'Reportes avanzados'] },
  ],
  MX: [
    { service: 'Landing Page', icon: '🚀', marketPrice: '$5,000-9,000', ourPrice: '$3,000-5,400', includes: ['Diseño personalizado', 'SEO básico', 'Hosting 1 año', 'SSL incluido'] },
    { service: 'Web Corporativa', icon: '🏢', marketPrice: '$12,000-30,000', ourPrice: '$7,200-18,000', includes: ['Diseño a medida', 'CMS integrado', 'Blog + Formularios', 'SEO + Analytics'], popular: true },
    { service: 'E-Commerce Básico', icon: '🛒', marketPrice: '$15,000-30,000', ourPrice: '$9,000-18,000', includes: ['Hasta 50 productos', 'Pasarela de pago', 'Gestión inventario', 'Panel admin'] },
    { service: 'E-Commerce Avanzado', icon: '🏪', marketPrice: '$30,000-50,000', ourPrice: '$18,000-30,000', includes: ['Productos ilimitados', 'Múltiples pasarelas', 'Automatizaciones', 'Multi-idioma'] },
    { service: 'App Web / SaaS', icon: '⚙️', marketPrice: '$50,000-120,000', ourPrice: '$30,000-72,000', includes: ['Backend completo', 'API REST/GraphQL', 'Dashboard admin', 'Autenticación'], popular: true },
    { service: 'Sistema CRM', icon: '📊', marketPrice: '$80,000-180,000', ourPrice: '$48,000-108,000', includes: ['100% personalizado', 'Integraciones', 'Módulos a medida', 'Reportes avanzados'] },
  ],
  US: [
    { service: 'Landing Page', icon: '🚀', marketPrice: '$1,000-3,000', ourPrice: '$600-1,800', includes: ['Custom design', 'Basic SEO', '1yr hosting', 'SSL included'] },
    { service: 'Corporate Website', icon: '🏢', marketPrice: '$3,000-10,000', ourPrice: '$1,800-6,000', includes: ['Custom design', 'CMS integrated', 'Blog + Forms', 'SEO + Analytics'], popular: true },
    { service: 'E-Commerce Basic', icon: '🛒', marketPrice: '$5,000-15,000', ourPrice: '$3,000-9,000', includes: ['Up to 50 products', 'Payment gateway', 'Inventory mgmt', 'Admin panel'] },
    { service: 'E-Commerce Advanced', icon: '🏪', marketPrice: '$15,000-25,000', ourPrice: '$9,000-15,000', includes: ['Unlimited products', 'Multiple gateways', 'Automation', 'Multi-language'] },
    { service: 'Web App / SaaS', icon: '⚙️', marketPrice: '$20,000-50,000', ourPrice: '$12,000-30,000', includes: ['Complete backend', 'REST/GraphQL API', 'Admin dashboard', 'Authentication'], popular: true },
    { service: 'Custom CRM', icon: '📊', marketPrice: '$30,000-80,000', ourPrice: '$18,000-48,000', includes: ['100% customized', 'Integrations', 'Custom modules', 'Advanced reports'] },
  ],
};

interface PricingProps {
  selectedCountry: Country;
}

export function Pricing({ selectedCountry }: PricingProps) {
  const pricing = pricingByCountry[selectedCountry];
  const countryInfo = countries[selectedCountry];

  return (
    <section id="precios" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Precios Transparentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            Ahorra <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">40%</span> con OLCAGROUP
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-6">
            Precios justos y transparentes para {countryInfo.name}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg shadow-green-500/25">
            <Zap size={18} />
            <span className="font-semibold text-sm">Ahorro garantizado del 40% vs. mercado</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricing.map((item, index) => (
            <motion.div
              key={item.service}
              className={`relative rounded-2xl p-[1px] ${
                item.popular
                  ? 'bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500'
                  : 'bg-gray-700/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Popular
                  </span>
                </div>
              )}
              <div className={`rounded-2xl p-6 h-full flex flex-col ${
                item.popular ? 'bg-gray-900' : 'bg-gray-900/80'
              }`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-white">{item.service}</h3>
                </div>

                {/* Prices */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-500 text-sm line-through">{item.marketPrice}</span>
                    <span className="text-xs text-gray-600">mercado</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {item.ourPrice}
                    </span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-xs font-semibold">
                    <Zap size={12} />
                    Ahorras 40%
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-5" />

                {/* Includes */}
                <ul className="space-y-3 flex-grow">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check size={16} className="text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`mt-6 w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    item.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]'
                      : 'bg-white/5 text-white border border-gray-700 hover:bg-white/10 hover:border-gray-500'
                  }`}
                >
                  Solicitar Cotización
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-500/10 rounded-xl">
                <CreditCard size={22} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-white">Planes de Pago</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <Check size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                50% al iniciar, 50% al entregar
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                3 cuotas para proyectos +5,000{countryInfo.symbol}
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                Sin intereses adicionales
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-green-500/10 rounded-xl">
                <Shield size={22} className="text-green-400" />
              </div>
              <h3 className="font-semibold text-white">Garantías</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <Check size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                Entrega en tiempo garantizado
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                Sin bugs - arreglamos sin costo
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                Satisfacción 100% garantizada
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-purple-500/10 rounded-xl">
                <Clock size={22} className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Todo Incluido</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <Check size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                Hosting premium 1er año
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                Dominio incluido 1er año
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                Soporte técnico 3 meses gratis
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
