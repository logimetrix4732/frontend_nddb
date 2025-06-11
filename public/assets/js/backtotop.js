!(function (s) {
  "use strict";

  s(".switch").on("click", function () {
    s("body").hasClass("light")
      ? (s("body").removeClass("light"), s(".switch").removeClass("switched"))
      : (s("body").addClass("light"), s(".switch").addClass("switched"));
  });

  s(document).ready(function () {
    const waitForPath = setInterval(() => {
      var e = document.querySelector(".progress-wrap path");

      if (!e) return; // Keep waiting...

      clearInterval(waitForPath); // ✅ Path found, stop waiting

      var t = e.getTotalLength();

      e.style.transition = e.style.WebkitTransition = "none";
      e.style.strokeDasharray = t + " " + t;
      e.style.strokeDashoffset = t;
      e.getBoundingClientRect();
      e.style.transition = e.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";

      var updateProgress = function () {
        var scrollTop = s(window).scrollTop(),
          docHeight = s(document).height() - s(window).height(),
          progress = t - (scrollTop * t) / docHeight;
        e.style.strokeDashoffset = progress;
      };

      updateProgress();
      s(window).scroll(updateProgress);

      s(window).on("scroll", function () {
        s(this).scrollTop() > 50
          ? s(".progress-wrap").addClass("active-progress")
          : s(".progress-wrap").removeClass("active-progress");
      });

      s(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        s("html, body").animate({ scrollTop: 0 }, 550);
        return false;
      });
    }, 100); // Check every 100ms
  });
})(jQuery);
