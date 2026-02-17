'use client';

import { motion } from 'framer-motion';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, label: 'Años de Experiencia', value: '10+' },
    { icon: Globe, label: 'Proyectos Entregados', value: '150+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '98%' },
    { icon: TrendingUp, label: 'Países Activos', value: '8' },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider">Sobre OLCAGROUP</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Una Década <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovando</span> en el Desarrollo Web
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Desde 2015, nos hemos posicionado como referente en desarrollo web de alta calidad en España y Latinoamérica
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy & Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Nuestra Filosofía</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En OLCAGROUP no vendemos sitios web, <strong>construimos activos digitales que trabajan 24/7 para tu negocio</strong>.
              Cada proyecto es una oportunidad para demostrar que calidad excepcional y precios justos pueden coexistir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nacimos con una misión clara: democratizar el acceso a soluciones digitales profesionales sin los
              precios inflados de las grandes agencias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Qué nos hace diferentes</h3>
            <ul className="space-y-4">
              {[
                'Experiencia Comprobada: 10 años desarrollando proyectos para clientes en 8 países',
                'Stack Tecnológico Moderno: Next.js, React, Node.js, Sanity CMS, Supabase',
                'Enfoque en Resultados: No solo diseñamos bonito, optimizamos para conversión',
                'Transparencia Total: Sin costos ocultos ni sorpresas en la factura final',
                'Escalabilidad Garantizada: Construimos pensando en tu crecimiento futuro',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
