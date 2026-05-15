I18N.it.domains = [
  {
    id: "domain-1",
    number: 1,
    title: "Security Principles",
    summary: "Principi fondamentali: CIA Triad, governance, rischio, policy e accountability.",
    accent: "#7FA8C9",
    sections: [
      { title: "Core Security Concepts", cards: [
        { title: "CIA Triad", type: "Concept", body: "La CIA Triad e il modello base della sicurezza informatica: Confidentiality, Integrity, Availability.", detail: ["Confidentiality impedisce l'accesso non autorizzato alle informazioni.", "Integrity protegge accuratezza e completezza dei dati.", "Availability assicura che sistemi e dati siano disponibili quando servono."], example: "Cifratura per la confidentiality; hash o checksum per integrity; ridondanza e backup per availability.", remember: "Dati letti = confidentiality. Dati alterati = integrity. Servizio non disponibile = availability." },
        { title: "Non-repudiation", type: "Concept", body: "La non-repudiation impedisce a una persona o entita di negare un'azione compiuta.", detail: ["Si basa su firme digitali, timestamp, log affidabili e audit trail."], example: "Un contratto firmato digitalmente permette di dimostrare chi lo ha firmato e quando.", remember: "Authentication prova chi sei; non-repudiation aiuta a provare che hai fatto una specifica azione." },
        { title: "Accountability", type: "Concept", body: "Accountability significa poter collegare un'azione a un soggetto identificabile.", detail: ["Richiede account individuali, log e audit trail.", "Gli account condivisi riducono fortemente l'accountability."], example: "Un account personale permette di sapere chi ha approvato una modifica.", remember: "Account condiviso = responsabilita difficile da attribuire." }
      ]},
      { title: "Governance and Risk", cards: [
        { title: "Governance", type: "Concept", body: "La governance definisce direzione, responsabilita e controllo della sicurezza a livello organizzativo.", detail: ["Include policy, ruoli, compliance, gestione del rischio e allineamento agli obiettivi aziendali."], example: "Il management approva una security policy valida per tutta l'organizzazione.", remember: "Per ISC2 la sicurezza non e solo tecnica: e gestione del rischio e responsabilita." },
        { title: "Threat, Vulnerability, Risk", type: "Detail", body: "Threat, vulnerability e risk sono concetti distinti ma collegati.", detail: ["Threat: potenziale causa di danno.", "Vulnerability: debolezza sfruttabile.", "Risk: probabilita e impatto che una minaccia sfrutti una vulnerabilita."], example: "Phishing = threat; utenti non formati = vulnerability; furto credenziali = risk.", remember: "Risk nasce dall'incontro tra threat e vulnerability." },
        { title: "Risk Treatment", type: "Detail", body: "Le strategie principali sono avoid, mitigate, transfer, accept.", detail: ["Avoid elimina l'attivita rischiosa.", "Mitigate riduce probabilita o impatto.", "Transfer sposta parte del rischio, ad esempio con assicurazione.", "Accept accetta consapevolmente il rischio residuo."], example: "Installare MFA per ridurre furto credenziali e mitigation.", remember: "Il rischio raramente sparisce: spesso viene ridotto a un livello accettabile." }
      ]},
      { title: "Policies and Compliance", cards: [
        { title: "Policy, Standard, Procedure, Guideline", type: "Detail", body: "Questi documenti hanno funzioni diverse nella governance della sicurezza.", detail: ["Policy: cosa deve essere fatto e perche.", "Standard: requisito obbligatorio e misurabile.", "Procedure: passi operativi.", "Guideline: raccomandazione."], example: "Policy: proteggere le credenziali. Standard: password minime di 14 caratteri. Procedure: come resettare una password.", remember: "Policy = cosa/perche. Standard = requisito. Procedure = come. Guideline = consiglio." }
      ]},
      { title: "Security Awareness", cards: [
        { title: "Human Factor", type: "Concept", body: "La security awareness riduce il rischio legato al comportamento umano.", detail: ["Include phishing, password, gestione dati, segnalazione incidenti e uso accettabile."], example: "Un utente segnala una mail sospetta invece di cliccare sul link.", remember: "La formazione e un controllo amministrativo." }
      ]}
    ]
  },
  {
    id: "domain-2", number: 2, title: "Incident Response, Business Continuity and Disaster Recovery", summary: "Gestione incidenti, continuita operativa, disaster recovery, RTO/RPO e test.", accent: "#A8C5B0",
    sections: [
      { title: "Incident Response Fundamentals", cards: [
        { title: "Event vs Incident", type: "Concept", body: "Un event e un fatto osservabile; un incident e un event che minaccia o danneggia CIA.", detail: ["Non ogni event diventa incident.", "Ogni incident inizia come event rilevato o segnalato."], example: "Un failed login e un event; molti failed login seguiti da successo sospetto possono essere incident.", remember: "Prima classifica: evento normale o incidente di sicurezza?" },
        { title: "Incident Response Lifecycle", type: "Detail", body: "Incident response e un processo strutturato per gestire incidenti.", detail: ["Preparation", "Detection and analysis", "Containment", "Eradication", "Recovery", "Lessons learned"], example: "Malware rilevato, host isolato, malware rimosso, sistemi ripristinati, procedure aggiornate.", remember: "Containment di norma viene prima di eradication." }
      ]},
      { title: "Business Continuity", cards: [
        { title: "Business Continuity Planning", type: "Concept", body: "La business continuity mantiene operative le funzioni critiche durante una disruption.", detail: ["Non riguarda solo IT: include persone, processi, sedi, fornitori e comunicazioni."], example: "Il customer service continua da una sede alternativa dopo indisponibilita della sede principale.", remember: "BCP chiede: come continua il business?" },
        { title: "Business Impact Analysis", type: "Detail", body: "La BIA identifica processi critici e impatti della disruption.", detail: ["Aiuta a stabilire priorita di ripristino, dipendenze e massimo downtime tollerabile."], example: "Ordini clienti e sistemi di pagamento possono avere priorita piu alta di applicazioni interne non critiche.", remember: "Prima capisci l'impatto, poi definisci le priorita." }
      ]},
      { title: "Disaster Recovery", cards: [
        { title: "Disaster Recovery Planning", type: "Concept", body: "Il disaster recovery si concentra sul ripristino di sistemi IT e dati dopo un evento grave.", detail: ["Include backup, siti alternativi, procedure di restore, test e comunicazioni."], example: "Ripristino di server e database dopo un incendio o ransomware.", remember: "DRP chiede: come ripristiniamo IT e dati?" },
        { title: "RTO and RPO", type: "Detail", body: "RTO e RPO sono metriche fondamentali di recovery.", detail: ["RTO: tempo massimo accettabile per ripristinare un servizio.", "RPO: perdita dati massima accettabile misurata nel tempo."], example: "RTO 4 ore = servizio ripristinato entro 4 ore. RPO 15 minuti = perdita dati massima 15 minuti.", remember: "RTO = tempo per recuperare. RPO = dati che puoi perdere." }
      ]},
      { title: "Resilience and Testing", cards: [
        { title: "Testing", type: "Concept", body: "I piani devono essere testati prima di una crisi reale.", detail: ["Tabletop exercise", "Simulation", "Walkthrough", "Full operational test"], example: "Un tabletop su ransomware verifica decisioni e comunicazioni senza spegnere sistemi reali.", remember: "Un piano non testato e solo un documento." }
      ]}
    ]
  },
  {
    id: "domain-3", number: 3, title: "Access Control Concepts", summary: "Identita, autenticazione, autorizzazione, modelli di controllo accessi e least privilege.", accent: "#D7B49E",
    sections: [
      { title: "Identity and AAA", cards: [
        { title: "Identification, Authentication, Authorization, Accounting", type: "Concept", body: "Il controllo accessi parte dalla distinzione fra chi dichiari di essere, come lo provi, cosa puoi fare e cosa viene registrato.", detail: ["Identification: dichiarare identita.", "Authentication: verificare identita.", "Authorization: determinare permessi.", "Accounting: registrare attivita."], example: "Username, password/MFA, permessi su cartelle, log di accesso.", remember: "Claim, prove, access, record." }
      ]},
      { title: "Authentication Factors", cards: [
        { title: "Factors and MFA", type: "Detail", body: "I fattori sono qualcosa che sai, hai o sei.", detail: ["Something you know: password, PIN.", "Something you have: token, smart card, phone.", "Something you are: biometria."], example: "Password + app authenticator = due fattori diversi.", remember: "Password + PIN non e vero MFA forte: entrambi sono knowledge factor." }
      ]},
      { title: "Access Control Models", cards: [
        { title: "DAC, MAC, RBAC, ABAC", type: "Detail", body: "I modelli di controllo accessi assegnano permessi con logiche diverse.", detail: ["DAC: il proprietario decide l'accesso.", "MAC: label e classificazioni obbligatorie.", "RBAC: permessi basati su ruoli.", "ABAC: decisioni basate su attributi e contesto."], example: "RBAC per ruoli aziendali; ABAC se contano orario, device, location e sensibilita del dato.", remember: "Job function = RBAC. Condizioni contestuali = ABAC." }
      ]},
      { title: "Account Lifecycle", cards: [
        { title: "Provisioning, Deprovisioning, Least Privilege", type: "Concept", body: "Gli account devono essere creati, modificati e rimossi in base al bisogno reale.", detail: ["Provisioning: concessione accesso.", "Deprovisioning: rimozione accesso.", "Least privilege: solo i permessi necessari.", "Separation of duties: compiti critici divisi.", "Privilege creep: accumulo di permessi nel tempo."], example: "Un dipendente cambia ruolo ma mantiene vecchi accessi: privilege creep.", remember: "Non copiare profili utente esistenti: usa ruoli standard e review periodiche." }
      ]}
    ]
  },
  {
    id: "domain-4", number: 4, title: "Network Security", summary: "Fondamenti di rete, dispositivi, segmentazione, wireless, minacce e monitoraggio.", accent: "#C9C0DF",
    sections: [
      { title: "Networking Fundamentals", cards: [
        { title: "LAN, WAN, IP, Ports and Protocols", type: "Concept", body: "Le reti collegano dispositivi e servizi tramite indirizzi, porte e protocolli.", detail: ["LAN: rete locale.", "WAN: reti tra sedi distanti.", "IP: identifica host/rete.", "Port: identifica servizio.", "Protocols: regole di comunicazione."], example: "HTTPS usa comunemente TCP 443; DNS risolve nomi in indirizzi IP.", remember: "IP = dove. Porta = quale servizio." }
      ]},
      { title: "Network Devices", cards: [
        { title: "Router, Switch, Firewall, IDS/IPS, Proxy", type: "Detail", body: "Ogni dispositivo ha una funzione distinta nella rete.", detail: ["Router: inoltra traffico tra reti.", "Switch: collega dispositivi nella LAN.", "Firewall: filtra traffico.", "IDS: rileva e segnala.", "IPS: puo bloccare.", "Proxy: intermediario fra client e destinazione."], example: "Un firewall permette HTTPS al web server ma blocca traffico inbound non autorizzato.", remember: "IDS detect; IPS prevent." }
      ]},
      { title: "Secure Network Design", cards: [
        { title: "Segmentation, DMZ, VLAN", type: "Concept", body: "Il design sicuro limita esposizione e movimento laterale.", detail: ["Segmentation divide la rete in zone.", "DMZ ospita sistemi pubblici separati dalla LAN interna.", "VLAN separa logicamente reti su infrastruttura condivisa."], example: "Guest Wi-Fi separato da sistemi interni; web server pubblico in DMZ.", remember: "Segmentazione = blast radius minore." }
      ]},
      { title: "Wireless Security", cards: [
        { title: "Wireless Controls", type: "Detail", body: "Il wireless richiede cifratura e controllo accessi perche il segnale supera i confini fisici.", detail: ["Usare WPA2/WPA3.", "Evitare protocolli obsoleti.", "Monitorare rogue access point."], example: "Un rogue access point imita la rete aziendale per catturare credenziali.", remember: "Wi-Fi non protetto espone traffico e accessi." }
      ]},
      { title: "Network Threats", cards: [
        { title: "DoS, Spoofing, MITM, Sniffing", type: "Detail", body: "Le minacce di rete colpiscono disponibilita, identita e riservatezza del traffico.", detail: ["DoS/DDoS: rendere indisponibile un servizio.", "Spoofing: falsificare identita o sorgente.", "MITM: intercettare o alterare comunicazioni.", "Sniffing: catturare traffico."], example: "Un attacker intercetta credenziali su rete non cifrata.", remember: "La cifratura protegge i dati anche se il traffico viene intercettato." }
      ]},
      { title: "Monitoring and Protection", cards: [
        { title: "Logging, Monitoring, SIEM", type: "Concept", body: "La sicurezza di rete combina prevenzione, rilevamento e risposta.", detail: ["Firewall, IDS/IPS, log, SIEM, packet analysis, protocolli sicuri e monitoring continuo."], example: "Un SIEM correla log firewall e autenticazione per rilevare attivita sospette.", remember: "Quello che non monitori difficilmente lo rilevi." }
      ]}
    ]
  },
  {
    id: "domain-5", number: 5, title: "Security Operations", summary: "Operazioni quotidiane: logging, asset, data handling, physical security, patching e backup.", accent: "#B9C9D8",
    sections: [
      { title: "Operational Security", cards: [
        { title: "Daily Security Operations", type: "Concept", body: "Security operations sono le attivita quotidiane che mantengono sistemi protetti e monitorati.", detail: ["Monitoring", "Alert handling", "Vulnerability management", "Patching", "Backups", "Change control", "Documentation"], example: "Verifica alert, applicazione patch critiche, controllo backup e aggiornamento documentazione.", remember: "La sicurezza non e solo progetto: va gestita ogni giorno." }
      ]},
      { title: "Logging and Monitoring", cards: [
        { title: "Logs as Evidence", type: "Detail", body: "I log registrano attivita di sistema e utente; il monitoring identifica anomalie.", detail: ["Authentication logs", "Firewall logs", "System logs", "Application logs", "Administrative actions"], example: "Molti failed login seguiti da successo da IP insolito possono indicare compromissione.", remember: "I log servono solo se raccolti, protetti, rivisti e conservati." }
      ]},
      { title: "Asset and Data Management", cards: [
        { title: "Assets, Classification, Retention, Disposal", type: "Concept", body: "Devi sapere cosa possiedi, quanto e sensibile e come gestirlo lungo il ciclo di vita.", detail: ["Asset inventory identifica cosa proteggere.", "Data classification guida i controlli.", "Retention definisce quanto conservare.", "Disposal impedisce recupero non autorizzato."], example: "Distruzione sicura di hard drive prima dello smaltimento.", remember: "Dati piu sensibili richiedono controlli piu forti." }
      ]},
      { title: "Physical Security", cards: [
        { title: "Physical Controls", type: "Detail", body: "La sicurezza fisica protegge persone, sedi, equipment e infrastrutture.", detail: ["Locks", "Badges", "Guards", "CCTV", "Mantraps", "Fire suppression", "HVAC", "Environmental monitoring"], example: "Server room chiusa a chiave per impedire accesso fisico non autorizzato.", remember: "L'accesso fisico puo aggirare molti controlli logici." }
      ]},
      { title: "Operational Best Practices", cards: [
        { title: "Change, Patch and Backup Management", type: "Concept", body: "Le pratiche operative riducono errori, vulnerabilita e indisponibilita.", detail: ["Change management: review, approvazione, test e documentazione.", "Patch management: aggiornamenti controllati in base al rischio.", "Backup management: copie testate, protette e recuperabili."], example: "Una nuova regola firewall viene approvata prima dell'implementazione.", remember: "Un backup non testato non e una garanzia." }
      ]}
    ]
  }
];
