import { generateDailyIntel } from "../lib/generator";
import { CopyButton } from "../lib/components/CopyButton";

const formatList = (items: string[]) => items.join("\n");

export default function Home() {
  const intel = generateDailyIntel();

  return (
    <main>
      <header className="card stack" style={{ marginBottom: "32px" }}>
        <div className="pill">Daily Horror SEO Intelligence · {intel.date}</div>
        <h1>
          USA Horror Growth Engine{" "}
          <span className="header-accent">For YouTube</span>
        </h1>
        <p>
          Fresh research-grade keywords, titles, and metadata engineered to rank
          in United States search, suggested videos, and browse feeds for horror
          storytelling, paranormal breakdowns, and real incident coverage.
        </p>
      </header>

      <section className="card stack" style={{ marginBottom: "32px" }}>
        <div className="section-title">
          <div>
            <h2>Topic of the Day</h2>
            <small>Use this to anchor your long-form upload & Shorts batch.</small>
          </div>
          <CopyButton value={intel.topic} />
        </div>
        <p>{intel.topic}</p>
      </section>

      <section className="grid two" style={{ marginBottom: "32px" }}>
        <div className="card stack">
          <div className="section-title">
            <div>
              <h2>USA Viral Keywords</h2>
              <small>High intent + manageable competition for nightly uploads.</small>
            </div>
            <CopyButton value={formatList(intel.keywords)} />
          </div>
          <div className="tag-cloud">
            {intel.keywords.map((keyword) => (
              <span key={keyword} className="pill">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="card stack">
          <div className="section-title">
            <div>
              <h2>Trending Hashtags</h2>
              <small>Blend 2–3 of these into Shorts captions & community posts.</small>
            </div>
            <CopyButton value={intel.hashtags.join(" ")} />
          </div>
          <div className="tag-cloud">
            {intel.hashtags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="card stack" style={{ marginBottom: "32px" }}>
        <div className="section-title">
          <div>
            <h2>Click-Worthy Titles</h2>
            <small>Optimized for fear-based emotional pull + USA viewer phrasing.</small>
          </div>
          <CopyButton value={formatList(intel.titles)} />
        </div>
        <ol style={{ paddingLeft: "20px", margin: 0, display: "grid", gap: "12px" }}>
          {intel.titles.map((title) => (
            <li key={title} style={{ lineHeight: 1.6 }}>{title}</li>
          ))}
        </ol>
      </section>

      <section className="card stack" style={{ marginBottom: "32px" }}>
        <div className="section-title">
          <div>
            <h2>SEO Description</h2>
            <small>150-200 words | First two lines hook hard | CTA embedded.</small>
          </div>
          <CopyButton value={intel.description} />
        </div>
        <div className="mono">{intel.description}</div>
      </section>

      <section className="card stack" style={{ marginBottom: "32px" }}>
        <div className="section-title">
          <div>
            <h2>Tags (15-20)</h2>
            <small>Mix with channel staples. Keep strongest 500 characters.</small>
          </div>
          <CopyButton value={intel.tags.join(", ")} />
        </div>
        <div className="tag-cloud">
          {intel.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <footer className="footer">
        Powered by autonomous horror trend analysis · Regenerate daily at 12:00
        AM ET.
      </footer>
    </main>
  );
}
