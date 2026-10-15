import type { Metadata } from "next";
import { CourseHeader, PermissionNote } from "./shared";

export const metadata: Metadata = {
  title: "課程下載方式｜Project Hub",
  description: "依課程網站分開整理知識衛星、Hahow 與 PressPlay Academy 的影片與字幕下載方式。",
};

const platforms = [
  { number: "01", name: "知識衛星", english: "SATELLITE", description: "使用 Stream Recorder 整理可合法存取的課程影片與字幕。", href: "./satellite/", tone: "satellite" },
  { number: "02", name: "Hahow", english: "HAHOW", description: "影片下載工具、字幕檔案查找，以及操作影片與圖片示範。", href: "./hahow/", tone: "hahow" },
  { number: "03", name: "PressPlay Academy", english: "PPA", description: "影片錄製、逐字稿匯出、VTT 轉換與兩段完整操作示範。", href: "./ppa/", tone: "ppa" },
];

export default function CourseDownloadPage() {
  return <main className="course-guide">
    <CourseHeader />
    <section className="course-guide-hero course-index-hero">
      <p className="course-eyebrow">COURSE ARCHIVE GUIDE</p>
      <h1>課程下載方式</h1>
      <p className="course-deck">每個課程網站各自一頁。先選擇平台，再查看對應的影片、字幕、工具與示範內容。</p>
    </section>
    <PermissionNote />
    <section className="platform-directory" aria-label="課程網站列表">
      {platforms.map(platform => <a className={`platform-entry ${platform.tone}`} href={platform.href} key={platform.name}>
        <span className="platform-entry-number">{platform.number}</span>
        <div><small>{platform.english}</small><h2>{platform.name}</h2><p>{platform.description}</p></div>
        <span className="platform-entry-arrow" aria-hidden="true">↗</span>
      </a>)}
    </section>
    <footer className="course-footer course-footer-simple"><span>課程下載方式</span><span>3 個課程網站，分頁整理</span></footer>
  </main>;
}
