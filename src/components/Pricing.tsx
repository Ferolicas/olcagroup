'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Country, countries } from './CountrySelector';

interface PricingData {
  service: string;
  marketPrice: string;
  ourPrice: string;
  includes: string;
}

const pricingByCountry: Record<Country, PricingData[]> = {
  ES: [
    { service: 'Landing Page', marketPrice: '600-1,500€', ourPrice: '360-900€', includes: 'Diseño personalizado, SEO básico, hosting 1 año, SSL' },
    { service: 'Web Corporativa (5-10 páginas)', marketPrice: '1,800-4,500€', ourPrice: '1,080-2,700€', includes: 'Diseño a medida, CMS, formularios, blog, SEO, Analytics' },
    { service: 'E-Commerce Básico', marketPrice: '2,000-5,000€', ourPrice: '1,200-3,000€', includes: 'Hasta 50 productos, pasarela pago, gestión inventario' },
    { service: 'E-Commerce Avanzado', marketPrice: '5,000-10,000€', ourPrice: '3,000-6,000€', includes: 'Productos ilimitados, múltiples pasarelas, automatizaciones' },
    { service: 'App Web / SaaS', marketPrice: '8,000-20,000€', ourPrice: '4,800-12,000€', includes: 'Backend completo, API, dashboard, autenticación' },
    { service: 'Sistema de Gestión CRM', marketPrice: '10,000-25,000€', ourPrice: '6,000-15,000€', includes: 'Personalizado 100%, integraciones, módulos a medida' },
  ],
  CO: [
    { service: 'Landing Page', marketPrice: '$800K-2M', ourPrice: '$480K-1.2M', includes: 'Diseño personalizado, SEO básico, hosting 1 año, SSL' },
    { service: 'Web Corporativa', marketPrice: '$2.5M-6M', ourPrice: '$1.5M-3.6M', includes: 'Diseño a medida, CMS, formularios, blog, SEO, Analytics' },
    { service: 'E-Commerce Básico', marketPrice: '$3M-6M', ourPrice: '$1.8M-3.6M', includes: 'Hasta 50 productos, pasarela pago, gestión inventario' },
    { service: 'E-Commerce Avanzado', marketPrice: '$6M-10M', ourPrice: '$3.6M-6M', includes: 'Productos ilimitados, múltiples pasarelas, automatizaciones' },
    { service: 'App Web / SaaS', marketPrice: '$10M-25M', ourPrice: '$6M-15M', includes: 'Backend completo, API, dashboard, autenticación' },
    { service: 'Sistema de Gestión CRM', marketPrice: '$15M-35M', ourPrice: '$9M-21M', includes: 'Personalizado 100%, integraciones, módulos a medida' },
  ],
  MX: [
    { service: 'Landing Page', marketPrice: '$5,000-9,000', ourPrice: '$3,000-5,400', includes: 'Diseño personalizado, SEO básico, hosting 1 año, SSL' },
    { service: 'Web Corporativa', marketPrice: '$12,000-30,000', ourPrice: '$7,200-18,000', includes: 'Diseño a medida, CMS, formularios, blog, SEO, Analytics' },
    { service: 'E-Commerce Básico', marketPrice: '$15,000-30,000', ourPrice: '$9,000-18,000', includes: 'Hasta 50 productos, pasarela pago, gestión inventario' },
    { service: 'E-Commerce Avanzado', marketPrice: '$30,000-50,000', ourPrice: '$18,000-30,000', includes: 'Productos ilimitados, múltiples pasarelas, automatizaciones' },
    { service: 'App Web / SaaS', marketPrice: '$50,000-120,000', ourPrice: '$30,000-72,000', includes: 'Backend completo, API, dashboard, autenticación' },
    { service: 'Sistema de Gestión CRM', marketPrice: '$80,000-180,000', ourPrice: '$48,000-108,000', includes: 'Personalizado 100%, integraciones, módulos a medida' },
  ],
  US: [
    { service: 'Landing Page', marketPrice: '$1,000-3,000', ourPrice: '$600-1,800', includes: 'Custom design, basic SEO, 1yr hosting, SSL' },
    { service: 'Corporate Website', marketPrice: '$3,000-10,000', ourPrice: '$1,800-6,000', includes: 'Custom design, CMS, forms, blog, SEO, Analytics' },
    { service: 'E-Commerce Basic', marketPrice: '$5,000-15,000', ourPrice: '$3,000-9,000', includes: 'Up to 50 products, payment gateway, inventory' },
    { service: 'E-Commerce Advanced', marketPrice: '$15,000-25,000', ourPrice: '$9,000-15,000', includes: 'Unlimited products, multiple gateways, automation' },
    { service: 'Web App / SaaS', marketPrice: '$20,000-50,000', ourPrice: '$12,000-30,000', includes: 'Complete backend, API, dashboard, authentication' },
    { service: 'Custom CRM System', marketPrice: '$30,000-80,000', ourPrice: '$18,000-48,000', includes: '100% customized, integrations, custom modules' },
  ],
};

interface PricingProps {
  selectedCountry: Country;
}

export function Pricing({ selectedCountry }: PricingProps) {
  const pricing = pricingByCountry[selectedCountry];
  const countryInfo = countries[selectedCountry];

  return (
    <section id="precios" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider">Precios Transparentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Ahorra <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">40%</span> con OLCAGROUP
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Precios justos y transparentes para {countryInfo.name}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
            <Zap size={20} />
            <span className="font-semibold">Ahorro garantizado del 40% vs. mercado</span>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Servicio</th>
                  <th className="px-6 py-4 text-left">Mercado Promedio</th>
                  <th className="px-6 py-4 text-left">OLCAGROUP</th>
                  <th className="px-6 py-4 text-left">Ahorro</th>
                  <th className="px-6 py-4 text-left hidden md:table-cell">Incluye</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <motion.tr
                    key={item.service}
                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 font-semibold">{item.service}</td>
                    <td className="px-6 py-4 text-gray-500 line-through">{item.marketPrice}</td>
                    <td className="px-6 py-4 text-green-600 font-bold text-lg">{item.ourPrice}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        <Zap size={14} />
                        40%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{item.includes}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Services */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3">Servicios Adicionales</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Mantenimiento web (40% ahorro)
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Hosting premium incluido primer año
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Dominio incluido primer año
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Soporte técnico 3 meses gratis
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3">Planes de Pago</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check size={16} className="flex-shrink-0 mt-0.5" />
                50% al iniciar, 50% al entregar
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="flex-shrink-0 mt-0.5" />
                Pagos en 3 cuotas para proyectos +5,000{countryInfo.symbol}
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="flex-shrink-0 mt-0.5" />
                Sin intereses adicionales
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="flex-shrink-0 mt-0.5" />
                Facturación disponible
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3">Garantías</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Entrega en tiempo garantizado
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Sin bugs - arreglamos sin costo
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Satisfacción 100% garantizada
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                Código limpio y documentado
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
