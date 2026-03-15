import {
  FiCalendar, FiMapPin, FiGlobe, FiPhone, FiMail,
  FiBriefcase, FiUser, FiGithub, FiLinkedin, FiInstagram,
} from 'react-icons/fi'

/** Roles rotated in the Hero typing animation */
export const roles = [
  'Desenvolvedor Frontend',
  'Analista de Dados',
  'Desenvolvedor Full Stack',
]

/** Personal detail items shown in the About section */
export const personalInfo = [
  { icon: FiCalendar,  label: 'Nascimento',   value: '04 de Maio, 2001' },
  { icon: FiBriefcase, label: 'Freelance',     value: 'Disponível' },
  { icon: FiMapPin,    label: 'Endereço',      value: 'Curitiba, Brasil' },
  { icon: FiGlobe,     label: 'Idiomas',       value: 'Português, Inglês, Espanhol' },
  { icon: FiUser,      label: 'Nacionalidade', value: 'Brasileiro' },
  { icon: FiPhone,     label: 'Telefone',      value: '+55 (41) 9 9999-9999' },
  { icon: FiMail,      label: 'E-mail',        value: 'bruno@email.com' },
]

/** Contact details shown in the Contact section */
export const contactInfo = [
  { icon: FiMapPin, label: 'Localização', value: 'Curitiba, Paraná — Brasil' },
  { icon: FiMail,   label: 'E-mail',      value: 'bruno@email.com' },
  { icon: FiPhone,  label: 'Telefone',    value: '+55 (41) 9 9999-9999' },
]

/** Social links used in Hero and Contact */
export const socials = [
  { icon: FiGithub,    label: 'GitHub',    href: 'https://github.com' },
  { icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://linkedin.com' },
  { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com' },
]
