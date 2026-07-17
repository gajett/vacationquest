const state = {
  score: 100,
  stamps: [],
  destination: "",
  transport: "",
  workChoices: 0,
  scene: "start"
};

const $ = (id) => document.getElementById(id);

const stampNames = {
  decide: "Decision Made",
  beach: "Sand Acquired",
  mountains: "Peak-ish",
  cabin: "Forest Mode",
  moon: "Low Gravity PTO",
  car: "Snack Cartographer",
  plane: "Pretzel Survivor",
  teleport: "Molecule Roulette",
  fun: "Actually Had Fun",
  boundaries: "Boundary Badge",
  wizard: "Vacation Wizard",
  bad: "Desk Relocator"
};

function addStamp(key) {
  if (!state.stamps.includes(key)) {
    state.stamps.push(key);
    toast(`Passport stamp: ${stampNames[key]}`);
  }
}

function adjustScore(delta) {
  state.score = Math.max(0, Math.min(100, state.score + delta));
  updateDashboard();
}

function updateDashboard() {
  const bar = $("scoreBar");
  const scoreText = $("scoreText");
  const statusText = $("statusText");
  scoreText.textContent = `${state.score}%`;
  bar.style.width = `${state.score}%`;
  if (state.score >= 85) {
    bar.style.background = "linear-gradient(90deg, var(--green), #8fcf6f)";
    statusText.textContent = "You are radiating responsible leisure.";
  } else if (state.score >= 60) {
    bar.style.background = "linear-gradient(90deg, var(--gold), #f7d67f)";
    statusText.textContent = "Mostly relaxed, with faint calendar residue.";
  } else if (state.score >= 30) {
    bar.style.background = "linear-gradient(90deg, var(--red), var(--gold))";
    statusText.textContent = "Emotionally still in a meeting.";
  } else {
    bar.style.background = "linear-gradient(90deg, #7b1f1f, var(--red))";
    statusText.textContent = "This vacation has become a business trip with sunscreen.";
  }
  const list = $("stampList");
  list.innerHTML = state.stamps.map(s => `<li>${stampNames[s]}</li>`).join("") || `<li>Awaiting bravery</li>`;
}

