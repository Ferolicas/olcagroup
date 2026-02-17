import { Heart, Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Image src="/logo.png" alt="OLCAGROUP" width={500} height={140} className="h-32 w-auto mb-4" />
            <p className="text-gray-500 mb-4">
              Transformando ideas en experiencias digitales desde 2015. Desarrollo web profesional con
              tecnologías de vanguardia en España y Latinoamérica.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contacto@olcagroup.com"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Apps Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Backend & APIs
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Optimización
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#nosotros" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-8 border-t border-white/5 mb-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
              <FileText size={14} />
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
              <FileText size={14} />
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
              <FileText size={14} />
              Política de Cookies
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 OLCAGROUP. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Hecho con <Heart size={16} className="text-red-500 fill-red-500" /> y tecnología de vanguardia
          </p>
        </div>
      </div>
    </footer>
  );
}
