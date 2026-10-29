// // import React, { useEffect, useRef, useState } from "react";
// // import "./WeddingCover1.css";

// // export default function WeddingCover({
// //   brideName = "Anjana",
// //   groomName = "Teveeto",
// //   weddingDay = "14",
// //   weddingMonth = "JANUARY",
// //   weddingYear = "2027",
// //   onOpen,
// // }) {
// //   const [isOpening, setIsOpening] = useState(false);
// //   const timeoutRef = useRef(null);

// //   useEffect(() => {
// //     return () => clearTimeout(timeoutRef.current);
// //   }, []);

// //   const openInvitation = () => {
// //     if (isOpening) return;

// //     setIsOpening(true);

// //     timeoutRef.current = setTimeout(() => {
// //       onOpen?.();
// //     }, 1400);
// //   };

// //   return (
// //     <main className={`wedding-cover ${isOpening ? "is-opening" : ""}`}>
// //       <div className="cover-glow" aria-hidden="true" />

// //       <div className="cover-content">
// //         <p className="cover-eyebrow">
// //           TOGETHER WITH THEIR FAMILIES
// //         </p>

// //         <div className="cover-card">
// //           <div className="card-border">
// //             {/* Corner ornaments */}
// //             <div className="card-corner top-left" aria-hidden="true">✧</div>
// //             <div className="card-corner top-right" aria-hidden="true">✧</div>
// //             <div className="card-corner bottom-left" aria-hidden="true">✧</div>
// //             <div className="card-corner bottom-right" aria-hidden="true">✧</div>

// //             {/* Invitation text */}
// //             <div className="card-content">
// //               <span className="card-small-title">
// //                 A SPECIAL INVITATION
// //               </span>

// //               <div className="floral-divider" aria-hidden="true">
// //                 <span>✦</span>
// //                 <span className="divider-line" />
// //                 <span>✦</span>
// //               </div>

// //               <h1 className="couple-names">
// //                 <span>{brideName}</span>
// //                 <span className="ampersand">&amp;</span>
// //                 <span>{groomName}</span>
// //               </h1>

// //               <p className="cover-description">
// //                 With love and joy, we invite you
// //                 <br />
// //                 to be a part of our special day.
// //               </p>

// //               <div
// //                 className="cover-date"
// //                 aria-label={`${weddingDay} ${weddingMonth} ${weddingYear}`}
// //               >
// //                 <span>{weddingDay}</span>
// //                 <span className="date-divider" />
// //                 <span>{weddingMonth}</span>
// //                 <span className="date-divider" />
// //                 <span>{weddingYear}</span>
// //               </div>
// //             </div>

// //             {/* Vertical ribbon */}
// //             <div className="ribbon-vertical" aria-hidden="true">
// //               <img src="/assets/ribbon-vertical.png" alt="" />
// //             </div>

// //             {/* Horizontal ribbon */}
// //             <div className="ribbon-horizontal" aria-hidden="true">
// //               <img src="/assets/ribbon-horizontal.png" alt="" />
// //             </div>

// //             {/* Layered satin bow */}
// //             <div
// //               className={`gift-bow ${isOpening ? "bow-opening" : ""}`}
// //               aria-hidden="true"
// //             >
// //               <img
// //                 className="bow-tail bow-tail-left"
// //                 src="/assets/ribbon-tail-left.png"
// //                 alt=""
// //               />
// //               <img
// //                 className="bow-tail bow-tail-right"
// //                 src="/assets/ribbon-tail-right.png"
// //                 alt=""
// //               />
// //               <img
// //                 className="bow-loop bow-loop-left"
// //                 src="/assets/ribbon-loop-left.png"
// //                 alt=""
// //               />
// //               <img
// //                 className="bow-loop bow-loop-right"
// //                 src="/assets/ribbon-loop-right.png"
// //                 alt=""
// //               />
// //               <img
// //                 className="bow-knot"
// //                 src="/assets/ribbon-knot.png"
// //                 alt=""
// //               />
// //             </div>

