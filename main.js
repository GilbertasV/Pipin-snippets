document.querySelectorAll(".snippet-box").forEach(box => {
  const btn = box.querySelector(".copy-btn");
  const ta  = box.querySelector(".snippet");

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ta.value);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  });
});
