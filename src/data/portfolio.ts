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
  ],
};
