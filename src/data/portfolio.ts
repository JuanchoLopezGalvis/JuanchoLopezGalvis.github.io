export interface CodeSnippet {
  title: string;
  lang: string;
  code: string;
}

export interface CollabItem {
  id: string;
  partner: string;
  partnerType:
    | "Open Source Org"
    | "Startup"
    | "Tech Studio"
    | "Research Team"
    | "Academic Project";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  team?: string[];
  snippets?: CodeSnippet[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface PresentationData {
  title: string;
  description: string;
  videoUrl: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Juan Diego López Galvis",
    handle: "juancholopezgalvis",
    title: "Systems Engineering Student · Databases & Backend",
    alias: "juandi@ubuntu",
    email: "juandi2006yadi@gmail.com",
    github: "https://github.com/JuanchoLopezGalvis",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    location: "Bogota, Colombia // UTC-05",
    status: " OPEN FOR INTERNSHIPS & PROJECTS",
    CLI_EMOJI: "🫐",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Systems Engineering student (5th semester) at Universidad El Bosque, Bogotá, focused on databases and backend development. In Databases 2 I work with Oracle 19c on concurrency control, indexing and query tuning, table partitioning, advanced SQL and PL/SQL. I also build web apps with Python (Django) and Java (Spring Boot), administer Linux systems, and have worked as an engineer's assistant at a blockchain-focused company, plus independent PC repair & maintenance.",
    focus: "Databases (Oracle, PostgreSQL), Backend & Linux",
    interests: ["Blockchain & Web3"],
    quote:
      '"Code is like humor. When you have to explain it, it’s bad." – Cory House',
asciiBanner: `
     _ _   _   _    _   _
    | | | | | / \\  | \\ | |
 _  | | | | |/ _ \\ |  \\| |
| |_| | |_| / ___ \\| |\\  |
 \\___/ \\___/_/   \\_\\_| \\_|

 _     ___  ____  _____ _____
| |   / _ \\|  _ \\| ____|__  /
| |  | | | | |_) |  _|   / /
| |__| |_| |  __/| |___ / /_
|_____\\___/|_|   |_____/____|
`,

    specs: {
      OS: "Ubuntu 26.04 LTS",
      Kernel: "Linux Kernel 7.0",
      Uptime: "42 days, 13 hours, 37 mins",
      Shell: "bash 5.3.3 (x86_64-pc-linux-gnu)",
      Terminal: "Alacritty / Web-TUI Astro",
      WM: "i3-gaps / yabai",
      Editor: "Eclipse / VS Code",
      CPU: "Ryzen 7 5800 HS",
      Memory: "16 GB",
    },
  },

  presentation: {
    title: "Presentation",
    description:
      "Presentation video",
    videoUrl: "/videos/presentation.mp4",
  } as PresentationData,

  skills: [
    {
      category: "Languages",
      icon: "⚡",
      skills: [
        { name: "SQL & PL/SQL (Oracle)", level: 80, experience: "BD1 · BD2", tag: "ADVANCED" },
        { name: "Python (Django)", level: 70, experience: "Projects", tag: "INTERMEDIATE" },
        { name: "Java (Spring Boot)", level: 65, experience: "Coursework", tag: "INTERMEDIATE" },
        { name: "PL/pgSQL (PostgreSQL)", level: 50, experience: "BD2 project", tag: "INTERMEDIATE" },
        { name: "JavaScript / TypeScript", level: 55, experience: "Web", tag: "INTERMEDIATE" },
        { name: "MongoDB Query Language", level: 45, experience: "BD2 project", tag: "BASIC" },
      ],
    },
    {
      category: "Database Engines",
      icon: "🗄️",
      skills: [
        { name: "Oracle Database 19c", level: 80, experience: "BD2", tag: "ADVANCED" },
        { name: "MySQL", level: 65, experience: "Migrations", tag: "INTERMEDIATE" },
        { name: "PostgreSQL", level: 60, experience: "BD2 project", tag: "INTERMEDIATE" },
        { name: "SQLite", level: 60, experience: "Django", tag: "INTERMEDIATE" },
        { name: "MongoDB", level: 45, experience: "BD2 project", tag: "BASIC" },
      ],
    },
    {
      category: "Systems & Tools",
      icon: "🐧",
      skills: [
        { name: "Linux (Ubuntu) & Bash", level: 80, experience: "Daily use", tag: "ADVANCED" },
        { name: "Git & GitHub", level: 70, experience: "Projects", tag: "INTERMEDIATE" },
        { name: "Docker / VirtualBox", level: 60, experience: "Labs", tag: "INTERMEDIATE" },
        { name: "Pacemaker / Corosync clusters", level: 55, experience: "OS lab", tag: "INTERMEDIATE" },
      ],
    },
  ] as SkillCategory[],

  collabs: [
    {
      id: "bd2-pollos-hermanos",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "Los Pollos Hermanos — Broiler Chicken Production & Sales Management System",
      role: "Database & Infrastructure Lead / Developer",
      period: "OCT – NOV 2026",
      status: "COMPLETED",
      team: [
        "Dylan Arturo Mancipe Celis (Project Manager · Business Expert)",
        "Juan Diego López Galvis (Database & Infrastructure Lead)",
        "Gabriela Poveda Garcia (Frontend, QA & Documentation Lead)",
      ],
      description:
        "Final project for Databases 2: a web system that centralizes production and sales on a broiler chicken farm, from the arrival of each batch to the collection of the sale, to know the real cost and profitability of every batch. PostgreSQL holds the business logic in procedures, functions and triggers; MongoDB is used for a single module, daily growth tracking; a Spring Boot REST API and an Angular front end sit on top, with the databases on Linux virtual machines.",
      contributions: [
        "Eight modules: poultry houses and batches; feeding by growth stage (pre-starter, starter, grower, finisher); health; expenses including processing (slaughter and plucking) cost; staff; sales (customers, orders by batch, sales); receivables and deliveries with partial payments and sandbox online payments; and daily growth tracking.",
        "Real batch cost from five components (day-old chicks, feed valued at the weighted average cost per bag, vitamins and medicines, processing, other expenses), giving cost per bird sold and batch profitability.",
        "Business rules enforced inside PostgreSQL with transactions and exceptions: house capacity, feed allowed by batch age, daily mortality with an alert above the expected 5%, balances and overdue receivables.",
        "Chose PostgreSQL with a weighted decision matrix (4.85/5 vs. MySQL 3.50, MariaDB 3.65, SQL Server 3.65), led by procedural logic and transaction control, and confirmed it with a sensitivity analysis.",
        "MongoDB only for daily growth tracking, whose structure changes from day to day; no data is stored in both databases, and the backend only saves tracking for active batches that exist in PostgreSQL.",
        "As database & infrastructure lead: data model and PL/pgSQL, least-privilege roles (the app connects with a DML-only role), a generic audit module, SQL tests run inside rolled-back transactions (183 cases), the two Ubuntu VMs and the Git workflow.",
      ],
      techStack: [
        "PostgreSQL",
        "PL/pgSQL",
        "MongoDB",
        "Spring Boot",
        "Java 21",
        "Angular",
        "VirtualBox",
        "Git",
      ],
      snippets: [
        {
          title: "Real batch cost: five components",
          lang: "sql",
          code: `CREATE FUNCTION fn_costo_lote(p_id_lote BIGINT)
RETURNS TABLE (costo_pollitos NUMERIC, costo_alimento NUMERIC, costo_sanidad NUMERIC,
               costo_beneficio NUMERIC, otros_gastos NUMERIC, costo_total NUMERIC)
LANGUAGE sql STABLE AS $$
    WITH c AS (
        SELECT l.cantidad_inicial * l.costo_pollito AS pollitos,
               COALESCE((SELECT SUM(ROUND(ca.cantidad_bultos * ca.costo_unitario, 2))
                           FROM consumo_alimento ca WHERE ca.id_lote = l.id_lote), 0) AS alimento,
               COALESCE((SELECT SUM(ROUND(a.dosis * a.costo_unitario, 2))
                           FROM aplicacion_sanitaria a WHERE a.id_lote = l.id_lote), 0) AS sanidad,
               fn_costo_beneficio_lote(l.id_lote) AS beneficio,
               COALESCE((SELECT SUM(g.monto) FROM gasto g WHERE g.id_lote = l.id_lote), 0) AS otros
        FROM lote l WHERE l.id_lote = p_id_lote
    )
    SELECT pollitos, alimento, sanidad, beneficio, otros,
           pollitos + alimento + sanidad + beneficio + otros
    FROM c;
$$;`,
        },
        {
          title: "Trigger: a batch becomes SOLD when its birds run out",
          lang: "plpgsql",
          code: `CREATE FUNCTION fn_trg_venta_lotes()
RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE lote l SET estado = 'VENDIDO'
    FROM detalle_pedido d
    WHERE d.id_pedido = NEW.id_pedido AND l.id_lote = d.id_lote
      AND l.estado = 'LISTO_PARA_VENTA' AND fn_aves_disponibles(l.id_lote) = 0;
    RETURN NULL;
END;
$$;

CREATE TRIGGER tgr_ai_venta_lotes
    AFTER INSERT ON venta
    FOR EACH ROW EXECUTE FUNCTION fn_trg_venta_lotes();`,
        },
      ],
      link: "https://github.com/JuanchoLopezGalvis/pollos_hermanos_back",
      asciiLogo: `   ( o>   LOS POLLOS HERMANOS
  //\\     PostgreSQL + MongoDB
  V_/_    Spring Boot // Angular`,
    },
    {
      id: "bd2-banco-andino",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "Banco Andino — Concurrency, Indexing & Advanced SQL (Oracle 19c)",
      role: "Developer (pair work)",
      period: "SEP 2026",
      status: "COMPLETED",
      team: ["Santiago Muñoz Villate", "Juan Diego López Galvis"],
      description:
        "Integrative lab on a simulated banking schema. We reproduced real production failures with two concurrent sessions, measured execution plans before and after each fix, and solved a final incident ticket about unbalanced transfers and a slow executive dashboard.",
      contributions: [
        "Reproduced a lost update (two withdrawals, only one applied) and fixed it with pessimistic locking (SELECT ... FOR UPDATE) and optimistic locking with a version column.",
        "Split a work queue between two processes with FOR UPDATE SKIP LOCKED, detected table locks caused by unindexed foreign keys, and analyzed deadlocks.",
        "Tuned queries with EXPLAIN PLAN / DBMS_XPLAN: composite index column order, function-based indexes, date ranges instead of TRUNC() (cost 238 → 4), covering indexes and clustering factor.",
        "Measured the write cost of indexes (50,000 inserts: 2.23 s with indexes vs 0.50 s without) to define the final index set.",
        "Wrote analytic and hierarchical SQL: window functions, recursive CTEs vs CONNECT BY, MERGE for month-end adjustments, PIVOT and LISTAGG.",
      ],
      techStack: ["Oracle 19c", "SQL", "SQL Developer", "EXPLAIN PLAN", "Transactions"],
      snippets: [
        {
          title: "Optimistic locking with a version column",
          lang: "sql",
          code: `-- Nadie bloquea nada: el choque se detecta al escribir
UPDATE cuenta
   SET saldo   = saldo - 300000,
       version = version + 1
 WHERE id_cuenta = 1001
   AND version   = 0;   -- la versión que se leyó antes
-- 0 filas afectadas = otra sesión ya modificó la cuenta:
-- releer saldo y versión y reintentar, nunca asumir éxito.`,
        },
        {
          title: "Work queue without collisions: SKIP LOCKED",
          lang: "sql",
          code: `SELECT id_tarea, id_transferencia
  FROM tarea_compensacion
 WHERE estado = 'PENDIENTE'
   AND ROWNUM <= 5
   FOR UPDATE SKIP LOCKED;`,
        },
        {
          title: "Index-friendly filters",
          lang: "sql",
          code: `-- La consulta filtra por UPPER(nombre): índice basado en función
CREATE INDEX ix_cliente_nombre_upper ON cliente (UPPER(nombre));

-- Rango de fechas en vez de TRUNC(): costo 238 -> 4
SELECT COUNT(*) FROM transferencia
 WHERE fecha_transf >= DATE '2026-03-15'
   AND fecha_transf <  DATE '2026-03-16';`,
        },
        {
          title: "Recursive CTE: balance by business line",
          lang: "sql",
          code: `WITH arbol (id_producto, nombre, id_padre, nivel, linea_negocio) AS (
  SELECT id_producto, nombre, id_padre, 1, nombre
    FROM catalogo_producto
   WHERE id_padre IS NULL
  UNION ALL
  SELECT c.id_producto, c.nombre, c.id_padre, a.nivel + 1, a.linea_negocio
    FROM catalogo_producto c
    JOIN arbol a ON c.id_padre = a.id_producto
)
SELECT a.linea_negocio,
       ROUND(SUM(c.saldo)) AS saldo_total,
       COUNT(*)            AS cuentas_activas
  FROM arbol a
  JOIN cuenta c ON c.id_producto = a.id_producto
 WHERE c.estado = 'ACTIVA'
 GROUP BY a.linea_negocio
 ORDER BY saldo_total DESC;`,
        },
      ],
      asciiLogo: `+----------------------+
| BANCO ANDINO  // BD2 |
| A ──lock──> B        |
+----------------------+`,
    },
    {
      id: "bd2-particiones",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "Local vs Global Indexes on Partitioned Tables",
      role: "Developer (pair work)",
      period: "SEP 2026",
      status: "COMPLETED",
      team: ["Dylan Arturo Mancipe Celis", "Juan Diego López Galvis"],
      description:
        "Lab showing how local and global indexes react when a partitioned table changes structure. A sales table partitioned by date range gets a local index and a global index, and we compare their status before and after dropping a whole partition.",
      contributions: [
        "Built a sales table partitioned by RANGE on the sale date (January, February, March and a catch-all partition).",
        "Showed that the local index stays usable because each partition keeps its own index segment.",
        "Showed that the global index becomes UNUSABLE after DROP PARTITION and has to be rebuilt manually.",
        "Concluded the maintenance trade-off: local indexes are cheap to maintain, global indexes are fragile under structural changes.",
      ],
      techStack: ["Oracle 19c", "Partitioning", "Indexes", "Data Dictionary"],
      snippets: [
        {
          title: "Local vs global index after DROP PARTITION",
          lang: "sql",
          code: `CREATE INDEX idx_cliente_local ON ventas (id_cliente) LOCAL;
CREATE INDEX idx_monto_global  ON ventas (monto) GLOBAL;

ALTER TABLE ventas DROP PARTITION p_2026_01;

-- El local se revisa por partición; el global queda UNUSABLE
SELECT index_name, partition_name, status FROM user_ind_partitions;
SELECT index_name, status FROM user_indexes WHERE table_name = 'VENTAS';

ALTER INDEX idx_monto_global REBUILD;`,
        },
      ],
      asciiLogo: `[P_2026_01][P_2026_02][P_2026_03][P_MAX]
   LOCAL  : VALID per partition
   GLOBAL : UNUSABLE -> REBUILD`,
    },
    {
      id: "bd2-plsql-ferreteria",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "Hardware Store Inventory & Sales in PL/SQL",
      role: "Developer (team of 3)",
      period: "OCT 2026",
      status: "COMPLETED",
      team: [
        "Dylan Arturo Mancipe Celis",
        "Juan Diego López Galvis",
        "Gabriela Poveda Garcia",
      ],
      description:
        "Business logic for a hardware store's inventory and sales, written entirely in Oracle PL/SQL: stored procedures, functions, triggers, an INSTEAD OF view trigger and a package, each with its own test cases.",
      contributions: [
        "Procedures to register products, adjust stock per warehouse (entry, exit and physical count) and create orders, validating credit limits and inactive customers.",
        "Functions for available stock, available credit, discounts and product price, plus centralized error logging.",
        "Triggers for auditing price changes, enforcing minimum margin and moving stock when order lines are inserted.",
        "A compound trigger that recalculates each order total once per statement, avoiding the mutating-table error.",
        "PKG_VENTAS.SP_FACTURAR_PEDIDO: invoices an order with row locks, a cursor over its lines, discount and credit validation, and SAVEPOINT rollback with error logging.",
      ],
      techStack: ["Oracle 19c", "PL/SQL", "Triggers", "Packages", "Cursors"],
      snippets: [
        {
          title: "Compound trigger: one total recalculation per statement",
          lang: "plsql",
          code: `CREATE OR REPLACE TRIGGER TRG_DETALLE_TOTAL
FOR INSERT OR UPDATE OR DELETE ON DETALLE_PEDIDO
COMPOUND TRIGGER
    TYPE t_pedidos IS TABLE OF NUMBER INDEX BY PLS_INTEGER;
    g_pedidos  t_pedidos;

    AFTER EACH ROW IS
    BEGIN
        IF INSERTING OR UPDATING THEN
            g_pedidos(:NEW.id_pedido) := :NEW.id_pedido;
        END IF;
        IF DELETING OR UPDATING THEN
            g_pedidos(:OLD.id_pedido) := :OLD.id_pedido;
        END IF;
    END AFTER EACH ROW;

    AFTER STATEMENT IS
        v_id  PLS_INTEGER;
    BEGIN
        v_id := g_pedidos.FIRST;
        WHILE v_id IS NOT NULL LOOP
            UPDATE PEDIDO
            SET    total = (SELECT NVL(SUM(subtotal), 0)
                            FROM   DETALLE_PEDIDO
                            WHERE  id_pedido = v_id)
            WHERE  id_pedido = v_id;
            v_id := g_pedidos.NEXT(v_id);
        END LOOP;
        g_pedidos.DELETE;
    END AFTER STATEMENT;
END TRG_DETALLE_TOTAL;`,
        },
        {
          title: "PKG_VENTAS.SP_FACTURAR_PEDIDO (fragment)",
          lang: "plsql",
          code: `SAVEPOINT sp_facturar;
...
FOR reg IN c_lineas LOOP
    vn_subtotal := vn_subtotal + reg.subtotal;
    vn_lineas   := vn_lineas + 1;
END LOOP;

vn_descuento := FN_CALCULAR_DESCUENTO(vn_id_cliente, vn_subtotal);
vn_total     := vn_subtotal - vn_descuento;
vn_cupo      := FN_CUPO_DISPONIBLE(vn_id_cliente);

IF vn_total > vn_cupo THEN
    RAISE_APPLICATION_ERROR(-20053,
        'Cupo insuficiente: total ' || vn_total ||
        ', cupo disponible ' || vn_cupo);
END IF;
...
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK TO sp_facturar;
        SP_REGISTRAR_ERROR('PKG_VENTAS.SP_FACTURAR_PEDIDO',
                           'Pedido ' || p_id_pedido);
        RAISE;`,
        },
      ],
      asciiLogo: `[ PKG_VENTAS ]
  SP_ -> FN_ -> TRG_
  PL/SQL // ORACLE 19c`,
    },
    {
      id: "bd2-mql-mflix",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "MQL Workshop — Queries, Aggregation & Indexes (MongoDB sample_mflix)",
      role: "Developer (team of 3)",
      period: "NOV 2026",
      status: "COMPLETED",
      team: [
        "Dylan Arturo Mancipe Celis",
        "Juan Diego López Galvis",
        "Gabriela Poveda Garcia",
      ],
      description:
        "MongoDB Query Language workshop on the sample_mflix dataset (movies and comments): find queries over arrays and nested fields, multi-stage aggregation pipelines, write operations, an index tuned with the ESR rule and measured with explain(), plus document-model designs for two real-world cases.",
      contributions: [
        "find queries over arrays and nested documents: $all + $size, $ne on arrays, $exists/$in with $or, case-insensitive regex, and countDocuments with the same filter.",
        "Aggregation pipelines with $match, $unwind, $group, $project, $round, $slice and $sort: stats per genre, top directors and movies per decade (year - year % 10).",
        "Top 10 most commented movies with $lookup between comments and movies, sorting and limiting before the join so only 10 documents are looked up.",
        "Built a new collection with $switch + $out, then updateMany ($set + $inc) and deleteMany, reporting matchedCount, modifiedCount and deletedCount.",
        "Compound index following the ESR rule (Equality, Sort, Range) and compared explain('executionStats') before and after: COLLSCAN with in-memory sort vs IXSCAN.",
        "Document-model design for a food-delivery platform (embedded data, extended references, attribute pattern) and an IoT air-quality network in Bogotá (bucket, computed and schema-versioning patterns), with sample JSON documents.",
      ],
      techStack: ["MongoDB", "MQL", "Aggregation Pipeline", "Indexes", "Schema Design"],
      snippets: [
        {
          title: "Top 10 most commented movies ($lookup)",
          lang: "js",
          code: `db.comments.aggregate([
  { $group: { _id: "$movie_id", num_comentarios: { $sum: 1 } } },
  { $sort: { num_comentarios: -1 } },
  { $limit: 10 },   // limitar antes del $lookup: solo 10 cruces
  { $lookup: { from: "movies", localField: "_id",
               foreignField: "_id", as: "pelicula" } },
  { $unwind: "$pelicula" },
  { $project: { _id: 0, titulo: "$pelicula.title",
                anio: "$pelicula.year", num_comentarios: 1 } }
]);`,
        },
        {
          title: "Stats per genre (only numeric ratings)",
          lang: "js",
          code: `db.movies.aggregate([
  { $match: { "imdb.rating": { $type: "number" } } },
  { $unwind: "$genres" },
  { $group: {
      _id: "$genres",
      num_peliculas: { $sum: 1 },
      promedio: { $avg: "$imdb.rating" },
      maximo: { $max: "$imdb.rating" }
  } },
  { $match: { num_peliculas: { $gt: 500 } } },
  { $project: { num_peliculas: 1, maximo: 1,
                promedio: { $round: ["$promedio", 2] } } },
  { $sort: { promedio: -1 } }
]);`,
        },
        {
          title: "ESR index: COLLSCAN -> IXSCAN",
          lang: "js",
          code: `// E: genres (igualdad)  S: imdb.rating (orden)  R: year (rango)
db.movies.createIndex({ genres: 1, "imdb.rating": -1, year: 1 });

db.movies.find(
  { genres: "Drama", year: { $gte: 2000, $lte: 2010 },
    "imdb.rating": { $gte: 8 } }
).sort({ "imdb.rating": -1 }).limit(10)
 .explain("executionStats");
// comparar totalDocsExamined, executionTimeMillis y winningPlan`,
        },
      ],
      link: "/docs/taller-mql-mflix.pdf",
      asciiLogo: `{ $match } -> { $unwind }
   -> { $group } -> { $sort }
   MQL // sample_mflix`,
    },
    {
      id: "bd2-mongodb-airbnb",
      partner: "Universidad El Bosque · Databases 2",
      partnerType: "Academic Project",
      title: "MongoDB Workshop — CRUD & Aggregation on sample_airbnb",
      role: "Developer (pair work)",
      period: "NOV 2026",
      status: "COMPLETED",
      team: ["Dylan Arturo Mancipe Celis", "Juan Diego López Galvis"],
      description:
        "30 exercises on the sample_airbnb listings collection, run in VS Code with the MongoDB extension: inserts, filtered queries, updates and aggregation pipelines to analyze prices, amenities, property types and reviews.",
      contributions: [
        "Inserts with insertOne/insertMany: nested address objects, amenities arrays, Decimal128 prices, and a duplicate _id to show the uniqueness error.",
        "Queries with $gt, $lt, $and, $in, regex, array matching, $size, sort/limit and projections over nested fields (address.country, address.market).",
        "Updates with $set, $push, $inc, $pull and an upsert that inserts the listing when it does not exist.",
        "Aggregations: average price per country, top 5 amenities with $unwind, listings per property type, $toInt conversion, average review score for listings with 10+ reviews.",
        "Price ranges with $bucket, last reviews counted per year with $year, average guest capacity per property type, and a $lookup design to join listings with a hosts collection.",
      ],
      techStack: ["MongoDB", "MQL", "CRUD", "Aggregation Pipeline", "VS Code"],
      snippets: [
        {
          title: "Top 5 amenities in the dataset",
          lang: "js",
          code: `db.listingsAndReviews.aggregate([
  { $unwind: "$amenities" },
  { $group: { _id: "$amenities", frecuencia: { $sum: 1 } } },
  { $sort: { frecuencia: -1 } },
  { $limit: 5 }
]);`,
        },
        {
          title: "Listings by price range ($bucket)",
          lang: "js",
          code: `db.listingsAndReviews.aggregate([
  { $bucket: {
      groupBy: "$price",
      boundaries: [0, 101, 301, 1001],
      default: "1000+",
      output: { cantidad: { $sum: 1 } }
  } }
]);`,
        },
        {
          title: "Upsert: update or insert",
          lang: "js",
          code: `db.listingsAndReviews.updateOne(
  { name: "Mansión de Prueba" },
  { $set: { price: NumberDecimal("1500.00"),
            "address.country": "United States" } },
  { upsert: true }
);`,
        },
      ],
      link: "/docs/taller-mongodb-crud-airbnb.pdf",
      asciiLogo: `+------------------------+
| sample_airbnb // BD2   |
| insert find update agg |
+------------------------+`,
    },
  ] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "List all available terminal commands",
      usage: "help",
    },
    {
      name: "about",
      desc: "Display bio, engineering philosophy & summary",
      usage: "about [or cat bio.txt]",
    },
    {
      name: "skills",
      desc: "Display interactive skill proficiency meters",
      usage: "skills [or cat skills.sh]",
    },
    {
      name: "collabs",
      desc: "Display list of team collaborations & partner projects",
      usage: "collabs [or cat collabs.md]",
    },
    {
      name: "neofetch",
      desc: "Display ASCII banner & hardware system specs",
      usage: "neofetch",
    },
    {
      name: "spotify",
      desc: "Display Spotify Now Playing song activity & Audio RPC status",
      usage: "spotify [or np, nowplaying]",
    },
    {
      name: "contact",
      desc: "Display contact info and social handles",
      usage: "contact [or mail]",
    },
    {
      name: "links",
      desc: "Display interactive links to GitHub, LinkedIn, X/Twitter & Email",
      usage: "links [or socials, urls]",
    },
    {
      name: "theme",
      desc: "Switch theme (green, amber, cyan, dracula, mono)",
      usage: "theme <green|amber|cyan|dracula|mono>",
    },
    {
      name: "matrix",
      desc: "Toggle digital rain CRT overlay animation",
      usage: "matrix",
    },
    { name: "crt", desc: "Toggle CRT scanline screen effect", usage: "crt" },
    {
      name: "sfx",
      desc: "Toggle audio feedback keypress sounds",
      usage: "sfx",
    },
    {
      name: "clear",
      desc: "Clear terminal buffer screen",
      usage: "clear [or cls]",
    },
    {
      name: "gui",
      desc: "Switch window layout to TUI Visual Dashboard",
      usage: "gui",
    },
    {
      name: "cli",
      desc: "Switch window layout to Interactive CLI Mode",
      usage: "cli",
    },
    {
      name: "presentation",
      desc: "Play the personal presentation video",
      usage: "presentation",
    },
    {
      name: "lang",
      desc: "Switch portfolio language (English / Spanish)",
      usage: "lang <en|es>",
    },
  ],
};
