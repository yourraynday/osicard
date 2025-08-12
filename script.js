document.addEventListener("DOMContentLoaded", function () {
  const viewer = document.getElementById("viewer");
  const viewerCard = document.getElementById("viewerCard");
  const viewerName = document.getElementById("viewerName");
  const viewerInfo = document.getElementById("viewerInfo");
  const frontImg = viewerCard.querySelector(".front img");
  const backImg = viewerCard.querySelector(".back img");

  const linkInsta = document.getElementById("linkInsta");
  const linkTiktok = document.getElementById("linkTiktok");
  const linkX = document.getElementById("linkX");

  document.querySelectorAll(".thumb").forEach(card => {
    card.addEventListener("click", () => {
      const front = card.dataset.front;
      const back = card.dataset.back;
      const name = card.dataset.name;
      const info = card.dataset.info;
      const insta = card.dataset.insta;
      const tiktok = card.dataset.tiktok;
      const x = card.dataset.x;

      frontImg.src = front;
      backImg.src = back;
      viewerName.textContent = name;
      viewerInfo.textContent = info;
      linkInsta.href = insta;
      linkTiktok.href = tiktok;
      linkX.href = x;

      viewerCard.classList.remove("flipped");
      viewer.classList.remove("hidden");
    });
  });

  viewerCard.addEventListener("click", () => {
    viewerCard.classList.toggle("flipped");
  });

  document.getElementById("closeViewer").addEventListener("click", () => {
    viewer.classList.add("hidden");
  });

  // 背景クリックで閉じる
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      viewer.classList.add("hidden");
    }
  });
});
