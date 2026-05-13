const quotes = [
  "S&OP no es una reunion.",
  "Un forecast perfecto no existe.",
  "Supply Chain es tomar decisiones bajo presion.",
  "El GAP se gestiona. No se esconde.",
];

const lessons = [
  {
    num: "01",
    title: "Clase 1",
    short: "Pensar como director: decisiones, riesgo, experiencia y KPIs.",
    theory: [
      "Supply Chain administra tres flujos: producto, informacion y dinero.",
      "Un director decide con experiencia, riesgo y tiempo limitado.",
      "La capacidad de decision importa mas que decidir perfecto.",
      "Los objetivos suelen competir: vender mas puede subir servicio, pero tambien subir costo logistico, inventario, waste o riesgo de calidad.",
      "La mirada de direccion exige entender el impacto en ventas, margen, cliente, activos y personas antes de elegir.",
    ],
    takeaway: "Clave: no se trata de llegar al numero de cualquier manera, sino de mostrar que se rompe y que se protege.",
    unlock: "Mini juego recomendado: Crisis Room.",
  },
  {
    num: "02",
    title: "Clase 2",
    short: "Planner mindset: stock, servicio, desperdicio y error visible.",
    theory: [
      "Lo que tengo + lo que produzco - lo que vendo = stock.",
      "El planner administra errores: declara, alerta y propone soluciones.",
      "KPIs clave: servicio, costo, waste, stocks, innovation time y warehousing.",
      "El stock alto protege servicio, pero consume cash, espacio y puede generar desperdicio.",
      "El stock bajo mejora capital de trabajo, pero aumenta quiebres, urgencias y perdida de confianza del cliente.",
    ],
    takeaway: "Clave: el planner no busca explicar tarde, busca anticipar patrones y preparar respuestas.",
    unlock: "Mini juego recomendado: Stock Detective.",
  },
  {
    num: "03",
    title: "Demand Planning",
    short: "Generar certezas, escenarios y premisas accionables.",
    theory: [
      "El forecast perfecto no existe: el objetivo es generar certezas utiles.",
      "Las incertidumbres cronicas deben transformarse en planes preparados.",
      "Hay que hablar de premisas, riesgos y oportunidades antes que pelear numeros.",
      "Forecast accuracy puede mejorar con disciplina, pero perseguir exactitud absoluta puede consumir tiempo que deberia usarse para decidir.",
      "El demand planner convierte rangos, patrones, clientes y promociones en decisiones operativas concretas.",
    ],
    takeaway: "Clave: una certeza util es aquella que permite decidir turnos, stock, compras, flota o presupuesto.",
    unlock: "Mini juego recomendado: Gap Challenge.",
  },
  {
    num: "04",
    title: "Supply Planning",
    short: "Capacidad, restricciones, abastecimiento y plan ejecutable.",
    theory: [
      "Supply valida si el plan se puede ejecutar con capacidad, materiales y stock.",
      "Una restriccion visible permite que el negocio venda otro mix o negocie clientes.",
      "El plan operativo debe conectar corto, mediano y largo plazo.",
      "Mas produccion puede mejorar ventas, pero si fuerza capacidad puede subir costo, afectar calidad o crear inventario equivocado.",
      "Una buena restriccion no bloquea la conversacion: la ordena para buscar alternativas.",
    ],
    takeaway: "Clave: Supply Planning traduce deseo comercial en factibilidad real.",
    unlock: "Mini juego recomendado: Stock Detective.",
  },
  {
    num: "05",
    title: "Leadership",
    short: "Tomar decisiones, comunicar trade-offs y sostener procesos.",
    theory: [
      "El liderazgo aparece cuando hay presion, no cuando todo esta ordenado.",
      "Decidir es hacer visibles los trade-offs entre ventas, costo, calidad y cliente.",
      "Un buen lider construye desde el si: trae opciones, no solo problemas.",
      "La colaboracion real ocurre cuando cada area deja de defender su numero y empieza a defender el plan comun.",
      "La comunicacion debe separar hechos, premisas, riesgos, oportunidades y decisiones.",
    ],
    takeaway: "Clave: liderar S&OP es convertir conflicto funcional en una decision entendible.",
    unlock: "Mini juego recomendado: Crisis Room.",
  },
  {
    num: "06",
    title: "Crisis",
    short: "Resolver bajo presion sin romper calidad, costo ni cliente.",
    theory: [
      "No todas las formas de llegar al numero son buenas decisiones.",
      "Las crisis sistemicas revelan fallas de proceso y oportunidades de mejora.",
      "La decision correcta explicita costo, riesgo, cliente y proxima accion.",
      "En crisis se enfrentan objetivos contrapuestos: ventas vs margen, servicio vs costo, velocidad vs calidad, corto plazo vs futuro.",
      "Si el gap aparece tarde, el proceso fallo antes: faltaron premisas, alertas, responsables o escenarios.",
    ],
    takeaway: "Clave: una crisis bien leida se transforma en mejora de proceso, no solo en apagar el incendio.",
    unlock: "Mini juego recomendado: Crisis Room.",
  },
  {
    num: "07",
    title: "Executive S&OP",
    short: "Un solo plan para sincronizar estrategia, finanzas y operacion.",
    theory: [
      "S&OP es la partitura comun de la organizacion.",
      "Debe haber un solo plan, un ritmo y una forma clara de decidir.",
      "El board mira gaps, premisas, riesgos, oportunidades y decisiones.",
      "S&OP no busca culpables ni post-mortems: busca sincronizar demanda, supply, finanzas y estrategia.",
      "El proceso falla cuando se vuelve informativo, excesivamente corto placista o lleno de planes paralelos.",
    ],
    takeaway: "Clave: un buen Executive S&OP deja decisiones claras, no una reunion larga.",
    unlock: "Mini juego recomendado: Gap Challenge.",
  },
];