function toast(message) {
  const region = $("toastRegion");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  region.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function person(x=210, y=230, mood="neutral") {
  const mouth = mood === "happy" ? `M${x-12} ${y-66} C${x-5} ${y-54}, ${x+8} ${y-54}, ${x+15} ${y-66}` : mood === "panic" ? `M${x-12} ${y-58} C${x-4} ${y-70}, ${x+8} ${y-70}, ${x+16} ${y-58}` : `M${x-12} ${y-60} L${x+14} ${y-60}`;
  return `<g class="wobble"><circle class="thin-ink" cx="${x}" cy="${y-90}" r="27"/><circle class="ink-fill" cx="${x-9}" cy="${y-96}" r="3"/><circle class="ink-fill" cx="${x+11}" cy="${y-96}" r="3"/><path class="thin-ink" d="${mouth}"/><path class="ink" d="M${x} ${y-62} L${x} ${y+24} M${x} ${y-32} L${x-48} ${y-4} M${x} ${y-32} L${x+48} ${y-4} M${x} ${y+24} L${x-42} ${y+82} M${x} ${y+24} L${x+40} ${y+82}"/></g>`;
}

function phone(x=360, y=185, buzz=false) {
  return `<g class="${buzz ? 'shake' : ''}"><rect class="squiggle" x="${x}" y="${y}" width="48" height="82" rx="10"/><circle class="ink-fill" cx="${x+24}" cy="${y+70}" r="3"/><path class="thin-ink" d="M${x+10} ${y+20} L${x+38} ${y+20} M${x+10} ${y+35} L${x+35} ${y+35}"/></g>`;
}

function bird(x=335, y=100) {
  return `<g class="floaty"><path class="squiggle color-gold" d="M${x} ${y} C${x+28} ${y-18}, ${x+58} ${y}, ${x+48} ${y+33} C${x+28} ${y+58}, ${x-10} ${y+36}, ${x} ${y}Z"/><circle class="ink-fill" cx="${x+34}" cy="${y+12}" r="3"/><path class="thin-ink" d="M${x+48} ${y+12} L${x+66} ${y+4} L${x+51} ${y+23}"/><path class="thin-ink" d="M${x+10} ${y+33} L${x-3} ${y+52} M${x+28} ${y+38} L${x+21} ${y+60}"/></g>`;
}

function laptop(x=70, y=250) {
  return `<g><path class="squiggle color-blue" d="M${x} ${y} L${x+150} ${y} L${x+128} ${y+75} L${x+20} ${y+75} Z"/><path class="thin-ink" d="M${x+22} ${y+18} L${x+99} ${y+18} M${x+22} ${y+34} L${x+125} ${y+34}"/><path class="squiggle" d="M${x-12} ${y+78} L${x+170} ${y+78} L${x+143} ${y+99} L${x+12} ${y+99} Z"/></g>`;
}

function kraken() {
  return `<g class="shake"><circle class="squiggle color-purple" cx="350" cy="180" r="58"/><circle class="ink-fill" cx="329" cy="166" r="5"/><circle class="ink-fill" cx="373" cy="166" r="5"/><path class="thin-ink" d="M326 200 C342 190, 360 190, 375 200"/><path class="ink" d="M302 220 C246 236, 250 287, 202 303 M319 232 C290 282, 327 318, 285 360 M368 231 C414 273, 390 311, 435 350 M392 217 C440 221, 466 267, 511 260"/><path class="squiggle" d="M246 96 L454 96 L454 131 L246 131 Z"/><text x="264" y="120" font-size="18" font-family="Comic Sans MS, sans-serif">Since you're online...</text></g>`;
}

function hydra() {
  return `<g class="shake"><path class="squiggle color-green" d="M215 265 C250 185, 440 182, 478 267 C421 310, 284 316, 215 265Z"/><circle class="squiggle color-green" cx="267" cy="165" r="34"/><circle class="squiggle color-green" cx="346" cy="139" r="34"/><circle class="squiggle color-green" cx="426" cy="166" r="34"/><circle class="ink-fill" cx="258" cy="158" r="3"/><circle class="ink-fill" cx="276" cy="158" r="3"/><circle class="ink-fill" cx="337" cy="132" r="3"/><circle class="ink-fill" cx="355" cy="132" r="3"/><circle class="ink-fill" cx="417" cy="159" r="3"/><circle class="ink-fill" cx="435" cy="159" r="3"/><path class="thin-ink" d="M252 178 L281 178 M332 153 L361 153 M412 180 L441 180"/><path class="squiggle" d="M245 63 L452 63 L452 100 L245 100 Z"/><text x="260" y="87" font-size="17" font-family="Comic Sans MS, sans-serif">Meeting? Meeting? Meeting?</text></g>`;
}

const graphics = {
  start: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/>${laptop(45,250)}${person(296,242,"panic")} ${bird(414,92)}<path class="thin-ink" d="M395 82 C373 70, 348 76, 333 95"/><path class="squiggle" d="M386 44 L591 44 L591 92 L386 92 Z"/><text x="401" y="74" font-size="20" font-family="Comic Sans MS, sans-serif">Have you tried... leaving?</text></svg>`,
  map: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><path class="squiggle color-blue" d="M58 332 C140 245, 229 320, 299 239 C371 155, 474 214, 569 112 L591 387 L39 388 Z"/><path class="squiggle color-green" d="M99 245 C127 175, 190 146, 238 195 C278 235, 311 213, 339 162 C392 63, 498 87, 526 176 C551 255, 476 313, 394 282 C321 255, 255 314, 190 307 C143 302, 111 280, 99 245Z"/><path class="ink" d="M136 266 L187 195 L227 267 M376 238 L424 142 L482 237"/><circle class="squiggle color-gold" cx="493" cy="86" r="30"/><path class="thin-ink" d="M85 360 C211 334, 338 346, 558 310"/><text x="76" y="70" font-size="28" font-family="Comic Sans MS, sans-serif">Choose a destination</text><text x="398" y="374" font-size="17" font-family="Comic Sans MS, sans-serif">Map not to scale. Or sense.</text></svg>`,
  travel: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><path class="thin-ink" d="M0 354 C140 290, 247 372, 383 317 C503 269, 545 310, 640 268"/>${person(180,232,"happy")}<path class="squiggle color-red" d="M341 219 L516 219 L556 267 L327 267 Z"/><circle class="squiggle" cx="380" cy="278" r="25"/><circle class="squiggle" cx="504" cy="278" r="25"/><path class="thin-ink" d="M371 237 L414 237 M430 237 L473 237"/><path class="squiggle" d="M62 53 L426 53 L426 98 L62 98 Z"/><text x="81" y="82" font-size="21" font-family="Comic Sans MS, sans-serif">The journey begins. Snacks are legally required.</text></svg>`,
  work: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/>${person(171,252,"panic")}${phone(303,138,true)}${kraken()}<path class="squiggle" d="M37 49 L258 49 L258 98 L37 98 Z"/><text x="54" y="79" font-size="20" font-family="Comic Sans MS, sans-serif">A wild work thing appears!</text></svg>`,
  beach: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><path class="squiggle color-blue" d="M0 276 C90 239, 157 310, 248 273 C371 224, 477 296, 640 238 L640 440 L0 440 Z"/><path class="squiggle color-gold" d="M0 314 C102 286, 179 352, 293 318 C430 278, 515 340, 640 298 L640 440 L0 440 Z"/>${person(322,248,"happy")}<path class="thin-ink" d="M108 178 L162 91 L216 178 M162 92 L162 317"/><circle class="squiggle color-gold" cx="522" cy="78" r="42"/><text x="47" y="63" font-size="25" font-family="Comic Sans MS, sans-serif">Beach Mode</text></svg>`,
  mountains: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><path class="squiggle color-purple" d="M38 368 L180 123 L302 368 Z"/><path class="squiggle color-blue" d="M202 368 L380 75 L594 368 Z"/><path class="thin-ink" d="M141 190 L180 123 L215 190 M319 175 L380 75 L443 176"/>${person(280,288,"happy")}<text x="62" y="76" font-size="25" font-family="Comic Sans MS, sans-serif">Mountains: suspiciously uphill</text></svg>`,
  cabin: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><path class="squiggle color-green" d="M0 308 C105 254, 206 315, 320 284 C440 252, 539 278, 640 226 L640 440 L0 440 Z"/><path class="squiggle color-red" d="M174 248 L318 132 L463 248 Z"/><rect class="squiggle" x="205" y="246" width="228" height="123"/><rect class="squiggle color-gold" x="289" y="290" width="58" height="79"/><path class="thin-ink" d="M73 337 L115 230 L158 337 M489 337 L532 214 L577 337"/>${person(73,280,"happy")}<text x="51" y="68" font-size="25" font-family="Comic Sans MS, sans-serif">Cabin: Wi-Fi powered by squirrels</text></svg>`,
  moon: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><circle class="squiggle color-purple" cx="499" cy="93" r="35"/><path class="squiggle" d="M0 322 C88 301, 156 345, 244 317 C345 285, 434 330, 640 280 L640 440 L0 440 Z"/>${person(278,247,"happy")}<path class="thin-ink" d="M333 171 C392 111, 473 164, 509 207"/><text x="70" y="80" font-size="25" font-family="Comic Sans MS, sans-serif">The Moon: excellent roaming charges</text></svg>`,
  fun: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/>${person(278,243,"happy")}${bird(391,80)}<path class="squiggle color-gold" d="M92 297 C172 250, 255 315, 338 275 C433 230, 524 292, 596 246 L596 383 L92 383 Z"/><path class="thin-ink" d="M116 98 C120 130, 157 132, 163 101 M480 159 C519 143, 541 164, 554 195 M70 191 C104 194, 119 217, 112 251"/><text x="72" y="62" font-size="27" font-family="Comic Sans MS, sans-serif">Actual fun detected</text></svg>`,
  hydra: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/>${hydra()}${person(115,291,"panic")}</svg>`,
  ending: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/><circle class="squiggle color-gold" cx="521" cy="94" r="48"/><path class="squiggle color-blue" d="M0 292 C139 239, 243 320, 366 270 C481 224, 552 273, 640 231 L640 440 L0 440 Z"/>${person(300,243, state.score >= 60 ? "happy" : "panic")}<path class="squiggle" d="M77 57 L467 57 L467 112 L77 112 Z"/><text x="95" y="92" font-size="24" font-family="Comic Sans MS, sans-serif">Vacation results are in.</text></svg>`,
  skeleton: () => `<svg viewBox="0 0 640 440" aria-hidden="true"><rect width="640" height="440" fill="#fffdf5"/>${laptop(288,246)}<g class="wobble"><circle class="thin-ink" cx="210" cy="153" r="31"/><circle class="ink-fill" cx="199" cy="147" r="4"/><circle class="ink-fill" cx="222" cy="147" r="4"/><path class="thin-ink" d="M198 167 L224 167 M210 184 L210 282 M210 210 L163 239 M210 210 L263 237 M210 282 L171 351 M210 282 L250 351"/></g><path class="squiggle" d="M73 58 L539 58 L539 108 L73 108 Z"/><text x="92" y="90" font-size="24" font-family="Comic Sans MS, sans-serif">Inbox zero. Happiness also zero.</text></svg>`
};

const scenes = {
  start: {
    chapter: "Chapter 1: The Dangerous Idea",
    title: "You decide whether to take a vacation.",
    graphic: "start",
    note: "A vacation is a period of rest, not a distributed work site with novelty lighting.",
    text: ["You are at your desk when a tiny bird wearing sunglasses lands on your monitor.", "It tilts its head and asks, in the tone of a consultant billing by the hour: \"Have you tried... leaving?\""],
    choices: [
      { label: "Take a vacation", desc: "Bold. Revolutionary. Possibly legal.", next: "destination", score: 0, stamp: "decide" },
      { label: "Just check one more email", desc: "The traditional opening move in workplace tragedy.", next: "emailLoop", score: -30, work: true }
    ]
  },
  emailLoop: {
    chapter: "Ending: The Skeleton at the Keyboard",
    title: "You checked one email. Then another. Then time became soup.",
    graphic: "skeleton",
    note: "Your calendar now refers to you in the past tense.",
    text: ["You became a workplace legend: the person who never left.", "Achievement unlocked: Inbox Zero, Happiness Zero."],
    choices: [{ label: "Try again, but with boundaries", desc: "The bird approves.", next: "start", reset: true }]
  },
  destination: {
    chapter: "Chapter 2: Cartography of Feelings",
    title: "Choose your destination.",
    graphic: "map",
    note: "All destinations are improved by turning off notifications before arrival.",
    text: ["The map unfolds dramatically and immediately ignores basic geography.", "Where will you go to remember that you are more than your unread count?"],
    choices: [
      { label: "Beach", desc: "Sand, sun, and aggressive seagulls.", next: "transport", set: {destination: "beach"}, stamp: "beach" },
      { label: "Mountains", desc: "Fresh air and suspiciously vertical sidewalks.", next: "transport", set: {destination: "mountains"}, stamp: "mountains" },
      { label: "Cabin in the woods", desc: "Wi-Fi password: ask the raccoon.", next: "transport", set: {destination: "cabin"}, stamp: "cabin" },
      { label: "The Moon", desc: "Quiet, scenic, terrible cell service.", next: "transport", set: {destination: "moon"}, stamp: "moon" }
    ]
  },
  transport: {
    chapter: "Chapter 3: Movement with Snacks",
    title: "Decide how to get there.",
    graphic: "travel",
    note: "Travel delays are not work time. They are bonus pretzel time.",
    text: ["A tiny clipboard appears and demands logistics.", "Choose a method of transportation. Choose wisely, or at least choose snacks."],
    choices: [
      { label: "Road trip", desc: "Includes playlists, roadside attractions, and crumbs.", next: "arrival", set: {transport:"car"}, stamp: "car", score: +5 },
      { label: "Fly", desc: "A miracle of engineering and tiny pretzels.", next: "arrival", set: {transport:"plane"}, stamp: "plane" },
      { label: "Teleport", desc: "Fast, stylish, briefly concerning.", next: "arrival", set: {transport:"teleport"}, stamp: "teleport", score: +8 },
      { label: "Join a Teams meeting while traveling", desc: "The Teams Hydra smells weakness.", next: "teamsHydra", score: -25, work: true }
    ]
  },
  teamsHydra: {
    chapter: "Work Monster Encounter",
    title: "The Teams Hydra appears.",
    graphic: "hydra",
    note: "Every time you say \"quick sync,\" two more meetings grow from the calendar swamp.",
    text: ["You open one meeting invite and the Teams Hydra rises from the agenda marsh.", "It has three heads. All of them say, \"This should only take 15 minutes.\""],
    choices: [
      { label: "Politely decline and continue vacation", desc: "A boundary with complete sentences.", next: "arrival", score: +10, stamp: "boundaries" },
      { label: "Attend the meeting", desc: "The beach/conference room hybrid nobody asked for.", next: "workSpiral", score: -30, work: true }
    ]
  },
  arrival: {
    chapter: "Chapter 4: Arrival-ish",
    title: "You made it. Now do vacation things.",
    graphic: () => state.destination || "beach",
    note: "Do not confuse \"available by phone\" with \"mandatory side quest.\"",
    text: ["You arrive and immediately feel your shoulders attempt to remember what down is.", "A suspiciously work-shaped cloud drifts by, but for now, you are free."],
    choices: [
      { label: "Have actual fun", desc: "Nap, wander, eat something impractical, stare at water/trees/space.", next: "temptation", score: +15, stamp: "fun" },
      { label: "Check work email, just in case", desc: "Famous last words, now with sunscreen.", next: "outlookKraken", score: -20, work: true },
      { label: "Set out-of-office and put phone away", desc: "A power move disguised as self-care.", next: "temptation", score: +15, stamp: "boundaries" }
    ]
  },
  outlookKraken: {
    chapter: "Work Monster Encounter",
    title: "The Outlook Kraken breaches the surface.",
    graphic: "work",
    note: "The Kraken cannot attack unless you open the inbox hatch.",
    text: ["One innocent glance at email summons a many-tentacled inbox creature.", "It whispers, \"Since you're online...\" and hands you a quarterly report."],
    choices: [
      { label: "Close email and return to vacation", desc: "Tentacles hate boundaries.", next: "temptation", score: +10, stamp: "boundaries" },
      { label: "Answer a few messages", desc: "The phrase \"a few\" is doing industrial-grade denial here.", next: "workSpiral", score: -30, work: true }
    ]
  },
  workSpiral: {
    chapter: "Bad Ending: Desk Relocator",
    title: "You technically changed locations.",
    graphic: "ending",
    note: "This is not PTO. This is laptop migration.",
    text: ["You sit in a beautiful place, lit by a laptop glow, while seagulls steal your charger cable.", "Achievement unlocked: Vacation In Name Only."],
    onEnter: () => addStamp("bad"),
    choices: [{ label: "Restart and defend vacation", desc: "This time, the phone goes in a drawer.", next: "start", reset: true }]
  },
  temptation: {
    chapter: "Chapter 5: The Final Temptation",
    title: "Your phone buzzes: “No rush, but...”",
    graphic: "fun",
    note: "\"No rush\" is often a tiny hat worn by \"please rush.\"",
    text: ["The message preview glows ominously. Somewhere, a raccoon puts on reading glasses.", "You are one choice away from either true leisure or the spreadsheet swamp."],
    choices: [
      { label: "Ignore it and continue vacation", desc: "Healthy. Suspiciously simple.", next: "ending", score: +20, stamp: "wizard" },
      { label: "Put phone in a drawer", desc: "The drawer accepts its sacred duty.", next: "ending", score: +25, stamp: "wizard" },
      { label: "Reply with 'quick question?'", desc: "You have opened the goblin door.", next: "workSpiral", score: -35, work: true }
    ]
  },
  ending: {
    chapter: "Finale",
    title: "Vacation results are in.",
    graphic: "ending",
    note: "The narrator has prepared a certificate and a small lemonade.",
    text: () => {
      if (state.score >= 90) return ["You disconnected, relaxed, and returned with actual energy.", "Ending unlocked: Vacation Wizard. Your out-of-office message sparkles gently." ];
      if (state.score >= 60) return ["You mostly took a real vacation. A few work gremlins nibbled the edges, but you escaped.", "Ending unlocked: Mostly Relaxed Human." ];
      if (state.score >= 30) return ["You had moments of fun, but your brain kept wearing a name badge.", "Ending unlocked: Emotionally Still at Work." ];
      return ["You visited a destination, but your job came in your backpack.", "Ending unlocked: Business Trip with Better Scenery." ];
    },
    choices: [{ label: "Play again", desc: "New vacation, stronger boundaries.", next: "start", reset: true }]
  }
};

function resolveGraphic(scene) {
  const key = typeof scene.graphic === "function" ? scene.graphic() : scene.graphic;
  return graphics[key] ? graphics[key]() : graphics.beach();
}

function renderScene(name) {
  state.scene = name;
  const scene = scenes[name];
  if (scene.onEnter) scene.onEnter();
  $("chapterLabel").textContent = scene.chapter;
  $("sceneTitle").textContent = scene.title;
  const text = typeof scene.text === "function" ? scene.text() : scene.text;
  $("sceneText").innerHTML = text.map(p => `<p>${p}</p>`).join("");
  $("sceneGraphic").innerHTML = resolveGraphic(scene);
  $("narratorNote").textContent = scene.note;
  $("choices").innerHTML = "";
  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.innerHTML = `${choice.label}<small>${choice.desc}</small>`;
    button.addEventListener("click", () => choose(choice));
    $("choices").appendChild(button);
    if (index === 0) setTimeout(() => button.focus({preventScroll:true}), 0);
  });
  updateDashboard();
  $("game-panel").focus({preventScroll:true});
}

function choose(choice) {
  if (choice.reset) {
    resetGame();
    renderScene(choice.next);
    return;
  }
  if (choice.set) Object.assign(state, choice.set);
  if (choice.stamp) addStamp(choice.stamp);
  if (choice.score) adjustScore(choice.score);
  if (choice.work) state.workChoices += 1;
  renderScene(choice.next);
}

function resetGame() {
  state.score = 100;
  state.stamps = [];
  state.destination = "";
  state.transport = "";
  state.workChoices = 0;
  updateDashboard();
}

$("restartButton").addEventListener("click", () => { resetGame(); renderScene("start"); });
updateDashboard();
renderScene("start");