// //             {/* Wax seal */}
// //             <button
// //               type="button"
// //               className="wax-seal"
// //               onClick={openInvitation}
// //               disabled={isOpening}
// //               aria-label="Open wedding invitation"
// //             >
// //               <img
// //                 src="/assets/wax-seal.png"
// //                 alt=""
// //                 className="wax-seal-image"
// //                 draggable="false"
// //               />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="cover-footer">
// //           <span className="footer-ornament" aria-hidden="true">✧</span>
// //           <p>
// //             {isOpening
// //               ? "UNWRAPPING YOUR INVITATION..."
// //               : "A LITTLE LOVE, SEALED WITH GOLD"}
// //           </p>
// //           <span className="footer-ornament" aria-hidden="true">✧</span>
// //         </div>

// //         <button
// //           type="button"
// //           className="open-hint"
// //           onClick={openInvitation}
// //           disabled={isOpening}
// //         >
// //           <span className="hint-dot" aria-hidden="true" />
// //           {isOpening ? "Opening..." : "Tap the golden seal to open"}
// //         </button>
// //       </div>
// //     </main>
// //   );
// // }




// import React, { useEffect, useRef, useState } from "react";
// import "./WeddingCover.css";

// export default function WeddingCover({
//   brideName = "Anjana",
//   groomName = "Teveeto",
//   onOpen,
// }) {
//   const [isOpening, setIsOpening] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const openInvitation = () => {
//     if (isOpening) return;

//     setIsOpening(true);

//     timeoutRef.current = setTimeout(() => {
//       onOpen?.();
//     }, 1400);
//   };

//   return (
//     <main className={`wedding-cover ${isOpening ? "is-opening" : ""}`}>
//       <div className="cover-glow" aria-hidden="true" />

//       <div className="cover-content">
//         {/* <p className="cover-eyebrow">
//           TOGETHER WITH THEIR FAMILIES
//         </p> */}

//         <div className="cover-card">
//           <div className="card-border">
//             {/* Corner ornaments */}
//             <div className="card-corner top-left" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner top-right" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner bottom-left" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner bottom-right" aria-hidden="true">
//               ✧
//             </div>

//             {/* Couple names on the right */}
//             <div className="card-content">
//               <span className="card-small-title">
//                 A SPECIAL INVITATION
//               </span>

//               <div className="floral-divider" aria-hidden="true">
//                 <span>✦</span>
//                 <span className="divider-line" />
//                 <span>✦</span>
//               </div>

//               <h1 className="couple-names">
//                 <span>{brideName}</span>
//                 <span className="ampersand">&amp;</span>
//                 <span>{groomName}</span>
//               </h1>
//             </div>

//             {/* Vertical ribbon */}
//             <div className="ribbon-vertical" aria-hidden="true">
//               <img src="/assets/ribbon-vertical.png" alt="" />
//             </div>

//             {/* Horizontal ribbon */}
//             <div className="ribbon-horizontal" aria-hidden="true">
//               <img src="/assets/ribbon-horizontal.png" alt="" />
//             </div>

//             {/* Layered satin bow */}
//             <div
//               className={`gift-bow ${isOpening ? "bow-opening" : ""}`}
//               aria-hidden="true"
//             >
//               <img
//                 className="bow-tail bow-tail-left"
//                 src="/assets/ribbon-tail-left.png"
//                 alt=""
//               />

//               <img
//                 className="bow-tail bow-tail-right"
//                 src="/assets/ribbon-tail-right.png"
//                 alt=""
//               />

//               <img
//                 className="bow-loop bow-loop-left"
//                 src="/assets/ribbon-loop-left.png"
//                 alt=""
//               />

//               <img
//                 className="bow-loop bow-loop-right"
//                 src="/assets/ribbon-loop-right.png"
//                 alt=""
//               />

//               <img
//                 className="bow-knot"
//                 src="/assets/ribbon-knot.png"
//                 alt=""
//               />
//             </div>

//             {/* Wax seal */}
//             <button
//               type="button"
//               className="wax-seal"
//               onClick={openInvitation}
//               disabled={isOpening}
//               aria-label="Open wedding invitation"
//             >
//               <img
//                 src="/assets/wax-seal.png"
//                 alt=""
//                 className="wax-seal-image"
//                 draggable="false"
//               />
//             </button>
//           </div>
//         </div>

