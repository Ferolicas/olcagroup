'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingCart, Palette, Database, Rocket, Check } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Creamos experiencias web que cautivan, informan y convierten.',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Diseño UI/UX profesional y moderno',
      'Desarrollo responsivo (móvil, tablet, desktop)',
      'Optimización de velocidad (Core Web Vitals)',
      'SEO técnico on-page implementado',
      'Integración Google Analytics',
      'Hosting premium 12 meses incluido',
    ],
    ideal: 'Empresas que necesitan presencia digital profesional, profesionales independientes, startups',
    tech: 'Next.js, React, TailwindCSS, WordPress',
  },
  {
    icon: Smartphone,
    title: 'Apps Web',
    description: 'Aplicaciones web robustas que resuelven problemas complejos de negocio.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Arquitectura escalable y mantenible',
      'Backend robusto con APIs RESTful',
      'Base de datos optimizada',
      'Autenticación y autorización segura',
      'Panel de administración completo',
      'Testing automatizado',
    ],
    ideal: 'Sistemas internos de gestión, plataformas de membresía, herramientas B2B, portales de clientes',
    tech: 'Next.js, Node.js, PostgreSQL, Supabase',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Tiendas online completas que venden. Máquinas de conversión optimizadas.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Catálogo de productos ilimitado',
      'Pasarelas de pago integradas',
      'Gestión de inventario en tiempo real',
      'Sistema de envíos automatizado',
      'Facturación automática',
      'Recuperación de carritos abandonados',
    ],
    ideal: 'Negocios que quieren vender online 24/7 con procesos automatizados',
    tech: 'Next.js, Shopify, WooCommerce, Stripe API',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseños que enamoran y convierten. Cada decisión respaldada por datos.',
    color: 'from-orange-500 to-red-500',
    features: [
      'Investigación de usuario y competencia',
      'Wireframes de baja y alta fidelidad',
      'Design system completo',
      'Prototipos interactivos en Figma',
      'Guías de estilo y brand guidelines',
      'Optimización para conversión',
    ],
    ideal: 'Proyectos que requieren diseño profesional antes del desarrollo',
    tech: 'Figma, Adobe XD, Sketch',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Sistemas backend robustos y escalables. APIs seguras y documentadas.',
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Diseño de arquitectura escalable',
      'APIs RESTful bien documentadas',
      'Autenticación JWT segura',
      'Caché y optimización de consultas',
      'Logs y monitoreo',
      'Tests unitarios y de integración',
    ],
    ideal: 'Integraciones entre sistemas, microservicios, automatizaciones',
    tech: 'Node.js, Express, NestJS, PostgreSQL, MongoDB',
  },
  {
    icon: Rocket,
    title: 'Optimización',
    description: '¿Tu web carga lento? Auditamos, optimizamos y posicionamos tu sitio.',
    color: 'from-pink-500 to-rose-500',
    features: [
      'Auditoría técnica completa (PageSpeed)',
      'Optimización de imágenes (WebP)',
      'Implementación de CDN',
      'SEO on-page completo',
      'Schema markup (datos estructurados)',
      'Mejora de Core Web Vitals',
    ],
    ideal: 'Sitios existentes que necesitan mejorar rendimiento y posicionamiento',
    tech: 'Lighthouse, Google Search Console, Cloudflare',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            Servicios <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Completos</span> de Desarrollo
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Soluciones integrales para llevar tu proyecto al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-3">Lo que incluye:</p>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-gray-300 mb-1">Ideal para:</p>
                <p className="text-xs text-gray-500 mb-3">{service.ideal}</p>
                <p className="text-xs text-blue-400">{service.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
