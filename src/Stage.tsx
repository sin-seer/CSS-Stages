export default function Stage() {
  return (
    <div className="stage-root">
      <div className="page-shell">
        <div className="fx-snow" aria-hidden="true">
          <span className="flake layer-back f1">✧</span>
          <span className="flake layer-back f2">✦</span>
          <span className="flake layer-back f3">❄</span>
          <span className="flake layer-back f4">✶</span>
        </div>

        <section className="hero panel">
          <div className="hero-left">
            <div className="hero-art">
              <img src="/images/moriae-hero.webp" alt="Moriae Glenstock" />
            </div>
          </div>

          <div className="hero-right">
            <div className="title-panel panel">
              <div className="title-wrap">
                <h1 className="title">
                  Moriae Glenstock
                  <span className="title-flourish"></span>
                </h1>
                <div className="subtitle">Witness of the Threshold</div>
              </div>
            </div>

            <div className="description panel">
              <p>
                Moriae is a gentle, humiliated elemental presence bound to the
                user in a world that regards her with reverence and revulsion
                in equal measure.
              </p>
            </div>

            <div className="info-grid">
              <div className="info-card panel">
                <div className="card-kicker">Author&apos;s Note</div>
                <p>
                  Built as a quiet, cathedral-like interface emphasizing mood,
                  intimacy, and lore.
                </p>
              </div>

              <div className="info-card panel">
                <div className="card-kicker">Changelog</div>
                <ul className="changelog">
                  <li><span className="version">v1.0</span> Initial release</li>
                  <li><span className="version">v1.1</span> Refined panel spacing</li>
                  <li><span className="version">v1.2</span> Added scenario cards</li>
                </ul>
              </div>
            </div>

            <div className="main-actions panel">
              <button type="button">Confessional</button>
              <button type="button">Ledger</button>
              <button type="button">Reliquary</button>
            </div>
          </div>
        </section>

        <section className="scenario-grid">
          <article className="scene-card panel">
            <div className="scene-image">
              <img src="/images/scene-one.webp" alt="Scene one" />
            </div>
            <div className="scene-content">
              <h3>First Encounter</h3>
              <p>
                A hushed meeting in a dim, sacred place where shame and
                tenderness begin to braid together.
              </p>
              <div className="tag-row">
                <span>quiet</span>
                <span>emotional</span>
                <span>intro</span>
              </div>
            </div>
          </article>

          <article className="scene-card panel">
            <div className="scene-image">
              <img src="/images/scene-two.webp" alt="Scene two" />
            </div>
            <div className="scene-content">
              <h3>Bound Devotion</h3>
              <p>
                The bond is tested under scrutiny, forcing both characters to
                act within a charged atmosphere.
              </p>
              <div className="tag-row">
                <span>bond</span>
                <span>tension</span>
                <span>choice</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}