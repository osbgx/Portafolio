export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface PipelineStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  icon: string;
}

export const services: readonly ServiceItem[] = [
  { title: 'Arquitectura de Datos', desc: 'Diseño de infraestructura escalable, modelado conceptual, gobierno de datos y estrategia de información empresarial.', icon: 'server-stack' },
  { title: 'Data Engineering', desc: 'Pipelines ETL/ELT con Python, Spark y Airflow. Integraciones entre sistemas, automatización de flujos y arquitectura escalable de datos.', icon: 'arrows-right-left' },
  { title: 'Data Analysis & Viz', desc: 'Dashboards interactivos, reporting automatizado y visualizaciones con Power BI, Superset y Metabase. Convierto datos en decisiones.', icon: 'chart-bar-square' },
  { title: 'Data Science & ML', desc: 'Modelos predictivos, análisis estadístico, clustering y clasificación. Scikit-learn, estadística aplicada y experimentación.', icon: 'chart-bar' },
  { title: 'Deep Learning & IA', desc: 'Redes neuronales, NLP, computer vision y modelos de lenguaje. PyTorch, TensorFlow y transformers para problemas complejos.', icon: 'cpu-chip' },
  { title: 'MLOps & Data Quality', desc: 'Orquestación con Airflow y n8n, monitoreo de pipelines, calidad de datos, gobierno y deployment de modelos en producción.', icon: 'cog-6-tooth' },
];

export const pipelineSteps: readonly PipelineStep[] = [
  { step: '01', title: 'Fuentes de Datos', desc: 'Bases de datos, archivos planos, APIs y sistemas externos. Capturo datos desde cualquier fuente.', icon: 'circle-stack' },
  { step: '02', title: 'Procesamiento', desc: 'Limpieza, transformación y validación con pipelines automatizados en Python, SQL y Spark.', icon: 'arrow-path' },
  { step: '03', title: 'Almacenamiento', desc: 'Data warehouses, data lakes y almacenamiento optimizado para consultas analíticas y modelos.', icon: 'server' },
  { step: '04', title: 'Consumo', desc: 'Dashboards, APIs y modelos en producción. Los datos llegan a quien los necesita, cuando los necesita.', icon: 'chart-bar-square' },
];

export const metrics: readonly Metric[] = [
  { value: 'Full Stack', label: 'del pipeline al dashboard y al modelo', icon: 'circle-stack' },
  { value: '100%', label: 'del ciclo del dato: ingeniería, análisis y ML', icon: 'chart-bar-square' },
  { value: '24/7', label: 'automatizaciones que mantienen los datos en movimiento', icon: 'clock' },
];
