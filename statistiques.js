/* =========================================================
   statistiques.js — Graphiques & données RGPH
   ========================================================= */

const C = {
    green: "#00853F",
    gold: "#D69A00",
    red: "#C8102E",
    teal: "#0B7A75",
    sand: "#A9763C",
    ink: "#1f3a2c",
};

const RGPH = [
    {annee: 1988, population: 1864236, tbn: 48.2, tbm: 18.1, tan: 30.1, tmi: 124, isf: 7.2, e0Homme: 49.0, e0Femme: 51.5, e0Total: 50.2},
    {annee: 2000, population: 2508159, tbn: 44.5, tbm: 14.2, tan: 30.3, tmi: 82,  isf: 6.0, e0Homme: 54.0, e0Femme: 57.5, e0Total: 55.8},
    {annee: 2013, population: 3537368, tbn: 41.2, tbm: 11.8, tan: 29.4, tmi: 72,  isf: 5.1, e0Homme: 61.1, e0Femme: 63.5, e0Total: 62.3},
    {annee: 2023, population: 4927532, tbn: 32.6, tbm: 6.1,  tan: 26.5, tmi: 33,  isf: 4.7, e0Homme: 67.5, e0Femme: 70.3, e0Total: 68.9}
];

const POPULATION_HISTORY = [
    ...RGPH,
    {annee: 2026, population: 5343892}
];

const PYRAMIDE_2023 = [
    {groupe: '0-4',   hommes: 380, femmes: 372},
    {groupe: '5-9',   hommes: 350, femmes: 343},
    {groupe: '10-14', hommes: 305, femmes: 300},
    {groupe: '15-19', hommes: 270, femmes: 268},
    {groupe: '20-24', hommes: 230, femmes: 240},
    {groupe: '25-29', hommes: 195, femmes: 210},
    {groupe: '30-34', hommes: 165, femmes: 178},
    {groupe: '35-39', hommes: 135, femmes: 145},
    {groupe: '40-44', hommes: 108, femmes: 115},
    {groupe: '45-49', hommes: 85,  femmes: 90},
    {groupe: '50-54', hommes: 66,  femmes: 70},
    {groupe: '55-59', hommes: 50,  femmes: 53},
    {groupe: '60-64', hommes: 38,  femmes: 41},
    {groupe: '65-69', hommes: 27,  femmes: 30},
    {groupe: '70-74', hommes: 18,  femmes: 21},
    {groupe: '75-79', hommes: 11,  femmes: 13},
    {groupe: '80+',   hommes: 9,   femmes: 12}
];

const WILAYAS = [
    {nom: 'Nouakchott Sud',       chefLieu: 'Arafat',         population: 620000, etrangers: 42000},
    {nom: 'Hodh Ech Chargui',     chefLieu: 'Néma',           population: 620000, etrangers: 9500},
    {nom: 'Nouakchott Nord',      chefLieu: 'Dar Naim',       population: 480000, etrangers: 31000},
    {nom: 'Assaba',               chefLieu: 'Kiffa',          population: 450000, etrangers: 5200},
    {nom: 'Gorgol',               chefLieu: 'Kaédi',          population: 400000, etrangers: 6800},
    {nom: 'Nouakchott Ouest',     chefLieu: 'Tevragh-Zeina',  population: 380000, etrangers: 28500},
    {nom: 'Hodh El Gharbi',       chefLieu: 'Aïoun',          population: 360000, etrangers: 4900},
    {nom: 'Trarza',               chefLieu: 'Rosso',          population: 360000, etrangers: 11200},
    {nom: 'Brakna',               chefLieu: 'Aleg',           population: 340000, etrangers: 5600},
    {nom: 'Guidimaka',            chefLieu: 'Sélibaby',       population: 320000, etrangers: 7300},
    {nom: 'Dakhlet Nouadhibou',   chefLieu: 'Nouadhibou',     population: 170000, etrangers: 24000},
    {nom: 'Tagant',               chefLieu: 'Tidjikja',       population: 95000,  etrangers: 1400},
    {nom: 'Adrar',                chefLieu: 'Atar',           population: 75000,  etrangers: 2100},
    {nom: 'Tiris Zemmour',        chefLieu: 'Zouérate',       population: 65000,  etrangers: 8900},
    {nom: 'Inchiri',              chefLieu: 'Akjoujt',        population: 22000,  etrangers: 1800}
];

