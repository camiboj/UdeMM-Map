export const alimentos = [
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    level: 0,
  },
  {
    id: "61.03",
    materia: "Análisis Matemático II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "62.01",
    materia: "Física I A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "63.02",
    materia: "Química I",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "61.08",
    materia: "Álgebra II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "75.01",
    materia: "Computación",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "62.04",
    materia: "Física II B",
    creditos: 6,
    correlativas: "61.03-62.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "63.13",
    materia: "Química Inorgánica",
    creditos: 8,
    correlativas: "63.02",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "75.12",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "61.03-61.08-75.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "63.14",
    materia: "Química Orgánica",
    creditos: 10,
    correlativas: "63.13",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "76.45",
    materia: "Termodinámica de los Procesos",
    creditos: 10,
    correlativas: "62.01-63.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "61.14",
    materia: "Matemática Especial para Ingeniería Química",
    creditos: 8,
    correlativas: "61.03-61.08",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "61.06",
    materia: "Probabilidad y Estadística",
    creditos: 4,
    correlativas: "61.03",
    categoria: "Materias Electivas",
    level: 4,
  },

  {
    id: "65.43",
    materia: "Ingeniería de las Instalaciones I",
    creditos: 6,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "76.42",
    materia: "Ingeniería de la Instalaciones II B",
    creditos: 4,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "76.46",
    materia: "Introducción a la Ingeniería Química",
    creditos: 6,
    correlativas: "76.45",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "76.40",
    materia: "Introducción a la Bioquímica",
    creditos: 2,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "63.05",
    materia: "Química Analítica",
    creditos: 8,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "76.03",
    materia: "Operaciones I",
    creditos: 10,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "63.07",
    materia: "Química Física II",
    creditos: 6,
    requiere: 90,
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "FYB2",
    materia: "Nutrición Aplicada a Tecnología de Alimentos",
    creditos: 2,
    correlativas: "76.40",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.12",
    materia: "Microbiología Industrial",
    creditos: 6,
    correlativas: "76.40",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.04",
    materia: "Operaciones Unitarias II",
    creditos: 8,
    correlativas: "76.03",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.05",
    materia: "Operaciones Unitarias III",
    creditos: 8,
    correlativas: "76.03",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "CEX2",
    materia: "Toxicología de Alimentos",
    creditos: 4,
    correlativas: "76.40",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "77.41",
    materia: "Gestión Ambiental en la Industria Alimentaria",
    creditos: 4,
    correlativas: "76.05",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "CEX1",
    materia: "Fundamentos de la Preservación de Alimentos I",
    creditos: 6,
    correlativas: "76.12-76.04-76.05",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "FYB1",
    materia: "Legislación Alimentaria",
    creditos: 2,
    correlativas: "CEX2-FYB2",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "76.08",
    materia: "Ingeniería de la Reacciones Químicas",
    creditos: 8,
    correlativas: "63.07-76.05",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "76.43",
    materia: "Instrumentación y Control",
    creditos: 6,
    correlativas: "76.04-76.05",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "CEX3",
    materia: "Fundamentos de la Preservación de Alimentos II",
    creditos: 6,
    correlativas: "CEX1",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "CEX4",
    materia: "Tecnología de Alimentos I",
    creditos: 6,
    correlativas: "CEX1-63.05",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "CEX5",
    materia: "Tecnología de Alimentos II",
    creditos: 4,
    correlativas: "CEX1-63.05",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "76.41",
    materia: "Biotecnología",
    creditos: 4,
    correlativas: "76.08-76.12",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "71.55",
    materia: "Economía de la Empresa Alimentaria",
    creditos: 6,
    correlativas: "76.05",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "71.56",
    materia:
      "Legislación y EjercicioElectivas Profesional de la Ingeniería de Alimentos",
    creditos: 2,
    correlativas: "71.55",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "CEX6",
    materia: "Microbiología de Alimentos",
    creditos: 6,
    correlativas: "76.12",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "CEX7",
    materia: "Tecnología de Alimentos III",
    creditos: 4,
    correlativas: "CEX1-63.05",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "AG1",
    materia: "Sistemas de Producción Agropecuaria y Calidad de alimentos",
    creditos: 4,
    correlativas: "CEX5",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "CEX8",
    materia: "Análisis avanzado de Alimentos",
    creditos: 8,
    correlativas: "CEX3",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "71.03",
    materia: "Estadística Técnica",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "71.31",
    materia: "Organización de la Producción",
    creditos: 6,
    correlativas: "CEX3-71.55",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "71.33",
    materia: "Comercialización de Productos Industriales",
    creditos: 4,
    correlativas: "CEX3-71.55",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "71.43",
    materia: "Logística Integral",
    creditos: 4,
    correlativas: "CEX3-71.55",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "71.44",
    materia: "Recursos Humanos",
    creditos: 4,
    correlativas: "FYB1-71.55",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "71.57",
    materia: "Métodos Cuantitativos Aplicados en Sistemas Agroalimentarios",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "72.14",
    materia: "Diseño de Producto",
    creditos: 4,
    correlativas: "CEX3-75.55",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "76.19",
    materia: "Procesos Fermentativos",
    creditos: 4,
    correlativas: "76.41",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "FYB3",
    materia:
      "Gestión Control y Garantía de la Calidad en la Industria Alimentaria",
    creditos: 4,
    correlativas: "71.55",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "78.xx",
    materia: "Idioma",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "76.90",
    materia: "Tesis de Grado de Ingeniería de Alimentos",
    creditos: 12,
    correlativas: "CEX1",
    categoria: "Fin de Carrera (Obligatorio)",
    level: -1,
  },
  {
    id: "76.44",
    materia: "Práctica Profesional",
    creditos: 4,
    correlativas: "CEX1",
    categoria: "Fin de Carrera (Obligatorio)",
    level: -1,
  },
];
