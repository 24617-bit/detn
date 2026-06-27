/* =========================================================
   i18n.js — Script de traduction (Français / Arabe)
   ========================================================= */

const translations = {
    fr: {
        // Navbar
        "nav-title": "Démographie · Mauritanie",
        "nav-home": "Accueil",
        "nav-stats": "Statistiques RGPH",
        "nav-about": "À propos",
        "nav-login": "Connexion",
        "nav-admin": "Administration",
        "nav-logout": "Déconnexion",

        // Index Page
        "hero-title-1": "La population de la Mauritanie,",
        "hero-title-2": " en temps réel",
        "hero-subtitle": "Un observatoire vivant fondé sur les RGPH 1988-2023 et les projections ANSADE 2026, selon la définition onusienne du résident habituel.",
        "badge-live": "En direct",
        "counter-label": "Population résidente habituelle estimée",
        "counter-desc": "Personnes vivant ou prévoyant de vivre en Mauritanie pendant 12 mois ou plus — ONU.",
        "births-today": "Naissances aujourd'hui",
        "deaths-today": "Décès aujourd'hui",
        "net-today": "Résidents nets aujourd'hui",
        "methodology-badge": "Méthodologie",
        "methodology-title": "Comment ce compteur est-il calculé ?",
        "methodology-desc": "Transparence des sources, des hypothèses et des limites de l'estimation.",
        "equation-title": "Équation de l'équilibre démographique",
        "eq-p0": "Population du RGPH 2023 : 4 927 532 habitants (référence 1er janvier 2024).",
        "eq-nd": "Solde naturel : naissances moins décès enregistrés.",
        "eq-ie": "Solde migratoire des résidents habituels (séjour ≥ 12 mois).",
        "eq-t": "Temps écoulé depuis la date de référence.",
        "onu-def-title": "Résident habituel — ONU",
        "onu-def-text": "Est résident habituel toute personne qui vit, ou a l'intention de vivre, dans un lieu pendant 12 mois ou plus. Les séjours de courte durée (tourisme, transit, missions) n'entrent pas dans le décompte.",
        "onu-def-source": "Source : United Nations Statistics Division — Principles and Recommendations for Population and Housing Censuses, Revision 3.",
        "sources-title": "Sources nationales",
        "source-rgph": "RGPH 2023 — Recensement Général de la Population et de l'Habitat.",
        "source-ansade": "ANSADE — Estimations annuelles 2024-2026.",
        "source-sante": "Ministère de la Santé — flux de naissances et décès.",
        "source-migration": "Direction de la Migration — entrées / sorties par point d'entrée.",
        "limits-title": "Limites de l'estimation",
        "limit-1": "Nous ne disposons pas de données sur les naissances et décès survenant hors des hôpitaux (à domicile, etc.).",
        "limit-2": "Ces événements sont enregistrés au niveau des communes (mairies), mais nous n'avons pas accès à ces données.",
        "limit-3": "Il n'y a pour le moment aucune solution pour intégrer ces données non-hospitalières.",
        "limit-4": "La migration terrestre (frontières non aéroportuaires) n'est pas couverte.",
        "limit-5": "Les flux annuels sont des moyennes lissées, non des relevés en temps réel.",
        "limit-6": "Le compteur est une projection indicative, non un dénombrement officiel.",
        "intl-ref-title": "Références internationales",
        "intl-insee": "INSEE (France) — horloge démographique.",
        "intl-us": "U.S. Census Bureau — Population Clock.",
        "intl-capmas": "CAPMAS (Égypte) — compteur de population.",

        // Stats Page
        "stats-title": "Statistiques démographiques",
        "stats-subtitle": "Cinq recensements généraux et les projections ANSADE éclairent la transition démographique mauritanienne.",
        "stats-geo-title": "Répartition géographique",
        "stats-geo-desc": "Population résidente et résidents étrangers par wilaya (RGPH 2023).",
        "stats-recensed": "Population recensée",
        "stats-foreigners": "Résidents étrangers",
        "stats-wilayas-count": "Wilayas",
        "stats-poids-title": "Poids démographique des wilayas",
        "stats-poids-desc": "Part de la population nationale",
        "stats-sexe-title": "Répartition selon le sexe (RGPH 2023)",
        "stats-men": "Hommes",
        "stats-women": "Femmes",
        "stats-men-count": "~ 2 375 070 habitants",
        "stats-women-count": "~ 2 552 462 habitantes",
        "stats-evo-title": "Évolution de la population",
        "stats-evo-desc": "Recensements & projections ANSADE",
        "stats-taux-title": "Natalité, mortalité & accroissement",
        "stats-taux-desc": "Taux pour mille (‰) par recensement",
        "stats-pyramide-title": "Pyramide des âges — RGPH 2023",
        "stats-pyramide-desc": "Effectifs en milliers (Hommes / Femmes)",
        "stats-tmi-title": "Mortalité infantile (TMI)",
        "stats-tmi-desc": "Décès pour 1 000 naissances vivantes",
        "stats-e0-title": "Espérance de vie à la naissance",
        "stats-e0-desc": "e₀ par sexe et par recensement",
        "stats-isf-title": "ISF — Transition de la fécondité",
        "stats-isf-desc": "Indice synthétique de fécondité",
        "stats-compare-title": "Comparer deux recensements",
        "stats-compare-vs": "vs",

        // Login Page
        "login-title": "Portail Agent",
        "login-subtitle": "Accédez à l'interface de saisie des flux démographiques",
        "login-username-label": "Identifiant",
        "login-password-label": "Mot de passe",
        "login-submit": "Se connecter",
        "login-error": "Identifiants invalides. Veuillez réessayer.",
        "login-back": "← Retour au site public",
        "login-admin-banner": "Espace d'administration",
        "login-admin-desc": "Saisie des naissances, décès et flux migratoires alimentant le compteur national de population résidente.",

        // Admin Page
        "admin-welcome": "Espace d'administration ANSADE",
        "admin-panel": "Gestion ANSADE",
        "admin-panel-desc": "Enregistrement des flux démographiques en temps réel",
        "admin-tab-users": "Utilisateurs",
        "admin-tab-births": "Naissances",
        "admin-tab-deaths": "Décès",
        "admin-tab-migrations": "Mouvements Migratoires",
        "admin-tab-import": "Import CSV",

        // Wilayas
        "wilaya-nouakchott-sud": "Nouakchott Sud",
        "wilaya-hodh-ech-chargui": "Hodh Ech Chargui",
        "wilaya-nouakchott-nord": "Nouakchott Nord",
        "wilaya-assaba": "Assaba",
        "wilaya-gorgol": "Gorgol",
        "wilaya-nouakchott-ouest": "Nouakchott Ouest",
        "wilaya-hodh-el-gharbi": "Hodh El Gharbi",
        "wilaya-trarza": "Trarza",
        "wilaya-brakna": "Brakna",
        "wilaya-guidimaka": "Guidimagha",
        "wilaya-dakhlet-nouadhibou": "Dakhlet Nouadhibou",
        "wilaya-tagant": "Tagant",
        "wilaya-adrar": "Adrar",
        "wilaya-tiris-zemmour": "Tiris Zemmour",
        "wilaya-inchiri": "Inchiri",

        // KPIs
        "kpi-desc-tbn": "Taux brut de natalité",
        "kpi-desc-tbm": "Taux brut de mortalité",
        "kpi-desc-tan": "Accroissement naturel",
        "kpi-desc-tmi": "Mortalité infantile",
        "kpi-desc-isf": "Fécondité (enfants/femme)",
        "kpi-desc-e0": "Espérance de vie",

        // Comparison Rows
        "compare-pop": "Population",
        "compare-tbn": "TBN ‰",
        "compare-isf": "ISF",
        "compare-e0": "Espérance de vie",
    },
    ar: {
        // Navbar
        "nav-title": "ديموغرافيا · موريتانيا",
        "nav-home": "الرئيسية",
        "nav-stats": "إحصائيات التعداد",
        "nav-about": "حول المرصد",
        "nav-login": "تسجيل الدخول",
        "nav-admin": "الإدارة",
        "nav-logout": "تسجيل الخروج",

        // Index Page
        "hero-title-1": "سكان موريتانيا،",
        "hero-title-2": " في الوقت الفعلي",
        "hero-subtitle": "مرصد حي يعتمد على التعداد العام للسكان والمساكن (RGPH) 1988-2023 وإسقاطات الوكالة الوطنية للإحصاء والتحليل الديموغرافي والاقتصادي (ANSADE) 2026، وفقاً لتعريف الأمم المتحدة للمقيم الاعتيادي.",
        "badge-live": "مباشر",
        "counter-label": "السكان المقيمون الاعتياديون المقدرون",
        "counter-desc": "الأشخاص الذين يعيشون أو يخططون للعيش في موريتانيا لمدة 12 شهراً أو أكثر — الأمم المتحدة.",
        "births-today": "الولادات اليوم",
        "deaths-today": "الوفيات اليوم",
        "net-today": "صافي السكان اليوم",
        "methodology-badge": "المنهجية",
        "methodology-title": "كيف يتم حساب هذا العداد؟",
        "methodology-desc": "شفافية المصادر، الفرضيات وحدود التقدير.",
        "equation-title": "معادلة التوازن الديموغرافي",
        "eq-p0": "سكان التعداد العام 2023: 4,927,532 نسمة (المرجع 1 يناير 2024).",
        "eq-nd": "الزيادة الطبيعية: الولادات ناقص الوفيات المسجلة.",
        "eq-ie": "صافي الهجرة للمقيمين الاعتياديين (الإقامة ≥ 12 شهراً).",
        "eq-t": "الوقت المنقضي منذ تاريخ المرجع.",
        "onu-def-title": "المقيم الاعتيادي — الأمم المتحدة",
        "onu-def-text": "المقيم الاعتيادي هو أي شخص يعيش، أو ينوي العيش، في مكان لمدة 12 شهراً أو أكثر. الإقامات قصيرة المدى (السياحة، العبور، المهام) لا تدخل في الحساب.",
        "onu-def-source": "المصدر: شعبة الإحصاء بالأمم المتحدة — المبادئ والتوصيات لتعدادات السكان والمساكن، المراجعة 3.",
        "sources-title": "المصادر الوطنية",
        "source-rgph": "التعداد العام للسكان والمساكن 2023.",
        "source-ansade": "ANSADE — التقديرات السنوية 2024-2026.",
        "source-sante": "وزارة الصحة — تدفقات الولادات والوفيات.",
        "source-migration": "مديرية الهجرة — الدخول / الخروج حسب نقطة العبور.",
        "limits-title": "حدود التقدير",
        "limit-1": "لا تتوفر لدينا بيانات عن الولادات والوفيات التي تحدث خارج المستشفيات (في المنزل، إلخ).",
        "limit-2": "يتم تسجيل هذه الأحداث على مستوى البلديات، ولكن ليس لدينا وصول إلى هذه البيانات.",
        "limit-3": "لا يوجد حالياً أي حل لدمج هذه البيانات غير الاستشفائية.",
        "limit-4": "الهجرة البرية (الحدود غير المطارات) غير مغطاة حالياً.",
        "limit-5": "التدفقات السنوية عبارة عن متوسطات ممهدة وليست قراءات في الوقت الفعلي.",
        "limit-6": "العداد عبارة عن إسقاط مؤشر، وليس تعداداً رسمياً.",
        "intl-ref-title": "المراجع الدولية",
        "intl-insee": "INSEE (فرنسا) — الساعة الديموغرافية.",
        "intl-us": "مكتب التعداد الأمريكي — ساعة السكان.",
        "intl-capmas": "CAPMAS (مصر) — عداد السكان.",

        // Stats Page
        "stats-title": "الإحصاءات الديموغرافية",
        "stats-subtitle": "خمسة تعدادات عامة وإسقاطات ANSADE تسلط الضوء على التحول الديموغرافي في موريتانيا.",
        "stats-geo-title": "التوزيع الجغرافي",
        "stats-geo-desc": "السكان المقيمون والمقيمون الأجانب حسب الولاية (التعداد العام 2023).",
        "stats-recensed": "السكان الذين تم إحصاؤهم",
        "stats-foreigners": "المقيمون الأجانب",
        "stats-wilayas-count": "الولايات",
        "stats-poids-title": "الوزن الديموغرافي للولايات",
        "stats-poids-desc": "الحصة من سكان الوطن",
        "stats-sexe-title": "التوزيع حسب الجنس (التعداد العام 2023)",
        "stats-men": "رجال",
        "stats-women": "نساء",
        "stats-men-count": "~ 2 375 070 نسمة",
        "stats-women-count": "~ 2 552 462 نسمة",
        "stats-evo-title": "تطور السكان",
        "stats-evo-desc": "التعدادات وإسقاطات ANSADE",
        "stats-taux-title": "الولادات والوفيات والنمو",
        "stats-taux-desc": "معدل الألف (‰) حسب التعداد",
        "stats-pyramide-title": "الهرم السكاني — التعداد العام 2023",
        "stats-pyramide-desc": "الأعداد بالآلاف (رجال / نساء)",
        "stats-tmi-title": "وفيات الرضع (TMI)",
        "stats-tmi-desc": "الوفيات لكل 1000 مولود حي",
        "stats-e0-title": "متوسط العمر المتوقع عند الولادة",
        "stats-e0-desc": "e₀ حسب الجنس وحسب التعداد",
        "stats-isf-title": "مؤشر الخصوبة الكلي — تحول الخصوبة",
        "stats-isf-desc": "مؤشر الخصوبة الكلي",
        "stats-compare-title": "مقارنة تعدادين",
        "stats-compare-vs": "مقابل",

        // Login Page
        "login-title": "بوابة الوكيل",
        "login-subtitle": "الدخول إلى واجهة إدخال التدفقات الديموغرافية",
        "login-username-label": "اسم المستخدم",
        "login-password-label": "كلمة المرور",
        "login-submit": "تسجيل الدخول",
        "login-error": "بيانات الاعتماد غير صالحة. يرجى المحاولة مجدداً.",
        "login-back": "← العودة إلى الموقع العام",
        "login-admin-banner": "مساحة الإدارة",
        "login-admin-desc": "إدخال الولادات، الوفيات، والتدفقات المهاجرة لتغذية العداد الوطني للسكان المقيمين.",

        // Admin Page
        "admin-welcome": "مساحة الإدارة لوكالة ANSADE",
        "admin-panel": "إدارة ANSADE",
        "admin-panel-desc": "تسجيل التدفقات الديموغرافية في الوقت الفعلي",
        "admin-tab-users": "المستخدمون",
        "admin-tab-births": "الولادات",
        "admin-tab-deaths": "الوفيات",
        "admin-tab-migrations": "حركات الهجرة",
        "admin-tab-import": "استيراد CSV",

        // Wilayas
        "wilaya-nouakchott-sud": "نواكشوط الجنوبية",
        "wilaya-hodh-ech-chargui": "الحوض الشرقي",
        "wilaya-nouakchott-nord": "نواكشوط الشمالية",
        "wilaya-assaba": "لعصابة",
        "wilaya-gorgol": "كوركول",
        "wilaya-nouakchott-ouest": "نواكشوط الغربية",
        "wilaya-hodh-el-gharbi": "الحوض الغربي",
        "wilaya-trarza": "اترارزة",
        "wilaya-brakna": "لبراكنة",
        "wilaya-guidimaka": "كيدي ماغا",
        "wilaya-dakhlet-nouadhibou": "داخلت نواذيبو",
        "wilaya-tagant": "تكانت",
        "wilaya-adrar": "آدرار",
        "wilaya-tiris-zemmour": "تيرس زمور",
        "wilaya-inchiri": "إينشيري",

        // KPIs
        "kpi-desc-tbn": "معدل المواليد الخام",
        "kpi-desc-tbm": "معدل الوفيات الخام",
        "kpi-desc-tan": "النمو الطبيعي",
        "kpi-desc-tmi": "وفيات الرضع",
        "kpi-desc-isf": "الخصوبة (أطفال/امرأة)",
        "kpi-desc-e0": "متوسط العمر المتوقع",

        // Comparison Rows
        "compare-pop": "السكان",
        "compare-tbn": "معدل المواليد الخام ‰",
        "compare-isf": "مؤشر الخصوبة الكلي",
        "compare-e0": "متوسط العمر المتوقع",
    }
};

function translatePage() {
    const lang = localStorage.getItem('lang') || 'fr';
    document.documentElement.lang = lang;
    
    // Set text direction
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.classList.remove('rtl');
    }

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// Global initialization
window.translatePage = translatePage;

document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});
