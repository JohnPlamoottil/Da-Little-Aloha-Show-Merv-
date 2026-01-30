import React from "react";

function Home() {
  return (
    <div
      className="page-content flex flex-col items-center justify-center"
      style={{
        minHeight: "calc(100vh - 120px)",
        transform: "translateY(-20px)",
      }}
    >
      <h1></h1>
      <p className="text-center text-white" style={{ color: "#ffffff" }}>
        Click to watch our Welcome Video
      </p>
      <video
        controls
        controlsList="nodownload"
        onContextMenu={(event) => event.preventDefault()}
        className="mt-4 w-full max-w-2xl aspect-video rounded-lg shadow-lg"
      >
        <source
          src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769807988/aloha_intro_hfz6ks.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769807988/aloha_intro_hfz6ks.mov"
          type="video/quicktime"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
