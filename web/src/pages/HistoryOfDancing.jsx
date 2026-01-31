import React from "react";

function HistoryOfDancing() {
  return (
    <div className="page-content" style={{ color: "white", fontSize: "10px" }}>
      <h1>History of Dancing</h1>
      <p style={{ color: "white", fontSize: "45px", textAlign: "center" }}>
        Discover the rich history of traditional Hawaiian and Samoan dance.
      </p>

      <video
        src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769822347/Telling_Warrior_Stories_with_Hula_rbz6fn.mp4"
        controls
        className="w-full"
        style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}
      />

      <p style={{ color: "white", fontSize: "35px", textAlign: "center" }}>
        A common misconception about hula is that it's a dance tradition
        strictly for women. Nope. In ancient Hawai'i, men were the first to
        dance hula, and the best dancers were even chosen to become warriors.
        Today, Ke Kai O Kahiki—one of Hawai'i's most famous male hula schools—is
        carrying on this tradition by telling warrior stories with dance. To do
        so, dancers train in the same way as their ancient forbearers, using the
        land itself as a harsh and unforgiving gym. To dance like a warrior, you
        need to train like one.{" "}
      </p>
    </div>
  );
}

export default HistoryOfDancing;
