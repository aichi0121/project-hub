import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "課程下載方式｜Project Hub",
  description: "知識衛星、Hahow 與 PressPlay Academy 的課程影片、字幕與整理工具指南。",
};

const links = {
  streamRecorder: "https://chromewebstore.google.com/detail/stream-recorder-hls-m3u8/iogidnfllpdhagebkblkgbfijkbkjdmm",
  hahowCollector: "https://github.com/Jeffrey0117/hahow-collecter",
  mpmux: "https://chromewebstore.google.com/detail/video-downloader-mpmux/mbflpfaamifmmmkdjkcmpofpccfmlmap",
  fetchV: "https://chromewebstore.google.com/detail/fetchv-video-downloader-f/nfmmmhanepmpifddlkkmihkalkoekpfd",
  speedController: "https://chromewebstore.google.com/detail/video-speed-controller-pr/jlhimcnaojgbmmmambapclkgonfcpajb",
  vttConverter: "https://monica.im/share/artifact?id=4NEKC9h5dZTZ22C2ou5EYj",
};

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="resource-link" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export default function CourseDownloadPage() {
  return <main className="course-guide">
    <header className="course-topbar"><a className="course-home" href="../"><span aria-hidden="true">←</span> Project Hub</a><span>課程整理指南</span></header>
    <section className="course-guide-hero">
      <p className="course-eyebrow">COURSE ARCHIVE GUIDE</p><h1>課程下載方式</h1>
      <p className="course-deck">整理知識衛星、Hahow 與 PressPlay Academy 的影片及字幕操作流程，並集中收錄所需工具與教學影片。</p>
      <nav className="course-jump" aria-label="頁面目錄"><a href="#satellite">知識衛星</a><a href="#hahow">Hahow</a><a href="#ppa">PPA</a><a href="#videos">教學影片</a><a href="#resources">工具連結</a></nav>
    </section>
    <aside className="permission-note"><div><span aria-hidden="true">✓</span></div><p><b>使用前請確認授權</b>本頁僅供備份自己已購買、獲授權且可正常播放的內容。請優先使用平台官方下載功能；遇到 DRM、付費牆或權限限制時請停止，不要嘗試繞過。</p></aside>
    <div className="course-content">
      <section className="course-platform" id="satellite"><div className="platform-index">01</div><div className="platform-copy">
        <p className="platform-label">知識衛星</p><h2>影片與字幕下載</h2>
        <div className="method-block"><h3>安裝擴充功能</h3><p>到 Chrome 線上應用程式商店安裝 Stream Recorder - HLS Downloader。</p><ExternalLink href={links.streamRecorder}>開啟 Stream Recorder</ExternalLink></div>
        <div className="method-block"><h3>下載影片與字幕</h3><ol><li>打開知識衛星的課程頁面。</li><li>播放要處理的課程單元，再點擊擴充功能圖示。</li><li>等待進度條完成後，再點擊「下載影片」或「下載字幕」。</li><li>若影片包含字幕，進度完成後會出現字幕下載選項。</li></ol></div>
        <div className="method-block"><h3>依序完成整門課程</h3><p>在課程頁面逐一切換每一節課程，例如 1-1、1-2。處理期間保持課程頁面開啟，並在存檔時依左側課程列表修改檔名，方便後續整理。</p></div>
      </div></section>
      <section className="course-platform" id="hahow"><div className="platform-index">02</div><div className="platform-copy">
        <p className="platform-label">Hahow</p><h2>影片與字幕下載</h2>
        <div className="method-callout"><b>熟悉程式工具？</b><p>可查看開源的 Hahow Collector 專案；使用前請自行檢查程式內容、平台條款與帳號授權。</p><ExternalLink href={links.hahowCollector}>前往 Hahow Collector</ExternalLink></div>
        <div className="method-block"><h3>影片下載</h3><p>安裝 Video Downloader Mpmux 或 FetchV Video Downloader。播放目標影片後開啟擴充功能，選擇對應影片下載，並以課程名稱與章節重新命名。</p><div className="inline-links"><ExternalLink href={links.mpmux}>Video Downloader Mpmux</ExternalLink><ExternalLink href={links.fetchV}>FetchV Video Downloader</ExternalLink></div></div>
        <div className="method-block"><h3>字幕下載</h3><ol><li>在目標影片頁面按 F12 開啟開發者工具，切換到 Network。</li><li>按 F5 重新整理，在 Filter 搜尋 <code>vtt</code>、<code>srt</code> 或 <code>subtitle</code>。</li><li>播放影片或切換字幕，等待字幕資源完成載入。</li><li>在確認是該單元字幕後開啟新分頁，使用「另存新檔」儲存並重新命名。</li></ol></div>
      </div></section>
      <section className="course-platform" id="ppa"><div className="platform-index">03</div><div className="platform-copy">
        <p className="platform-label">PressPlay Academy</p><h2>影片與字幕下載</h2>
        <div className="method-block"><h3>影片下載</h3><p>使用 FetchV Video Downloader；若要加快播放，可選用 Video Speed Controller Pro。</p><div className="inline-links"><ExternalLink href={links.fetchV}>FetchV Video Downloader</ExternalLink><ExternalLink href={links.speedController}>Video Speed Controller Pro</ExternalLink></div><ol><li>打開課程頁面並播放影片。</li><li>可選擇提高播放速度，再開啟 FetchV。</li><li>依原 PDF 說明選擇「MSE／錄製」模式後下載。</li><li>存檔時直接修改檔名。</li></ol></div>
        <div className="method-block"><h3>字幕下載與轉換</h3><ol><li>在第一段逐字稿上按右鍵，選擇「檢查」。</li><li>在開發者工具中找到包含全部字幕的父元素。</li><li>右鍵選擇 Copy → Copy element，貼到記事本並儲存為 TXT。</li><li>開啟 VTT 字幕轉換工具，上傳 TXT 並儲存轉換結果。</li></ol><ExternalLink href={links.vttConverter}>開啟 VTT 字幕轉換工具</ExternalLink></div>
      </div></section>
      <section className="course-videos" id="videos"><div className="section-heading"><p className="platform-label">VIDEO GUIDES</p><h2>教學影片與圖片</h2><p>依照編號順序觀看操作內容：影片 1、圖片 2、影片 3、影片 4。</p></div><div className="media-sequence">
        <article className="media-item"><div className="media-number">01</div><div className="media-body"><h3>操作示範 1</h3><video controls preload="metadata" playsInline><source src="../course-download-media/1.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
        <article className="media-item"><div className="media-number">02</div><div className="media-body"><h3>字幕另存畫面</h3><img src="../course-download-media/2.jpg" alt="在字幕內容頁面開啟右鍵選單並選擇另存為" loading="lazy"/></div></article>
        <article className="media-item"><div className="media-number">03</div><div className="media-body"><h3>操作示範 3</h3><video controls preload="metadata" playsInline><source src="../course-download-media/3.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
        <article className="media-item"><div className="media-number">04</div><div className="media-body"><h3>操作示範 4</h3><video controls preload="metadata" playsInline><source src="../course-download-media/4.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
      </div></section>
      <section className="course-resources" id="resources"><div className="section-heading"><p className="platform-label">RESOURCE INDEX</p><h2>全部工具連結</h2></div><div className="resource-grid"><ExternalLink href={links.streamRecorder}>Stream Recorder</ExternalLink><ExternalLink href={links.hahowCollector}>Hahow Collector</ExternalLink><ExternalLink href={links.mpmux}>Video Downloader Mpmux</ExternalLink><ExternalLink href={links.fetchV}>FetchV Video Downloader</ExternalLink><ExternalLink href={links.speedController}>Video Speed Controller Pro</ExternalLink><ExternalLink href={links.vttConverter}>VTT 字幕轉換工具</ExternalLink></div></section>
    </div>
    <footer className="course-footer"><a href="../">返回 Project Hub</a><span>僅供個人合法備份與整理</span></footer>
  </main>;
}
