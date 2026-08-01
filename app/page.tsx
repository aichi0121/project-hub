"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  chinese: string;
  description: string;
  category: "工具" | "學習" | "生活";
  language: string;
  repo: string;
  site?: string;
  privacy?: "Private" | "Public";
  preview: "mingli" | "courses" | "vault" | "subtitle" | "subscope" | "custom";
};

const defaultProjects: Project[] = [
  {
    id: "mingli-paipan",
    title: "Mingli Paipan",
    chinese: "命理排盤",
    description: "輸入出生資料，快速建立清楚易讀的命盤。",
    category: "生活",
    language: "HTML",
    repo: "https://github.com/aichi0121/mingli-paipan",
    site: "https://aichi0121.github.io/mingli-paipan/",
    preview: "mingli",
  },
  {
    id: "my-courses",
    title: "My Courses",
    chinese: "我的課程",
    description: "把分散的課程收進同一個學習書架。",
    category: "學習",
    language: "HTML",
    repo: "https://github.com/aichi0121/my-courses",
    site: "https://aichi0121.github.io/my-courses/",
    preview: "courses",
  },
  {
    id: "python-script-vault",
    title: "Python Script Vault",
    chinese: "腳本工具庫",
    description: "搜尋、整理並快速取用常用 Python 腳本。",
    category: "工具",
    language: "Python",
    repo: "https://github.com/aichi0121/python-script-vault",
    site: "https://aichi0121.github.io/python-script-vault/",
    preview: "vault",
  },
  {
    id: "subtitle-sync-local",
    title: "Subtitle Sync Local",
    chinese: "時軸工房",
    description: "在本機配對影音與 VTT，自動校正字幕時間軸。",
    category: "工具",
    language: "TypeScript",
    repo: "https://github.com/aichi0121/subtitle-sync-local",
    privacy: "Private",
    preview: "subtitle",
  },
  {
    id: "subscope",
    title: "Subscope",
    chinese: "訂閱追蹤",
    description: "掌握定期支出、續費日與每月訂閱總額。",
    category: "生活",
    language: "TypeScript",
    repo: "https://github.com/aichi0121/subscope",
    site: "https://aichi0121.github.io/subscope/",
    preview: "subscope",
  },
];

const filters = ["全部", "工具", "學習", "生活"] as const;

