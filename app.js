const quotes = [
  "S&OP no es una reunion.",
  "Un forecast perfecto no existe.",
  "Supply Chain es tomar decisiones bajo presion.",
  "El GAP se gestiona. No se esconde.",
];

const rotatingVisuals = {
  home: [
    [
      ["Participantes", "Ventas · Marketing · Supply · Finanzas · Board"],
      ["Flujo mensual", "Senales → Reviews → Decisiones → Un plan"],
      ["Trade-offs", "Servicio · Margen · Cash · Riesgo · Cliente"],
    ],
    [
      ["Decision room", "Un mismo numero, multiples impactos"],
      ["Down - Top", "Estrategia baja, realidad operativa sube"],
      ["One Process", "Menos silos, mas decisiones visibles"],
    ],
    [
      ["Executive S&OP", "El board destraba prioridades y costos"],
      ["Supply reality", "Capacidad, materiales, transporte y restricciones"],
      ["Demand signal", "Promos, clientes, sesgos y escenarios"],
    ],
  ],
  journey: [
    [
      ["Activity Review", "Actividades, promociones y supuestos comerciales."],
      ["Demand Review", "Forecast probable, gaps visibles y escenarios."],
      ["S&OP Ejecutivo", "Trade-offs decididos con impacto en KPIs."],
    ],
    [
      ["Forecast vs Target", "Separar lo probable de lo deseado."],
      ["KPIs", "Entender si una mejora mueve el problema."],
      ["Leadership", "Preguntas incomodas antes de ejecutar."],
    ],
    [
      ["Trade-offs", "Servicio, costo, cash, margen y riesgo."],
      ["Supply Review", "Convertir deseo comercial en plan ejecutable."],
      ["Decision pressure", "Decidir con informacion incompleta y tiempo real."],
    ],
  ],
  simulators: [
    [
      ["Forecast vs objetivo", "Acciones reales para cerrar GAP sin maquillar el numero."],
      ["Stock Challenge", "Lectura de patrones antes de reaccionar tarde."],
      ["Quiz S&OP", "Preguntas cortas para fijar conceptos clave."],
    ],
    [
      ["KPIs vivos", "Cada accion de forecast muestra costo y beneficio."],
      ["Diagnostico", "Stock entrena lectura, no decision impulsiva."],
      ["Criterio", "La sala de decisiones fuerza trade-offs."],
    ],
    [
      ["Replay", "Volver a probar cambia la lectura del negocio."],
      ["Feedback", "Cada respuesta explica el por que."],
      ["Score", "El aprendizaje se mide por precision conceptual."],
    ],
  ],
  master: [
    [
      ["Mes 1-2", "Plan estable, promocion y primeras decisiones de negocio."],
      ["Mes 3-4", "Falla de proveedor, cash e inventario bajo presion."],
      ["Mes 5-6", "Cliente inesperado, transporte y consecuencias acumuladas."],
    ],
    [
      ["Impactos diferidos", "Una decision buena o mala vuelve meses despues."],
      ["Alertas", "El simulador avisa cuando aparece una consecuencia."],
      ["Scorecard", "Servicio, margen, cash, costo y riesgo."],
    ],
    [
      ["CEO pressure", "El negocio pide resultado sin esperar certeza perfecta."],
      ["Customer voice", "El cliente siente las promesas incumplidas."],
      ["Finance lens", "Volumen sin margen no siempre es una victoria."],
    ],
  ],
  cases: [
    [
      ["Crisis reales", "Cuando el proceso se prueba bajo presion."],
      ["Errores de planning", "Forecast, stock y promesas que dejan aprendizajes."],
      ["Liderazgo", "Decidir claro cuando ningun KPI cuenta toda la historia."],
    ],
    [
      ["Promesa comercial", "Vender sin supply termina en costo o cliente herido."],
      ["Stock escondido", "El exceso tambien puede ser una crisis silenciosa."],
      ["Calidad", "Cumplir el numero no justifica romper confianza."],
    ],
    [
      ["Reunion dificil", "El conflicto funcional puede ordenar el plan."],
      ["Leccion", "La crisis suele mostrar una premisa que faltaba."],
      ["Reflexion", "El mejor proceso aprende despues del golpe."],
    ],
  ],
  ai: [
    [
      ["Forecasting IA", "Deteccion de senales, anomalias y sesgos."],
      ["Copilotos S&OP", "Preguntas mejores, minutas claras y escenarios accionables."],
      ["Decision intelligence", "Menos reporte manual, mas criterio de negocio."],
    ],
    [
      ["Demand sensing", "Senales externas para reaccionar antes."],
      ["Anomaly detection", "Alertas cuando el patron deja de ser normal."],
      ["Inventory AI", "Cobertura correcta para servicio y cash."],
    ],
    [
      ["Premisas", "IA ayuda a encontrar supuestos sin dueno."],
      ["Escenarios", "Triggers, riesgos y alternativas mejor ordenadas."],
      ["Copiloto", "No decide: hace mejores preguntas."],
    ],
  ],
};

const heroVisualSlides = [
  {
    title: "Sincronizacion Down - Top",
    tag: "ONE Process",
    type: "ladder",
    cards: [
      ["01", "Activity Review", "Marketing + Ventas"],
      ["02", "Demand Review", "Demand Planning + Comercial"],
      ["03", "Supply & Demand Review", "Supply, Demand, Operaciones"],
      ["04", "Comite de Negocio", "Marketing, Ventas, SC, Finanzas"],
      ["05", "S&OP Ejecutivo", "Board + Gerencia General"],
    ],
  },
  {
    title: "One Plan Alignment",
    tag: "ALIGN",
    type: "network",
    cards: [
      ["Ventas", "Demanda y clientes"],
      ["Supply", "Capacidad y materiales"],
      ["Finanzas", "Margen y cash"],
      ["Board", "Prioridades y riesgos"],
    ],
  },
  {
    title: "Forecast vs Target GAP",
    tag: "GAP",
    type: "gap",
    cards: [
      ["Target", "115"],
      ["Forecast", "96"],
      ["GAP", "19 puntos"],
      ["Accion", "Premisas + responsables"],
    ],
  },
  {
    title: "KPI Pulse",
    tag: "DASHBOARD",
    type: "kpi",
    cards: [
      ["Servicio", "84%"],
      ["Margen", "28%"],
      ["Cash", "72%"],
      ["Riesgo", "34%"],
    ],
  },
];

const progressKey = "sopArenaProgress_v3";
const dailyKey = "sopArenaDaily_v1";
const coreMiniGames = ["forecast", "stock", "supply", "executive", "spike", "meeting"];
const levels = [
  { name: "Junior Planner", xp: 0, lessons: 0, miniGames: 0, simulationScore: 0 },
  { name: "Demand Analyst", xp: 500, lessons: 3, miniGames: 1, simulationScore: 0 },
  { name: "Supply Planner", xp: 1200, lessons: 6, miniGames: 3, simulationScore: 0 },
  { name: "S&OP Manager", xp: 2200, lessons: 9, miniGames: 4, simulationScore: 60 },
  { name: "Supply Chain Leader", xp: 3500, lessons: 9, miniGames: 6, simulationScore: 75 },
  { name: "SC Director", xp: 5200, lessons: 9, miniGames: 6, simulationScore: 90 },
  { name: "World Class SC Director", xp: 7500, lessons: 9, miniGames: 6, simulationScore: 110 },
];

const badges = [
  { name: "One Plan Thinker", icon: "◎", description: "Conectaste areas, premisas y un plan unico." },
  { name: "Gap Hunter", icon: "⌕", description: "Hiciste visible el GAP y lo convertiste en acciones." },
  { name: "Inventory Guardian", icon: "▣", description: "Leiste patrones de stock antes de reaccionar tarde." },
  { name: "Margin Protector", icon: "$", description: "Protegiste margen en decisiones bajo presion." },
  { name: "Trade-off Master", icon: "⚖", description: "Balanceaste servicio, costo, riesgo y margen." },
  { name: "Crisis Leader", icon: "⚡", description: "Terminaste una simulacion con consecuencias reales." },
  { name: "No Blame Culture", icon: "◇", description: "Aprendiste sin buscar culpables ni esconder problemas." },
  { name: "SC Director Mindset", icon: "♛", description: "Alcanzaste pensamiento ejecutivo de Supply Chain." },
];

const crosswordWordPool = [
  ["FORECAST", "Estimacion de demanda futura basada en datos y premisas."],
  ["INVENTORY", "Stock disponible para cubrir demanda y variabilidad."],
  ["LEADTIME", "Tiempo entre ordenar y recibir o producir."],
  ["PROCUREMENT", "Proceso de abastecimiento y compra."],
  ["WAREHOUSE", "Punto fisico donde se almacena producto."],
  ["DISTRIBUTION", "Movimiento de producto hacia clientes o canales."],
  ["SUPPLIER", "Proveedor que entrega materiales o servicios."],
  ["CAPACITY", "Limite de produccion o ejecucion disponible."],
  ["REPLENISHMENT", "Reposicion para recuperar cobertura."],
  ["BOTTLENECK", "Restriccion que limita el flujo total."],
  ["ALIGNMENT", "Coordinacion entre areas sobre un mismo plan."],
  ["CONSENSUS", "Acuerdo funcional sobre premisas y decisiones."],
  ["TRADEOFF", "Decision que protege un objetivo y acepta un costo."],
  ["BASELINE", "Demanda esperada antes de eventos o acciones."],
  ["BIAS", "Error sistematico en una direccion."],
  ["DEMAND", "Necesidad esperada o real del mercado."],
  ["SUPPLY", "Capacidad y recursos para cumplir demanda."],
  ["EXECUTIVE", "Nivel donde se deciden trade-offs de negocio."],
  ["ONEPLAN", "Unico plan compartido por toda la organizacion."],
  ["SAFETYSTOCK", "Buffer para absorber variabilidad."],
  ["CYCLESTOCK", "Inventario usado entre reposiciones."],
  ["STOCKOUT", "Quiebre por falta de disponibilidad."],
  ["SERVICE", "Cumplimiento de la promesa al cliente."],
  ["BUFFER", "Proteccion contra variabilidad."],
  ["FILLRATE", "Porcentaje de demanda cubierta desde stock."],
  ["REORDERPOINT", "Nivel que dispara una reposicion."],
  ["MARGIN", "Rentabilidad despues de costos relevantes."],
  ["CASHFLOW", "Flujo de caja disponible para operar."],
  ["OTIF", "Entrega a tiempo y completa."],
  ["WASTE", "Perdida por exceso, vencimiento o mala ejecucion."],
  ["RISK", "Probabilidad e impacto de eventos negativos."],
  ["LOGISTICS", "Gestion de transporte, almacenamiento y flujo fisico."],
  ["TRANSPORT", "Movimiento fisico de productos."],
  ["NETWORK", "Estructura de nodos, rutas y capacidades."],
  ["RESILIENCE", "Capacidad de absorber shocks operativos."],
  ["OWNERSHIP", "Responsabilidad clara sobre una decision."],
  ["ESCALATION", "Subir una decision al nivel correcto."],
  ["COLLABORATION", "Trabajo coordinado entre funciones."],
  ["INFLUENCE", "Capacidad de mover decisiones sin autoridad directa."],
  ["NEGOTIATION", "Gestion de acuerdos entre objetivos en conflicto."],
  ["AUTOMATION", "Uso de tecnologia para ejecutar tareas repetibles."],
  ["PREDICTIVE", "Capacidad de anticipar eventos futuros."],
  ["OPTIMIZATION", "Busqueda del mejor balance entre restricciones."],
  ["ANALYTICS", "Uso de datos para entender y decidir."],
  ["COPILOT", "Asistente digital para ordenar analisis y decisiones."],
  ["SIMULATION", "Modelo para probar escenarios antes de ejecutar."],
  ["SCENARIO", "Version posible del futuro con premisas propias."],
  ["TRIGGER", "Condicion que activa una accion."],
  ["PREMISE", "Supuesto que explica un numero o decision."],
  ["CONSTRAINT", "Limite que condiciona el plan."],
  ["VARIABILITY", "Cambio natural o incierto de demanda o supply."],
  ["VOLATILITY", "Inestabilidad que dificulta planificar."],
  ["PRIORITY", "Orden elegido cuando no se puede cumplir todo."],
  ["QUALITY", "Condicion de producto apto para cliente."],
  ["SHORTAGE", "Falta de material o producto."],
  ["OVERSTOCK", "Exceso de inventario frente a demanda."],
  ["BACKLOG", "Pedido pendiente de entregar."],
  ["CHANNEL", "Ruta comercial o cliente agrupado."],
  ["PROMOTION", "Actividad comercial que altera demanda."],
  ["LAUNCH", "Introduccion de producto al mercado."],
  ["PORTFOLIO", "Conjunto de productos gestionados."],
  ["SKU", "Unidad especifica de producto."],
  ["PLANNER", "Rol que integra datos, premisas y decisiones."],
  ["DIRECTOR", "Rol ejecutivo que acepta trade-offs mayores."],
  ["DASHBOARD", "Vista de KPIs para seguimiento."],
  ["ANOMALY", "Dato o patron fuera de lo esperado."],
  ["SENSING", "Lectura temprana de senales de mercado."],
  ["PLANNING", "Proceso de anticipar y coordinar acciones."],
  ["EXECUTION", "Ejecucion real del plan definido."],
  ["REVIEW", "Instancia de analisis y decision."],
  ["MEETING", "Espacio de alineacion, si deriva en decisiones."],
  ["TARGET", "Objetivo aspiracional del negocio."],
  ["GAP", "Diferencia entre forecast y target o capacidad."],
  ["BALANCE", "Estado donde KPIs y riesgos estan compensados."],
  ["CUSTOMER", "Cliente afectado por decisiones de servicio."],
  ["FINANCE", "Funcion que traduce volumen a valor."],
  ["PRODUCTION", "Transformacion de materiales en producto."],
  ["MATERIAL", "Insumo necesario para producir."],
  ["SOURCE", "Origen de abastecimiento."],
  ["ROUTE", "Camino logistico elegido."],
  ["NODE", "Punto de red logistico o productivo."],
  ["COST", "Recurso economico consumido por una accion."],
  ["VALUE", "Resultado de negocio generado por el plan."],
  ["DECISION", "Eleccion explicita con consecuencias."],
  ["LEADERSHIP", "Capacidad de decidir y alinear bajo presion."],
];

const crosswordRoots = [
  ["DEMAND", "demanda"],
  ["SUPPLY", "supply"],
  ["FORECAST", "forecast"],
  ["TARGET", "target"],
  ["GAP", "gap"],
  ["STOCK", "stock"],
  ["INVENTORY", "inventario"],
  ["SERVICE", "servicio"],
  ["MARGIN", "margen"],
  ["CASH", "cash"],
  ["RISK", "riesgo"],
  ["COST", "costo"],
  ["CAPACITY", "capacidad"],
  ["SUPPLIER", "proveedores"],
  ["CUSTOMER", "clientes"],
  ["CHANNEL", "canales"],
  ["PORTFOLIO", "portfolio"],
  ["PROMO", "promociones"],
  ["QUALITY", "calidad"],
  ["TRANSPORT", "transporte"],
  ["NETWORK", "red logistico-productiva"],
  ["FINANCE", "finanzas"],
  ["SALES", "ventas"],
  ["OPS", "operaciones"],
  ["SOP", "S&OP"],
  ["LEADER", "liderazgo"],
  ["AI", "inteligencia artificial"],
  ["DATA", "datos"],
];

const crosswordDimensions = [
  ["PLAN", "Plan usado para coordinar {label} con el resto del negocio."],
  ["REVIEW", "Instancia donde se revisa {label} con premisas, riesgos y acciones."],
  ["BIAS", "Sesgo o distorsion que puede afectar las decisiones sobre {label}."],
  ["RISK", "Exposicion que debe hacerse visible al decidir sobre {label}."],
  ["KPI", "Indicador que permite evaluar el desempeno de {label}."],
  ["GAP", "Diferencia relevante que exige accion sobre {label}."],
  ["FLOW", "Flujo que conecta {label} con ejecucion, clientes y resultados."],
  ["CYCLE", "Ciclo de gestion usado para revisar y mejorar {label}."],
  ["MODEL", "Representacion analitica para decidir mejor sobre {label}."],
  ["SIGNAL", "Senal temprana que ayuda a anticipar cambios en {label}."],
  ["ALERT", "Aviso que indica que {label} requiere atencion o escalacion."],
  ["ACTION", "Decision concreta para mover {label} hacia el plan acordado."],
  ["TRADEOFF", "Tension de negocio que aparece al optimizar {label}."],
  ["BUFFER", "Proteccion operativa para absorber variabilidad en {label}."],
  ["VALUE", "Contribucion de {label} al resultado economico del negocio."],
  ["SYNC", "Sincronizacion necesaria para que {label} no quede aislado."],
  ["CONTROL", "Mecanismo para monitorear {label} y corregir desvio."],
  ["SCENARIO", "Version posible del futuro usada para probar {label}."],
];

crosswordDimensions.forEach(([suffix, clueTemplate]) => {
  crosswordRoots.forEach(([root, label]) => {
    const word = `${root}${suffix}`.replace(/[^A-Z]/g, "");
    if (word.length <= 22 && !crosswordWordPool.some(([existing]) => existing === word)) {
      crosswordWordPool.push([word, clueTemplate.replace("{label}", label)]);
    }
  });
});

const defaultProgress = {
  xp: 0,
  level: "Junior Planner",
  completedSections: [],
  completedMiniGames: [],
  bestScores: {},
  badges: [],
  lastSimulationScore: 0,
  totalDecisions: 0,
  balancedDecisions: 0,
  stockoutsAvoided: 0,
  marginProtected: 0,
};

let progress = loadProgress();
let dailyContent;
let crosswordActiveWord = null;
let crosswordDirection = "across";
let crosswordStartedAt = Date.now();
let crosswordMistakes = 0;
let crosswordTimerInterval = null;

const lessons = [
  {
    num: "01",
    title: "Que es S&OP",
    short: "Un proceso para alinear demanda, supply, finanzas y estrategia.",
    theory: [
      "Definicion: S&OP es el proceso que convierte informacion dispersa en un solo plan de negocio.",
      "Por que importa: alinea volumen, valor, capacidad, inventario, clientes y cash antes de ejecutar.",
      "Decisiones que habilita: prioridades comerciales, restricciones de supply, inversiones y riesgos aceptados.",
      "KPIs afectados: servicio, margen, costo SC, cash, inventario, satisfaccion y riesgo.",
      "Error comun: tratarlo como una reunion de reporte donde cada area defiende su propio numero.",
      "Ejemplo: Ventas quiere crecer 12%, Supply solo puede entregar 7%; S&OP obliga a decidir mix, fechas, costo extra o gap visible.",
    ],
    takeaway: "Clave: S&OP crea sincronizacion, no presentaciones.",
    unlock: "Mini juego recomendado: Reunion S&OP.",
  },
  {
    num: "02",
    title: "Revision de demanda",
    short: "De senales comerciales a demanda discutible y accionable.",
    theory: [
      "Definicion: Demand Review transforma senales comerciales en demanda probable con premisas claras.",
      "Por que importa: evita que promociones, lanzamientos o clientes clave entren tarde al plan.",
      "Decisiones que habilita: acciones para cerrar gaps, validar upside, ajustar mix o activar escenarios.",
      "KPIs afectados: forecast accuracy, servicio, stock, margen, satisfaccion y riesgo.",
      "Error comun: subir el forecast para que coincida con el target sin acciones reales.",
      "Ejemplo: target 100, forecast 92; la reunion debe mostrar el GAP de 8 y proponer acciones con responsables.",
    ],
    takeaway: "Clave: forecast probable y target aspiracional son conversaciones distintas.",
    unlock: "Mini juego recomendado: Forecast vs objetivo.",
  },
  {
    num: "03",
    title: "Revision de supply",
    short: "Traducir deseo comercial en capacidad, materiales y restricciones.",
    theory: [
      "Definicion: Supply Review valida si la demanda puede ejecutarse con planta, proveedores, stock y transporte.",
      "Por que importa: una restriccion temprana permite decidir antes de prometer de mas.",
      "Decisiones que habilita: priorizar clientes, cambiar mix, comprar capacidad, ajustar fechas o aceptar costo extra.",
      "KPIs afectados: servicio, OTIF, inventario, costo SC, cash, riesgo y satisfaccion.",
      "Error comun: ocultar capacidad limitada para evitar conflicto y terminar pagando urgencias.",
      "Ejemplo: demanda 120, capacidad 105; Supply debe mostrar alternativas: overtime, mix rentable, proveedor alternativo o gap.",
    ],
    takeaway: "Clave: una restriccion bien explicada no frena el negocio; lo enfoca.",
    unlock: "Mini juego recomendado: Restricciones de supply.",
  },
  {
    num: "04",
    title: "S&OP ejecutivo",
    short: "Donde los trade-offs se convierten en decisiones de negocio.",
    theory: [
      "Definicion: Executive S&OP es donde los trade-offs preparados se convierten en decisiones de negocio.",
      "Por que importa: sin decision ejecutiva, los conflictos quedan vivos y bajan como urgencias a la operacion.",
      "Decisiones que habilita: aceptar costo, priorizar clientes, proteger margen, invertir capacidad o declarar gap.",
      "KPIs afectados: margen, servicio, cash, costo SC, riesgo, satisfaccion y crecimiento.",
      "Error comun: usar la reunion para revisar datos desde cero en lugar de elegir entre alternativas.",
      "Ejemplo: cumplir 100% servicio exige flota extra; el board decide si paga el costo o negocia nivel de servicio.",
    ],
    takeaway: "Clave: el S&OP ejecutivo debe destrabar, no solo escuchar.",
    unlock: "Mini juego recomendado: Decision ejecutiva.",
  },
  {
    num: "05",
    title: "Forecast vs objetivo",
    short: "Separar lo probable de lo deseado para gestionar el GAP.",
    theory: [
      "Definicion: Forecast es la demanda mas probable; target es la ambicion u objetivo del negocio.",
      "Por que importa: ocultar el GAP crea alineacion falsa y deja al negocio sin acciones.",
      "Decisiones que habilita: promociones, cambios de mix, capacidad adicional, negociacion comercial o aceptacion de gap.",
      "KPIs afectados: servicio, stock, margen, costo, cash, satisfaccion y forecast accuracy.",
      "Error comun: forzar forecast = target para evitar una conversacion incomoda.",
      "Ejemplo: target 100 y forecast 92; S&OP decide como cerrar 8 puntos y que costo/riesgo acepta.",
    ],
    takeaway: "Clave: un GAP visible es una oportunidad de decision.",
    unlock: "Mini juego recomendado: Forecast vs objetivo.",
  },
  {
    num: "06",
    title: "KPIs",
    short: "El tablero que muestra si una decision mejora o solo desplaza el problema.",
    theory: [
      "Definicion: KPIs son el tablero que muestra si una decision mejora el sistema o solo mueve el problema.",
      "Por que importa: ningun KPI cuenta toda la historia; servicio alto puede esconder sobrecosto o cash atrapado.",
      "Decisiones que habilita: ajustar inventario, priorizar servicio, proteger margen, reducir riesgo o invertir capacidad.",
      "KPIs afectados: todos interactuan: servicio, inventario, margen, costo SC, riesgo, cash y satisfaccion.",
      "Error comun: optimizar un KPI aislado, como bajar inventario, sin mirar quiebre de stock futuro.",
      "Ejemplo: subir safety stock mejora servicio, pero puede bajar cash y aumentar obsolescencia.",
    ],
    takeaway: "Clave: ningun KPI cuenta toda la historia solo.",
    unlock: "Mini juego recomendado: Desafio de stock.",
  },
  {
    num: "07",
    title: "Trade-offs",
    short: "La esencia del proceso: decidir que se protege y que costo se acepta.",
    theory: [
      "Definicion: un trade-off es elegir que se protege y que costo se acepta.",
      "Por que importa: en Supply Chain casi nunca hay una decision gratis; siempre hay tension entre objetivos.",
      "Decisiones que habilita: servicio vs costo, inventario vs cash, ventas vs margen, velocidad vs calidad.",
      "KPIs afectados: servicio, margen, costo, cash, riesgo, inventario y satisfaccion.",
      "Error comun: presentar una opcion como perfecta sin explicitar que KPI paga el costo.",
      "Ejemplo: abrir domingo salva OTIF, pero sube costo y riesgo de calidad; el board debe aprobar el trade-off.",
    ],
    takeaway: "Clave: la buena decision no elimina el costo; lo hace consciente.",
    unlock: "Mini juego recomendado: Decision ejecutiva.",
  },
  {
    num: "08",
    title: "Liderazgo",
    short: "Sostener el proceso cuando la presion empuja a improvisar.",
    theory: [
      "Definicion: liderazgo en Supply Chain es convertir conflicto funcional en decision entendible.",
      "Por que importa: bajo presion, las areas tienden a defenderse; el lider mantiene hechos, premisas y opciones claras.",
      "Decisiones que habilita: priorizar, escalar riesgos, pedir aprobacion y sostener acuerdos entre funciones.",
      "KPIs afectados: sincronizacion, satisfaccion, riesgo, servicio, margen y costo.",
      "Error comun: buscar culpables en vez de hacer visible la causa y la accion correctiva.",
      "Ejemplo: ante una falta de material, el lider no acusa; arma escenarios y define cliente, mix y comunicacion.",
    ],
    takeaway: "Clave: liderazgo es convertir conflicto funcional en una decision entendible.",
    unlock: "Mini juego recomendado: Reunion S&OP.",
  },
  {
    num: "09",
    title: "Decision bajo presion",
    short: "Pensar bajo incertidumbre, tiempo limitado y consecuencias futuras.",
    theory: [
      "Definicion: decidir bajo presion es actuar con incertidumbre, tiempo limitado y consecuencias futuras.",
      "Por que importa: esperar certeza perfecta suele llegar tarde y agrandar el costo operativo.",
      "Decisiones que habilita: activar escenarios, aceptar costo, renegociar promesas, priorizar clientes o proteger cash.",
      "KPIs afectados: servicio, margen, costo, riesgo, cash, satisfaccion y calidad.",
      "Error comun: improvisar sin dejar premisas, responsables ni aprendizaje para el siguiente ciclo.",
      "Ejemplo: un pico de demanda puede justificar stock extra hoy, pero tambien crear sobrestock si la senal era temporal.",
    ],
    takeaway: "Clave: aprender S&OP es aprender a dirigir bajo presion.",
    unlock: "Simulacion recomendada: Dirigi el negocio.",
  },
];

