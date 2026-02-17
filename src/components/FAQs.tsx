'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'Landing page: 1-2 semanas | Web corporativa: 3-4 semanas | E-commerce: 4-6 semanas | Apps personalizadas: 6-12 semanas según complejidad.',
  },
  {
    question: '¿Qué incluyen los precios?',
    answer: 'Todos nuestros precios incluyen diseño, desarrollo, hosting primer año, SSL, SEO básico on-page, capacitación y 3 meses de soporte técnico.',
  },
  {
    question: '¿Ofrecen planes de pago?',
    answer: 'Sí. 50% al iniciar, 50% al entregar. Para proyectos +5,000€/USD aceptamos pagos en 3 cuotas sin intereses adicionales.',
  },
  {
    question: '¿Qué pasa si necesito cambios después del lanzamiento?',
    answer: 'Los primeros 3 meses incluyen soporte y ajustes menores gratis. Para cambios mayores, ofrecemos planes de mantenimiento desde 60€/mes (40% menos que el mercado).',
  },
  {
    question: '¿Puedo actualizar mi web yo mismo?',
    answer: 'Sí, todos nuestros proyectos incluyen CMS intuitivo (WordPress o Sanity CMS) y capacitación completa para que puedas gestionar tu contenido.',
  },
  {
    question: '¿Trabajan con clientes fuera de España?',
    answer: 'Absolutamente. Tenemos clientes en 8 países (España, Colombia, México, USA, Argentina, Chile, Perú, Ecuador). Trabajamos 100% remoto con reuniones por videollamada.',
  },
  {
    question: '¿Qué tecnologías usan?',
    answer: 'Next.js, React, Node.js, PostgreSQL, Supabase, Sanity CMS, TailwindCSS, Vercel, AWS. Siempre usamos lo mejor para cada proyecto según las necesidades específicas.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Sí. Garantizamos que tu sitio funcionará sin bugs. Si algo falla por error nuestro, lo arreglamos sin costo. Además, incluimos 3 meses de soporte post-lanzamiento.',
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider">Preguntas Frecuentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Resolvemos tus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dudas</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-blue-50 transition-colors"
              >
                <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 ml-4 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contáctanos Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
