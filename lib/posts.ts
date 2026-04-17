export interface Post {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  category: "Nasveti" | "Lokacija" | "Oprema" | "Varnost" | "Tečaji";
  readMinutes: number;
  publishDate: string;
  intro: string;
  sections: { heading: string; body: string }[];
  cta: string;
}

export const posts: Post[] = [
  {
    slug: "kite-sola-hrvaška-nin-ljubac-zacetniki",
    title: "Kite šola Hrvaška: Zakaj sta Nin in Ljubač idealni mesti za začetnike",
    metaDescription: "Iščeš kite šolo na Hrvaškem? Nin in Ljubač sta najboljši destinaciji za kiteboarding tečaj — plitva voda, Maestral, brezplačen parking. Kite Šola North.",
    keywords: ["kite šola Hrvaška", "kite tečaj Nin", "kiteboarding Ljubač", "kite šola za začetnike Hrvaška"],
    category: "Lokacija",
    readMinutes: 6,
    publishDate: "2025-04-10",
    intro: "Hrvaška je dom nekaterih najboljših kiteboarding destinacij v Evropi — toda ne vse lokacije so enake. Če si začetnik, je izbira pravega spota ključna za hiter in varen napredek. Nin in Ljubač pri Zadru sta dve mesti, ki ju mnogi izkušeni kiteboarderji postavijo na sam vrh za učenje.",
    sections: [
      {
        heading: "Zakaj je Nin idealen za začetnike?",
        body: "Ninska laguna je naravni biser. Voda je plitka (do pasu ali kolena), prozorna in topla — idealno za nekoga, ki se prvič sreča z zmajem. Ni nevarnih tokov, ni čolnov, ni skal. Samo pesek, nebo in veter. Inštruktorji so dosegljivi v vsakem trenutku, saj vodo z vidika varnosti nadzorujejo od blizu.",
      },
      {
        heading: "Ljubač — ogromen zaliv za vse nivoje",
        body: "Ljubač je naša primarna lokacija. Zaliv je dolg skoraj 1 km, z enakomernim peščenim dnom in plitvo vodo. Brezplačen parking je tik ob plaži, lokal ponuja pijačo in hrano, okolica je prijazna za družine z otroki. Ker je zaliv velik, je prostora dovolj za začetnike in napredne hkrati — brez gneče in stresa.",
      },
      {
        heading: "Vetrovi: Maestral, Burja in Tramontana",
        body: "Področje Zadar-Nin-Ljubač je eno redkih krajev na Jadranu, kjer pihajo vse tri glavne smeri vetra. Maestral (JZ) je termalni veter, ki se razvije vsak popdan in je idealen za učenje — zanesljiv, enakomeren, predvidljiv. Burja (SV) prinaša moč za izkušenejše. Tramontana (S) ponuja mirnejše pogoje za napredovance. Skupaj to pomeni, da skoraj ni dneva brez vetra.",
      },
      {
        heading: "Dostopnost iz Slovenije",
        body: "Nin in Ljubač sta samo 4 ure vožnje iz Ljubljane in Maribora — bliže kot marsikatero slovensko morje. Avto zapelješ po A1 do Rupe, nato po jadranski cesti do Zadra. 15 km od centra Zadra je že Nin. Ni letenja, ni dražjih prevozov. Preprost vikend pobeg ali tedenski dopust.",
      },
      {
        heading: "Primerjava z drugimi destinacijami",
        body: "Bol na Braču in Viganj sta sicer znani kite destinaciji, toda za začetnike sta pogosto manj primerni. Voda je globlja, vetrovi bolj sunkoviti, plaže bolj zasedene. Nin ponuja plitvejšo vodo, mirnejše razmere in bolj strukturiran pristop k učenju. To se pozna pri napredku — večina naših učencev stoji na deski že v prvih 4 dneh.",
      },
      {
        heading: "Kite Šola North — vaš partner v Nin-Ljubač",
        body: "Naša šola deluje v Zadar-Nin-Ljubač že vrsto let. Inštruktorji imajo mednarodne licence, oprema je nova in vzdrževana, pristop pa je prilagojen vsakemu posamezniku. Ponujamo spoznavni tečaj (3h, €190), začetni tečaj (4 dni, €520) in zasebne ure (€100/h). Na voljo so tudi opremljeni apartmaji tik ob šoli.",
      },
    ],
    cta: "Rezerviraj svoje mesto za sezono 2025 — mesta so omejena.",
  },

  {
    slug: "kite-tecaj-cena-kaj-je-vkljuceno",
    title: "Koliko stane kite tečaj? Cenik in kaj je vključeno v kiteboarding šolo",
    metaDescription: "Kite tečaj cena 2025: spoznavni tečaj €190, začetni tečaj €520, zasebne ure €100/h. Kaj je vključeno? Kite Šola North, Zadar-Nin-Ljubač.",
    keywords: ["kite tečaj cena", "kiteboarding tečaj cenik", "koliko stane kiteboarding tečaj", "kite šola cena Hrvaška"],
    category: "Tečaji",
    readMinutes: 5,
    publishDate: "2025-04-08",
    intro: "Ena prvih vprašanj, ki si jih zastavijo bodoči kiteboarderji, je: koliko bo to stalo? Cene se med šolami razlikujejo, prav tako pa to, kaj je v ceno vključeno. Tukaj je popoln pregled stroškov kiteboarding tečaja.",
    sections: [
      {
        heading: "Spoznavni tečaj (3 ure) — €190",
        body: "Spoznavni tečaj je idealen uvod za tiste, ki želijo preizkusiti kiteboarding brez večjih finančnih obveznosti. V treh urah dobite teorijo vetra in varnosti, rokujete z opremo, vadite z manjšim trenerskim zmajem in prvič dvignete pravi zmaj. Vsa oprema je vključena. Ta tečaj je predpogoj za začetni tečaj.",
      },
      {
        heading: "Začetni tečaj (4 dni, 12 ur) — €520",
        body: "Naš najpopularnejši program vas v štirih dneh popelje od tal do samostojne vožnje. Vsak dan ~3 ure intenzivnega poučevanja z inštruktorjem neposredno ob vas. Vključuje montažo opreme, body dragging, vstop v vodo, vzpon na desko in vožnjo po vetru. Vse vsebine spoznavnega tečaja so vključene — ni dvojnega plačila.",
      },
      {
        heading: "Zasebne ure — €100/uro",
        body: "Individualne ure so namenjene povratnikom, vmesnim kiteboarderjem ali vsem, ki želijo hiter napredek brez skupinskega ritma. Inštruktor se posveti izključno vam. Priporočamo vsaj 2 uri na sejo za optimalne rezultate. Fleksibilen urnik glede na razpoložljiv veter.",
      },
      {
        heading: "Kaj je vključeno v vsak tečaj",
        body: "Vsa oprema (zmaj, bar, deska, trapez, rešilni jopič), prilagoditev tečaja glede na veter in vremenski pogoje, premestitev med lokacijami (Ljubač, Nin, Zadar okolica), strokovno vodstvo certificiranih inštruktorjev in možnost naknadnega nadaljevanja z zasebnimi urami.",
      },
      {
        heading: "Nastanitev in paketne možnosti",
        body: "V bližini šole so na voljo opremljeni apartmaji po ceni €10–15 na osebo ali €70 na noč za 3–5 oseb. Kuhinja, kopalnica, spalnica, TV in Wi-Fi — vse kar potrebujete za udoben teden ob morju. Za rezervacijo nastanitve skupaj s tečajem nas kontaktirajte neposredno.",
      },
      {
        heading: "Kdaj rezervirati?",
        body: "Julij in avgust sta najpriljubljenejša meseca, mesta se zapolnijo hitro — pogosto že aprila ali maja. Priporočamo zgodnjo rezervacijo, posebno za skupinska potovanja. Odpoved je brezplačna do 48 ur pred začetkom tečaja.",
      },
    ],
    cta: "Preverite razpoložljivost za julij in avgust 2025.",
  },

  {
    slug: "kako-se-nauciti-kitesurfanja-zacetnik",
    title: "Kako se naučiti kitesurfanja: Vse kar moraš vedeti kot popoln začetnik",
    metaDescription: "Kako se naučiti kitesurfanja? Faze učenja, koliko ur potrebuješ, fizična pripravljenost in najpogostejše napake začetnikov. Popoln vodič 2025.",
    keywords: ["kako se naučiti kitesurfanja", "kiteboarding za začetnike", "kako začeti s kitesurfanjem", "učenje kiteboarding"],
    category: "Nasveti",
    readMinutes: 7,
    publishDate: "2025-04-05",
    intro: "Kiteboarding je eden izmed najhitreje rastočih vodnih športov na svetu — in z dobrim razlogom. Kombinira adrenalin, naravo in svobodo na način, ki ga malo kateri šport ponudi. Toda kako sploh začeti? Tukaj je realen, korak-za-korakom vodič za popolne začetnike.",
    sections: [
      {
        heading: "Faza 1: Upravljanje zmaja na kopnem",
        body: "Vse se začne na kopnem. Najprej se naučite ravnati z manjšim trenerskim zmajem — spoznate vetrni okno, naučite se upravljati zmaj z barrom, razumete varnostne sisteme. Ta faza traja 2–4 ure in je ključna za vse nadaljnje učenje. Inštruktor je ves čas ob vas.",
      },
      {
        heading: "Faza 2: Body dragging v vodi",
        body: "Ko obvladate zmaj na kopnem, vstopite v vodo brez deske. Zmaj vas vleče po vodi — tako imenovan body dragging. To je odlična faza za utrditev občutka za moč zmaja, upravljanje z eno roko in smer letenja. Traja 3–6 ur, odvisno od posameznika.",
      },
      {
        heading: "Faza 3: Vstop na desko",
        body: "Najtežja in najpomembnejša faza. Naučite se vstati na deski, ko vas zmaj vleče. Telo mora biti v pravem kotu, deska pravilno orientirana, zmaj v pravi legi. Večina začetnikov potrebuje 6–10 ur do prvih uspešnih vožnji. S plitvo vodo v Nin-Ljubač je ta faza bistveno hitrejša.",
      },
      {
        heading: "Koliko ur tečaja realno potrebuješ?",
        body: "Realno pričakovanje: 12–15 ur za samostojno vožnjo v eni smeri. Naš začetni tečaj (12 ur) to doseže pri večini učencev. Nekateri potrebujejo še 2–4 ure zasebnih ur za utrditev tehnike. Oglaševanje '2-urnega tečaja do neodvisnosti' je preprosto neresnično — bodite previdni pri šolah, ki to obljubljajo.",
      },
      {
        heading: "Kakšna kondicija je potrebna?",
        body: "Kiteboarding je manj fizično zahteven, kot si večina predstavlja. Zmaj nosi večino dela — ni potrebno plavati s polno močjo. Osnovna vzdržljivost in koordinacija sta dovolj. Priporočamo, da ste v normalni telesni pripravljenosti. Plavanje ni nujno na vrhunski ravni, osnove pa so predpogoj.",
      },
      {
        heading: "Najpogostejše napake začetnikov",
        body: "1) Kupiti opremo pred tečajem (ne naredite tega — najprej se naučite). 2) Učiti se sam brez inštruktorja (nevarno in neučinkovito). 3) Prehitro preiti na naslednjo fazo. 4) Prezreti varnostne sisteme. 5) Kitati pri premočnem vetru v prvih urah. Vsi ti problemi izginejo z dobrim inštruktorjem ob strani.",
      },
    ],
    cta: "Začnite svojo kite pot z nami — spoznavni tečaj traja samo 3 ure.",
  },

  {
    slug: "je-kiteboarding-nevaren-varnost",
    title: "Je kiteboarding nevaren? Resnica o varnosti kitesurfanja",
    metaDescription: "Je kiteboarding nevaren? Dejanski podatki o varnosti, moderna oprema, zakaj je učenje pri certificirani šoli ključno. Kite Šola North, Nin-Ljubač.",
    keywords: ["je kiteboarding nevaren", "kiteboarding varnost", "kitesurfanje nevarnost", "kite tečaj varno"],
    category: "Varnost",
    readMinutes: 6,
    publishDate: "2025-04-03",
    intro: "Kiteboarding ima sloves adrenalinsega in nevarnega sporta. Slike kitarjev, ki se vzpenjajo 10 metrov v zrak, ne pomagajo k boljšemu vtisu. Toda kakšna je resnica? Je kiteboarding dejansko nevaren — ali je strah večji od dejanske nevarnosti?",
    sections: [
      {
        heading: "Statistika poškodb v primerjavi z drugimi športi",
        body: "Študije kažejo, da je stopnja poškodb pri kiteboarding nižja kot pri smučanju, gorskem kolesarjenju ali celo tenisu. Večina poškodb se zgodi zunaj certificiranih tečajev — pri samoukih kitarjih ali tistih, ki ignorirajo varnostna pravila. V okviru strukturiranega tečaja z inštruktorjem je tveganje minimalno.",
      },
      {
        heading: "Moderna oprema je zasniovana za varnost",
        body: "Sodobni kite sistemi imajo več varnostnih mehanizmov: Quick Release na baru za takojšnje sproščanje zmaja, Chicken Loop Release za nujne situacije, de-power sistem, ki takoj zmanjša moč zmaja. Vsi ti sistemi so standardni in enostavni za uporabo — naučite jih v prvih 30 minutah tečaja.",
      },
      {
        heading: "Zakaj certificirana šola pomeni varnost",
        body: "Inštruktor s certifikatom je usposobljen za prepoznavanje nevarnih situacij, pravilno zaporedje učenja in takojšnje ukrepanje. Nevarnosti kiteboarding nastanejo iz neznanja — in točno to odpravimo z dobrim tečajem. Vsak korak gradimo na prejšnjem, brez preskokov.",
      },
      {
        heading: "Vremenski pogoji: kdaj kitati in kdaj ne",
        body: "Neizkušeni kitarji kdaj podcenijo pomen vremenske napovedi. Mi nikoli ne gremo v vodo pri nevarnih razmerah — nevihtni vetrovi, spremembe smeri in sunki so rdeče zastavice. V Nin-Ljubač je maestral predvidljiv termalni veter, ki se razvije pozno dopoldne in ugasne pred sončnim zahodom — idealen za strukturirano učenje.",
      },
      {
        heading: "Zakaj je Nin varna lokacija za začetnike?",
        body: "Ninska laguna je plitka — do kolena ali pasu. Ni nevarnih tokov, ni skal, ni globoke vode. Če pade zmaj, stojite. Inštruktor je vedno v neposredni bližini. Motorni čolni so v kiteboarding coni prepovedani. Bolj varnega okolja za učenje na Jadranu praktično ne boste našli.",
      },
      {
        heading: "Zavarovanje med tečajem",
        body: "Med tečajem pri nas ste zavarovani za nezgodo v okviru standardnih pogojev naše šole. Priporočamo, da preverite svojo turistično zavarovanje za aktivne športe. Za samostojno kitanje (po tečaju) je priporočljiv nakup specifičnega kite zavarovanja — cena je nizka, mirnost pa neprecenljiva.",
      },
    ],
    cta: "Varno učenje z izkušenimi inštruktorji — rezervirajte tečaj.",
  },

  {
    slug: "kiteboarding-starost-starostna-omejitev",
    title: "Kiteboarding starostna omejitev: Kdaj si premlaad ali prestar za kite tečaj?",
    metaDescription: "Kiteboarding starostna omejitev: od 14 let dalje, ni zgornje starosti. Ali sem prestara za kiteboarding? Zgodbe učencev 50+. Kite Šola North.",
    keywords: ["kiteboarding starost", "kite tečaj starostna omejitev", "ali sem prestara za kitesurfanje", "kiteboarding otroci"],
    category: "Nasveti",
    readMinutes: 5,
    publishDate: "2025-03-28",
    intro: "\"Ali sem prestar za kiteboarding?\" je vprašanje, ki ga slišimo pogosto. Kratek odgovor: verjetno ne. Kiteboarding je šport, ki ga z uspehom prakticirajo ljudje od 14 do 65 let in več. Tukaj je vse, kar morate vedeti o starosti in kiteboarding tečaju.",
    sections: [
      {
        heading: "Minimalna starost: od 14 let",
        body: "Uradno sprejemamo udeležence od 14 let naprej. Mlajši otroci (od 12 let) so dobrodošli ob prisotnosti staršev in po predhodnem posvetu z inštruktorjem — prilagodimo opremo in pristop. Otroci se dejansko pogosto učijo hitreje od odraslih, saj imajo manj strahu in boljšo koordinacijo.",
      },
      {
        heading: "Zgornja starostna omejitev? Ne obstaja.",
        body: "Pri nas smo imeli učence stare 60 in več let, ki so se naučili kiteboarding s popolnega začetka. Kiteboarding ni šport ekskluzivno za mlade — zmaj nosi večino fizičnega bremena, za telo pa je manj obremenjujoč kot npr. surf ali windsurfing. Ključni so motivacija, potrpežljivost in dober inštruktor.",
      },
      {
        heading: "Kaj pa fizična pripravljenost?",
        body: "Ne potrebujete vrhunske kondicije. Osnovna gibljivost, sposobnost plavanja in normalna vzdržljivost so dovolj. Koordinacija in prostorska orientacija sta bolj pomembni od mišične moči. Starejši učenci imajo pogosto prednost — imajo potrpljenje, disciplino in pozornost, ki mladim kdaj manjkajo.",
      },
      {
        heading: "Zdravstvene omejitve",
        body: "Posvetujte se z zdravnikom, če imate resne težave s srcem, hrbtenico ali koleni. Kiteboarding ni primeren za tiste z nekontrolirano epilepsijo ali določenimi ortopedskimi stanji. Za večino zdravih posameznikov pa ni kontraindikacij — in mnogi poročajo, da redna vadba kiteboarding celo izboljša moč hrbta in core mišic.",
      },
      {
        heading: "Prilagojen program za različne starosti",
        body: "Za otroke prilagodimo velikost zmaja (manjši, lažji zmaji), tempo učenja in vrsto razlage. Za starejše odrasle upočasnimo tempo tačas, ko je to potrebno, in se osredotočimo na tehniko namesto na hitrost napredka. Vsak učenec dobi individualen pristop.",
      },
    ],
    cta: "Ne glede na starost — začnite z našim 3-urnim spoznavnim tečajem.",
  },

  {
    slug: "kiteboarding-oprema-zacetniki-vodic",
    title: "Kiteboarding oprema za začetnike: Kaj potrebuješ (in česa NE kupiš takoj)",
    metaDescription: "Kiteboarding oprema za začetnike 2025: kateri kite, deska, trapez? Zakaj NE kupiti opreme pred tečajem. Priporočila in cene za slovenskega kitarča.",
    keywords: ["kiteboarding oprema začetnik", "kite oprema za začetnike", "kateri kite kupiti začetnik", "kiteboarding kaj potrebujem"],
    category: "Oprema",
    readMinutes: 7,
    publishDate: "2025-03-25",
    intro: "Kiteboarding oprema je zapletena, draga in zelo odvisna od pogojev ter vašega nivoja. Najpogostejša napaka začetnikov? Kupiti opremo PRED tečajem. Tukaj je realen vodič, kaj potrebujete in kdaj.",
    sections: [
      {
        heading: "NAJPREJ tečaj, POTEM oprema",
        body: "Resnično vas prosimo: ne kupujte opreme pred prvim tečajem. Ne veste še, kakšen stil kitanja vam ustreza, kakšne razmere boste kitali, koliko veter je v vašem območju in katera velikost zmaja vam ustreza glede na telesno težo. Tečaj vam bo dal vse te odgovore — in inštruktor vam bo pomagal pri nakupu.",
      },
      {
        heading: "Osnovna oprema in okvirne cene (nova)",
        body: "Kite: €800–2000 (12m za začetnike ~70–90 kg). Bar: €300–600 (pogosto v paketu s kiteom). Deska: €400–900 (twin-tip za začetnike). Trapez: €150–400 (sedežni za začetnike). Rešilni jopič: €100–200 (obvezen). Skupaj nova oprema: €1750–4100. Rabljena oprema je bistveno cenejša — od €800 za celoten set.",
      },
      {
        heading: "Kakšno velikost zmaja izbrati?",
        body: "Za začetnike: 12m zmaj je idealen za večino odraslih (65–90 kg) pri povprečnih pogojih (15–25 vozlov). Manjši (9–10m) za lahke in v močnih vetru, večji (14–17m) za težke in v šibkem vetru. Inštruktor vam bo po tečaju natančno svetoval glede na vaše pogoje kitanja.",
      },
      {
        heading: "Priporočene znamke",
        body: "North, Duotone, Cabrinha, Slingshot in Core so med bolj zaupljivimi znamkami. Izogibajte se neznancev blagovnih znamk brez servisa v Sloveniji ali bližnji regiji. Rezervni deli in servis so pri kiteopremi ključni — veter ne čaka na dostavo iz Kitajske.",
      },
      {
        heading: "Rabljena oprema — da ali ne?",
        body: "Za začetnike je rabljena oprema odlična. Ključno: kupujte od znanih znamk, ne starejše od 5 let (mehur in kanopi starajo), preverite varnostne sisteme in zahtevajte demo vožnjo. Dobri viri za rabljeno opremo: Kiteboarders.si forum, Facebook grupe, lokalne šole.",
      },
      {
        heading: "Kaj med tečajem pri nas ni potrebno",
        body: "Med tečajem zagotavljamo vso opremo — ni potrebno kupiti ali prinesti ničesar. Kopalke, brisača, sončna krema, morebitna kratka neopren majica (za zaščito, ne toploto) — to je vse kar potrebujete za prvi dan na plaži.",
      },
    ],
    cta: "Pridite na tečaj brez opreme — vse zagotovimo mi.",
  },

  {
    slug: "kiteboarding-zadar-najboljsi-spoti",
    title: "Kiteboarding Zadar: Vodič po najboljših kiteboarding točkah v okolici Zadra",
    metaDescription: "Kiteboarding Zadar 2025: Nin laguna, Ljubač, Zadar okolica — najboljši kite spoti. Vetrovi, dostop, parkiranje. Vse za kitarče pri Zadru.",
    keywords: ["kiteboarding Zadar", "kite Zadar", "kitesurfanje Zadar", "kite točke Zadar"],
    category: "Lokacija",
    readMinutes: 6,
    publishDate: "2025-03-20",
    intro: "Zadar in njegova okolica so eno najboljših kiteboarding področij na vzhodnem Jadranu. Tri različne lokacije v radiju 10 km, trije različni vetrovi in pogoji za vse nivoje — od začetnikov do naprednih kitarjev. Tukaj je vaš vodič.",
    sections: [
      {
        heading: "Nin laguna — najboljše za začetnike",
        body: "Ninska laguna je čudovita plitka laguna ob zgodovinskem mestu Nin. Deluje za vse tri jadranske vetrove — Maestral, Burja in Tramontana. Voda je do pasu globoka, peščeno dno, brez tokov. Zgodovinsko mesto Nin je le 2 km stran — obvezna destinacija za kulturni obisk po tečaju. Dostop enostaven, parkiranje plačljivo, v bližini restavracije in gostišča.",
      },
      {
        heading: "Ljubač — naša primarna kiteboarding lokacija",
        body: "Ljubač je velika plitka laguna severozahodno od Zadra. Ogromen zaliv (1 km) s peščenim dnom, brezplačen parking tik ob vodi, lokal na plaži. Deluje odlično za Maestral (JZ). Primeren za vse nivoje — dovolj prostora za začetnike in napredne hkrati. Dostopen za avto do tik ob plaži. Naša primarna lokacija za večino tečajev.",
      },
      {
        heading: "Zadar okolica — za izkušenejše kitarje",
        body: "Različne točke v bližini Zadra delujejo za Burjo (SV) in Jugo (J). Primerne za vmesne in napredne kiteboarderje, ki iščejo malce več vetra in izziva. Globina vode je večja, pogoji bolj dinamični. Rezervna lokacija naše šole za dneve s posebnimi vetrovnimi pogoji.",
      },
      {
        heading: "Veteroklimatologija Zadar-Nin-Ljubač",
        body: "Maestral (JZ, 12–22 volov): termalni veter, junij–september, vsak popdan. Idealen za učenje. Burja (SV, 15–35 vozlov): cel leto, pogosto sunkovit. Poleti bolj zmeren. Tramontana (S, 10–20 vozlov): oktober–maj. Za vse nivoje pri zmernih hitrostih. Jugo (J): prihaja od juga, globlje valove — za izkušene.",
      },
      {
        heading: "Praktične informacije za kitarje",
        body: "Parkiranje: brezplačno v Ljubaču, plačljivo v Nin centru. Hrana in pijača: lokal na plaži v Ljubaču, v Ninu gostišča in restavracije v starem mestnem jedru. Najbližje letališče: Zadar (ZAD) — 20 min vožnje. Iz Ljubljane: ~4 ure z avtom po A1.",
      },
      {
        heading: "Kdaj je najboljši čas za kitanje pri Zadru?",
        body: "Junij–avgust: vrhunec sezone, Maestral vsak dan, temperatura morja 25–28°C, voda prozorna. Maj in september: manj turistov, boljše cene nastanitev, vetrovi enako dobri. April in oktober: za izkušenejše kitarje, Burja in Tramontana. Naša šola deluje julij in avgust — ko so pogoji za učenje najboljši.",
      },
    ],
    cta: "Pridite kitati k nam v Nin-Ljubač — rezervirajte tečaj za 2025.",
  },

  {
    slug: "kiteboarding-vs-windsurfing-vs-surfanje",
    title: "Kiteboarding vs. windsurfing vs. surfanje: Kateri šport je pravi za tebe?",
    metaDescription: "Kiteboarding ali windsurfing? Primerjava učne krivulje, opreme, stroškov in pogojev. Kateri vodni šport izbrati? Popolna primerjava 2025.",
    keywords: ["kiteboarding ali windsurfing", "kitesurfanje primerjava", "razlika kiteboarding surfanje", "kateri šport izbrati kiteboarding"],
    category: "Nasveti",
    readMinutes: 7,
    publishDate: "2025-03-15",
    intro: "Stojite pred zalijo, veter piha, in razmišljate: kiteboarding, windsurfing ali surf? Vsak šport ima svoje prednosti, idealne pogoje in krivuljo učenja. Tukaj je poštena primerjava, ki vam bo pomagala izbrati pravi šport.",
    sections: [
      {
        heading: "Krivulja učenja: kdo se nauči hitreje?",
        body: "Kiteboarding: strmejša začetna krivulja (6–15 ur do prve vožnje), nato hiter napredek. Windsurfing: postopen začetek, lažji prvi dnevi, toda do samostojnosti 20–30 ur. Surfanje: najtežje za začetnike brez oceana ali stalnih valov. Za Jadransko morje je kiteboarding daleč najprimernejša izbira, saj ne potrebuje valov.",
      },
      {
        heading: "Fizične zahteve",
        body: "Kiteboarding: zmerna fizična zahtevnost, zmaj nosi večino moči. Koordinacija in ravnotežje sta ključna. Windsurfing: potrebna je večja zgornja telesna moč, posebno za napredne manevre. Surfanje: zahteva odlično kondicijo, moč rok in prsnega koša, sposobnost branja valov.",
      },
      {
        heading: "Stroški opreme",
        body: "Kiteboarding: €1750–4100 nova oprema. Windsurfing: €1500–4000 (jadro, jambor, deska, fin). Surfanje: €300–1500 (deska, wetsuit). Kiteboarding in windsurfing sta primerljiva po ceni. Surfanje je na videz cenejše, toda zahteva dostop do plaž z valovi — kar na Jadranu ni samoumevno.",
      },
      {
        heading: "Kakšne pogoje potrebuje vsak šport?",
        body: "Kiteboarding: potrebuje veter (10–35 vozlov), ne valov. Idealen za Jadran — plitke lagune, stalni Maestral. Windsurfing: zahteva veter, dela tudi v valovitem morju. Surfanje: potrebuje valove — Jadran je zanje premirno, razen ob nevihtah. Za slovenskega počitnikarja na Jadranu je kiteboarding daleč najboljša izbira.",
      },
      {
        heading: "Socialni vidik: skupnost in kultura",
        body: "Kiteboarding skupnost je mlada, dinamična in mednarodno povezana. Na vsaki kiteboarding destinaciji boste hitro našli soduhe. Kiteboarding eventi in tekmovanja so dosegljivi za vse — od rekreativnih do amaterskih kitarjev. Windsurfing skupnost je starejša in manjša. Surf kultura je globalna, toda manj lokalno prisotna.",
      },
      {
        heading: "Naš nasvet: za koga je kiteboarding?",
        body: "Kiteboarding je idealen, če: živite ali dopustujete blizu vetrovne vode (Jadran, jezera, morje), imate nekoliko potrpljenja za začetno učenje, iščete šport z visokim adrenalinom in možnostjo hitrega napredka, in cenite svobodo gibanja po vodi brez valov.",
      },
    ],
    cta: "Preizkusite kiteboarding z nami — spoznavni tečaj vam pove vse.",
  },

  {
    slug: "kiteboarding-pocitnice-hrvaška-slovenija",
    title: "Kiteboarding počitnice Hrvaška: Kombiniraj tečaj in dopust v Zadru",
    metaDescription: "Kiteboarding počitnice Hrvaška 2025: kite tečaj + dopust v Zadar-Nin-Ljubač za Slovence. Nastanitev, program, kdaj rezervirati. Kite Šola North.",
    keywords: ["kiteboarding počitnice Hrvaška", "kite camp Hrvaška", "kiteboarding dopust Hrvaška", "kite tečaj dopust"],
    category: "Tečaji",
    readMinutes: 6,
    publishDate: "2025-03-10",
    intro: "Kiteboarding počitnice so fenomen, ki združuje učenje novega športa z odmorom ob morju. Zadar-Nin-Ljubač je za Slovence idealna destinacija — blizu, dostopna z avtom, z odlično kiteboarding infrastrukturo in vsem, kar potrebujete za popoln dopust.",
    sections: [
      {
        heading: "Zakaj Nin-Ljubač za kite dopust?",
        body: "Le 4 ure vožnje iz Ljubljane ali Maribora — brez letenja, brez drage logistike. Tri kiteboarding lokacije, stalni Maestral, plitka voda. Brezplačen parking, lokali na plaži, nastanitev v bližini šole. In po tečaju: Zadar staro mestno jedro, otoki Kornati, naravni park Krka, Plitvice — turistična zakladnica.",
      },
      {
        heading: "Tipičen 7-dnevni kite program",
        body: "Pon–čet: začetni tečaj (4 × 3 ure = 12 ur z inštruktorjem). Pet: prosti kite dan ali zasebne ure za utrditev. Sob–ned: prosti čas — beach dan, izlet v Zadar staro mesto ali na otoke. Skupaj: v enem tednu od nič do samostojnega kiteboarding.",
      },
      {
        heading: "Nastanitev v bližini šole",
        body: "Ponujamo opremljene apartmaje tik ob šoli — kuhinja, kopalnica, spalnica, TV, Wi-Fi. Cena €10–15/osebo ali €70/noč za 3–5 oseb. Za večje skupine ali alternativne nastanitve vam priporočamo kampe v okolici Nin (Camp Zaton, Camp Nin) ali hotele v Zadru.",
      },
      {
        heading: "Za spremljevalce, ki ne kitajo",
        body: "Zadar je bogat z vsebino za vse: kristalno morje in mestne plaže (Kolovare), staro rimsko mestno jedro z znamenitim Morskim orglami, otoki Ugljan in Pašman na dosegu trajekta, naravni park Krka (2 ure), Plitvice (1 ura). Skupina, v kateri kita samo del članov, se bo odlično zabavala.",
      },
      {
        heading: "Skupinska potovanja — popusti in organizacija",
        body: "Za skupine 4+ oseb kontaktirajte nas za skupinsko ceno. Coordinating group timings, nastanitev in program je naša specialnost. Priporočamo rezervacijo vsaj 8–10 tednov vnaprej za julij in avgust.",
      },
      {
        heading: "Kdaj rezervirati za poletno sezono 2025?",
        body: "Julij in avgust sta razprodana zgodaj — pogosto do maja. Junij je odlična alternativa: manj turistov, enaki vetrovi, nižje cene nastanitev. September je skriti dragulj sezone — morje je toplo, gnječe ni, vetrovi odlični. Rezervirajte zgodaj in si zagotovite najboljše termine.",
      },
    ],
    cta: "Rezervirajte kite dopust 2025 v Nin-Ljubač — pišite nam na WhatsApp.",
  },

  {
    slug: "iko-certifikat-kiteboarding-slovenija",
    title: "IKO certifikat kiteboarding: Kaj je, zakaj ga potrebuješ in kako ga dobiš",
    metaDescription: "IKO certifikat kiteboarding 2025: mednarodno priznan, potreben za najem opreme. Kako ga dobiti pri Kite Šola North v Zadar-Nin-Ljubač.",
    keywords: ["IKO certifikat kiteboarding", "kiteboarding licenca", "IKO kite tečaj", "mednarodni kite certifikat"],
    category: "Tečaji",
    readMinutes: 5,
    publishDate: "2025-03-05",
    intro: "Ko se odločite za kiteboarding tečaj, boste pogosto slišali besedo IKO. Kaj to je? Je resnično pomembno? In kaj točno pridobite po opravljenem tečaju? Tukaj je vse, kar morate vedeti o IKO certifikatu.",
    sections: [
      {
        heading: "Kaj je IKO?",
        body: "IKO (International Kiteboarding Organization) je vodilna mednarodna organizacija za certificiranje kiteboarding inštruktorjev in standardizacijo tečajev. Deluje v več kot 80 državah in je globalno priznan standard kakovosti in varnosti. Tečaj pri IKO-certificirani šoli zagotavlja, da sledite preverjenim metodam učenja.",
      },
      {
        heading: "Ravni IKO certifikatov",
        body: "Level 1 (Odkrivanje): osnove, upravljanje zmaja, varnost. Level 2 (Neodvisni kitač): samostojna vožnja v obe smeri, varni vzlet in pristanek. Level 3 (Napredni): triki, jumpi, boosting. Vsak nivo je vpisan v mednarodno bazo — vaš certifikat je dostopen kjerkoli na svetu z vašo IKO identifikacijsko številko.",
      },
      {
        heading: "Zakaj je certifikat nujen?",
        body: "Večina kiteboarding centrov po svetu (in vse resne šole) ne bo izposodila opreme brez dokazila o minimalnem znanju. Nekatere plaže zahtevajo veljavno licenco za vstop v kiteboarding cono. Brez certifikata ste prepuščeni lastni opremi — kar za začetnika ni dobra rešitev.",
      },
      {
        heading: "Kako poteka IKO tečaj pri nas",
        body: "Naš začetni tečaj (4 dni, 12 ur) vključuje vse vsebine za pridobitev IKO Level 2 certifikata. Po zaključku inštruktor oceni vašo neodvisnost (samostojen vzlet, pristajanje, vožnja v obe smeri). Ob uspešnem zaključku vam izda certifikat neposredno — fizično kartico ali digitalni certifikat.",
      },
      {
        heading: "Veljavnost in mednarodno priznanje",
        body: "IKO certifikat je mednarodno priznan in velja za celo življenje — ni veljavnostnega roka. Ko ga enkrat pridobite, ga imate za vedno. V mednarodni bazi ste evidentirani s svojo unikatno IKO številko, ki jo preverijo kjerkoli na svetu.",
      },
      {
        heading: "Kaj po osnovnem certifikatu?",
        body: "Po Level 2 ste neodvisni kitarji — lahko kitajte sami, najamete opremo, vstopite v kite cone. Za napredne tehnike (free style, wakestyle, foil kiteboarding, wave kiteboarding) obstajajo dodatni tečaji in certifikati. Mi vam bomo z veseljem svetovali, kako napredovati.",
      },
    ],
    cta: "Pridobite IKO certifikat z nami — začetni tečaj vključuje vse.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
