'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechCorp',
    content: 'OLCAGROUP desarrolló nuestro sistema de gestión completo que nos ahorró +60% del tiempo administrativo. El ROI fue positivo en menos de un año. Profesionales, transparentes y siempre disponibles.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Carlos Méndez',
    role: 'Fundador, BeautyLux',
    content: 'Después de 3 intentos fallidos con otras agencias, OLCAGROUP nos entregó exactamente lo que necesitábamos. El e-commerce está funcionando perfectamente y las ventas han aumentado un 180% desde el lanzamiento.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    name: 'Ana Rodríguez',
    role: 'Directora Marketing, HealthPlus',
    content: 'La mejor inversión que hicimos fue contratar a OLCAGROUP. No solo nos ahorramos +40% vs. otras cotizaciones, la calidad del trabajo superó nuestras expectativas.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            Lo Que Dicen Nuestros <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Feedback real de clientes satisfechos que han transformado sus negocios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 text-blue-500/20" size={48} />

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
