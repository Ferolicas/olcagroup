'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Planeta Keto E-Commerce',
    category: 'E-Commerce Automatizado',
    description: 'E-commerce completo con entrega automática de productos digitales (planes de alimentación keto) sin intervención manual.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?w=800&h=450&fit=crop',
    tags: ['Next.js', 'Sanity CMS', 'Supabase', 'Stripe'],
    features: [
      'Sistema de pagos integrado (Stripe + PayPal)',
      'Entrega automática por email',
      'Panel de gestión en Sanity CMS',
      'Analytics de ventas en tiempo real',
      'Sistema 100% automatizado',
    ],
    results: ['0 minutos gestión manual por venta', '4.8K suscriptores YouTube', '49K seguidores TikTok'],
  },
  {
    title: 'Sistema CRM - CNPeritus',
    category: 'Sistema de Gestión Personalizado',
    description: 'CRM avanzado para consultoría legal con gestión de casos, documentos y automatización vía WhatsApp Business API.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?w=800&h=450&fit=crop',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WhatsApp API'],
    features: [
      'CRM personalizado para casos legales',
      'Almacenamiento de documentos',
      'Automatización WhatsApp Business',
      'Sistema de reportes y analytics',
      '28 módulos desarrollados',
    ],
    results: ['75% reducción tiempo administrativo', 'Comunicación automatizada', 'Trazabilidad completa'],
  },
  {
    title: 'Landing Page Premium - Belleza de Lujo',
    category: 'Landing Page de Alta Conversión',
    description: 'Landing page premium para dropshipping de productos de belleza de lujo, optimizada para conversión.',
    image: 'https://images.unsplash.com/photo-1651684195895-38708dc94cfa?w=800&h=450&fit=crop',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Diseño minimalista y elegante',
      'Copywriting persuasivo',
      'Optimización de velocidad (95+ PageSpeed)',
      'SEO on-page implementado',
      'Mobile-first design',
    ],
    results: ['Conversión del 8.2%', 'Carga: 1.2 segundos', '100/100 PageSpeed Mobile'],
  },
  {
    title: 'Sistema de Gestión Empresarial',
    category: 'ERP Ligero Personalizado',
    description: 'Sistema integral para unificar procesos de negocio: proyectos, inventario, facturación y RRHH.',
    image: 'https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?w=800&h=450&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'AWS S3'],
    features: [
      'Gestión de proyectos',
      'Control de inventario',
      'Facturación automatizada',
      'Dashboard analítico',
      '7 módulos integrados',
    ],
    results: ['60% reducción tiempo administrativo', 'Datos centralizados', 'ROI positivo en 8 meses'],
  },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Proyectos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reales</span> y Resultados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Casos de éxito comprobados que demuestran nuestra experiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-3">
                    <span className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer">
                      <ExternalLink size={20} />
                    </span>
                    <span className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer">
                      <Github size={20} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Características:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Resultados:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs"
                      >
                        ✓ {result}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
