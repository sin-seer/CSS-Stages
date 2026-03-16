import React from 'react';
import {
  StageBase,
  StageLoadResponse,
  StageResponse,
} from '@chub-ai/stages-ts';

// Define simple types for initial, chat, message and config states.
// You can replace these with more specific types when you add logic.
export interface InitState {}
export interface ChatState {}
export interface MessageState {}
export interface Config {}

export class Stage extends StageBase<InitState, ChatState, MessageState, Config> {
  constructor(initialData: any) {
    super(initialData);
  }

  /** Called when the stage is first loaded.  Return { success: true } when ready. */
  async load(): Promise<StageLoadResponse<ChatState, MessageState>> {
    return { success: true };
  }

  /** Modify or inspect the user’s message before it is sent to the model. */
  async beforePrompt(request: any): Promise<StageResponse<ChatState, MessageState>> {
    return {};
  }

  /** Modify or inspect the model’s response after it is received. */
  async afterResponse(response: any): Promise<StageResponse<ChatState, MessageState>> {
    return {};
  }

  /** Render the stage UI.  This method returns your JSX layout. */
  render() {
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
                {/* Put a character image here or leave empty for now */}
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
                  Moriae is a gentle, humiliated elemental presence bound to the user in a world that regards her with reverence and revulsion in equal measure.
                </p>
              </div>

              <div className="info-grid">
                <div className="info-card panel">
                  <div className="card-kicker">Author&apos;s Note</div>
                  <p>
                    Built as a quiet, cathedral-like interface emphasizing mood, intimacy and lore.
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
                {/* Optional: add a scene image here */}
              </div>
              <div className="scene-content">
                <h3>First Encounter</h3>
                <p>
                  A hushed meeting in a dim, sacred place where shame and tenderness begin to braid together.
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
                {/* Optional: add a scene image here */}
              </div>
              <div className="scene-content">
                <h3>Bound Devotion</h3>
                <p>
                  The bond is tested under scrutiny, forcing both characters to act within a charged atmosphere.
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
}

export default Stage;