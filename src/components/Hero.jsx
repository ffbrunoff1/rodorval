import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Truck, Wrench, Clock } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const benefits = [
    'Equipe especializada em rodovias',
    'Equipamentos de última geração',
    'Atendimento 24/7 para emergências',
    'Garantia de qualidade em todos os serviços'
  ]

  const stats = [
    { number: '500+', label: 'Quilômetros Restaurados', icon: Truck },
    { number: '15+', label: 'Anos de Experiência', icon: Clock },
    { number: '100%', label: 'Clientes Satisfeitos', icon: Star },
    { number: '24/7', label: 'Atendimento Emergencial', icon: Wrench }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="absolute inset-0 bg-road-pattern opacity-5"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 text-secondary-900 px-6 py-2 rounded-full text-sm font-semibold">
                  🚧 Especialistas em Infraestrutura Rodoviária
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Conserto de <span className="text-gradient bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">Rodovias</span> com
                <br />
                Excelência e Qualidade
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed max-w-2xl"
              >
                A Rodorval é referência em manutenção e conserto de rodovias, oferecendo soluções completas para infraestrutura rodoviária com tecnologia avançada e equipe altamente qualificada.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-accent-400 flex-shrink-0" />
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Conhecer Serviços</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-8 pt-8 border-t border-white/20"
            >
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-white/80">Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-accent-400" />
                <span className="text-white/80">Cobertura Nacional</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-8 w-8 text-accent-400" />
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 italic text-lg">
                  "Excelência em cada quilômetro restaurado. A Rodorval transformou nossa infraestrutura rodoviária."
                </blockquote>
                <div className="text-white/70 text-sm">
                  - Cliente Corporativo
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}