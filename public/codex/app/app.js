const STORAGE_KEY = "codex-demo-picker-projects";

const rubric = [
  {
    key: "usefulness",
    label: "Usefulness",
    max: 25,
    terms: ["useful", "users", "team", "marketing", "organizer", "developer", "attendee", "workflow", "pain", "saves", "helps"],
  },
  {
    key: "codex",
    label: "Codex leverage",
    max: 25,
    terms: ["codex", "agent", "terminal", "browser", "tool", "plugin", "voice", "transcribe", "github", "review", "test", "verify", "image"],
  },
  {
    key: "demo",
    label: "Demo clarity",
    max: 20,
    terms: ["before", "after", "demo", "live", "working", "shipped", "link", "vercel", "screenshot", "shows"],
  },
  {
    key: "event",
    label: "Event fit",
    max: 20,
    terms: ["delegation", "browser", "tools", "app", "artifact", "community", "openai", "tessl", "meetup", "codex"],
  },
  {
    key: "risk",
    label: "Reliability",
    max: 10,
    terms: [],
  },
];

const samples = [
  {
    name: "Codex London Field Kit",
    team: "Abhivir",
    demoUrl: "https://codex-field-kit.vercel.app",
    repoUrl: "",
    summary: "Turns raw event audio into a same-night marketing and community handoff for OpenAI/Tessl.",
    audience: "OpenAI devrel, Tessl marketing, community organizers, and attendees who want a recap.",
    codexUse: "Codex transcribed audio with terminal tools, extracted event themes, built the website, generated content drafts, and verified mobile/desktop screenshots.",
    beforeAfter: "Before: six noisy audio files and no publishable recap. After: website, transcript evidence, social drafts, and exportable handoff.",
    tags: ["terminal/tools", "real user utility", "work artifacts", "voice prompting"],
    reliability: 5,
    wow: 4,
    polish: 5,
  },
  {
    name: "PR Rescue Room",
    team: "Team Merge",
    demoUrl: "",
    repoUrl: "https://github.com/example/pr-rescue",
    summary: "A dashboard that reads a failing pull request, summarizes CI failures, and proposes a patch plan.",
    audience: "Developers trying to land work quickly during a sprint.",
    codexUse: "Codex inspects GitHub, terminal logs, tests, and review comments, then produces a ranked fix checklist.",
    beforeAfter: "Before: red CI and noisy logs. After: clear root cause, patch, and retest plan.",
    tags: ["agent delegation", "github/pr", "terminal/tools", "real user utility"],
    reliability: 4,
    wow: 4,
    polish: 3,
  },
  {
    name: "Browser Bug Replay",
    team: "Viewport",
    demoUrl: "",
    repoUrl: "",
    summary: "Records a broken UI path and asks Codex to reproduce, inspect, and verify the fix in browser.",
    audience: "Frontend teams with flaky UI bug reports.",
    codexUse: "Uses browser verification, screenshots, terminal tests, and Codex comments to explain what changed.",
    beforeAfter: "Before: vague user bug report. After: reproduced flow, fixed UI, passing screenshot check.",
    tags: ["browser verification", "terminal/tools", "real user utility"],
    reliability: 4,
    wow: 5,
    polish: 4,
  },
];

let projects = loadProjects();

const form = document.querySelector("#submissionForm");
const leaderboardList = document.querySelector("#leaderboardList");
const projectGrid = document.querySelector("#projectGrid");
const toast = document.querySelector("#toast");

function loadProjects() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function textOf(project) {
  return [
    project.name,
    project.summary,
    project.audience,
    project.codexUse,
    project.beforeAfter,
    project.tags.join(" "),
    project.demoUrl,
    project.repoUrl,
  ]
    .join(" ")
    .toLowerCase();
}

function countMatches(text, terms) {
  return terms.reduce((count, term) => count + (text.includes(term) ? 1 : 0), 0);
}

