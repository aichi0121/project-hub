import type { Metadata } from "next";
import { CourseHeader, ExternalLink, links, PermissionNote, PlatformHero } from "../shared";

export const metadata: Metadata = { title: "PressPlay Academy｜課程下載方式", description: "PressPlay Academy 課程影片、字幕與操作示範。" };

export default function PpaPage() {
  return <main className="course-guide platform-page ppa-page"><CourseHeader active="ppa"/>
    <div className="course-content"><PlatformHero index="03" label="PRESSPLAY ACADEMY" title="影片與字幕下載" description="PressPlay Academy 專用操作頁。影片錄製、逐字稿與 VTT 轉換流程集中整理。"/><PermissionNote/>
      <section className="platform-methods">
        <div className="method-block"><h2>影片下載</h2><p>使用 FetchV Video Downloader；若要加快播放，可選用 Video Speed Controller Pro。</p><div className="inline-links"><ExternalLink href={links.fetchV}>FetchV Video Downloader</ExternalLink><ExternalLink href={links.speedController}>Video Speed Controller Pro</ExternalLink></div><ol><li>打開課程頁面並播放影片。</li><li>可選擇提高播放速度，再開啟 FetchV。</li><li>依原 PDF 說明選擇「MSE／錄製」模式後下載。</li><li>存檔時直接修改檔名。</li></ol></div>
        <div className="method-block"><h2>字幕下載與轉換</h2><ol><li>在第一段逐字稿上按右鍵，選擇「檢查」。</li><li>在開發者工具中找到包含全部字幕的父元素。</li><li>右鍵選擇 Copy → Copy element，貼到記事本並儲存為 TXT。</li><li>開啟 VTT 字幕轉換工具，上傳 TXT 並儲存轉換結果。</li></ol><ExternalLink href={links.vttConverter}>開啟 VTT 字幕轉換工具</ExternalLink></div>
      </section>
      <section className="course-videos"><div className="section-heading"><p className="platform-label">PPA DEMO</p><h2>操作示範</h2><p>依編號順序觀看影片 3 與影片 4。</p></div><div className="media-sequence">
        <article className="media-item"><div className="media-number">03</div><div className="media-body"><h3>影片下載教學</h3><video controls preload="metadata" playsInline><source src="../../course-download-media/3.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
        <article className="media-item"><div className="media-number">04</div><div className="media-body"><h3>字幕下載教學</h3><video controls preload="metadata" playsInline><source src="../../course-download-media/4.mp4" type="video/mp4"/>你的瀏覽器不支援影片播放。</video></div></article>
      </div></section>
    </div><footer className="course-footer course-footer-simple"><span>PressPlay Academy</span><span>課程下載方式</span></footer>
  </main>;
}
