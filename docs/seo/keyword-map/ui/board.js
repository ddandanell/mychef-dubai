/* myCHEF SEO Intelligence OS — shell behaviour. Does not change SEO scores. */
(function () {
  if (window.__MYCHEF_SEO_OS__) return;
  window.__MYCHEF_SEO_OS__ = true;
  const PAGE = (document.body.getAttribute("data-seo-page") || location.pathname.split("/").pop() || "index.html").replace(/^\//, "") || "index.html";
  const FILE = PAGE.includes(".") ? PAGE : PAGE ? PAGE + ".html" : "index.html";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function boot() {
    try { bootInner(); } catch (err) { console.error(err); document.documentElement.dataset.seoReady = "1"; }
  });
  function bootInner() {
    document.documentElement.classList.add("seo-os");
    document.body.classList.add("seo-os");
    splitMetrics();
    fillMeta();
    hideLegacyHeader();
    wireTopbar();
    enhanceTables();
    buildOpportunities();
    wireNavToggle();
    document.documentElement.dataset.seoReady = "1";
  }

  function splitMetrics() {
    const tiles = $$(".seo-os > .tiles, .seo-os .tiles").filter((el) => el.parentElement === document.body || el.previousElementSibling?.tagName === "HEADER" || el.parentElement?.tagName === "BODY");
    const root = tiles[0] || $(".tiles");
    if (!root) return;
    const cards = $$(":scope > .tile", root);
    if (cards.length <= 5) {
      root.classList.add("seo-metrics-primary");
      return;
    }
    const primary = cards.slice(0, 5);
    const secondary = cards.slice(5);
    root.classList.add("seo-metrics-primary");
    secondary.forEach((c) => c.remove());
    const row = document.createElement("div");
    row.className = "seo-metrics-secondary";
    secondary.forEach((c) => row.appendChild(c));
    root.after(row);
  }

  function fillMeta() {
    const meta = $("[data-seo-meta]");
    if (!meta) return;
    const bits = [];
    $$(".seo-metrics-primary .tile, .tiles .tile").slice(0, 3).forEach((t) => {
      const n = $(".n", t)?.textContent?.trim();
      const l = $(".l", t)?.childNodes[0]?.textContent?.trim() || $(".l", t)?.textContent?.trim();
      if (n && l) bits.push(n + " " + l.split("\n")[0].toLowerCase());
    });
    const gen = $("#gen")?.textContent || (document.body.getAttribute("data-seo-updated") || "");
    if (gen) bits.push("Updated " + gen.replace(/^\S+\s/, ""));
    if (bits.length) meta.textContent = bits.join(" · ");
  }

  function hideLegacyHeader() {
    const header = $$("body.seo-os > header").find((h) => h.id !== "seo-topbar" && !h.closest("#seo-drawer"));
    if (!header) return;
    const sub = $(".sub", header);
    if (sub) {
      const help = $("#seo-help-copy");
      if (help) help.innerHTML = sub.innerHTML;
    }
  }

  function wireTopbar() {
    const run = $("[data-seo-action='run']");
    const exp = $("[data-seo-action='export']");
    const help = $("[data-seo-action='help']");
    if (run) run.addEventListener("click", openRunModal);
    if (exp) exp.addEventListener("click", exportCsv);
    if (help) help.addEventListener("click", openHelp);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        closeModal();
        document.body.classList.remove("seo-nav-open");
      }
    });
  }

  function wireNavToggle() {
    const btn = $(".seo-nav-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => document.body.classList.toggle("seo-nav-open"));
    const backdrop = $("#seo-drawer-backdrop");
    if (backdrop) backdrop.addEventListener("click", () => {
      closeDrawer();
      document.body.classList.remove("seo-nav-open");
    });
  }

  function enhanceTables() {
    $$("main table, body > table").forEach((table) => {
      const rows = $$("tbody tr", table).filter((tr) => !tr.classList.contains("detail"));
      if (rows.length < 4) return;
      if (!table.closest(".seo-table-wrap")) {
        const wrap = document.createElement("div");
        wrap.className = "seo-table-wrap";
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
      }
      $$("thead th", table).forEach((th, i) => {
        if (th.dataset.nosort) return;
        th.addEventListener("click", () => sortTable(table, i, th));
      });
      $$("tbody tr", table).forEach((tr) => {
        if (tr.classList.contains("detail") || tr.classList.contains("page")) return;
        tr.addEventListener("click", (e) => {
          if (e.target.closest("a, button, input, select, summary")) return;
          openDrawerFromRow(table, tr);
        });
      });
      paginate(table);
    });

    document.addEventListener("click", (e) => {
      const tr = e.target.closest("tr.page");
      if (!tr) return;
      if (e.target.closest("a, button")) return;
      e.preventDefault();
      const detail = tr.nextElementSibling;
      openDrawer({
        title: tr.getAttribute("data-url") || $("td", tr)?.textContent?.trim() || "Page",
        html: detail && detail.classList.contains("detail") ? detail.querySelector("td")?.innerHTML : rowToDl(tr),
      });
      $$("tr.is-selected").forEach((r) => r.classList.remove("is-selected"));
      tr.classList.add("is-selected");
    });

    ["input", "change"].forEach((ev) => {
      document.addEventListener(ev, () => {
        $$(".seo-table-wrap table").forEach(paginate);
      });
    });
  }

  function sortTable(table, col, th) {
    const dir = th.dataset.sorted === "asc" ? "desc" : "asc";
    $$("th", table).forEach((h) => delete h.dataset.sorted);
    th.dataset.sorted = dir;
    const tbody = table.tBodies[0];
    const rows = $$(":scope > tr", tbody).filter((r) => !r.classList.contains("detail"));
    const paired = rows.map((r) => {
      const next = r.nextElementSibling?.classList.contains("detail") ? r.nextElementSibling : null;
      return { r, next };
    });
    paired.sort((a, b) => {
      const av = cellVal(a.r, col);
      const bv = cellVal(b.r, col);
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
    paired.forEach(({ r, next }) => {
      tbody.appendChild(r);
      if (next) tbody.appendChild(next);
    });
    paginate(table);
  }

  function cellVal(tr, col) {
    const td = tr.children[col];
    const t = (td?.textContent || "").trim().replace(/,/g, "");
    const n = parseFloat(t.replace(/[^0-9.\-]/g, ""));
    if (!Number.isNaN(n) && /[\d]/.test(t)) return n;
    return t.toLowerCase();
  }

  function paginate(table) {
    const pageSize = 100;
    const rows = $$("tbody > tr", table).filter((r) => !r.classList.contains("detail") && !r.classList.contains("hidden"));
    if (rows.length <= pageSize) {
      const old = table.parentElement?.querySelector(":scope > .seo-pager");
      if (old) old.remove();
      return;
    }
    let page = Number(table.dataset.page || 1);
    const pages = Math.ceil(rows.length / pageSize);
    if (page > pages) page = pages;
    table.dataset.page = String(page);
    rows.forEach((r, i) => {
      const show = i >= (page - 1) * pageSize && i < page * pageSize;
      r.style.display = show ? "" : "none";
      const d = r.nextElementSibling;
      if (d && d.classList.contains("detail")) d.style.display = "none";
    });
    let pager = table.parentElement.querySelector(":scope > .seo-pager");
    if (!pager) {
      pager = document.createElement("div");
      pager.className = "seo-pager";
      table.parentElement.appendChild(pager);
    }
    pager.innerHTML = "";
    const prev = document.createElement("button");
    prev.className = "seo-btn";
    prev.textContent = "Prev";
    prev.disabled = page <= 1;
    prev.onclick = () => { table.dataset.page = String(page - 1); paginate(table); };
    const next = document.createElement("button");
    next.className = "seo-btn";
    next.textContent = "Next";
    next.disabled = page >= pages;
    next.onclick = () => { table.dataset.page = String(page + 1); paginate(table); };
    const lab = document.createElement("span");
    lab.textContent = page + " / " + pages + " · " + rows.length + " rows";
    pager.append(prev, lab, next);
  }

  function rowToDl(tr) {
    const table = tr.closest("table");
    const heads = $$("thead th", table).map((th) => th.textContent.trim());
    const cells = $$(":scope > td", tr);
    let html = '<dl class="seo-kv">';
    cells.forEach((td, i) => {
      html += "<dt>" + escapeHtml(heads[i] || "Col " + (i + 1)) + "</dt><dd>" + td.innerHTML + "</dd>";
    });
    html += "</dl>";
    return html;
  }

  function openDrawerFromRow(table, tr) {
    $$("tr.is-selected").forEach((r) => r.classList.remove("is-selected"));
    tr.classList.add("is-selected");
    openDrawer({
      title: ($("td", tr)?.textContent || "Record").trim().split("\n")[0],
      html: rowToDl(tr),
    });
  }

  function openDrawer({ title, html }) {
    const d = $("#seo-drawer");
    const b = $("#seo-drawer-backdrop");
    if (!d) return;
    $("#seo-drawer-title", d).textContent = title;
    $(".seo-drawer-body", d).innerHTML = html || "";
    d.classList.add("on");
    if (b) b.classList.add("on");
  }
  function closeDrawer() {
    $("#seo-drawer")?.classList.remove("on");
    $("#seo-drawer-backdrop")?.classList.remove("on");
  }
  window.seoCloseDrawer = closeDrawer;

  function openModal(html) {
    const root = $("#seo-modal-root");
    if (!root) return;
    root.innerHTML = '<div class="seo-modal">' + html + "</div>";
    root.classList.add("on");
    root.onclick = (e) => { if (e.target === root) closeModal(); };
  }
  function closeModal() { $("#seo-modal-root")?.classList.remove("on"); }

  function openHelp() {
    const copy = $("#seo-help-copy")?.innerHTML || "Operational board. Scores come from the built HTML, not from intent.";
    openModal("<h2>About this view</h2><div class='seo-help'>" + copy + "</div><p style='margin-top:16px'><button class='seo-btn' type='button' onclick='document.getElementById(\"seo-modal-root\").classList.remove(\"on\")'>Close</button></p>");
  }

  function openRunModal() {
    const steps = [
      "Scanning pages",
      "Checking keyword assignments",
      "Checking SERPs",
      "Checking Search Console",
      "Checking internal links",
      "Checking competitors",
      "Checking AI visibility",
    ];
    openModal(
      "<h2>Agent run</h2>" +
      "<p class='seo-help'>Runs are started from the machine that owns the repo. This screen does not write to the site.</p>" +
      "<ol class='seo-run-steps'>" +
      steps.map((s, i) => "<li class='" + (i === 0 ? "run" : "") + "'><span class='seo-run-dot'></span>" + s + "</li>").join("") +
      "</ol>" +
      "<p class='seo-help' style='margin-top:16px'><code>docs/seo/keyword-map/run-loop.sh live</code></p>" +
      "<p class='seo-help'>After a run, Status, Agent Runs and the Board refresh from the archive. Nothing here invents scores.</p>" +
      "<p style='margin-top:16px;display:flex;gap:8px'><a class='seo-btn seo-btn-primary' href='/seo/actions.html'>Open Agent Runs</a>" +
      "<button class='seo-btn' type='button' onclick='document.getElementById(\"seo-modal-root\").classList.remove(\"on\")'>Close</button></p>"
    );
  }

  function exportCsv() {
    const a = $$("a[href$='.csv']")[0];
    if (a) { location.href = a.href; return; }
    const table = $("main table, .seo-table-wrap table");
    if (!table) return;
    const rows = $$("tr", table).filter((tr) => !tr.classList.contains("detail") && tr.style.display !== "none" && !tr.classList.contains("hidden"));
    const csv = rows.map((tr) => $$("th,td", tr).map((c) => '"' + c.textContent.trim().replace(/"/g, '""') + '"').join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = FILE.replace(".html", "") + ".csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function buildOpportunities() {
    if (!/^(index\.html)?$/.test(FILE) && FILE !== "index.html" && !location.pathname.endsWith("/seo") && !location.pathname.endsWith("/seo/")) return;
    if (!$("tr.page")) return;
    const items = [];
    $$("tr.page").forEach((tr) => {
      if (tr.dataset.inactive === "1") return;
      const url = tr.dataset.url || "";
      const kw = $(".kw", tr)?.textContent?.trim() || "";
      if (tr.dataset.miss === "1") items.push({ impact: "HIGH IMPACT", title: "Primary missing from title or H1", kw, url, why: "Contract owner is not named in the two placements that score most.", action: "Review" });
      if (tr.dataset.risk === "1") items.push({ impact: "HIGH IMPACT", title: "Heading collision", kw, url, why: "Another page uses this primary in a heading.", action: "Review" });
      if (tr.dataset.double === "1") items.push({ impact: "MEDIUM", title: "Assigned twice", kw, url, why: "The same phrase is listed on more than one page.", action: "Review" });
      if (tr.dataset.low === "1") items.push({ impact: "MEDIUM", title: "Primary score below 7", kw, url, why: "Placement on the live page is incomplete.", action: "Review" });
      if (+tr.dataset.room > 0) items.push({ impact: "OPPORTUNITY", title: "Free subkeyword slots", kw, url, why: tr.dataset.room + " open slot(s) on this URL.", action: "Review" });
    });
    const rank = { "HIGH IMPACT": 0, MEDIUM: 1, OPPORTUNITY: 2 };
    items.sort((a, b) => rank[a.impact] - rank[b.impact]);
    const top = items.slice(0, 6);
    if (!top.length) return;
    const host = document.createElement("section");
    host.id = "seo-opportunities";
    host.innerHTML = top.map((it) =>
      '<article class="seo-opp">' +
        '<div><span class="seo-pill ' + (it.impact === "HIGH IMPACT" ? "seo-pill-critical" : it.impact === "MEDIUM" ? "seo-pill-warning" : "seo-pill-opportunity") + '">' + it.impact + "</span></div>" +
        "<h3>" + escapeHtml(it.title) + "</h3>" +
        '<div class="seo-opp-kw">' + escapeHtml(it.kw || "—") + "</div>" +
        "<dl><dt>To</dt><dd><code>" + escapeHtml(it.url) + "</code></dd><dt>Why</dt><dd>" + escapeHtml(it.why) + "</dd></dl>" +
        '<div class="seo-opp-actions">' +
          '<a class="seo-btn seo-btn-primary" href="#">' + it.action + "</a>" +
          '<a class="seo-btn" href="/seo/backlog.html">Backlog</a>' +
        "</div></article>"
    ).join("");
    const after = $(".seo-metrics-secondary") || $(".tiles");
    if (after) after.after(host);
    host.addEventListener("click", (e) => {
      const a = e.target.closest("a.seo-btn-primary");
      if (!a) return;
      e.preventDefault();
      const card = a.closest(".seo-opp");
      const url = card?.querySelector("code")?.textContent;
      const row = $$("tr.page").find((tr) => tr.dataset.url === url);
      if (row) {
        row.scrollIntoView({ block: "center" });
        row.click();
      }
    });
  }

  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
})();
