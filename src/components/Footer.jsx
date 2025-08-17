import React from 'react'
import { motion } from 'framer-motion'
import { Road, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre Nós', href: 'about' },
    { label: 'Serviços', href: 'services' },
    { label: 'Contato', href: 'contact' }
  ]

  const services = [
    'Recapeamento Asfáltico',
    'Reparos Estruturais',
    'Manutenção Preventiva',
    'Atendimento de Emergência',
    'Consultoria Técnica',
    'Soluções Personalizadas'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 9999-9999' },
    { icon: Mail, text: 'contato@rodorval.com.br' },
    { icon: MapPin, text: 'São Paulo, SP' },
    { icon: Clock, text: 'Atendimento 24h' }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-road-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl">
                  <Road className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Rodorval</h3>
                  <p className="text-white/80 text-sm">Conserto de Rodovias</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Especialistas em infraestrutura rodoviária com mais de 15 anos de experiência. 
                Oferecemos soluções completas e de qualidade para manutenção e conserto de rodovias.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <info.icon className="h-5 w-5 text-accent-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-accent-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Nossos Serviços</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white/80 text-sm block">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Atendimento</h4>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h5 className="font-semibold text-accent-400 mb-2">Emergências 24/7</h5>
                  <p className="text-white/80 text-sm mb-4">
                    Para situações críticas que não podem esperar.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Contato Emergencial
                  </motion.button>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h5 className="font-semibold text-white mb-2">Orçamento Gratuito</h5>
                  <p className="text-white/70 text-sm mb-4">
                    Solicite seu orçamento sem compromisso.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="bg-white/20 text-white border border-white/30 px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/30"
                  >
                    Solicitar Orçamento
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-white/60 text-sm">
                <p>&copy; 2024 Rodorval. Todos os direitos reservados.</p>
              </div>
              
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span>Criado com</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>por</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}