function scoreProject(project) {
  const text = textOf(project);
  const tagBonus = project.tags.length * 2;
  const linkBonus = project.demoUrl || project.repoUrl ? 4 : 0;
  const beforeAfterBonus = project.beforeAfter.length > 60 ? 5 : 0;

  const subscores = {};
  for (const item of rubric) {
    if (item.key === "risk") {
      subscores[item.key] = Math.round((Number(project.reliability) / 5) * item.max);
      continue;
    }
    const matches = countMatches(text, item.terms);
    const base = Math.min(item.max, Math.round((matches / Math.max(4, item.terms.length)) * item.max));
    subscores[item.key] = base;
  }

  subscores.usefulness = Math.min(25, subscores.usefulness + (project.audience.length > 35 ? 4 : 0));
  subscores.codex = Math.min(25, subscores.codex + tagBonus);
  subscores.demo = Math.min(20, subscores.demo + linkBonus + beforeAfterBonus);
  subscores.event = Math.min(20, subscores.event + (project.tags.includes("agent delegation") ? 4 : 0));

  const sliderBonus = Number(project.wow) + Number(project.polish);
  const total = Math.min(
    100,
    Object.values(subscores).reduce((sum, value) => sum + value, 0) + sliderBonus,
  );

  return { total, subscores };
}

function enrichProject(project) {
  const result = scoreProject(project);
  const reasons = [];
  if (result.subscores.usefulness >= 18) reasons.push("clear real-world utility");
  if (result.subscores.codex >= 18) reasons.push("strong Codex leverage");
  if (result.subscores.demo >= 15) reasons.push("easy before/after demo");
  if (result.subscores.event >= 15) reasons.push("fits tonight's Codex narrative");
  if (result.subscores.risk < 7) reasons.push("demo reliability risk");
  return { ...project, score: result.total, subscores: result.subscores, reasons };
}

function sortedProjects() {
  return projects.map(enrichProject).sort((a, b) => b.score - a.score);
}

function getFormProject() {
  const tags = [...document.querySelectorAll(".chips input:checked")].map((input) => input.value);
  return {
    id: crypto.randomUUID(),
    name: value("name"),
    team: value("team"),
    demoUrl: value("demoUrl"),
    repoUrl: value("repoUrl"),
    summary: value("summary"),
    audience: value("audience"),
    codexUse: value("codexUse"),
    beforeAfter: value("beforeAfter"),
    tags,
    reliability: value("reliability"),
    wow: value("wow"),
    polish: value("polish"),
    createdAt: new Date().toISOString(),
  };
}

function value(id) {
  return document.querySelector(`#${id}`).value.trim();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1700);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("Copy failed. Select manually.");
  }
}

function renderSummary() {
  const scored = sortedProjects();
  const avg = scored.length
    ? Math.round(scored.reduce((sum, project) => sum + project.score, 0) / scored.length)
    : 0;
  document.querySelector("#projectCount").textContent = scored.length;
  document.querySelector("#avgScore").textContent = avg;
}

function scoreBar(subscores) {
  return rubric
    .map((item) => {
      const width = Math.round((subscores[item.key] / item.max) * 100);
      return `<span title="${item.label}: ${subscores[item.key]}/${item.max}" style="width:${width}%"></span>`;
    })
    .join("");
}