function formatNumber(n) {
    return Math.floor(n).toLocaleString("fr-FR").replace(/\u202f/g, " ");
}

// Render KPIs
const rgph2023 = RGPH[RGPH.length - 1];
const kpis = [
    { k: "TBN", v: `${rgph2023.tbn} ‰`, d: "Taux brut de natalité" },
    { k: "TBM", v: `${rgph2023.tbm} ‰`, d: "Taux brut de mortalité" },
    { k: "TAN", v: `${rgph2023.tan} ‰`, d: "Accroissement naturel" },
    { k: "TMI", v: `${rgph2023.tmi} ‰`, d: "Mortalité infantile" },
    { k: "ISF", v: rgph2023.isf.toFixed(1), d: "Fécondité (enfants/femme)" },
    { k: "e₀",  v: `${rgph2023.e0Total} ans`, d: "Espérance de vie" },
];
const kpiContainer = document.getElementById('kpi-container');
kpis.forEach(kpi => {
    kpiContainer.innerHTML += `
        <div class="rounded-xl border border-border bg-card p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-primary">${kpi.k}</p>
            <p class="mt-1 font-display tabular text-2xl font-extrabold text-foreground">${kpi.v}</p>
            <p class="mt-1 text-[11px] leading-tight text-muted-foreground">${kpi.d}</p>
        </div>
    `;
});

Chart.defaults.color = 'hsl(0, 0%, 75%)';
Chart.defaults.font.family = 'Inter, sans-serif';
Chart.defaults.borderColor = '#1f2937';

// Chart Population
new Chart(document.getElementById('chartPop'), {
    type: 'line',
    data: {
        labels: POPULATION_HISTORY.map(r => r.annee),
        datasets: [{
            label: 'Population',
            data: POPULATION_HISTORY.map(r => r.population),
            borderColor: C.green,
            backgroundColor: C.green,
            tension: 0.4,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => formatNumber(ctx.raw) } }
        },
        scales: {
            y: { ticks: { callback: v => (v/1000000).toFixed(1) + 'M' } }
        }
    }
});

// Chart Taux
new Chart(document.getElementById('chartTaux'), {
    type: 'bar',
    data: {
        labels: RGPH.map(r => r.annee),
        datasets: [
            { label: 'TBN', data: RGPH.map(r => r.tbn), backgroundColor: C.green, borderRadius: 4 },
            { label: 'TBM', data: RGPH.map(r => r.tbm), backgroundColor: C.red,   borderRadius: 4 },
            { label: 'TAN', data: RGPH.map(r => r.tan), backgroundColor: C.gold,  borderRadius: 4 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false }
    }
});

// Chart Pyramide (Horizontal Stacked)
new Chart(document.getElementById('chartPyramide'), {
    type: 'bar',
    data: {
        labels: PYRAMIDE_2023.map(p => p.groupe),
        datasets: [
            { label: 'Hommes', data: PYRAMIDE_2023.map(p => -p.hommes), backgroundColor: C.teal },
            { label: 'Femmes', data: PYRAMIDE_2023.map(p =>  p.femmes), backgroundColor: C.gold }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, ticks: { callback: v => Math.abs(v) } },
            y: { stacked: true }
        },
        plugins: {
            tooltip: { callbacks: { label: ctx => Math.abs(ctx.raw) + ' k' } }
        }
    }
});

