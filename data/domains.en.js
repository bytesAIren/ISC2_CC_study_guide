I18N.en.domains = [
  {
    id: "domain-1",
    number: 1,
    title: "Security Principles",
    summary: "Core principles: CIA Triad, governance, risk, policies, and accountability.",
    accent: "#7FA8C9",
    sections: [
      { title: "Core Security Concepts", cards: [
        { title: "CIA Triad", type: "Concept", body: "The CIA Triad is the foundational model of information security: Confidentiality, Integrity, and Availability.", detail: ["Confidentiality prevents unauthorized access or disclosure of information.", "Integrity protects the accuracy, completeness, and trustworthiness of data.", "Availability ensures that systems and data are accessible when needed."], example: "Encryption supports confidentiality; hashes or checksums support integrity; redundancy and backups support availability.", remember: "Data disclosed = confidentiality. Data altered = integrity. Service unavailable = availability." },
        { title: "Non-repudiation", type: "Concept", body: "Non-repudiation prevents a person or entity from denying that they performed a specific action.", detail: ["It relies on mechanisms such as digital signatures, timestamps, reliable logs, and audit trails."], example: "A digitally signed contract can help prove who signed it and when.", remember: "Authentication proves who you are; non-repudiation helps prove that you performed a specific action." },
        { title: "Accountability", type: "Concept", body: "Accountability means that actions can be traced back to an identifiable subject.", detail: ["It requires individual accounts, logging, and audit trails.", "Shared accounts significantly weaken accountability."], example: "A personal account allows an organization to determine who approved a change.", remember: "Shared account = difficult attribution of responsibility." }
      ]},
      { title: "Governance and Risk", cards: [
        { title: "Governance", type: "Concept", body: "Governance defines direction, responsibility, and oversight for security at the organizational level.", detail: ["It includes policies, roles, compliance, risk management, and alignment with business objectives."], example: "Management approves an organization-wide security policy.", remember: "For ISC2, security is not only technical: it is also risk management, governance, and responsibility." },
        { title: "Threat, Vulnerability, Risk", type: "Detail", body: "Threat, vulnerability, and risk are different but connected concepts.", detail: ["Threat: a potential cause of harm.", "Vulnerability: a weakness that can be exploited.", "Risk: the likelihood and impact of a threat exploiting a vulnerability."], example: "Phishing = threat; untrained users = vulnerability; credential theft = risk.", remember: "Risk arises when a threat can exploit a vulnerability." },
        { title: "Risk Treatment", type: "Detail", body: "The main risk treatment strategies are avoid, mitigate, transfer, and accept.", detail: ["Avoid: eliminate the risky activity.", "Mitigate: reduce likelihood or impact.", "Transfer: shift part of the risk, for example through insurance or outsourcing.", "Accept: knowingly accept the residual risk."], example: "Deploying MFA to reduce credential theft risk is mitigation.", remember: "Risk rarely disappears completely; it is usually reduced to an acceptable level." }
      ]},
      { title: "Policies and Compliance", cards: [
        { title: "Policy, Standard, Procedure, Guideline", type: "Detail", body: "These documents serve different functions in security governance.", detail: ["Policy: what must be done and why.", "Standard: a mandatory and measurable requirement.", "Procedure: operational steps for how to perform a task.", "Guideline: recommended practice, usually not mandatory."], example: "Policy: protect credentials. Standard: minimum 14-character passwords. Procedure: how to reset a password.", remember: "Policy = what/why. Standard = requirement. Procedure = how. Guideline = recommendation." }
      ]},
      { title: "Security Awareness", cards: [
        { title: "Human Factor", type: "Concept", body: "Security awareness reduces risks related to human behavior.", detail: ["It includes phishing, passwords, data handling, incident reporting, and acceptable use."], example: "A user reports a suspicious email instead of clicking the link.", remember: "Training is an administrative control." }
      ]}
    ]
  },
  {
    id: "domain-2", number: 2, title: "Incident Response, Business Continuity and Disaster Recovery", summary: "Incident handling, business continuity, disaster recovery, RTO/RPO, and testing.", accent: "#A8C5B0",
    sections: [
      { title: "Incident Response Fundamentals", cards: [
        { title: "Event vs Incident", type: "Concept", body: "An event is any observable occurrence; an incident is an event that threatens or harms confidentiality, integrity, or availability.", detail: ["Not every event becomes an incident.", "Every incident begins as a detected or reported event."], example: "A failed login is an event; many failed logins followed by suspicious successful access may be an incident.", remember: "First classify: normal event or security incident?" },
        { title: "Incident Response Lifecycle", type: "Detail", body: "Incident response is a structured process for handling security incidents.", detail: ["Preparation", "Detection and analysis", "Containment", "Eradication", "Recovery", "Lessons learned"], example: "Malware is detected, the host is isolated, malware is removed, systems are restored, and procedures are updated.", remember: "Containment normally comes before eradication." }
      ]},
      { title: "Business Continuity", cards: [
        { title: "Business Continuity Planning", type: "Concept", body: "Business continuity keeps critical business functions operating during a disruption.", detail: ["It is not only about IT: it includes people, processes, facilities, suppliers, and communications."], example: "Customer service continues from an alternate site after the primary office becomes unavailable.", remember: "BCP asks: how does the business continue?" },
        { title: "Business Impact Analysis", type: "Detail", body: "A Business Impact Analysis identifies critical processes and the impact of disruption.", detail: ["It helps define recovery priorities, dependencies, and maximum tolerable downtime."], example: "Customer ordering and payment systems may have higher priority than non-critical internal applications.", remember: "Understand the business impact before setting recovery priorities." }
      ]},
      { title: "Disaster Recovery", cards: [
        { title: "Disaster Recovery Planning", type: "Concept", body: "Disaster recovery focuses on restoring IT systems and data after a major disruptive event.", detail: ["It includes backups, alternate sites, restore procedures, testing, and communications."], example: "Restoring servers and databases after fire damage or ransomware.", remember: "DRP asks: how do we restore IT systems and data?" },
        { title: "RTO and RPO", type: "Detail", body: "RTO and RPO are key recovery metrics.", detail: ["RTO: maximum acceptable time to restore a service.", "RPO: maximum acceptable data loss measured in time."], example: "RTO of 4 hours = the service must be restored within 4 hours. RPO of 15 minutes = data loss must not exceed 15 minutes.", remember: "RTO = time to recover. RPO = data you can afford to lose." }
      ]},
      { title: "Resilience and Testing", cards: [
        { title: "Testing", type: "Concept", body: "Plans must be tested before a real crisis occurs.", detail: ["Tabletop exercise", "Simulation", "Walkthrough", "Full operational test"], example: "A ransomware tabletop exercise validates decisions and communication without shutting down real systems.", remember: "An untested plan is only a document, not a capability." }
      ]}
    ]
  },
  {
    id: "domain-3", number: 3, title: "Access Control Concepts", summary: "Identity, authentication, authorization, access control models, and least privilege.", accent: "#D7B49E",
    sections: [
      { title: "Identity and AAA", cards: [
        { title: "Identification, Authentication, Authorization, Accounting", type: "Concept", body: "Access control starts by distinguishing who you claim to be, how you prove it, what you can access, and what is recorded.", detail: ["Identification: claiming an identity.", "Authentication: verifying that identity.", "Authorization: determining permissions.", "Accounting: recording activity."], example: "Username, password/MFA, folder permissions, and access logs.", remember: "Claim, prove, access, record." }
      ]},
      { title: "Authentication Factors", cards: [
        { title: "Factors and MFA", type: "Detail", body: "Authentication factors are based on something you know, something you have, or something you are.", detail: ["Something you know: password or PIN.", "Something you have: token, smart card, or phone.", "Something you are: biometric characteristic."], example: "Password + authenticator app = two different factor types.", remember: "Password + PIN is not strong MFA because both are knowledge factors." }
      ]},
      { title: "Access Control Models", cards: [
        { title: "DAC, MAC, RBAC, ABAC", type: "Detail", body: "Access control models assign permissions using different decision logic.", detail: ["DAC: the resource owner decides access.", "MAC: mandatory labels and classifications control access.", "RBAC: permissions are based on roles.", "ABAC: decisions are based on attributes and context."], example: "RBAC fits business roles; ABAC fits decisions involving time, device, location, and data sensitivity.", remember: "Job function = RBAC. Contextual conditions = ABAC." }
      ]},
      { title: "Account Lifecycle", cards: [
        { title: "Provisioning, Deprovisioning, Least Privilege", type: "Concept", body: "Accounts must be created, modified, and removed according to actual business need.", detail: ["Provisioning: granting access.", "Deprovisioning: removing access.", "Least privilege: only the permissions required.", "Separation of duties: splitting critical tasks.", "Privilege creep: permissions accumulate over time."], example: "An employee changes role but keeps old access: this is privilege creep.", remember: "Do not blindly copy existing user profiles. Use standard roles and periodic access reviews." }
      ]}
    ]
  },
  {
    id: "domain-4", number: 4, title: "Network Security", summary: "Networking basics, devices, segmentation, wireless security, threats, and monitoring.", accent: "#B9A7D1",
    sections: [
      { title: "Networking Fundamentals", cards: [
        { title: "LAN, WAN, IP, and Ports", type: "Concept", body: "Networking fundamentals explain how systems communicate and how services are reached.", detail: ["LAN: local area network within a limited area.", "WAN: wide area network connecting distant locations.", "IP address: identifies a host on a network.", "Port: identifies a service or application."], example: "HTTPS commonly uses TCP port 443.", remember: "IP = where. Port = which service." },
        { title: "Common Protocols", type: "Detail", body: "Protocols define rules for communication between systems.", detail: ["HTTP/HTTPS: web traffic.", "DNS: name resolution.", "SMTP: email sending.", "SSH: secure remote administration.", "FTP: file transfer, not secure by default."], example: "DNS translates a domain name into an IP address.", remember: "Prefer secure protocols when transmitting sensitive data." }
      ]},
      { title: "Network Devices", cards: [
        { title: "Routers, Switches, Firewalls", type: "Concept", body: "Network devices move, filter, or inspect traffic.", detail: ["Router: forwards traffic between networks.", "Switch: connects devices within a local network.", "Firewall: filters traffic based on rules."], example: "A firewall allows HTTPS to a web server while blocking unauthorized inbound traffic.", remember: "Router = between networks. Switch = inside LAN. Firewall = allow/block." },
        { title: "IDS, IPS, Proxy", type: "Detail", body: "Detection and intermediary systems support network protection.", detail: ["IDS detects suspicious activity and alerts.", "IPS can actively block suspicious traffic.", "Proxy acts as an intermediary between client and destination."], example: "A web proxy can block access to known malicious websites.", remember: "IDS = detect. IPS = prevent/block." }
      ]},
      { title: "Secure Network Design", cards: [
        { title: "Segmentation, DMZ, VLAN", type: "Concept", body: "Secure network design separates systems to reduce exposure and limit lateral movement.", detail: ["Segmentation divides the network into smaller security zones.", "DMZ hosts public-facing systems separated from the internal network.", "VLAN logically separates networks on shared switching infrastructure."], example: "Guest Wi-Fi should be separated from internal business systems.", remember: "Segmentation limits blast radius." }
      ]},
      { title: "Wireless Security", cards: [
        { title: "Wi-Fi Controls and Rogue Access Points", type: "Concept", body: "Wireless networks require strong encryption and access control because radio signals extend beyond physical boundaries.", detail: ["Use strong protocols such as WPA2 or WPA3.", "Avoid obsolete or weak encryption.", "Monitor for rogue access points."], example: "A rogue access point imitates corporate Wi-Fi to steal credentials.", remember: "Wireless security must assume that the signal is observable outside the building." }
      ]},
      { title: "Network Threats", cards: [
        { title: "DoS, Spoofing, MITM, Sniffing", type: "Detail", body: "Common network threats target availability, trust, or confidentiality of communications.", detail: ["DoS/DDoS attempts to make a service unavailable.", "Spoofing disguises identity or source.", "Man-in-the-Middle intercepts or alters communication.", "Sniffing captures network traffic."], example: "Encryption helps protect data even if traffic is intercepted.", remember: "Identify what the attack affects: availability, identity/trust, or confidentiality." }
      ]},
      { title: "Monitoring and Protection", cards: [
        { title: "Logs, SIEM, and Continuous Monitoring", type: "Concept", body: "Network security requires prevention, detection, and response.", detail: ["Firewalls and segmentation help prevent unauthorized access.", "IDS/IPS and monitoring help detect suspicious activity.", "SIEM tools correlate events across multiple sources."], example: "A SIEM correlates firewall logs and authentication logs to detect suspicious behavior.", remember: "Security operations depend on usable, protected, and reviewed logs." }
      ]}
    ]
  },
  {
    id: "domain-5", number: 5, title: "Security Operations", summary: "Daily security operations, logging, assets, data handling, physical security, and operational controls.", accent: "#D8B7C3",
    sections: [
      { title: "Operational Security", cards: [
        { title: "Daily Security Operations", type: "Concept", body: "Security operations are the daily activities that keep systems protected, monitored, and maintained.", detail: ["Monitoring", "Alert handling", "Vulnerability management", "Patching", "Backups", "Change control", "Documentation"], example: "A security team reviews alerts, applies critical patches, and validates backup status.", remember: "Security is not only designed; it must be operated continuously." }
      ]},
      { title: "Logging and Monitoring", cards: [
        { title: "Logs and Evidence", type: "Concept", body: "Logs record system, user, and administrative activity. Monitoring reviews events to identify issues.", detail: ["Authentication logs", "Firewall logs", "System logs", "Application logs", "Administrative activity logs"], example: "Multiple failed logins followed by a successful login from an unusual location may indicate compromise.", remember: "Logs are useful only if they are collected, protected, reviewed, and retained appropriately." }
      ]},
      { title: "Asset and Data Management", cards: [
        { title: "Assets, Classification, Retention, Disposal", type: "Detail", body: "Organizations must know what they own and how sensitive data must be handled.", detail: ["Asset management identifies systems, devices, software, and data.", "Data classification defines sensitivity and handling requirements.", "Retention defines how long data is kept.", "Secure disposal prevents unauthorized recovery."], example: "Secure wiping or destruction of drives before disposal protects confidential data.", remember: "More sensitive data requires stronger controls." }
      ]},
      { title: "Physical Security", cards: [
        { title: "Physical and Environmental Controls", type: "Concept", body: "Physical security protects facilities, people, equipment, and infrastructure.", detail: ["Locks", "Badges", "Guards", "CCTV", "Mantraps", "Fences and lighting", "Fire suppression", "HVAC and environmental monitoring"], example: "A locked server room prevents unauthorized physical access to critical systems.", remember: "Physical access can defeat many logical controls." }
      ]},
      { title: "Operational Best Practices", cards: [
        { title: "Change, Patch, and Backup Management", type: "Detail", body: "Operational controls reduce risk by making routine activities controlled and repeatable.", detail: ["Change management: review, approve, test, and document changes.", "Patch management: address known vulnerabilities in a controlled way.", "Backup management: create, protect, monitor, and test backups."], example: "A firewall rule change is reviewed and approved before implementation.", remember: "A backup that cannot be restored is not useful." }
      ]}
    ]
  }
];