//         {/* <div className="cover-footer">
//           <span className="footer-ornament" aria-hidden="true">
//             ✧
//           </span>

//           <p>
//             {isOpening
//               ? "UNWRAPPING YOUR INVITATION..."
//               : "A LITTLE LOVE, SEALED WITH GOLD"}
//           </p>

//           <span className="footer-ornament" aria-hidden="true">
//             ✧
//           </span>
//         </div> */}

//         <button
//           type="button"
//           className="open-hint"
//           onClick={openInvitation}
//           disabled={isOpening}
//         >
//           <span className="hint-dot" aria-hidden="true" />
//           {isOpening ? "Opening..." : "Tap the golden seal to open"}
//         </button>
//       </div>
//     </main>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import "./WeddingCover1.css";

// export default function WeddingCover({
//   brideName = "Anjana",
//   groomName = "Teveeto",
//   onOpen,
// }) {
//   const [isOpening, setIsOpening] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const openInvitation = () => {
//     if (isOpening) return;

//     setIsOpening(true);

//     timeoutRef.current = setTimeout(() => {
//       onOpen?.();
//     }, 1400);
//   };

//   return (
//     <main className={`wedding-cover ${isOpening ? "is-opening" : ""}`}>
//       <div className="cover-background" aria-hidden="true" />
//       <div className="cover-overlay" aria-hidden="true" />
//       <div className="cover-glow" aria-hidden="true" />

//       <div className="cover-content">
//         <div className="cover-card">
//           <div className="card-border">
//             <div className="card-corner top-left" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner top-right" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner bottom-left" aria-hidden="true">
//               ✧
//             </div>
//             <div className="card-corner bottom-right" aria-hidden="true">
//               ✧
//             </div>

//             <div className="card-content">
//               <span className="card-small-title">
//                 A SPECIAL INVITATION
//               </span>

//               <div className="floral-divider" aria-hidden="true">
//                 <span>✦</span>
//                 <span className="divider-line" />
//                 <span>✦</span>
//               </div>

//               <h1 className="couple-names">
//                 <span>{brideName}</span>
//                 <span className="ampersand">&amp;</span>
//                 <span>{groomName}</span>
//               </h1>
//             </div>

//             <div className="ribbon-vertical" aria-hidden="true">
//               <img src="/assets/ribbon-vertical.png" alt="" />
//             </div>

//             <div className="ribbon-horizontal" aria-hidden="true">
//               <img src="/assets/ribbon-horizontal.png" alt="" />
//             </div>

//             <div
//               className={`gift-bow ${isOpening ? "bow-opening" : ""}`}
//               aria-hidden="true"
//             >
//               <img
//                 className="bow-tail bow-tail-left"
//                 src="/assets/ribbon-tail-left.png"
//                 alt=""
//               />

//               <img
//                 className="bow-tail bow-tail-right"
//                 src="/assets/ribbon-tail-right.png"
//                 alt=""
//               />

//               <img
//                 className="bow-loop bow-loop-left"
//                 src="/assets/ribbon-loop-left.png"
//                 alt=""
//               />

//               <img
//                 className="bow-loop bow-loop-right"
//                 src="/assets/ribbon-loop-right.png"
//                 alt=""
//               />

//               <img
//                 className="bow-knot"
//                 src="/assets/ribbon-knot.png"
//                 alt=""
//               />
//             </div>

//             <button
//               type="button"
//               className="wax-seal"
//               onClick={openInvitation}
//               disabled={isOpening}
//               aria-label="Open wedding invitation"
//             >
//               <img
//                 src="/assets/wax-seal.png"
//                 alt=""
//                 className="wax-seal-image"
//                 draggable="false"
//               />
//             </button>
//           </div>
//         </div>

//         <button
//           type="button"
//           className="open-hint"
//           onClick={openInvitation}
//           disabled={isOpening}
//         >
//           <span className="hint-dot" aria-hidden="true" />
//           {isOpening ? "Opening..." : "Tap the golden seal to open"}
//         </button>
//       </div>
//     </main>
//   );
// }




