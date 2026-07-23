export type Language = 'ro' | 'en';

export const translations = {
  ro: {
    nav: {
      about: 'Despre Noi',
      projects: 'Proiecte',
      scholarships: 'BEST Scholarships',
      partners: 'Parteneri',
      report: 'Raport de Activitate',
      contact: 'Contact',
    },
    partners: {
      strategic: 'Parteneri Strategici',
      annual: 'Parteneri Anuali',
    },
    departments: {
      title: 'Departamentele noastre',
      pr: {
        name: 'Public Relations (PR)',
        desc: 'Gestionăm imaginea publică, comunicarea pe social media și relația cu presa.'
      },
      hr: {
        name: 'Human Resources (HR)',
        desc: 'Ne ocupăm de recrutarea și dezvoltarea membrilor, menținând motivația și spiritul BEST.'
      },
      it: {
        name: 'Information Technology (IT)',
        desc: 'Dezvoltăm și menținem infrastructura digitală, site-urile și soluțiile computaționale.'
      },
      fr: {
        name: 'Fundraising (FR)',
        desc: 'Construim punți cu mediul corporate și asigurăm resursele necesare proiectelor noastre.'
      }
    },
    hero: {
      title: 'Dezvoltăm studenții din Iași din anul 2000',
      subtitle: 'Board of European Students of Technology - Grupul Local Iași',
      cta: 'Alătură-te nouă',
    },
    board: {
      title: 'Consiliul de Conducere',
      role: {
        president: 'Președinte',
        tresurer: 'Trezorier',
        secretary: 'Secretar General',
      },
      members: 'Membrii Board-ului',
      gallery: 'Memories',
    },
    about: {
      title: 'Povestea noastră',
      historyTitle: 'Istoric BEST Iași',
      historyText: 'Fondat în 1995, Grupul Local BEST Iași a fost printre primele organizații studențești din Universitatea Tehnică "Gheorghe Asachi". De-a lungul deceniilor, am evoluat dintr-un grup mic de entuziaști într-o comunitate solidă care conectează studenții ieșeni cu Europa.',
      boardHistoryTitle: 'Cursuri și evenimente',
      boardHistoryText: 'Prin rețeaua noastră europeană, oferim studenților oportunitatea unică de a participa la cursuri academice și evenimente internaționale în peste 30 de țări. Facilităm schimbul cultural, dezvoltarea abilităților tehnice și personale, trimițând anual tineri ieșeni să exploreze Europa, să învețe de la experți și să își extindă orizonturile profesionale.',
    },
    projects: {
      title: 'Proiectele noastre',
      courses: {
        name: 'Cursuri BEST',
        desc: 'Programe educaționale sezoniere care aduc studenți din toată Europa în Iași pentru schimb de cunoștințe tehnice și culturale.'
      },
      symposium: {
        name: 'BEST Iași Symposium',
        desc: 'Un eveniment academic de elită unde studenții dezbat teme actuale de inginerie alături de cadre didactice și companii.'
      },
      proveit: {
        name: 'Prove it',
        desc: 'O celebrare anuală a succesului, unde premiem partenerii, membrii și susținătorii care fac misiunea noastră posibilă.'
      }
    },
    donationform: {
      title: 'Redirecționează 3,5% din impozitul pe venit',
      desc: 'Lucrezi în România? Dacă plătești impozit pe venit, poți direcționa 3,5% din acesta către cauza noastră—cu cost zero pentru tine. Dacă nu alegi o organizație, banii rămân la stat. Descarcă Formularul 230 precompletat, semnează-l și implică-te!',
      apply: 'Vezi detalii',
    },
    scholarships: {
      title: 'BEST Scholarships',
      description: 'Susținem excelența academică și implicarea activă în comunitatea studențească prin programe de burse dedicate studenților din cadrul Universității Tehnice "Gheorghe Asachi" din Iași.',
      inwork: 'In acest moment, programul BEST Scholarships este in pregătire! Urmărește-ne pe social-media pentru a fi la curent cu toate update-urile!',
    },
    report: {
      title: 'Raport de Activitate 2026',
      description: 'O analiză detaliată a impactului nostru în ultimul an: evenimente, parteneriate și creșterea comunității.',
      download: 'Descarcă PDF',
      fullTitle: 'Raportul Anual de Activitate',
      intro: 'Fiecare an aduce noi provocări și succese pentru BEST Iași. În 2026, am reușit să ne extindem impactul, să organizăm evenimente de anvergură și să oferim oportunități de dezvoltare de neegalat pentru studenți.',
      statsTitle: 'Performanța în Cifre',
      stats: [
        { value: '12+', label: 'Evenimente organizate' },
        { value: '2500+', label: 'Studenți beneficiari' },
        { value: '80+', label: 'Membri activi' },
        { value: '30+', label: 'Companii partenere' }
      ],
      deptReportsTitle: 'Raportul Departamentelor',
      deptReports: [
        { name: 'Public Relations', text: 'Am crescut prezența noastră online cu peste 40% pe Instagram și LinkedIn, promovând oportunitățile BEST către mii de studenți și parteneri din comunitatea locală și internațională.' },
        { name: 'Human Resources', text: 'Am organizat 2 campanii majore de recrutare, integrând cu succes 35 de noi membri, și am livrat peste 15 traininguri de soft skills, comunicare și leadership.' },
        { name: 'Information Technology', text: 'Am dezvoltat platforme interne pentru managementul proiectelor și am actualizat portalurile web pentru evenimente, optimizând viteza și securitatea site-urilor noastre.' },
        { name: 'Fundraising', text: 'Am asigurat suport financiar și logistic din partea a peste 25 de parteneri comerciali, extinzând bugetele de proiecte cu 20% față de anul precedent.' }
      ]
    },
    partnersStrategic: {
      title: 'Parteneri Strategici',
      intro: 'Partenerii strategici sunt companii de top care susțin misiunea BEST Iași pe termen lung. Aceștia sunt direct implicați în formarea viitoarei generații de profesioniști din tehnologie.',
      benefitsTitle: 'Beneficiile unui Parteneriat Strategic',
      benefits: [
        'Prezență constantă și brand de angajator (Employer Branding) prioritar pe tot parcursul anului universitar.',
        'Acces direct la cei mai activi și performanți studenți prin training-uri exclusive și vizite la sediu.',
        'Poziționare premium pe toate materialele promoționale ale asociației, online și fizic.',
        'Posibilitatea de a propune teme de proiect și studii de caz pentru evenimentele noastre academice.'
      ],
      currentTitle: 'Partenerii Noștri Strategici',
      ctaTitle: 'Devino Partener Strategic',
      ctaText: 'Vrei să colaborezi cu BEST Iași și să ai acces direct la tinerii ingineri din Iași? Contactează departamentul nostru de Relații Externe pentru a discuta despre o colaborare personalizată.',
      ctaButton: 'Contactează-ne'
    },
    partnersAnnual: {
      title: 'Parteneri Anuali',
      intro: 'Partenerii anuali ne sprijină în realizarea proiectelor noastre de sezon, asigurând resursele logistice și expertiza tehnică necesară pentru evenimente de înaltă calitate.',
      packagesTitle: 'Pachete de Colaborare',
      packages: [
        { name: 'Gold Partner', desc: 'Vizibilitate maximă la un anumit eveniment, prezentare dedicată în cadrul deschiderii, stand promoțional și interviuri simulate.' },
        { name: 'Silver Partner', desc: 'Prezență promoțională pe materialele evenimentului, logo pe site și posibilitatea de a distribui materiale informative.' },
        { name: 'Bronze Partner', desc: 'Mențiune în cadrul comunicatelor de presă, logo pe panoul oficial al partenerilor și promovare în broșura evenimentului.' }
      ],
      currentTitle: 'Companii Partnere în 2026',
      testimonialsTitle: 'Ce spun partenerii noștri',
      testimonials: [
        { quote: 'Colaborarea cu BEST Iași ne oferă oportunitatea de a cunoaște studenți extrem de motivați și pregătiți să facă pasul spre mediul profesional.', author: 'Andreea Marin', company: 'HR Manager, TechCorp' },
        { quote: 'Am găsit în BEST Iași o echipă de studenți foarte bine organizați, care tratează fiecare parteneriat cu o seriozitate și un profesionalism rar întâlnite.', author: 'Mihai Popescu', company: 'Software Architect, InnoSoft' }
      ]
    },
    impact: {
      title: 'Piloni de Activitate',
      subtitle: 'Creăm valoare pentru universitate, studenți și parteneri.',
      students: {
        title: 'Pentru Studenți',
        desc: 'Educație complementară, experiențe internaționale și conexiuni cu piața muncii.'
      },
      partners: {
        title: 'Pentru Parteneri',
        desc: 'Acces la tinere talente, vizibilitate în campus și responsabilitate socială.'
      },
      university: {
        title: 'Pentru Universitate',
        desc: 'Promovarea imaginii TUIASI la nivel european și îmbunătățirea experienței studențești.'
      }
    },
    roadmap: {
      title: 'Viziunea noastră în acțiune',
      mission: 'Misiune: Dezvoltarea Studenților.',
      vision: 'Viziune: Promovăm Diversitatea.',
      values: 'Valori: Distracție, Prietenie, Flexibilitate, Evoluție și Mentalitate deschisa.'
    },
    footer: {
      rights: '© 2026 BEST Iași. Toate drepturile rezervate.',
    }
  },
  en: {
    nav: {
      about: 'About Us',
      projects: 'Projects',
      scholarships: 'BEST Scholarships',
      partners: 'Partners',
      report: 'Activity Report',
      contact: 'Contact',
    },
    partners: {
      strategic: 'Strategic Partners',
      annual: 'Annual Partners',
    },
    departments: {
      title: 'Our Departments',
      pr: {
        name: 'Public Relations (PR)',
        desc: 'We manage public image, social media communication, and press relations.'
      },
      hr: {
        name: 'Human Resources (HR)',
        desc: 'We handle recruitment and member development, maintaining motivation and the BEST spirit.'
      },
      it: {
        name: 'Information Technology (IT)',
        desc: 'We develop and maintain digital infrastructure, websites, and computational solutions.'
      },
      fr: {
        name: 'Fundraising (FR)',
        desc: 'We build bridges with the corporate environment and secure the resources for our projects.'
      }
    },
    hero: {
      title: 'Developing Students in Iași since 2000',
      subtitle: 'Board of European Students of Technology - Local Group Iași',
      cta: 'Join Us',
    },
    board: {
      title: 'The Board',
      role: {
        president: 'President',
        tresurer: 'Tresurer',
        secretary: 'General Secretary',
      },
      members: 'Board Members',
      gallery: 'Memories',
    },
    about: {
      title: 'Our Story',
      historyTitle: 'BEST Iași History',
      historyText: 'Founded in 1995, Local BEST Group Iași was among the first student organizations at the "Gheorghe Asachi" Technical University. Over the decades, we have evolved from a small group of enthusiasts into a solid community connecting Iași students with Europe.',
      boardHistoryTitle: 'Courses and events',
      boardHistoryText: 'Through our European network, we offer students the unique opportunity to attend academic courses and international events in over 30 countries. We facilitate cultural exchange, technical progress, and personal growth by sending local youth from Iași to explore Europe, learn from experts, and expand their professional horizons.',
    },
    projects: {
      title: 'Our Projects',
      courses: {
        name: 'BEST Courses',
        desc: 'Seasonal educational programs that bring students from all over Europe to Iași for technical and cultural exchange.'
      },
      symposium: {
        name: 'BEST Iași Symposium',
        desc: 'An elite academic event where students debate current engineering topics alongside faculty and companies.'
      },
      proveit: {
        name: 'Prove it',
        desc: 'An annual celebration of success, where we award partners, members, and supporters who make our mission possible.'
      }
    },
    donationform: {
      title: 'Redirect 3.5% of your Romanian Income Tax',
      desc: 'Working in Romania? If you pay income tax here, you can direct 3.5% of it to our cause—at zero cost to you. If you don\'t choose an organization, this money stays with the state. Download the pre-filled Form 230, sign it, and make a difference!',
      apply: 'View details',
    },
    scholarships: {
      title: 'BEST Scholarships',
      description: 'We support academic excellence and active involvement in the student community through scholarship programs dedicated to students at the "Gheorghe Asachi" Technical University of Iași.',
      inwork: 'At this moment, BEST Scholarships is in work. Follow us on social-media to stay updated!',
    },
    report: {
      title: 'Activity Report 2026',
      description: 'A detailed analysis of our impact over the last year: events, partnerships, and community growth.',
      download: 'Download PDF',
      fullTitle: 'Annual Activity Report',
      intro: 'Each year brings new challenges and successes for BEST Iași. In 2026, we successfully expanded our impact, organized large-scale events, and provided unparalleled development opportunities for students.',
      statsTitle: 'Performance in Figures',
      stats: [
        { value: '12+', label: 'Events organized' },
        { value: '2500+', label: 'Beneficiary students' },
        { value: '80+', label: 'Active members' },
        { value: '30+', label: 'Partner companies' }
      ],
      deptReportsTitle: 'Department Reports',
      deptReports: [
        { name: 'Public Relations', text: 'We increased our online presence by over 40% on Instagram and LinkedIn, promoting BEST opportunities to thousands of students and partners locally and internationally.' },
        { name: 'Human Resources', text: 'We organized 2 major recruitment campaigns, successfully integrating 35 new members, and delivered over 15 training sessions on soft skills, communication, and leadership.' },
        { name: 'Information Technology', text: 'We developed internal platforms for project management and updated event web portals, optimizing site speed and security.' },
        { name: 'Fundraising', text: 'We secured financial and logistical support from over 25 commercial partners, expanding project budgets by 20% compared to the previous year.' }
      ]
    },
    partnersStrategic: {
      title: 'Strategic Partners',
      intro: 'Strategic partners are leading companies that support the mission of BEST Iași in the long term. They are directly involved in shaping the next generation of technology professionals.',
      benefitsTitle: 'Benefits of a Strategic Partnership',
      benefits: [
        'Constant presence and priority Employer Branding throughout the entire academic year.',
        'Direct access to the most active and high-performing students through exclusive training sessions and company visits.',
        'Premium placement on all promotional materials of the association, both online and physical.',
        'Opportunity to propose project topics and case studies for our academic events.'
      ],
      currentTitle: 'Our Strategic Partners',
      ctaTitle: 'Become a Strategic Partner',
      ctaText: 'Do you want to collaborate with BEST Iași and have direct access to young engineers in Iași? Contact our External Relations department to discuss a customized collaboration.',
      ctaButton: 'Contact FR'
    },
    partnersAnnual: {
      title: 'Annual Partners',
      intro: 'Annual partners support us in executing our seasonal projects, providing the logistical resources and technical expertise necessary for high-quality events.',
      packagesTitle: 'Collaboration Packages',
      packages: [
        { name: 'Gold Partner', desc: 'Maximum visibility at a specific event, dedicated presentation at the opening, promotional stand, and mock interviews.' },
        { name: 'Silver Partner', desc: 'Promotional presence on event materials, logo on the website, and opportunity to distribute informational materials.' },
        { name: 'Bronze Partner', desc: 'Mention in press releases, logo on the official partner panel, and promotion in the event brochure.' }
      ],
      currentTitle: 'Partner Companies in 2026',
      testimonialsTitle: 'What our partners say',
      testimonials: [
        { quote: 'Collaborating with BEST Iași gives us the opportunity to meet highly motivated students ready to transition to the professional environment.', author: 'Andreea Marin', company: 'HR Manager, TechCorp' },
        { quote: 'We found in BEST Iași a team of highly organized students who treat each partnership with a level of seriousness and professionalism that is rare to find.', author: 'Mihai Popescu', company: 'Software Architect, InnoSoft' }
      ]
    },
    impact: {
      title: 'Core Pillars',
      subtitle: 'We create value for the university, students, and partners.',
      students: {
        title: 'For Students',
        desc: 'Complementary education, international experiences, and connections with the labor market.'
      },
      partners: {
        title: 'For Partners',
        desc: 'Access to young talent, visibility on campus, and social responsibility.'
      },
      university: {
        title: 'For University',
        desc: 'Promoting the TUIASI image at the European level and improving the student experience.'
      }
    },
    roadmap: {
      title: 'Our Vision in Action',
      mission: 'Mission: Developing Students.',
      vision: 'Vision: Empower Diversity',
      values: 'Values: Fun, Friendship, Flexibility, Improvement, Open-Mindedness.'
    },
    footer: {
      rights: '© 2026 BEST Iași. All rights reserved.',
    }
  }
};