function projectCard(project, index, featured = false) {
  const rank = index + 1;
  const links = [
    project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo</a>` : "",
    project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">Artifact</a>` : "",
  ]
    .filter(Boolean)
    .join("");
  return `
    <article class="${featured ? "leader-card" : "project-card"}">
      <div class="rank-row">
        <span class="rank">${rank <= 5 ? `#${rank}` : "Waitlist"}</span>
        <strong>${project.score}</strong>
      </div>
      <h3>${escapeHtml(project.name)}</h3>
      <p class="team">${escapeHtml(project.team)}</p>
      <p>${escapeHtml(project.summary)}</p>
      <div class="score-bars">${scoreBar(project.subscores)}</div>
      <div class="reason-list">${project.reasons.map((reason) => `<span>${reason}</span>`).join("")}</div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="card-actions">
        ${links}
        <button type="button" data-copy="${project.id}">Copy Notes</button>
        <button type="button" data-delete="${project.id}">Remove</button>
      </div>
    </article>
  `;
}

function renderProjects() {
  const scored = sortedProjects();
  leaderboardList.innerHTML = scored.length
    ? scored.slice(0, 5).map((project, index) => projectCard(project, index, true)).join("")
    : `<div class="empty-state">No submissions yet. Add projects or load sample data.</div>`;
  projectGrid.innerHTML = scored.length
    ? scored.map((project, index) => projectCard(project, index)).join("")
    : `<div class="empty-state">Every submitted project will appear here.</div>`;
  renderSummary();
}

function notesFor(project) {
  return `${project.name} by ${project.team}
Score: ${project.score}/100

Why demo-worthy:
${project.reasons.map((reason) => `- ${reason}`).join("\n") || "- Needs judge discussion"}

What they built:
${project.summary}

Useful for:
${project.audience || "Not specified"}

Codex usage:
${project.codexUse || "Not specified"}

Before/after:
${project.beforeAfter || "Not specified"}

Links:
${project.demoUrl || "No demo link"}
${project.repoUrl || "No artifact link"}`;
}

function top5Text() {
  return sortedProjects()
    .slice(0, 5)
    .map((project, index) => `${index + 1}. ${project.name} (${project.score}/100) - ${project.summary}`)
    .join("\n");
}

function judgePacket() {
  const scored = sortedProjects();
  return `Codex Demo Picker judge packet

Selection criteria:
- Useful to people in this room or the OpenAI/Tessl team
- Shows real Codex leverage: agent delegation, terminal/tools, browser verification, plugins, voice, image/assets, GitHub, or work artifacts
- Has a clear before/after that demos quickly
- Fits the event message: Codex makes delegated workflows practical
- Reliable enough to demo live

Recommended top 5:
${top5Text() || "No submissions yet."}

All submissions:

${scored.map(notesFor).join("\n\n---\n\n")}`;
}

function aiJudgePrompt() {
  return `You are judging the OpenAI London Codex mini hackathon. There are more projects than demo slots. Pick the 5 most demo-worthy projects.

Optimize for:
1. usefulness to attendees, OpenAI, Tessl, or developers
2. visible Codex leverage, especially agent delegation, terminal/tool use, browser verification, plugins, voice, image/assets, GitHub, and work artifacts
3. clear before/after demo
4. live reliability
5. fit with the event narrative: Codex moves work from autocomplete to delegated workflows

Return:
- ranked top 5
- one sentence reason for each
- any judge override concerns

Submissions:
${JSON.stringify(projects, null, 2)}`;
}

function exportJson() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), projects: sortedProjects() }, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "codex-demo-picker-submissions.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Exported submissions");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function resetForm() {
  form.reset();
  document.querySelector("#reliability").value = 3;
  document.querySelector("#wow").value = 3;
  document.querySelector("#polish").value = 3;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const project = getFormProject();
  projects.push(project);
  saveProjects();
  resetForm();
  renderProjects();
  showToast("Project scored and ranked");
  document.querySelector("#leaderboard").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("click", (event) => {
  const copyButton = event.target.closest("[data-copy]");
  const deleteButton = event.target.closest("[data-delete]");
  if (copyButton) {
    const project = sortedProjects().find((item) => item.id === copyButton.dataset.copy);
    if (project) copyText(notesFor(project), "Project notes copied");
  }
  if (deleteButton) {
    projects = projects.filter((project) => project.id !== deleteButton.dataset.delete);
    saveProjects();
    renderProjects();
    showToast("Project removed");
  }
});

document.querySelector("#loadSample").addEventListener("click", () => {
  projects = samples.map((sample) => ({ ...sample, id: crypto.randomUUID(), createdAt: new Date().toISOString() }));
  saveProjects();
  renderProjects();
  showToast("Sample projects loaded");
});

document.querySelector("#exportData").addEventListener("click", exportJson);
document.querySelector("#copyTop5").addEventListener("click", () => copyText(top5Text(), "Top 5 copied"));
document.querySelector("#copyJudgePacket").addEventListener("click", () => copyText(judgePacket(), "Judge packet copied"));
document.querySelector("#pastePrompt").addEventListener("click", () => copyText(aiJudgePrompt(), "AI judge prompt copied"));
document.querySelector("#resetForm").addEventListener("click", resetForm);
document.querySelector("#clearAll").addEventListener("click", () => {
  projects = [];
  saveProjects();
  renderProjects();
  showToast("All submissions cleared");
});

renderProjects();