// Chart TMI
new Chart(document.getElementById('chartTMI'), {
    type: 'line',
    data: {
        labels: RGPH.map(r => r.annee),
        datasets: [{
            label: 'TMI ‰',
            data: RGPH.map(r => r.tmi),
            borderColor: C.red,
            backgroundColor: C.red,
            tension: 0.4,
            borderWidth: 3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

// Chart E0
new Chart(document.getElementById('chartE0'), {
    type: 'bar',
    data: {
        labels: RGPH.map(r => r.annee),
        datasets: [
            { label: 'Hommes', data: RGPH.map(r => r.e0Homme), backgroundColor: C.teal, borderRadius: 4 },
            { label: 'Femmes', data: RGPH.map(r => r.e0Femme), backgroundColor: C.gold, borderRadius: 4 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 40 } }
    }
});

// Chart ISF
new Chart(document.getElementById('chartISF'), {
    type: 'bar',
    data: {
        labels: RGPH.map(r => r.annee),
        datasets: [{
            label: 'ISF',
            data: RGPH.map(r => r.isf),
            backgroundColor: [C.sand, C.gold, C.teal, C.green],
            borderRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { min: 0 } }
    }
});

// Comparison Logic
const selectA = document.getElementById('yearA');
const selectB = document.getElementById('yearB');
const compContainer = document.getElementById('compare-container');

RGPH.forEach(r => {
    selectA.innerHTML += `<option value="${r.annee}">${r.annee}</option>`;
    selectB.innerHTML += `<option value="${r.annee}">${r.annee}</option>`;
});

selectA.value = "1988";
selectB.value = "2023";

function updateComparison() {
    const yearA = parseInt(selectA.value);
    const yearB = parseInt(selectB.value);
    const a = RGPH.find(r => r.annee === yearA);
    const b = RGPH.find(r => r.annee === yearB);

    const rows = [
        { label: "Population",       va: formatNumber(a.population), vb: formatNumber(b.population) },
        { label: "TBN ‰",           va: a.tbn,                      vb: b.tbn },
        { label: "ISF",              va: a.isf,                      vb: b.isf },
        { label: "Espérance de vie", va: `${a.e0Total} ans`,         vb: `${b.e0Total} ans` },
    ];

    compContainer.innerHTML = '';
    rows.forEach(row => {
        compContainer.innerHTML += `
            <div class="rounded-xl bg-secondary/40 p-4">
                <p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">${row.label}</p>
                <div class="mt-2 flex items-baseline justify-between">
                    <span class="font-display tabular text-base font-bold text-teal-700">${row.va}</span>
                    <span class="text-xs text-muted-foreground">→</span>
                    <span class="font-display tabular text-base font-bold text-primary">${row.vb}</span>
                </div>
                <p class="mt-1 text-[11px] text-muted-foreground">${yearA} → ${yearB}</p>
            </div>
        `;
    });
}

selectA.addEventListener('change', updateComparison);
selectB.addEventListener('change', updateComparison);
updateComparison();

// Géographie — Density Bars
const totalWilayas = WILAYAS.reduce((s, w) => s + w.population, 0);
const sortedWilayas = [...WILAYAS].sort((a, b) => b.population - a.population);
const maxWilaya = sortedWilayas[0].population;

const densityContainer = document.getElementById('density-bars');
sortedWilayas.forEach(w => {
    const pct = (w.population / totalWilayas) * 100;
    const widthPct = (w.population / maxWilaya) * 100;
    densityContainer.innerHTML += `
        <div class="grid grid-cols-[1fr_auto] items-center gap-3">
            <div>
                <div class="flex items-center justify-between text-sm">
                    <span class="font-medium text-foreground">${w.nom}</span>
                    <span class="tabular text-muted-foreground">${pct.toFixed(1)}%</span>
                </div>
                <div class="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div class="h-full rounded-full bg-primary" style="width: ${widthPct}%"></div>
                </div>
            </div>
            <span class="font-display tabular w-24 text-right text-sm font-bold text-foreground">
                ${formatNumber(w.population)}
            </span>
        </div>
    `;
});
