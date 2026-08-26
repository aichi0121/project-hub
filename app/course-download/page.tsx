const download = "../downloads/ppa-transcript-exporter-latest.zip";

export default function CourseDownloadPage() {
  return <main className="guide-page">
    <header className="guide-header"><span className="guide-brand">課程下載方式</span><span>影片與字幕整理指南</span></header>
    <section className="guide-hero"><p className="eyebrow">COURSE LIBRARY · 2026</p><h1>課程內容，<br/>有條理地整理。</h1><p>集中保留各平台的影片與字幕處理方式。PPA 提供目前可用的 VTT 字幕工具；影片請優先使用課程平台的官方 App 或離線功能。</p><nav className="platform-nav" aria-label="平台目錄"><a href="#ppa">PressPlay</a><a href="#hahow">Hahow</a><a href="#satellite">知識衛星</a><a href="#shifu">師父</a></nav></section>
    <section className="guide-shell">
      <section className="platform-section" id="ppa"><div className="platform-kicker">PRESSPLAY ACADEMY</div><h2>字幕：PPA 逐字稿匯出器</h2><p className="platform-intro">新版流程不需要開發者工具、不需要複製 TXT，也不必每一個字幕檔都跳出儲存視窗。</p><div className="guide-actions"><a className="guide-primary" href={download} download>下載最新擴充功能 ZIP</a><a className="guide-secondary" href="../downloads/PPA-逐字稿匯出器-README.md" download>下載 README</a></div><small>目前版本 1.3.3 · 僅處理你帳號原本可觀看的內容</small>
      <ol className="guide-steps">
        <li><div className="step-number">1</div><div><h2>安裝一次即可</h2><p>解壓 ZIP，在 Chrome 開啟 <code>chrome://extensions</code>，打開「開發人員模式」，按「載入未封裝項目」，選取解壓後的 <code>ppa-transcript-exporter</code> 資料夾。</p></div></li>
        <li><div className="step-number">2</div><div><h2>從工具列開啟右側面板</h2><p>進入任一 PressPlay 課程單元頁，點工具列的 PPA 圖示。右側面板會顯示偵測到的課程與按課程目錄排序的單元清單。</p></div></li>
        <li><div className="step-number">3</div><div><h2>先收集，再決定下載方式</h2><p>按「收集偵測到的字幕」。每個單元會即時標示為待收集、收集中、完成、找不到字幕或略過。收集在背景處理，不會切走你正在閱讀的課程頁。</p></div></li>
        <li><div className="step-number">4</div><div><h2>下載 VTT 或 ZIP</h2><p>完成後可在清單中逐檔下載 VTT，或選擇「下載已收集字幕 ZIP」一次取得全部字幕。若某單元顯示找不到字幕，可按 ↻ 只重新偵測該單元。</p></div></li>
      </ol></section>
      <section className="platform-section video-section"><div className="platform-kicker">影片整理</div><h2>影片下載：優先使用官方離線方式</h2><p className="platform-intro">影片常有授權、DRM 與下載條件限制。請使用各平台原生提供的 App／離線觀看或取得授權的下載功能；本頁不提供繞過保護機制的作法。</p><div className="platform-grid"><article id="hahow"><b>Hahow</b><p>使用 Hahow App 的離線觀看功能；若課程頁提供合法下載或教材附件，依頁面指示儲存。</p></article><article id="satellite"><b>知識衛星</b><p>使用官方 App 或課程提供的離線功能。字幕與教材若有官方下載選項，請從課程頁直接取得。</p></article><article id="shifu"><b>師父</b><p>以該課程頁或官方 App 顯示的下載、離線或教材功能為準；若無選項，請聯絡課程客服確認授權方式。</p></article></div></section>
      <section className="platform-section"><div className="platform-kicker">日後更新</div><h2>新版 ZIP 要怎麼更新？</h2><p className="platform-intro">這個頁面的「下載最新擴充功能 ZIP」連結會固定維持最新版本，不需要記住版本號。</p><ol className="update-list"><li>下載最新 ZIP 並解壓。</li><li>在 Chrome 開啟 <code>chrome://extensions</code>，移除舊的 PPA 逐字稿匯出器。</li><li>按「載入未封裝項目」，改選最新解壓後的資料夾。</li><li>回到 PressPlay 重新整理一次，即可使用新版。</li></ol></section>
      <section className="guide-faq"><h2>常見操作</h2><div><b>× 是什麼？</b><p>把該單元從右側清單移除，不會刪除電腦檔案，也不會影響 PressPlay 的課程內容。</p></div><div><b>為什麼沒有某些單元？</b><p>面板只顯示目錄中的編號課程單元；沒有逐字稿的單元會標示「找不到字幕」。</p></div><div><b>ZIP 會放在哪裡？</b><p>依 Chrome 的下載設定儲存；一次下載 ZIP 可避免每個字幕檔都跳出一次儲存視窗。</p></div></section>
    </section>
  </main>;
}