const baseState = {
  accuracy: 74,
  service: 88,
  stock: 64,
  waste: 18,
  otif: 82,
  fillRate: 86,
  margin: 28,
  sync: 72,
  forecast: 93,
};

let state = { ...baseState };
let currentLesson = null;
let currentGapScenario = 0;
let currentStockScenario = 0;
let currentCrisisScenario = 0;
let currentBiasScenario = 0;
let currentStory = 0;
let currentQuiz = 0;
let quizAnswered = new Set();
let selectedGapActions = new Set();
let lastDecision = {
  title: "Todavia no tomaste una decision.",
  copy: "Cuando juegues, aca vas a ver que KPI se movio y por que.",
  impact: {},
};
let impacts = {
  gap: {},
  stock: {},
  crisis: {},
  bias: {},
  quiz: {},
  story: {},
};

const kpis = [
  ["accuracy", "Forecast accuracy", "%", "Mejor si sube"],
  ["service", "Service", "%", "Promesa al cliente"],
  ["stock", "Stock health", "%", "Cobertura sana"],
  ["waste", "Waste", "%", "Mejor si baja"],
  ["otif", "OTIF", "%", "A tiempo y completo"],
  ["fillRate", "Fill rate", "%", "Pedido cubierto"],
  ["margin", "Margin", "%", "Rentabilidad"],
];

const kpiMeta = Object.fromEntries(kpis.map(([key, label, suffix]) => [key, { label, suffix }]));
const inverseGood = new Set(["waste"]);

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
];

const stockScenarios = [
  {
    title: "Stock Detective: promo fantasma",
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
    title: "Stock Detective: proveedor recurrente",
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
    title: "Stock Detective: forecast agregado enganoso",
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
    title: "Stock Detective: exceso silencioso",
    brief: "El stock nunca rompe safety, pero se aleja del maximo y empieza a generar waste.",
    line: "45,82 120,76 190,70 265,66 330,62 405,60 475,58 540,56 605,54 680,52 720,50",
    points: [[330, 62], [680, 52]],
    options: [
      ["Hay sobrestock: protege servicio, pero deteriora cash y waste.", true, { stock: 4, margin: -2, waste: 5, sync: 3 }],
      ["Es perfecto porque nunca cae bajo safety stock.", false, { waste: 5, margin: -4, sync: -4 }],
      ["Hay que producir mas por seguridad.", false, { stock: -2, waste: 7, margin: -5 }],
    ],
  },
];

