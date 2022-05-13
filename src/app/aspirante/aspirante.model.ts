export interface Aspirante {
  id: string;
  nombre: string;
  apellidos: string;
  alias: string;
  ci: string;
  edad: number;
  sexo: string;
  provincia: string;
  municipio: string;
  direccion: string;
  correo: string;
  telefono: string;
  raza: string;
  estatura: number;
  peso: number;
  estado_civil: string;
  hijos: string;
  licencia: boolean;
  categoria_licencia: string;
  militancia: string;
  nivel_escolaridad: string;
  titulo_graduado: string;
  experiencia_laboral: number;
  otros_estudios: string;
  trayectoria_laboral: string;
  situacion_laboral: string;
  centro_trabajo: string;
  organismo_trabajo: string;
  cargo_trabajo: string;
  categoria_trabajo: string;
  direccion_trabajo: string;
  telefono_trabajo: string;
  otros_oficios: string;
  estado: string;
  causa_eliminacion: string;
  causa_no_apto: string;
  preseleccion: string;
  fecha_inicio_proceso_investigativo: string;
  fecha_fin_proceso_investigativo: string;
  resultado_proceso_investigativo: string;
  curriculum_vitae: boolean;
  fecha_curriculum_vitae: string;
  autobiografia: boolean;
  fecha_autobiografia: string;
  titulo: boolean;
  fecha_titulo: string;
  chequeo_medico: boolean;
  fecha_chequeo_medico: string;
  avales_cdr: boolean;
  fecha_avales_cdr: string;
  avales_centro_trabajo: boolean;
  fecha_avales_centro_trabajo: string;
  fotos: boolean;
  fecha_fotos: string;
  anexo1: boolean;
  fecha_anexo1: string;
  antecedentes: boolean;
  fecha_antecedentes: string;
  evaluacion_psicologica: string;
  comite_admision: string;
  mixta: string;
  cargo_mixta: string;
  fecha_mixta: string;
  causa_devolucion: string;
  fecha_devolucion: string;
}
