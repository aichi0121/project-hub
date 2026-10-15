export const links = {
  streamRecorder: "https://chromewebstore.google.com/detail/stream-recorder-hls-m3u8/iogidnfllpdhagebkblkgbfijkbkjdmm",
  hahowCollector: "https://github.com/Jeffrey0117/hahow-collecter",
  mpmux: "https://chromewebstore.google.com/detail/video-downloader-mpmux/mbflpfaamifmmmkdjkcmpofpccfmlmap",
  fetchV: "https://chromewebstore.google.com/detail/fetchv-video-downloader-f/nfmmmhanepmpifddlkkmihkalkoekpfd",
  speedController: "https://chromewebstore.google.com/detail/video-speed-controller-pr/jlhimcnaojgbmmmambapclkgonfcpajb",
  vttConverter: "https://monica.im/share/artifact?id=4NEKC9h5dZTZ22C2ou5EYj",
};

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="resource-link" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export function CourseHeader({ active }: { active?: "satellite" | "hahow" | "ppa" }) {
  return <header className="course-topbar">
    <a className="course-title-link" href={active ? "../" : "./"}>課程下載方式</a>
    <nav className="course-site-nav" aria-label="課程網站">
      <a className={active === "satellite" ? "active" : ""} href={active ? "../satellite/" : "./satellite/"}>知識衛星</a>
      <a className={active === "hahow" ? "active" : ""} href={active ? "../hahow/" : "./hahow/"}>Hahow</a>
      <a className={active === "ppa" ? "active" : ""} href={active ? "../ppa/" : "./ppa/"}>PPA</a>
    </nav>
  </header>;
}

export function PermissionNote() {
  return <aside className="permission-note"><div><span aria-hidden="true">✓</span></div><p><b>使用前請確認授權</b>本頁僅供備份自己已購買、獲授權且可正常播放的內容。請優先使用平台官方下載功能；遇到 DRM、付費牆或權限限制時請停止，不要嘗試繞過。</p></aside>;
}

export function PlatformHero({ index, label, title, description }: { index: string; label: string; title: string; description: string }) {
  return <section className="platform-page-hero"><span>{index}</span><div><p className="platform-label">{label}</p><h1>{title}</h1><p>{description}</p></div></section>;
}
