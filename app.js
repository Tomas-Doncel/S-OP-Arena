const quotes = [
  "S&OP no es una reunion.",
  "Un forecast perfecto no existe.",
  "Supply Chain es tomar decisiones bajo presion.",
  "El GAP se gestiona. No se esconde.",
];

const lessons = [
  {
    num: "01",
    title: "Que es S&OP",
    short: "Un proceso para alinear demanda, supply, finanzas y estrategia.",
    theory: [
      "S&OP no es una reunion: es el proceso que convierte informacion dispersa en un solo plan.",
      "Alinea volumen, valor, capacidad, inventario, clientes y cash.",
      "Su objetivo es decidir antes de ejecutar, no explicar tarde lo que ya paso.",
      "Cuando funciona, las areas dejan de defender su numero y empiezan a defender el plan comun.",
    ],
    takeaway: "Clave: S&OP crea sincronizacion, no presentaciones.",
    unlock: "Mini juego recomendado: Reunion S&OP.",
  },
  {
    num: "02",
    title: "Revision de demanda",
    short: "De senales comerciales a demanda discutible y accionable.",
    theory: [
      "Consolida baseline, actividades, promociones, riesgos y oportunidades.",
      "El forecast no debe maquillarse para llegar al target.",
      "Las premisas importan tanto como el numero: explican por que creemos que pasara algo.",
      "Una buena Demand Review deja gaps visibles y alternativas comerciales.",
    ],
    takeaway: "Clave: forecast probable y target aspiracional son conversaciones distintas.",
    unlock: "Mini juego recomendado: Forecast vs objetivo.",
  },
  {
    num: "03",
    title: "Revision de supply",
    short: "Traducir deseo comercial en capacidad, materiales y restricciones.",
    theory: [
      "Supply valida si el plan se puede ejecutar con planta, proveedores, stock y transporte.",
      "Una restriccion visible permite decidir mix, clientes, fechas o inversion.",
      "Ocultar restricciones genera urgencias y costos mas tarde.",
      "El plan ejecutable conecta corto plazo con capacidades futuras.",
    ],
    takeaway: "Clave: una restriccion bien explicada no frena el negocio; lo enfoca.",
    unlock: "Mini juego recomendado: Restricciones de supply.",
  },
  {
    num: "04",
    title: "S&OP ejecutivo",
    short: "Donde los trade-offs se convierten en decisiones de negocio.",
    theory: [
      "El board decide sobre gaps, riesgos, inversiones, prioridades y excepciones.",
      "No deberia revisar datos desde cero: deberia elegir entre alternativas preparadas.",
      "La salida debe ser clara: decision, responsable, premisa, KPI y fecha.",
      "Sin sponsor ejecutivo, S&OP se vuelve una reunion informativa.",
    ],
    takeaway: "Clave: el S&OP ejecutivo debe destrabar, no solo escuchar.",
    unlock: "Mini juego recomendado: Decision ejecutiva.",
  },
  {
    num: "05",
    title: "Forecast vs objetivo",
    short: "Separar lo probable de lo deseado para gestionar el GAP.",
    theory: [
      "Forecast es la mejor lectura probable; target es el objetivo del negocio.",
      "El GAP no se esconde: se gestiona con acciones, responsables y riesgos.",
      "Igualar forecast al target sin acciones crea falsa certeza.",
      "Cerrar gap puede subir ventas, pero tambien costo, riesgo, inventario o erosionar margen.",
    ],
    takeaway: "Clave: un GAP visible es una oportunidad de decision.",
    unlock: "Mini juego recomendado: Forecast vs objetivo.",
  },
  {
    num: "06",
    title: "KPIs",
    short: "El tablero que muestra si una decision mejora o solo desplaza el problema.",
    theory: [
      "Nivel de servicio muestra si cumplimos la promesa al cliente.",
      "Inventario y flujo de caja muestran cuanto capital queda atrapado.",
      "Margen y costo de Supply Chain muestran si el volumen genera valor.",
      "Riesgo y satisfaccion del cliente muestran consecuencias futuras, no solo el cierre del mes.",
    ],
    takeaway: "Clave: ningun KPI cuenta toda la historia solo.",
    unlock: "Mini juego recomendado: Desafio de stock.",
  },
  {
    num: "07",
    title: "Trade-offs",
    short: "La esencia del proceso: decidir que se protege y que costo se acepta.",
    theory: [
      "Servicio vs costo: cumplir rapido puede ser caro.",
      "Inventario vs cash: mas stock protege, pero consume capital.",
      "Ventas vs margen: volumen sin mix rentable puede destruir valor.",
      "Velocidad vs calidad: llegar antes no sirve si se rompe confianza.",
    ],
    takeaway: "Clave: la buena decision no elimina el costo; lo hace consciente.",
    unlock: "Mini juego recomendado: Decision ejecutiva.",
  },
  {
    num: "08",
    title: "Liderazgo",
    short: "Sostener el proceso cuando la presion empuja a improvisar.",
    theory: [
      "Liderar S&OP es hacer preguntas incomodas antes de que el mercado las cobre.",
      "Un lider trae alternativas, no solo problemas.",
      "La comunicacion separa hechos, premisas, riesgos, oportunidades y decisiones.",
      "La confianza aparece cuando las areas ven que el proceso decide de verdad.",
    ],
    takeaway: "Clave: liderazgo es convertir conflicto funcional en una decision entendible.",
    unlock: "Mini juego recomendado: Reunion S&OP.",
  },
  {
    num: "09",
    title: "Decision bajo presion",
    short: "Pensar bajo incertidumbre, tiempo limitado y consecuencias futuras.",
    theory: [
      "El forecast perfecto no existe y la certeza total suele llegar tarde.",
      "Las crisis revelan fallas de proceso: alertas, premisas, responsables o escenarios ausentes.",
      "La decision correcta explicita impacto en cliente, costo, margen, riesgo y futuro.",
      "Lo que se decide este mes puede crear ventaja o deuda operativa en el siguiente.",
    ],
    takeaway: "Clave: aprender S&OP es aprender a dirigir bajo presion.",
    unlock: "Simulacion recomendada: Dirigi el negocio.",
  },
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
let currentStory = 0;
let currentQuiz = 0;
let quizAnswered = new Set();
let selectedGapActions = new Set();
let masterMonth = 0;
let masterHistory = [];
let masterPending = [];
let lastDecision = {
  title: "Todavia no tomaste una decision.",
  copy: "Cuando juegues, aca vas a ver que KPI se movio y por que.",
  impact: {},
};
let impacts = {
  gap: {},
  stock: {},
  supply: {},
  executive: {},
  spike: {},
  meeting: {},
  quiz: {},
  story: {},
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
    mark: "97",
    title: "Faltan 3 puntos",
    setup: "El board pide llegar al target. El director SC debe decidir entre costo, calidad, cliente y servicio.",
    question: "Que deberia hacer un director antes de elegir una alternativa?",
    options: [
      ["Hacer visible costo, riesgo y cliente antes de decidir.", { sync: 3, margin: 1 }, "Exacto. La decision mejora cuando el trade-off queda claro."],
      ["Elegir lo que llegue al numero sin preguntar nada.", { sync: -5, service: -3 }, "Eso puede cerrar ventas, pero suele romper confianza."],
    ],
  },
  {
    mark: "10%",
    title: "Cliente imprevisible",
    setup: "Un cliente pide extra al final del mes durante siete ciclos. La incertidumbre cronica ya es una certeza.",
    question: "Como deberia tratarse ese patron?",
    options: [
      ["Como escenario preparado con trigger y plan de respuesta.", { accuracy: 3, stock: 3, sync: 3 }, "Bien: si se repite, no es sorpresa operativa."],
      ["Como evento nuevo cada mes.", { accuracy: -4, service: -4 }, "Ese es el loop que el planner debe romper."],
    ],
  },
  {
    mark: "1",
    title: "Un solo plan",
    setup: "Ventas, Finanzas y Supply Chain no pueden operar con tres verdades distintas del futuro.",
    question: "Que conversacion destraba el proceso?",
    options: [
      ["Premisas, riesgos, oportunidades y gap contra target.", { sync: 5, margin: 2 }, "Si todos ven la misma partitura, pueden tocar juntos."],
      ["Defender el numero de cada area.", { sync: -6, accuracy: -2 }, "Eso convierte S&OP en subasta de numeros."],
    ],
  },
  {
    mark: "48h",
    title: "La huelga que nadie tenia en el escenario",
    setup: "Transporte avisa una medida de fuerza con dos dias de anticipacion. Hay stock, pero no capacidad para llevar todo.",
    question: "Que separa una respuesta madura de una reaccion desesperada?",
    options: [
      ["Priorizar clientes, comunicar fechas y aprobar costos excepcionales.", { service: 3, cost: 2, risk: -4, satisfaction: 4, sync: 4 }, "Bien: crisis no significa enviar todo a cualquier costo, sino decidir prioridades."],
      ["Despachar por orden de llegada para evitar discusiones.", { service: -4, satisfaction: -5, risk: 5, sync: -4 }, "Parece neutral, pero ignora valor, penalidades y promesa al cliente."],
    ],
  },
  {
    mark: "$",
    title: "El volumen que destruyo margen",
    setup: "El mes cerro arriba del target, pero el mix fue barato y se usaron fletes express. Ventas celebro, Finanzas no.",
    question: "Que aprendizaje deberia llevarse al proximo ciclo?",
    options: [
      ["Medir volumen junto con mix, margen, costo logistico y cash.", { margin: 4, cash: 3, cost: -2, sync: 4 }, "Exacto. Un plan de cajas sin valor puede esconder una mala decision."],
      ["Mientras el volumen cierre, el margen se revisa despues.", { margin: -5, cost: 4, cash: -3, sync: -4 }, "Ese enfoque transforma S&OP en una carrera de facturacion."],
    ],
  },
  {
    mark: "SKU",
    title: "El promedio que escondio el quiebre",
    setup: "La accuracy total parecia buena, pero el SKU mas importante fallo durante tres semanas.",
    question: "Que deberia cambiar el planner?",
    options: [
      ["Bajar al nivel SKU/cliente donde se toma la decision real.", { service: 4, stock: 2, satisfaction: 3, sync: 4 }, "Bien: el agregado sirve para mirar, no siempre para decidir."],
      ["Celebrar el promedio total y cerrar el analisis.", { service: -5, satisfaction: -4, accuracy: -3 }, "El promedio puede tapar el problema que ve el cliente."],
    ],
  },
  {
    mark: "AI",
    title: "La alerta que llego antes que la reunion",
    setup: "Un modelo detecta anomalía de demanda en e-commerce. El equipo duda porque no aparece en el forecast tradicional.",
    question: "Como deberia usarse la IA en el proceso?",
    options: [
      ["Como senal para abrir escenario, validar premisas y definir trigger.", { accuracy: 3, service: 3, risk: -3, sync: 4 }, "Correcto: IA no reemplaza la decision, acelera la conversacion."],
      ["Como orden automatica para producir todo el upside.", { stock: 4, cost: 4, risk: 5, margin: -3 }, "La IA sin gobernanza puede convertir una senal en sobrestock."],
    ],
  },
  {
    mark: "Q",
    title: "Calidad freno el cierre",
    setup: "Habia producto para llegar al numero, pero Calidad detecto un riesgo. El cliente no sabia nada todavia.",
    question: "Que decision sostiene mejor la confianza?",
    options: [
      ["Bloquear lote, mostrar escenarios y decidir con el board.", { risk: -5, satisfaction: 4, sync: 5, margin: 1 }, "Bien: proteger confianza puede valer mas que cerrar una venta."],
      ["Despachar y esperar si aparece reclamo.", { risk: 8, satisfaction: -8, margin: -4, sync: -7 }, "Llegar al numero transfiriendo riesgo al cliente rompe el proceso."],
    ],
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
      ["Crear buffer preventivo en SKUs A", { service: 2, inventory: 6, margin: -2, cost: 3, risk: 2, cash: -6, sync: -1 }, { month: 3, impact: { risk: 3, cash: -3 }, text: "El buffer preventivo empieza a presionar espacio y capital." }, "Protege servicio, pero compra costo futuro."],
      ["Liberar cash en baja rotacion", { service: -3, inventory: -6, margin: 1, cost: -2, risk: 4, satisfaction: -3, cash: 7, sync: -2 }, { month: 2, impact: { service: -4, satisfaction: -4, risk: 3 }, text: "El recorte deja menos margen para absorber la promocion." }, "El cash mejora hoy, pero baja resiliencia."],
    ],
  },
  {
    title: "Mes 2: promocion de Marketing",
    context: "Marketing activa una promo fuerte. El volumen es atractivo, pero la capacidad solo cubre una parte del upside.",
    messages: ["Marketing: la promo puede traer +15%.", "Supply: la capacidad no cubre todo el upside.", "Cliente: necesitamos fecha firme."],
    event: "Forecast spike por promocion.",
    options: [
      ["Validar promo por mix y capacidad", { service: 4, inventory: -2, margin: 4, cost: 1, risk: -3, satisfaction: 4, cash: 2, sync: 6 }, null, "La promo entra al plan con restricciones visibles."],
      ["Maximizar promo en clientes clave", { service: 2, inventory: -5, margin: -5, cost: 6, risk: 6, satisfaction: -2, cash: -4, sync: -5 }, { month: 3, impact: { risk: 4, cost: 3, satisfaction: -3 }, text: "La promo agresiva genera urgencias y promesas dificiles de cumplir." }, "Vender mas no siempre significa decidir mejor."],
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
      ["Comprar spot para cubrir el pico", { service: 5, margin: -5, cost: 8, risk: 1, satisfaction: 3, cash: -6, sync: 1 }, { month: 4, impact: { margin: -3, cash: -4, cost: 3 }, text: "La compra spot llega a tiempo, pero su costo pega en el mes siguiente." }, "Correcto si se aprueba como excepcion, peligroso como habito."],
      ["Repartir material por contratos activos", { service: -4, margin: -2, cost: 1, risk: 5, satisfaction: -5, sync: -4 }, null, "Parece equilibrado, pero puede no proteger a nadie."],
    ],
  },
  {
    title: "Mes 4: presion por bajar inventario",
    context: "Finanzas exige liberar cash. Operaciones advierte que viene demanda incierta.",
    messages: ["Finanzas: necesitamos bajar capital de trabajo.", "Demanda: hay incertidumbre en dos clientes.", "Deposito: el espacio esta justo."],
    event: "Presion por reducir inventario.",
    options: [
      ["Bajar inventario con segmentacion ABC", { service: 2, inventory: -5, margin: 2, cost: -3, risk: -2, satisfaction: 2, cash: 6, sync: 5 }, null, "Buen equilibrio: menos stock donde duele menos."],
      ["Recorte rapido en familias de bajo margen", { service: -5, inventory: -8, margin: 1, cost: -4, risk: 6, satisfaction: -5, cash: 8, sync: -4 }, { month: 5, impact: { service: -5, satisfaction: -4, risk: 4 }, text: "El recorte rapido deja sin cobertura al pedido inesperado." }, "El Excel queda lindo, la operacion no tanto."],
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
      ["Aceptar con operativo express", { service: 1, inventory: -6, margin: 1, cost: 8, risk: 7, satisfaction: -3, cash: -2, sync: -5 }, { month: 6, impact: { risk: 4, cost: 4, satisfaction: -4 }, text: "La promesa agresiva crea tension justo cuando llega la crisis de transporte." }, "El volumen seduce, pero el servicio queda expuesto."],
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
      <button class="road-step ${index === currentLesson ? "active" : ""}" type="button" data-lesson="${index}">
        <strong>${lesson.num}</strong>
        <h3>${lesson.title}</h3>
        <p>${lesson.short}</p>
      </button>
      ${index === currentLesson ? renderLesson(lesson) : ""}
    `)
    .join("");
}

function renderLesson(lesson) {
  return `
    <article class="lesson-panel" aria-live="polite">
    <div>
      <p class="eyebrow">Teoria base</p>
      <h3>${lesson.num}. ${lesson.title}</h3>
      <ul>
        ${lesson.theory.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p class="lesson-takeaway">${lesson.takeaway}</p>
    </div>
    <div class="lesson-unlock">
      <span>Desbloquea mindset</span>
      <strong>${lesson.unlock}</strong>
      <a href="#simulators">Ir a mini juegos</a>
    </div>
    </article>
  `;
}

function getGapScenario() {
  return gapScenarios[currentGapScenario];
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
  setImpact("gap", {});
}

function updateGapGame() {
  const scenario = getGapScenario();
  let plan = scenario.forecast;
  const impact = {};
  selectedGapActions.forEach((id) => {
    const action = scenario.actions.find(([actionId]) => actionId === id);
    plan += action[3];
    mergeImpact(impact, action[4]);
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
    .map(([text], index) => `<button class="quiz-option" type="button" data-stock="${index}">${text}</button>`)
    .join("");
  document.querySelector("#stockFeedback").textContent = "Detecta el patron antes de correr a apagar el incendio.";
  setImpact("stock", {});
}

function renderDecisionGame(gameKey) {
  const game = decisionGames[gameKey];
  const scenario = game.scenarios[game.current()];
  document.querySelector(game.titleId).textContent = scenario.title;
  document.querySelector(game.briefId).textContent = scenario.brief;
  document.querySelector(game.boardId).innerHTML = scenario.options
    .map(([title, copy], index) => `
      <button class="crisis-card" type="button" data-decision-game="${gameKey}" data-decision="${index}">
        <strong>${title}</strong>
        <span>${copy}</span>
      </button>
    `)
    .join("");
  document.querySelector(game.feedbackId).textContent = `Elegí una alternativa. Mejor score guardado: ${getBestScore(game.scope)}.`;
  setImpact(game.scope, {});
}

function chooseDecisionGame(gameKey, optionIndex) {
  const game = decisionGames[gameKey];
  const scenario = game.scenarios[game.current()];
  const choice = scenario.options[optionIndex];
  document.querySelectorAll(`[data-decision-game="${gameKey}"]`).forEach((item) => item.classList.remove("selected"));
  document.querySelector(`[data-decision-game="${gameKey}"][data-decision="${optionIndex}"]`).classList.add("selected");
  setImpact(game.scope, choice[2], {
    title: `${scenario.title}: ${choice[0]}`,
    copy: `${choice[3]} Mejor score ${game.scope}: ${getBestScore(game.scope)}.`,
  });
  document.querySelector(game.feedbackId).textContent = `${choice[3]} Impacto: ${describeImpact(choice[2])}`;
}

function nextDecisionGame(gameKey) {
  const game = decisionGames[gameKey];
  game.setCurrent((game.current() + 1) % game.scenarios.length);
  renderDecisionGame(gameKey);
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
  const question = quizQuestions[currentQuiz];
  document.querySelector("#quizProgress").innerHTML = `
    <span>Pregunta ${currentQuiz + 1} de ${quizQuestions.length}</span>
    <strong>${quizAnswered.size}/${quizQuestions.length} respondidas</strong>
  `;
  document.querySelector("#quizQuestion").innerHTML = `<h3>${question.q}</h3>`;
  document.querySelector("#quizOptions").innerHTML = question.options
    .map((option, index) => `
      <button class="quiz-option" type="button" data-quiz="${index}">
        ${option}
      </button>
    `)
    .join("");
  document.querySelector("#quizFeedback").textContent = "Elegí una respuesta. Si acertás, el dashboard mejora.";
}

function renderCases() {
  document.querySelector("#caseGrid").innerHTML = stories
    .map((story, index) => `
      <button class="case-card ${index === currentStory ? "active" : ""}" type="button" data-story="${index}">
        <div class="case-art">${story.mark}</div>
        <div>
          <h3>${story.title}</h3>
          <p>${story.setup}</p>
        </div>
      </button>
    `)
    .join("");
  renderStoryStage();
}

function renderStoryStage() {
  const story = stories[currentStory];
  document.querySelector("#storyStage").innerHTML = `
    <p class="eyebrow">Decision narrativa</p>
    <h3>${story.title}</h3>
    <p>${story.question}</p>
    <div class="story-options">
      ${story.options.map(([text], index) => `<button class="quiz-option" type="button" data-story-choice="${index}">${text}</button>`).join("")}
    </div>
    <div class="feedback story-feedback" id="storyFeedback">Elegir revela como pensaria un planner bajo presion.</div>
  `;
  setImpact("story", {});
}

function currentMasterImpact() {
  const total = {};
  masterHistory.forEach((entry) => mergeImpact(total, entry.impact));
  masterPending.filter((item) => item.month <= masterMonth).forEach((item) => mergeImpact(total, item.impact));
  return total;
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

  const pendingText = masterPending
    .filter((item) => item.month >= masterMonth)
    .map((item) => item.text)
    .join(" ");
  document.querySelector("#delayedConsequences").textContent = pendingText || "Todavia no hay impactos futuros acumulados.";

  const totalImpact = currentMasterImpact();
  if (masterHistory.filter(Boolean).length) {
    setImpact("master", totalImpact, {
      title: "Dirigi el negocio",
      copy: "La simulacion maestra esta acumulando decisiones, eventos y consecuencias diferidas. La devolucion aparece al final.",
    });
  } else {
    impacts.master = {};
    recalcState();
  }

  const score = Math.max(0, Math.round(impactScore(totalImpact) + masterHistory.length * 8));
  document.querySelector("#masterScore").textContent = score;
  renderFinalEvaluation(score);
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
    masterPending.push({ ...choice[2], from: masterMonth, choice: optionIndex });
  } else {
    masterPending = masterPending.filter((item) => item.from !== masterMonth);
  }
  renderMasterSimulation();
}

function renderFinalEvaluation(score) {
  const node = document.querySelector("#finalEvaluation");
  if (masterHistory.filter(Boolean).length < masterMonths.length) {
    node.innerHTML = "";
    return;
  }
  let rating = "Bombero operativo";
  if (score >= 120) rating = "Director SC world class";
  else if (score >= 95) rating = "Lider de Supply Chain";
  else if (score >= 75) rating = "Manager S&OP fuerte";
  else if (score >= 55) rating = "Planner reactivo";
  const choiceReview = buildMasterReview();
  node.innerHTML = `
    <p class="eyebrow">Evaluacion final</p>
    <h3>${rating}</h3>
    <p>Score final: <strong>${score}</strong>. Servicio ${state.service}%, margen ${state.margin}%, costo ${state.cost}%, riesgo ${state.risk}%, cash ${state.cash}%.</p>
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
    <div class="impact-list">
      <div class="impact-chip ${state.service >= 80 ? "positive" : "negative"}"><strong>Servicio</strong><span>${state.service}%</span></div>
      <div class="impact-chip ${state.margin >= 26 ? "positive" : "negative"}"><strong>Margen</strong><span>${state.margin}%</span></div>
      <div class="impact-chip ${state.risk <= 38 ? "positive" : "negative"}"><strong>Riesgo</strong><span>${state.risk}%</span></div>
      <div class="impact-chip ${state.cash >= 68 ? "positive" : "negative"}"><strong>Cash</strong><span>${state.cash}%</span></div>
    </div>
  `;
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

function bindEvents() {
  document.querySelector("#roadmap").addEventListener("click", (event) => {
    const step = event.target.closest("[data-lesson]");
    if (!step) return;
    const selected = Number(step.dataset.lesson);
    currentLesson = currentLesson === selected ? null : selected;
    renderJourney();
  });

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
    currentGapScenario = (currentGapScenario + 1) % gapScenarios.length;
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
    currentStockScenario = (currentStockScenario + 1) % stockScenarios.length;
    renderStockScenario();
  });

  document.querySelector("#stockOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-stock]");
    if (!option) return;
    document.querySelectorAll("#stockOptions .quiz-option").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    const answer = stockScenarios[currentStockScenario].options[Number(option.dataset.stock)];
    setImpact("stock", answer[2], {
      title: `Stock: ${answer[1] ? "lectura correcta" : "lectura riesgosa"}`,
      copy: option.textContent.trim(),
    });
    document.querySelector("#stockFeedback").textContent = answer[1]
      ? "Correcto: viste el patron y lo transformaste en accion."
      : "Cuidado: esa lectura deja al proceso reaccionando tarde.";
  });

  document.querySelector("#nextSupplyScenario").addEventListener("click", () => nextDecisionGame("supply"));
  document.querySelector("#nextExecutiveScenario").addEventListener("click", () => nextDecisionGame("executive"));
  document.querySelector("#nextSpikeScenario").addEventListener("click", () => nextDecisionGame("spike"));
  document.querySelector("#nextMeetingScenario").addEventListener("click", () => nextDecisionGame("meeting"));

  ["supply", "executive", "spike", "meeting"].forEach((gameKey) => {
    document.querySelector(decisionGames[gameKey].boardId).addEventListener("click", (event) => {
      const option = event.target.closest("[data-decision]");
      if (!option) return;
      chooseDecisionGame(gameKey, Number(option.dataset.decision));
    });
  });

  document.querySelector("#quizOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-quiz]");
    if (!option) return;
    const selected = Number(option.dataset.quiz);
    const question = quizQuestions[currentQuiz];
    const correct = selected === question.answer;
    document.querySelectorAll("#quizOptions .quiz-option").forEach((item) => item.classList.remove("selected", "correct", "wrong"));
    option.classList.add("selected", correct ? "correct" : "wrong");
    quizAnswered.add(currentQuiz);
    setImpact("quiz", correct ? { sync: 3, accuracy: 2 } : { sync: -2, accuracy: -1 }, {
      title: correct ? "Quiz: respuesta correcta" : "Quiz: respuesta incorrecta",
      copy: question.explain,
    });
    document.querySelector("#quizFeedback").textContent = correct
      ? `Correcto. ${question.explain}`
      : `No exactamente. ${question.explain}`;
    setTimeout(() => {
      currentQuiz = (currentQuiz + 1) % quizQuestions.length;
      renderQuiz();
    }, 900);
  });

  document.querySelector("#resetQuiz").addEventListener("click", () => {
    currentQuiz = 0;
    quizAnswered = new Set();
    setImpact("quiz", {}, {
      title: "Quiz reiniciado",
      copy: "Volviste al inicio del cuestionario S&OP.",
    });
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
    masterMonth = Math.min(masterMonth + 1, masterMonths.length - 1);
    renderMasterSimulation();
  });

  document.querySelector("#restartMaster").addEventListener("click", () => {
    restartMasterSimulation();
  });

  document.querySelector("#caseGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-story]");
    if (!card) return;
    currentStory = Number(card.dataset.story);
    renderCases();
  });

  document.querySelector("#storyStage").addEventListener("click", (event) => {
    const choice = event.target.closest("[data-story-choice]");
    if (!choice) return;
    document.querySelectorAll("#storyStage .quiz-option").forEach((item) => item.classList.remove("selected"));
    choice.classList.add("selected");
    const selected = stories[currentStory].options[Number(choice.dataset.storyChoice)];
    setImpact("story", selected[1], {
      title: `Caso: ${stories[currentStory].title}`,
      copy: selected[2],
    });
    document.querySelector("#storyFeedback").textContent = selected[2];
  });

  document.querySelector("#resetGame").addEventListener("click", () => {
    impacts = { gap: {}, stock: {}, supply: {}, executive: {}, spike: {}, meeting: {}, quiz: {}, story: {}, master: {} };
    lastDecision = {
      title: "Dashboard reiniciado.",
      copy: "Volviste al estado base. Toma una decision para ver el impacto por KPI.",
      impact: {},
    };
    renderGapScenario();
    renderStockScenario();
    renderDecisionGame("supply");
    renderDecisionGame("executive");
    renderDecisionGame("spike");
    renderDecisionGame("meeting");
    renderQuiz();
    renderStoryStage();
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

renderJourney();
renderDashboard();
renderGapScenario();
renderStockScenario();
renderDecisionGame("supply");
renderDecisionGame("executive");
renderDecisionGame("spike");
renderDecisionGame("meeting");
renderQuiz();
renderCases();
renderQuickPrompts();
renderMasterSimulation();
bindEvents();
rotateQuotes();
recalcState();