import React, { useEffect, useMemo, useRef, useState } from "react";
import "./WeddingCover.css";

function FloatingMagic({ count = 65 }) {
  const particles = useMemo(() => {
    const random = (min, max) => min + Math.random() * (max - min);
    return Array.from({ length: count }, (_, id) => {
      const value = Math.random();
      return {
        id,
        type: value < 0.38 ? "heart" : value < 0.72 ? "star" : "sparkle",
        left: `${random(0, 100)}%`,
        size: `${random(8, 19)}px`,
        duration: `${random(12, 28)}s`,
        delay: `${random(-28, 0)}s`,
        drift: `${random(-55, 55)}px`,
        opacity: random(0.12, 0.34).toFixed(2),
        twinkleDelay: `${random(-4, 0)}s`,
      };
    });
  }, [count]);

  return (
    <div className="floating-magic" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`magic-particle ${p.type}`}
          style={{
            "--left": p.left,
            "--size": p.size,
            "--duration": p.duration,
            "--delay": p.delay,
            "--drift": p.drift,
            "--opacity": p.opacity,
            "--twinkle-delay": p.twinkleDelay,
          }}
        >
          {p.type === "heart" ? "♥" : p.type === "star" ? "✧" : "✦"}
        </span>
      ))}
    </div>
  );
}

export default function WeddingCover({
  brideName = "Anjana",
  groomName = "Teveeto",
  onOpen,
}) {
  const [isOpening, setIsOpening] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const openInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);
    timeoutRef.current = setTimeout(() => onOpen?.(), 1400);
  };

  return (
    <main className={`wedding-cover ${isOpening ? "is-opening" : ""}`}>
      <div className="cover-background" aria-hidden="true" />
      <div className="cover-overlay" aria-hidden="true" />
      <div className="cover-glow" aria-hidden="true" />
      <FloatingMagic count={65} />

      <div className="cover-content">
        <div className="cover-card">
          <div className="card-border">
            <div className="card-corner top-left" aria-hidden="true">✧</div>
            <div className="card-corner top-right" aria-hidden="true">✧</div>
            <div className="card-corner bottom-left" aria-hidden="true">✧</div>
            <div className="card-corner bottom-right" aria-hidden="true">✧</div>

            <div className="card-content">
              <span className="card-small-title">A SPECIAL INVITATION</span>
              <div className="floral-divider" aria-hidden="true">
                <span>✦</span><span className="divider-line" /><span>✦</span>
              </div>
              <h1 className="couple-names">
                <span>{brideName}</span>
                <span className="ampersand">&amp;</span>
                <span>{groomName}</span>
              </h1>
            </div>

            <div className="ribbon-vertical" aria-hidden="true">
              <img src="/assets/ribbon-vertical.png" alt="" />
            </div>
            <div className="ribbon-horizontal" aria-hidden="true">
              <img src="/assets/ribbon-horizontal.png" alt="" />
            </div>

            <div className={`gift-bow ${isOpening ? "bow-opening" : ""}`} aria-hidden="true">
              <img className="bow-tail bow-tail-left" src="/assets/ribbon-tail-left.png" alt="" />
              <img className="bow-tail bow-tail-right" src="/assets/ribbon-tail-right.png" alt="" />
              <img className="bow-loop bow-loop-left" src="/assets/ribbon-loop-left.png" alt="" />
              <img className="bow-loop bow-loop-right" src="/assets/ribbon-loop-right.png" alt="" />
              <img className="bow-knot" src="/assets/ribbon-knot.png" alt="" />
            </div>

            <button
              type="button"
              className="wax-seal"
              onClick={openInvitation}
              disabled={isOpening}
              aria-label="Open wedding invitation"
            >
              <img src="/assets/wax-seal.png" alt="" className="wax-seal-image" draggable="false" />
            </button>
          </div>
        </div>

        <button type="button" className="open-hint" onClick={openInvitation} disabled={isOpening}>
          <span className="hint-dot" aria-hidden="true" />
          {isOpening ? "Opening..." : "Tap the golden seal to open"}
        </button>
      </div>
    </main>
  );
}
