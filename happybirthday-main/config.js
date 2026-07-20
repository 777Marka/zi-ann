const CONFIG = {
  // ── Doğum Günü Sahibi ─────────────────────────────────────────
  name: "Nisa",
  photo: "./img/zisan.jpg",       // Fotoğrafı img klasörüne koy
  music: "./music/hbd.mpeg",      // Müziği music klasörüne koy

  // ── Tema Renkleri ─────────────────────────────────────────────
  colors: {
    primary: "#f472b6",
    accent: "#60a5fa",
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
    },
    light: {
      background: "#fafaf9",
      text: "#1e293b",
    },
  },

  defaultMode: "dark",

  sections: [
    {
      type: "greeting",
      title: "Merhaba Nisaaa ❤️",
      subtitle: "Bugün senin en özel günün!",
    },
    {
      type: "countdown",
      from: 3,
      goText: "🎉",
    },
    {
      type: "announcement",
      text: "Doğum günün kutlu olsun! 🥳",
    },
    {
      type: "chatbox",
      message:
        "İyi ki doğdun Nisaa! 🎂 Sana sağlık, mutluluk, başarı ve bol kahkahalarla dolu harika bir yıl diliyorum. Hayatındaki tüm güzellikler hep seninle olsun. Nice mutlu yaşlara! ❤️",
      buttonText: "Gönder",
    },
    {
      type: "ideas",
      lines: [
        "Sana sıradan bir doğum günü mesajı yazabilirdim...",
        "Ama bu sana yakışmazdı.",
        "Çünkü sen <strong>çok özelsin.</strong>",
        "Ve bugün,",
        "Tamamen senin günün. <span>🎂❤️</span>",
      ],
      bigLetters: "İYİ Kİ",
    },
    {
      type: "quote",
      text: "Her yeni yaş, yeni umutlar ve güzel başlangıçlar getirir. Dilerim tüm hayallerin gerçekleşir.",
      author: "❤️",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "İyi ki Doğdun Zişan! 🎂",
      wishText:
        "Mutluluk, sağlık, başarı ve sevgi dolu nice yılların olsun. Gülüşün hiç eksik olmasın! 💖",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Bu küçük sürprizi beğendiğini umuyorum. ❤️",
      replayText: "Tekrar izlemek istersen buraya tıklayabilirsin. 🎉",
    },
  ],
};
