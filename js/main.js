(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var isArabic = (document.documentElement.lang || "").toLowerCase().indexOf("ar") === 0;

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      var openLabel = toggle.getAttribute("data-label-open") || (isArabic ? "فتح القائمة" : "Open menu");
      var closeLabel = toggle.getAttribute("data-label-close") || (isArabic ? "إغلاق القائمة" : "Close menu");
      toggle.setAttribute("aria-label", open ? closeLabel : openLabel);
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var form = document.getElementById("visit-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.querySelector("[name='name']");
      var org = form.querySelector("[name='organization']");
      var interest = form.querySelector("[name='interest']");
      var role = form.querySelector("[name='role']");
      var message = form.querySelector("[name='message']");
      var required = [name, org, interest];
      var valid = true;
      required.forEach(function (field) {
        if (!field) return;
        if (!String(field.value || "").trim()) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
        } else {
          field.removeAttribute("aria-invalid");
        }
      });
      if (!valid) {
        var first = form.querySelector("[aria-invalid='true']");
        if (first) first.focus();
        return;
      }

      var summary = document.getElementById("form-summary");
      if (summary) {
        if (isArabic) {
          summary.textContent =
            "الاسم: " + name.value.trim() + "\n" +
            "الجهة: " + org.value.trim() + "\n" +
            (role && role.value.trim() ? "الصفة: " + role.value.trim() + "\n" : "") +
            "الاهتمام: " + interest.value + "\n" +
            (message && message.value.trim() ? "الرسالة: " + message.value.trim() + "\n" : "") +
            "يظهر هذا النص في هذه الصفحة فقط. لم يُرسَل بالبريد ولم يُحفَظ على خادم.";
        } else {
          summary.textContent =
            "Name: " + name.value.trim() + "\n" +
            "Organization: " + org.value.trim() + "\n" +
            (role && role.value.trim() ? "Role: " + role.value.trim() + "\n" : "") +
            "Interest: " + interest.value + "\n" +
            (message && message.value.trim() ? "Message: " + message.value.trim() + "\n" : "") +
            "This text is only shown on this page. It has not been emailed or stored on a server.";
        }
      }
      form.classList.add("is-sent");
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  }
})();
