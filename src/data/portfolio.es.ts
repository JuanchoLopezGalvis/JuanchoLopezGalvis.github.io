// Traducción al español del contenido de portfolio.ts.
// Solo se traduce el texto visible: el código de los fragmentos,
// los nombres propios y los enlaces se toman de portfolio.ts.

export interface CollabTranslation {
  partner?: string;
  title: string;
  role: string;
  period?: string;
  description: string;
  contributions: string[];
  /** Títulos de los fragmentos, en el mismo orden que en portfolio.ts. */
  snippetTitles?: string[];
}

export const PORTFOLIO_ES = {
  developer: {
    title: "Estudiante de Ingeniería de Sistemas · Bases de datos y backend",
    status: " DISPONIBLE PARA PRÁCTICAS Y PROYECTOS",
    location: "Bogotá, Colombia // UTC-05",
    bio: "Estudiante de Ingeniería de Sistemas (5.º semestre) en la Universidad El Bosque, Bogotá, enfocado en bases de datos y desarrollo backend. En Bases de Datos 2 trabajo con Oracle 19c en control de concurrencia, indexación y optimización de consultas, particionamiento de tablas, SQL avanzado y PL/SQL. También desarrollo aplicaciones web con Python (Django) y Java (Spring Boot), administro sistemas Linux y he trabajado como asistente de ingeniero en una empresa enfocada en blockchain, además de reparar y dar mantenimiento a computadores de forma independiente.",
    focus: "Bases de datos (Oracle, PostgreSQL), backend y Linux",
    interests: ["Blockchain y Web3"],
    quote:
      '"El código es como el humor: si tienes que explicarlo, es malo." – Cory House',
    specs: {
      Uptime: "42 días, 13 horas, 37 min",
      Memory: "16 GB",
    },
  },

  presentation: {
    title: "Presentación",
    description: "Video de presentación",
  },

  /** Textos de la sección de habilidades (categorías, nombres, experiencia, nivel). */
  skillText: {
    Languages: "Lenguajes",
    "Database Engines": "Motores de bases de datos",
    "Systems & Tools": "Sistemas y herramientas",
    "MongoDB Query Language": "MongoDB Query Language (MQL)",
    "Linux (Ubuntu) & Bash": "Linux (Ubuntu) y Bash",
    "Git & GitHub": "Git y GitHub",
    "Pacemaker / Corosync clusters": "Clústeres Pacemaker / Corosync",
    Projects: "Proyectos",
    Coursework: "Asignaturas",
    "BD2 project": "Proyecto BD2",
    Migrations: "Migraciones",
    "Daily use": "Uso diario",
    Labs: "Laboratorios",
    "OS lab": "Lab. de SO",
    ADVANCED: "AVANZADO",
    INTERMEDIATE: "INTERMEDIO",
    BASIC: "BÁSICO",
  } as Record<string, string>,

  collabs: {
    "bd2-pollos-hermanos": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Los Pollos Hermanos — Sistema de gestión de una granja de pollos de engorde (proyecto final)",
      role: "Desarrollador full-stack (equipo de 3)",
      description:
        "Proyecto final de Bases de Datos 2: un sistema web para manejar una granja de pollos de engorde (galpones, lotes, alimentación, sanidad, personal, gastos, ventas, cartera, portal de clientes con pago en línea, pago en efectivo registrado por el personal, seguimiento diario del crecimiento y auditoría). Las reglas del negocio viven en PostgreSQL, Spring Boot las expone como API REST y Angular la consume.",
      contributions: [
        "Modelo en PostgreSQL dividido en 12 módulos instalables, con las reglas del negocio en funciones, procedimientos y triggers de PL/pgSQL (validaciones, cambio de estado de los lotes al vender, pagos que no superan el saldo).",
        "Seguridad con mínimo privilegio: los objetos pertenecen a un rol sin login y la aplicación usa un rol que solo tiene DML; Hibernate solo valida el esquema (ddl-auto=validate).",
        "Módulo de auditoría genérico: una función que engancha dinámicamente triggers de auditoría por fila y de TRUNCATE a todas las tablas, con una tabla de auditoría que no se puede modificar.",
        "Scripts de pruebas SQL por módulo que corren dentro de una transacción que se deshace (183 casos) y 205 pruebas unitarias en Java.",
        "API REST en Spring Boot 4 / Java 21 con JWT y roles por permisos, documentación con Swagger, pago en línea con Wompi (sandbox) y comprobantes por correo con Thymeleaf; MongoDB para el seguimiento diario del crecimiento.",
        "Front en Angular 20 + PrimeNG con menús según los permisos, y despliegue con systemd, nginx y dos máquinas virtuales en VirtualBox (PostgreSQL y MongoDB).",
      ],
      snippetTitles: [
        "Trigger: el lote pasa a VENDIDO cuando se acaban sus aves",
        "Auditoría dinámica: un trigger por tabla (fragmento)",
      ],
    },
    "bd2-banco-andino": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Banco Andino — Concurrencia, índices y SQL avanzado (Oracle 19c)",
      role: "Desarrollador (en pareja)",
      description:
        "Laboratorio integrador sobre un esquema bancario simulado. Reproducimos fallas reales de producción con dos sesiones concurrentes, medimos los planes de ejecución antes y después de cada corrección y resolvimos un ticket final sobre transferencias descuadradas y un tablero ejecutivo lento.",
      contributions: [
        "Reproduje una actualización perdida (dos retiros y solo se aplica uno) y la corregí con bloqueo pesimista (SELECT ... FOR UPDATE) y con bloqueo optimista usando una columna de versión.",
        "Repartí una cola de trabajo entre dos procesos con FOR UPDATE SKIP LOCKED, detecté bloqueos de tabla causados por llaves foráneas sin índice y analicé deadlocks.",
        "Optimicé consultas con EXPLAIN PLAN / DBMS_XPLAN: orden de columnas en índices compuestos, índices basados en funciones, rangos de fechas en vez de TRUNC() (costo 238 → 4), índices de cobertura y clustering factor.",
        "Medí el costo de los índices en la escritura (50.000 inserts: 2,23 s con índices vs. 0,50 s sin ellos) para definir el conjunto final de índices.",
        "Escribí SQL analítico y jerárquico: funciones de ventana, CTE recursivas vs. CONNECT BY, MERGE para ajustes de fin de mes, PIVOT y LISTAGG.",
      ],
      snippetTitles: [
        "Bloqueo optimista con columna de versión",
        "Cola de trabajo sin choques: SKIP LOCKED",
        "Filtros que aprovechan los índices",
        "CTE recursiva: saldo por línea de negocio",
      ],
    },
    "bd2-particiones": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Índices locales vs. globales en tablas particionadas",
      role: "Desarrollador (en pareja)",
      description:
        "Laboratorio que muestra cómo reaccionan los índices locales y globales cuando una tabla particionada cambia de estructura. A una tabla de ventas particionada por rango de fechas se le crea un índice local y uno global, y se compara su estado antes y después de eliminar una partición completa.",
      contributions: [
        "Construí una tabla de ventas particionada por RANGE sobre la fecha de venta (enero, febrero, marzo y una partición para el resto).",
        "Mostré que el índice local sigue utilizable porque cada partición conserva su propio segmento de índice.",
        "Mostré que el índice global queda UNUSABLE después de DROP PARTITION y hay que reconstruirlo a mano.",
        "Concluí el costo de mantenimiento: los índices locales son baratos de mantener y los globales son frágiles ante cambios de estructura.",
      ],
      snippetTitles: ["Índice local vs. global después de DROP PARTITION"],
    },
    "bd2-plsql-ferreteria": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Inventario y ventas de una ferretería en PL/SQL",
      role: "Desarrollador (equipo de 3)",
      description:
        "Lógica de negocio del inventario y las ventas de una ferretería, escrita completamente en PL/SQL de Oracle: procedimientos almacenados, funciones, triggers, un trigger INSTEAD OF sobre una vista y un paquete, cada uno con sus casos de prueba.",
      contributions: [
        "Procedimientos para registrar productos, ajustar el stock por bodega (entrada, salida y conteo físico) y crear pedidos, validando el cupo de crédito y los clientes inactivos.",
        "Funciones de stock disponible, cupo disponible, descuentos y precio del producto, además de un registro centralizado de errores.",
        "Triggers para auditar cambios de precio, exigir un margen mínimo y mover el stock al insertar líneas de pedido.",
        "Un trigger compuesto que recalcula el total de cada pedido una sola vez por sentencia, evitando el error de tabla mutante.",
        "PKG_VENTAS.SP_FACTURAR_PEDIDO: factura un pedido con bloqueo de filas, un cursor sobre sus líneas, validación de descuento y cupo, y ROLLBACK a un SAVEPOINT con registro del error.",
      ],
      snippetTitles: [
        "Trigger compuesto: un recálculo del total por sentencia",
        "PKG_VENTAS.SP_FACTURAR_PEDIDO (fragmento)",
      ],
    },
    "bd2-mql-mflix": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Taller MQL — Consultas, agregación e índices (MongoDB sample_mflix)",
      role: "Desarrollador (equipo de 3)",
      description:
        "Taller de MongoDB Query Language sobre el dataset sample_mflix (películas y comentarios): consultas find sobre arreglos y campos anidados, pipelines de agregación de varias etapas, operaciones de escritura, un índice diseñado con la regla ESR y medido con explain(), y el diseño del modelo de documentos para dos casos reales.",
      contributions: [
        "Consultas find sobre arreglos y documentos anidados: $all + $size, $ne sobre arreglos, $exists/$in con $or, expresiones regulares sin distinguir mayúsculas y countDocuments con el mismo filtro.",
        "Pipelines de agregación con $match, $unwind, $group, $project, $round, $slice y $sort: estadísticas por género, top de directores y películas por década (year - year % 10).",
        "Top 10 de películas más comentadas con $lookup entre comments y movies, ordenando y limitando antes del cruce para que solo se busquen 10 documentos.",
        "Creé una colección nueva con $switch + $out, y luego updateMany ($set + $inc) y deleteMany, reportando matchedCount, modifiedCount y deletedCount.",
        "Índice compuesto con la regla ESR (Equality, Sort, Range) y comparación de explain('executionStats') antes y después: COLLSCAN con ordenamiento en memoria vs. IXSCAN.",
        "Diseño del modelo de documentos de una plataforma de domicilios (datos embebidos, referencias extendidas, patrón de atributos) y de una red IoT de calidad del aire en Bogotá (patrones bucket, computed y schema versioning), con documentos JSON de ejemplo.",
      ],
      snippetTitles: [
        "Top 10 de películas más comentadas ($lookup)",
        "Estadísticas por género (solo ratings numéricos)",
        "Índice ESR: COLLSCAN -> IXSCAN",
      ],
    },
    "bd2-mongodb-airbnb": {
      partner: "Universidad El Bosque · Bases de Datos 2",
      title: "Taller MongoDB — CRUD y agregación sobre sample_airbnb",
      role: "Desarrollador (en pareja)",
      description:
        "30 ejercicios sobre la colección listingsAndReviews de sample_airbnb, ejecutados en VS Code con la extensión de MongoDB: inserciones, consultas con filtros, actualizaciones y pipelines de agregación para analizar precios, amenities, tipos de propiedad y reseñas.",
      contributions: [
        "Inserciones con insertOne/insertMany: objetos address anidados, arreglos de amenities, precios Decimal128 y un _id duplicado para mostrar el error de unicidad.",
        "Consultas con $gt, $lt, $and, $in, expresiones regulares, búsqueda en arreglos, $size, sort/limit y proyecciones sobre campos anidados (address.country, address.market).",
        "Actualizaciones con $set, $push, $inc, $pull y un upsert que inserta el listing cuando no existe.",
        "Agregaciones: precio promedio por país, top 5 de amenities con $unwind, listings por tipo de propiedad, conversión con $toInt y puntaje promedio de reseñas de los listings con 10 o más reseñas.",
        "Rangos de precio con $bucket, últimas reseñas contadas por año con $year, capacidad promedio de huéspedes por tipo de propiedad y el diseño de un $lookup para unir los listings con una colección hosts.",
      ],
      snippetTitles: [
        "Top 5 de amenities del dataset",
        "Listings por rango de precio ($bucket)",
        "Upsert: actualizar o insertar",
      ],
    },
  } as Record<string, CollabTranslation>,

  commands: {
    help: { desc: "Lista todos los comandos disponibles" },
    about: { desc: "Muestra la bio y el resumen del perfil" },
    skills: { desc: "Muestra los medidores de habilidades" },
    collabs: { desc: "Muestra los proyectos y trabajos en equipo" },
    neofetch: { desc: "Muestra el banner ASCII y las especificaciones del equipo" },
    spotify: { desc: "Muestra la canción que suena en Spotify" },
    contact: { desc: "Muestra la información de contacto" },
    links: { desc: "Muestra los enlaces a GitHub, LinkedIn, X/Twitter y correo" },
    theme: { desc: "Cambia el tema (green, amber, cyan, dracula, mono)" },
    matrix: { desc: "Activa o desactiva la lluvia digital estilo Matrix" },
    crt: { desc: "Activa o desactiva el efecto de líneas CRT" },
    sfx: { desc: "Activa o desactiva los sonidos al escribir" },
    clear: { desc: "Limpia la pantalla de la terminal", usage: "clear [o cls]" },
    gui: { desc: "Cambia al panel visual (TUI)" },
    cli: { desc: "Cambia al modo de línea de comandos" },
    presentation: { desc: "Reproduce el video de presentación" },
    lang: { desc: "Cambia el idioma del portafolio (inglés / español)" },
  } as Record<string, { desc: string; usage?: string }>,
};
