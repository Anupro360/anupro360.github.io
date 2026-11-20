const PHONETICS_GUIDE_HTML = `
  <div class="rule-card">
    <h4>1. Vocales y Duración (Págs. 17–18)</h4>
    <p>Las 5 vocales (<b>a, e, i, o, u</b>) se leen como en castellano, con estos signos:</p>
    <ul style="margin:6px 0 0 16px;color:var(--text-secondary)">
      <li><b>Rayita intermedia:</b> <b>ae</b> (sonido intermedio entre «a» y «e»), <b>iu</b> (entre «i» y «u»).</li>
      <li><b>Dos puntos (:)</b> Alarga la vocal: <b>o:</b> (o larga), <b>e:</b> (e larga).</li>
      <li><b>Subrayado (<u>u</u>):</b> Acorta la duración de la vocal o consonante: <u>o</u>, <u>u</u> breve.</li>
      <li><b>Sonido alfabético inglés:</b> a → <b>ei</b> | e → <b>i</b> | i → <b>ai</b> | o → <b>ou</b> | u → <b>iu</b>.</li>
    </ul>
  </div>
  <div class="rule-card">
    <h4>2. Consonantes Especiales (Págs. 18–19)</h4>
    <p>Se leen como en castellano (b, ch, d, f, j, k, l, ll, m, n, ñ, p, q, r, s, t, w, x, z), salvo estas reglas exactas:</p>
    <ul style="margin:6px 0 0 16px;color:var(--text-secondary)">
      <li><b>g:</b> Siempre suave como en «gato», nunca como «j».</li>
      <li><b>h:</b> Suena como una <b>«j» suave</b> (ej. <i>house</i>).</li>
      <li><b>y:</b> Como la <b>«ll» fuerte</b> del «yo» argentino o «g» catalana de <i>generalitat</i>.</li>
      <li><b>sh:</b> Como en la palabra <i>show</i>.</li>
      <li><b>* (asterisco):</b> Es una <b>«r» muy breve</b>.</li>
      <li><b>v:</b> Labiodental real, tocando el labio inferior con los dientes superiores.</li>
      <li><b>c:</b> Se sustituye por <b>«k»</b> (cama → <i>káma</i>) o <b>«z»</b> (cinturón → <i>zinturón</i>) para evitar confusiones. Si aparece «c», siempre suena como «k».</li>
    </ul>
  </div>
  <div class="rule-card">
    <h4>3. Uso Obligatorio de la Tilde y Ejemplos (Págs. 19–22)</h4>
    <p>Toda palabra de <b>dos o más sílabas</b> lleva tilde en la sílaba tónica para pronunciarla bien desde el primer segundo:</p>
    <div class="rule-grid">
      <div class="rule-ex"><b>casa / cinta</b><span>kása / zínta</span></div>
      <div class="rule-ex"><b>saciar / cien</b><span>saziár / zien</span></div>
      <div class="rule-ex"><b>censo / queso</b><span>zénso / késo</span></div>
      <div class="rule-ex"><b>taco / acabar</b><span>táko / akabár</span></div>
      <div class="rule-ex"><b>cereza / boda</b><span>zeréza / bóda</span></div>
      <div class="rule-ex"><b>sapo / ave</b><span>sápo / ábe</span></div>
      <div class="rule-ex"><b>villa / valle</b><span>bílla / bálle</span></div>
      <div class="rule-ex"><b>cacería / cueva</b><span>kazería / kuéba</span></div>
      <div class="rule-ex"><b>vivir / juego</b><span>bibír / juégo</span></div>
      <div class="rule-ex"><b>búho / granjero</b><span>búo / granjéro</span></div>
      <div class="rule-ex"><b>hormiga / gesto</b><span>ormíga / jésto</span></div>
      <div class="rule-ex"><b>cohete / hoja</b><span>koéte / ója</span></div>
      <div class="rule-ex"><b>joven / guasa</b><span>jóben / guása</span></div>
      <div class="rule-ex"><b>gasa / desguace</b><span>gása / desguáze</span></div>
      <div class="rule-ex"><b>gajo / cigüeña</b><span>gájo / ziguéña</span></div>
    </div>
  </div>
`;

