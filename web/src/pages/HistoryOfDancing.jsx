import React from "react";

function HistoryOfDancing() {
  return (
    <div
      className="page-content history-page"
      style={{ color: "white", fontSize: "10px" }}
    >
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h1>History of Dancing</h1>
          <p style={{ color: "white", fontSize: "45px" }}>
            Discover the Rich History of Traditional Samoan Hula Dance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT COLUMN — TEXT */}
            <div>
              <p
                className="text-white text-lg leading-relaxed"
                style={{ color: "white", fontSize: "35px" }}
              >
                Samoan hula dancing is more accurately known as Siva Samoa, the
                traditional dance of Samoa. While “hula” is native to Hawaii,
                Samoa’s dance traditions developed independently within
                Polynesian culture, sharing oceanic roots but maintaining
                distinct identity, language, and movement vocabulary. The word
                siva means “dance” or “gesture,” and its origins trace back over
                a thousand years to ancient village life. Siva was a sacred and
                social expression performed during ceremonies, chiefly
                gatherings (fono), weddings, and community celebrations.
                Movements are graceful, deliberate, and storytelling in nature,
                using hands, eyes, and subtle footwork to convey legends,
                genealogy, nature, and respect for family and village hierarchy.
                A prominent branch of Samoan dance is the Taualuga,
                traditionally performed by the high chief’s son or daughter,
                symbolizing honor and culmination. Another globally recognized
                form is the Siva Afi (fire knife dance), which evolved from
                warrior training with ceremonial knives and became a dramatic
                performance art in the 20th century. Despite missionary
                influence in the 19th century, Samoan dance endured and adapted.
                Today, Siva remains central to cultural identity, especially
                during fiafia nights and diaspora celebrations, preserving
                Samoa’s rich oral history through rhythm, chant, and
                movement.{" "}
              </p>
            </div>
            {/* RIGHT COLUMN — VIDEO */}
            <div className="w-full">
              <video
                src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769898855/female_dancer_video_iuaq8v.mov"
                controls
                loop
                controlsList="nodownload"
                onContextMenu={(event) => event.preventDefault()}
                className="w-full rounded-xl shadow-2xl"
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryOfDancing;
