import Link from "next/link";

const download = "../downloads/ppa-transcript-exporter-v1.3.3.zip";

export default function CourseDownloadPage() {
  return <main className="guide-page">
    <header className="guide-header"><Link href="/" className="guide-back">← Project Hub</Link><span>課程下載方式</span></header>
    <section className="guide-hero"><p className="eyebrow">PRESSPLAY · 字幕下載</p><h1>把課程逐字稿，<br/>整理成可用的 VTT。</h1><p>新版 PPA 逐字稿匯出器可從 PressPlay 課程目錄收集字幕，完成後可單獨下載或一次打包成 ZIP。</p><div className="guide-actions"><a className="guide-primary" href={download} download>下載擴充功能 ZIP</a><a className="guide-secondary" href="../downloads/PPA-逐字稿匯出器-README.md" download>下載 README</a></div><small>版本 1.3.3 · 僅處理你帳號原本可觀看的課程內容</small></section>
    <section className="guide-shell">
      <div className="guide-note"><b>這是新版流程</b><span>不需要開發者工具、不需要複製 TXT，也不必逐一跳出儲存視窗。</span></div>
      <ol className="guide-steps">
        <li><div className="step-number">1</div><div><h2>安裝一次即可</h2><p>解壓 ZIP，在 Chrome 開啟 <code>chrome://extensions</code>，打開「開發人員模式」，按「載入未封裝項目」，選取解壓後的 <code>ppa-transcript-exporter</code> 資料夾。</p></div></li>
        <li><div className="step-number">2</div><div><h2>從工具列開啟右側面板</h2><p>進入任一 PressPlay 課程單元頁，點工具列的 PPA 圖示。右側面板會顯示偵測到的課程與按課程目錄排序的單元清單。</p></div></li>
        <li><div className="step-number">3</div><div><h2>先收集，再決定下載方式</h2><p>按「收集偵測到的字幕」。每個單元會即時標示為待收集、收集中、完成、找不到字幕或略過。收集在背景處理，不會切走你正在閱讀的課程頁。</p></div></li>
        <li><div className="step-number">4</div><div><h2>下載 VTT 或 ZIP</h2><p>完成後可在清單中逐檔下載 VTT，或選擇「下載已收集字幕 ZIP」一次取得全部字幕。若某單元顯示找不到字幕，可按 ↻ 只重新偵測該單元。</p></div></li>
      </ol>
      <section className="guide-faq"><h2>常見操作</h2><div><b>× 是什麼？</b><p>把該單元從右側清單移除，不會刪除電腦檔案，也不會影響 PressPlay 的課程內容。</p></div><div><b>為什麼沒有某些單元？</b><p>面板只顯示目錄中的編號課程單元；沒有逐字稿的單元會標示「找不到字幕」。</p></div><div><b>ZIP 會放在哪裡？</b><p>依 Chrome 的下載設定儲存；一次下載 ZIP 可避免每個字幕檔都跳出一次儲存視窗。</p></div></section>
    </section>
  </main>;
}