const crisisScenarios = [
  {
    title: "Crisis Room: faltan 3 puntos",
    brief: "Estas en la reunion diaria del 24 de febrero. El mes cierra en 97%.",
    options: [
      ["Costo extra para cumplir", "Abrir domingo, contratar recursos y flota. Llega a ventas, tensiona margen.", { service: 5, otif: 5, margin: -5, waste: 1, sync: 1 }, "Valida si el board acepta el costo. Buen foco en servicio, riesgo financiero visible."],
      ["Sustituir producto y entrega", "Entregar producto mas caro no pedido y cambiar modalidad de entrega.", { service: -5, fillRate: -4, margin: -2, sync: -6 }, "Cierra el numero, pero rompe la promesa al cliente. Salida fragil."],
      ["Plan colaborativo", "Combinar promo rentable, mix disponible y acuerdo con cliente.", { service: 5, otif: 3, margin: 1, fillRate: 4, sync: 8, accuracy: 2 }, "La mejor respuesta S&OP: acciones, premisas y trade-offs visibles."],
    ],
  },
  {
    title: "Crisis Room: materia prima bloqueada",
    brief: "Un proveedor no entrega. Ventas ya prometio volumen a un cliente grande.",
    options: [
      ["Avisar restriccion y redirigir mix", "Supply declara el limite y Ventas empuja productos disponibles.", { service: 4, stock: 4, fillRate: 3, sync: 7 }, "Buen uso del proceso: restriccion visible, accion comercial alineada."],
      ["Esperar hasta tener certeza total", "No se informa nada hasta confirmar al 100%.", { service: -6, otif: -5, sync: -8, accuracy: -2 }, "Esperar certeza perfecta suele destruir tiempo de reaccion."],
      ["Comprar urgente a cualquier costo", "Se cubre volumen con sobrecosto y baja validacion.", { service: 3, margin: -7, waste: 3, sync: -1 }, "Puede servir en emergencia, pero necesita aprobacion y contramedida."],
    ],
  },
  {
    title: "Crisis Room: board pide target imposible",
    brief: "El target sube, pero no hay premisas nuevas que expliquen como llegar.",
    options: [
      ["Igualar forecast al target", "Se carga el numero deseado y se evita mostrar el gap.", { accuracy: -8, sync: -10, service: -3 }, "Eso crea caos: la organizacion no sabe con que acciones llegaria."],
      ["Mostrar gap y pedir acciones", "Se mantiene forecast probable y se abre decision de negocio.", { accuracy: 4, sync: 8, margin: 2 }, "Correcto: el gap visible es el punto de partida del S&OP."],
      ["Bajar servicio para vender mas", "Se prioriza volumen, afectando entregas y confianza.", { service: -8, fillRate: -6, margin: 1, sync: -3 }, "Vender sin cumplir erosiona el proceso y al cliente."],
    ],
  },
  {
    title: "Crisis Room: calidad en duda",
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
    title: "Bias Buster: optimismo comercial",
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
    title: "Bias Buster: miedo a capacidad",
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
    title: "Bias Buster: promedio tramposo",
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
    options: ["S&OP Ejecutivo", "Comite de Negocio", "Activity Review", "Supply Review"],
    answer: 2,
    explain: "Activity Review arranca con actividades comerciales, promociones, pricing y lanzamientos.",
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
    options: ["Corto, mediano y largo plazo", "Solo la semana actual", "Solo el cierre del mes", "Solo el presupuesto anual"],
    answer: 0,
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
    options: ["Mejora cash automaticamente", "Reduce siempre waste", "Puede mejorar servicio pero empeorar cash, espacio y waste", "Elimina la necesidad de forecast"],
    answer: 2,
    explain: "Mas stock puede proteger servicio, pero consume capital y aumenta riesgo de obsolescencia o desperdicio.",
  },
  {
    q: "Que es una premisa en S&OP?",
    options: ["Una opinion sin responsable", "Un numero inventado para cerrar el target", "Una excusa para no decidir", "Una condicion asumida que explica el plan y debe documentarse"],
    answer: 3,
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
    target[key] = (target[key] ?? 0) + value;
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
  impacts[scope] = impact;
  if (decision) {
    lastDecision = { ...decision, impact };
  }
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

function renderDashboard() {
  document.querySelector("#kpiGrid").innerHTML = kpis
    .map(([key, label, suffix, hint]) => {
      const value = state[key];
      const delta = lastDecision.impact?.[key] ?? 0;
      const danger = key === "waste" ? value > 24 : value < 70;
      const color = danger ? "var(--red)" : key === "margin" ? "var(--green)" : "var(--charcoal)";
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
  } else if (state.accuracy < 68) {
    narrative.textContent = "El proceso esta perdiendo calidad de lectura: faltan premisas y datos accionables.";
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

function renderCrisisScenario() {
  const scenario = crisisScenarios[currentCrisisScenario];
  document.querySelector("#crisisTitle").textContent = scenario.title;
  document.querySelector("#crisisBrief").textContent = scenario.brief;
  document.querySelector("#crisisBoard").innerHTML = scenario.options
    .map(([title, copy], index) => `
      <button class="crisis-card" type="button" data-crisis="${index}">
        <strong>${title}</strong>
        <span>${copy}</span>
      </button>
    `)
    .join("");
  document.querySelector("#crisisFeedback").textContent = "La mejor decision no siempre maximiza ventas: administra riesgo.";
  setImpact("crisis", {});
}

function renderBiasScenario() {
  const scenario = biasScenarios[currentBiasScenario];
  document.querySelector("#biasTitle").textContent = scenario.title;
  document.querySelector("#biasBrief").textContent = scenario.brief;
  document.querySelector("#biasTable").innerHTML = `
    <div class="bias-row bias-head">
      <span>Periodo</span>
      <span>Forecast</span>
      <span>Real</span>
      <span>Delta</span>
    </div>
    ${scenario.rows
      .map(([period, forecast, real]) => `
        <div class="bias-row">
          <span>${period}</span>
          <strong>${forecast}</strong>
          <strong>${real}</strong>
          <b class="${real - forecast >= 0 ? "positive-text" : "negative-text"}">${real - forecast > 0 ? "+" : ""}${real - forecast}</b>
        </div>
      `)
      .join("")}
  `;
  document.querySelector("#biasOptions").innerHTML = scenario.options
    .map(([text], index) => `<button class="quiz-option" type="button" data-bias="${index}">${text}</button>`)
    .join("");
  document.querySelector("#biasFeedback").textContent = "Lee el patron antes de ajustar el numero. Tu decision tambien movera los KPIs del dashboard.";
  setImpact("bias", {});
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

  document.querySelector("#nextCrisisScenario").addEventListener("click", () => {
    currentCrisisScenario = (currentCrisisScenario + 1) % crisisScenarios.length;
    renderCrisisScenario();
  });

  document.querySelector("#nextBiasScenario").addEventListener("click", () => {
    currentBiasScenario = (currentBiasScenario + 1) % biasScenarios.length;
    renderBiasScenario();
  });

  document.querySelector("#biasOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-bias]");
    if (!option) return;
    document.querySelectorAll("#biasOptions .quiz-option").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    const answer = biasScenarios[currentBiasScenario].options[Number(option.dataset.bias)];
    setImpact("bias", answer[2], {
      title: `Bias: ${answer[1] ? "diagnostico correcto" : "diagnostico riesgoso"}`,
      copy: option.textContent.trim(),
    });
    document.querySelector("#biasFeedback").textContent = answer[1]
      ? "Correcto: detectaste el sesgo y lo conectaste con una accion de proceso."
      : "Cuidado: si no ves el sesgo, el proceso repite el mismo error con otro nombre.";
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

  document.querySelector("#crisisBoard").addEventListener("click", (event) => {
    const card = event.target.closest("[data-crisis]");
    if (!card) return;
    document.querySelectorAll(".crisis-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    const choice = crisisScenarios[currentCrisisScenario].options[Number(card.dataset.crisis)];
    setImpact("crisis", choice[2], {
      title: `Crisis: ${choice[0]}`,
      copy: choice[3],
    });
    document.querySelector("#crisisFeedback").textContent = choice[3];
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
    impacts = { gap: {}, stock: {}, crisis: {}, bias: {}, quiz: {}, story: {} };
    lastDecision = {
      title: "Dashboard reiniciado.",
      copy: "Volviste al estado base. Toma una decision para ver el impacto por KPI.",
      impact: {},
    };
    renderGapScenario();
    renderStockScenario();
    renderCrisisScenario();
    renderBiasScenario();
    renderQuiz();
    renderStoryStage();
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
renderCrisisScenario();
renderBiasScenario();
renderQuiz();
renderCases();
renderQuickPrompts();
bindEvents();
rotateQuotes();
recalcState();
