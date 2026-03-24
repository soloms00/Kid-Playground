import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

const PALETTE = [
  "#ff6b6b",
  "#ff9f43",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#845ef7",
  "#ff66c4",
  "#8d6e63",
  "#111827",
  "#ffffff",
];

const CHARACTERS = [
  {
    id: "happy-cat",
    name: "Happy Cat",
    category: "Animals",
    bubbles: [
      { x: 205, y: 180, r: 118, color: "#fffdf7" },
      { x: 205, y: 322, r: 88, color: "#fef3c7" },
      { x: 94, y: 322, r: 34, color: "#fde68a" },
      { x: 316, y: 322, r: 34, color: "#fde68a" },
      { x: 155, y: 458, r: 34, color: "#fde68a" },
      { x: 255, y: 458, r: 34, color: "#fde68a" },
      { x: 120, y: 88, r: 42, color: "#fff7ed" },
      { x: 290, y: 88, r: 42, color: "#fff7ed" },
    ],
    draw: (ctx) => {
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.arc(205, 180, 118, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(116, 118);
      ctx.lineTo(136, 48);
      ctx.lineTo(174, 120);
      ctx.closePath();
      ctx.moveTo(294, 118);
      ctx.lineTo(274, 48);
      ctx.lineTo(236, 120);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(162, 175, 7, 0, Math.PI * 2);
      ctx.arc(248, 175, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2937";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(205, 188);
      ctx.lineTo(194, 202);
      ctx.lineTo(216, 202);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(205, 202);
      ctx.quadraticCurveTo(184, 220, 166, 210);
      ctx.moveTo(205, 202);
      ctx.quadraticCurveTo(226, 220, 244, 210);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(156, 195);
      ctx.lineTo(92, 185);
      ctx.moveTo(156, 210);
      ctx.lineTo(90, 214);
      ctx.moveTo(254, 195);
      ctx.lineTo(318, 185);
      ctx.moveTo(254, 210);
      ctx.lineTo(320, 214);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(205, 322, 88, 70, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(135, 316);
      ctx.lineTo(93, 340);
      ctx.moveTo(275, 316);
      ctx.lineTo(317, 340);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(176, 388);
      ctx.lineTo(156, 458);
      ctx.moveTo(234, 388);
      ctx.lineTo(254, 458);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(155, 458, 34, 0, Math.PI * 2);
      ctx.arc(255, 458, 34, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(292, 324);
      ctx.quadraticCurveTo(356, 286, 336, 222);
      ctx.stroke();
    },
  },
  {
    id: "bunny-princess",
    name: "Bunny Princess",
    category: "Princesses",
    bubbles: [
      { x: 205, y: 110, r: 32, color: "#fff7d6" },
      { x: 195, y: 190, r: 120, color: "#fffaf5" },
      { x: 110, y: 320, r: 46, color: "#ffe4e6" },
      { x: 280, y: 320, r: 46, color: "#ffe4e6" },
      { x: 165, y: 420, r: 44, color: "#fce7f3" },
      { x: 245, y: 420, r: 44, color: "#fce7f3" },
      { x: 205, y: 285, r: 52, color: "#f9fafb" },
    ],
    draw: (ctx) => {
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.ellipse(205, 195, 122, 126, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(135, 84, 32, 86, -0.2, 0, Math.PI * 2);
      ctx.ellipse(275, 84, 32, 86, 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(160, 180, 7, 0, Math.PI * 2);
      ctx.arc(250, 180, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2937";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(205, 195);
      ctx.lineTo(194, 208);
      ctx.lineTo(216, 208);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(205, 208);
      ctx.quadraticCurveTo(188, 224, 172, 216);
      ctx.moveTo(205, 208);
      ctx.quadraticCurveTo(222, 224, 238, 216);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(134, 194);
      ctx.lineTo(90, 188);
      ctx.moveTo(134, 208);
      ctx.lineTo(84, 212);
      ctx.moveTo(276, 194);
      ctx.lineTo(320, 188);
      ctx.moveTo(276, 208);
      ctx.lineTo(326, 212);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(205, 52);
      ctx.lineTo(184, 90);
      ctx.lineTo(226, 90);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(178, 80);
      ctx.lineTo(156, 94);
      ctx.moveTo(232, 80);
      ctx.lineTo(254, 94);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(138, 286);
      ctx.quadraticCurveTo(205, 250, 272, 286);
      ctx.quadraticCurveTo(252, 360, 205, 380);
      ctx.quadraticCurveTo(158, 360, 138, 286);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(112, 320, 46, 22, 1.2, 0, Math.PI * 2);
      ctx.ellipse(298, 320, 46, 22, -1.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(175, 380);
      ctx.lineTo(164, 470);
      ctx.moveTo(235, 380);
      ctx.lineTo(246, 470);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(164, 478, 34, 18, 0.15, 0, Math.PI * 2);
      ctx.ellipse(246, 478, 34, 18, -0.15, 0, Math.PI * 2);
      ctx.stroke();
    },
  },
  {
    id: "tiny-dino",
    name: "Tiny Dino",
    category: "Dinos",
    bubbles: [
      { x: 212, y: 250, r: 142, color: "#ecfccb" },
      { x: 312, y: 166, r: 48, color: "#dcfce7" },
      { x: 115, y: 316, r: 42, color: "#d9f99d" },
      { x: 188, y: 425, r: 40, color: "#bef264" },
      { x: 268, y: 425, r: 40, color: "#bef264" },
      { x: 180, y: 90, r: 22, color: "#fef9c3" },
      { x: 214, y: 72, r: 22, color: "#fef9c3" },
      { x: 250, y: 60, r: 22, color: "#fef9c3" },
    ],
    draw: (ctx) => {
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(90, 284);
      ctx.quadraticCurveTo(74, 148, 196, 126);
      ctx.quadraticCurveTo(236, 66, 318, 110);
      ctx.quadraticCurveTo(372, 136, 344, 246);
      ctx.quadraticCurveTo(324, 352, 224, 374);
      ctx.lineTo(244, 462);
      ctx.lineTo(204, 378);
      ctx.quadraticCurveTo(134, 372, 100, 338);
      ctx.quadraticCurveTo(52, 306, 90, 284);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(294, 175, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2937";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(312, 218);
      ctx.quadraticCurveTo(330, 230, 344, 216);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(188, 126);
      ctx.lineTo(172, 88);
      ctx.moveTo(220, 110);
      ctx.lineTo(214, 70);
      ctx.moveTo(252, 102);
      ctx.lineTo(250, 58);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(146, 280);
      ctx.lineTo(108, 350);
      ctx.moveTo(228, 364);
      ctx.lineTo(188, 435);
      ctx.moveTo(284, 354);
      ctx.lineTo(268, 435);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(88, 282);
      ctx.quadraticCurveTo(28, 250, 42, 180);
      ctx.stroke();
    },
  },
  {
    id: "little-truck",
    name: "Little Truck",
    category: "Trucks",
    bubbles: [
      { x: 210, y: 275, r: 122, color: "#e0f2fe" },
      { x: 160, y: 205, r: 54, color: "#f0f9ff" },
      { x: 260, y: 205, r: 54, color: "#f0f9ff" },
      { x: 115, y: 402, r: 42, color: "#bfdbfe" },
      { x: 305, y: 402, r: 42, color: "#bfdbfe" },
      { x: 210, y: 136, r: 38, color: "#dbeafe" },
    ],
    draw: (ctx) => {
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      roundedRect(ctx, 72, 208, 220, 122, 30);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(292, 330);
      ctx.lineTo(292, 232);
      ctx.quadraticCurveTo(292, 188, 338, 188);
      ctx.lineTo(370, 188);
      ctx.quadraticCurveTo(392, 188, 400, 208);
      ctx.lineTo(428, 270);
      ctx.lineTo(428, 330);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(312, 190);
      ctx.lineTo(312, 248);
      ctx.lineTo(392, 248);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(114, 402, 42, 0, Math.PI * 2);
      ctx.arc(306, 402, 42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(114, 402, 16, 0, Math.PI * 2);
      ctx.arc(306, 402, 16, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(206, 137, 38, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(194, 132, 5, 0, Math.PI * 2);
      ctx.arc(218, 132, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2937";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(196, 148);
      ctx.quadraticCurveTo(206, 156, 218, 148);
      ctx.stroke();
    },
  },
];

const CATEGORIES = ["Animals", "Princesses", "Dinos", "Trucks"];
const CANVAS_W = 430;
const CANVAS_H = 520;

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function getPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  const clientX = touch ? touch.clientX : event.clientX;
  const clientY = touch ? touch.clientY : event.clientY;
  return {
    x: ((clientX - rect.left) / rect.width) * canvas.width,
    y: ((clientY - rect.top) / rect.height) * canvas.height,
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function buttonStyle(active = false) {
  return {
    height: 52,
    borderRadius: 18,
    border: "1px solid " + (active ? "#111827" : "#d1d5db"),
    background: active ? "#111827" : "#ffffff",
    color: active ? "#ffffff" : "#111827",
    fontSize: 16,
    fontWeight: 700,
    padding: "0 18px",
    cursor: "pointer",
  };
}

export default function App() {
  const outlineCanvasRef = useRef(null);
  const paintCanvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const activeOscillatorsRef = useRef([]);
  const musicIntervalRef = useRef(null);
  const tapTimeoutRef = useRef(null);

  const [screen, setScreen] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("Animals");
  const [characterId, setCharacterId] = useState("happy-cat");
  const [selectedColor, setSelectedColor] = useState(PALETTE[0]);
  const [brushSize, setBrushSize] = useState(20);
  const [tool, setTool] = useState("fill");
  const [isDrawing, setIsDrawing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [savedPalettes, setSavedPalettes] = useState({});
  const [fills, setFills] = useState({});
  const [tapToFillEnabled, setTapToFillEnabled] = useState(true);
  const [showParentCorner, setShowParentCorner] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [masterSoundEnabled, setMasterSoundEnabled] = useState(true);
  const [masterMusicEnabled, setMasterMusicEnabled] = useState(true);

  const currentCharacter = useMemo(
    () => CHARACTERS.find((c) => c.id === characterId) || CHARACTERS[0],
    [characterId]
  );
  const categoryCharacters = useMemo(
    () => CHARACTERS.filter((c) => c.category === selectedCategory),
    [selectedCategory]
  );

  const currentFillKey = `${currentCharacter.id}-fills`;
  const currentSavedKey = `${currentCharacter.id}-saved`;

  const ensureAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      audioContextRef.current = new AudioContextClass();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  const playBeep = useCallback(
    (frequency = 660, duration = 0.08, type = "sine", volume = 0.03) => {
      if (!soundEnabled || !masterSoundEnabled) return;
      const ctx = ensureAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = frequency;
      gain.gain.value = volume;
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.onended = () => {
        gain.disconnect();
        osc.disconnect();
        activeOscillatorsRef.current = activeOscillatorsRef.current.filter(
          (o) => o !== osc
        );
      };

      activeOscillatorsRef.current.push(osc);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    },
    [soundEnabled, masterSoundEnabled, ensureAudioContext]
  );

  useEffect(() => {
    const saved = localStorage.getItem("kids-coloring-settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSavedPalettes(parsed.savedPalettes || {});
        setFills(parsed.fills || {});
        setTapToFillEnabled(parsed.tapToFillEnabled ?? true);
        setMasterSoundEnabled(parsed.masterSoundEnabled ?? true);
        setMasterMusicEnabled(parsed.masterMusicEnabled ?? true);
      } catch (e) {
        console.error("Failed to load settings:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "kids-coloring-settings",
      JSON.stringify({
        savedPalettes,
        fills,
        tapToFillEnabled,
        masterSoundEnabled,
        masterMusicEnabled,
      })
    );
  }, [savedPalettes, fills, tapToFillEnabled, masterSoundEnabled, masterMusicEnabled]);

  useEffect(() => {
    if (!musicEnabled || !masterMusicEnabled) {
      if (musicIntervalRef.current) {
        clearInterval(musicIntervalRef.current);
        musicIntervalRef.current = null;
      }
      return;
    }

    musicIntervalRef.current = setInterval(() => {
      playBeep(523.25, 0.08, "sine", 0.012);
      setTimeout(() => playBeep(659.25, 0.08, "triangle", 0.01), 140);
      setTimeout(() => playBeep(783.99, 0.1, "sine", 0.01), 280);
    }, 3200);

    return () => {
      if (musicIntervalRef.current) {
        clearInterval(musicIntervalRef.current);
        musicIntervalRef.current = null;
      }
    };
  }, [musicEnabled, masterMusicEnabled, playBeep]);

  useEffect(() => {
    const outlineCanvas = outlineCanvasRef.current;
    const paintCanvas = paintCanvasRef.current;
    if (!outlineCanvas || !paintCanvas) return;

    outlineCanvas.width = CANVAS_W;
    outlineCanvas.height = CANVAS_H;
    paintCanvas.width = CANVAS_W;
    paintCanvas.height = CANVAS_H;

    const octx = outlineCanvas.getContext("2d", { alpha: false });
    const pctx = paintCanvas.getContext("2d", { alpha: false });

    octx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    pctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    octx.fillStyle = "#ffffff";
    octx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    pctx.fillStyle = "#ffffff";
    pctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    const fillColors = fills[currentFillKey] || [];
    currentCharacter.bubbles.forEach((bubble, index) => {
      pctx.beginPath();
      pctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      pctx.fillStyle = fillColors[index] || bubble.color;
      pctx.fill();
    });

    currentCharacter.draw(octx);
  }, [currentCharacter, fills, currentFillKey]);

  const registerTapSequence = useCallback(() => {
    setTapCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= 5) {
        setShowParentCorner(true);
        playBeep(900, 0.08, "triangle", 0.03);
        return 0;
      }
      return nextCount;
    });

    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
    }
    tapTimeoutRef.current = setTimeout(() => {
      setTapCount(0);
    }, 2200);
  }, [playBeep]);

  const startDrawing = useCallback(
    (event) => {
      if (tool !== "draw") return;
      const canvas = paintCanvasRef.current;
      const ctx = canvas.getContext("2d");
      const point = getPoint(event, canvas);
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(point.x, point.y);
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = selectedColor;
      ctx.stroke();
      setIsDrawing(true);
    },
    [tool, brushSize, selectedColor]
  );

  const draw = useCallback(
    (event) => {
      if (!isDrawing || tool !== "draw") return;
      const canvas = paintCanvasRef.current;
      const ctx = canvas.getContext("2d");
      const point = getPoint(event, canvas);
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = selectedColor;
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    },
    [isDrawing, tool, brushSize, selectedColor]
  );

  const stopDrawing = useCallback(() => {
    if (!isDrawing) return;
    const canvas = paintCanvasRef.current;
    canvas.getContext("2d").closePath();
    setIsDrawing(false);
  }, [isDrawing]);

  const handleFillTap = useCallback(
    (event) => {
      if (tool !== "fill" || !tapToFillEnabled) return;
      const canvas = paintCanvasRef.current;
      const point = getPoint(event, canvas);

      if (
        point.x < 0 ||
        point.x > CANVAS_W ||
        point.y < 0 ||
        point.y > CANVAS_H
      ) {
        return;
      }

      const index = currentCharacter.bubbles.findIndex(
        (bubble) => distance(point, bubble) <= bubble.r
      );
      if (index === -1) return;

      setFills((prev) => {
        const next = [...(prev[currentFillKey] || [])];
        next[index] = selectedColor;
        return { ...prev, [currentFillKey]: next };
      });
      playBeep(620, 0.07, "triangle", 0.022);
    },
    [tool, tapToFillEnabled, currentCharacter.bubbles, currentFillKey, selectedColor, playBeep]
  );

  const resetPage = useCallback(() => {
    setFills((prev) => ({ ...prev, [currentFillKey]: [] }));
    const canvas = paintCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
  }, [currentFillKey]);

  const saveCurrentPalette = useCallback(() => {
    const record = { fills: fills[currentFillKey] || [], id: Date.now() };
    setSavedPalettes((prev) => ({
      ...prev,
      [currentSavedKey]: [record, ...(prev[currentSavedKey] || [])].slice(0, 6),
    }));
    playBeep(880, 0.12, "triangle", 0.035);
  }, [fills, currentFillKey, currentSavedKey, playBeep]);

  const loadSavedPalette = useCallback(
    (record) => {
      setFills((prev) => ({ ...prev, [currentFillKey]: record.fills || [] }));
      playBeep(740, 0.09, "sine", 0.03);
    },
    [currentFillKey, playBeep]
  );

  const downloadImage = useCallback(() => {
    const outlineCanvas = outlineCanvasRef.current;
    const paintCanvas = paintCanvasRef.current;
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = CANVAS_W;
    exportCanvas.height = CANVAS_H;
    const ctx = exportCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.drawImage(paintCanvas, 0, 0);
    ctx.drawImage(outlineCanvas, 0, 0);
    const link = document.createElement("a");
    link.download = `${currentCharacter.name.toLowerCase().replace(/\s+/g, "-")}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  }, [currentCharacter.name]);

  const openCharacter = useCallback((character) => {
    setCharacterId(character.id);
    setScreen("studio");
  }, []);

  useEffect(() => {
    return () => {
      if (musicIntervalRef.current) {
        clearInterval(musicIntervalRef.current);
      }
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
      activeOscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
    };
  }, []);

  return (
    <div
      onClick={registerTapSequence}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(#ffe4ef, #e0f2fe, #fff7cc)",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {screen === "home" ? (
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: 30,
                padding: 24,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#ffd1e8",
                  color: "#be185d",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Color & Tap Fun
              </div>
              <h1 style={{ fontSize: 42, margin: "16px 0 8px", color: "#1f2937" }}>
                Pick a picture and start coloring
              </h1>
              <p style={{ fontSize: 18, color: "#4b5563", maxWidth: 700 }}>
                Big buttons, happy pictures, finger painting, and simple tap-to-fill zones made for ages 3 to 6.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 18 }}>
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={buttonStyle(selectedCategory === category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {categoryCharacters.map((character) => (
                <button
                  key={character.id}
                  onClick={() => openCharacter(character)}
                  style={{
                    background: "white",
                    border: 0,
                    borderRadius: 28,
                    padding: 16,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(#fff, #f8fafc)",
                      borderRadius: 22,
                      padding: 12,
                    }}
                  >
                    <svg
                      viewBox="0 0 430 520"
                      style={{
                        width: "100%",
                        height: 240,
                        background: "white",
                        borderRadius: 20,
                      }}
                    >
                      {character.bubbles.map((bubble, index) => (
                        <circle
                          key={index}
                          cx={bubble.x}
                          cy={bubble.y}
                          r={bubble.r}
                          fill={bubble.color}
                        />
                      ))}
                    </svg>
                    <div
                      style={{
                        marginTop: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 28, fontWeight: 800, color: "#1f2937" }}>
                          {character.name}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#6b7280" }}>
                          {character.category}
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#fef3c7",
                          color: "#a16207",
                          padding: "10px 14px",
                          borderRadius: 999,
                          fontWeight: 700,
                        }}
                      >
                        Play
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: 30,
                padding: 20,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                marginBottom: 24,
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => setScreen("home")} style={buttonStyle(false)}>
                  Home
                </button>
                <div
                  style={{
                    background: "#dbeafe",
                    color: "#1e3a8a",
                    padding: "14px 18px",
                    borderRadius: 20,
                    fontWeight: 800,
                  }}
                >
                  {currentCharacter.name}
                </div>
                <div
                  style={{
                    background: "#ede9fe",
                    color: "#5b21b6",
                    padding: "14px 18px",
                    borderRadius: 20,
                    fontWeight: 800,
                  }}
                >
                  {currentCharacter.category}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                gap: 24,
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: 30,
                  padding: 24,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <h2 style={{ fontSize: 28, marginTop: 0 }}>Color Tools</h2>

                <div style={{ marginBottom: 22 }}>
                  <button
                    onClick={() => setTapToFillEnabled((v) => !v)}
                    style={{ ...buttonStyle(tapToFillEnabled), width: "100%" }}
                  >
                    Tap-to-fill {tapToFillEnabled ? "On" : "Off"}
                  </button>
                </div>

                {showParentCorner && (
                  <div
                    style={{
                      border: "2px solid #c4b5fd",
                      borderRadius: 24,
                      padding: 16,
                      marginBottom: 22,
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 12 }}>
                      Parent Corner
                    </div>
                    <div style={{ display: "grid", gap: 10 }}>
                      <button
                        onClick={() => setMasterSoundEnabled((v) => !v)}
                        style={{ ...buttonStyle(masterSoundEnabled), width: "100%" }}
                      >
                        Allow sounds {masterSoundEnabled ? "On" : "Off"}
                      </button>
                      <button
                        onClick={() => setMasterMusicEnabled((v) => !v)}
                        style={{ ...buttonStyle(masterMusicEnabled), width: "100%" }}
                      >
                        Allow music {masterMusicEnabled ? "On" : "Off"}
                      </button>
                      <button
                        onClick={() => setShowParentCorner(false)}
                        style={{ ...buttonStyle(false), width: "100%" }}
                      >
                        Close Parent Corner
                      </button>
                    </div>
                  </div>
                )}

                <div style={{ marginBottom: 22 }}>
                  <div style={{ marginBottom: 10, fontWeight: 800 }}>Choose a color</div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: 10,
                    }}
                  >
                    {PALETTE.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          height: 52,
                          borderRadius: 18,
                          border: selectedColor === color ? "4px solid #111827" : "4px solid white",
                          background: color,
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 22 }}>
                  <div style={{ marginBottom: 10, fontWeight: 800 }}>Choose a tool</div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                    }}
                  >
                    <button
                      onClick={() => setTool("fill")}
                      disabled={!tapToFillEnabled}
                      style={buttonStyle(tool === "fill")}
                    >
                      Fill
                    </button>
                    <button
                      onClick={() => setTool("draw")}
                      style={buttonStyle(tool === "draw")}
                    >
                      Draw
                    </button>
                  </div>
                </div>

                {tool === "draw" && (
                  <div style={{ marginBottom: 22 }}>
                    <div style={{ marginBottom: 10, fontWeight: 800 }}>
                      Brush size: {brushSize}
                    </div>
                    <input
                      type="range"
                      min="8"
                      max="40"
                      step="1"
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      style={{ width: "100%" }}
                    />
                  </div>
                )}

                <div style={{ display: "grid", gap: 10 }}>
                  <button onClick={saveCurrentPalette} style={buttonStyle(false)}>
                    Save Palette
                  </button>
                  <button onClick={() => setSoundEnabled((v) => !v)} style={buttonStyle(soundEnabled)}>
                    Button Sounds {soundEnabled ? "On" : "Off"}
                  </button>
                  <button onClick={() => setMusicEnabled((v) => !v)} style={buttonStyle(musicEnabled)}>
                    Music {musicEnabled ? "On" : "Off"}
                  </button>
                  <button onClick={resetPage} style={buttonStyle(false)}>
                    Clear Page
                  </button>
                  <button onClick={downloadImage} style={buttonStyle(false)}>
                    Save Picture
                  </button>
                </div>
              </div>

              <div>
                <div
                  style={{
                    background: "white",
                    borderRadius: 30,
                    padding: 24,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      maxWidth: 430,
                      margin: "0 auto",
                      background: "white",
                      borderRadius: 24,
                      padding: 12,
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 20,
                        background: "white",
                        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
                        touchAction: "none",
                      }}
                      onClick={handleFillTap}
                    >
                      <canvas
                        ref={paintCanvasRef}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          touchAction: "none",
                        }}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                      />
                      <canvas
                        ref={outlineCanvasRef}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 16,
                      background: "#fef3c7",
                      color: "#92400e",
                      borderRadius: 20,
                      padding: 16,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {tool === "fill"
                      ? tapToFillEnabled
                        ? "Tap a shape to fill it with color."
                        : "Tap-to-fill is off. Use Draw mode."
                      : "Drag your finger to draw."}
                  </div>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: 30,
                    padding: 24,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <h2 style={{ fontSize: 28, marginTop: 0 }}>Saved Palettes</h2>
                  {(savedPalettes[currentSavedKey] || []).length === 0 ? (
                    <div
                      style={{
                        background: "#f8fafc",
                        color: "#4b5563",
                        borderRadius: 20,
                        padding: 18,
                        fontWeight: 600,
                      }}
                    >
                      No saved palettes yet.
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 14,
                      }}
                    >
                      {(savedPalettes[currentSavedKey] || []).map((record, index) => (
                        <button
                          key={record.id || index}
                          onClick={() => loadSavedPalette(record)}
                          style={{
                            border: "1px solid #e5e7eb",
                            background: "white",
                            borderRadius: 20,
                            padding: 12,
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{
                              height: 90,
                              borderRadius: 14,
                              background: "#f8fafc",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 800,
                              color: "#6b7280",
                            }}
                          >
                            Palette {index + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
