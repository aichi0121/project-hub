import type { Metadata } from "next";
import { CourseHeader, ExternalLink, links, PermissionNote, PlatformHero } from "../shared";

export const metadata: Metadata = { title: "知識衛星｜課程下載方式", description: "知識衛星課程影片與字幕整理方式。" };

export default function SatellitePage() {
  return <main className="course-guide platform-page satellite-page"><CourseHeader active="satellite"/>
    <div className="course-content"><PlatformHero index="01" label="知識衛星 · SATELLITE" title="影片與字幕下載" description="知識衛星專用操作頁。從安裝工具、處理單元到檔名整理，集中放在這裡。"/><PermissionNote/>
      <section className="platform-methods">
        <div className="method-block"><h2>安裝擴充功能</h2><p>到 Chrome 線上應用程式商店安裝 Stream Recorder - HLS Downloader。</p><ExternalLink href={links.streamRecorder}>開啟 Stream Recorder</ExternalLink></div>
        <div className="method-block"><h2>下載影片與字幕</h2><ol><li>打開知識衛星的課程頁面。</li><li>播放要處理的課程單元，再點擊擴充功能圖示。</li><li>等待進度條完成後，再點擊「下載影片」或「下載字幕」。</li><li>若影片包含字幕，進度完成後會出現字幕下載選項。</li></ol></div>
        <div className="method-block"><h2>依序完成整門課程</h2><p>在課程頁面逐一切換每一節課程，例如 1-1、1-2。處理期間保持課程頁面開啟，並在存檔時依左側課程列表修改檔名，方便後續整理。</p></div>
      </section>
    </div><footer className="course-footer course-footer-simple"><span>知識衛星</span><span>課程下載方式</span></footer>
  </main>;
}
