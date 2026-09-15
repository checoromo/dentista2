export const WA_LINKS = {
  hero: "https://wa.me/523331899008?text=Hola,%20vi%20la%20p%C3%A1gina%20y%20quiero%20agendar%20una%20cita",
  float: "https://wa.me/523331899008?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20una%20cita%20dental",
  services: "https://wa.me/523331899008?text=Hola,%20no%20estoy%20seguro%20qu%C3%A9%20tratamiento%20necesito,%20%C2%BFme%20ayudas%3F",
  doctora: "https://wa.me/523331899008?text=Hola,%20tengo%20una%20pregunta%20para%20la%20Dra.%20Amparo%20Pe%C3%B1a",
  agendar: "https://wa.me/523331899008?text=Hola,%20quiero%20agendar%20mi%20cita",
  ubicacion: "https://wa.me/523331899008?text=Hola,%20quiero%20confirmar%20disponibilidad%20para%20una%20cita",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Dra.Amparo.Pena/",
  instagram: "https://www.instagram.com/dra_amparopena/",
};

export const HERO_SLIDES = [
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1789440413/banner-reducido_kkffdb.avif",
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1789440413/ban2-red2_l4skbi.avif",
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1789440414/ban3-red_vlqsjs.avif",
];

export const AVATARS = [
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1787281614/cl1_jseajb.avif",
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1787281613/cl2_q8eu9h.avif",
  "https://res.cloudinary.com/darqvjyxa/image/upload/v1787281613/cl3_zwcvxn.avif",
];

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "svc-1",
    title: "Limpieza dental con ultrasonido",
    desc: "Remoción del sarro sin dolor.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437150/limpieza-ultrasonido_lbrtqo.avif",
    alt: "Limpieza dental con ultrasonido",
  },
  {
    id: "svc-2",
    title: "Periodoncia",
    desc: "Tratamiento para las enfermedades de las Encías.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437150/periodoncia_metqhd.avif",
    alt: "Tratamiento de periodoncia",
  },
  {
    id: "svc-3",
    title: "Endodoncia",
    desc: "Extirpación del nervio que puede causar dolor o infección, tratando de salvar la pieza afectada.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437149/endodoncia_gb1vlg.avif",
    alt: "Tratamiento de endodoncia",
  },
  {
    id: "svc-4",
    title: "Prótesis fija",
    desc: "Rehabilitación de 1 o más dientes (Carillas, Coronas de Porcelana, Puentes, etc.).",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437146/protesis-fija_pljh1l.avif",
    alt: "Prótesis fija, carillas y coronas de porcelana",
  },
  {
    id: "svc-5",
    title: "Prótesis removible",
    desc: "Solución estética y funcional para reponer piezas dentales ausentes.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437146/protesis-removible_rampfb.avif",
    alt: "Prótesis removible",
  },
  {
    id: "svc-6",
    title: "Carillas de porcelana",
    desc: "Mejora la forma, el color y la apariencia de tus dientes con carillas diseñadas para lograr una sonrisa natural, armónica y personalizada.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437148/cairllas-porcelana_qd3zef.avif",
    alt: "Carillas de porcelana para una sonrisa estética",
  },
  {
    id: "svc-7",
    title: "Rayos X",
    desc: "Como complemento en el Diagnóstico.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437147/rayosx_p8bily.avif",
    alt: "Rayos X en el consultorio",
  },
  {
    id: "svc-8",
    title: "Blanqueamiento dental",
    desc: "Aclaramiento profesional seguro para una sonrisa más luminosa y natural.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437148/blanqueamiento_pml3nn.avif",
    alt: "Blanqueamiento dental profesional",
  },
  {
    id: "svc-9",
    title: "Guarda oclusal",
    desc: "Para proteger contra el rechinamiento (bruxismo) y a la vez como relajante muscular.",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789437150/guarda_eirirz.avif",
    alt: "Guarda oclusal relajante",
  },
];

export interface FacilityItem {
  id: number;
  title: string;
  sub: string;
  img: string;
  alt: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    id: 1,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486725/5_vfelko.avif",
    alt: "Instalaciones del consultorio dental de la Dra. Amparo Peña",
  },
  {
    id: 2,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486724/4_eh5mxu.avif",
    alt: "Área clínica e instalaciones del consultorio dental",
  },
  {
    id: 3,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486723/3_qbhg6n.avif",
    alt: "Equipo y sillón dental del consultorio",
  },
  {
    id: 4,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486723/2_jflu5e.avif",
    alt: "Instalaciones y equipo odontológico",
  },
  {
    id: 5,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486721/1_prqydq.avif",
    alt: "Área de atención dental en planta baja",
  },
  {
    id: 6,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486720/7_bwsu92.avif",
    alt: "Consultorio dental equipado y moderno",
  },
  {
    id: 7,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486721/8_f0ogz8.avif",
    alt: "Espacios limpios y cómodos del consultorio",
  },
  {
    id: 8,
    title: "Dra. Amparo Peña",
    sub: "Av. de las Rosas 430, Chapalita Oriente",
    img: "https://res.cloudinary.com/darqvjyxa/image/upload/v1789486720/6_oxqik6.avif",
    alt: "Acceso y detalles del consultorio en Chapalita Oriente",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "¿Necesito cita o puedo llegar directo?",
    a: "Se atiende con cita para que no esperes y la doctora dedique el tiempo completo a tu caso. Escríbenos por WhatsApp y te damos el horario disponible más cercano.",
  },
  {
    q: "Tengo años sin ir al dentista y me da pena. ¿Me van a regañar?",
    a: "No. Es más común de lo que crees y la doctora está acostumbrada a retomar casos así. La primera visita es una valoración, sin juicios: se revisa en qué estado estás y se arma un plan por etapas.",
  },
  {
    q: "Me da miedo el dentista. ¿Qué hacen al respecto?",
    a: "Se te explica cada paso antes de hacerlo y se trabaja al ritmo que toleres. Con más de 30 años de práctica, la doctora ha atendido a muchos pacientes con ansiedad dental.",
  },
  {
    q: "¿Atienden niños?",
    a: "Sí, la atención es de odontología integral para niños y adultos: revisiones, resinas, selladores y tratamientos preventivos.",
  },
  {
    q: "¿Cuánto cuesta el tratamiento?",
    a: "El costo depende de lo que se encuentre en la valoración, porque cada boca es distinta. Escríbenos por WhatsApp diciéndonos qué necesitas y te orientamos.",
  },
  {
    q: "¿Tengo que pagar todo de una vez?",
    a: "Se aceptan efectivo, tarjeta Visa o Mastercard, transferencia y depósito bancario. Coméntalo por WhatsApp para ver qué te acomoda.",
  },
  {
    q: "¿Dónde me estaciono?",
    a: "El consultorio tiene estacionamiento propio en planta baja, sobre Av. de las Rosas 430 en Chapalita Oriente.",
  },
];
