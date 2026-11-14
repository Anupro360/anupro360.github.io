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
    n: "Reto 7 Días: Supervivencia y Base",
    f: "Pronunciación figurada, saludos, cortesía, preguntas y pronombres para hablar desde el día 1",
    dayLabels: { 1: "D1 Fonética", 2: "D2 Saludos", 3: "D3 Preguntas", 4: "D4 Pronombres", 5: "D5 Reuniones" },
    dayNotes: {
      1: "<b>Regla clave (Cap. 2):</b> Lee la pronunciación figurada exactamente como español. Recuerda: <b>*</b> = r muy breve, <b>h</b> = j suave, <b>:</b> = vocal larga, <u>subrayado</u> = sonido breve.",
      2: "<b>Capítulos 8 y 9:</b> Saludos y fórmulas de cortesía esenciales para abrir y cerrar cualquier interacción.",
      3: "<b>Capítulo 10 (Palabras Interrogativas):</b> Visualiza siempre a un <b>pirata con su garfio (?)</b> en la asociación inverosímil para identificar al instante que es una pregunta.",
      4: "<b>Capítulos 11, 12 y 13:</b> Pronombres personales (obligatorios delante del verbo en inglés), posesivos y demostrativos.",
      5: "<b>Aplicación inmediata:</b> Combina lo aprendido con frases de supervivencia ejecutiva cuando no entiendes algo."
    },
    p: {
      1: [
        { cat: "Regla Vocales", e: "a / e / i / o / u", h: "ei / i / ai / ou / iu", s: "Sonido alfabético de las 5 vocales en inglés", a: "<b>ae</b> = intermedio entre a y e; <b>iu</b> = entre i y u; <b>o:</b> = vocal larga; <u>u</u> = vocal breve.", ctx: "Cap. 2, págs. 17–18." },
        { cat: "Consonantes Clave", e: "house / show / very / car", h: "jáus / shou / véri / ka:*", s: "h = j suave | sh = show | v = labiodental | * = r muy breve", a: "La <b>g</b> siempre suena suave (gato), la <b>y</b> como ll fuerte (yo argentino) y la <b>c</b> se sustituye por k o z.", ctx: "Cap. 2, págs. 18–19." },
        { cat: "Ejemplo Tilde", e: "Trapo / Armario / Cuchillo", h: "trápo / armário / kuchíllo", s: "Toda palabra de 2 o más sílabas lleva tilde", a: "Sirve para marcar exactamente la sílaba tónica desde la primera lectura.", ctx: "Cap. 2, pág. 19." },
        { cat: "Ejemplo C / Z / K", e: "Cesto / Casa / Cinta", h: "zésto / kása / zínta", s: "Sustitución de c por z o k para lectura directa", a: "Otros ejemplos del libro: <b>saciar</b> (saziár), <b>cien</b> (zien), <b>censo</b> (zénso), <b>queso</b> (késo).", ctx: "Cap. 2, pág. 20." },
        { cat: "Ejemplo B / V / G / J", e: "Vela / Vivir / Gesto / Cigüeña", h: "béla / bibír / jésto / ziguéña", s: "Práctica de lectura fonética pura sin dudar", a: "Otros ejemplos: <b>búho</b> (búo), <b>granjero</b> (granjéro), <b>cohete</b> (koéte), <b>desguace</b> (desguáze).", ctx: "Cap. 2, págs. 21–22." }
      ],
      2: [
        { cat: "Saludos (Cap. 8)", e: "Greet", h: "gri:t", s: "SALUDAR", a: "Es bueno <b>saludar</b> a <u>gritos</u> porque así nos oyen incluso las personas que están más lejos.", ctx: "Palabra cabecera de tabla (en mayúsculas)." },
        { cat: "Saludos", e: "Hello", h: "helóu", s: "Hola", a: "Es muy similar.", ctx: "Saludo universal." },
        { cat: "Saludos", e: "Good morning", h: "gud mó:nink", s: "Buenos días", a: "Unión lógica de 2 palabras (good = bueno, morning = mañana).", ctx: "Uso matinal." },
        { cat: "Saludos", e: "Good afternoon", h: "gud aftenún", s: "Buenas tardes", a: "Unión lógica de 2 palabras.", ctx: "Uso vespertino." },
        { cat: "Saludos", e: "Good night", h: "gud náit", s: "Buenas noches", a: "Unión lógica de 2 palabras.", ctx: "Despedida nocturna." },
        { cat: "Saludos", e: "See you soon", h: "si iu sú:n", s: "Hasta pronto", a: "Unión lógica de 3 palabras (ver + tú + pronto).", ctx: "Despedida cordial." },
        { cat: "Saludos", e: "Goodbye", h: "gudbá:i", s: "Adiós", a: "Alguien que ha sido muy bueno (<u>good</u>) va hacia Dios volando.", ctx: "Despedida estándar." },
        { cat: "Cortesía (Cap. 9)", e: "Please", h: "pli:s", s: "POR FAVOR", a: "El torturado suplica: «<b>Por favor</b>, que todo acabe en un <u>plis plas</u>».", ctx: "Palabra cabecera de cortesía." },
        { cat: "Cortesía", e: "Thank you", h: "zaénkiu", s: "Gracias", a: "Un payaso hace <b>gracias</b> a los niños con sus enormes <u>zancos</u>.", ctx: "Agradecimiento básico." },
        { cat: "Cortesía", e: "You're welcome", h: "iu* wélcam", s: "De nada", a: "Un mago hace aparecer de la <b>nada</b> tu <u>walkman</u> y <u>welca</u> en él varias canciones. Literal: «Tú eres bienvenido».", ctx: "Respuesta a Thank you." },
        { cat: "Cortesía", e: "Sorry", h: "sórri", s: "Disculpe (lo siento)", a: "Alguien se <b>disculpa</b> y rellena el agujero que acaba de hacer con <u>serrín</u>.", ctx: "Para pedir perdón o interrumpir." }
      ],
      3: [
        { cat: "Interrogativas (Cap. 10)", e: "What?", h: "wat", s: "¿QUÉ?", a: "El pirata exclama «¡<b>Qué</b> <u>wáter</u> más sucio!», y tira de la cadena con su garfio.", ctx: "Pirata = signo de interrogación (?)." },
        { cat: "Interrogativas", e: "Who?", h: "hu:", s: "¿Quién?", a: "¿<b>Quién</b> es? Pregunta el pirata asustado. Pero el fantasma lo asusta aún más: <u>Huuuu</u>.", ctx: "Recuerda: h suena como j suave." },
        { cat: "Interrogativas", e: "Which?", h: "wich", s: "¿Cuál?", a: "Un pato pirata dice «<u>cuá, cuá</u>» al nadar en un vaso de <u>whisky</u> (ya ve y habla doble).", ctx: "Selección entre opciones." },
        { cat: "Interrogativas", e: "Why?", h: "wá:i", s: "¿Por qué?", a: "Los piratas jugando al póquer (¿<b>Por qué</b>?) y bebiendo ron se lo pasan <u>wai</u>.", ctx: "Preguntar motivo o razón." },
        { cat: "Interrogativas", e: "How?", h: "háu", s: "¿Cómo?", a: "Un pirata come ferozmente. Un indio se impresiona y levanta su mano en señal de paz: «<u>Hau</u>».", ctx: "Modo o manera." },
        { cat: "Interrogativas", e: "When?", h: "wen", s: "¿Cuándo?", a: "Un pirata, tras decir a su amigo: «<u>Ven</u> <b>cuando</b> quieras», lo atrae con su garfio.", ctx: "Tiempo." },
        { cat: "Interrogativas", e: "Where?", h: "we*", s: "¿Dónde?", a: "Drácula, el conde, sujeta al pirata, pues este ya no puede <u>ver</u> de tanto ron como ha bebido...", ctx: "Lugar." },
        { cat: "Interrogativas", e: "How much?", h: "hau mach", s: "¿Cuánto?", a: "¿<b>Cuánto</b> te debo de las copas? Dice el pirata al indio. El indio le contesta: «<u>Hau, mucho</u>»...", ctx: "Incontables / precios." },
        { cat: "Interrogativas", e: "How many?", h: "hau méni", s: "¿Cuántos?", a: "El pirata enfadado dice: «¿<b>Cuántos</b> vasos me has cobrado?». El indio se asusta y rectifica: «<u>Hau, menos</u>».", ctx: "Contables en plural." }
      ],
      4: [
        { cat: "Pronombres Personales", e: "I / You / He / She", h: "á:i / iu / hi / shi", s: "YO / Tú / Él / Ella", a: "<b>I:</b> Yo soy tan delgado como esa i. <b>You:</b> ¿Qué haces <b>tú</b> con ese <u>yo-yó</u> en tu tupé? <b>He:</b> <b>Él</b> relincha <u>hiia</u>. <b>She:</b> <u>Shh</u>, es <u>Sheena</u>.", ctx: "Cap. 11, pág. 95." },
        { cat: "Pronombres Personales", e: "You / We / You / They", h: "iu / wi / iu / dei", s: "Usted(es) / Nosotros(as) / Vosotros(as) / Ellos(as)", a: "<b>We:</b> Corro con mis amigos alrededor de la torre Eiffel: ¿Seguimos? <u>Wi</u> (Oui). <b>They:</b> Veo a los niños (<b>ellos</b>) jugar a ser <u>Dios</u>.", ctx: "En inglés el pronombre siempre acompaña al verbo." },
        { cat: "Pronombres Posesivos", e: "My / Your / His", h: "mái / llo:* / his", s: "MI / Tu / Su (de él)", a: "<b>My:</b> Mi es <u>muy</u> similar. <b>Your:</b> Tu significa que es <u>tuyo</u>. <b>His:</b> Veo a uno <u>histérico</u> arrastrar algo que es <b>suyo</b>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Pronombres Posesivos", e: "Our / Your / Their", h: "áoa* / llo:* / de*", s: "Nuestro / Vuestro / Su (de ellos)", a: "<b>Our:</b> Subo con mis amigos en todas las bicis del <u>tour</u>. ¡Son <b>nuestras</b>! <b>Their:</b> Veo su<u>dar</u> a gente arrastrar algo que es <b>de ellos</b>.", ctx: "Cap. 12, pág. 97." },
        { cat: "Demostrativos", e: "This / That / That over there", h: "dis / dat / dat óve* de*", s: "ESTE(a/o/os/as) / Ese(a/o/os/as) / Aquel(la/lo)", a: "<b>This:</b> <b>Este</b> chico <u>dis</u>para desde posición <u>dis</u>tante... <b>That:</b> ...y da a <b>esa</b> chica en los sesos... <b>That over there:</b> ...y da fuerza a <b>aquel</b> marciano verde.", ctx: "Cap. 13, pág. 99." }
      ],
      5: [
        { cat: "Supervivencia Real", e: "Could you repeat that, please?", h: "KUD iu ri-PIT dat, plis?", s: "¿Podrías repetir eso, por favor?", a: "Combina cortesía (please) con petición directa en reuniones.", ctx: "Semana 1 — Supervivencia inmediata." },
        { cat: "Supervivencia Real", e: "Could you speak more slowly?", h: "KUD iu spik mor ESLO-li?", s: "¿Podrías hablar más despacio?", a: "Usa <b>slowly</b> (despacio, Cap. 7) para controlar el ritmo de la conversación.", ctx: "Ideal con hablantes nativos." },
        { cat: "Supervivencia Real", e: "I'm not sure I follow.", h: "Aim not shur ai FA-lou", s: "No estoy seguro de seguir (entiendo).", a: "Forma ejecutiva de pedir aclaración sin decir 'I don't understand'.", ctx: "Reuniones corporativas." },
        { cat: "Supervivencia Real", e: "What do you mean by that?", h: "Uat du iu min bai dat?", s: "¿Qué quieres decir con eso?", a: "Aplica la interrogativa <b>What?</b> (Cap. 10).", ctx: "Cuando algo queda ambiguo." },
        { cat: "Supervivencia Real", e: "Let me make sure I understand.", h: "Let mi meik shur ai an-der-STAND", s: "Déjame asegurarme de que entiendo.", a: "Aplica el verbo <b>understand</b> (comprender, Cap. 4).", ctx: "Confirmación de acuerdos." }
      ]
    }
  },
  2: {
    n: "Verbos Nucleares y Acción (Cap. 4 - Parte 1)",
    f: "Los verbos transmiten la acción: domina los infinitivos y las construcciones con 'to'",
    dayLabels: { 1: "D1 Existencia", 2: "D2 Vida/Sentidos", 3: "D3 Acción/Crear", 4: "D4 Mente/Ir", 5: "D5 Práctica" },
    dayNotes: {
      1: "<b>Regla del Infinitivo (Pág. 30):</b> Cuando aparecen 2 verbos seguidos y el segundo es infinitivo, se usa <b>«to»</b> delante del segundo verbo: <i>I want <b>to</b> try</i> (Yo quiero intentar).",
      2: "<b>Verbos de vida y sentidos (Págs. 31–32):</b> Visualiza cada asociación durante 4–5 segundos mientras pronuncias en voz alta.",
      3: "<b>Excepción clave (Pág. 34):</b> Tras el verbo modal <b>«can»</b> (poder) <b>NO</b> se pone la partícula «to»: <i>I can do it</i> (Yo puedo hacerlo).",
      4: "<b>Nota importante (Pág. 37):</b> Para decir «saber hacer algo» se añade <b>«how»</b>: <i>Pedro and I know <b>how</b> to return home</i>.",
      5: "<b>Ejercicios oficiales del Capítulo 4 (Págs. 30–37):</b> Traduce mentalmente y verifica con el audio."
    },
    p: {
      1: [
        { cat: "Verbos (Cap. 4)", e: "Be", h: "bi:", s: "SER / ESTAR", a: "Todo el mundo conoce la frase de «<b>ser o no ser</b>»: «<u>tu bi</u> o no <u>tu bi</u>», ¿Estamos?", ctx: "Verbo cabecera (pág. 28)." },
        { cat: "Verbos", e: "Have", h: "ha:f", s: "Haber / Tener", a: "<b>Haber</b> es similar a <u>have</u>. <b>Tener</b> un <u>haba</u>.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "There is", h: "de*ís", s: "Hay", a: "<b>Hay</b> un payaso que hace reír. <u>Ay, qué risa</u> me da.", ctx: "Existencia singular." },
        { cat: "Verbos", e: "Want", h: "waont", s: "QUERER", a: "Todos los boxeadores <b>quieren</b> un <u>guante</u> de oro.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Wish", h: "wish", s: "Desear", a: "Una boda francesa en la torre Eiffel: «¿<b>Deseas</b> por esposa a...» «<u>Wi</u>» (Oui / Sí).", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Love", h: "laof", s: "Amar", a: "<b>Amar</b> a un <u>lobo</u>.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Help", h: "help", s: "Ayudar", a: "<b>Ayudarse</b> para andar con un bote de <u>gel</u>.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Try", h: "t*ai", s: "Intentar", a: "Suele haber <u>tres</u> <b>intentos</b> para todo (como en el salto de altura en atletismo).", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Get", h: "get", s: "Conseguir", a: "<b>Conseguir</b> cosas por la <u>jeta</u>.", ctx: "Pág. 28." },
        { cat: "Verbos", e: "Ask for", h: "ásk fo*", s: "Pedir", a: "Estar siempre <b>pidiendo</b> es un <u>asco</u>.", ctx: "Pág. 29." },
        { cat: "Verbos", e: "Need", h: "ni:d", s: "Necesitar", a: "<b>Necesitar</b> un <u>nido</u> para un pajarito inglés.", ctx: "Pág. 29." }
      ],
      2: [
        { cat: "Verbos Vida", e: "Live", h: "lif", s: "VIVIR", a: "Hay que <b>vivir</b> <u>libre</u> y levitando.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Be born", h: "bibó*n", s: "Nacer", a: "<b>Nace</b> un pequeño <u>bribón</u>, y la madre le conecta unos <u>bornes</u> eléctricos al <u>biberón</u>.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Grow", h: "gróu", s: "Crecer", a: "Un <u>ogro</u> muy malo que <b>crece</b> y <b>crece</b> sin parar. Ya parece una gran <u>grulla</u>.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Die", h: "da:i", s: "Morir", a: "Inevitablemente hay que <b>morir</b> un <u>día</u> u otro.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Feel", h: "fi:l", s: "Sentir", a: "Todo el mundo <b>siente</b> <u>feeling</u> por alguien. El que más <b>siente</b> las cosas es el que más <u>fe</u> tiene.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Hurt", h: "heo*t", s: "Doler", a: "Es <b>doloroso</b> que Robin Hood te <u>hurte</u> tras darte un flechazo. Te duele 2 veces.", ctx: "Pág. 31." },
        { cat: "Verbos Vida", e: "Cure", h: "kiu*", s: "Curar", a: "Es muy similar.", ctx: "Pág. 31." },
        { cat: "Verbos Sentidos", e: "See / Look", h: "si: / louk", s: "VER / Mirar", a: "<b>See:</b> ¿A un ciego le gustaría <b>ver</b><u>see</u>? Sí. <b>Look:</b> Un <u>loco</u> que te <b>mira</b> con ojos de ido.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Hear / Listen", h: "híae* / leísen", s: "Oír / Escuchar", a: "<b>Hear:</b> Un caballo relincha «<u>híiaa</u>» al <b>oír</b> el disparo. <b>Listen:</b> Si no <b>escuchas</b> la bocina estás <u>listo</u>, te dejará <u>liso</u>.", ctx: "Pág. 32." },
        { cat: "Verbos Sentidos", e: "Like / Touch / Smell", h: "laik / taoch / smel", s: "Gustar / Tocar / Oler", a: "<b>Like:</b> A los vegetarianos les <b>gusta</b> el <u>liquen</u> <u>laik</u>. <b>Touch:</b> Te <u>touca</u> <u>tachar</u>. <b>Smell:</b> Cuando <b>huele</b> mal <u>es mal</u> olor.", ctx: "Pág. 32." }
      ],
      3: [
        { cat: "Comunicación", e: "Speak / Say", h: "spik / sei", s: "HABLAR / Decir", a: "<b>Speak:</b> Al que <b>habla</b> mucho se le dice que cierre su <u>pico</u>. <b>Say:</b> Alguien con una <u>saya</u> dando una conferencia (tiene mucho que <b>decir</b>).", ctx: "Pág. 32." },
        { cat: "Comunicación", e: "Read / Write / Erase / Sign", h: "*i:d / wrait / i*éis / sain", s: "Leer / Escribir / Borrar / Firmar", a: "<b>Read:</b> <b>Leer</b> a través de una <u>red</u>. <b>Write:</b> <b>Escribir</b> estando <u>irritado</u>. <b>Erase:</b> «<u>Iréis</u> a <b>borrar</b>». <b>Sign:</b> Tras poner las <u>señas</u> se <b>firma</b> con nuestro <u>signo</u>.", ctx: "Págs. 32–33." },
        { cat: "Acción / Trabajo", e: "Can / Do / Work", h: "kaen / du / weo*k", s: "PODER / Hacer / Trabajar", a: "<b>Can:</b> Un <u>can</u> con mucho <b>poder</b>. <b>Do:</b> <b>Hacer</b> <u>dos</u> cosas. <b>Work:</b> Mucha gente <b>trabaja</b> con el <u>word</u> en el ordenador.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Make / Build", h: "méik / bi:ld", s: "Fabricar / Construir", a: "<b>Make:</b> Una fábrica que <b>fabrica</b> <u>maquetas</u>. <b>Build:</b> Un <b>constructor</b> <u>vil</u> que deja una casa a medio <b>construir</b> es un <u>buitre</u>.", ctx: "Pág. 33." },
        { cat: "Construcción", e: "Demolish / Eliminate", h: "demólish / elímineit", s: "Derribar / Eliminar", a: "<b>Demolish:</b> Similar a demoler. <b>Eliminate:</b> Muy similar.", ctx: "Pág. 33." },
        { cat: "Capacidad", e: "Fill / Empty", h: "fil / émpti", s: "Llenar / Vaciar", a: "<b>Fill:</b> Si está <b>lleno</b> no cabe ni el <u>filo</u> de un cuchillo. <b>Empty:</b> La grada se <b>vacía</b> ante un <u>empate</u> a cero.", ctx: "Pág. 33." }
      ],
      4: [
        { cat: "Mente", e: "Think / Imagine / Believe", h: "zink / imállin / beilíf", s: "PENSAR / Imaginar / Creer", a: "<b>Think:</b> <b>Pensar</b> contándose los <u>cinco</u> dedos. <b>Imagine:</b> Muy similar. <b>Believe:</b> Creyentes con <u>velas</u> en el <u>relieve</u> de una montaña.", ctx: "Pág. 34." },
        { cat: "Conocimiento", e: "Know / Meet / Remember / Forget", h: "nou / mi:t / rimémbe* / fo*gét", s: "Saber / Conocer / Recordar / Olvidar", a: "<b>Know:</b> Un sabio dice «Que <u>no</u>, <b>no sabes</b> nada». <b>Meet:</b> <b>Conocer</b> a su <u>mito</u>. <b>Remember:</b> <u>Remembrar</u> al <u>miembro</u>. <b>Forget:</b> <b>Olvidarse</b> del <u>fuego</u>.", ctx: "Págs. 34–35." },
        { cat: "Estudio", e: "Study / Pay attention / Understand", h: "stádi / pei aténsheon / ande*stánd", s: "ESTUDIAR / Atender / Comprender", a: "<b>Study:</b> <b>Estudiar</b> en un <u>estadio</u>. <b>Pay attention:</b> Madre <u>tendiendo</u> ropa dice «pon <b>atención</b>». <b>Understand:</b> <u>Andar</u> al <u>stand</u>.", ctx: "Pág. 35." },
        { cat: "Estudio", e: "Learn / Memorize / Teach / Explain", h: "leo:*n / mémorais / ti:ch / explain", s: "Aprender / Memorizar / Enseñar / Explicar", a: "<b>Learn:</b> Un torpe <u>león</u> <b>aprendiendo</b> a cazar. <b>Teach:</b> Vendedor <b>enseña</b> solo los <u>techos</u>. <b>Explain:</b> <b>Explicar</b> un plano en una <u>explanada</u>.", ctx: "Pág. 35." },
        { cat: "Acierto / Error", e: "Be right / Be wrong", h: "bi rait / bi wronk", s: "Acertar / Equivocar (Estar equivocado)", a: "<b>Be right:</b> <b>Acertó</b> al <u>virar</u> el coche a tiempo. <b>Be wrong:</b> Al que se <b>equivoca</b>, un ti<u>rón</u> de orejas y gritarle hasta quedarse <u>ronco</u>.", ctx: "Pág. 35." },
        { cat: "Desplazamiento", e: "Go / Arrive / Return / Come", h: "gou / arráif / riteó*n / kam", s: "IR / Llegar / Volver / Venir", a: "<b>Go:</b> Si meten otro <u>gol</u> nos <b>vamos</b>. <b>Arrive:</b> <b>Llegar</b> <u>arriba</u> antes que el ascensor. <b>Return:</b> En un <u>reto</u> se <b>vuelven</b>. <b>Come:</b> «<b>Venir</b> a <u>comer</u>».", ctx: "Pág. 36." },
        { cat: "Desplazamiento", e: "Go in / Go out / Take out", h: "gou in / gou áut / téikaut", s: "Entrar / Salir / Sacar", a: "<b>In</b> = hacia dentro (<b>entrar</b>); <b>Out</b> = hacia fuera (<b>salir</b>). <b>Take out:</b> <b>Sacar</b> punta a un <u>taco</u> saliendo a la calle (<u>out</u>).", ctx: "Pág. 36." }
      ],
      5: [
        { cat: "Ejercicio Cap. 4 (Pág. 30)", e: "I need to love. / We wish to have.", h: "Ai nid tu laof. / Ui wish tu ha:f.", s: "Yo necesito amar. / Nosotros deseamos tener.", a: "Recuerda poner <b>to</b> entre dos verbos seguidos.", ctx: "Práctica de traducción directa." },
        { cat: "Ejercicio Cap. 4 (Pág. 30)", e: "They try to get it.", h: "Dei t*ai tu get it.", s: "Ellos intentan conseguirlo.", a: "<b>it</b> equivale a «lo» (conseguirlo).", ctx: "Uso de pronombre objeto 'it'." },
        { cat: "Ejercicio Cap. 4 (Pág. 34)", e: "I can do it. / You can write.", h: "Ai kaen du it. / Iu kaen wrait.", s: "Yo puedo hacerlo. / Tú puedes escribir.", a: "Tras <b>can</b> NO se pone «to».", ctx: "Regla de oro de verbos modales." },
        { cat: "Ejercicio Cap. 4 (Pág. 34)", e: "You can not touch that.", h: "Iu kaen not taoch dat.", s: "Usted no puede tocar eso.", a: "Negación directa añadiendo <b>not</b> tras can.", ctx: "Estructura negativa básica." },
        { cat: "Ejercicio Cap. 4 (Pág. 37)", e: "Pedro and I know how to return home.", h: "Pédro aend ai nou hau tu riteó*n houm.", s: "Pedro y yo sabemos volver a casa.", a: "En inglés se añade <b>how</b> (cómo) después de <i>know</i> para indicar saber hacer algo.", ctx: "Modismo esencial de construcción." }
      ]
    }
  },
  3: {
    n: "Verbos de Movimiento, Comercio y Solución (Cap. 4 - Parte 2)",
    f: "Completa el 100% de los verbos del Capítulo 4 (págs. 37–44) + frases de acción ejecutiva",
    dayLabels: { 1: "D1 Mover/Viajar", 2: "D2 Rutina/Comer", 3: "D3 Comprar/Dar", 4: "D4 Poner/Medir", 5: "D5 Abrir/Resolver" },
    dayNotes: {
      1: "<b>Verbos de movimiento (Págs. 37–38):</b> Observa cómo las preposiciones <i>up</i> (arriba), <i>down</i> (abajo), <i>in</i> (dentro) y <i>out</i> (fuera) transforman el significado del verbo.",
      2: "<b>Rutina diaria y alimentación (Págs. 39–40):</b> En inglés para desayunar, almorzar y cenar se usa <b>have</b> (<i>have breakfast, have lunch, have dinner</i>).",
      3: "<b>Transacciones y búsqueda (Págs. 40–41):</b> Vocabulario clave para compras, cobros, pagos y gestión de objetos.",
      4: "<b>Organización y cálculo (Págs. 42–43):</b> Verbos esenciales para reuniones de planificación, presupuestos y métricas.",
      5: "<b>Gestión de problemas (Págs. 43–44):</b> Cierre del Capítulo 4 con verbos de inicio, cierre y resolución de incidencias."
    },
    p: {
      1: [
        { cat: "Movimiento", e: "Walk / Run / Jump / Dance", h: "wo:lk / rran / llamp / daens", s: "ANDAR / Correr / Saltar / Bailar", a: "<b>Walk:</b> <b>Andando</b> con un <u>walkie talkie</u>. <b>Run:</b> <b>Corren</b> <u>ranas</u> con una <u>runa</u>. <b>Jump:</b> «<u>Yupi</u>», <b>salta</b> desde un <u>Jumbo</u>. <b>Dance:</b> <u>Danzar</u>.", ctx: "Págs. 37–38." },
        { cat: "Movimiento", e: "Stop / Wait / Cross / Continue", h: "sto:p / weit / kro:s / kontíniu", s: "Parar / Esperar / Cruzar / Continuar", a: "<b>Stop:</b> Señal de tráfico. <b>Wait:</b> Te <b>espera</b> la persona más <u>wai</u>. <b>Cross:</b> Corredores de <u>cros</u> <b>cruzan</b> entre <u>cruces</u>.", ctx: "Pág. 38." },
        { cat: "Viaje", e: "Travel / Go up / Go down", h: "travl / gou áp / gou dáun", s: "VIAJAR / Subir / Bajar", a: "<b>Travel:</b> Niños <u>traviesos</u> <b>viajando</b>. <b>Go up:</b> Ir arriba (<u>aupa</u>). <b>Go down:</b> Tan <u>gordo</u> que solo puede <b>bajar</b>.", ctx: "Pág. 38." },
        { cat: "Vehículos", e: "Get in / Get out / Drive", h: "gétin / gétaut / draif", s: "Montar (veh.) / Bajar (veh.) / Conducir", a: "<b>Get in:</b> Meter primero la <u>geta</u> dentro (<u>in</u>). <b>Get out:</b> Sacar la <u>geta</u> fuera (<u>out</u>). <b>Drive:</b> <b>Conduce</b> para <u>drivlar</u>.", ctx: "Pág. 38." },
        { cat: "Tiempo", e: "Last / Take (time)", h: "last / téik", s: "Durar / Tardar", a: "<b>Last:</b> Unas buenas pilas <b>duran</b> <u>lasta</u> que se agotan. <b>Take:</b> Se golpea con un <u>taco</u> de billar porque su compañero <b>tarda</b> mucho.", ctx: "Pág. 38." }
      ],
      2: [
        { cat: "Descanso", e: "Tire / Rest / Go to bed / Sleep", h: "tái* / rrest / gou tu bed / slip", s: "CANSAR / Descansar / Acostar / Dormir", a: "<b>Tire:</b> Asno <b>cansado</b> que no puede <u>tirar</u>. <b>Rest:</b> Echar el <u>resto</u>. <b>Go to bed:</b> Ir a la <u>bed</u> (cama). <b>Sleep:</b> <b>Dormir</b> tapado con un <u>slip</u>.", ctx: "Pág. 39." },
        { cat: "Mañana", e: "Wake up / Get up / Dress", h: "wéikap / gétap / dress", s: "Despertar / Levantar / Vestir", a: "<b>Wake up:</b> Despertador dice «¡<u>Qué way, capullo</u>, <b>despierta</b>!». <b>Get up:</b> <b>Levantar</b> solo la <u>geta</u>. <b>Dress:</b> Los <u>tres</u> mosqueteros se <b>visten</b>.", ctx: "Pág. 39." },
        { cat: "Limpieza", e: "Wash / Clean / Stain", h: "waosh / klin / stéin", s: "Asear / Limpiar / Manchar", a: "<b>Wash:</b> <b>Asearse</b> con <u>guasa</u>. <b>Clean:</b> Un <u>clan</u> mafioso <b>limpia</b> una casa. <b>Stain:</b> <u>Stalin</u> con una gran <b>mancha</b> en su bigote.", ctx: "Pág. 39." },
        { cat: "Comidas", e: "Eat / Have / Drink", h: "i:t / ha:f / drink", s: "COMER / Tomar (ingerir) / Beber", a: "<b>Eat:</b> <b>Comer</b> pizzas hasta <u>heartarse</u>. <b>Have:</b> Un <u>ave</u> <b>toma</b> una copa. <b>Drink:</b> <u>Drenar</u> agua de un camello inflado de <b>beber</b>.", ctx: "Págs. 39–40." },
        { cat: "Comidas del día", e: "Have breakfast / Have lunch / Have dinner", h: "haf brékfast / haf lanch / haf dine*", s: "Desayunar / Almorzar / Cenar", a: "<b>Breakfast:</b> <b>Desayunar</b> el ave <u>brocas fasta</u> hartarse. <b>Lunch:</b> Almuerza aves en su <u>lancha</u>. <b>Dinner:</b> Cenar gracias al <u>dinero</u>.", ctx: "Págs. 39–40." }
      ],
      3: [
        { cat: "Comercio", e: "Buy / Rent / Be useful / Cost", h: "bá:i / rrent / bi iúsfl / ko:st", s: "COMPRAR / Alquilar / Valer (Servir) / Costar", a: "<b>Buy:</b> <b>Comprar</b> <u>buitres</u>. <b>Rent:</b> Aquiles haciendo la declaración de la <u>renta</u>. <b>Be useful:</b> Literal «ser útil».", ctx: "Pág. 40." },
        { cat: "Dinero", e: "Pay / Owe / Get paid / Spend", h: "péi / o:u / get péid / spend", s: "Pagar / Deber / Cobrar / Gastar", a: "<b>Pay:</b> <b>Pagar</b> un <u>payaso</u> un <u>peine</u>. <b>Owe:</b> Exclamar «<u>oou</u>» al ver lo que <b>debe</b>. <b>Get paid:</b> Un <u>guepardo</u> <b>cobrándose</b> una pieza. <b>Spend:</b> Se <u>spendola</u> y <b>gasta</b>.", ctx: "Pág. 40." },
        { cat: "Intercambio", e: "Give / Take away / Receive / Lose", h: "giv / téikawéi / risív / lu:s", s: "DAR / Quitar / Recibir / Perder", a: "<b>Give:</b> <b>Dar</b> a un camello bofetada y le sale otra <u>giba</u>. <b>Take away:</b> <b>Quitar</b> agua con un <u>taco</u>. <b>Lose:</b> <b>Perder</b> una pesada <u>losa</u>.", ctx: "Págs. 40–41." },
        { cat: "Búsqueda", e: "Look for / Find / Show / Change / Return", h: "luk fo* / faind / shou / chéinsh / ritó*n", s: "Buscar / Encontrar / Mostrar / Cambiar / Devolver", a: "<b>Look for:</b> <b>Buscar</b> como loco <u>four</u> (4) tréboles. <b>Find:</b> Al <u>fin</u> encontré la aguja, ¡qué <u>fina</u>! <b>Show:</b> Mostrar haciendo un <u>show</u>. <b>Change:</b> Cambiar lo <u>changao</u>.", ctx: "Pág. 41." },
        { cat: "Manipulación", e: "Take / Leave / Use / Throw / Fall / Pick up / Take / Bring / Send", h: "teik / li:f / iu:s / zrou / fao:ll / píkap / téik / brin / send", s: "COGER / Dejar / Utilizar / Tirar / Caer / Recoger / Llevar / Traer / Enviar", a: "<b>Leave:</b> <u>Le a ve</u> para <b>dejar</b> libre a la <u>liebre</u>. <b>Throw:</b> <u>Zorro</u> <b>tirando</b> colillas. <b>Fall:</b> <u>Fallera</u> <b>cae</b>. <b>Pick up:</b> <b>Recoger</b> <u>pica</u>. <b>Bring:</b> Perrito <b>trae</b> copas para <u>brindar</u>.", ctx: "Págs. 41–42." }
      ],
      4: [
        { cat: "Ubicación", e: "Put / Place / Add / Join / Separate", h: "put / pleis / ae:d / lloin / sépereit", s: "PONER / Colocar / Añadir / Juntar / Separar", a: "<b>Place:</b> <b>Colocar</b> puzle en una <u>plaza</u>. <b>Add:</b> Un <u>hada</u> <b>añade</b> más hadas. <b>Join:</b> <u>Yo in</u>tentando <b>juntar</b> 2 imanes.", ctx: "Pág. 42." },
        { cat: "Cantidad", e: "Lack / Be left over", h: "la:k / bi léftouve*", s: "Faltar / Sobrar", a: "<b>Lack:</b> Tras cometer <b>falta</b> se echa <u>laca</u>. <b>Be left over:</b> Persona <u>vil</u> le estorba; como <b>sobra</b>, se envía lejos en un <u>sobre</u>.", ctx: "Pág. 42." },
        { cat: "Medición", e: "Count / Measure / Weigh / Calculate", h: "káunt / méshea* / wéi / kálciuleit", s: "CONTAR / Medir / Pesar / Calcular", a: "<b>Measure:</b> <b>Medir</b> con <u>mesura</u> una <u>mesa</u>. <b>Weigh:</b> Báscula muy <u>way</u> para los pesados que quieren adelgazar.", ctx: "Págs. 42–43." },
        { cat: "Matemáticas", e: "Add / Subtract / Multiply / Divide", h: "ae:d / sobtrákt / móltiplai / diváid", s: "Sumar / Restar / Multiplicar / Dividir", a: "<b>Add:</b> Sumar = Añadir. <b>Subtract:</b> Es «sustraer». <b>Multiply / Divide:</b> Muy similares.", ctx: "Pág. 43." },
        { cat: "Tolerancia", e: "Allow / Withstand / Bother", h: "aeláu / wizstáend / bádea:", s: "PERMITIR / Aguantar / Molestar", a: "<b>Allow:</b> Como le <b>molestan</b> los niños a los que <b>permite</b> todo, dice «¿<u>aló</u>?». <b>Withstand:</b> <b>Aguantar</b> paquete de <u>winston</u> en un <u>stand</u>. <b>Bother:</b> Mosca <b>molesta</b> en un <u>badén</u>.", ctx: "Pág. 43." }
      ],
      5: [
        { cat: "Inicio / Cierre", e: "Begin / End / Open / Close / Call", h: "bigín / end / oupen / klous / kao:l", s: "Empezar / Terminar / ABRIR / Cerrar / Llamar", a: "<b>Begin:</b> <b>Empezar</b> carrera en una <u>vega</u>. <b>End:</b> Vía <b>termina</b> en una <u>hendidura</u>. <b>Open:</b> <b>Abrir</b> hoyos en el <u>open</u> de golf. <b>Call:</b> <b>Llamar</b> a timbre con <u>cal</u>.", ctx: "Págs. 43–44." },
        { cat: "Solución", e: "Solve / Fix / Work", h: "sao:lf / fix / weo*k", s: "SOLUCIONAR / Arreglar / Funcionar", a: "<b>Solve:</b> Similar a solventar. <b>Fix:</b> Mecánico <b>arregla</b> con llave muy <u>fixna</u>. <b>Work:</b> Ordenador <b>funciona</b> al teclear en el <u>word</u>.", ctx: "Pág. 44." },
        { cat: "Daño / Unión", e: "Destroy / Break / Cut / Stick", h: "destrói / breik / kat / stik", s: "Estropear / Romper / Cortar / Pegar", a: "<b>Break:</b> <b>Romper</b> hoja con una gran <u>broca</u>. <b>Cut:</b> <b>Cortar</b> con un <u>cúter</u> un <u>kit kat</u>. <b>Stick:</b> <b>Pegar</b> <u>estirando</u> el bote de pegamento.", ctx: "Pág. 44." },
        { cat: "Frase Ejecutiva", e: "Let's troubleshoot this and find a workaround.", h: "Lets TRU-bel-shut dis aend faind a UORK-a-raund.", s: "Resolvamos esto y encontremos una solución temporal.", a: "Aplica los verbos <b>find</b> (encontrar) y <b>solve/fix</b> en contexto de crisis.", ctx: "Integración ejecutiva." },
        { cat: "Frase Ejecutiva", e: "Let's kick off and wrap this up on time.", h: "Lets KIK of aend rap dis ap on táim.", s: "Empecemos y terminemos esto a tiempo.", a: "Equivalente corporativo de <b>Begin</b> y <b>End</b>.", ctx: "Dirigir reuniones." }
      ]
    }
  },
  4: {
    n: "Sustantivos I: Viajes, Transporte y Alojamiento (Cap. 5)",
    f: "Vocabulario esencial para aeropuertos, estaciones, hoteles y desplazamientos (Págs. 45–50)",
    dayLabels: { 1: "D1 Documentos", 2: "D2 Aeropuerto", 3: "D3 Transporte", 4: "D4 Estación", 5: "D5 Hotel" },
    dayNotes: {
      1: "<b>Estrategia Cap. 5 (Pág. 45):</b> Memoriza primero las palabras que encabezan cada tabla (escritas en MAYÚSCULAS) y aquellas cuya asociación inverosímil te resulte más visual.",
      2: "<b>Aeropuerto y vuelos (Pág. 47):</b> Vocabulario imprescindible para viajar por negocios sin estrés.",
      3: "<b>Transporte urbano y carretera (Págs. 47–48):</b> Diferencia bien entre <i>streetcar</i> (tranvía), <i>subway</i> (metro) y <i>freeway</i> (autopista).",
      4: "<b>Estaciones y billetes (Págs. 48–49):</b> Cómo moverte en tren y confirmar horarios y asientos.",
      5: "<b>Hotel y habitaciones (Pág. 49):</b> Registro, planta, ascensor y resolución de incidencias en tu estancia."
    },
    p: {
      1: [
        { cat: "Documentos (Cap. 5)", e: "Documentation / Passport / Police / Customs", h: "dakiumentéishon / pásport / polís / kaóstoms", s: "DOCUMENTACIÓN / Pasaporte / Policía / Aduana", a: "<b>Customs:</b> Declarar en la <b>aduana</b> una moto estilo «<u>custom</u>» (choper). Las demás son muy similares.", ctx: "Pág. 45." },
        { cat: "Equipaje", e: "Baggage / Suitcase / Briefcase / Travel bag", h: "bágech / sútkeis / brífkeis / trávl bá:k", s: "Equipaje / Maleta / Maletín / Bolsa de viaje", a: "<b>Baggage:</b> Persona muy <u>vaga</u> arrastrando su <b>equipaje</b>. <b>Suitcase:</b> <b>Maleta</b> voladora <u>surca casas</u>. <b>Briefcase:</b> Llevar el <b>maletín</b> a jugar a la <u>brisca casa</u> de un amigo.", ctx: "Págs. 45–46." },
        { cat: "Objetos Viaje", e: "Package / Bag / Laptop computer", h: "pákech / bá:k / láptop compíute*", s: "Paquete / Bolso / Ordenador portátil", a: "<b>Bag:</b> Abandona equipaje y se <u>vak</u> solo con el <b>bolso</b>. <b>Laptop:</b> Al <b>portátil</b> se pega una <u>lapa</u> que no para (<u>stop</u>) hasta que le entra la <u>tos</u>.", ctx: "Pág. 46." },
        { cat: "Cámaras", e: "Video camera / Camera", h: "vídeo cámera / cámera", s: "Cámara de vídeo / Cámara de fotos", a: "Es muy similar.", ctx: "Pág. 46." },
        { cat: "Señalética", e: "Line / Control / Help / Entrance / Exit", h: "lá:in / keontról / help / éntrens / éxit", s: "Cola (Fila) / Control / Ayuda / Entrada / Salida", a: "<b>Line:</b> Los de la <b>cola</b> no pisen la <u>línea</u>. <b>Exit:</b> Artista sale por la <b>salida</b> tras el <u>éxito</u>.", ctx: "Pág. 46." },
        { cat: "Orientación", e: "Right / Left", h: "rait / left", s: "Derecha / Izquierda", a: "<b>Right:</b> Similar a <u>derighta</u>. <b>Left:</b> Hay que estar <u>alefta</u> para no golpearse con una barra torcida (<b>izquierda</b>).", ctx: "Págs. 46–47." }
      ],
      2: [
        { cat: "Aeropuerto", e: "Airport / Gate / Port", h: "é*po*t / géit / po:*t", s: "AEROPUERTO / Puerta de embarque / Puerto", a: "<b>Gate:</b> Un amable <u>gato</u> nos anuncia nuestra <b>puerta de embarque</b> mediante señales.", ctx: "Pág. 47." },
        { cat: "Estaciones", e: "Train station / Bus station / Subway station", h: "trein stéisheon / básteisheon / sábwei stéisheon", s: "Estación de tren / Estación de bus / Estación de metro", a: "Muy similares: <i>station</i> = estación.", ctx: "Pág. 47." },
        { cat: "Aire y Mar", e: "Plane / Flight / Ship", h: "plein / flait / shep", s: "AVIÓN / Vuelo / Barco", a: "<b>Plane:</b> Un <b>avión</b> <u>planea</u>, es <u>pleinamente</u> un aeroplano. <b>Flight:</b> En el <b>vuelo</b>, la azafata <u>flirtea</u>. <b>Ship:</b> <b>Barco</b> vikingo con forma de <u>chip</u>.", ctx: "Pág. 47." },
        { cat: "Vías Férreas", e: "Train / Subway / Streetcar / Car (train)", h: "trein / sábwei / strítka:* / ka:*", s: "Tren / Metro / Tranvía / Vagón", a: "<b>Subway:</b> Bajo (<u>sub</u>) el camino (<u>way</u>). <b>Streetcar:</b> Vagón (<u>car</u>) de calle (<u>street</u>). <b>Car:</b> <b>Vagón</b> arrastrado como un <u>carro</u>.", ctx: "Págs. 47–48." }
      ],
      3: [
        { cat: "Vehículos", e: "Bus / Taxi / Car / Garage", h: "bas / táxi / ka:* / gará:sh", s: "Autobús / Taxi / COCHE / Garaje", a: "<b>Car:</b> Un <b>coche</b> muy <u>caro</u> conducido por una elegante <u>oca</u>.", ctx: "Pág. 48." },
        { cat: "Dos Ruedas", e: "Motorcycle / Bicycle", h: "móto*saikl / baísikl", s: "Moto / Bicicleta", a: "Es muy similar.", ctx: "Pág. 48." },
        { cat: "Carreteras", e: "Freeway / Road / Way / Gas station", h: "fríwei / ro:ud / wei / gasteisheon", s: "Autopista / Carretera / Camino / Gasolinera", a: "<b>Freeway:</b> Libre (<u>free</u>) camino (<u>way</u>). <b>Road:</b> Ruta para <u>rodar</u>. <b>Way:</b> Camino polvoriento no es nada <u>way</u>.", ctx: "Pág. 48." }
      ],
      4: [
        { cat: "Estación", e: "Stop / Platform / Track / Timetable / Ticket", h: "sto:p / plátfo*m / trak / táimteibl / tíket", s: "PARADA / Andén / Vía / Horario / Billete", a: "<b>Platform:</b> <b>Andén</b> es una <u>plataforma</u> de plata. <b>Track:</b> En la <b>vía</b> hay una <u>traca</u>. <b>Timetable:</b> Tiempo (<u>time</u>) puesto en una <u>tabla</u>.", ctx: "Pág. 48." },
        { cat: "Asientos y Clases", e: "Seat / Class / First class / Second class / Cabin", h: "si:t / kla:s / fe*st kla:ss / sékond kla:ss / káben", s: "ASIENTO / Clase / Preferente / Turista / Camarote", a: "<b>Seat:</b> Un <u>seat</u> 600 con un enorme <b>asiento</b>. <b>Cabin:</b> <b>Camarote</b> es una <u>cabina</u> de teléfono donde está la <u>cama rota</u>.", ctx: "Pág. 49." }
      ],
      5: [
        { cat: "Hotel", e: "Hotel / Room / Number / Key / Elevator", h: "houtél / ru:m / námbe* / ki: / éleveiteo*", s: "HOTEL / Habitación / Número / Llave / Ascensor", a: "<b>Room:</b> <b>Habitación</b> donde hay vacas <u>rumiando</u>. <b>Key:</b> Gallo dice «<u>Ki</u> ki ri ki» y expulsa 3 <b>llaves</b>.", ctx: "Pág. 49." },
        { cat: "Estructura Hotel", e: "Stairs / Floor / Hallway", h: "sté:rs / flo:* / hálwei", s: "Escaleras / Planta (piso) / Pasillo", a: "<b>Stairs:</b> Subir <b>escaleras</b> con una gran <u>estera</u>. <b>Floor:</b> <b>Planta</b> llena de <u>flores</u>. <b>Hallway:</b> Camino (<u>way</u>) del <u>hall</u>.", ctx: "Pág. 49." },
        { cat: "Frase Ejecutiva Viaje", e: "I have a reservation under my name. What floor is my room on?", h: "Ai ha:f a reser-VÉI-shon ánde* mái néim. Uat flo:* is mái ru:m ao:n?", s: "Tengo una reserva a mi nombre. ¿En qué planta está mi habitación?", a: "Integra <b>have</b>, <b>name</b>, <b>floor</b> y <b>room</b> en una situación real de check-in.", ctx: "Aplicación práctica." }
      ]
    }
  }
});