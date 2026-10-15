import type { Metadata } from "next";
import { CourseHeader, ExternalLink, links, PermissionNote, PlatformHero } from "../shared";

export const metadata: Metadata = {
  title: "Hahow｜課程下載方式",
  description: "Hahow 課程影片、字幕與操作示範。",
  openGraph: { title: "Hahow｜課程下載方式", description: "Hahow 課程影片、字幕與操作示範。", url: "https://aichi0121.github.io/project-hub/course-download/hahow/", type: "website", locale: "zh_TW" },
  twitter: { card: "summary", title: "Hahow｜課程下載方式", description: "Hahow 課程影片、字幕與操作示範。" },
};

export default function HahowPage() {
  return <main className="course-guide platform-page hahow-page"><CourseHeader active="hahow"/>
    <div className="course-content"><PlatformHero index="02" label="HAHOW" title="影片與字幕下載" description="Hahow 專用操作頁。影片工具、字幕查找與示範內容不再和其他平台混在一起。"/><PermissionNote/>
      <section className="platform-methods">
        <div className="method-callout"><b>熟悉程式工具？</b><p>可查看開源的 Hahow Collector 專案；使用前請自行檢查程式內容、平台條款與帳號授權。</p><ExternalLink href={links.hahowCollector}>前往 Hahow Collector</ExternalLink></div>
        <div className="method-block"><h2>影片下載</h2><p>安裝 Video Downloader Mpmux 或 FetchV Video Downloader。播放目標影片後開啟擴充功能，選擇對應影片下載，並以課程名稱與章節重新命名。</p><div className="inline-links"><ExternalLink href={links.mpmux}>Video Downloader Mpmux</ExternalLink><ExternalLink href={links.fetchV}>FetchV Video Downloader</ExternalLink></div></div>
        <div className="method-block"><h2>字幕下載</h2><ol><li>在目標影片頁面按 F12 開啟開發者工具，切換到 Network。</li><li>按 F5 重新整理，在 Filter 搜尋 <code>vtt</code>、<code>srt</code> 或 <code>subtitle</code>。</li><li>播放影片或切換字幕，等待字幕資源完成載入。</li><li>確認是該單元字幕後開啟新分頁，使用「另存新檔」儲存並重新命名。</li></ol></div>
      </section>
      <section className="course-videos"><div className="section-heading"><p className="platform-label">HAHOW DEMO</p><h2>操作示範</h2><p>依編號順序觀看影片 1，再查看圖片 2。</p></div><div className="media-sequence">
        <article className="media-item"><div className="media-number">01</div><div className="media-body"><h3>字幕下載示範</h3><video controls preload="metadata" playsInline><source src="../../course-download-media/1.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
        <article className="media-item"><div className="media-number">02</div><div className="media-body"><h3>字幕另存畫面</h3><img src="../../course-download-media/2.jpg" alt="在字幕內容頁面開啟右鍵選單並選擇另存為" loading="lazy"/></div></article>
      </div></section>
    </div><footer className="course-footer course-footer-simple"><span>Hahow</span><span>課程下載方式</span></footer>
  </main>;
}
