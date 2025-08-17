import React from 'react'
import { motion } from 'framer-motion'
import { Construction, Wrench, Shield, Truck, Timer, MapPin, ArrowRight, CheckCircle, AlertTriangle, Settings, Zap } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const mainServices = [
    {
      icon: Construction,
      title: 'Recapeamento Asfáltico',
      description: 'Renovação completa da camada de asfalto com tecnologia avançada e materiais de primeira qualidade.',
      features: ['Asfalto de alta durabilidade', 'Tecnologia CBUQ', 'Garantia estendida', 'Execução rápida'],
      highlight: 'Mais Solicitado'
    },
    {
      icon: Wrench,
      title: 'Reparos Estruturais',
      description: 'Correção de problemas na base da rodovia, incluindo drenagem, sub-base e pavimentação.',
      features: ['Análise técnica completa', 'Correção da drenagem', 'Reforço estrutural', 'Soluções definitivas'],
      highlight: 'Especialidade'
    },
    {
      icon: Shield,
      title: 'Manutenção Preventiva',
      description: 'Programas de manutenção regular para evitar problemas futuros e prolongar a vida útil da rodovia.',
      features: ['Inspeções periódicas', 'Manutenção programada', 'Relatórios técnicos', 'Acompanhamento contínuo'],
      highlight: 'Recomendado'
    }
  ]

  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: 'Atendimento de Emergência',
      description: 'Serviço 24/7 para situações críticas que exigem reparo imediato.',
      time: '24h/7dias'
    },
    {
      icon: Truck,
      title: 'Mobilização Rápida',
      description: 'Equipes e equipamentos mobilizados em até 2 horas para emergências.',
      time: '2 horas'
    },
    {
      icon: Settings,
      title: 'Soluções Temporárias',
      description: 'Reparos provisórios seguros enquanto planeja-se a solução definitiva.',
      time: 'Imediato'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Avaliação Técnica',
      description: 'Inspeção detalhada e diagnóstico preciso das condições da rodovia.'
    },
    {
      step: '02',
      title: 'Projeto Personalizado',
      description: 'Desenvolvimento de solução específica para cada situação encontrada.'
    },
    {
      step: '03',
      title: 'Execução Profissional',
      description: 'Implementação com equipe especializada e equipamentos de última geração.'
    },
    {
      step: '04',
      title: 'Garantia e Acompanhamento',
      description: 'Monitoramento pós-entrega e garantia estendida de qualidade.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Soluções Completas em <span className="text-gradient">Infraestrutura Rodoviária</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados em conserto e manutenção de rodovias, 
            com tecnologia avançada e equipe altamente qualificada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover group"
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </div>
              )}
              
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Atendimento de Emergência 24/7
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Para situações críticas que não podem esperar, nossa equipe está disponível 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{service.time}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-white/80 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              Chamar Emergência Agora
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Metodologia comprovada que garante resultados excepcionais em todos os projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 text-center"
        >
          <Zap className="h-16 w-16 text-primary-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Pronto para Começar seu Projeto?
          </h3>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e receba um orçamento personalizado para suas necessidades de infraestrutura rodoviária.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary"
          >
            Solicitar Orçamento Gratuito
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}