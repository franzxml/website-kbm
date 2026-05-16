import Image from "next/image";
import { galleryPhotos } from "../_data/galeri/gallery";

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <style>{`
        .gallery-section {
          background: #F5F5F5;
          color: #171717;
          padding: clamp(48px, 8vw, 88px) 20px;
        }
        .gallery-section-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .gallery-section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
          border-bottom: 2px solid #BBD5DA;
          padding-bottom: 18px;
        }
        .gallery-section-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 4.25rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: 0;
          color: #111;
          text-transform: uppercase;
        }
        .gallery-section-kicker {
          margin: 0 0 8px;
          font-family: 'Press Start 2P', monospace;
          font-size: 0.65rem;
          color: #FF0000;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .gallery-section-copy {
          max-width: 360px;
          margin: 0;
          color: #334;
          line-height: 1.6;
        }
        .placeholder-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .placeholder-card {
          border: 1px solid #BBD5DA;
          background: #fff;
          box-shadow: 8px 8px 0 #DFF1F1;
          overflow: hidden;
        }
        .placeholder-art {
          position: relative;
          min-height: 220px;
          background:
            linear-gradient(135deg, rgba(255,0,0,0.78), rgba(13,13,13,0.92)),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 2px, transparent 2px 12px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5F5F5;
          font-family: 'Press Start 2P', monospace;
          font-size: 0.75rem;
          text-align: center;
          padding: 20px;
        }
        .placeholder-art img {
          object-fit: cover;
        }
        .placeholder-meta {
          padding: 14px 16px 16px;
        }
        .placeholder-meta h3 {
          margin: 0 0 6px;
          font-size: 1.05rem;
          font-weight: 800;
          color: #111;
        }
        .placeholder-meta p {
          margin: 0;
          color: #4b5b60;
          line-height: 1.5;
        }
        @media (max-width: 760px) {
          .gallery-section-header {
            align-items: start;
            flex-direction: column;
          }
          .placeholder-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="gallery-section-inner">
        <div className="gallery-section-header">
          <div>
            <p className="gallery-section-kicker">KBM Gallery</p>
            <h2 className="gallery-section-title">Galeri</h2>
          </div>
          <p className="gallery-section-copy">
            Ruang dokumentasi KBM untuk foto kegiatan, momen main bareng, dan highlight.
          </p>
        </div>

        <div className="placeholder-grid">
          {galleryPhotos.map((photo, index) => (
            <article className="placeholder-card" key={photo.title}>
              <div className="placeholder-art">
                {photo.src ? (
                  <Image src={photo.src} alt={photo.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
                ) : (
                  <>PHOTO {String(index + 1).padStart(2, "0")}</>
                )}
              </div>
              <div className="placeholder-meta">
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