const lessonCheckpoints = [
  [
    {
      q: "En consumo masivo, Ventas planifica una promo agresiva, Supply arma produccion conservadora y Finanzas proyecta cash con otro volumen. Que problema resuelve S&OP?",
      options: ["Un problema de exactitud estadistica", "La falta de una verdad compartida para coordinar decisiones", "Un exceso de reuniones comerciales", "Una discusion solo operativa de planta"],
      answer: 1,
      explain: "S&OP sincroniza funciones alrededor de un plan operable. Las otras opciones reducen el problema a tecnica, reunion u operacion aislada.",
      feedback: ["La estadistica ayuda, pero el problema es de alineacion y decision.", "", "Mas reuniones no arreglan planes desconectados.", "Planta es parte del sistema, pero S&OP coordina todo el negocio."],
    },
    {
      q: "Dos areas acuerdan vender mas, pero no queda definido quien ajusta stock, capacidad ni cash. Cual es el riesgo principal?",
      options: ["Parecer alineados sin que nadie ejecute las decisiones necesarias", "Que el forecast sea demasiado probabilistico", "Que haya demasiada visibilidad de restricciones", "Que Finanzas participe demasiado temprano"],
      answer: 0,
      explain: "Sin decision, responsable y premisa, el plan unico es solo apariencia. La visibilidad temprana no es el problema: es la solucion.",
      feedback: ["", "El problema no es la probabilidad: es falta de ownership.", "Ver restricciones temprano evita caos.", "Finanzas temprano evita que el plan cierre en volumen pero falle en valor."],
    },
  ],
  [
    {
      q: "Un retailer informa una posible promo para bebidas, pero aun no confirmo exhibiciones ni precio. Comercial quiere sumar todo el volumen al forecast. Que corresponde?",
      options: ["Cargar todo porque existe oportunidad", "Ignorar la promo hasta tener confirmacion total", "Separar baseline, upside y triggers de confirmacion", "Pedir a Supply que produzca todo por seguridad"],
      answer: 2,
      explain: "Demand Review trabaja con probabilidad, supuestos y escenarios. Evita tanto falsa certeza como reaccion tardia.",
      feedback: ["Oportunidad no es forecast firme si faltan premisas.", "Ignorarla pierde tiempo de preparacion.", "", "Producir todo puede generar sobrestock, cash atrapado y waste."],
    },
    {
      q: "Durante tres meses, un vendedor sobreestima lanzamientos porque su bono depende del target. El error siempre queda del mismo lado. Que deberia detectar Demand Review?",
      options: ["Variabilidad aleatoria normal", "Bias sistematico que exige revisar premisas e incentivos", "Restriccion de transporte", "Senal para subir inventario en todos los SKUs"],
      answer: 1,
      explain: "Errores repetidos del mismo lado indican bias. La respuesta es corregir premisas e incentivos, no tapar el sesgo con stock.",
      feedback: ["La variabilidad aleatoria no suele equivocarse siempre en la misma direccion.", "", "Transporte afecta servicio, pero aca el origen es la estimacion.", "Subir stock general tapa el sesgo y destruye cash."],
    },
  ],
  [
    {
      q: "Una linea fabrica shampoos o acondicionadores, pero no ambos al volumen pedido. Que debe producir Supply Review?",
      options: ["Restricciones con alternativas de mix, capacidad y clientes afectados", "Un forecast mas bajo para que el problema desaparezca", "Producir automaticamente el SKU mas facil", "Pedir a Ventas que deje de vender"],
      answer: 0,
      explain: "Supply Review traduce capacidad en opciones ejecutables. Las otras respuestas esconden o simplifican una restriccion que requiere decision.",
      feedback: ["", "Supply no debe manipular demanda; debe mostrar factibilidad.", "Lo facil puede destruir margen o cliente estrategico.", "No se trata de frenar ventas, sino de decidir como servirlas."],
    },
    {
      q: "Un proveedor cambia lead time de 45 a 70 dias antes de temporada alta. Que rompe primero si no se ajusta el plan?",
      options: ["El diseno del packaging", "La cobertura de inventario y el nivel de servicio futuro", "La participacion de Finanzas", "La medicion de margen del mes actual"],
      answer: 1,
      explain: "Un lead time mayor pega primero en cobertura, reposicion y servicio futuro. El margen actual puede no mostrar aun el riesgo.",
      feedback: ["Packaging podria importar, pero el caso apunta a reposicion.", "", "Finanzas participa, pero no es lo primero que rompe operacionalmente.", "El margen del mes puede ocultar un quiebre futuro."],
    },
  ],
  [
    {
      q: "El comite debe elegir entre flete aereo para salvar un cliente premium o aceptar atraso y proteger margen. Que tipo de decision es?",
      options: ["Una decision menor de transporte", "Un trade-off estrategico entre servicio, margen y relacion comercial", "Un problema exclusivo del planner", "Una razon para cambiar el forecast historico"],
      answer: 1,
      explain: "Executive S&OP existe para aceptar o rechazar trade-offs de negocio. No es solo transporte ni forecast.",
      feedback: ["El transporte es el mecanismo, no la decision completa.", "", "El planner prepara escenarios; el ejecutivo decide el costo aceptado.", "Cambiar forecast historico no resuelve servicio vs margen."],
    },
    {
      q: "El CEO pide 'un numero unico' sin discutir riesgos. Las areas traen alternativas bien preparadas. Que debe proteger Executive S&OP?",
      options: ["Velocidad de aprobacion por encima de todo", "Visibilidad de riesgos, premisas y responsables antes de aprobar", "Que cada area salga con su propio plan", "Que solo se hable de volumen"],
      answer: 1,
      explain: "Liderazgo ejecutivo no es cerrar una diapositiva: es aprobar una decision entendiendo riesgos y ownership.",
      feedback: ["Velocidad sin claridad puede salir cara.", "", "Planes paralelos destruyen el proceso.", "Volumen sin valor, capacidad y riesgo no alcanza."],
    },
  ],
  [
    {
      q: "Una unidad tiene target 130, pero clientes confirmados y conversion dan forecast 108. Que debe quedar separado?",
      options: ["Forecast probable, target aspiracional y acciones para el GAP", "Forecast y target para evitar conversaciones dificiles", "Forecast y premisas comerciales", "Capacidad de Supply y demanda"],
      answer: 0,
      explain: "Separar forecast, target y GAP permite decidir acciones. Mezclarlos crea falsa alineacion.",
      feedback: ["", "Deben separarse para gestionar el GAP.", "Forecast sin premisas es un numero indefendible.", "Supply no define demanda, pero ayuda a elegir acciones realistas."],
    },
    {
      q: "El GAP es de 18 puntos. Ventas propone descuentos fuertes, Supply advierte falta de stock y Finanzas ve margen negativo. Que lo vuelve gestionable?",
      options: ["Subir forecast para eliminar el GAP", "Elegir la accion comercial mas rapida", "Escenarios con impacto en margen, stock, servicio y responsable", "Posponer la discusion hasta cierre"],
      answer: 2,
      explain: "El GAP se gestiona con acciones comparables y KPIs visibles. Lo demas es esconder, apurar o explicar tarde.",
      feedback: ["Eso elimina el indicador, no el problema.", "Rapido no significa bueno si rompe margen o disponibilidad.", "", "Esperar convierte una decision en post-mortem."],
    },
  ],
  [
    {
      q: "El dashboard muestra inventario -18%, cash +12%, servicio -9% y quejas +15%. Que lectura es mas sistemica?",
      options: ["La mejora de cash justifica todo", "Se libero capital trasladando costo al cliente y al riesgo", "El servicio caera solo un mes", "Inventario siempre debe ser minimo"],
      answer: 1,
      explain: "KPIs conectados muestran efectos secundarios. Optimizar cash solo puede danar servicio y satisfaccion.",
      feedback: ["Cash importa, pero no aislado.", "", "Asumir temporalidad sin premisas es riesgoso.", "Inventario minimo no siempre es inventario correcto."],
    },
    {
      q: "Un SKU de alto margen absorbe capacidad y mejora rentabilidad, pero baja fill rate en una familia basica. Que pregunta debe hacer el equipo?",
      options: ["Como maximizar margen sin mirar servicio", "Que KPI gana y que KPI paga el costo de esta priorizacion", "Como esconder el fill rate bajo", "Como producir todo sin validar capacidad"],
      answer: 1,
      explain: "Pensamiento de sistema pregunta por causalidad y costo entre KPIs. Los distractores optimizan localmente o niegan restricciones.",
      feedback: ["Margen aislado puede deteriorar promesa.", "", "Ocultar KPIs rompe confianza.", "Producir todo sin capacidad es deseo, no plan."],
    },
  ],
  [
    {
      q: "Un cliente estrategico necesita entrega completa, pero cumplir implica overtime, riesgo de calidad y costo extra. Ninguna opcion es limpia. Que decision es mejor?",
      options: ["Cumplir sin informar costo", "Rechazar por politica de costos", "Comparar cumplir completo, parcial o renegociar con consecuencias visibles", "Cambiar el pedido para que el KPI cierre"],
      answer: 2,
      explain: "Cuando no hay opcion perfecta, la calidad esta en comparar consecuencias y decidir conscientemente.",
      feedback: ["Proteger cliente ocultando costo crea deuda.", "Una politica rigida puede destruir relacion.", "", "Cambiar el pedido maquilla el resultado."],
    },
    {
      q: "Reducir inventario hoy mejora cash trimestral, pero aumenta quiebre en un lanzamiento proximo. Que hace mas realista el trade-off?",
      options: ["Elegir cash porque es inmediato", "Mantener stock infinito por miedo", "Definir cuanto cash liberar sin superar riesgo aceptado de quiebre", "Mover el lanzamiento sin avisar"],
      answer: 2,
      explain: "Los trade-offs requieren limites y tolerancia de riesgo, no extremos.",
      feedback: ["Lo inmediato puede crear costo mayor despues.", "Stock infinito protege servicio pero destruye cash.", "", "Mover el lanzamiento sin alineacion rompe el plan."],
    },
  ],
  [
    {
      q: "En una reunion tensa, Ventas acusa a Supply por un quiebre y Supply responde que Ventas inflo demanda. Que intervencion muestra liderazgo?",
      options: ["Pedir nombres de responsables", "Documentar hechos, premisas fallidas, impacto y decision requerida", "Cerrar la reunion para evitar conflicto", "Cambiar el KPI para no exponer el problema"],
      answer: 1,
      explain: "Liderazgo S&OP transforma tension humana en aprendizaje, decision y ownership.",
      feedback: ["Accountability no es buscar culpables publicos.", "", "Evitar conflicto deja el problema vivo.", "Maquillar KPIs destruye confianza."],
    },
    {
      q: "Un planner detecta que una decision aprobada generara sobrecosto, pero teme escalar porque 'ya se decidio'. Que comportamiento debe promover el lider?",
      options: ["No reabrir decisiones incomodas", "Escalar con datos, impacto y alternativas sin culpar", "Esperar a que el costo aparezca contablemente", "Enviar el problema por mail y desentenderse"],
      answer: 1,
      explain: "No blame culture permite escalar riesgos temprano con alternativas concretas.",
      feedback: ["La comodidad politica puede salir cara.", "", "Cuando aparece contablemente suele ser tarde.", "Comunicar sin ownership no lidera la solucion."],
    },
  ],
  [
    {
      q: "Faltan 48 horas para cerrar mes. Un cliente ofrece una orden grande, margen bueno, pero consume safety stock de otro canal. Que decision es mas robusta?",
      options: ["Aceptar todo por margen", "Rechazar todo por riesgo", "Priorizar con reglas: margen, cliente, stockout futuro y comunicacion al canal afectado", "Aceptar y ajustar indicadores despues"],
      answer: 2,
      explain: "Bajo tiempo limitado se decide con criterios claros y riesgos visibles, no con reflejos extremos.",
      feedback: ["Margen atractivo no elimina el riesgo futuro.", "Rechazar todo pierde oportunidad sin analisis.", "", "Ajustar indicadores despues erosiona confianza."],
    },
    {
      q: "Durante una huelga de transporte, la informacion cambia cada hora. Hay pedidos criticos y datos incompletos. Que enfoque reduce mejor el dano?",
      options: ["Esperar informacion perfecta", "Armar escenarios por criticidad de cliente, ventana de entrega y costo alternativo", "Despachar por orden de llegada", "Prometer todo y corregir despues"],
      answer: 1,
      explain: "Presion real exige escenarios, priorizacion y revision continua. Las otras opciones son tardias, arbitrarias o irresponsables.",
      feedback: ["La certeza perfecta puede llegar tarde.", "", "Orden de llegada parece justo, pero puede destruir valor estrategico.", "Prometer todo traslada el problema al cliente."],
    },
  ],
];

const baseState = {
  service: 84,
  inventory: 66,
  margin: 28,
  cost: 38,
  risk: 34,
  satisfaction: 82,
  cash: 72,
  sync: 72,
  forecast: 93,
};

let state = { ...baseState };
let currentLesson = null;
let currentGapScenario = 0;
let currentStockScenario = 0;
let currentSupplyScenario = 0;
let currentExecutiveScenario = 0;
let currentSpikeScenario = 0;
let currentMeetingScenario = 0;
let currentDecisionScenario = 0;
let currentStory = 0;
let currentQuiz = 0;
let currentHeroVisual = 0;
let quizAnswered = new Set();
let quizFirstAttempts = new Map();
let lessonEngagement = {};
let lessonTimer = null;
let selectedGapActions = new Set();
let masterMonth = 0;
let masterHistory = [];
let masterPending = [];
let masterRandomEvents = [];
let operationalStress = { quality: 0, supply: 0, customer: 0 };
let masterState = {};
let masterTimeline = [];
let shownConsequenceIds = new Set();
let completionModalShown = false;
let activeTimelineKpis = new Set(["service", "margin", "cash", "cost", "risk"]);
let lastDecision = {
  title: "Todavia no tomaste una decision.",
  copy: "Cuando juegues, aca vas a ver que KPI se movio y por que.",
  impact: {},
};
let impacts = {
  gap: {},
  stock: {},
  master: {},
};

const kpis = [
  ["service", "Nivel de servicio", "%", "Promesa al cliente"],
  ["inventory", "Inventario", "%", "Cobertura disponible"],
  ["margin", "Margen", "%", "Rentabilidad"],
  ["cost", "Costo SC", "%", "Mejor si baja"],
  ["risk", "Riesgo", "%", "Mejor si baja"],
  ["satisfaction", "Satisfaccion cliente", "%", "Confianza del cliente"],
  ["cash", "Flujo de caja", "%", "Capital de trabajo"],
];

const kpiMeta = Object.fromEntries(kpis.map(([key, label, suffix]) => [key, { label, suffix }]));
const inverseGood = new Set(["cost", "risk"]);
const kpiAliases = {
  stock: "inventory",
  waste: "risk",
  otif: "service",
  fillRate: "service",
  accuracy: "satisfaction",
};

const masterBaseState = {
  service: 84,
  margin: 28,
  cost: 38,
  risk: 34,
  cash: 72,
};

const masterKpis = [
  ["service", "Servicio", "%", "Promesa al cliente"],
  ["margin", "Margen", "%", "Calidad del negocio"],
  ["cost", "Costo SC", "%", "Mejor si baja"],
  ["risk", "Riesgo", "%", "Mejor si baja"],
  ["cash", "Cash", "%", "Capital disponible"],
];

const masterKpiMeta = Object.fromEntries(masterKpis.map(([key, label, suffix]) => [key, { label, suffix }]));

const gapScenarios = [
  {
    title: "Cubri el GAP sin romper el negocio",
    brief: "Target 100. Forecast realista 93. Cerrar el gap exige acciones visibles.",
    target: 100,
    forecast: 93,
    actions: [
      ["promo", "Activar promo rentable", "+3 demanda, leve costo comercial. Premisa documentada.", 3, { margin: -1, service: 1, sync: 4, accuracy: 1 }],
      ["mix", "Cambiar mix a SKU disponible", "+2 demanda, mejora servicio, margen casi estable.", 2, { service: 3, fillRate: 3, margin: -1, sync: 5 }],
      ["sunday", "Abrir operacion domingo", "+2 demanda, sube costo y tensiona waste.", 2, { service: 2, otif: 2, margin: -3, waste: 3, sync: -1 }],
      ["quality", "Entregar producto dudoso", "+1 demanda inmediata, alto riesgo de cliente y calidad.", 1, { service: -7, fillRate: -4, margin: -2, waste: 5, sync: -8 }],
    ],
  },
  {
    title: "Promocion sin capacidad",
    brief: "Marketing quiere empujar una promo. Target 118, forecast 108, capacidad real 112.",
    target: 118,
    forecast: 108,
    actions: [
      ["cap", "Priorizar SKUs de alta rotacion", "+4 demanda servible, mejora fill rate.", 4, { service: 3, fillRate: 5, margin: 1, sync: 5 }],
      ["delay", "Mover parte de la promo", "+2 ahora, protege stock y OTIF.", 2, { stock: 5, otif: 4, sync: 4 }],
      ["force", "Forzar todo el volumen", "+8 demanda, rompe capacidad y waste.", 8, { service: -5, waste: 7, margin: -4, sync: -7 }],
      ["finance", "Validar mix con Finanzas", "+1 demanda, mejora margen y plan unico.", 1, { margin: 4, sync: 5, accuracy: 2 }],
    ],
  },
  {
    title: "Gap de margen",
    brief: "Volumen casi cerrado, pero Finanzas detecta mix barato. Target 100, forecast 98.",
    target: 100,
    forecast: 98,
    actions: [
      ["premium", "Empujar SKU premium", "+1 volumen y mejora margen.", 1, { margin: 5, service: 1, sync: 3 }],
      ["cheap", "Descontar producto barato", "+3 volumen, destruye margen.", 3, { margin: -7, service: 2, sync: -2 }],
      ["customer", "Negociar mix con cliente clave", "+2 volumen, mejora OTIF futuro.", 2, { margin: 2, otif: 3, sync: 4 }],
      ["doNothing", "No declarar el gap", "0 accion, el problema aparece al cierre.", 0, { accuracy: -4, sync: -8, margin: -2 }],
    ],
  },
  {
    title: "Lanzamiento con incertidumbre",
    brief: "Nuevo producto. Target 60, forecast base 44. Hay entusiasmo comercial, pero supply tiene curva de aprendizaje.",
    target: 60,
    forecast: 44,
    actions: [
      ["pilot", "Lanzar piloto controlado", "+6 demanda, protege aprendizaje y servicio.", 6, { service: 3, accuracy: 3, sync: 5 }],
      ["full", "Lanzamiento nacional inmediato", "+14 demanda potencial, alto riesgo de stock y waste.", 14, { service: -4, stock: -5, waste: 6, sync: -4 }],
      ["financeGate", "Gate financiero por margen", "+4 demanda, asegura mix rentable.", 4, { margin: 4, sync: 3 }],
      ["supplier", "Asegurar proveedor alternativo", "+5 demanda servible, sube costo moderado.", 5, { service: 4, margin: -2, fillRate: 3, sync: 4 }],
    ],
  },
  {
    title: "Cliente clave pide volumen extra",
    brief: "Target 104. Forecast 96. El cliente puede comprar mas, pero exige descuento y fecha firme.",
    target: 104,
    forecast: 96,
    actions: [
      ["partialKey", "Aceptar volumen parcial", "+4 demanda, protege promesa y margen.", 4, { service: 3, margin: 2, satisfaction: 3, sync: 4 }],
      ["fullDiscount", "Aceptar todo con descuento", "+8 demanda, tensiona margen y capacidad.", 8, { service: 1, margin: -5, cost: 3, risk: 3, sync: 1 }],
      ["slotSwap", "Reasignar stock de cliente chico", "+5 demanda, mejora volumen pero sube riesgo comercial.", 5, { service: 2, satisfaction: -3, margin: 1, risk: 4 }],
      ["noCommit", "Pedir confirmacion formal", "+2 demanda, baja riesgo de sobrepromesa.", 2, { risk: -3, satisfaction: 1, sync: 3 }],
    ],
  },
  {
    title: "Target financiero vs volumen",
    brief: "Target 110. Forecast 105. El volumen esta cerca, pero el mix no alcanza margen.",
    target: 110,
    forecast: 105,
    actions: [
      ["premiumPush", "Empujar pack premium", "+2 demanda y margen alto, requiere foco comercial.", 2, { margin: 5, satisfaction: 1, sync: 3 }],
      ["cheapVolume", "Liquidar SKU barato", "+6 demanda, mejora servicio corto plazo y erosiona margen.", 6, { margin: -6, inventory: -3, service: 2, sync: -1 }],
      ["financeTrade", "Acordar objetivo de mix con Finanzas", "+1 demanda, mejor calidad de plan.", 1, { margin: 4, cash: 2, sync: 5 }],
      ["delayLowMargin", "Mover volumen de bajo margen", "-1 demanda, protege rentabilidad.", -1, { margin: 6, cash: 3, service: -1 }],
    ],
  },
  {
    title: "Forecast inflado por entusiasmo",
    brief: "Target 130. Forecast comercial 124, forecast base 112. Hay señales, pero no premisas cerradas.",
    target: 130,
    forecast: 112,
    actions: [
      ["validateSignal", "Validar senales con clientes", "+5 demanda, mejora certeza sin sobreprometer.", 5, { satisfaction: 4, risk: -2, sync: 4 }],
      ["loadTarget", "Cargar forecast comercial completo", "+12 demanda en plan, alto riesgo operativo.", 12, { inventory: 4, cost: 4, risk: 7, satisfaction: -3, sync: -5 }],
      ["scenarioBand", "Crear escenario base/upside", "+7 demanda gestionada con triggers.", 7, { service: 2, margin: 1, risk: -3, sync: 6 }],
      ["supplierFlex", "Comprar flexibilidad de proveedor", "+6 demanda servible, sube costo.", 6, { service: 4, cost: 4, margin: -2, risk: -1 }],
    ],
  },
];

