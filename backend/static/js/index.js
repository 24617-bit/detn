/* =========================================================
   index.js — Compteur population en direct
   ========================================================= */

const P0 = 5343892;

function formatNumber(n) {
    return Math.floor(n).toLocaleString("fr-FR").replace(/\u202f/g, " ");
}

let dbAdjustment = 0;
let dbBirthsToday = 0;
let dbDeathsToday = 0;
let dbNetToday = 0;

async function fetchAdjustment() {
    try {
        const res = await fetch('/api/live_stats');
        const data = await res.json();
        dbAdjustment = Number(data.adjustment) || 0;
        dbBirthsToday = Number(data.births_today) || 0;
        dbDeathsToday = Number(data.deaths_today) || 0;
        dbNetToday = Number(data.net_today) || 0;
        updateCounter();
    } catch (e) {
        console.error('Failed to fetch live stats', e);
    }
}

function updateCounter() {
    const population = P0 + dbAdjustment;
    const birthsToday = dbBirthsToday;
    const deathsToday = dbDeathsToday;
    const netToday = dbNetToday;

    // Update Population Digits
    const popStr = formatNumber(population);
    const popContainer = document.getElementById('population-digits');
    popContainer.innerHTML = '';
    for (let char of popStr) {
        if (char === " ") {
            popContainer.innerHTML += `<span class="w-3 sm:w-5"></span>`;
        } else {
            popContainer.innerHTML += `<span class="font-display tabular rounded-lg bg-white/10 px-2 py-1 text-4xl font-extrabold text-white ring-1 ring-white/10 sm:px-3 sm:py-2 sm:text-6xl lg:text-7xl">${char}</span>`;
        }
    }

    // Update Stats
    document.getElementById('stat-births').innerText = formatNumber(birthsToday);
    document.getElementById('stat-deaths').innerText = formatNumber(deathsToday);
    document.getElementById('stat-net').innerText = formatNumber(netToday);
}

fetchAdjustment();
setInterval(fetchAdjustment, 5000);
updateCounter();
