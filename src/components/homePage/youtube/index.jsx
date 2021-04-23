import React from "react";
var youtubeThumbnail = require("youtube-thumbnail");

const Index = () => {
  var thumbnail = youtubeThumbnail(
    "https://www.youtube.com/watch?v=H7ghOLrb3LI"
  );

  return (
    <div className="codeuiandy-youtube-wrapper">
      <div className="codeuiandy-youtube-header-wrapper">
        <h2 className="codeuiandy-youtube-header">Top Youtube Videos </h2>
        <h4>
          <span>Subscribe To Channel</span>
        </h4>
      </div>
      <div className="codeuiandy-youtube-body">
        <div className="codeuiandy-youtube-thumbnails-wrapper">
          <div className="codeuiandy-youtube-thumbnail">
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
          <div className="codeuiandy-youtube-thumbnail">
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
          <div className="codeuiandy-youtube-thumbnail">
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
          <div className="codeuiandy-youtube-thumbnail">
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
          <div className="codeuiandy-youtube-thumbnail">
            {" "}
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
          <div className="codeuiandy-youtube-thumbnail">
            {" "}
            <img
              src={thumbnail.default.url}
              alt=""
              className="codeuiandy-youtube-yhumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
