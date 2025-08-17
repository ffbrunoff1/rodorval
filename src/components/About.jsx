import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock, Target, Zap, CheckCircle, Star } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os nossos projetos seguem rigorosamente as normas de segurança rodoviária e qualidade.'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Empresa certificada com mais de 15 anos de experiência no mercado de infraestrutura.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e treinados nas melhores práticas do setor.'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Cronogramas otimizados e entrega dentro do prazo acordado em todos os projetos.'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada projeto é executado com precisão técnica e atenção aos detalhes.'
    },
    {
      icon: Zap,
      title: 'Eficiência',
      description: 'Processos otimizados para máxima eficiência e resultados superiores.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Quilômetros Restaurados' },
    { number: '150+', label: 'Projetos Concluídos' },
    { number: '50+', label: 'Cidades Atendidas' },
    { number: '100%', label: 'Satisfação do Cliente' }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Sobre a Rodorval
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Liderança em <span className="text-gradient">Infraestrutura Rodoviária</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de 15 anos de experiência, a Rodorval se consolidou como referência nacional em conserto e manutenção de rodovias, 
            combinando tecnologia avançada, equipe especializada e compromisso com a excelência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Nossa Missão
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Proporcionar soluções completas e inovadoras em infraestrutura rodoviária, garantindo segurança, qualidade e durabilidade 
                em cada projeto. Nosso compromisso é com a excelência técnica e a satisfação total dos nossos clientes.
              </p>
              
              <div className="space-y-4">
                {[
                  'Tecnologia de ponta em todos os processos',
                  'Sustentabilidade e responsabilidade ambiental',
                  'Atendimento personalizado e consultivo',
                  'Garantia estendida em todos os serviços'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Star className="h-8 w-8 fill-current" />
                <div>
                  <h4 className="text-xl font-bold">Excelência Reconhecida</h4>
                  <p className="text-white/90">Avaliação 5 estrelas de nossos clientes</p>
                </div>
              </div>
              <p className="text-white/90">
                "A qualidade dos serviços da Rodorval superou nossas expectativas. Profissionalismo e resultado impecável."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover"
                >
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-secondary-600 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary-900">
                Nossos Valores
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-secondary-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}