const moods = {
  Sunday: {
    emoji: "🌤️",
    quote: "Sundaze and subtle sunrays. Just breathe."
  },
  Monday: {
    emoji: "🚀",
    quote: "Launch into the week like a cosmic rocket."
  },
  Tuesday: {
    emoji: "🌿",
    quote: "Grow slowly. Bloom intentionally."
  },
  Wednesday: {
    emoji: "🧠",
    quote: "Midweek clarity. Think deep, float high."
  },
  Thursday: {
    emoji: "🌊",
    quote: "Let go, flow, and vibe like water."
  },
  Friday: {
    emoji: "🔥",
    quote: "Fuel up. It's your fire day!"
  },
  Saturday: {
    emoji: "🎧",
    quote: "Lo-fi mood. Chill. Recharge. Repeat."
  }
};

const today = new Date();
const day = today.toLocaleDateString('en-US', { weekday: 'long' });

document.getElementById('dayTitle').textContent = `Moodverse: ${day}`;
document.getElementById('vibeQuote').textContent = moods[day].quote;
document.getElementById('emoji').textContent = moods[day].emoji;