const stockScenarios = [
  {
    title: "Desafio de stock: promo fantasma",
    brief: "Un pico raro aparece antes de una caida bajo safety stock.",
    line: "45,90 120,112 190,135 265,158 330,52 405,80 475,118 540,154 605,188 680,202 720,130",
    points: [[330, 52], [605, 188]],
    options: [
      ["Entro una promocion grande sin preaviso y luego el stock cayo bajo safety.", true, { accuracy: 3, service: 3, stock: 4, sync: 3 }],
      ["No paso nada: el grafico esta dentro del comportamiento normal.", false, { service: -3, stock: -4, sync: -5 }],
      ["El equipo debe esconder el desvio hasta tener el dato perfecto.", false, { accuracy: -2, service: -4, sync: -8 }],
    ],
  },
  {
    title: "Desafio de stock: proveedor recurrente",
    brief: "El stock cae todos los ciclos en la misma zona. Patron o sorpresa?",
    line: "45,96 120,128 190,170 265,122 330,158 405,198 475,136 540,165 605,204 680,142 720,116",
    points: [[405, 198], [605, 204]],
    options: [
      ["Es una incertidumbre cronica: proveedor falla en la misma ventana.", true, { stock: 5, service: 2, accuracy: 2, sync: 4 }],
      ["Es imposible planificarlo porque el forecast nunca sera perfecto.", false, { stock: -5, service: -4, sync: -6 }],
      ["La solucion es subir todo el stock maximo sin discutir costo.", false, { stock: 2, margin: -5, waste: 4, sync: -2 }],
    ],
  },
  {
    title: "Desafio de stock: forecast agregado enganoso",
    brief: "El total parece estable, pero un SKU cae y otro compensa.",
    line: "45,118 120,112 190,110 265,108 330,105 405,102 475,100 540,98 605,96 680,94 720,92",
    points: [[405, 102], [680, 94]],
    options: [
      ["Hay que desagregar: el promedio puede esconder un SKU en problemas.", true, { accuracy: 4, service: 3, sync: 4 }],
      ["Si el total da bien, no importa mirar SKU por SKU.", false, { accuracy: -5, service: -5, fillRate: -4 }],
      ["La unica metrica relevante es ventas del mes.", false, { sync: -5, margin: -2, stock: -2 }],
    ],
  },
  {
    title: "Desafio de stock: exceso silencioso",
    brief: "El stock nunca rompe safety, pero se aleja del maximo y empieza a generar waste.",
    line: "45,82 120,76 190,70 265,66 330,62 405,60 475,58 540,56 605,54 680,52 720,50",
    points: [[330, 62], [680, 52]],
    options: [
      ["Hay sobrestock: protege servicio, pero deteriora cash y waste.", true, { stock: 4, margin: -2, waste: 5, sync: 3 }],
      ["Es perfecto porque nunca cae bajo safety stock.", false, { waste: 5, margin: -4, sync: -4 }],
      ["Hay que producir mas por seguridad.", false, { stock: -2, waste: 7, margin: -5 }],
    ],
  },
  {
    title: "Desafio de stock: lead time mas largo",
    brief: "El consumo es normal, pero la reposicion tarda dos semanas mas que lo esperado.",
    line: "45,92 120,105 190,122 265,145 330,168 405,190 475,205 540,180 605,150 680,118 720,96",
    points: [[405, 190], [475, 205]],
    options: [
      ["El lead time cambio y hay que recalibrar punto de pedido.", true, { stock: 4, service: 3, risk: -3, sync: 4 }],
      ["Es solo un problema de ventas del mes.", false, { service: -4, risk: 4, satisfaction: -3 }],
      ["Bajar safety stock porque finalmente repuso.", false, { stock: -5, service: -5, risk: 5 }],
    ],
  },
  {
    title: "Desafio de stock: demanda por lotes",
    brief: "El cliente compra en picos grandes y luego desaparece. El promedio mensual engana.",
    line: "45,76 120,182 190,166 265,150 330,70 405,180 475,160 540,142 605,66 680,176 720,158",
    points: [[120, 182], [605, 66]],
    options: [
      ["Planificar por patron de pedido, no solo por promedio.", true, { service: 4, stock: 3, satisfaction: 3, sync: 5 }],
      ["Usar solo promedio mensual porque el total cierra.", false, { service: -5, stock: -3, risk: 4 }],
      ["Duplicar stock permanente para todos los SKUs.", false, { stock: 2, margin: -4, cash: -5, risk: 3 }],
    ],
  },
  {
    title: "Desafio de stock: obsolescencia",
    brief: "Un SKU viejo queda alto justo antes de un cambio de empaque.",
    line: "45,64 120,62 190,60 265,58 330,56 405,54 475,52 540,50 605,48 680,46 720,44",
    points: [[475, 52], [720, 44]],
    options: [
      ["Activar plan de salida antes del cambio de empaque.", true, { stock: 4, margin: 1, risk: -4, cash: 3 }],
      ["Mantener produccion porque el servicio esta alto.", false, { stock: -2, margin: -4, risk: 6, cash: -4 }],
      ["Esperar al cierre para ver si se vende solo.", false, { risk: 5, cash: -3, sync: -4 }],
    ],
  },
];

const crisisScenarios = [
  {
    title: "Sala de crisis: faltan 3 puntos",
    brief: "Estas en la reunion diaria del 24 de febrero. El mes cierra en 97%.",
    options: [
      ["Costo extra para cumplir", "Abrir domingo, contratar recursos y flota. Llega a ventas, tensiona margen.", { service: 5, otif: 5, margin: -5, waste: 1, sync: 1 }, "Valida si el board acepta el costo. Buen foco en servicio, riesgo financiero visible."],
      ["Sustituir producto y entrega", "Entregar producto mas caro no pedido y cambiar modalidad de entrega.", { service: -5, fillRate: -4, margin: -2, sync: -6 }, "Cierra el numero, pero rompe la promesa al cliente. Salida fragil."],
      ["Plan colaborativo", "Combinar promo rentable, mix disponible y acuerdo con cliente.", { service: 5, otif: 3, margin: 1, fillRate: 4, sync: 8, accuracy: 2 }, "La mejor respuesta S&OP: acciones, premisas y trade-offs visibles."],
    ],
  },
  {
    title: "Sala de crisis: materia prima bloqueada",
    brief: "Un proveedor no entrega. Ventas ya prometio volumen a un cliente grande.",
    options: [
      ["Avisar restriccion y redirigir mix", "Supply declara el limite y Ventas empuja productos disponibles.", { service: 4, stock: 4, fillRate: 3, sync: 7 }, "Buen uso del proceso: restriccion visible, accion comercial alineada."],
      ["Esperar hasta tener certeza total", "No se informa nada hasta confirmar al 100%.", { service: -6, otif: -5, sync: -8, accuracy: -2 }, "Esperar certeza perfecta suele destruir tiempo de reaccion."],
      ["Comprar urgente a cualquier costo", "Se cubre volumen con sobrecosto y baja validacion.", { service: 3, margin: -7, waste: 3, sync: -1 }, "Puede servir en emergencia, pero necesita aprobacion y contramedida."],
    ],
  },
  {
    title: "Sala de crisis: el board pide un objetivo imposible",
    brief: "El target sube, pero no hay premisas nuevas que expliquen como llegar.",
    options: [
      ["Igualar forecast al target", "Se carga el numero deseado y se evita mostrar el gap.", { accuracy: -8, sync: -10, service: -3 }, "Eso crea caos: la organizacion no sabe con que acciones llegaria."],
      ["Mostrar gap y pedir acciones", "Se mantiene forecast probable y se abre decision de negocio.", { accuracy: 4, sync: 8, margin: 2 }, "Correcto: el gap visible es el punto de partida del S&OP."],
      ["Bajar servicio para vender mas", "Se prioriza volumen, afectando entregas y confianza.", { service: -8, fillRate: -6, margin: 1, sync: -3 }, "Vender sin cumplir erosiona el proceso y al cliente."],
    ],
  },
  {
    title: "Sala de crisis: calidad en duda",
    brief: "Hay producto disponible, pero Calidad alerta un riesgo. Ventas quiere despachar igual.",
    options: [
      ["Bloquear lote y redirigir demanda", "Protege cliente y marca, aunque tensiona servicio inmediato.", { service: -2, fillRate: -2, waste: 2, sync: 6, margin: 1 }, "Buena decision si el riesgo de calidad es real: explicita costo y protege confianza."],
      ["Despachar y esperar reclamos", "Cierra ventas hoy, pero transfiere riesgo al cliente.", { service: -8, waste: 6, margin: -4, sync: -9 }, "Mala senal: llegar al numero no justifica romper calidad."],
      ["Pedir decision ejecutiva con escenarios", "Muestra impacto de bloquear, reprocesar o sustituir.", { sync: 8, accuracy: 3, service: 1 }, "Muy S&OP: eleva trade-offs claros para decidir rapido."],
    ],
  },
];

const biasScenarios = [
  {
    title: "Detector de sesgo: optimismo comercial",
    brief: "El forecast queda arriba del real durante cuatro meses. Detecta el sesgo y la accion correcta.",
    rows: [
      ["Enero", 105, 96],
      ["Febrero", 110, 100],
      ["Marzo", 108, 97],
      ["Abril", 112, 101],
    ],
    options: [
      ["Hay bias optimista: ajustar premisas de ventas y revisar incentivos.", true, { accuracy: 5, stock: 3, waste: -2, sync: 5 }],
      ["No hay problema: algun mes va a salir.", false, { accuracy: -5, stock: -3, waste: 4, sync: -4 }],
      ["Subir stock para estar preparados.", false, { stock: 2, waste: 5, margin: -3 }],
    ],
  },
  {
    title: "Detector de sesgo: miedo a capacidad",
    brief: "Supply empuja un numero bajo por miedo a no cumplir, pero la demanda real supera el forecast.",
    rows: [
      ["Mayo", 88, 98],
      ["Junio", 90, 102],
      ["Julio", 92, 103],
      ["Agosto", 91, 101],
    ],
    options: [
      ["Hay bias conservador: separar restriccion de demanda real.", true, { accuracy: 4, service: 4, fillRate: 3, sync: 5 }],
      ["Bajar el target para que coincida con supply.", false, { service: -4, margin: -2, sync: -5 }],
      ["Culpar a Ventas por vender mas.", false, { sync: -7, service: -3 }],
    ],
  },
  {
    title: "Detector de sesgo: promedio tramposo",
    brief: "El total parece correcto, pero dos familias se compensan. El agregado esconde el problema.",
    rows: [
      ["Familia A", 120, 90],
      ["Familia B", 80, 110],
      ["Familia C", 100, 101],
      ["Total", 300, 301],
    ],
    options: [
      ["Desagregar: accuracy total buena puede esconder errores por SKU.", true, { accuracy: 5, service: 3, stock: 2, sync: 4 }],
      ["Celebrar porque el total dio perfecto.", false, { accuracy: -4, service: -5, stock: -3 }],
      ["Eliminar el forecast por familia.", false, { accuracy: -6, sync: -5 }],
    ],
  },
];

const decisionGames = {
  supply: {
    scope: "supply",
    titleId: "#supplyTitle",
    briefId: "#supplyBrief",
    boardId: "#supplyBoard",
    feedbackId: "#supplyFeedback",
    current: () => currentSupplyScenario,
    setCurrent: (value) => {
      currentSupplyScenario = value;
    },
    scenarios: [
      {
        title: "Restricciones de supply: planta al 92%",
        brief: "La capacidad alcanza para dos familias, no para tres. Ventas pide cumplir todo.",
        options: [
          ["Priorizar SKUs A y negociar B", "Protege clientes clave y hace visible el trade-off.", { service: 5, inventory: 2, margin: 3, cost: -1, risk: -3, satisfaction: 4 }, "Buen uso de restriccion: menos caos, mas plan."],
          ["Producir todo con overtime", "Cubre volumen hoy, pero sube costo y riesgo de calidad.", { service: 3, margin: -4, cost: 8, risk: 5, cash: -4 }, "Sirve si el board acepta el costo, no como default."],
          ["Repartir poco a todos", "Parece justo, pero baja fill rate de clientes estrategicos.", { service: -5, satisfaction: -6, margin: -2, risk: 2 }, "La equidad operativa puede destruir valor comercial."],
        ],
      },
      {
        title: "Restricciones de supply: material importado",
        brief: "Materia prima critica llega tarde. Hay que decidir donde usar el stock disponible.",
        options: [
          ["Asignar a productos de mayor margen", "Finanzas mejora, pero algunos clientes quedan tensos.", { margin: 6, cash: 3, service: -2, satisfaction: -2, risk: 1 }, "Buena si se comunica el costo de servicio."],
          ["Cubrir contrato penalizable", "Evita multa y protege relacion clave.", { service: 4, satisfaction: 5, margin: 1, risk: -4, cost: 1 }, "Decision solida: cliente, riesgo y margen alineados."],
          ["Esperar al proveedor", "No decide y deja al negocio sin alternativa.", { service: -7, satisfaction: -6, risk: 7, sync: -6 }, "No decidir tambien es decidir, y suele salir caro."],
        ],
      },
      {
        title: "Restricciones de supply: linea compartida",
        brief: "Dos categorias rentables compiten por la misma linea. Una da margen, la otra protege servicio.",
        options: [
          ["Reservar capacidad por rentabilidad y servicio", "Divide la linea por valor y promesa al cliente.", { service: 3, margin: 4, cost: 1, risk: -2, satisfaction: 2, sync: 5 }, "Buen balance: no maximiza un unico KPI."],
          ["Dar prioridad total al SKU de margen", "Mejora rentabilidad inmediata, pero deja clientes sin cobertura.", { margin: 7, cash: 3, service: -4, satisfaction: -5, risk: 3 }, "Tiene logica financiera, pero requiere acuerdo comercial."],
          ["Producir segun orden de llegada", "Evita discutir prioridades, pero puede destruir valor.", { service: -3, margin: -3, cost: 2, risk: 4, sync: -4 }, "La neutralidad operativa no siempre es neutral para el negocio."],
        ],
      },
      {
        title: "Restricciones de supply: mantenimiento atrasado",
        brief: "La planta puede postergar mantenimiento para liberar capacidad, pero aumenta riesgo de parada.",
        options: [
          ["Postergar con ventana y monitoreo", "Gana capacidad limitada y controla el riesgo tecnico.", { service: 4, margin: 2, cost: 2, risk: 2, satisfaction: 2, sync: 3 }, "Aceptable si queda documentado y acotado."],
          ["Postergar sin fecha nueva", "Cubre el mes, pero compra una posible parada mayor.", { service: 5, margin: 1, cost: 4, risk: 8, cash: -3, sync: -3 }, "La deuda tecnica suele cobrar intereses."],
          ["Hacer mantenimiento completo ahora", "Protege confiabilidad futura, pero restringe servicio inmediato.", { service: -4, cost: -1, risk: -6, satisfaction: -2, cash: 1 }, "Solido si el board acepta el impacto comercial."],
        ],
      },
      {
        title: "Restricciones de supply: proveedor alternativo",
        brief: "Un segundo proveedor ofrece material mas caro, con menor lead time y calidad todavia no probada.",
        options: [
          ["Usarlo solo para clientes criticos", "Compra flexibilidad donde el riesgo comercial lo justifica.", { service: 4, margin: -2, cost: 4, risk: -1, satisfaction: 4, sync: 4 }, "Buena aplicacion selectiva de costo extra."],
          ["Migrar todo el volumen", "Reduce quiebres, pero expone costo y calidad.", { service: 5, margin: -6, cost: 7, risk: 4, cash: -4 }, "Puede ser excesivo sin validacion."],
          ["No usarlo hasta homologacion total", "Baja riesgo tecnico, pero deja menos opciones comerciales.", { service: -3, cost: -1, risk: -2, satisfaction: -3, cash: 1 }, "Conservador, aunque puede llegar tarde."],
        ],
      },
      {
        title: "Restricciones de supply: transporte limitado",
        brief: "Hay producto, pero no suficientes camiones para todos los destinos.",
        options: [
          ["Priorizar rutas con mayor impacto cliente", "Combina valor comercial, penalidades y fecha prometida.", { service: 5, margin: 2, cost: 2, risk: -3, satisfaction: 5, sync: 5 }, "Buen criterio: no todos los pedidos pesan igual."],
          ["Pagar extra para cubrir todo", "Protege servicio, pero erosiona margen.", { service: 6, margin: -5, cost: 8, risk: 1, satisfaction: 4, cash: -5 }, "Puede servir si el costo esta aprobado."],
          ["Despachar todo la semana siguiente", "Ahorra costo, pero acumula reclamos.", { service: -6, margin: 1, cost: -3, risk: 4, satisfaction: -7, sync: -3 }, "El ahorro logistico puede salir caro en cliente."],
        ],
      },
      {
        title: "Restricciones de supply: cambio de mix",
        brief: "Supply puede fabricar menos unidades, pero con mix mas rentable y mejor disponibilidad de materiales.",
        options: [
          ["Proponer mix alternativo al negocio", "Menos volumen bruto, mas margen y factibilidad.", { service: 2, margin: 6, cost: -1, risk: -3, satisfaction: 2, cash: 3, sync: 6 }, "Muy S&OP: cambia la conversacion de cajas a valor."],
          ["Mantener mix original", "Respeta el plan comercial, pero fuerza materiales escasos.", { service: -2, margin: -1, cost: 4, risk: 5, satisfaction: -2, sync: -2 }, "El plan original puede estar desactualizado."],
          ["Cambiar mix sin avisar", "Mejora supply, pero rompe alineacion comercial.", { margin: 3, cost: -2, risk: 3, satisfaction: -5, sync: -7 }, "La mejora local destruye confianza del proceso."],
        ],
      },
    ],
  },
  executive: {
    scope: "executive",
    titleId: "#executiveTitle",
    briefId: "#executiveBrief",
    boardId: "#executiveBoard",
    feedbackId: "#executiveFeedback",
    current: () => currentExecutiveScenario,
    setCurrent: (value) => {
      currentExecutiveScenario = value;
    },
    scenarios: [
      {
        title: "Decision ejecutiva: objetivo agresivo",
        brief: "El CEO quiere cerrar el gap completo, Finanzas advierte margen bajo y Supply advierte capacidad.",
        options: [
          ["Aprobar plan con limites y triggers", "Define hasta donde invertir y cuando escalar.", { service: 4, margin: 2, cost: 1, risk: -3, cash: 2, satisfaction: 3, sync: 6 }, "Liderazgo sano: ambicion con control."],
          ["Ordenar llegar igual", "El numero cierra en slide, no en operacion.", { service: -2, margin: -6, cost: 8, risk: 7, cash: -5, sync: -7 }, "Presion sin premisas genera ejecucion fragil."],
          ["Cancelar toda accion comercial", "Protege costo, pero regala demanda y cliente.", { service: -6, margin: -1, cost: -4, risk: -1, satisfaction: -7, cash: 2 }, "Cuidar costo no puede ser la unica estrategia."],
        ],
      },
      {
        title: "Decision ejecutiva: calidad vs cierre",
        brief: "Hay producto para facturar, pero Calidad detecta posible desvio.",
        options: [
          ["Bloquear y presentar alternativas", "Protege marca y muestra impacto en servicio.", { service: -2, margin: 1, cost: 2, risk: -8, satisfaction: 5, sync: 6 }, "Buena decision: calidad primero, plan alternativo despues."],
          ["Despachar y monitorear reclamos", "Cierra venta hoy, compra crisis futura.", { service: -6, margin: -5, cost: 6, risk: 10, satisfaction: -10, sync: -8 }, "Llegar al numero no justifica romper confianza."],
          ["Escalar con escenarios al board", "Hace visible costo, riesgo y cliente antes de decidir.", { service: 1, margin: 2, risk: -4, satisfaction: 3, sync: 8 }, "Muy S&OP: decision transversal, no escondida."],
        ],
      },
      {
        title: "Decision ejecutiva: cliente estrategico",
        brief: "Un cliente clave pide excepcion de servicio. Cumplirlo afecta otros clientes y costo logistico.",
        options: [
          ["Aceptar excepcion con costo visible", "Protege relacion clave y documenta el impacto.", { service: 4, margin: -2, cost: 5, risk: -2, satisfaction: 4, sync: 4 }, "Buena si el valor estrategico justifica el costo."],
          ["Tratarlo como cualquier pedido", "Cuida equidad, pero ignora valor estrategico.", { service: -2, margin: 1, cost: -1, risk: 2, satisfaction: -4, sync: -1 }, "La igualdad operativa puede no ser estrategia."],
          ["Prometer excepcion sin aprobar costo", "Gana tiempo politico, pero deja deuda operativa.", { service: 1, margin: -4, cost: 6, risk: 5, satisfaction: -2, sync: -5 }, "Prometer sin costo aprobado debilita el proceso."],
        ],
      },
      {
        title: "Decision ejecutiva: cash vs servicio",
        brief: "Finanzas pide liberar capital. Comercial alerta que bajar stock golpea fill rate.",
        options: [
          ["Reducir stock segmentando por criticidad", "Libera cash sin tratar todos los SKUs igual.", { service: 1, inventory: -4, margin: 2, cost: -2, risk: -1, satisfaction: 1, cash: 6, sync: 5 }, "Buen equilibrio entre finanzas y cliente."],
          ["Recorte lineal de inventario", "Mejora cash rapido, pero expone SKUs criticos.", { service: -5, inventory: -7, margin: 1, cost: -3, risk: 6, satisfaction: -5, cash: 8, sync: -3 }, "El numero financiero mejora, la resiliencia cae."],
          ["Mantener todo el inventario", "Protege servicio, pero no responde al problema de cash.", { service: 3, inventory: 4, margin: -1, cost: 3, risk: 1, cash: -6, satisfaction: 2 }, "Defendible si el riesgo comercial es alto, no como reflejo."],
        ],
      },
      {
        title: "Decision ejecutiva: inversion en capacidad",
        brief: "Hay oportunidad de crecer, pero la capacidad extra requiere inversion y seis meses de payback.",
        options: [
          ["Aprobar inversion con hitos", "Compra crecimiento con control financiero.", { service: 3, margin: 3, cost: 3, risk: -2, satisfaction: 3, cash: -4, sync: 5 }, "Buena decision si los gatillos son claros."],
          ["Alquilar capacidad temporal", "Mas flexible, pero con costo unitario alto.", { service: 4, margin: -2, cost: 6, risk: -1, satisfaction: 3, cash: -3, sync: 3 }, "Flexibilidad util, no gratis."],
          ["No invertir hasta tener certeza", "Protege caja, pero puede perder mercado.", { service: -3, margin: -2, cost: -2, risk: 3, satisfaction: -4, cash: 4 }, "La certeza total suele llegar cuando la oportunidad ya paso."],
        ],
      },
      {
        title: "Decision ejecutiva: conflicto de areas",
        brief: "Ventas acusa a Supply, Supply acusa al forecast y Finanzas no valida el margen.",
        options: [
          ["Reencuadrar en decisiones y KPIs", "Saca la conversacion de culpa y la lleva a alternativas.", { service: 2, margin: 2, cost: -1, risk: -4, satisfaction: 3, sync: 8 }, "Liderazgo de proceso: foco en decision."],
          ["Elegir el numero de Ventas", "Acelera alineacion aparente, pero deja restricciones ocultas.", { service: -3, margin: -2, cost: 4, risk: 5, satisfaction: -2, sync: -5 }, "Un numero impuesto no es un plan."],
          ["Pedir mas analisis sin decidir", "Evita conflicto hoy, posterga impacto.", { service: -2, margin: -1, risk: 4, satisfaction: -2, sync: -4 }, "Mas datos sin decision puede ser otra forma de demora."],
        ],
      },
      {
        title: "Decision ejecutiva: margen bajo",
        brief: "El mes cierra en volumen, pero margen cae por mix y fletes express.",
        options: [
          ["Aceptar menor volumen con mix rentable", "Defiende valor aunque no maximice cajas.", { service: -1, margin: 6, cost: -2, risk: -2, satisfaction: 1, cash: 4, sync: 4 }, "Pensamiento ejecutivo: no todo volumen vale igual."],
          ["Sostener volumen con mas descuentos", "Cierra market share, pero deteriora rentabilidad.", { service: 4, margin: -7, cost: 3, risk: 3, satisfaction: 2, cash: -3 }, "Tiene logica comercial, pero necesita decision consciente."],
          ["Cortar fletes express sin priorizar", "Mejora costo, pero afecta promesas relevantes.", { service: -5, margin: 3, cost: -5, risk: 4, satisfaction: -6, cash: 3 }, "Reducir costo sin segmentar puede destruir cliente."],
        ],
      },
    ],
  },
  spike: {
    scope: "spike",
    titleId: "#spikeTitle",
    briefId: "#spikeBrief",
    boardId: "#spikeBoard",
    feedbackId: "#spikeFeedback",
    current: () => currentSpikeScenario,
    setCurrent: (value) => {
      currentSpikeScenario = value;
    },
    scenarios: [
      {
        title: "Pico de demanda: cliente pide +18%",
        brief: "Un cliente grande adelanta demanda. No sabes si es real, one-shot o compra especulativa.",
        options: [
          ["Activar escenario con trigger", "Cubris una parte y esperas confirmacion para escalar.", { service: 4, inventory: -2, margin: 2, cost: 2, risk: -2, satisfaction: 4, sync: 5 }, "Respuesta balanceada: velocidad sin sobrerreaccion."],
          ["Producir todo inmediatamente", "Puede servir si la demanda era real, pero carga stock y costo.", { service: 3, inventory: 5, margin: -3, cost: 6, risk: 4, cash: -6 }, "Mucho volumen sin premisa suele transformarse en capital atrapado."],
          ["Ignorarlo hasta fin de mes", "Evita costo hoy, pero pierde oportunidad y servicio.", { service: -7, margin: -3, satisfaction: -6, risk: 5, sync: -4 }, "La demora tambien tiene costo comercial."],
        ],
      },
      {
        title: "Pico de demanda: promocion viral",
        brief: "Marketing detecta demanda digital anormal. Supply solo puede reaccionar en 10 dias.",
        options: [
          ["Racionar stock y priorizar canales", "Mantiene servicio donde mas duele y compra tiempo.", { service: 4, inventory: -1, margin: 3, cost: 1, risk: -2, satisfaction: 3 }, "Buena reaccion: no todos los clientes necesitan la misma respuesta."],
          ["Prometer todo al mercado", "Maximiza expectativa y rompe confianza si no llegas.", { service: -5, margin: -1, cost: 5, risk: 7, satisfaction: -8 }, "Promesa sin supply es deuda con el cliente."],
          ["Acelerar transporte premium", "Mejora servicio, pero exige validar margen.", { service: 5, margin: -4, cost: 7, risk: 1, satisfaction: 4, cash: -4 }, "Puede ser correcto si el valor del cliente lo justifica."],
        ],
      },
      {
        title: "Pico de demanda: competidor sin stock",
        brief: "El mercado se mueve hacia tu producto por una falla del competidor. No sabes cuanto durara.",
        options: [
          ["Capturar parte con precio cuidado", "Aprovecha oportunidad sin regalar margen.", { service: 3, margin: 4, cost: 2, risk: 1, satisfaction: 3, cash: 3, sync: 4 }, "Buena lectura: oportunidad con control."],
          ["Bajar precio para capturar todo", "Sube volumen, pero puede destruir margen y stock.", { service: 2, margin: -6, inventory: -5, cost: 4, risk: 4, satisfaction: 1 }, "Ganar mercado no siempre crea valor."],
          ["No reaccionar hasta confirmar duracion", "Evita sobre reaccion, pero pierde ventana comercial.", { service: -3, margin: -2, risk: 2, satisfaction: -4, cash: 1 }, "Conservador si la supply esta muy tensa."],
        ],
      },
      {
        title: "Pico de demanda: clima extremo",
        brief: "Un evento climatico dispara demanda regional y complica transporte.",
        options: [
          ["Preposicionar stock regional", "Mejora respuesta, pero usa inventario antes de certeza total.", { service: 5, inventory: -3, margin: 2, cost: 3, risk: -2, satisfaction: 5, sync: 4 }, "Buen uso de escenario probable."],
          ["Esperar pedidos confirmados", "Evita mover stock de mas, pero llega tarde si el pico se confirma.", { service: -4, cost: -1, risk: 4, satisfaction: -4, cash: 2 }, "Puede ser prudente si la senal es debil."],
          ["Enviar todo a la region", "Maximiza disponibilidad local y desprotege otros mercados.", { service: 2, inventory: -6, margin: -1, cost: 5, risk: 5, satisfaction: -2 }, "Una respuesta fuerte puede mover el problema de lugar."],
        ],
      },
      {
        title: "Pico de demanda: influencer inesperado",
        brief: "Un producto se vuelve tendencia. El forecast estadistico no lo habia visto.",
        options: [
          ["Abrir cupos de venta y medir repeticion", "Captura demanda con aprendizaje rapido.", { service: 3, margin: 3, cost: 2, risk: -1, satisfaction: 4, sync: 4 }, "Buen puente entre sensing y ejecucion."],
          ["Escalar produccion completa", "Apuesta fuerte a que la tendencia continua.", { service: 4, inventory: 4, margin: -2, cost: 6, risk: 5, cash: -5 }, "Puede ganar upside, pero genera exposicion."],
          ["Ignorar por no estar en forecast", "Mantiene disciplina estadistica, pierde senal de mercado.", { service: -4, margin: -3, risk: 3, satisfaction: -5, sync: -3 }, "El forecast no debe apagar la escucha."],
        ],
      },
      {
        title: "Pico de demanda: canal e-commerce",
        brief: "El e-commerce crece 25%, pero retail tradicional reclama stock.",
        options: [
          ["Asignar por margen y nivel de servicio", "Equilibra canales con reglas visibles.", { service: 3, margin: 4, cost: 1, risk: -2, satisfaction: 3, sync: 5 }, "Buena gobernanza de canales."],
          ["Priorizar e-commerce por crecimiento", "Aprovecha margen, pero tensiona retail.", { service: 2, margin: 5, cost: 2, risk: 3, satisfaction: -2, cash: 3 }, "Puede ser correcto si retail acepta el trade-off."],
          ["Congelar e-commerce para cuidar retail", "Reduce conflicto, pero frena canal rentable.", { service: -2, margin: -4, cost: -1, risk: 1, satisfaction: -3, sync: -1 }, "La estabilidad tambien tiene costo de oportunidad."],
        ],
      },
      {
        title: "Pico de demanda: preventa corporativa",
        brief: "Un cliente ofrece orden grande si garantizas entrega. La probabilidad es alta, no segura.",
        options: [
          ["Reservar capacidad con anticipo", "Reduce riesgo y compromete supply con senal real.", { service: 4, margin: 4, cost: 1, risk: -3, satisfaction: 4, cash: 3, sync: 5 }, "Buena condicion comercial para activar capacidad."],
          ["Reservar capacidad sin anticipo", "Gana velocidad, pero puede bloquear demanda real.", { service: 2, margin: 1, cost: 3, risk: 5, satisfaction: 1, cash: -3 }, "Apuesta defendible solo si el cliente es muy confiable."],
          ["No reservar hasta orden firme", "Protege capacidad, pero puede perder la oportunidad.", { service: -3, margin: -3, cost: -1, risk: 1, satisfaction: -3, cash: 1 }, "Prudente, aunque quizas demasiado tarde."],
        ],
      },
    ],
  },
  meeting: {
    scope: "meeting",
    titleId: "#meetingTitle",
    briefId: "#meetingBrief",
    boardId: "#meetingBoard",
    feedbackId: "#meetingFeedback",
    current: () => currentMeetingScenario,
    setCurrent: (value) => {
      currentMeetingScenario = value;
    },
    scenarios: [
      {
        title: "Reunion S&OP: tres verdades",
        brief: "Ventas trae 115, Demand Planning 103, Supply dice 98. La reunion se empieza a trabar.",
        options: [
          ["Separar forecast, target y capacidad", "Ordena la conversacion y abre decisiones reales.", { service: 2, margin: 2, cost: -1, risk: -4, satisfaction: 3, sync: 9 }, "Excelente: un solo plan no significa un solo numero inventado."],
          ["Promediar los tres numeros", "Parece neutral, pero esconde premisas.", { service: -3, margin: -2, risk: 4, satisfaction: -2, sync: -5 }, "El promedio puede ser una forma elegante de no decidir."],
          ["Que gane el area con mas jerarquia", "Rapido, pero destruye confianza de proceso.", { service: -4, margin: -3, risk: 5, satisfaction: -4, sync: -8 }, "S&OP necesita proceso, no fuerza politica."],
        ],
      },
      {
        title: "Reunion S&OP: minuta ejecutiva",
        brief: "La reunion termina con muchas ideas y poca claridad. Necesitas cerrar.",
        options: [
          ["Decisiones, responsables, premisas y KPIs", "Deja accionable quien hace que y que se mide.", { service: 3, margin: 2, cost: -1, risk: -4, satisfaction: 3, sync: 8 }, "Una minuta ejecutiva sincroniza la organizacion."],
          ["Enviar todos los slides", "Mucho material, poca decision.", { service: -2, risk: 2, satisfaction: -2, sync: -5 }, "Mas informacion no siempre significa mas claridad."],
          ["No documentar para ahorrar tiempo", "El acuerdo oral se rompe al ejecutar.", { service: -4, margin: -2, risk: 5, satisfaction: -3, sync: -7 }, "Sin registro, el plan unico se vuelve memoria selectiva."],
        ],
      },
      {
        title: "Reunion S&OP: promo sin dueno",
        brief: "La promocion esta en el forecast, pero nadie confirma materiales, margen ni cliente objetivo.",
        options: [
          ["Exigir dueno, premisa y trigger", "Deja la promo accionable o la saca del plan.", { service: 3, margin: 3, cost: -1, risk: -4, satisfaction: 2, sync: 7 }, "Buena reunion: convierte idea en decision."],
          ["Dejarla por si ocurre", "Mantiene upside, pero contamina el plan.", { service: -2, inventory: 3, margin: -2, risk: 5, sync: -4 }, "El upside sin responsable se vuelve ruido."],
          ["Eliminarla sin debatir", "Limpia forecast, pero puede perder oportunidad.", { service: -2, margin: -2, cost: -1, risk: -1, satisfaction: -3 }, "Puede ser correcto si no hay premisas minimas."],
        ],
      },
      {
        title: "Reunion S&OP: supply trae restriccion tarde",
        brief: "Supply informa falta de capacidad cuando ventas ya negocio con clientes.",
        options: [
          ["Crear plan de priorizacion y aprendizaje", "Resuelve el mes y corrige el proceso.", { service: 3, margin: 2, cost: 2, risk: -3, satisfaction: 2, sync: 6 }, "S&OP no solo apaga, aprende."],
          ["Pedir a ventas que arregle solo", "Traslada el problema y rompe alineacion.", { service: -4, margin: -2, risk: 5, satisfaction: -5, sync: -6 }, "La restriccion es del negocio, no de un area."],
          ["Aprobar overtime sin revisar mix", "Cubre parte del problema, pero puede ser caro.", { service: 4, margin: -4, cost: 7, risk: 2, satisfaction: 2, sync: 1 }, "Puede servir, pero necesita criterio de valor."],
        ],
      },
      {
        title: "Reunion S&OP: Finanzas no compra el plan",
        brief: "El volumen parece bueno, pero margen y cash no cierran.",
        options: [
          ["Revisar mix, descuentos y cash", "Conecta cajas con valor financiero.", { service: 1, margin: 5, cost: -1, risk: -2, cash: 5, sync: 6 }, "Un plan sin valor no es buen plan."],
          ["Aprobar volumen y ver margen despues", "Acelera ejecucion, pero esconde rentabilidad.", { service: 3, margin: -5, cost: 3, risk: 4, cash: -3, sync: -4 }, "El cierre del mes puede tapar deterioro de valor."],
          ["Dejar que Finanzas rehaga el forecast", "Mejora control, pero rompe ownership comercial.", { service: -2, margin: 2, risk: 2, satisfaction: -2, sync: -3 }, "Finanzas debe desafiar, no reemplazar."],
        ],
      },
      {
        title: "Reunion S&OP: datos perfectos tarde",
        brief: "El equipo quiere esperar una semana para tener mejor informacion.",
        options: [
          ["Decidir con rango y fecha de revision", "Permite avanzar sin fingir certeza.", { service: 3, margin: 2, cost: 1, risk: -2, satisfaction: 2, sync: 6 }, "Buena practica: rango, premisa y revision."],
          ["Esperar el dato perfecto", "Mejora precision, pero reduce tiempo de reaccion.", { service: -4, margin: -1, cost: 1, risk: 4, satisfaction: -3, sync: -3 }, "La precision tardia puede ser inutil."],
          ["Decidir sin dejar premisas", "Es rapido, pero dificil de aprender despues.", { service: 1, margin: 1, risk: 4, satisfaction: -1, sync: -4 }, "Sin premisas, no hay aprendizaje."],
        ],
      },
      {
        title: "Reunion S&OP: dos planes paralelos",
        brief: "Comercial comunica un plan y Operaciones ejecuta otro por falta de confianza.",
        options: [
          ["Forzar un plan unico con excepciones visibles", "Alinea ejecucion y deja riesgos claros.", { service: 4, margin: 2, cost: -1, risk: -5, satisfaction: 4, sync: 9 }, "La organizacion necesita una verdad operable."],
          ["Permitir ambos planes hasta cierre", "Evita conflicto, multiplica retrabajo.", { service: -4, margin: -3, cost: 5, risk: 6, satisfaction: -4, sync: -8 }, "Dos planes suelen significar cero plan."],
          ["Elegir el plan mas conservador", "Reduce riesgo operativo, pero puede perder oportunidad.", { service: -2, margin: -2, cost: -1, risk: -1, satisfaction: -2, sync: 1 }, "Conservador no siempre es alineado."],
        ],
      },
    ],
  },
};

