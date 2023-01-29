import React from "react";
import { useEffect, useState } from "react";
function Scrolltop() {
  const [back, setBack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBack(true);
      } else {
        setBack(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {back && (
        <span className="scroll-to-top" onClick={scrollUp}>
          <i className="bi bi-arrow-up">
            <path
              className=""
              d="M5.95.03c-.267 0-.523.106-.712.294L.355 5.198c-.395.394-.395 1.03 0 1.424.394.393 1.032.393 1.426 0L5.95 2.46l4.172 4.162c.394.393 1.032.393 1.426 0 .394-.393.394-1.03 0-1.424L6.665.324C6.475.136 6.22.03 5.95.03z"
            ></path>
          </i>
        </span>
      )}
    </div>
  );
}

export default Scrolltop;
