import React from "react";

export default function Card() {
  return (
    <label
      className="ship show"
      data-id="188"
      data-index="146"
      data-name="Mogami"
      data-class="CL"
      data-rarity="rarity-c"
      data-faction="Sakura Empire"
      data-filters="vanguard cl elite sakura light">
      <input type="checkbox" id="188" />
      <span className="ship-type cl" data-title="Light Cruiser">
        CL
      </span>
      <img
        className="ship-img rarity-4"
        src="./assets/img/ship-blank.png"
        data-echo="./img/188-Mogami,jpg"
        alt="Mogami"
      />
      <div className="ship-info">
        <div className="ship-id-and-ship-type-text">
          <span className="ship-id">188</span>
          <span
            className="ship-type-text"
            data-title="Light Cruiser"
            data-abbr="CL">
            CL
          </span>
        </div>
        <h4 className="ship-name">Mogami</h4>
        <div className="ship-rarity-and-ship-faction">
          <span className="ship-rarity">Elite</span>
          <span className="ship-faction">Sakura Empire</span>
        </div>
        <div className="ship-build-pool-and-ship-build-time">
          <span className="ship-build-pool" title="Light Build">
            Light:
          </span>
          <span className="ship-build-time">01:48:00</span>
        </div>
        <div className="ship-drop-map"></div>
      </div>
    </label>
  );
}
