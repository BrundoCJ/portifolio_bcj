import {
  FiCalendar, FiMapPin, FiGlobe, FiPhone, FiMail,
  FiBriefcase, FiUser, FiGithub, FiLinkedin, FiInstagram,
} from 'react-icons/fi'

/** Roles rotated in the Hero typing animation */
export const roles = [
  'Analista de Dados',
  'Desenvolvedor Web',
]

/** Personal detail items shown in the About section */
export const personalInfo = [
  { icon: FiCalendar,  label: 'Nascimento',   value: '04 de Abril, 2004' },
  { icon: FiBriefcase, label: 'Freelance',     value: 'Disponível' },
  { icon: FiMapPin,    label: 'Endereço',      value: 'Maringá, Brasil' },
  { icon: FiGlobe,     label: 'Idiomas',       value: 'Português, Inglês' },
  { icon: FiUser,      label: 'Nacionalidade', value: 'Brasileiro' },
  { icon: FiPhone,     label: 'Telefone',      value: '+55 (44) 9 9819-8263' },
  { icon: FiMail,      label: 'E-mail',        value: 'bconrado04@gmail.com' },
]

/** Contact details shown in the Contact section */
export const contactInfo = [
  { icon: FiMapPin, label: 'Localização', value: 'Maringá, Paraná — Brasil' },
  { icon: FiMail,   label: 'E-mail',      value: 'bconrado04@gmail.com' },
  { icon: FiPhone,  label: 'Telefone',    value: '+55 (44) 9 9819-8263' },
]

/** Social links used in Hero and Contact */
export const socials = [
  { icon: FiGithub,    label: 'GitHub',    href: 'https://github.com/BrundoCJ' },
  { icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/bruno-conrado-jeaniniiia75a18189/' },
]