const decisionPracticeScenarios = [
  ...decisionGames.supply.scenarios.map((scenario) => ({ ...scenario, family: "Restricciones de supply" })),
  ...decisionGames.executive.scenarios.map((scenario) => ({ ...scenario, family: "Decision ejecutiva" })),
  ...decisionGames.spike.scenarios.map((scenario) => ({ ...scenario, family: "Pico de demanda" })),
  ...decisionGames.meeting.scenarios.map((scenario) => ({ ...scenario, family: "Reunion S&OP" })),
];

const quizQuestions = [
  {
    q: "Que es S&OP en el enfoque del curso?",
    options: ["Un proceso de sincronizacion del negocio", "Una reunion mensual de Supply Chain", "Un reporte de ventas", "Un calculo estadistico aislado"],
    answer: 0,
    explain: "S&OP es la partitura comun: sincroniza demanda, supply, finanzas y estrategia.",
  },
  {
    q: "Que NO deberia ser una reunion S&OP?",
    options: ["Un espacio de decision", "Una conversacion de premisas", "Una revision de gaps", "Una busqueda de culpables"],
    answer: 3,
    explain: "El proceso no busca culpables ni post-mortems; busca decisiones y acciones.",
  },
  {
    q: "Cual es el primer paso tipico del ciclo down-top?",
    options: ["S&OP Ejecutivo", "Comite de Negocio", "Revision de actividades", "Revision de supply"],
    answer: 2,
    explain: "La revision de actividades arranca con acciones comerciales, promociones, pricing y lanzamientos.",
  },
  {
    q: "Que debe hacerse con el GAP entre forecast y target?",
    options: ["Mostrarlo y crear acciones para cubrirlo", "Ocultarlo igualando forecast al target", "Asignarlo siempre a Supply", "Eliminar el target"],
    answer: 0,
    explain: "El GAP visible permite que la organizacion decida acciones, riesgos y responsables.",
  },
  {
    q: "Que rol cumple Finanzas en S&OP?",
    options: ["Solo mirar costos logisticos", "Definir el forecast tecnico", "Reemplazar a Ventas", "Traducir volumen a valor, margen y cash flow"],
    answer: 3,
    explain: "Finanzas conecta volumen con rentabilidad, margen, cash flow y activos.",
  },
  {
    q: "Que significa tener un solo plan?",
    options: ["Que cada area tenga su version", "Que el board imponga un numero sin premisas", "Que la organizacion trabaje sobre una misma verdad", "Que Supply decida todo"],
    answer: 2,
    explain: "Un solo plan evita retrabajo, confusion y subasta de numeros.",
  },
  {
    q: "Que se revisa en Supply & Demand Review?",
    options: ["Factibilidad del plan, restricciones y oportunidades", "Solo campanas publicitarias", "Solo resultados pasados", "Unicamente precio"],
    answer: 0,
    explain: "Se revisan capacidad, materiales, stock, restricciones y plan ejecutable.",
  },
  {
    q: "Por que el forecast perfecto no existe?",
    options: ["Porque no hay datos", "Porque Ventas siempre se equivoca", "Porque el futuro tiene incertidumbre", "Porque Supply no participa"],
    answer: 2,
    explain: "El objetivo no es perfeccion: es generar certezas utiles para decidir.",
  },
  {
    q: "Que decision muestra mejor pensamiento S&OP?",
    options: ["Llegar al numero sin importar costo", "No declarar problemas hasta el cierre", "Cambiar el forecast sin premisas", "Mostrar opciones con impacto en KPIs"],
    answer: 3,
    explain: "S&OP explicita opciones, trade-offs, premisas, responsables e impacto en KPIs.",
  },
  {
    q: "Que horizonte debe mirar S&OP?",
    options: ["Solo la semana actual", "Corto, mediano y largo plazo", "Solo el cierre del mes", "Solo el presupuesto anual"],
    answer: 1,
    explain: "S&OP debe conectar ejecucion, tactica y estrategia.",
  },
  {
    q: "Que informacion deberia llegar a una reunion S&OP?",
    options: ["Cientos de slides para leer en vivo", "Premisas, riesgos, oportunidades, restricciones y decisiones pendientes", "Solo ventas historicas", "Solo problemas de Supply"],
    answer: 1,
    explain: "La reunion debe usar informacion accionable, no transformarse en trabajo operativo en vivo.",
  },
  {
    q: "Que objetivo contrapuesto aparece al subir stock?",
    options: ["Mejora cash automaticamente", "Puede mejorar servicio pero empeorar cash, espacio y waste", "Reduce siempre waste", "Elimina la necesidad de forecast"],
    answer: 1,
    explain: "Mas stock puede proteger servicio, pero consume capital y aumenta riesgo de obsolescencia o desperdicio.",
  },
  {
    q: "Que es una premisa en S&OP?",
    options: ["Una opinion sin responsable", "Una condicion asumida que explica el plan y debe documentarse", "Un numero inventado para cerrar el target", "Una excusa para no decidir"],
    answer: 1,
    explain: "Las premisas explican por que un numero tiene sentido y permiten aprender si luego no se cumplen.",
  },
  {
    q: "Que hace Demand Review?",
    options: ["Consolida baseline, actividades, riesgos y oportunidades de demanda", "Define unilateralmente capacidad de planta", "Aprueba pagos a proveedores", "Reemplaza al board"],
    answer: 0,
    explain: "Demand Review convierte informacion comercial y estadistica en una vision de demanda discutible.",
  },
  {
    q: "Que indica un bias de forecast?",
    options: ["Que el forecast tiene error aleatorio solamente", "Que no hace falta medir accuracy", "Que el error cae sistematicamente hacia un lado", "Que el target debe eliminarse"],
    answer: 2,
    explain: "El bias muestra sesgo: optimismo o conservadurismo repetido, no solo error normal.",
  },
  {
    q: "Que deberia contener una minuta ejecutiva S&OP?",
    options: ["Todo lo que dijo cada persona", "Solo graficos sin decisiones", "Chistes y comentarios de la reunion", "Decisiones, responsables, premisas, riesgos y acciones"],
    answer: 3,
    explain: "La minuta sincroniza a la organizacion si deja claro que cambia y quien debe actuar.",
  },
  {
    q: "Que pasa si igualamos forecast al target sin acciones?",
    options: ["Se crea una falsa certeza y caos operativo", "Mejora automaticamente el servicio", "Desaparece el riesgo", "Finanzas ya no participa"],
    answer: 0,
    explain: "Sin acciones y premisas, igualar forecast al target es una expresion de deseo.",
  },
  {
    q: "Que rol tiene el sponsor ejecutivo?",
    options: ["Tomar notas solamente", "Ser dueno del proceso y destrabar decisiones transversales", "Evitar que Finanzas participe", "Cambiar el forecast todos los dias"],
    answer: 1,
    explain: "El sponsor ejecutivo da poder al proceso y ayuda a resolver trade-offs entre areas.",
  },
  {
    q: "Que pregunta es mas S&OP frente a una restriccion de Supply?",
    options: ["A quien culpamos?", "Como ocultamos la restriccion?", "Que alternativas comerciales, financieras y operativas tenemos?", "Como cancelamos todas las ventas?"],
    answer: 2,
    explain: "Una restriccion visible permite buscar mix, acuerdos con clientes, capacidad alternativa o decisiones de margen.",
  },
  {
    q: "Que significa que S&OP sea una partitura?",
    options: ["Que cada area improvisa", "Que solo Supply toca", "Que la reunion debe ser larga", "Que todos conocen ritmo, roles y decisiones para tocar sincronizados"],
    answer: 3,
    explain: "La partitura ordena el ritmo y las entradas de cada area para ejecutar un solo plan.",
  },
];

const stories = [
  {
    mark: "Caso 01",
    title: "Faltan 3 puntos",
    setup: "El board pide llegar al target, pero el mes cierra en 97. Logistica puede abrir una operacion extraordinaria, Comercial propone sustituir producto y Finanzas advierte que el margen ya esta bajo.",
    lesson: "La decision madura no empieza preguntando como llegar al numero, sino que costo acepta el negocio para llegar. S&OP sirve para mostrar alternativas con impacto en servicio, margen, riesgo de cliente y aprendizaje futuro.",
  },
  {
    mark: "Caso 02",
    title: "El cliente imprevisible que ya era previsible",
    setup: "Un cliente pide volumen extra al final del mes durante siete ciclos. Cada vez aparece como sorpresa, se arma urgencia, se fuerza stock y se discute quien tuvo la culpa.",
    lesson: "Cuando una incertidumbre se repite, deja de ser sorpresa y pasa a ser escenario. El proceso deberia definir trigger, capacidad reservada, costo aprobado y regla comercial antes de que llegue el pedido.",
  },
  {
    mark: "Caso 03",
    title: "El volumen que destruyo margen",
    setup: "El mes cerro arriba del objetivo de volumen. La celebracion duro poco: el mix vendido fue barato, hubo descuentos fuera de plan y se usaron fletes express para sostener servicio.",
    lesson: "Supply Chain no puede mirar solo cajas. Un S&OP serio conecta volumen con margen, costo logistico, cash y promesa de cliente. Vender mas no siempre significa dirigir mejor.",
  },
];

const masterMonths = [
  {
    title: "Mes 1: demanda estable",
    context: "El negocio arranca ordenado, pero Finanzas quiere bajar capital y Comercial no quiere perder disponibilidad.",
    messages: ["CEO: quiero un plan simple y confiable.", "Demanda: la base viene estable, pero dos clientes estan sensibles.", "Finanzas: cuidemos cash desde el inicio."],
    event: "Forecast dentro del rango esperado.",
    options: [
      ["Mantener plan base y documentar premisas", { service: 3, inventory: 1, margin: 2, cost: -1, risk: -3, satisfaction: 2, cash: 2, sync: 5 }, null, "Arrancaste con disciplina: claridad antes de velocidad."],
      ["Crear buffer preventivo en SKUs A", { service: 2, inventory: 6, margin: -2, cost: 3, risk: 2, cash: -6, sync: -1 }, { month: 3, tone: "danger", impact: { risk: 3, cash: -3 }, text: "Alarma: el buffer preventivo empieza a presionar espacio y capital justo cuando aparece una restriccion." }, "Protege servicio, pero compra costo futuro."],
      ["Liberar cash en baja rotacion", { service: -3, inventory: -6, margin: 1, cost: -2, risk: 4, satisfaction: -3, cash: 7, sync: -2 }, { month: 1, tone: "danger", impact: { service: -4, satisfaction: -4, risk: 3 }, text: "Alarma: como no te abasteciste lo suficiente, la promocion encuentra menos cobertura y sube el riesgo de quiebre." }, "El cash mejora hoy, pero baja resiliencia."],
    ],
  },
  {
    title: "Mes 2: promocion de Marketing",
    context: "Marketing activa una promo fuerte. El volumen es atractivo, pero la capacidad solo cubre una parte del upside.",
    messages: ["Marketing: la promo puede traer +15%.", "Supply: la capacidad no cubre todo el upside.", "Cliente: necesitamos fecha firme."],
    event: "Forecast spike por promocion.",
    options: [
      ["Validar promo por mix y capacidad", { service: 4, inventory: -2, margin: 4, cost: 1, risk: -3, satisfaction: 4, cash: 2, sync: 6 }, { month: 2, tone: "benefit", impact: { service: 3, risk: -3, satisfaction: 2 }, text: "Beneficio: como validaste mix y capacidad, el faltante de proveedor no rompe completamente el servicio." }, "La promo entra al plan con restricciones visibles."],
      ["Maximizar promo en clientes clave", { service: 2, inventory: -5, margin: -5, cost: 6, risk: 6, satisfaction: -2, cash: -4, sync: -5 }, { month: 2, tone: "danger", impact: { risk: 4, cost: 3, satisfaction: -3 }, text: "Alarma: la promo agresiva genera urgencias y promesas dificiles de cumplir cuando falla el proveedor." }, "Vender mas no siempre significa decidir mejor."],
      ["Reducir promo a canales controlados", { service: -2, inventory: 3, margin: -2, cost: -2, risk: -1, satisfaction: -5, cash: 1, sync: -3 }, null, "Protege operacion, pero golpea oportunidad comercial."],
    ],
  },
  {
    title: "Mes 3: falla de proveedor",
    context: "Un proveedor critico falla. Hay material para cubrir solo parte del plan.",
    messages: ["Proveedor: entregamos 60% esta semana.", "Supply: necesitamos priorizar.", "Ventas: cliente clave amenaza con penalidad."],
    event: "Faltante de materia prima.",
    options: [
      ["Priorizar contrato penalizable", { service: 5, inventory: -3, margin: 2, cost: 2, risk: -5, satisfaction: 5, cash: 1, sync: 5 }, null, "Protegiste valor y riesgo comercial."],
      ["Comprar spot para cubrir el pico", { service: 5, margin: -5, cost: 8, risk: 1, satisfaction: 3, cash: -6, sync: 1 }, { month: 3, tone: "danger", impact: { margin: -3, cash: -4, cost: 3 }, text: "Alarma: la compra spot llega a tiempo, pero su costo pega en margen y cash el mes siguiente." }, "Correcto si se aprueba como excepcion, peligroso como habito."],
      ["Repartir material por contratos activos", { service: -4, margin: -2, cost: 1, risk: 5, satisfaction: -5, sync: -4 }, null, "Parece equilibrado, pero puede no proteger a nadie."],
    ],
  },
  {
    title: "Mes 4: presion por bajar inventario",
    context: "Finanzas exige liberar cash. Operaciones advierte que viene demanda incierta.",
    messages: ["Finanzas: necesitamos bajar capital de trabajo.", "Demanda: hay incertidumbre en dos clientes.", "Deposito: el espacio esta justo."],
    event: "Presion por reducir inventario.",
    options: [
      ["Bajar inventario con segmentacion ABC", { service: 2, inventory: -5, margin: 2, cost: -3, risk: -2, satisfaction: 2, cash: 6, sync: 5 }, { month: 4, tone: "benefit", impact: { cash: 3, risk: -2, service: 2 }, text: "Beneficio: como segmentaste el inventario, el pedido inesperado encuentra cobertura en los SKUs criticos." }, "Buen equilibrio: menos stock donde duele menos."],
      ["Recorte rapido en familias de bajo margen", { service: -5, inventory: -8, margin: 1, cost: -4, risk: 6, satisfaction: -5, cash: 8, sync: -4 }, { month: 4, tone: "danger", impact: { service: -5, satisfaction: -4, risk: 4 }, text: "Alarma: el recorte rapido deja sin cobertura al pedido inesperado y aparece riesgo de quiebre." }, "El Excel queda lindo, la operacion no tanto."],
      ["Sostener inventario hasta tener mejor senal", { service: 2, inventory: 3, margin: -1, cost: 2, risk: 1, satisfaction: 2, cash: -5, sync: -2 }, null, "Protege servicio, pero ignora la presion financiera."],
    ],
  },
  {
    title: "Mes 5: pedido inesperado",
    context: "Un cliente nuevo pide volumen alto con buen margen. Hay poco tiempo para responder.",
    messages: ["Ventas: oportunidad premium.", "Supply: capacidad limitada.", "Finanzas: margen atractivo, cuidado costo express."],
    event: "Pedido inesperado de cliente.",
    options: [
      ["Aceptar parcial con fecha realista", { service: 4, inventory: -3, margin: 5, cost: 2, risk: -2, satisfaction: 5, cash: 3, sync: 6 }, null, "Ganaste margen sin prometer lo imposible."],
      ["Aceptar con operativo express", { service: 1, inventory: -6, margin: 1, cost: 8, risk: 7, satisfaction: -3, cash: -2, sync: -5 }, { month: 5, tone: "danger", impact: { risk: 4, cost: 4, satisfaction: -4 }, text: "Alarma: la promesa agresiva crea tension justo cuando llega la crisis de transporte." }, "El volumen seduce, pero el servicio queda expuesto."],
      ["Negociar entrega futura y menor volumen", { service: -2, margin: -6, cost: -2, risk: -1, satisfaction: -4, cash: -3, sync: -1 }, null, "Conservador: evita caos, pero pierde oportunidad estrategica."],
    ],
  },
  {
    title: "Mes 6: crisis de transporte",
    context: "Una huelga reduce la capacidad de transporte. El board quiere cerrar el ciclo sin romper clientes.",
    messages: ["Logistica: flota limitada por 72 horas.", "CEO: quiero prioridades claras.", "Atencion al cliente: reclamos subiendo."],
    event: "Crisis de transporte.",
    options: [
      ["Priorizar clientes criticos y comunicar fechas", { service: 5, inventory: 1, margin: 3, cost: 2, risk: -5, satisfaction: 6, cash: 2, sync: 7 }, null, "Cierre fuerte: foco, comunicacion y trade-offs explicitos."],
      ["Transporte premium para cuentas criticas", { service: 6, margin: -6, cost: 10, risk: 1, satisfaction: 4, cash: -7, sync: 1 }, null, "Servicio alto, costo muy alto. Solo sirve con decision ejecutiva."],
      ["Consolidar despachos para reducir costo", { service: -5, margin: -2, cost: -1, risk: 6, satisfaction: -7, sync: -6 }, null, "Operativamente simple, estrategicamente debil."],
    ],
  },
];

