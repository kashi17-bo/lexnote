document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "メニューを開く" : "メニューを閉じる");
      nav.classList.toggle("open", !expanded);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
      nav.classList.remove("open");
    }));
  }

  const startButton = document.getElementById("start-service");
  const consent = document.getElementById("consent");
  const feedback = document.getElementById("consent-feedback");
  if (startButton && consent && feedback) {
    startButton.addEventListener("click", () => {
      if (!consent.checked) {
        feedback.textContent = "利用規約に同意するチェックを入れてください。";
        feedback.classList.add("error");
        consent.focus();
        return;
      }
      feedback.textContent = "利用規約に同意し、サービス利用を開始する手続き（デモ）が完了しました。";
      feedback.classList.remove("error");
    });
    consent.addEventListener("change", () => {
      if (consent.checked && feedback.classList.contains("error")) {
        feedback.textContent = "";
        feedback.classList.remove("error");
      }
    });
  }
});