function Icon({ name }: { name: "search" | "star" | "github" | "arrow" | "sync" | "grid" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>,
    github: <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z"/>,
    arrow: <><path d="M5 12h13"/><path d="m14 7 5 5-5 5"/></>,
    sync: <><path d="M20 7h-6V1"/><path d="M20 7a9 9 0 1 0 1 8"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function ProductPreview({ type }: { type: Project["preview"] }) {
  if (type === "mingli") return <div className="product-preview mingli-preview"><div className="mini-top"><span>命理排盤</span><i>乾造</i></div><div className="mingli-grid">{["年柱","月柱","日柱","時柱"].map((x,i)=><div key={x}><small>{x}</small><b>{["甲","丙","庚","壬"][i]}</b><strong>{["子","寅","午","申"][i]}</strong><em>{["正財","七殺","日主","食神"][i]}</em></div>)}</div><div className="mini-foot"><span>五行分布</span><span className="element-bars"><i/><i/><i/><i/><i/></span></div></div>;
  if (type === "courses") return <div className="product-preview courses-preview"><div className="mini-top"><span>我的課程</span><i>12 門</i></div><div className="course-hero"><div className="play">▶</div><div><small>繼續學習</small><b>AI 內容創作工作流</b><span><i style={{width:"72%"}}/></span></div></div><div className="course-row"><i/><i/><i/></div></div>;
  if (type === "vault") return <div className="product-preview vault-preview"><div className="vault-sidebar"><b>PS</b><i/><i/><i/><i/></div><div className="vault-main"><div className="fake-search">⌕ 搜尋腳本...</div><div className="script"><span>PDF</span><div><b>批次合併 PDF</b><small>檔案處理 · 2 min</small></div><em>Run</em></div><div className="script"><span>TXT</span><div><b>字幕格式清理</b><small>文字工具 · 1 min</small></div><em>Run</em></div><div className="code-line"/></div></div>;
  if (type === "subtitle") return <div className="product-preview subtitle-preview"><div className="mini-top"><span>時軸工房</span><i>本機模式</i></div><div className="drop-zone"><b>影片 ＋ VTT</b><small>已配對 · course-07.mp4</small></div><div className="timeline"><i/><i/><i/><i/><i/></div><div className="sync-progress"><span><b>語音定位率</b><small>97.9%</small></span><i><b style={{width:"88%"}}/></i></div></div>;
  if (type === "subscope") return <div className="product-preview subscope-preview"><div className="mini-top"><span>本月訂閱</span><i>8 月</i></div><strong className="money">NT$ 2,460<small>／月</small></strong><div className="sub-chart"><i style={{height:"42%"}}/><i style={{height:"58%"}}/><i style={{height:"48%"}}/><i style={{height:"78%"}}/><i style={{height:"64%"}}/><i style={{height:"86%"}}/><i style={{height:"72%"}}/></div><div className="renewal"><span className="service-dot">N</span><div><b>下次續費</b><small>8 月 07 日</small></div><strong>NT$ 390</strong></div></div>;
  return <div className="product-preview custom-preview"><div className="custom-browser"><i/><i/><i/><span>https://</span></div><div className="custom-window"><span><Icon name="grid"/></span><b>我的新網站</b><small>自訂網站入口</small></div></div>;
}

export default function Home() {
  const [editorOpen, setEditorOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("全部");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [draftName, setDraftName] = useState("");
  const [draftUrl, setDraftUrl] = useState("");

  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem("project-hub-favorites") || "[]"));
      setHiddenIds(JSON.parse(localStorage.getItem("project-hub-hidden") || "[]"));
      const custom = JSON.parse(localStorage.getItem("project-hub-custom") || "[]");
      const overrides = JSON.parse(localStorage.getItem("project-hub-overrides") || "{}");
      const defaults = defaultProjects.map(project => overrides[project.id] ? { ...project, ...(project.site ? { site: overrides[project.id] } : { repo: overrides[project.id] }) } : project);
      if (Array.isArray(custom)) setProjects([...defaults, ...custom]);
    } catch {}
  }, []);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem("project-hub-favorites", JSON.stringify(next));
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter(p => !hiddenIds.includes(p.id))
      .filter(p => filter === "全部" || p.category === filter)
      .filter(p => !q || `${p.title} ${p.chinese} ${p.description} ${p.language}`.toLowerCase().includes(q))
      .sort((a,b) => Number(favorites.includes(b.id)) - Number(favorites.includes(a.id)));
  }, [query, filter, favorites, projects, hiddenIds]);

  const setProjectVisible = (id: string, show: boolean) => {
    const next = show ? hiddenIds.filter(x => x !== id) : [...new Set([...hiddenIds, id])];
    setHiddenIds(next);
    localStorage.setItem("project-hub-hidden", JSON.stringify(next));
  };

  const addProject = () => {
    const name = draftName.trim();
    let url = draftUrl.trim();
    if (!name || !url) return;
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    const item: Project = { id: `custom-${Date.now()}`, title: name, chinese: name, description: "", category: "工具", language: "Web", repo: url, site: url, preview: "custom" };
    const next = [...projects, item];
    setProjects(next);
    localStorage.setItem("project-hub-custom", JSON.stringify(next.filter(p => p.id.startsWith("custom-"))));
    setDraftName(""); setDraftUrl("");
  };

  const removeCustom = (id: string) => {
    const next = projects.filter(p => p.id !== id);
    setProjects(next);
    localStorage.setItem("project-hub-custom", JSON.stringify(next.filter(p => p.id.startsWith("custom-"))));
  };

  const updateProjectUrl = (id: string, value: string) => {
    const next = projects.map(project => project.id === id ? { ...project, ...(project.site ? { site: value } : { repo: value }) } : project);
    setProjects(next);
    if (id.startsWith("custom-")) {
      localStorage.setItem("project-hub-custom", JSON.stringify(next.filter(p => p.id.startsWith("custom-"))));
    } else {
      const overrides = Object.fromEntries(next.filter(p => !p.id.startsWith("custom-")).map(p => [p.id, p.site || p.repo]));
      localStorage.setItem("project-hub-overrides", JSON.stringify(overrides));
    }
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Project Hub 首頁"><span><Icon name="grid" /></span><b>Project Hub</b></a>
        <nav className="main-nav" aria-label="主要導覽">
          <a className="active" href="#top">首頁</a>
          <a href="#projects">作品入口</a>
          <a href="https://github.com/aichi0121" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <div className="top-actions">
          <span className="private-pill"><i/>私人工作台</span>
          <button className="sync-button native-manage" onClick={() => setEditorOpen(true)}><span className="plus">＋</span>管理網站</button>
          <a className="avatar" href="https://github.com/aichi0121" target="_blank" rel="noreferrer" aria-label="開啟 aichi0121 的 GitHub">A</a>
        </div>
      </header>

      <section className="shell" id="top">
        <div className="intro">
          <div className="hero-copy"><p className="eyebrow">✦ PERSONAL PROJECT PORTFOLIO</p><h1>你的作品，<br/><span>都在這裡。</span></h1><p>集中管理常用網站與本機工具，想用的時候，一眼就能找到。</p></div>
          <div className="stats"><span><b>{projects.length-hiddenIds.length}</b><small>目前顯示</small></span><i/><span><b>{projects.filter(p=>p.site&&!hiddenIds.includes(p.id)).length}</b><small>線上網站</small></span><i/><span><b>{projects.filter(p=>!p.site&&!hiddenIds.includes(p.id)).length}</b><small>本機工具</small></span></div>
        </div>

        <div className="projects-heading" id="projects"><div><h2>我的網站</h2><p>點一下卡片，直接前往網站</p></div><button className="text-manage" onClick={() => setEditorOpen(true)}>管理顯示項目</button></div>
        <div className="controls">
          <label className="search-wrap"><Icon name="search"/><input aria-label="搜尋專案" className="search-input" placeholder="搜尋名稱、功能或技術..." value={query} onChange={e => setQuery(e.target.value)}/>{query && <button onClick={() => setQuery("")} aria-label="清除搜尋">×</button>}</label>
          <div className="filters" role="group" aria-label="專案分類">{filters.map(item => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}</div>
        </div>

        <div className="section-line"><h2>{filter === "全部" ? "全部作品" : filter}</h2><span>{visible.length} 個結果</span></div>

        {visible.length ? <section className="project-grid" aria-live="polite">
          {visible.map(project => <article className="project-card" key={project.id}>
            <a className="project-jump" href={project.site || project.repo} target="_blank" rel="noreferrer" aria-label={`直接開啟${project.chinese}`}>
              <div className="preview-wrap"><ProductPreview type={project.preview}/></div>
              <div className="card-body compact-card-body">
                <div className="card-heading"><div><h3>{project.chinese}</h3><p>{project.title}</p></div><span className="jump-hint">{project.site ? "開啟網站" : "開啟 GitHub"}<Icon name="arrow" /></span></div>
                <div className="quick-status">{project.privacy ? <span className="private-status"><i/>私人</span> : <span className="online-status"><i/>已上線</span>}</div>
              </div>
            </a>
            <button title={favorites.includes(project.id) ? "取消收藏" : "收藏"} className={favorites.includes(project.id) ? "favorite on" : "favorite"} onClick={() => toggleFavorite(project.id)} aria-label={`${favorites.includes(project.id) ? "取消收藏" : "收藏"}${project.chinese}`}><Icon name="star" /></button>
          </article>)}
        </section> : <div className="empty"><b>找不到相符的專案</b><p>換個關鍵字，或清除目前的分類。</p><button onClick={() => {setQuery(""); setFilter("全部");}}>顯示全部</button></div>}
      </section>
      <footer><span>Project Hub</span><p>專為 aichi0121 整理的私人入口</p><a href="https://github.com/aichi0121" target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a></footer>

      {editorOpen && <div className="manager-backdrop" role="presentation" onMouseDown={e => {if(e.target===e.currentTarget)setEditorOpen(false)}}>
        <section className="manager-modal" role="dialog" aria-modal="true" aria-labelledby="manager-title">
          <header className="manager-header"><div><h2 id="manager-title">管理網站</h2><p>選擇首頁要顯示的項目，或新增其他網站。</p></div><button className="close-manager" onClick={() => setEditorOpen(false)} aria-label="關閉管理網站">×</button></header>
          <div className="manager-body">
            <section className="manager-section"><h3>首頁顯示與網址</h3><div className="manager-list">{projects.map(project => {const shown=!hiddenIds.includes(project.id);return <div className="manager-row" key={project.id}><div className="manager-icon">{project.chinese.slice(0,1)}</div><div><b>{project.chinese}</b><input className="manager-url-input" aria-label={`${project.chinese}網址`} value={project.site || project.repo} onChange={e => updateProjectUrl(project.id,e.target.value)}/></div>{project.id.startsWith("custom-") && <button className="remove-site" onClick={() => removeCustom(project.id)}>移除</button>}<button className={shown ? "visibility-toggle on" : "visibility-toggle"} role="switch" aria-checked={shown} onClick={() => setProjectVisible(project.id,!shown)} aria-label={`顯示${project.chinese}`}><i/></button></div>})}</div></section>
            <section className="manager-section add-section"><h3>新增網站</h3><p>填入名稱與網址，新增後會保存在這台裝置。</p><div className="add-fields"><label className="native-field"><span>網站名稱</span><input placeholder="例如：我的筆記" value={draftName} onChange={e => setDraftName(e.target.value)}/></label><label className="native-field"><span>網站網址</span><input inputMode="url" placeholder="https://example.com" value={draftUrl} onChange={e => setDraftUrl(e.target.value)}/></label><button className="add-site-button native-action" onClick={addProject} disabled={!draftName.trim()||!draftUrl.trim()}>新增</button></div></section>
          </div>
          <footer className="manager-footer"><span className="storage-note">目前設定只儲存在此瀏覽器</span><button className="done-button native-action" onClick={() => setEditorOpen(false)}>完成</button></footer>
        </section>
      </div>}
    </main>
  );
}
