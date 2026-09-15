/**
 * A hand-drawn style schematic of the point, not a survey: Trading Post Road
 * coming in through the campground loop, the pavilion at the tip with the
 * lake on three sides, the covered docks off the west shore and the gas dock
 * off the tip. Enough to orient a visitor, by road or by boat, before they
 * open a real map. Drawn from the owner's aerial photo.
 */
export default function PointMap() {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-labelledby="pointmap-title" className="w-full h-auto">
      <title id="pointmap-title">
        Sketch map: Trading Post Road runs down the point at Mitchell&apos;s Point Marina to the pavilion, with covered
        docks on the west shore and the gas dock at the tip, all surrounded by Smith Mountain Lake.
      </title>
      <defs>
        <pattern id="water" width="24" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 5 Q6 0 12 5 T24 5" fill="none" stroke="#0b6d87" strokeWidth="1" opacity="0.45" />
        </pattern>
      </defs>
      {/* the lake */}
      <rect x="0" y="0" width="640" height="400" fill="url(#water)" />
      {/* the point */}
      <path
        d="M120 -10 C160 40, 150 110, 200 160 C240 200, 320 220, 340 290 C350 320, 320 350, 290 340 C230 320, 190 300, 150 260 C110 220, 80 170, 60 120 C45 80, 50 30, 40 -10 Z"
        fill="#fbf8ef"
        stroke="#1b1f18"
        strokeWidth="2"
      />
      <text x="400" y="80" className="serif" fontStyle="italic" fontSize="18" fill="#1b1f18">Smith Mountain Lake</text>
      <text x="400" y="100" fontSize="11" letterSpacing="2" fill="#6b6f64">CRADDOCK CREEK · MARKER C3</text>

      {/* Trading Post Rd down the spine of the point */}
      <path d="M85 -10 C110 60, 130 120, 190 180 C230 220, 270 250, 300 300" stroke="#1b1f18" strokeWidth="8" fill="none" />
      <path d="M85 -10 C110 60, 130 120, 190 180 C230 220, 270 250, 300 300" stroke="#fbf8ef" strokeWidth="1.5" strokeDasharray="10 8" fill="none" />
      <text x="20" y="60" fontSize="11" letterSpacing="2" fill="#1b1f18" transform="rotate(62 20 60)">TRADING POST RD</text>

      {/* campground loop */}
      <ellipse cx="160" cy="130" rx="46" ry="30" fill="none" stroke="#6b6f64" strokeWidth="2" strokeDasharray="3 4" />
      <text x="128" y="134" fontSize="9" letterSpacing="1.5" fill="#6b6f64">CAMPGROUND</text>

      {/* covered docks, west shore */}
      <g fill="#86ac4a" stroke="#1b1f18" strokeWidth="1.5">
        <rect x="70" y="230" width="60" height="14" transform="rotate(-35 100 237)" />
        <rect x="105" y="270" width="60" height="14" transform="rotate(-35 135 277)" />
      </g>
      <text x="30" y="300" fontSize="9" letterSpacing="1.5" fill="#1b1f18">COVERED SLIPS</text>

      {/* the pavilion at the tip */}
      <g transform="translate(300 300)">
        <rect x="-22" y="-16" width="44" height="32" fill="#fbf8ef" stroke="#1b1f18" strokeWidth="2" />
        <path d="M-26 -16 L0 -34 L26 -16 Z" fill="#4e7523" stroke="#1b1f18" strokeWidth="2" />
        <circle cx="0" cy="2" r="9" fill="#86ac4a" stroke="#1b1f18" strokeWidth="1.5" />
        <text x="0" y="5" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fbf8ef">M</text>
        <text x="40" y="-6" fontSize="12" fontWeight="700" letterSpacing="1" fill="#b9363c">MITCHELL&apos;S</text>
        <text x="40" y="8" fontSize="9" fill="#6b6f64">pavilion, stage &amp; tiki bar</text>
      </g>

      {/* gas dock and tie-up */}
      <rect x="310" y="345" width="70" height="10" fill="#86ac4a" stroke="#1b1f18" strokeWidth="1.5" />
      <text x="392" y="354" fontSize="9" letterSpacing="1.5" fill="#1b1f18">GAS DOCK · TIE UP HERE</text>

      {/* arrive by boat */}
      <path d="M560 300 C520 320, 470 340, 400 350" stroke="#0b6d87" strokeWidth="2" strokeDasharray="5 4" fill="none" />
      <path d="M404 345 L396 351 L405 355 Z" fill="#0b6d87" />
      <text x="500" y="290" fontSize="10" fontStyle="italic" className="serif" fill="#0b6d87">arrive by water</text>

      {/* compass */}
      <g transform="translate(600 40)">
        <circle r="16" fill="#fbf8ef" stroke="#1b1f18" />
        <path d="M0 -14 L4 0 L0 -4 L-4 0 Z" fill="#b9363c" />
        <text y="30" textAnchor="middle" fontSize="10" fill="#1b1f18">N (roughly)</text>
      </g>
    </svg>
  );
}
