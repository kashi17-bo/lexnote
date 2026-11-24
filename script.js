document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("termsAgree");
  const button = document.getElementById("startService");
  const feedback = document.getElementById("agreementFeedback");
  if (!checkbox || !button || !feedback) return;
  button.addEventListener("click", () => {
    feedback.className = "feedback show";
    if (!checkbox.checked) {
      feedback.classList.add("error");
      feedback.textContent = "利用規約に同意するチェックを入れてください。";
      checkbox.focus();
      return;
    }
    feedback.classList.add("success");
    feedback.textContent = "利用規約に同意し、サービス利用を開始する手続き（デモ）が完了しました。";
  });
});