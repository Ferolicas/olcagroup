'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos en menos de 24 horas.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            ¿Listo para llevar tu negocio al <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">siguiente nivel digital?</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Obtén tu cotización personalizada en menos de 24 horas. Sin compromisos ni presión de venta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white">contacto@olcagroup.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">WhatsApp</p>
                    <p className="text-white">+34 XXX XXX XXX (España)</p>
                    <p className="text-white">+57 XXX XXX XXX (Colombia)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Presencia Global</p>
                    <p className="text-white">España, Colombia, México, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <Clock className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Horario de Atención</p>
                    <p className="text-white">Lun-Vie: 9:00-18:00 (GMT+1/GMT-5)</p>
                    <p className="text-white">Sáb: 10:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué obtienes al contactarnos?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  Análisis de tus necesidades específicas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  Propuesta de la mejor solución técnica
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  Cotización transparente y detallada
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  Respuesta en menos de 24 horas
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                >
                  Enviar Mensaje
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
