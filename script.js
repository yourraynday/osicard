document.addEventListener("DOMContentLoaded", () => {
  const viewer     = document.getElementById("viewer");
  const viewerCard = document.getElementById("viewerCard");
  const frontImg   = viewerCard.querySelector(".front img");
  const backImg    = viewerCard.querySelector(".back img");

  const viewerName = document.getElementById("viewerName");
  const fieldBirth = document.getElementById("fieldBirth");
  const fieldWorks = document.getElementById("fieldWorks");
  const fieldShip  = document.getElementById("fieldShip");

  const linkInsta  = document.getElementById("linkInsta");
  const linkTiktok = document.getElementById("linkTiktok");
  const linkX      = document.getElementById("linkX");

  const closeBtn   = document.getElementById("closeViewer");

  const textOrDash = v => (v && String(v).trim()) ? v : "—";
  const formatWorks = (txt) => {
    if (!txt) return "—";
    const items = txt.split(/[,，、]/).map(s => s.trim()).filter(Boolean);
    return items.length ? items.join(" ／ ") : "—";
  };

  // サムネ → モーダル表示
  document.querySelectorAll(".thumb").forEach(card => {
    card.addEventListener("click", () => {
      const sec = card.closest(".section");

      // 画像
      frontImg.src = card.dataset.front || "";
      backImg.src  = card.dataset.back  || "";

      // 情報
      viewerName.textContent = textOrDash(card.dataset.name);
      fieldBirth.textContent = textOrDash(card.dataset.birth);
      fieldWorks.textContent = formatWorks(card.dataset.works);
      fieldShip.textContent  = textOrDash(card.dataset.ship);

      // SNS（セット既定→カード個別で上書き）
      const secInsta  = sec?.dataset.insta  || "";
      const secTiktok = sec?.dataset.tiktok || "";
      const secX      = sec?.dataset.x      || "";

      const cardInsta  = card.dataset.insta;
      const cardTiktok = card.dataset.tiktok;
      const cardX      = card.dataset.x;

      const ig = (cardInsta  && cardInsta.trim())  ? cardInsta  : secInsta;
      const tt = (cardTiktok && cardTiktok.trim()) ? cardTiktok : secTiktok;
      const xx = (cardX      && cardX.trim())      ? cardX      : secX;

      const setLink = (a, url) => {
        if (url) { a.href = url; a.classList.remove("disabled"); a.removeAttribute("aria-disabled"); }
        else     { a.href = "#"; a.classList.add("disabled");    a.setAttribute("aria-disabled","true"); }
      };
      setLink(linkInsta, ig);
      setLink(linkTiktok, tt);
      setLink(linkX, xx);

      viewerCard.classList.remove("flipped");
      viewer.classList.remove("hidden");
    });
  });

  // カード反転
  viewerCard.addEventListener("click", () => {
    viewerCard.classList.toggle("flipped");
  });

  // 閉じる
  closeBtn.addEventListener("click", () => viewer.classList.add("hidden"));
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) viewer.classList.add("hidden");
  });

  // Escで閉じる
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") viewer.classList.add("hidden");
  });
});
