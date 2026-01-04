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

//custom java
document.querySelectorAll(".snip").forEach(snip=>{
  const button = snip.querySelector(".copy-button");
  const text = snip.querySelector(".textarea");
    button.addEventListener("click", function(){
      console.log("Button was pressed!");
      navigator.clipboard.writeText(text.value);
    })
  })

  //dark theme
  const mode = document.getElementById("toggle");
  const Pipin = document.getElementById("Pipin");

  mode.addEventListener("click", ()=>{
    const isDark = document.body.classList.toggle("dark");
    mode.textContent = isDark ? "Normal mode": "Hacker mode";
    Pipin.src = isDark ? "Pipin_glasses.png": "Pipin.png";
  })