Object.assign(window.DATA, {
  1: {
    n: "Base Rápida: Fonética, Saludos y Cortesía",
    f: "Pronunciación figurada, saludos y fórmulas esenciales para comunicarte desde el día 1",
    dayLabels: { 1: "D1 Fonética", 2: "D2 Saludos", 3: "D3 Cortesía", 4: "D4 Preguntas", 5: "D5 Frases Base" },
    dayNotes: {
      1: "<b>Regla clave (Cap. 2):</b> Lee la pronunciación figurada exactamente como español. Recuerda: <b>*</b> = r muy breve, <b>h</b> = j suave, <b>:</b> = vocal larga, <u>subrayado</u> = sonido breve.",
      2: "<b>Capítulo 8 (Pág. 89):</b> Saludos y despedidas fundamentales. Las palabras en MAYÚSCULAS encabezan cada grupo temático.",
      3: "<b>Capítulo 9 (Pág. 91):</b> Fórmulas de cortesía esenciales para abrir, pedir y cerrar cualquier interacción.",
      4: "<b>Capítulo 10 (Págs. 93–94):</b> Visualiza siempre a un <b>pirata con su garfio (?)</b> en la asociación visual para identificar al instante que es una pregunta.",
      5: "<b>Aplicación inmediata:</b> Combina saludos, cortesía y preguntas en frases reales cuando necesites aclarar algo."
    },
    p: {
      1: [
        { cat: "Regla Vocales", e: "a / e / i / o / u", h: "ei / i / ai / ou / iu", s: "Sonido alfabético de las 5 vocales en inglés", a: "<b>ae</b> = intermedio entre a y e; <b>iu</b> = entre i y u; <b>o:</b> = vocal larga; <u>u</u> = vocal breve.", ctx: "Cap. 2, págs. 17–18." },
        { cat: "Consonantes Clave", e: "house / show / very / car", h: "jáus / shou / véri / ka:*", s: "h = j suave | sh = show | v = labiodental | * = r muy breve", a: "La <b>g</b> siempre suena suave (gato), la <b>y</b> como ll fuerte (yo argentino) y la <b>c</b> se sustituye por k o z.", ctx: "Cap. 2, págs. 18–19." },
        { cat: "Ejemplo Tilde", e: "Trapo / Armario / Cuchillo", h: "trápo / armário / kuchíllo", s: "Toda palabra de 2 o más sílabas lleva tilde", a: "Sirve para marcar exactamente la sílaba tónica desde la primera lectura.", ctx: "Cap. 2, pág. 19." },
        { cat: "Ejemplo C / Z / K", e: "Cesto / Casa / Cinta", h: "zésto / kása / zínta", s: "Sustitución de c por z o k para lectura directa", a: "Otros ejemplos: <b>saciar</b> (saziár), <b>cien</b> (zien), <b>censo</b> (zénso), <b>queso</b> (késo).", ctx: "Cap. 2, pág. 20." },
        { cat: "Ejemplo B / V / G / J", e: "Vela / Vivir / Gesto / Cigüeña", h: "béla / bibír / jésto / ziguéña", s: "Práctica de lectura fonética pura sin dudar", a: "Otros ejemplos: <b>búho</b> (búo), <b>granjero</b> (granjéro), <b>cohete</b> (koéte), <b>desguace</b> (desguáze).", ctx: "Cap. 2, págs. 21–22." }
      ],
      2: [
        { cat: "Saludos (Cap. 8)", e: "Greet", h: "gri:t", s: "SALUDAR", a: "Es bueno <b>saludar</b> a <u>gritos</u> porque así nos oyen incluso las personas que están más lejos.", ctx: "Palabra cabecera de tabla (pág. 89)." },
        { cat: "Saludos", e: "Hello", h: "helóu", s: "Hola", a: "Es muy similar.", ctx: "Saludo universal (pág. 89)." },
        { cat: "Saludos", e: "Good morning", h: "gud mó:nink", s: "Buenos días", a: "Unión lógica de 2 palabras (good = bueno, morning = mañana).", ctx: "Uso matinal (pág. 89)." },
        { cat: "Saludos", e: "Good afternoon", h: "gud aftenún", s: "Buenas tardes", a: "Unión lógica de 2 palabras.", ctx: "Uso vespertino (pág. 89)." },
        { cat: "Saludos", e: "Good night", h: "gud náit", s: "Buenas noches", a: "Unión lógica de 2 palabras.", ctx: "Despedida nocturna (pág. 89)." },
        { cat: "Saludos", e: "See you soon", h: "si iu sú:n", s: "Hasta pronto", a: "Unión lógica de 3 palabras (ver + tú + pronto).", ctx: "Despedida cordial (pág. 89)." },
        { cat: "Saludos", e: "Goodbye", h: "gudbá:i", s: "Adiós", a: "Alguien que ha sido muy bueno (<u>good</u>) va hacia Dios volando.", ctx: "Despedida estándar (pág. 89)." }
      ],
      3: [
        { cat: "Cortesía (Cap. 9)", e: "Please", h: "pli:s", s: "POR FAVOR", a: "El torturado suplica: «<b>Por favor</b>, que todo acabe en un <u>plis plas</u>».", ctx: "Palabra cabecera de cortesía (pág. 91)." },
        { cat: "Cortesía", e: "Thank you", h: "zaénkiu", s: "Gracias", a: "Un payaso hace <b>gracias</b> a los niños con sus enormes <u>zancos</u>.", ctx: "Agradecimiento básico (pág. 91)." },
        { cat: "Cortesía", e: "You're welcome", h: "iu* wélcam", s: "De nada", a: "Un mago hace aparecer de la <b>nada</b> tu <u>walkman</u> y <u>welca</u> en él varias canciones. Literal: «Tú eres bienvenido».", ctx: "Respuesta a Thank you (pág. 91)." },
        { cat: "Cortesía", e: "Sorry", h: "sórri", s: "Disculpe (lo siento)", a: "Alguien se <b>disculpa</b> y rellena el agujero que acaba de hacer con <u>serrín</u>.", ctx: "Para pedir perdón o interrumpir (pág. 91)." }
      ],
      4: [
        { cat: "Interrogativas (Cap. 10)", e: "What?", h: "wat", s: "¿QUÉ?", a: "El pirata exclama «¡<b>Qué</b> <u>wáter</u> más sucio!», y tira de la cadena con su garfio.", ctx: "Pirata = signo de interrogación (?) (pág. 93)." },
        { cat: "Interrogativas", e: "Who?", h: "hu:", s: "¿Quién?", a: "¿<b>Quién</b> es? Pregunta el pirata asustado. Pero el fantasma lo asusta aún más: <u>Huuuu</u>.", ctx: "Recuerda: h suena como j suave (pág. 93)." },
        { cat: "Interrogativas", e: "Which?", h: "wich", s: "¿Cuál?", a: "Un pato pirata dice «<u>cuá, cuá</u>» al nadar en un vaso de <u>whisky</u> (ya ve y habla doble).", ctx: "Selección entre opciones (pág. 93)." },
        { cat: "Interrogativas", e: "Why?", h: "wá:i", s: "¿Por qué?", a: "Los piratas jugando al póquer (¿<b>Por qué</b>?) y bebiendo ron se lo pasan <u>wai</u>.", ctx: "Preguntar motivo o razón (pág. 93)." },
        { cat: "Interrogativas", e: "How?", h: "háu", s: "¿Cómo?", a: "Un pirata come ferozmente. Un indio se impresiona y levanta su mano en señal de paz: «<u>Hau</u>».", ctx: "Modo o manera (pág. 93)." },
        { cat: "Interrogativas", e: "When?", h: "wen", s: "¿Cuándo?", a: "Un pirata, tras decir a su amigo: «<u>Ven</u> <b>cuando</b> quieras», lo atrae con su garfio.", ctx: "Tiempo (pág. 93)." },
        { cat: "Interrogativas", e: "Where?", h: "we*", s: "¿Dónde?", a: "Drácula, el conde, sujeta al pirata, pues este ya no puede <u>ver</u> de tanto ron como ha bebido...", ctx: "Lugar (pág. 94)." },
        { cat: "Interrogativas", e: "How much?", h: "hau mach", s: "¿Cuánto?", a: "¿<b>Cuánto</b> te debo de las copas? Dice el pirata al indio. El indio le contesta: «<u>Hau, mucho</u>»...", ctx: "Incontables / precios (pág. 94)." },
        { cat: "Interrogativas", e: "How many?", h: "hau méni", s: "¿Cuántos?", a: "El pirata enfadado dice: «¿<b>Cuántos</b> vasos me has cobrado?». El indio se asusta y rectifica: «<u>Hau, menos</u>».", ctx: "Contables en plural (pág. 94)." }
      ],
      5: [
        { cat: "Supervivencia Real", e: "Could you repeat that, please?", h: "KUD iu ri-PIT dat, plis?", s: "¿Podrías repetir eso, por favor?", a: "Combina cortesía (please) con petición directa cuando no escuchas bien.", ctx: "Conversación cotidiana." },
        { cat: "Supervivencia Real", e: "Could you speak more slowly?", h: "KUD iu spik mor ESLO-li?", s: "¿Podrías hablar más despacio?", a: "Usa <b>slowly</b> (despacio, Cap. 7) para controlar el ritmo de quien habla.", ctx: "Ideal con hablantes nativos." },
        { cat: "Supervivencia Real", e: "What does that mean?", h: "Uat das dat min?", s: "¿Qué significa eso?", a: "Aplica la interrogativa <b>What?</b> (Cap. 10) para preguntar por palabras nuevas.", ctx: "Aprendizaje activo." },
        { cat: "Supervivencia Real", e: "How do you say that in English?", h: "Háu du iu séi dat in ínglish?", s: "¿Cómo se dice eso en inglés?", a: "Aplica <b>How?</b> (¿Cómo?) + <b>say</b> (decir).", ctx: "Pregunta fundamental para ampliar vocabulario." },
        { cat: "Supervivencia Real", e: "I understand now, thank you.", h: "Ai ande*stánd náou, zaénkiu.", s: "Ahora entiendo, gracias.", a: "Combina <b>understand</b> (comprender), <b>now</b> (ahora) y <b>thank you</b> (gracias).", ctx: "Confirmación clara." }
      ]
    }
  },
  2: {
    n: "Pronombres Personales, Posesivos y Demostrativos (Caps. 11–13)",
    f: "Domina cada pronombre uno a uno: sujetos, posesivos y demostrativos (Págs. 95–99)",
    dayLabels: { 1: "D1 Pers. Sing.", 2: "D2 Pers. Plur.", 3: "D3 Posesivos I", 4: "D4 Posesivos II", 5: "D5 Demostrativos" },
    dayNotes: {
      1: "<b>Capítulo 11 (Pág. 95):</b> En inglés es obligatorio poner siempre el pronombre personal delante del verbo (ej. <i>I want</i>, nunca <i>want</i> solo).",
      2: "<b>Plurales y cortesía (Pág. 95):</b> Observa que <b>You</b> sirve para «tú», «usted», «vosotros» y «ustedes». El contexto aclara a quién te refieres.",
      3: "<b>Capítulo 12 (Pág. 97):</b> Pronombres posesivos singulares. Van siempre delante del objeto poseído (<i>my car, your book</i>).",
      4: "<b>Posesivos plurales y absolutos (Págs. 97 y 144):</b> Completa los posesivos plurales y la forma «mío» (<i>mine</i>).",
      5: "<b>Capítulo 13 (Pág. 99):</b> Pronombres demostrativos para señalar cercanía o lejanía en singular y plural."
    },
    p: {
      1: [
        { cat: "Pronombres Personales", e: "I", h: "á:i", s: "YO", a: "Yo soy tan delgado como esa letra <u>i</u>.", ctx: "Siempre se escribe con mayúscula (pág. 95)." },
        { cat: "Pronombres Personales", e: "You", h: "iu", s: "Tú", a: "¿Qué haces <b>tú</b> con ese <u>yo-yó</u> en tu tupé?", ctx: "2.ª persona singular (pág. 95)." },
        { cat: "Pronombres Personales", e: "He", h: "hi", s: "Él", a: "<b>Él</b> fue. El loco ese fue quien se acercó y empezó a relinchar: <u>hiia, hiiia</u>.", ctx: "3.ª persona masculino (pág. 95)." },
        { cat: "Pronombres Personales", e: "She", h: "shi", s: "Ella", a: "<b>Ella</b> se acerca sigilosamente... <u>Shh</u>, es <u>Sheena</u>, la reina de la selva.", ctx: "3.ª persona femenino (pág. 95)." },
        { cat: "Pronombres Personales", e: "It", h: "it", s: "Ello / Eso (objetos o animales)", a: "Un robot pequeño (<b>ello</b>) repite «<u>it, it</u>» al señalar una cosa.", ctx: "3.ª persona neutro singular (págs. 31 y 109)." }
      ],
      2: [
        { cat: "Pronombres Personales", e: "You", h: "iu", s: "Usted(es)", a: "Resulta que el del tupé y el <u>yo-yó</u> era un anciano. Entonces hay que hablarle de <b>usted</b>.", ctx: "Tratamiento formal (pág. 95)." },
        { cat: "Pronombres Personales", e: "We", h: "wi", s: "Nosotros(as)", a: "Corro con mis amigos (<b>nosotros</b>) alrededor de la torre Eiffel. ¿Seguimos? <u>Wi</u> (Oui).", ctx: "1.ª persona plural (pág. 95)." },
        { cat: "Pronombres Personales", e: "You", h: "iu", s: "Vosotros(as)", a: "¡Anda! Ahora resulta que todos <b>vosotros</b> tenéis un <u>yo-yó</u> en vuestro tupé.", ctx: "2.ª persona plural (pág. 95)." },
        { cat: "Pronombres Personales", e: "They", h: "dei", s: "Ellos(as)", a: "Veo a los niños pequeños (<b>ellos</b>) correr y jugar a ser <u>Dios</u>.", ctx: "3.ª persona plural (pág. 95)." }
      ],
      3: [
        { cat: "Pronombres Posesivos", e: "My", h: "mái", s: "MI / Mis", a: "<b>Mi</b> es <u>muy</u> similar a <i>my</i>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "Your", h: "llo:*", s: "Tu / Tus (de ti)", a: "<b>Tu</b> significa que es <u>tuyo</u>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "His", h: "his", s: "Su / Sus (de él)", a: "Veo a lo lejos a uno <u>histérico</u> arrastrar algo que es <b>suyo</b> (de él).", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "Her", h: "heo*", s: "Su / Sus (de ella)", a: "<b>Ella</b> lleva un <u>hermoso</u> bolso que es <b>suyo</b> (de ella).", ctx: "Posesivo femenino (pág. 144)." }
      ],
      4: [
        { cat: "Pronombres Posesivos", e: "Our", h: "áoa*", s: "Nuestro(a) / Nuestros(as)", a: "Subo con mis amigos en todas las bicis del <u>tour</u>. ¡Son <b>nuestras</b>!", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "Your", h: "llo:*", s: "Vuestro(a) / Su (de ustedes)", a: "A mi lado, unas personas arrastran un gran anillo, y yo les digo: ¡Bien hecho!, es <b>vuestro</b>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "Their", h: "de*", s: "Su / Sus (de ellos)", a: "A lo lejos veo su<u>dar</u> a gente que arrastra algo que es <b>de ellos</b>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Posesivo Absoluto", e: "Mine", h: "máin", s: "Mío / El mío", a: "El <b>mío</b> brilla como una <u>mina</u> de oro.", ctx: "Ejemplo: Mine is very pretty (pág. 144)." }
      ],
      5: [
        { cat: "Demostrativos (Cap. 13)", e: "This", h: "dis", s: "ESTE, esta, esto", a: "<b>Este</b> chico <u>dis</u>para esto desde esta posición tan <u>dis</u>tante...", ctx: "Singular cercano (pág. 99)." },
        { cat: "Demostrativos", e: "That", h: "dat", s: "Ese, esa, eso", a: "...y <u>da</u> a <b>esa</b> chica en los sesos, a pesar de que hace una ese para esquivarlo...", ctx: "Singular lejano (pág. 99)." },
        { cat: "Demostrativos", e: "That over there", h: "dat óve* de*", s: "Aquel, aquella, aquello", a: "...e increíblemente, después el objeto le da fuerza a <b>aquel</b> marciano verde.", ctx: "Mayor distancia (pág. 99)." },
        { cat: "Demostrativos Plural", e: "These / Those", h: "dis / dóus", s: "Estos(as) / Esos(as), Aquellos(as)", a: "<b>These</b> = plural de <i>this</i> (cerca). <b>Those</b> = plural de <i>that</i> (lejos).", ctx: "Plurales usados en págs. 149 y 165." }
      ]
    }
  },
  3: {
    n: "Verbos Nucleares I: Existencia, Vida y Sentidos (Cap. 4)",
    f: "Los verbos transmiten la acción: domina los infinitivos y las construcciones con 'to' (Págs. 27–33)",
    dayLabels: { 1: "D1 Existencia", 2: "D2 Deseo/Ayuda", 3: "D3 Vida/Salud", 4: "D4 Sentidos", 5: "D5 Comunicar" },
    dayNotes: {
      1: "<b>Regla del Infinitivo (Pág. 30):</b> Cuando aparecen 2 verbos seguidos y el segundo es infinitivo, se usa <b>«to»</b> delante del segundo verbo: <i>I want <b>to</b> try</i> (Yo quiero intentar).",
      2: "<b>Práctica pág. 30:</b> Combina pronombres personales con <i>want, wish, need, try</i> + <b>to</b> + segundo verbo.",
      3: "<b>Verbos de vida y salud (Pág. 31):</b> Visualiza cada asociación durante 4–5 segundos mientras pronuncias en voz alta.",
      4: "<b>Verbos de los sentidos (Pág. 32):</b> Diferencia bien entre <i>see</i> (ver) y <i>look</i> (mirar), y entre <i>hear</i> (oír) y <i>listen</i> (escuchar).",
      5: "<b>Verbos de comunicación (Págs. 32–33):</b> Vocabulario clave para hablar, leer, escribir y firmar."
    },
    p: {
      1: [
        { cat: "Verbos (Cap. 4)", e: "Be", h: "bi:", s: "SER / ESTAR", a: "Todo el mundo conoce la frase de «<b>ser o no ser</b>»: «<u>tu bi</u> o no <u>tu bi</u>», ¿Estamos?", ctx: "Verbo cabecera (pág. 28)." },
        { cat: "Verbos", e: "Have", h: "ha:f", s: "Haber / Tener", a: "<b>Haber</b> es similar a <u>have</u>. <b>Tener</b> un <u>haba</u>.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "There is", h: "de*ís", s: "Hay", a: "<b>Hay</b> un payaso que hace reír. <u>Ay, qué risa</u> me da.", ctx: "Existencia singular (pág. 28)." }
      ],
      2: [
        { cat: "Verbos Deseo", e: "Want", h: "waont", s: "QUERER", a: "Todos los boxeadores <b>quieren</b> un <u>guante</u> de oro.", ctx: "Verbo cabecera (pág. 28)." },
        { cat: "Verbos Deseo", e: "Wish", h: "wish", s: "Desear", a: "Una boda francesa en la torre Eiffel: «¿<b>Deseas</b> por esposa a...» «<u>Wi</u>» (Oui / Sí).", ctx: "Pág. 28." },
        { cat: "Verbos Deseo", e: "Love", h: "laof", s: "Amar", a: "<b>Amar</b> a un <u>lobo</u>.", ctx: "Pág. 28." },
        { cat: "Verbos Acción", e: "Help", h: "help", s: "Ayudar", a: "<b>Ayudarse</b> para andar con un bote de <u>gel</u>.", ctx: "Pág. 28." },
        { cat: "Verbos Acción", e: "Try", h: "t*ai", s: "Intentar", a: "Suele haber <u>tres</u> <b>intentos</b> para todo (como en el salto de altura en atletismo).", ctx: "Pág. 28." },
        { cat: "Verbos Acción", e: "Get", h: "get", s: "Conseguir", a: "<b>Conseguir</b> cosas por la <u>jeta</u>.", ctx: "Pág. 28." },
        { cat: "Verbos Acción", e: "Ask for", h: "ásk fo*", s: "Pedir", a: "Estar siempre <b>pidiendo</b> es un <u>asco</u>.", ctx: "Pág. 29." },
        { cat: "Verbos Acción", e: "Need", h: "ni:d", s: "Necesitar", a: "<b>Necesitar</b> un <u>nido</u> para un pajarito inglés.", ctx: "Pág. 29." }
      ],
      3: [
        { cat: "Verbos Vida", e: "Live", h: "lif", s: "VIVIR", a: "Hay que <b>vivir</b> <u>libre</u> y levitando.", ctx: "Verbo cabecera (pág. 31)." },
        { cat: "Verbos Vida", e: "Be born", h: "bibó*n", s: "Nacer", a: "<b>Nace</b> un pequeño <u>bribón</u>, y la madre le conecta unos <u>bornes</u> eléctricos al <u>biberón</u>.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Grow", h: "gróu", s: "Crecer", a: "Un <u>ogro</u> muy malo que <b>crece</b> y <b>crece</b> sin parar. Ya parece una gran <u>grulla</u>.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Die", h: "da:i", s: "Morir", a: "Inevitablemente hay que <b>morir</b> un <u>día</u> u otro.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Feel", h: "fi:l", s: "Sentir", a: "Todo el mundo <b>siente</b> <u>feeling</u> por alguien. El que más <b>siente</b> las cosas es el que más <u>fe</u> tiene.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Hurt", h: "heo*t", s: "Doler", a: "Es <b>doloroso</b> que Robin Hood te <u>hurte</u> tras darte un flechazo. Te duele 2 veces.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Cure", h: "kiu*", s: "Curar", a: "Es muy similar.", ctx: "Pág. 31." }
      ],
      4: [
        { cat: "Verbos Sentidos", e: "See", h: "si:", s: "VER", a: "¿A un ciego le gustaría <b>ver</b><u>see</u>? Sí.", ctx: "Verbo cabecera (pág. 32)." },
        { cat: "Verbos Sentidos", e: "Look", h: "louk", s: "Mirar", a: "Un <u>loco</u> que te <b>mira</b> con ojos de ido.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Hear", h: "híae*", s: "Oír", a: "Un caballo de carreras relincha «<u>híiaa</u>» al <b>oír</b> el disparo de salida.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Listen", h: "leísen", s: "Escuchar", a: "Si no puedes <b>escuchar</b> la bocina de ese coche, estás <u>listo</u>, pues te atropellará y te dejará <u>liso</u>.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Like", h: "laik", s: "Gustar", a: "A los vegetarianos les <b>gusta</b> el <u>liquen</u>, pero siempre que sea también <u>laik</u>.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Touch", h: "taoch", s: "Tocar", a: "Te <u>touca</u> <u>tachar</u>, es tu turno.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Smell", h: "smel", s: "Oler", a: "Cuando algo <b>huele</b> mal, evidentemente <u>es mal</u> olor el que hay.", ctx: "Pág. 32." }
      ],
      5: [
        { cat: "Comunicación", e: "Speak", h: "spik", s: "HABLAR", a: "Al que <b>habla</b> mucho se le dice que cierre su <u>pico</u>.", ctx: "Verbo cabecera (pág. 32)." },
        { cat: "Comunicación", e: "Say", h: "sei", s: "Decir", a: "Vemos a alguien con una <u>saya</u> dando una conferencia (tiene muchas cosas que <b>decir</b>).", ctx: "Pág. 32." },
        { cat: "Comunicación", e: "Read", h: "*i:d", s: "Leer", a: "<b>Leer</b> un texto pequeño a través de una <u>red</u> que tiene gotitas de agua que hacen de lupa.", ctx: "Pág. 32." },
        { cat: "Comunicación", e: "Write", h: "wrait", s: "Escribir", a: "<b>Escribir</b> rápido estando muy <u>irritado</u>.", ctx: "Pág. 33." },
        { cat: "Comunicación", e: "Erase", h: "i*éis", s: "Borrar", a: "Érase una vez el hombre... con una goma de borrar bajo el brazo. «<u>Iréis</u> a <b>borrar</b>», ordenó.", ctx: "Pág. 33." },
        { cat: "Comunicación", e: "Sign", h: "sain", s: "Firmar", a: "Tras poner las <u>señas</u> se <b>firma</b> con nuestro <u>signo</u>.", ctx: "Pág. 33." }
      ]
    }
  },
  4: {
    n: "Verbos Nucleares II: Trabajo, Mente y Desplazamiento (Cap. 4)",
    f: "Construcción, estudio, acierto, desplazamiento y ejercicios oficiales (Págs. 33–37)",
    dayLabels: { 1: "D1 Hacer/Crear", 2: "D2 Pensar/Saber", 3: "D3 Estudiar", 4: "D4 Ir/Volver", 5: "D5 Ejercicios" },
    dayNotes: {
      1: "<b>Excepción clave (Pág. 34):</b> Tras el verbo modal <b>«can»</b> (poder) <b>NO</b> se pone la partícula «to»: <i>I can do it</i> (Yo puedo hacerlo).",
      2: "<b>Verbos mentales (Págs. 34–35):</b> Diferencia entre <i>know</i> (saber algo) y <i>meet</i> (conocer a alguien).",
      3: "<b>Estudio y aprendizaje (Pág. 35):</b> Fíjate en la expresión verbal <i>pay attention</i> (prestar/poner atención).",
      4: "<b>Desplazamiento (Pág. 36):</b> Observa cómo <i>in</i> (dentro) y <i>out</i> (fuera) forman <i>go in</i> (entrar) y <i>go out</i> (salir).",
      5: "<b>Ejercicios oficiales del Capítulo 4 (Págs. 30–37):</b> Traduce mentalmente y verifica con el audio."
    },
    p: {
      1: [
        { cat: "Acción / Trabajo", e: "Can", h: "kaen", s: "PODER", a: "Un <u>can</u> (estilo bulldog) con mucho <b>poder</b> te puede morder.", ctx: "Verbo cabecera (pág. 33)." },
        { cat: "Acción / Trabajo", e: "Do", h: "du", s: "Hacer", a: "<b>Hacer</b> <u>dos</u> cosas al mismo tiempo, o hacer doscientas.", ctx: "Pág. 33." },
        { cat: "Acción / Trabajo", e: "Work", h: "weo*k", s: "Trabajar", a: "Mucha gente <b>trabaja</b> con el <u>word</u> en el ordenador.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Make", h: "méik", s: "Fabricar", a: "Una pequeña fábrica que <b>fabrica</b> enormes <u>maquetas</u> de tren.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Build", h: "bi:ld", s: "Construir", a: "Un constructor <u>vil</u> que deja una casa a medio <b>construir</b> es un <u>buitre</u>.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Demolish", h: "demólish", s: "Derribar", a: "Similar a demoler.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Eliminate", h: "elímineit", s: "Eliminar", a: "Es muy similar.", ctx: "Pág. 33." },
        { cat: "Capacidad", e: "Fill", h: "fil", s: "Llenar", a: "Si está <b>lleno</b>, es porque ya no cabe ni el <u>filo</u> de un cuchillo.", ctx: "Pág. 33." },
        { cat: "Capacidad", e: "Empty", h: "émpti", s: "Vaciar", a: "La grada se <b>vacía</b> de gente, por aburrimiento, ante un <u>empate</u> a cero.", ctx: "Pág. 33." }
      ],
      2: [
        { cat: "Mente", e: "Think", h: "zink", s: "PENSAR", a: "Vemos a alguien <b>pensar</b> al contarse los <u>cinco</u> dedos de la mano. No es muy bueno en matemáticas.", ctx: "Verbo cabecera (pág. 34)." },
        { cat: "Mente", e: "Imagine", h: "imállin", s: "Imaginar", a: "Es muy similar.", ctx: "Pág. 34." },
        { cat: "Mente", e: "Believe", h: "beilíf", s: "Creer", a: "Gente rezando (creyentes) con <u>velas</u> en el <u>relieve</u> de una montaña.", ctx: "Pág. 34." },
        { cat: "Conocimiento", e: "Know", h: "nou", s: "Saber", a: "Un sabio dice: «Que <u>no</u>, que <u>no</u>. <b>No sabes</b> nada».", ctx: "Pág. 34." },
        { cat: "Conocimiento", e: "Meet", h: "mi:t", s: "Conocer", a: "Todo el mundo desearía <b>conocer</b> a su <u>mito</u>.", ctx: "Pág. 35." },
        { cat: "Conocimiento", e: "Remember", h: "rimémbe*", s: "Recordar", a: "<b>Recordar</b> al <u>miembro</u> que falta en una reunión haciendo sonar una <u>membrana</u> (recordar = <u>remembrar</u>).", ctx: "Pág. 35." },
        { cat: "Conocimiento", e: "Forget", h: "Fo*gét", s: "Olvidar", a: "Hay que <b>olvidarse</b> del <u>fuego</u> para caminar sobre las ascuas.", ctx: "Pág. 35." }
      ],
      3: [
        { cat: "Estudio", e: "Study", h: "Stádi", s: "ESTUDIAR", a: "Gente que se pone a <b>estudiar</b> en un <u>estadio</u> de fútbol.", ctx: "Verbo cabecera (pág. 35)." },
        { cat: "Estudio", e: "Pay attention", h: "Pei aténsheon", s: "Atender", a: "La madre se pone a <u>tender</u> la ropa. «Pon <b>atención</b>», le dice a su hija para enseñarla.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Understand", h: "ande*stánd", s: "Comprender", a: "Con prendas prendidas de fuego, ponte rápidamente a <u>andar</u> al <u>stand</u> de los bomberos.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Learn", h: "leo:*n", s: "Aprender", a: "Un torpe <u>león</u> <b>aprendiendo</b> a cazar.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Memorize", h: "mémorais", s: "Memorizar", a: "Es muy similar.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Teach", h: "ti:ch", s: "Enseñar", a: "Un vendedor <b>enseña</b> al posible comprador solamente los <u>techos</u> de su ruinosa casa.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Explain", h: "Explain", s: "Explicar", a: "<b>Explicar</b> un plano tan grande que ocupa toda una <u>explanada</u>.", ctx: "Pág. 35." },
        { cat: "Acierto / Error", e: "Be right", h: "bi rait", s: "Acertar", a: "<b>Acertó</b> al <u>virar</u> el coche a tiempo, pues casi nos la damos.", ctx: "Pág. 35." },
        { cat: "Acierto / Error", e: "Be wrong", h: "bi wronk", s: "Equivocar (Estar equivocado)", a: "Al que se <b>equivoca</b>, un ti<u>rón</u> de orejas. También hay que gritarle hasta quedarse <u>ronco</u>.", ctx: "Pág. 35." }
      ],
      4: [
        { cat: "Desplazamiento", e: "Go", h: "gou", s: "IR", a: "Si meten otro <u>gol</u>, ya nos podemos <b>ir</b> a casa.", ctx: "Verbo cabecera (pág. 36)." },
        { cat: "Desplazamiento", e: "Arrive", h: "arráif", s: "Llegar", a: "<b>Llegar</b> <u>arriba</u> antes que el ascensor, tan rápido, puede producir llagas en los pies.", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Return", h: "Riteó*n", s: "Volver", a: "En un <u>reto</u>, 2 pistoleros se <b>vuelven</b> veloces para dispararse.", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Come", h: "kam", s: "Venir", a: "Una madre llamando a sus hijos: «<b>Venir</b> a <u>comer</u>».", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Go in", h: "Gou in", s: "Entrar", a: "«<u>In</u>» implica hacia dentro, por lo que «go in» es «<b>entrar</b>», ya que «go» significaba «ir».", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Go out", h: "gou áut", s: "Salir", a: "Del mismo modo, «<u>out</u>» implica «hacia fuera».", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Take out", h: "téikaut", s: "Sacar", a: "<b>Sacar</b> punta a un <u>taco</u> de billar a la vez que se sale a la calle (<u>out</u>).", ctx: "Pág. 36." }
      ],
      5: [
        { cat: "Ejercicio Cap. 4 (Pág. 30)", e: "I need to love. / We wish to have. / You want to be.", h: "Ai nid tu laof. / Ui wish tu ha:f. / Iu waont tu bi.", s: "Yo necesito amar. / Nosotros deseamos tener. / Tú quieres estar.", a: "Recuerda poner <b>to</b> entre dos verbos seguidos.", ctx: "Práctica de traducción directa (pág. 30)." },
        { cat: "Ejercicio Cap. 4 (Pág. 30)", e: "They try to get. / They try to get it.", h: "Dei t*ai tu get. / Dei t*ai tu get it.", s: "Ellos intentan conseguir. / Ellos intentan conseguirlo.", a: "<b>it</b> equivale a «lo» (conseguirlo).", ctx: "Uso de pronombre objeto 'it' (pág. 30)." },
        { cat: "Ejercicio Cap. 4 (Págs. 31–32)", e: "I want to live. / We wish not to die. / They try to cure. / You need to feel.", h: "Ai waont tu lif. / Ui wish not tu da:i. / Dei t*ai tu kiu*. / Iu nid tu fi:l.", s: "Yo quiero vivir. / Nosotras no deseamos morir. / Ellas intentan curar. / Vosotros necesitáis sentir.", a: "Para negar un infinitivo con <i>to</i>, coloca <b>not</b> antes de <i>to</i>.", ctx: "Págs. 31–32." },
        { cat: "Ejercicio Cap. 4 (Pág. 34)", e: "I can do it. / We wish not to fill it. / They want to read it. / You need to build.", h: "Ai kaen du it. / Ui wish not tu fil it. / Dei waont tu *i:d it. / Iu nid tu bi:ld.", s: "Yo puedo hacerlo. / Nosotras no deseamos llenarlo. / Ellas quieren leerlo. / Vosotros necesitáis construir.", a: "Tras <b>can</b> NO se pone «to» (<i>I can do it</i>).", ctx: "Regla de verbos modales (pág. 34)." },
        { cat: "Ejercicio Cap. 4 (Pág. 34)", e: "You can write. / They listen to speak. / You try to listen to it. / You can not touch that.", h: "Iu kaen wrait. / Dei leísen tu spik. / Iu t*ai tu leísen tu it. / Iu kaen not taoch dat.", s: "Tú puedes escribir. / Ellos escuchan hablar. / Vosotros intentáis escucharlo. / Usted no puede tocar eso.", a: "Negación directa añadiendo <b>not</b> tras can.", ctx: "Pág. 34." },
        { cat: "Ejercicio Cap. 4 (Págs. 36–37)", e: "They teach how to read. / You learn to memorize. / You want to learn. / You can be wrong.", h: "Dei ti:ch háu tu *i:d. / Iu leo:*n tu mémorais. / Iu waont tu leo:*n. / Iu kaen bi wronk.", s: "Ellos enseñan a leer. / Tú aprendes a memorizar. / Tú quieres aprender. / Tú puedes estar equivocado.", a: "Práctica de traducción inversa.", ctx: "Pág. 36." },
        { cat: "Ejercicio Cap. 4 (Pág. 37)", e: "You forget to study. / Marta and María wish to arrive. / Pedro and I know how to return home. / You go to Madrid to study.", h: "Iu fo*gét tu stádi. / Marta aend María wish tu arráif. / Pédro aend ai nou hau tu riteó*n houm. / Iu gou tu madrid tu stádi.", s: "Tú olvidas estudiar. / Marta y María desean llegar. / Pedro y yo sabemos volver a casa. / Vas a Madrid a estudiar.", a: "En inglés se añade <b>how</b> después de <i>know</i> para indicar saber hacer algo.", ctx: "Modismo esencial (pág. 37)." }
      ]
    }
  }
});