const quickPrompts = [
  "Como leo un GAP?",
  "Que hago con un forecast imperfecto?",
  "Como detecto bias?",
  "Que debe tener una minuta S&OP?",
  "Que objetivos se contraponen?",
  "Servicio o margen?",
  "Stock alto o stock bajo?",
  "Como priorizo en una crisis?",
  "Que hace Finanzas en S&OP?",
  "Como preparo escenarios?",
];

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function mergeImpact(target, source = {}) {
  Object.entries(source).forEach(([key, value]) => {
    const normalizedKey = kpiAliases[key] || key;
    if (!(normalizedKey in baseState)) return;
    target[normalizedKey] = (target[normalizedKey] ?? 0) + value;
  });
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || "null");
    return JSON.parse(JSON.stringify({ ...defaultProgress, ...(saved || {}) }));
  } catch {
    return JSON.parse(JSON.stringify(defaultProgress));
  }
}

function getCurrentLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function seededRandom(seedText) {
  let seed = 2166136261;
  for (let index = 0; index < seedText.length; index += 1) {
    seed ^= seedText.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }
  return () => {
    seed += 0x6D2B79F5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledIndexes(length, seedText) {
  const random = seededRandom(seedText);
  const values = Array.from({ length }, (_, index) => index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [values[index], values[swap]] = [values[swap], values[index]];
  }
  return values;
}

function checkDailyReset() {
  const today = getCurrentLocalDateKey();
  const saved = JSON.parse(localStorage.getItem(dailyKey) || "null");
  if (saved?.date === today && saved?.crossword?.version === "connected-v5") return saved;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getCurrentLocalDateKey(yesterday);
  const streak = saved?.crossword?.completedDates?.includes(yesterdayKey) ? (saved.crossword.streak || 0) : 0;
  const next = {
    date: today,
    dailyXp: 0,
    completedMiniGames: [],
    simulationCompleted: false,
    allMiniGamesBonusClaimed: false,
    miniGameSeeds: generateDailyMiniGames(today),
    simulationSeed: generateDailySimulation(today),
    crossword: {
      ...generateDailyCrossword(today),
      completed: false,
      completedDates: saved?.crossword?.completedDates || [],
      streak,
      bestTime: saved?.crossword?.bestTime || null,
      perfectCompletions: saved?.crossword?.perfectCompletions || 0,
      streakBonuses: saved?.crossword?.streakBonuses || [],
    },
  };
  saveDailyContent(next);
  return next;
}

function saveDailyContent(content = dailyContent) {
  localStorage.setItem(dailyKey, JSON.stringify(content));
}

function generateDailyMiniGames(dateKey) {
  return {
    gap: shuffledIndexes(gapScenarios.length, `${dateKey}-gap`),
    stock: shuffledIndexes(stockScenarios.length, `${dateKey}-stock`),
    decision: shuffledIndexes(decisionPracticeScenarios.length, `${dateKey}-decision`),
    quiz: shuffledIndexes(quizQuestions.length, `${dateKey}-quiz`),
    baseShift: Math.floor(seededRandom(`${dateKey}-base`)() * 9) - 4,
  };
}

function generateDailySimulation(dateKey) {
  const random = seededRandom(`${dateKey}-simulation`);
  return {
    eventBias: random(),
    serviceShift: Math.floor(random() * 9) - 4,
    marginShift: Math.floor(random() * 5) - 2,
    riskShift: Math.floor(random() * 7),
  };
}

function generateDailyCrossword(dateKey) {
  const difficulty = currentDifficulty().index;
  const targetWords = 20;
  const size = difficulty >= 5 ? 41 : 45;
  const random = seededRandom(`${dateKey}-crossword-placement`);
  const orderedWords = shuffledIndexes(crosswordWordPool.length, `${dateKey}-crossword`)
    .map((poolIndex) => normalizeCrosswordWord(crosswordWordPool[poolIndex]))
    .filter(Boolean)
    .filter((item, index, list) => list.findIndex((candidate) => candidate.word === item.word) === index)
    .filter((item) => item.word.length >= 4 && item.word.length <= (difficulty >= 4 ? 16 : 14));
  [
    ["PLAN", "Plan integrado usado para coordinar decisiones."],
    ["FLOW", "Flujo fisico, financiero o de informacion."],
    ["DATA", "Datos que sostienen premisas y decisiones."],
    ["BIAS", "Sesgo sistematico que distorsiona el forecast."],
    ["CASH", "Caja disponible afectada por inventario y servicio."],
    ["COST", "Costo de servir o ejecutar una decision."],
    ["RISK", "Riesgo que debe hacerse visible antes de ejecutar."],
    ["GAPS", "Diferencias visibles entre plan, target y realidad."],
    ["OTIF", "Entrega a tiempo y completa."],
    ["LOAD", "Carga operativa sobre capacidad o transporte."],
    ["MIX", "Combinacion de productos, canales o clientes."],
    ["SKU", "Unidad especifica gestionada en inventario."],
  ].forEach(([word, clue]) => {
    if (!orderedWords.some((item) => item.word === word)) orderedWords.push({ word, clue });
  });
  const finalEntries = buildBalancedConnectedCrossword(orderedWords, targetWords, size, random, difficulty).entries;
  numberCrosswordEntries(finalEntries);
  return buildCrosswordGrid(finalEntries, size);
}

function buildConnectedCrosswordAttempt({ seedWord, candidates, targetWords, size, random, difficulty, relaxed, attemptIndex }) {
  const placed = [{
    ...seedWord,
    id: 0,
    direction: attemptIndex % 2 === 0 ? "across" : "down",
    row: Math.floor(size / 2) - (attemptIndex % 2 === 0 ? 0 : Math.floor(seedWord.word.length / 2)),
    col: Math.floor(size / 2) - (attemptIndex % 2 === 0 ? Math.floor(seedWord.word.length / 2) : 0),
  }];
  const board = new Map();
  writeEntryToBoard(board, placed[0]);
  const remaining = candidates
    .filter((item) => item.word !== seedWord.word)
    .map((item) => ({ ...item }));
  for (let pass = 0; pass < 5 && placed.length < targetWords; pass += 1) {
    let placedThisPass = 0;
    while (placed.length < targetWords) {
      const ranked = remaining
        .filter((candidate) => !candidate.used)
        .map((candidate) => ({
          candidate,
          placement: bestCrosswordPlacement(candidate, placed, board, size, random, difficulty, relaxed),
        }))
        .filter((item) => item.placement)
        .sort((a, b) => b.placement.score - a.placement.score);
      if (!ranked.length) break;
      const { candidate, placement } = ranked[0];
      const entry = {
        ...candidate,
        id: placed.length,
        direction: placement.direction,
        row: placement.row,
        col: placement.col,
      };
      candidate.used = true;
      placed.push(entry);
      writeEntryToBoard(board, entry);
      placedThisPass += 1;
    }
    if (!placedThisPass) break;
  }
  return { entries: placed, area: crosswordCompactnessScore(placed, size) };
}

function normalizeCrosswordWord([rawWord, clue]) {
  const word = rawWord
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();
  if (!word) return null;
  return { word, clue };
}

function crosswordKey(row, col) {
  return `${row},${col}`;
}

function readBoardCell(board, row, col) {
  return board.get(crosswordKey(row, col));
}

function writeEntryToBoard(board, entry) {
  [...entry.word].forEach((letter, offset) => {
    const row = entry.row + (entry.direction === "down" ? offset : 0);
    const col = entry.col + (entry.direction === "across" ? offset : 0);
    const key = crosswordKey(row, col);
    const cell = board.get(key) || { letter, entries: [], directions: [] };
    cell.letter = letter;
    cell.entries.push(entry.id);
    cell.directions.push(entry.direction);
    board.set(key, cell);
  });
}

function bestCrosswordPlacement(candidate, placed, board, size, random, difficulty, relaxed = false, requiredDirection = null) {
  const placements = [];
  placed.forEach((anchor) => {
    [...candidate.word].forEach((candidateLetter, candidateIndex) => {
      [...anchor.word].forEach((anchorLetter, anchorIndex) => {
        if (candidateLetter !== anchorLetter) return;
        const direction = anchor.direction === "across" ? "down" : "across";
        if (requiredDirection && direction !== requiredDirection) return;
        const row = direction === "down" ? anchor.row - candidateIndex : anchor.row;
        const col = direction === "across" ? anchor.col - candidateIndex : anchor.col;
        const validation = validateCrosswordPlacement(candidate.word, direction, row, col, board, size, relaxed);
        if (!validation.valid) return;
        const compactness = crosswordCompactnessScore([...placed, { word: candidate.word, direction, row, col }], size);
        const densityBonus = validation.crossings * (difficulty >= 4 ? 18 : 14);
        const centerDistance = Math.abs(row - size / 2) + Math.abs(col - size / 2);
        placements.push({
          direction,
          row,
          col,
        score: densityBonus + candidate.word.length * 3 - compactness * 0.08 - centerDistance * 0.08 + random(),
        });
      });
    });
  });
  return placements.sort((a, b) => b.score - a.score)[0] || null;
}

function validateCrosswordPlacement(word, direction, row, col, board, size, relaxed = false) {
  if (row < 1 || col < 1) return { valid: false, crossings: 0 };
  const endRow = row + (direction === "down" ? word.length - 1 : 0);
  const endCol = col + (direction === "across" ? word.length - 1 : 0);
  if (endRow >= size - 1 || endCol >= size - 1) return { valid: false, crossings: 0 };
  if (!relaxed) {
    const before = direction === "across" ? readBoardCell(board, row, col - 1) : readBoardCell(board, row - 1, col);
    const after = direction === "across" ? readBoardCell(board, row, endCol + 1) : readBoardCell(board, endRow + 1, col);
    if (before || after) return { valid: false, crossings: 0 };
  }
  let crossings = 0;
  for (let offset = 0; offset < word.length; offset += 1) {
    const currentRow = row + (direction === "down" ? offset : 0);
    const currentCol = col + (direction === "across" ? offset : 0);
    const cell = readBoardCell(board, currentRow, currentCol);
    if (cell) {
      if (cell.letter !== word[offset]) return { valid: false, crossings: 0 };
      if (cell.directions.includes(direction)) return { valid: false, crossings: 0 };
      if (!cell.directions.includes(direction)) crossings += 1;
      continue;
    }
    if (!relaxed) {
      const sideA = direction === "across" ? readBoardCell(board, currentRow - 1, currentCol) : readBoardCell(board, currentRow, currentCol - 1);
      const sideB = direction === "across" ? readBoardCell(board, currentRow + 1, currentCol) : readBoardCell(board, currentRow, currentCol + 1);
      if (sideA || sideB) return { valid: false, crossings: 0 };
    }
  }
  return { valid: crossings > 0, crossings };
}

function crosswordCompactnessScore(entries, size) {
  const bounds = entries.reduce((acc, entry) => {
    const endRow = entry.row + (entry.direction === "down" ? entry.word.length - 1 : 0);
    const endCol = entry.col + (entry.direction === "across" ? entry.word.length - 1 : 0);
    return {
      minRow: Math.min(acc.minRow, entry.row),
      maxRow: Math.max(acc.maxRow, endRow),
      minCol: Math.min(acc.minCol, entry.col),
      maxCol: Math.max(acc.maxCol, endCol),
    };
  }, { minRow: size, maxRow: 0, minCol: size, maxCol: 0 });
  return (bounds.maxRow - bounds.minRow + 1) * (bounds.maxCol - bounds.minCol + 1);
}

function numberCrosswordEntries(entries) {
  const starts = [...entries].sort((a, b) => a.row - b.row || a.col - b.col || (a.direction === "across" ? -1 : 1));
  const numbers = new Map();
  let number = 1;
  starts.forEach((entry) => {
    const key = crosswordKey(entry.row, entry.col);
    if (!numbers.has(key)) {
      numbers.set(key, number);
      number += 1;
    }
    entry.number = numbers.get(key);
  });
}

function buildCrosswordGrid(entries, size) {
  const bounds = entries.reduce((acc, entry) => {
    const endRow = entry.row + (entry.direction === "down" ? entry.word.length - 1 : 0);
    const endCol = entry.col + (entry.direction === "across" ? entry.word.length - 1 : 0);
    return {
      minRow: Math.min(acc.minRow, entry.row),
      maxRow: Math.max(acc.maxRow, endRow),
      minCol: Math.min(acc.minCol, entry.col),
      maxCol: Math.max(acc.maxCol, endCol),
    };
  }, { minRow: size, maxRow: 0, minCol: size, maxCol: 0 });
  const padding = 1;
  const rowOffset = Math.max(0, bounds.minRow - padding);
  const colOffset = Math.max(0, bounds.minCol - padding);
  const outputRows = bounds.maxRow - rowOffset + padding + 1;
  const outputCols = bounds.maxCol - colOffset + padding + 1;
  const grid = Array.from({ length: outputRows }, () => Array.from({ length: outputCols }, () => null));
  entries.forEach((entry) => {
    entry.row -= rowOffset;
    entry.col -= colOffset;
    [...entry.word].forEach((letter, offset) => {
      const row = entry.row + (entry.direction === "down" ? offset : 0);
      const col = entry.col + (entry.direction === "across" ? offset : 0);
      const cell = grid[row][col] || { letter, entries: [] };
      cell.letter = letter;
      cell.entries.push(entry.id);
      grid[row][col] = cell;
    });
  });
  applySparseBlackBlocks(grid);
  return { size: outputCols, rows: outputRows, entries, grid, version: "connected-v5" };
}

function buildBalancedConnectedCrossword(candidates, targetWords, size, random, difficulty) {
  const spineCandidates = [...candidates]
    .filter((item) => item.word.length >= 10 && item.word.length <= 16)
    .slice(0, 48);
  const attempts = spineCandidates.map((spineWord) => buildSpineCrosswordAttempt(spineWord, candidates, targetWords, size, random, difficulty));
  return attempts.sort((a, b) =>
    b.entries.length - a.entries.length ||
    countDirection(b.entries, "across") - countDirection(a.entries, "across") ||
    a.area - b.area
  )[0];
}

function buildSpineCrosswordAttempt(spineWord, candidates, targetWords, size, random, difficulty) {
  const entries = [{
    ...spineWord,
    id: 0,
    direction: "across",
    row: Math.floor(size / 2),
    col: Math.floor((size - spineWord.word.length) / 2),
  }];
  const board = new Map();
  writeEntryToBoard(board, entries[0]);
  const unused = candidates.filter((item) => item.word !== spineWord.word).map((item) => ({ ...item }));
  const quota = { across: targetWords / 2, down: targetWords / 2 };
  [...spineWord.word].forEach((letter, spineIndex) => {
    if (countDirection(entries, "down") >= quota.down) return;
    const candidate = unused
      .filter((item) => !item.used && item.word.includes(letter) && item.word.length <= 14)
      .sort((a, b) => Math.abs(8 - a.word.length) - Math.abs(8 - b.word.length))[0];
    if (!candidate) return;
    const preferred = Math.floor(candidate.word.length / 2);
    const positions = [...candidate.word]
      .map((candidateLetter, index) => candidateLetter === letter ? index : -1)
      .filter((index) => index >= 0)
      .sort((a, b) => Math.abs(a - preferred) - Math.abs(b - preferred));
    const crossIndex = positions[0];
    const row = entries[0].row - crossIndex;
    const col = entries[0].col + spineIndex;
    const validation = validateCrosswordPlacement(candidate.word, "down", row, col, board, size, true);
    if (!validation.valid) return;
    const entry = { ...candidate, id: entries.length, direction: "down", row, col };
    candidate.used = true;
    entries.push(entry);
    writeEntryToBoard(board, entry);
  });
  let safety = 0;
  while ((countDirection(entries, "across") < quota.across || countDirection(entries, "down") < quota.down) && safety < 500) {
    safety += 1;
    const neededDirection = countDirection(entries, "across") < quota.across ? "across" : "down";
    const ranked = unused
      .filter((item) => !item.used)
      .map((candidate) => ({
        candidate,
        placement: bestCrosswordPlacement(candidate, entries, board, size, random, difficulty, true, neededDirection),
      }))
      .filter((item) => item.placement)
      .sort((a, b) => {
        const aFit = (14 - a.candidate.word.length) * 4;
        const bFit = (14 - b.candidate.word.length) * 4;
        return (b.placement.score + bFit) - (a.placement.score + aFit);
      });
    let candidate = ranked[0]?.candidate;
    let placement = ranked[0]?.placement;
    if (!placement && neededDirection === "across") {
      const rescue = rescueAcrossPlacement(unused, entries, board, size);
      candidate = rescue?.candidate;
      placement = rescue?.placement;
    }
    if (!candidate) break;
    const entry = { ...candidate, id: entries.length, direction: placement.direction, row: placement.row, col: placement.col };
    candidate.used = true;
    entries.push(entry);
    writeEntryToBoard(board, entry);
  }
  return { entries, area: crosswordCompactnessScore(entries, size) };
}

function rescueAcrossPlacement(unused, entries, board, size) {
  const downAnchors = entries
    .filter((entry) => entry.direction === "down")
    .sort((a, b) => a.col - b.col);
  for (const anchor of downAnchors) {
    const preferLeft = anchor.col > size / 2;
    for (const candidate of unused.filter((item) => !item.used).sort((a, b) => a.word.length - b.word.length)) {
      const positions = [...candidate.word]
        .map((letter, index) => anchor.word.includes(letter) ? index : -1)
        .filter((index) => index >= 0)
        .sort((a, b) => preferLeft ? b - a : a - b);
      for (const candidateIndex of positions) {
        const anchorIndex = anchor.word.indexOf(candidate.word[candidateIndex]);
        const row = anchor.row + anchorIndex;
        const col = anchor.col - candidateIndex;
        const validation = validateCrosswordPlacement(candidate.word, "across", row, col, board, size, true);
        if (validation.valid) return { candidate, placement: { direction: "across", row, col, score: 0 } };
      }
    }
  }
  return null;
}

function countDirection(entries, direction) {
  return entries.filter((entry) => entry.direction === direction).length;
}

function applySparseBlackBlocks(grid) {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  const maxBlackBlocks = Math.floor(rows * cols * 0.1);
  let blackBlocks = 0;
  for (let row = 0; row < rows && blackBlocks < maxBlackBlocks; row += 1) {
    for (let col = 0; col < cols && blackBlocks < maxBlackBlocks; col += 1) {
      if (grid[row][col]) continue;
      const nearLetter =
        grid[row - 1]?.[col] ||
        grid[row + 1]?.[col] ||
        grid[row]?.[col - 1] ||
        grid[row]?.[col + 1];
      if (nearLetter) continue;
      grid[row][col] = { block: true };
      blackBlocks += 1;
    }
  }
}


function secondsUntilNextRefresh() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setDate(now.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);
  return Math.max(0, Math.floor((midnight - now) / 1000));
}

function saveProgress() {
  // Future Supabase sync point: replace/extend this localStorage write with authenticated user progress persistence.
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function uniquePush(list, item) {
  if (!list.includes(item)) list.push(item);
}

function levelIndexByName(name) {
  return Math.max(0, levels.findIndex((level) => level.name === name));
}

function completedCoreMiniGames() {
  return progress.completedMiniGames.filter((game) => coreMiniGames.includes(game)).length;
}

function calculateLevel() {
  const lessonCount = progress.completedSections.filter((item) => item.startsWith("lesson-")).length;
  const miniCount = completedCoreMiniGames();
  let unlocked = levels[0];
  levels.forEach((level) => {
    const meetsGate =
      progress.xp >= level.xp &&
      lessonCount >= level.lessons &&
      miniCount >= level.miniGames &&
      progress.lastSimulationScore >= level.simulationScore;
    if (meetsGate) unlocked = level;
  });
  return unlocked.name;
}

function nextLevelInfo() {
  const index = levelIndexByName(progress.level);
  return levels[Math.min(index + 1, levels.length - 1)];
}

function currentDifficulty() {
  const index = levelIndexByName(progress.level);
  return {
    index,
    label: levels[index].name,
    targetPressure: Math.min(10, index * 2),
    forecastPressure: Math.min(7, index),
    negativeMultiplier: 1 + index * 0.08,
  };
}

function showToast(message) {
  const stack = document.querySelector("#toastStack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function showLevelUpModal(levelName) {
  const modal = document.querySelector("#levelModal");
  if (!modal) return;
  document.querySelector("#levelModalTitle").textContent = levelName;
  document.querySelector("#levelModalCopy").textContent =
    "Subiste de nivel porque no solo juntaste XP: tambien completaste hitos de teoria, practica y performance.";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function addXP(amount, reason = "Progreso") {
  if (!amount) return;
  const previousLevel = progress.level;
  progress.xp += amount;
  progress.level = calculateLevel();
  saveProgress();
  renderProgressDashboard();
  showToast(`+${amount} XP · ${reason}`);
  if (progress.level !== previousLevel) showLevelUpModal(progress.level);
}

function unlockBadge(name) {
  if (progress.badges.includes(name)) return;
  uniquePush(progress.badges, name);
  saveProgress();
  renderProgressDashboard();
  showToast(`Badge desbloqueado: ${name}`);
}

function checkBadges() {
  const lessonCount = progress.completedSections.filter((item) => item.startsWith("lesson-")).length;
  if (lessonCount >= 3) unlockBadge("One Plan Thinker");
  if (progress.completedMiniGames.includes("forecast")) unlockBadge("Gap Hunter");
  if (progress.completedMiniGames.includes("stock")) unlockBadge("Inventory Guardian");
  if (progress.marginProtected >= 2) unlockBadge("Margin Protector");
  if (progress.balancedDecisions >= 3) unlockBadge("Trade-off Master");
  if (progress.lastSimulationScore > 0) unlockBadge("Crisis Leader");
  if (progress.completedMiniGames.includes("quiz")) unlockBadge("No Blame Culture");
  if (progress.lastSimulationScore >= 110) unlockBadge("SC Director Mindset");
}

function completeLearningJourney(index) {
  const id = `lesson-${index}`;
  if (progress.completedSections.includes(id)) return;
  uniquePush(progress.completedSections, id);
  addXP(40, "Modulo de teoria completado");
  checkBadges();
}

function isLessonCompleted(index) {
  return progress.completedSections.includes(`lesson-${index}`);
}

function getLessonEngagement(index) {
  if (!lessonEngagement[index]) {
    lessonEngagement[index] = {
      elapsed: 0,
      contentViewed: false,
      checkpointCompleted: [],
      checkpointFeedback: {},
    };
  }
  return lessonEngagement[index];
}

function stopLessonTimer() {
  if (lessonTimer) clearInterval(lessonTimer);
  lessonTimer = null;
}

function startLessonEngagement(index) {
  stopLessonTimer();
  if (index === null || isLessonCompleted(index)) {
    updateLessonProgressUI(index);
    return;
  }
  getLessonEngagement(index);
  updateLessonProgressUI(index);
  lessonTimer = setInterval(() => {
    if (currentLesson !== index) return stopLessonTimer();
    const state = getLessonEngagement(index);
    state.elapsed = Math.min(25, state.elapsed + 1);
    updateLessonProgressUI(index);
    maybeCompleteLesson(index);
  }, 1000);
}

function maybeCompleteLesson(index) {
  if (isLessonCompleted(index)) return;
  const state = getLessonEngagement(index);
  const allCheckpointsDone = lessonCheckpoints[index].every((_, checkpointIndex) => state.checkpointCompleted.includes(checkpointIndex));
  if (state.elapsed >= 25 && state.contentViewed && allCheckpointsDone) {
    completeLearningJourney(index);
    updateLessonProgressUI(index);
    renderJourney();
    startLessonEngagement(index);
    showToast("Modulo completado · XP otorgado");
  }
}

function updateLessonProgressUI(index) {
  if (index === null || index === undefined) return;
  const panel = document.querySelector(`[data-lesson-panel="${index}"]`);
  if (!panel) return;
  const state = getLessonEngagement(index);
  const completed = isLessonCompleted(index);
  const timeDone = completed || state.elapsed >= 25;
  const contentDone = completed || state.contentViewed;
  const correctCount = completed ? lessonCheckpoints[index].length : state.checkpointCompleted.length;
  const checkpointDone = completed || correctCount === lessonCheckpoints[index].length;
  panel.querySelector("[data-lesson-time]").textContent = completed ? "Completado" : `${state.elapsed}/25s`;
  panel.querySelector("[data-lesson-content]").textContent = contentDone ? "Visto" : "Pendiente";
  panel.querySelector("[data-lesson-checkpoint]").textContent = checkpointDone ? "Correcto" : `${correctCount}/${lessonCheckpoints[index].length}`;
  panel.querySelector("[data-lesson-time]").classList.toggle("done", timeDone);
  panel.querySelector("[data-lesson-content]").classList.toggle("done", contentDone);
  panel.querySelector("[data-lesson-checkpoint]").classList.toggle("done", checkpointDone);
  const status = panel.querySelector("[data-lesson-status]");
  if (completed) status.textContent = "Completed";
  else if (!timeDone) status.textContent = "Mantené el modulo abierto al menos 25 segundos.";
  else if (!contentDone) status.textContent = "Revisá o revelá el contenido completo.";
  else if (!checkpointDone) status.textContent = "Respondé correctamente el checkpoint.";
  else status.textContent = "Listo para completar.";
}

function completeMiniGame(id, score = 0) {
  const firstCompletion = !progress.completedMiniGames.includes(id);
  if (firstCompletion) {
    uniquePush(progress.completedMiniGames, id);
    addXP(50, "Mini juego completado");
  }
  const previousBest = progress.bestScores[id] || 0;
  if (score > previousBest) {
    progress.bestScores[id] = score;
    addXP(previousBest ? 20 : 0, "Mejoraste tu score");
  }
  saveProgress();
  checkBadges();
  renderProgressDashboard();
  claimDailyMiniGameXp(id, score);
}

function claimDailyMiniGameXp(id, score = 0) {
  if (!coreMiniGames.includes(id)) return;
  if (!dailyContent || dailyContent.completedMiniGames.includes(id)) return;
  dailyContent.completedMiniGames.push(id);
  dailyContent.dailyXp += 65;
  addXP(65, `Mini juego diario: ${id}`);
  if (score >= 18) {
    dailyContent.dailyXp += 20;
    addXP(20, "Perfect score diario");
  }
  const dailyCoreCount = dailyContent.completedMiniGames.filter((game) => coreMiniGames.includes(game)).length;
  if (dailyCoreCount >= coreMiniGames.length && !dailyContent.allMiniGamesBonusClaimed) {
    dailyContent.allMiniGamesBonusClaimed = true;
    dailyContent.dailyXp += 100;
    addXP(100, "Completaste todos los mini juegos diarios");
  }
  saveDailyContent();
  renderProgressDashboard();
}

function completeMasterSimulation(score) {
  const previousScore = progress.lastSimulationScore || 0;
  const firstCompletion = !progress.completedSections.includes("master-simulation");
  uniquePush(progress.completedSections, "master-simulation");
  progress.lastSimulationScore = Math.max(previousScore, score);
  addXP(firstCompletion ? 120 : 0, "Simulacion maestra completada");
  if (score > previousScore) addXP(20, "Mejoraste tu simulacion");
  saveProgress();
  checkBadges();
  renderProgressDashboard();
  claimDailySimulationXp(score);
}

function claimDailySimulationXp(score) {
  if (!dailyContent || dailyContent.simulationCompleted) return;
  dailyContent.simulationCompleted = true;
  dailyContent.dailyXp += 150;
  addXP(150, "Simulacion diaria completada");
  const previousBest = progress.bestScores.masterDaily || 0;
  if (score > previousBest) {
    progress.bestScores.masterDaily = score;
    dailyContent.dailyXp += previousBest ? 25 : 0;
    if (previousBest) addXP(25, "Mejoraste tu simulacion diaria");
  }
  const current = getMasterState();
  if (current.service >= 78 && current.margin >= 24 && current.risk <= 48 && current.cash >= 58) {
    dailyContent.dailyXp += 50;
    addXP(50, "Excelente balance de KPIs");
  }
  if (current.service >= 65 && current.risk <= 70) {
    dailyContent.dailyXp += 30;
    addXP(30, "Sin falla critica");
  }
  saveDailyContent();
  saveProgress();
  renderProgressDashboard();
}

function registerDecision(impact = {}) {
  progress.totalDecisions += 1;
  const service = impact.service ?? impact.otif ?? impact.fillRate ?? 0;
  const margin = impact.margin ?? 0;
  const risk = impact.risk ?? impact.waste ?? 0;
  const balanced = service >= 0 && margin >= 0 && risk <= 1;
  if (balanced) {
    progress.balancedDecisions += 1;
    addXP(10, "Decision balanceada");
  }
  if (service >= 3 || (impact.stock ?? 0) >= 3) {
    progress.stockoutsAvoided += 1;
    addXP(15, "Quiebre evitado");
  }
  if (margin >= 2) {
    progress.marginProtected += 1;
    addXP(15, "Margen protegido");
  }
  saveProgress();
}

function renderProgressDashboard() {
  const dashboard = document.querySelector("#progressDashboard");
  if (!dashboard) return;
  progress.level = calculateLevel();
  const currentIndex = levelIndexByName(progress.level);
  const next = nextLevelInfo();
  const previousXp = levels[currentIndex]?.xp || 0;
  const nextXp = next.xp || previousXp;
  const xpRange = Math.max(1, nextXp - previousXp);
  const xpPct = currentIndex === levels.length - 1 ? 100 : Math.min(100, ((progress.xp - previousXp) / xpRange) * 100);
  const lessonCount = progress.completedSections.filter((item) => item.startsWith("lesson-")).length;
  document.querySelector("#progressLevel").textContent = progress.level;
  document.querySelector("#progressTitle").textContent = currentDifficulty().index >= 4 ? "Liderando bajo presion real" : "Construyendo criterio S&OP";
  document.querySelector("#progressXp").textContent = `${progress.xp} XP`;
  document.querySelector("#progressBar").style.width = `${xpPct}%`;
  document.querySelector("#progressNext").textContent =
    currentIndex === levels.length - 1 ? "Nivel maximo alcanzado" : `Proximo nivel: ${next.name} · ${next.xp} XP + hitos`;
  document.querySelector("#progressMiniGames").textContent = `${completedCoreMiniGames()}/${coreMiniGames.length}`;
  document.querySelector("#progressLessons").textContent = `${lessonCount}/${lessons.length}`;
  document.querySelector("#progressSimulation").textContent = progress.lastSimulationScore;
  document.querySelector("#badgeShelf").innerHTML = badges
    .map((badge) => {
      const unlocked = progress.badges.includes(badge.name);
      return `
        <article class="badge-card ${unlocked ? "unlocked" : "locked"}" title="${badge.description}">
          <div class="badge-medal"><span>${badge.icon}</span></div>
          <div>
            <strong>${badge.name}</strong>
            <p>${badge.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
  const bestScores = Object.entries(progress.bestScores);
  document.querySelector("#progressBestScores").innerHTML = bestScores.length
    ? bestScores.map(([game, score]) => `<span>${game}: ${score}</span>`).join("")
    : "<span>Best scores: todavia sin registros</span>";
  const refreshSeconds = secondsUntilNextRefresh();
  const hours = String(Math.floor(refreshSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((refreshSeconds % 3600) / 60)).padStart(2, "0");
  const dailyCoreCount = dailyContent?.completedMiniGames.filter((game) => coreMiniGames.includes(game)).length || 0;
  document.querySelector("#dailyStatus").innerHTML = `
    <div><span>Crossword</span><strong>${dailyContent?.crossword.completed ? "Completo" : "Pendiente"}</strong></div>
    <div><span>Diario mini juegos</span><strong>${dailyCoreCount}/${coreMiniGames.length}</strong></div>
    <div><span>Simulacion diaria</span><strong>${dailyContent?.simulationCompleted ? "Completa" : "Pendiente"}</strong></div>
    <div><span>XP hoy</span><strong>${dailyContent?.dailyXp || 0}</strong></div>
    <div><span>Streak</span><strong>${dailyContent?.crossword.streak || 0} dias</strong></div>
    <div><span>Refresh</span><strong>${hours}:${minutes}</strong></div>
  `;
  const difficulty = document.querySelector("#difficultyLabel");
  if (difficulty) difficulty.textContent = `Dificultad actual: ${currentDifficulty().label}`;
  renderProgressionMap();
  saveProgress();
}

function renderProgressionMap() {
  const node = document.querySelector("#progressionMap");
  if (!node) return;
  const currentIndex = levelIndexByName(progress.level);
  const next = nextLevelInfo();
  node.innerHTML = `
    <div class="map-heading">
      <div>
        <p class="eyebrow">Strategic Progression Map</p>
        <h3>Camino hacia World Class SC Director</h3>
      </div>
      <span>${progress.xp} XP · next: ${next.name}</span>
    </div>
    <div class="level-route">
      ${levels.map((level, index) => {
        const completed = index < currentIndex;
        const current = index === currentIndex;
        const locked = index > currentIndex;
        const icons = ["▤", "▥", "▧", "◎", "⌘", "▣", "♛"];
        return `
          <button class="level-node ${completed ? "completed" : ""} ${current ? "current" : ""} ${locked ? "locked" : ""}" type="button" title="XP ${level.xp} · Lecciones ${level.lessons} · Mini juegos ${level.miniGames} · Score ${level.simulationScore}">
            <span>${icons[index]}</span>
            <strong>${level.name}</strong>
            <small>${locked ? "Locked" : current ? "Current" : "Unlocked"}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function resetProgress() {
  if (!confirm("Seguro que queres borrar todo el progreso guardado?")) return;
  localStorage.clear();
  progress = JSON.parse(JSON.stringify(defaultProgress));
  renderProgressDashboard();
  showToast("Progreso reiniciado");
}

function recalcState() {
  const next = { ...baseState };
  Object.values(impacts).forEach((impact) => mergeImpact(next, impact));
  Object.keys(next).forEach((key) => {
    next[key] = clamp(next[key]);
  });
  state = next;
  renderDashboard();
}

function setImpact(scope, impact, decision) {
  const normalizedImpact = {};
  mergeImpact(normalizedImpact, impact);
  impacts[scope] = normalizedImpact;
  if (decision) {
    lastDecision = { ...decision, impact: normalizedImpact };
  }
  updateBestScore(scope, normalizedImpact);
  recalcState();
}

function resetTrainingKpis(title, copy) {
  impacts.gap = {};
  impacts.stock = {};
  lastDecision = {
    title,
    copy,
    impact: {},
  };
  recalcState();
}

function formatDelta(key, delta) {
  const suffix = kpiMeta[key]?.suffix ?? "";
  return `${delta > 0 ? "+" : ""}${delta}${suffix}`;
}

function deltaClass(key, delta) {
  if (delta === 0) return "neutral";
  const good = inverseGood.has(key) ? delta < 0 : delta > 0;
  return good ? "positive" : "negative";
}

function impactScore(impact = {}) {
  return Object.entries(impact).reduce((score, [key, value]) => {
    const useful = inverseGood.has(key) ? -value : value;
    return score + useful;
  }, 0);
}

function updateBestScore(scope, impact = {}) {
  const score = Math.max(0, Math.round(impactScore(impact)));
  if (!score || scope === "master") return;
  const key = `sopArenaBest_${scope}`;
  const currentBest = Number(localStorage.getItem(key) || 0);
  if (score > currentBest) localStorage.setItem(key, String(score));
}

function getBestScore(scope) {
  return Number(localStorage.getItem(`sopArenaBest_${scope}`) || 0);
}

function renderDashboard() {
  document.querySelector("#kpiGrid").innerHTML = kpis
    .map(([key, label, suffix, hint]) => {
      const value = state[key];
      const delta = lastDecision.impact?.[key] ?? 0;
      const danger = inverseGood.has(key) ? value > 55 : value < 62;
      const color = danger ? "var(--red)" : key === "margin" || key === "cash" ? "var(--green)" : "var(--charcoal)";
      return `
        <div class="kpi-card ${delta !== 0 ? "changed" : ""}">
          <span>${label}</span>
          <strong style="color:${color}">${value}${suffix}</strong>
          ${delta !== 0 ? `<b class="kpi-delta ${deltaClass(key, delta)}">${formatDelta(key, delta)}</b>` : `<b class="kpi-delta neutral">sin cambio</b>`}
          <small>${hint}</small>
        </div>
      `;
    })
    .join("");

  document.querySelector("#syncBar").style.width = `${state.sync}%`;
  document.querySelector("#syncScore").textContent = state.sync;

  const narrative = document.querySelector("#boardNarrative");
  if (state.sync >= 84 && state.margin >= 25) {
    narrative.textContent = "El plan esta sincronizado: tus decisiones conectan acciones, premisas y trade-offs.";
  } else if (state.margin < 22) {
    narrative.textContent = "Estas comprando volumen con margen. El board necesita ver el costo de la decision.";
  } else if (state.service < 78) {
    narrative.textContent = "El cliente esta pagando la cuenta. Revisa restricciones, promesas y OTIF.";
  } else if (state.risk > 58) {
    narrative.textContent = "El plan esta comprando velocidad con riesgo. Hace falta una decision ejecutiva clara.";
  } else if (state.cost > 55) {
    narrative.textContent = "La cadena esta pagando demasiado por cumplir. Revisa urgencias, mix y capacidad.";
  } else {
    narrative.textContent = "El negocio tiene tension visible. Todavia hay espacio para decidir antes de ejecutar.";
  }

  const visibleImpact = Object.entries(lastDecision.impact || {})
    .filter(([key, value]) => value !== 0 && kpiMeta[key])
    .map(([key, value]) => `
      <div class="impact-chip ${deltaClass(key, value)}">
        <strong>${kpiMeta[key].label}</strong>
        <span>${formatDelta(key, value)}</span>
      </div>
    `)
    .join("");

  document.querySelector("#impactPanel p").textContent = lastDecision.copy;
  document.querySelector("#impactPanel span").textContent = lastDecision.title;
  document.querySelector("#impactList").innerHTML = visibleImpact || `<div class="impact-chip neutral"><strong>KPIs</strong><span>sin cambio</span></div>`;
}

function renderJourney() {
  document.querySelector("#roadmap").innerHTML = lessons
    .map((lesson, index) => `
      <button class="road-step ${index === currentLesson ? "active" : ""} ${isLessonCompleted(index) ? "completed" : ""}" type="button" data-lesson="${index}">
        <strong>${lesson.num}</strong>
        <h3>${lesson.title}</h3>
        <p>${lesson.short}</p>
        <span class="road-status">${isLessonCompleted(index) ? "Completed" : "Abrir modulo"}</span>
      </button>
      ${index === currentLesson ? renderLesson(lesson, index) : ""}
    `)
    .join("");
}

function renderLesson(lesson, index) {
  const checkpoints = lessonCheckpoints[index];
  const completed = isLessonCompleted(index);
  const engagement = getLessonEngagement(index);
  return `
    <article class="lesson-panel" data-lesson-panel="${index}" aria-live="polite">
    <div class="lesson-content-wrap">
      <p class="eyebrow">Teoria base</p>
      <h3>${lesson.num}. ${lesson.title}</h3>
      <div class="lesson-scroll" data-lesson-scroll="${index}">
      <ul>
        ${lesson.theory.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p class="lesson-takeaway">${lesson.takeaway}</p>
      </div>
      <button class="reveal-content" type="button" data-reveal-lesson="${index}">Revelar contenido completo</button>
      <div class="lesson-checkpoint">
        <span>Checkpoints</span>
        ${checkpoints.map((checkpoint, checkpointIndex) => {
          const checkpointDone = completed || engagement.checkpointCompleted.includes(checkpointIndex);
          const feedback = engagement.checkpointFeedback[checkpointIndex] || "";
          return `
            <div class="checkpoint-card">
              <h4>${checkpoint.q}</h4>
              <div class="checkpoint-options">
                ${checkpoint.options.map((option, optionIndex) => `
                  <button type="button" data-checkpoint="${index}" data-checkpoint-question="${checkpointIndex}" data-checkpoint-option="${optionIndex}" ${checkpointDone ? "disabled" : ""}>${option}</button>
                `).join("")}
              </div>
              <p class="checkpoint-feedback" data-checkpoint-feedback="${checkpointIndex}">${checkpointDone ? checkpoint.explain : feedback}</p>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    <div class="lesson-unlock">
      <span data-lesson-status>${completed ? "Completed" : "Progreso del modulo"}</span>
      <div class="lesson-progress-list">
        <p>Tiempo visto <strong data-lesson-time>${completed ? "Completado" : "0/25s"}</strong></p>
        <p>Contenido visto <strong data-lesson-content>${completed ? "Visto" : "Pendiente"}</strong></p>
        <p>Checkpoint <strong data-lesson-checkpoint>${completed ? "Correcto" : "Pendiente"}</strong></p>
      </div>
      <strong>${lesson.unlock}</strong>
      <a href="#simulators">Ir a mini juegos</a>
    </div>
    </article>
  `;
}

function getGapScenario() {
  const scenario = gapScenarios[currentGapScenario];
  const difficulty = currentDifficulty();
  return {
    ...scenario,
    target: scenario.target + difficulty.targetPressure,
    forecast: Math.max(0, scenario.forecast - difficulty.forecastPressure),
  };
}

function renderGapScenario() {
  const scenario = getGapScenario();
  selectedGapActions = new Set();
  document.querySelector("#gapTitle").textContent = scenario.title;
  document.querySelector("#gapBrief").textContent = scenario.brief;
  document.querySelector("#targetLabel").textContent = `Target ${scenario.target}`;
  document.querySelector("#targetBar").style.height = `${scenario.target * 2.5}px`;
  document.querySelector("#forecastLabel").textContent = `Forecast ${scenario.forecast}`;
  document.querySelector("#forecastBar").style.height = `${scenario.forecast * 2.5}px`;
  document.querySelector("#gapActions").innerHTML = scenario.actions
    .map(([id, title, copy]) => `
      <button class="action-card" type="button" data-action="${id}">
        <strong>${title}</strong>
        <span>${copy}</span>
      </button>
    `)
    .join("");
  document.querySelector("#gapFeedback").textContent = "Selecciona acciones. El board espera un plan, no deseos.";
  resetTrainingKpis(
    "Nuevo escenario de forecast",
    "Los KPIs volvieron al caso base: 72. Elegi acciones para ver impactos nuevos."
  );
}

function updateGapGame() {
  const scenario = getGapScenario();
  let plan = scenario.forecast;
  const impact = {};
  selectedGapActions.forEach((id) => {
    const action = scenario.actions.find(([actionId]) => actionId === id);
    plan += action[3];
    const adjustedImpact = {};
    Object.entries(action[4]).forEach(([key, value]) => {
      adjustedImpact[key] = value < 0 ? Math.round(value * currentDifficulty().negativeMultiplier) : value;
    });
    mergeImpact(impact, adjustedImpact);
  });

  impact.forecast = plan - baseState.forecast;
  document.querySelector("#forecastBar").style.height = `${Math.min(plan, scenario.target) * 2.5}px`;
  document.querySelector("#forecastLabel").textContent = `Plan ${plan}`;

  const gap = Math.max(0, scenario.target - plan);
  if (gap === 0 && (baseState.margin + (impact.margin ?? 0)) >= 24 && (baseState.service + (impact.service ?? 0)) >= 84) {
    document.querySelector("#gapFeedback").textContent = "Plan aprobado: cubriste el GAP sin esconder costo ni romper servicio.";
  } else if (gap === 0) {
    document.querySelector("#gapFeedback").textContent = "Llegaste al numero, pero el board va a preguntar que rompiste para lograrlo.";
  } else {
    document.querySelector("#gapFeedback").textContent = `Todavia queda un GAP de ${gap}. Necesitas acciones, no expresiones de deseo.`;
  }
  const selectedNames = [...selectedGapActions].map((id) => scenario.actions.find(([actionId]) => actionId === id)?.[1]).filter(Boolean);
  setImpact("gap", impact, {
    title: selectedNames.length ? `Gap: ${selectedNames.join(" + ")}` : "Gap Challenge reiniciado",
    copy: selectedNames.length
      ? `Estas acciones cambiaron el plan de ${scenario.forecast} a ${plan}. Mira que KPIs subieron y cuales pagaron el costo.`
      : "Sin acciones seleccionadas, el forecast vuelve a su base.",
  });
  if (selectedGapActions.size) {
    const score = Math.max(0, impactScore(impact) + (gap === 0 ? 10 : 0));
    completeMiniGame("forecast", score);
    registerDecision(impact);
  }
}

function renderStockScenario() {
  const scenario = stockScenarios[currentStockScenario];
  document.querySelector("#stockTitle").textContent = scenario.title;
  document.querySelector("#stockBrief").textContent = scenario.brief;
  document.querySelector("#stockLine").setAttribute("points", scenario.line);
  document.querySelector("#stockPointA").setAttribute("cx", scenario.points[0][0]);
  document.querySelector("#stockPointA").setAttribute("cy", scenario.points[0][1]);
  document.querySelector("#stockPointB").setAttribute("cx", scenario.points[1][0]);
  document.querySelector("#stockPointB").setAttribute("cy", scenario.points[1][1]);
  document.querySelector("#stockOptions").innerHTML = scenario.options
    .map(([text], index) => `<button class="quiz-option" type="button" data-stock="${index}"><strong>Mi lectura:</strong> ${text}</button>`)
    .join("");
  document.querySelector("#stockFeedback").textContent = "Elegí una lectura del patron. Este juego entrena diagnostico y no modifica KPIs.";
  resetTrainingKpis(
    "Nuevo escenario de stock",
    "Los KPIs volvieron al caso base: 72. Este desafio no modifica el tablero porque evalua interpretacion, no decision."
  );
}

function renderDecisionPractice() {
  const scenario = decisionPracticeScenarios[currentDecisionScenario];
  document.querySelector("#decisionTitle").textContent = scenario.title;
  document.querySelector("#decisionBrief").textContent = `${scenario.family}. ${scenario.brief}`;
  document.querySelector("#decisionBoard").innerHTML = scenario.options
    .map(([title, copy], index) => `
      <button class="crisis-card" type="button" data-decision="${index}">
        <strong>${title}</strong>
        <span>${copy}</span>
      </button>
    `)
    .join("");
  document.querySelector("#decisionFeedback").textContent = "Elegí una alternativa. Este entrenamiento no modifica KPIs.";
}

function chooseDecisionPractice(optionIndex) {
  const scenario = decisionPracticeScenarios[currentDecisionScenario];
  const choice = scenario.options[optionIndex];
  document.querySelectorAll("#decisionBoard [data-decision]").forEach((item) => item.classList.remove("selected"));
  document.querySelector(`#decisionBoard [data-decision="${optionIndex}"]`).classList.add("selected");
  document.querySelector("#decisionFeedback").textContent = `${choice[3]} Practica de criterio: los KPIs quedan sin cambios.`;
}

function nextDecisionPractice() {
  const order = dailyContent.miniGameSeeds.decision;
  currentDecisionScenario = order[(order.indexOf(currentDecisionScenario) + 1) % order.length];
  renderDecisionPractice();
}

function describeImpact(impact = {}) {
  return Object.entries(impact)
    .map(([key, value]) => {
      const normalizedKey = kpiAliases[key] || key;
      if (!kpiMeta[normalizedKey]) return "";
      return `${kpiMeta[normalizedKey].label} ${formatDelta(normalizedKey, value)}`;
    })
    .filter(Boolean)
    .join(" · ");
}

function renderQuiz() {
  const question = getCurrentQuizQuestion();
  updateQuizProgress();
  document.querySelector("#quizQuestion").innerHTML = `<h3>${question.q}</h3>`;
  document.querySelector("#quizOptions").innerHTML = question.options
    .map((option, index) => `
      <button class="quiz-option" type="button" data-quiz="${index}">
        ${option}
      </button>
    `)
    .join("");
  document.querySelector("#quizFeedback").textContent = "Elegí una respuesta. El quiz no modifica KPIs.";
  document.querySelector("#nextQuizQuestion").hidden = true;
}

function getCurrentQuizQuestion() {
  const order = dailyContent?.miniGameSeeds?.quiz || quizQuestions.map((_, index) => index);
  return quizQuestions[order[currentQuiz % order.length]];
}

function renderCrossword() {
  if (!dailyContent) return;
  const crossword = dailyContent.crossword;
  const grid = document.querySelector("#crosswordGrid");
  if (!grid) return;
  grid.style.setProperty("--cw-cols", crossword.size);
  grid.style.setProperty("--cw-rows", crossword.rows || crossword.grid.length);
  grid.style.gridTemplateColumns = `repeat(${crossword.size}, minmax(0, 1fr))`;
  grid.innerHTML = crossword.grid
    .flatMap((row, rowIndex) => row.map((cell, colIndex) => {
      if (!cell) return `<div class="crossword-square empty" aria-hidden="true"></div>`;
      if (cell.block) return `<div class="crossword-square block" aria-hidden="true"></div>`;
      const starts = crossword.entries.filter((entry) => entry.row === rowIndex && entry.col === colIndex);
      const number = starts.length ? `<span class="cell-number">${starts[0].number}</span>` : "";
      return `
        <div class="crossword-square letter-square">
          ${number}
          <input class="crossword-cell letter" maxlength="1" data-row="${rowIndex}" data-col="${colIndex}" data-answer="${cell.letter}" data-entries="${cell.entries.join(",")}" aria-label="Celda crossword" />
        </div>
      `;
    }))
    .join("");
  const clueMarkup = (direction) => crossword.entries
    .filter((entry) => entry.direction === direction)
    .map((entry) => `
      <button class="clue-button" type="button" data-clue="${entry.id}">
        <strong>${entry.number}.</strong>
        <span>${entry.clue}</span>
      </button>
    `)
    .join("");
  document.querySelector("#acrossClues").innerHTML = clueMarkup("across");
  document.querySelector("#downClues").innerHTML = clueMarkup("down");
  document.querySelector("#crosswordMeta").textContent = `${crossword.entries.length} palabras · streak ${crossword.streak || 0} dias`;
  document.querySelector("#crosswordFooter").textContent = `Crucigrama | ${formatCrosswordDate(dailyContent.date)}`;
  crosswordStartedAt = Date.now();
  crosswordMistakes = 0;
  crosswordDirection = crossword.entries[0]?.direction || "across";
  setActiveCrosswordWord(crossword.entries[0]?.id || 0);
  startCrosswordTimer();
}

function formatCrosswordDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

function startCrosswordTimer() {
  if (crosswordTimerInterval) clearInterval(crosswordTimerInterval);
  crosswordTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - crosswordStartedAt) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const seconds = String(elapsed % 60).padStart(2, "0");
    const timer = document.querySelector("#crosswordTimer");
    if (timer) timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function setActiveCrosswordWord(id) {
  crosswordActiveWord = Number(id);
  const activeEntry = dailyContent?.crossword?.entries.find((item) => item.id === crosswordActiveWord);
  if (activeEntry) crosswordDirection = activeEntry.direction;
  document.querySelectorAll(".crossword-cell").forEach((cell) => {
    const ids = cell.dataset.entries?.split(",").map(Number) || [];
    cell.classList.toggle("active-word", ids.includes(crosswordActiveWord));
    cell.closest(".crossword-square")?.classList.toggle("active-word", ids.includes(crosswordActiveWord));
  });
  document.querySelectorAll(".clue-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.clue) === crosswordActiveWord);
  });
  document.querySelector(".clue-button.active")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  updateActiveClueBar();
}

function updateActiveClueBar() {
  const entry = dailyContent?.crossword?.entries.find((item) => item.id === crosswordActiveWord);
  if (!entry) return;
  const label = entry.direction === "across" ? "H" : "V";
  const labelNode = document.querySelector("#activeClueLabel");
  const textNode = document.querySelector("#activeClueText");
  if (labelNode) labelNode.textContent = `${label}${entry.number}.`;
  if (textNode) textNode.textContent = entry.clue;
}

function moveActiveCrosswordClue(direction) {
  const entries = dailyContent?.crossword?.entries || [];
  if (!entries.length) return;
  const currentIndex = entries.findIndex((entry) => entry.id === crosswordActiveWord);
  const nextIndex = (currentIndex + direction + entries.length) % entries.length;
  const nextEntry = entries[nextIndex];
  setActiveCrosswordWord(nextEntry.id);
  selectCrosswordCell(getCrosswordCellsForEntry(nextEntry)[0], nextEntry.direction);
}

function getCrosswordCellsForEntry(entry) {
  return [...document.querySelectorAll(".crossword-cell:not(.block)")].filter((cell) =>
    (cell.dataset.entries || "").split(",").map(Number).includes(entry.id)
  );
}

function crosswordEntriesForCell(cell) {
  const ids = (cell.dataset.entries || "").split(",").map(Number).filter((id) => Number.isFinite(id));
  return ids.map((id) => dailyContent.crossword.entries.find((entry) => entry.id === id)).filter(Boolean);
}

function selectCrosswordCell(cell, preferredDirection = crosswordDirection) {
  if (!cell) return;
  const entries = crosswordEntriesForCell(cell);
  const entry = entries.find((item) => item.direction === preferredDirection) || entries[0];
  if (entry) setActiveCrosswordWord(entry.id);
  document.querySelectorAll(".crossword-cell.selected-cell").forEach((item) => item.classList.remove("selected-cell"));
  cell.classList.add("selected-cell");
  cell.focus();
  cell.select();
}

function selectedCrosswordCell() {
  return document.querySelector(".crossword-cell.selected-cell") || document.activeElement?.closest?.(".crossword-cell");
}

function moveWithinActiveWord(cell, step) {
  const entry = dailyContent.crossword.entries.find((item) => item.id === crosswordActiveWord);
  if (!entry) return;
  const cells = getCrosswordCellsForEntry(entry);
  const next = cells[cells.indexOf(cell) + step];
  if (next) selectCrosswordCell(next, entry.direction);
}

function moveCrosswordByDelta(cell, rowDelta, colDelta) {
  let row = Number(cell.dataset.row);
  let col = Number(cell.dataset.col);
  for (let step = 0; step < 8; step += 1) {
    row += rowDelta;
    col += colDelta;
    const next = document.querySelector(`.crossword-cell[data-row="${row}"][data-col="${col}"]`);
    if (next) {
      selectCrosswordCell(next, Math.abs(colDelta) ? "across" : "down");
      return;
    }
  }
}

function enterCrosswordLetter(cell, value) {
  const letter = value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
  if (!letter) return;
  cell.value = letter;
  if (cell.value !== cell.dataset.answer) {
    crosswordMistakes += 1;
    cell.classList.add("wrong");
  } else {
    cell.classList.remove("wrong");
  }
  checkCrosswordProgress();
  moveWithinActiveWord(cell, 1);
}

function clearCrosswordCell(cell) {
  cell.value = "";
  cell.classList.remove("wrong", "correct");
  checkCrosswordProgress();
}

function switchCrosswordDirection(cell) {
  const nextDirection = crosswordDirection === "across" ? "down" : "across";
  const entries = crosswordEntriesForCell(cell);
  const entry = entries.find((item) => item.direction === nextDirection) || entries.find((item) => item.direction === crosswordDirection);
  if (entry) setActiveCrosswordWord(entry.id);
}

function checkCrosswordProgress() {
  const crossword = dailyContent.crossword;
  let completedWords = 0;
  crossword.entries.forEach((entry) => {
    const cells = getCrosswordCellsForEntry(entry);
    const value = cells.map((cell) => cell.value.toUpperCase()).join("");
    const complete = value.length === entry.word.length && value === entry.word;
    if (complete) completedWords += 1;
    cells.forEach((cell) => cell.classList.toggle("correct", complete));
    document.querySelector(`[data-clue="${entry.id}"]`)?.classList.toggle("completed", complete);
  });
  document.querySelector("#crosswordFeedback").textContent = `${completedWords}/${crossword.entries.length} palabras completas.`;
  if (completedWords === crossword.entries.length) completeDailyCrossword();
}

function completeDailyCrossword() {
  if (dailyContent.crossword.completed) return;
  dailyContent.crossword.completed = true;
  const elapsed = Math.floor((Date.now() - crosswordStartedAt) / 1000);
  dailyContent.crossword.bestTime = dailyContent.crossword.bestTime ? Math.min(dailyContent.crossword.bestTime, elapsed) : elapsed;
  dailyContent.crossword.completedDates.push(dailyContent.date);
  dailyContent.crossword.streak = (dailyContent.crossword.streak || 0) + 1;
  dailyContent.dailyXp += 180;
  addXP(180, "Daily Crossword completo");
  if (crosswordMistakes === 0) {
    dailyContent.crossword.perfectCompletions += 1;
    dailyContent.dailyXp += 40;
    addXP(40, "Crossword perfecto");
  }
  if (elapsed <= 600) {
    dailyContent.dailyXp += 30;
    addXP(30, "Crossword bajo 10 minutos");
  }
  if (dailyContent.crossword.streak >= 3 && !dailyContent.crossword.streakBonuses.includes("3")) {
    dailyContent.crossword.streakBonuses.push("3");
    dailyContent.dailyXp += 100;
    addXP(100, "Streak 3 dias");
  }
  if (dailyContent.crossword.streak >= 7 && !dailyContent.crossword.streakBonuses.includes("7")) {
    dailyContent.crossword.streakBonuses.push("7");
    dailyContent.dailyXp += 250;
    addXP(250, "Streak 7 dias");
  }
  saveDailyContent();
  renderProgressDashboard();
  document.querySelector("#crosswordFeedback").textContent = "Crossword completo. XP diario reclamado.";
}

function updateQuizProgress() {
  const answered = quizFirstAttempts.size;
  const correct = [...quizFirstAttempts.values()].filter(Boolean).length;
  const percentage = answered ? Math.round((correct / answered) * 100) : 0;
  document.querySelector("#quizProgress").innerHTML = `
    <span>Pregunta ${currentQuiz + 1} de ${quizQuestions.length}</span>
    <strong>${quizAnswered.size}/${quizQuestions.length} respondidas · ${percentage}% correctas</strong>
  `;
}

function renderCases() {
  document.querySelector("#caseGrid").innerHTML = stories
    .map((story) => `
      <article class="case-card story-read-card">
        <div class="case-art">${story.mark}</div>
        <div>
          <h3>${story.title}</h3>
          <p>${story.setup}</p>
          <p class="story-lesson">${story.lesson}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderStoryStage() {
  const stage = document.querySelector("#storyStage");
  if (stage) stage.innerHTML = "";
}

const randomBusinessEvents = [
  { text: "Proveedor informa demora de materia prima critica.", impact: { service: -4, cost: 3, risk: 5, cash: -2 } },
  { text: "Calidad bloquea un lote por reclamo preventivo.", impact: { service: -3, margin: -2, risk: 4 } },
  { text: "Transporte anuncia restriccion de capacidad regional.", impact: { service: -3, cost: 4, risk: 3 } },
  { text: "Cliente clave escala por incumplimiento parcial.", impact: { service: -2, risk: 3, cash: -1 } },
  { text: "Forecast detecta spike no previsto en canal moderno.", impact: { service: -2, margin: 2, risk: 4 } },
  { text: "Parada menor de produccion reduce capacidad semanal.", impact: { service: -4, cost: 2, risk: 5 } },
];

function maybeAddRandomEvent() {
  const difficulty = currentDifficulty();
  if (difficulty.index < 3 || masterMonth >= masterMonths.length - 1) return;
  if (masterRandomEvents.some((event) => event.from === masterMonth)) return;
  const random = seededRandom(`${dailyContent.date}-master-${masterMonth}-${masterHistory.length}`);
  if (random() > Math.min(0.22 + difficulty.index * 0.08 + (dailyContent.simulationSeed.eventBias * 0.08), 0.72)) return;
  const event = randomBusinessEvents[Math.floor(random() * randomBusinessEvents.length)];
  masterRandomEvents.push({
    ...event,
    id: `random-${masterMonth}-${Date.now()}`,
    from: masterMonth,
    month: masterMonth + 1,
    tone: "danger",
    random: true,
  });
}

function currentMasterImpact() {
  const total = {};
  masterHistory.forEach((entry) => mergeImpact(total, entry.impact));
  masterPending.filter((item) => item.month <= masterMonth).forEach((item) => mergeImpact(total, item.impact));
  masterRandomEvents.filter((item) => item.month <= masterMonth).forEach((item) => mergeImpact(total, item.impact));
  if (currentDifficulty().index >= 4) {
    mergeImpact(total, {
      service: -Math.floor((operationalStress.supply + operationalStress.customer) / 4),
      margin: -Math.floor(operationalStress.quality / 5),
      cost: Math.floor((operationalStress.supply + operationalStress.quality) / 5),
      risk: Math.floor((operationalStress.quality + operationalStress.supply + operationalStress.customer) / 4),
      cash: -Math.floor(operationalStress.supply / 5),
    });
  }
  return total;
}

function getMasterState() {
  const totalImpact = currentMasterImpact();
  const next = {
    ...masterBaseState,
    service: clamp(masterBaseState.service + (dailyContent?.simulationSeed.serviceShift || 0)),
    margin: clamp(masterBaseState.margin + (dailyContent?.simulationSeed.marginShift || 0)),
    risk: clamp(masterBaseState.risk + (dailyContent?.simulationSeed.riskShift || 0)),
  };
  Object.entries(totalImpact).forEach(([key, value]) => {
    if (key in next) next[key] = clamp(next[key] + value);
  });
  masterState = next;
  return next;
}

function renderMasterKpis() {
  const current = getMasterState();
  document.querySelector("#masterKpiGrid").innerHTML = masterKpis
    .map(([key, label, suffix, hint]) => {
      const value = current[key];
      const danger = inverseGood.has(key) ? value > 55 : value < 62;
      const color = danger ? "var(--red)" : key === "margin" || key === "cash" ? "var(--green)" : "var(--charcoal)";
      return `
        <div class="master-kpi">
          <span>${label}</span>
          <strong style="color:${color}">${value}${suffix}</strong>
          <small>${hint}</small>
        </div>
      `;
    })
    .join("");
}

function recordMasterSnapshot() {
  if (!masterHistory[masterMonth]) return;
  masterTimeline[masterMonth] = { month: masterMonth + 1, ...getMasterState() };
}

function activeConsequences() {
  return [...masterPending, ...masterRandomEvents].filter((item) => item.month <= masterMonth);
}

function showConsequenceModal(item) {
  const modal = document.querySelector("#eventModal");
  const card = modal.querySelector(".event-modal-card");
  const kind = item.random ? "Evento aleatorio" : item.tone === "benefit" ? "Beneficio activado" : "Alarma activada";
  card.classList.remove("danger", "benefit");
  card.classList.add(item.tone === "benefit" ? "benefit" : "danger");
  document.querySelector("#eventModalKind").textContent = kind;
  document.querySelector("#eventModalTitle").textContent = item.random
    ? "El negocio cambio las condiciones"
    : item.tone === "benefit" ? "Tu decision anterior te ayudo" : "Consecuencia de una decision anterior";
  document.querySelector("#eventModalCopy").textContent = item.text;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function showNewConsequences() {
  const item = activeConsequences().find((consequence) => !shownConsequenceIds.has(consequence.id));
  if (!item) return false;
  shownConsequenceIds.add(item.id);
  showConsequenceModal(item);
  return true;
}

function shouldShowCompletionModal() {
  return masterHistory.filter(Boolean).length === masterMonths.length && !completionModalShown;
}

function showSimulationCompleteModal(force = false) {
  if (completionModalShown && !force) return;
  completionModalShown = true;
  const modal = document.querySelector("#eventModal");
  const card = modal.querySelector(".event-modal-card");
  card.classList.remove("danger", "benefit");
  card.classList.add("benefit");
  document.querySelector("#eventModalKind").textContent = "Simulacion finalizada";
  document.querySelector("#eventModalTitle").textContent = "Terminaste los 6 meses";
  document.querySelector("#eventModalCopy").textContent =
    "Ya completaste el ciclo S&OP. Revisa el scorecard final y toca Graficar evolucion de KPIs para ver como tus decisiones movieron servicio, margen, cash, costo y riesgo.";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeConsequenceModal(showNext = true) {
  const modal = document.querySelector("#eventModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  if (showNext) {
    setTimeout(() => {
      if (!showNewConsequences() && shouldShowCompletionModal()) showSimulationCompleteModal();
    }, 120);
  }
}

function renderMasterSimulation() {
  const month = masterMonths[masterMonth];
  document.querySelector("#monthTrack").innerHTML = masterMonths
    .map((item, index) => `
      <button class="month-dot ${index === masterMonth ? "active" : ""} ${index < masterMonth ? "done" : ""}" type="button" data-master-month="${index}">
        <span>${index + 1}</span>
        <strong>${item.title.split(":")[0]}</strong>
      </button>
    `)
    .join("");

  document.querySelector("#monthCard").innerHTML = `
    <p class="eyebrow">${month.title}</p>
    <h3>${month.context}</h3>
    <div class="event-card">
      <span>Evento</span>
      <strong>${month.event}</strong>
    </div>
    <div class="master-options">
      ${month.options.map(([title, copy], index) => `
        <button class="crisis-card ${masterHistory[masterMonth]?.choice === index ? "selected" : ""}" type="button" data-master-choice="${index}">
          <strong>${title}</strong>
          <span>${copy}</span>
        </button>
      `).join("")}
    </div>
    <div class="feedback" id="masterFeedback">
      ${masterHistory[masterMonth] ? "Decision registrada. No hay devolucion todavia: el analisis aparece al final de la simulacion." : "Elegí una decision para este mes. El impacto se acumula, pero la evaluacion llega al final."}
    </div>
  `;

  document.querySelector("#signalList").innerHTML = month.messages
    .map((message) => `<div class="signal"><span>${message.split(":")[0]}</span><p>${message.includes(":") ? message.split(":").slice(1).join(":").trim() : message}</p></div>`)
    .join("");

  const visibleConsequences = [...masterPending, ...masterRandomEvents].filter((item) => item.month <= masterMonth);
  const consequenceHtml = [
    ...visibleConsequences.map((item) => `
      <div class="consequence-alert ${item.tone || "danger"}">
        <strong>${item.random ? "Evento aleatorio" : item.tone === "benefit" ? "Beneficio" : "Alarma"}</strong>
        <p>${item.text}</p>
      </div>
    `),
  ].join("");
  document.querySelector("#delayedConsequences").innerHTML = consequenceHtml || "Todavia no aparecieron impactos diferidos.";

  const totalImpact = currentMasterImpact();
  renderMasterKpis();
  recordMasterSnapshot();

  const score = Math.max(0, Math.round(impactScore(totalImpact) + masterHistory.length * 8));
  document.querySelector("#masterScore").textContent = score;
  renderFinalEvaluation(score);
  if (!showNewConsequences() && shouldShowCompletionModal()) {
    setTimeout(showSimulationCompleteModal, 160);
  }
}

function chooseMasterDecision(optionIndex) {
  const month = masterMonths[masterMonth];
  const choice = month.options[optionIndex];
  masterHistory[masterMonth] = {
    choice: optionIndex,
    title: choice[0],
    impact: choice[1],
    note: choice[3],
    score: impactScore(choice[1]),
  };
  if (choice[2]) {
    masterPending = masterPending.filter((item) => item.from !== masterMonth);
    masterPending.push({ ...choice[2], id: `${masterMonth}-${choice[2].month}-${optionIndex}`, from: masterMonth, choice: optionIndex });
  } else {
    masterPending = masterPending.filter((item) => item.from !== masterMonth);
  }
  operationalStress.quality = Math.max(0, operationalStress.quality + Math.max(0, (choice[1].risk || 0) + (choice[1].cost || 0)) - Math.max(0, choice[1].margin || 0));
  operationalStress.supply = Math.max(0, operationalStress.supply + Math.max(0, -(choice[1].service || 0)) + Math.max(0, choice[1].cost || 0));
  operationalStress.customer = Math.max(0, operationalStress.customer + Math.max(0, -(choice[1].service || 0)) + Math.max(0, -(choice[1].cash || 0)));
  maybeAddRandomEvent();
  registerDecision(choice[1]);
  if (masterMonth !== masterMonths.length - 1) completionModalShown = false;
  renderMasterSimulation();
}

function renderFinalEvaluation(score) {
  const node = document.querySelector("#finalEvaluation");
  if (masterHistory.filter(Boolean).length < masterMonths.length) {
    node.innerHTML = "";
    return;
  }
  const current = getMasterState();
  let rating = "Bombero operativo";
  if (score >= 120) rating = "Director SC world class";
  else if (score >= 95) rating = "Lider de Supply Chain";
  else if (score >= 75) rating = "Manager S&OP fuerte";
  else if (score >= 55) rating = "Planner reactivo";
  const choiceReview = buildMasterReview();
  completeMasterSimulation(score);
  node.innerHTML = `
    <p class="eyebrow">Evaluacion final</p>
    <h3>${rating}</h3>
    <p>Score final: <strong>${score}</strong>. El resultado combina performance operativa, salud financiera y riesgo acumulado.</p>
    <div class="scorecard-grid">
      ${masterKpis.map(([key, label, suffix]) => `
        <div class="scorecard-item">
          <span>${label}</span>
          <strong>${current[key]}${suffix}</strong>
        </div>
      `).join("")}
    </div>
    <div class="review-grid">
      <div>
        <h4>Donde elegiste bien</h4>
        <ul>${choiceReview.good.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Donde te costo</h4>
        <ul>${choiceReview.bad.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Que podrias mejorar</h4>
        <ul>${choiceReview.improve.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <button class="scenario-button" id="showTimelineChart" type="button">Graficar evolucion de KPIs</button>
    <div class="timeline-chart" id="timelineChart"></div>
    <div class="impact-list score-summary">
      <div class="impact-chip ${current.service >= 80 ? "positive" : "negative"}"><strong>Servicio</strong><span>${current.service}%</span></div>
      <div class="impact-chip ${current.margin >= 26 ? "positive" : "negative"}"><strong>Margen</strong><span>${current.margin}%</span></div>
      <div class="impact-chip ${current.risk <= 38 ? "positive" : "negative"}"><strong>Riesgo</strong><span>${current.risk}%</span></div>
      <div class="impact-chip ${current.cash >= 68 ? "positive" : "negative"}"><strong>Cash</strong><span>${current.cash}%</span></div>
    </div>
  `;
}

function renderTimelineChart() {
  const node = document.querySelector("#timelineChart");
  if (!node) return;
  const series = masterTimeline.filter(Boolean);
  if (!series.length) return;
  const chartKeys = [
    ["service", "Servicio", "#1d7f68"],
    ["margin", "Margen", "#2b6cb0"],
    ["cash", "Cash", "#e7b84c"],
    ["cost", "Costo", "#595f69"],
    ["risk", "Riesgo", "#c44b3d"],
  ];
  const visibleKeys = chartKeys.filter(([key]) => activeTimelineKpis.has(key));
  const width = 760;
  const height = 280;
  const pad = 34;
  const baseline = series[0];
  const allValues = visibleKeys.length
    ? series.flatMap((item) => visibleKeys.map(([key]) => item[key] - baseline[key]))
    : [0];
  let minValue = Math.floor((Math.min(...allValues) - 4) / 5) * 5;
  let maxValue = Math.ceil((Math.max(...allValues) + 4) / 5) * 5;
  if (maxValue - minValue < 22) {
    const mid = (maxValue + minValue) / 2;
    minValue = Math.floor((mid - 12) / 5) * 5;
    maxValue = Math.ceil((mid + 12) / 5) * 5;
  }
  const range = Math.max(1, maxValue - minValue);
  const xFor = (index) => pad + (index * (width - pad * 2)) / Math.max(1, series.length - 1);
  const yFor = (value) => height - pad - ((Math.max(minValue, Math.min(maxValue, value)) - minValue) * (height - pad * 2)) / range;
  const formatAxis = (value) => `${value > 0 ? "+" : ""}${value}`;
  const polylines = visibleKeys.map(([key, label, color]) => {
    const points = series.map((item, index) => `${xFor(index)},${yFor(item[key] - baseline[key])}`).join(" ");
    const markers = series.map((item, index) => `
      <circle cx="${xFor(index)}" cy="${yFor(item[key] - baseline[key])}" r="5" fill="${color}" stroke="#fff" stroke-width="2">
        <title>${label} mes ${item.month}: ${item[key]}</title>
      </circle>
    `).join("");
    return `
      <polyline points="${points}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><title>${label}</title></polyline>
      ${markers}
    `;
  }).join("");
  const labels = series.map((item, index) => `<text x="${xFor(index)}" y="${height - 8}" text-anchor="middle" font-size="12" font-weight="800">M${item.month}</text>`).join("");
  const gridValues = [minValue, Math.round((minValue + maxValue) / 2), maxValue];
  node.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolucion mensual de KPIs del simulador">
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#9a9489" stroke-width="2" />
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#9a9489" stroke-width="2" />
      ${gridValues.map((value) => `
        <line x1="${pad}" y1="${yFor(value)}" x2="${width - pad}" y2="${yFor(value)}" stroke="#ded8cc" stroke-width="1" />
        <text x="${pad - 8}" y="${yFor(value) + 4}" text-anchor="end" font-size="11" font-weight="800" fill="#70695f">${formatAxis(value)}</text>
      `).join("")}
      ${polylines}
      ${visibleKeys.length ? "" : `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" font-size="18" font-weight="900" fill="#70695f">Elegí un indicador para graficar</text>`}
      ${labels}
    </svg>
    <p class="chart-note">Escala: variacion contra Mes 1. Asi se ven mejor los movimientos reales de cada decision.</p>
    <div class="chart-legend">
      ${chartKeys.map(([key, label, color]) => `
        <button class="chart-toggle ${activeTimelineKpis.has(key) ? "active" : ""}" type="button" data-chart-toggle="${key}" style="--chart-color:${color}">
          <i></i>${label}
        </button>
      `).join("")}
    </div>
  `;
  node.classList.add("active");
}

function buildMasterReview() {
  const good = [];
  const bad = [];
  const improve = [];
  masterHistory.filter(Boolean).forEach((entry, index) => {
    const monthLabel = `Mes ${index + 1}: ${entry.title}`;
    if (entry.score >= 8) {
      good.push(`${monthLabel}. ${entry.note}`);
    } else if (entry.score <= 0) {
      bad.push(`${monthLabel}. La decision movio demasiado costo, riesgo o cliente.`);
      improve.push(`${monthLabel}. Revisar alternativas con premisas, impacto financiero y prioridad de cliente antes de decidir.`);
    } else {
      improve.push(`${monthLabel}. Fue una decision defendible, pero necesitaba mejores limites, triggers o aprobacion ejecutiva.`);
    }
  });
  if (!good.length) good.push("Hiciste visible la presion del negocio y completaste todos los meses.");
  if (!bad.length) bad.push("No hubo errores graves, pero algunas decisiones dejaron costos o riesgos latentes.");
  if (!improve.length) improve.push("El proximo desafio es sostener margen y cash sin perder nivel de servicio.");
  return { good: good.slice(0, 4), bad: bad.slice(0, 4), improve: improve.slice(0, 4) };
}

function restartMasterSimulation() {
  masterMonth = 0;
  masterHistory = [];
  masterPending = [];
  masterRandomEvents = [];
  operationalStress = { quality: 0, supply: 0, customer: 0 };
  masterTimeline = [];
  shownConsequenceIds = new Set();
  completionModalShown = false;
  masterState = { ...masterBaseState };
  closeConsequenceModal(false);
  renderMasterSimulation();
}

function coachAnswer(input) {
  const text = input.toLowerCase();
  if (text.includes("gap") || text.includes("target")) {
    return "Primero separa forecast probable de target. Despues lista acciones con premisa, responsable, impacto y riesgo. Ojo con los objetivos contrapuestos: cerrar el GAP puede mejorar ventas, pero empeorar margen, servicio futuro, stock o waste.";
  }
  if (text.includes("forecast") || text.includes("pronostico")) {
    return "No busques perfeccion. Busca certezas utiles: rangos, patrones cronicos, triggers y escenarios preparados. La exactitud compite contra velocidad de decision: a veces 80% de claridad a tiempo vale mas que 100% tarde.";
  }
  if (text.includes("bias")) {
    return "Mira si el error cae siempre del mismo lado. Si el forecast queda sistematicamente arriba o abajo, no es azar: es sesgo de proceso. Revisa incentivos: Ventas puede sobreestimar por ambicion, Supply puede subestimar por miedo a capacidad.";
  }
  if (text.includes("minuta") || text.includes("reunion")) {
    return "Una buena minuta S&OP no cuenta todo: deja decisiones, premisas, riesgos, duenos y acciones que sincronizan a la organizacion. Debe evitar la catarsis y enfocarse en que cambia, quien lo toma y que KPI se afecta.";
  }
  if (text.includes("contraponen") || text.includes("trade") || text.includes("objetivos")) {
    return "Los conflictos clasicos son: servicio vs costo, ventas vs margen, stock alto vs cash/waste, velocidad vs calidad, corto plazo vs estrategia, forecast accuracy vs tiempo de decision. S&OP sirve para poner esos conflictos sobre la mesa.";
  }
  if (text.includes("servicio") || text.includes("margen")) {
    return "Servicio y margen suelen chocar. Entregar urgente puede salvar OTIF y fill rate, pero destruir margen por flota extra, horas extra o mix malo. La buena decision muestra ambos impactos y pide aprobacion si el costo es necesario.";
  }
  if (text.includes("stock")) {
    return "Stock alto mejora disponibilidad, pero consume cash, espacio y aumenta waste. Stock bajo mejora capital de trabajo, pero sube riesgo de quiebre. El punto no es alto o bajo: es stock correcto para el nivel de servicio prometido.";
  }
  if (text.includes("crisis") || text.includes("priorizo")) {
    return "En crisis prioriza asi: protege seguridad/calidad, declara restricciones, cuantifica impacto en cliente y margen, arma 2 o 3 alternativas, decide responsable y deja aprendizaje para que no se repita.";
  }
  if (text.includes("finanzas") || text.includes("finance")) {
    return "Finanzas traduce volumen a valor: margen, cash flow, activos y rentabilidad. Puede pasar que el volumen cierre, pero el mix destruya margen. Por eso S&OP no puede ser solo toneladas o cajas.";
  }
  if (text.includes("escenario") || text.includes("escenarios")) {
    return "Un escenario necesita condicion de disparo, accion, responsable, KPI esperado y riesgo. Ejemplo: si demanda supera 500k, activo segundo turno; si supera 600k, negocio valida costo extra o negocia mix.";
  }
  return "Te lo pensaria asi: que decision hay que tomar, que KPI se mueve, que objetivo entra en conflicto, que premisa la sostiene y que riesgo queda vivo. Esa es la conversacion S&OP.";
}

function addChatBubble(text, type) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  document.querySelector("#chatWindow").appendChild(bubble);
  bubble.scrollIntoView({ block: "nearest" });
}

function renderQuickPrompts() {
  document.querySelector("#quickPrompts").innerHTML = quickPrompts
    .map((prompt) => `<button type="button" class="prompt-chip">${prompt}</button>`)
    .join("");
}

function showPageFromHash() {
  const pages = [...document.querySelectorAll(".page")];
  const validIds = pages.map((page) => page.id);
  const requested = window.location.hash.replace("#", "") || "home";
  const activeId = validIds.includes(requested) ? requested : "home";
  pages.forEach((page) => page.classList.toggle("active", page.id === activeId));
  document.querySelectorAll(".nav-links a, .hero-actions a, .lesson-unlock a").forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", target === activeId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  window.addEventListener("hashchange", showPageFromHash);

  document.querySelector("[data-hero-prev]").addEventListener("click", () => renderHeroVisual(currentHeroVisual - 1));
  document.querySelector("[data-hero-next]").addEventListener("click", () => renderHeroVisual(currentHeroVisual + 1));
  document.querySelector("#heroDots").addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-dot]");
    if (!dot) return;
    renderHeroVisual(Number(dot.dataset.heroDot));
  });

  document.querySelector("#roadmap").addEventListener("click", (event) => {
    const reveal = event.target.closest("[data-reveal-lesson]");
    if (reveal) {
      const index = Number(reveal.dataset.revealLesson);
      getLessonEngagement(index).contentViewed = true;
      reveal.textContent = "Contenido visto";
      reveal.disabled = true;
      updateLessonProgressUI(index);
      maybeCompleteLesson(index);
      return;
    }

    const checkpointOption = event.target.closest("[data-checkpoint]");
    if (checkpointOption) {
      const index = Number(checkpointOption.dataset.checkpoint);
      if (isLessonCompleted(index)) return;
      const selected = Number(checkpointOption.dataset.checkpointOption);
      const questionIndex = Number(checkpointOption.dataset.checkpointQuestion);
      const checkpoint = lessonCheckpoints[index][questionIndex];
      const correct = selected === checkpoint.answer;
      document.querySelectorAll(`[data-checkpoint="${index}"][data-checkpoint-question="${questionIndex}"]`).forEach((button) => button.classList.remove("correct", "wrong"));
      checkpointOption.classList.add(correct ? "correct" : "wrong");
      const state = getLessonEngagement(index);
      const feedback = document.querySelector(`[data-lesson-panel="${index}"] [data-checkpoint-feedback="${questionIndex}"]`);
      if (correct) {
        uniquePush(state.checkpointCompleted, questionIndex);
        state.checkpointFeedback[questionIndex] = checkpoint.explain;
        document.querySelectorAll(`[data-checkpoint="${index}"][data-checkpoint-question="${questionIndex}"]`).forEach((button) => {
          button.disabled = true;
          if (Number(button.dataset.checkpointOption) === selected) button.classList.add("correct");
        });
        if (feedback) feedback.textContent = checkpoint.explain;
      } else {
        state.checkpointFeedback[questionIndex] =
          checkpoint.feedback?.[selected] ||
          "No exactamente. Esa opcion resuelve una parte del problema, pero deja sin gestionar premisas, consecuencias o KPIs clave.";
        if (feedback) feedback.textContent = state.checkpointFeedback[questionIndex];
      }
      updateLessonProgressUI(index);
      maybeCompleteLesson(index);
      return;
    }

    const step = event.target.closest("[data-lesson]");
    if (!step) return;
    const selected = Number(step.dataset.lesson);
    currentLesson = currentLesson === selected ? null : selected;
    renderJourney();
    startLessonEngagement(currentLesson);
  });

  document.querySelector("#roadmap").addEventListener("scroll", (event) => {
    const scroller = event.target.closest("[data-lesson-scroll]");
    if (!scroller) return;
    const index = Number(scroller.dataset.lessonScroll);
    if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 8) {
      getLessonEngagement(index).contentViewed = true;
      updateLessonProgressUI(index);
      maybeCompleteLesson(index);
    }
  }, true);

  document.querySelector("#crosswordGrid").addEventListener("focusin", (event) => {
    const cell = event.target.closest(".crossword-cell:not(.block)");
    if (!cell) return;
    const entries = crosswordEntriesForCell(cell);
    if (entries.some((entry) => entry.id === crosswordActiveWord)) {
      document.querySelectorAll(".crossword-cell.selected-cell").forEach((item) => item.classList.remove("selected-cell"));
      cell.classList.add("selected-cell");
      cell.select();
      return;
    }
    selectCrosswordCell(cell, crosswordDirection);
  });

  document.querySelector("#crosswordGrid").addEventListener("click", (event) => {
    const cell = event.target.closest(".crossword-cell:not(.block)");
    if (!cell) return;
    selectCrosswordCell(cell, "across");
  });

  document.querySelector("#crosswordGrid").addEventListener("dblclick", (event) => {
    const cell = event.target.closest(".crossword-cell:not(.block)");
    if (!cell) return;
    selectCrosswordCell(cell, "down");
  });

  document.querySelector("#crosswordGrid").addEventListener("keydown", (event) => {
    const cell = event.target.closest(".crossword-cell:not(.block)");
    if (!cell) return;
    if (/^[a-zA-Z]$/.test(event.key)) {
      event.preventDefault();
      enterCrosswordLetter(cell, event.key);
      return;
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      if (cell.value) clearCrosswordCell(cell);
      else moveWithinActiveWord(cell, -1);
      return;
    }
    if (event.key === "Delete") {
      event.preventDefault();
      clearCrosswordCell(cell);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      switchCrosswordDirection(cell);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      moveActiveCrosswordClue(event.shiftKey ? -1 : 1);
      return;
    }
    const moves = {
      ArrowLeft: [0, -1, "across"],
      ArrowRight: [0, 1, "across"],
      ArrowUp: [-1, 0, "down"],
      ArrowDown: [1, 0, "down"],
    };
    if (moves[event.key]) {
      event.preventDefault();
      const [rowDelta, colDelta, direction] = moves[event.key];
      crosswordDirection = direction;
      moveCrosswordByDelta(cell, rowDelta, colDelta);
    }
  });

  document.querySelector("#crosswordGrid").addEventListener("input", (event) => {
    const cell = event.target.closest(".crossword-cell:not(.block)");
    if (!cell) return;
    cell.value = cell.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (cell.value && cell.value !== cell.dataset.answer) {
      crosswordMistakes += 1;
      cell.classList.add("wrong");
    } else {
      cell.classList.remove("wrong");
    }
    const entry = dailyContent.crossword.entries.find((item) => item.id === crosswordActiveWord);
    if (entry && cell.value) {
      const cells = getCrosswordCellsForEntry(entry);
      const next = cells[cells.indexOf(cell) + 1];
      if (next) next.focus();
    }
    checkCrosswordProgress();
  });

  document.querySelector(".crossword-clues").addEventListener("click", (event) => {
    const clue = event.target.closest("[data-clue]");
    if (!clue) return;
    const id = Number(clue.dataset.clue);
    setActiveCrosswordWord(id);
    selectCrosswordCell(getCrosswordCellsForEntry(dailyContent.crossword.entries.find((entry) => entry.id === id))[0], crosswordDirection);
  });

  document.querySelector("[data-crossword-prev]").addEventListener("click", () => moveActiveCrosswordClue(-1));
  document.querySelector("[data-crossword-next]").addEventListener("click", () => moveActiveCrosswordClue(1));

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const game = tab.dataset.game;
      document.querySelectorAll(".tab").forEach((item) => {
        item.classList.toggle("active", item === tab);
        item.setAttribute("aria-selected", item === tab ? "true" : "false");
      });
      document.querySelectorAll(".game-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `game-${game}`);
      });
    });
  });

  document.querySelector("#nextGapScenario").addEventListener("click", () => {
    const order = dailyContent.miniGameSeeds.gap;
    currentGapScenario = order[(order.indexOf(currentGapScenario) + 1) % order.length];
    renderGapScenario();
  });

  document.querySelector("#gapActions").addEventListener("click", (event) => {
    const card = event.target.closest("[data-action]");
    if (!card) return;
    const id = card.dataset.action;
    if (selectedGapActions.has(id)) {
      selectedGapActions.delete(id);
      card.classList.remove("active");
    } else {
      selectedGapActions.add(id);
      card.classList.add("active");
    }
    updateGapGame();
  });

  document.querySelector("#nextStockScenario").addEventListener("click", () => {
    const order = dailyContent.miniGameSeeds.stock;
    currentStockScenario = order[(order.indexOf(currentStockScenario) + 1) % order.length];
    renderStockScenario();
  });

  document.querySelector("#stockOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-stock]");
    if (!option) return;
    document.querySelectorAll("#stockOptions .quiz-option").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    const answer = stockScenarios[currentStockScenario].options[Number(option.dataset.stock)];
    completeMiniGame("stock", answer[1] ? 12 : 2);
    document.querySelector("#stockFeedback").textContent = answer[1]
      ? "Correcto: viste el patron. Los KPIs quedan sin cambios porque aca solo estas diagnosticando."
      : "Cuidado: esa lectura podria hacer reaccionar tarde al proceso. Los KPIs quedan sin cambios.";
  });

  document.querySelector("#nextDecisionScenario").addEventListener("click", () => nextDecisionPractice());

  document.querySelector("#decisionBoard").addEventListener("click", (event) => {
    const option = event.target.closest("[data-decision]");
    if (!option) return;
    const selected = Number(option.dataset.decision);
    chooseDecisionPractice(selected);
    const scenario = decisionPracticeScenarios[currentDecisionScenario];
    const gameId = {
      "Restricciones de supply": "supply",
      "Decision ejecutiva": "executive",
      "Pico de demanda": "spike",
      "Reunion S&OP": "meeting",
    }[scenario.family] || "decision";
    completeMiniGame(gameId, Math.max(0, impactScore(scenario.options[selected][2])));
    registerDecision(scenario.options[selected][2]);
  });

  document.querySelector("#quizOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-quiz]");
    if (!option) return;
    const selected = Number(option.dataset.quiz);
    const question = getCurrentQuizQuestion();
    const correct = selected === question.answer;
    document.querySelectorAll("#quizOptions .quiz-option").forEach((item) => item.classList.remove("selected", "correct", "wrong"));
    option.classList.add("selected", correct ? "correct" : "wrong");
    if (!quizFirstAttempts.has(currentQuiz)) quizFirstAttempts.set(currentQuiz, correct);
    quizAnswered.add(currentQuiz);
    updateQuizProgress();
    document.querySelector("#quizFeedback").textContent = correct
      ? `Correcto. ${question.explain}`
      : `No exactamente. ${question.explain}`;
    document.querySelector("#nextQuizQuestion").hidden = false;
    if (quizAnswered.size === quizQuestions.length) {
      const correctAnswers = [...quizFirstAttempts.values()].filter(Boolean).length;
      completeMiniGame("quiz", correctAnswers * 5);
    }
  });

  document.querySelector("#resetQuiz").addEventListener("click", () => {
    currentQuiz = 0;
    quizAnswered = new Set();
    quizFirstAttempts = new Map();
    renderQuiz();
  });

  document.querySelector("#nextQuizQuestion").addEventListener("click", () => {
    currentQuiz = (currentQuiz + 1) % quizQuestions.length;
    renderQuiz();
  });

  document.querySelector("#monthCard").addEventListener("click", (event) => {
    const choice = event.target.closest("[data-master-choice]");
    if (!choice) return;
    chooseMasterDecision(Number(choice.dataset.masterChoice));
  });

  document.querySelector("#monthTrack").addEventListener("click", (event) => {
    const month = event.target.closest("[data-master-month]");
    if (!month) return;
    const selected = Number(month.dataset.masterMonth);
    if (selected <= masterHistory.filter(Boolean).length) {
      masterMonth = selected;
      renderMasterSimulation();
    }
  });

  document.querySelector("#nextMasterMonth").addEventListener("click", () => {
    if (!masterHistory[masterMonth]) return;
    if (masterMonth === masterMonths.length - 1) {
      showSimulationCompleteModal(true);
      return;
    }
    masterMonth = Math.min(masterMonth + 1, masterMonths.length - 1);
    renderMasterSimulation();
  });

  document.querySelector("#restartMaster").addEventListener("click", () => {
    restartMasterSimulation();
  });

  document.querySelector("#eventModalClose").addEventListener("click", () => {
    closeConsequenceModal();
  });

  document.querySelector("#eventModal").addEventListener("click", (event) => {
    if (event.target.id === "eventModal") closeConsequenceModal();
  });

  document.querySelector("#levelModalClose").addEventListener("click", () => {
    document.querySelector("#levelModal").classList.remove("active");
    document.querySelector("#levelModal").setAttribute("aria-hidden", "true");
  });

  document.querySelector("#levelModal").addEventListener("click", (event) => {
    if (event.target.id === "levelModal") {
      document.querySelector("#levelModal").classList.remove("active");
      document.querySelector("#levelModal").setAttribute("aria-hidden", "true");
    }
  });

  document.querySelector("#resetProgress").addEventListener("click", resetProgress);

  document.querySelector("#finalEvaluation").addEventListener("click", (event) => {
    const chartToggle = event.target.closest("[data-chart-toggle]");
    if (chartToggle) {
      const key = chartToggle.dataset.chartToggle;
      if (activeTimelineKpis.has(key)) activeTimelineKpis.delete(key);
      else activeTimelineKpis.add(key);
      renderTimelineChart();
      return;
    }
    if (!event.target.closest("#showTimelineChart")) return;
    activeTimelineKpis = new Set(["service", "margin", "cash", "cost", "risk"]);
    renderTimelineChart();
  });

  document.querySelector("#resetGame").addEventListener("click", () => {
    impacts = { gap: {}, stock: {}, master: {} };
    lastDecision = {
      title: "Dashboard reiniciado.",
      copy: "Volviste al estado base. Toma una decision para ver el impacto por KPI.",
      impact: {},
    };
    renderGapScenario();
    renderStockScenario();
    renderDecisionPractice();
    renderQuiz();
    restartMasterSimulation();
    recalcState();
  });

  document.querySelector("#quickPrompts").addEventListener("click", (event) => {
    const prompt = event.target.closest(".prompt-chip");
    if (!prompt) return;
    addChatBubble(prompt.textContent, "user");
    addChatBubble(coachAnswer(prompt.textContent), "ai");
  });

  document.querySelector("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chatInput");
    const value = input.value.trim();
    if (!value) return;
    addChatBubble(value, "user");
    addChatBubble(coachAnswer(value), "ai");
    input.value = "";
  });
}

function rotateQuotes() {
  const node = document.querySelector("#quoteRotator");
  let index = 0;
  setInterval(() => {
    index = (index + 1) % quotes.length;
    node.textContent = quotes[index];
  }, 2600);
}

function renderHeroVisual(index = currentHeroVisual) {
  currentHeroVisual = (index + heroVisualSlides.length) % heroVisualSlides.length;
  const slide = heroVisualSlides[currentHeroVisual];
  const flow = document.querySelector(".sop-flow");
  if (!flow) return;
  flow.classList.add("visual-refreshing");
  setTimeout(() => {
    flow.innerHTML = `
      <div class="flow-header">
        <span>${slide.title}</span>
        <strong>${slide.tag}</strong>
      </div>
      ${renderHeroVisualBody(slide)}
    `;
    flow.classList.remove("visual-refreshing");
  }, 160);
  renderHeroDots();
}

function renderHeroVisualBody(slide) {
  if (slide.type === "network") {
    return `
      <div class="hero-network">
        ${slide.cards.map(([title, copy], index) => `
          <div class="network-node node-${index}">
            <strong>${title}</strong>
            <span>${copy}</span>
          </div>
        `).join("")}
        <div class="network-core">ONE PLAN</div>
      </div>
    `;
  }
  if (slide.type === "gap") {
    return `
      <div class="hero-gap-visual">
        <div class="hero-gap-bars">
          <div class="hero-gap-bar target"><span>${slide.cards[0][0]}</span><strong>${slide.cards[0][1]}</strong></div>
          <div class="hero-gap-bar forecast"><span>${slide.cards[1][0]}</span><strong>${slide.cards[1][1]}</strong></div>
        </div>
        <div class="hero-gap-callout">
          <span>${slide.cards[2][0]}</span>
          <strong>${slide.cards[2][1]}</strong>
          <p>${slide.cards[3][1]}</p>
        </div>
      </div>
    `;
  }
  if (slide.type === "kpi") {
    return `
      <div class="hero-kpi-board">
        ${slide.cards.map(([title, value], index) => `
          <div class="hero-kpi-card pulse-${index}">
            <span>${title}</span>
            <strong>${value}</strong>
            <div><i style="width:${Math.max(20, Number.parseInt(value, 10) || 72)}%"></i></div>
          </div>
        `).join("")}
      </div>
    `;
  }
  return `
    <div class="flow-ladder">
      ${slide.cards.map(([num, title, copy], index) => `
        <div class="flow-step ${["activity", "demand", "supply", "business", "executive"][index] || "activity"}">
          <small>${num}</small>
          <div>
            <h3>${title}</h3>
            <p>${copy}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderHeroDots() {
  const dots = document.querySelector("#heroDots");
  if (!dots) return;
  dots.innerHTML = heroVisualSlides
    .map((_, index) => `<button class="${index === currentHeroVisual ? "active" : ""}" type="button" data-hero-dot="${index}" aria-label="Ver visual ${index + 1}"></button>`)
    .join("");
}

function rotateHeroVisuals() {
  renderHeroVisual(0);
  setInterval(() => renderHeroVisual(currentHeroVisual + 1), 5200);
}

function applyVisualSet(pageId, setIndex) {
  const page = document.querySelector(`#${pageId}`);
  const visualSet = rotatingVisuals[pageId]?.[setIndex];
  if (!page || !visualSet) return;
  const cards = page.querySelectorAll(".visual-card, .banner-slide");
  cards.forEach((card, index) => {
    const content = visualSet[index];
    if (!content) return;
    card.classList.add("visual-refreshing");
    setTimeout(() => {
      card.querySelector("span").textContent = content[0];
      card.querySelector("strong").textContent = content[1];
      card.classList.remove("visual-refreshing");
    }, 180);
  });
}

function rotatePageVisuals() {
  const indexes = Object.fromEntries(Object.keys(rotatingVisuals).map((key) => [key, 0]));
  setInterval(() => {
    Object.keys(rotatingVisuals).forEach((pageId) => {
      indexes[pageId] = (indexes[pageId] + 1) % rotatingVisuals[pageId].length;
      applyVisualSet(pageId, indexes[pageId]);
    });
  }, 3800);
}

dailyContent = checkDailyReset();
currentGapScenario = dailyContent.miniGameSeeds.gap[0] || 0;
currentStockScenario = dailyContent.miniGameSeeds.stock[0] || 0;
currentDecisionScenario = dailyContent.miniGameSeeds.decision[0] || 0;
renderJourney();
renderDashboard();
renderGapScenario();
renderStockScenario();
renderDecisionPractice();
renderQuiz();
renderCases();
renderCrossword();
renderQuickPrompts();
renderMasterSimulation();
renderProgressDashboard();
setInterval(renderProgressDashboard, 60000);
bindEvents();
showPageFromHash();
rotateQuotes();
rotateHeroVisuals();
rotatePageVisuals();
recalcState();
