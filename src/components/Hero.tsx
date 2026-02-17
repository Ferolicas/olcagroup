'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              <Image
                src="/img.jpg"
                alt="OLCAGROUP"
                width={192}
                height={192}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6">
              Innovando en Desarrollo Web desde 2015
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformamos Ideas en
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiencias Digitales de Alto Impacto
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Desarrollo web profesional con tecnologías de vanguardia. Convertimos tu visión en
            soluciones digitales que generan resultados reales.
          </motion.p>

          {/* Value Propositions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2 text-white">Entrega Garantizada</h3>
              <p className="text-sm text-gray-200">Proyectos terminados en tiempo récord sin comprometer calidad</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-2 text-white">40% Más Económico</h3>
              <p className="text-sm text-gray-200">Precio justo sin sacrificar excelencia profesional</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold mb-2 text-white">Soporte Real</h3>
              <p className="text-sm text-gray-200">Acompañamiento continuo post-lanzamiento incluido</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contacto"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Solicita tu Cotización Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#portafolio"
              className="px-8 py-4 text-white rounded-full border-2 border-white/20 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Ver Nuestro Portafolio
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} className="text-gray-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} className="text-gray-300" />
            </a>
            <a
              href="mailto:contacto@olcagroup.com"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} className="text-gray-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
