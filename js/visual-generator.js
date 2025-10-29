// Visual Generation Engine for AI Prompt-to-MIDI Device
// Analyzes musical parameters and generates corresponding visuals
// Supports real-time visualization and export capabilities

class MusicVisualGenerator {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.animationId = null;
    this.isPlaying = false;

    // Visual parameters
    this.visualParams = {
      colorPalette: "spectrum",
      visualStyle: "particles",
      intensity: 0.7,
      speed: 1.0,
      complexity: 0.5,
      reactivity: 0.8,
    };

    // Music analysis data
    this.musicData = {
      tempo: 120,
      key: "C",
      scale: "major",
      mood: "neutral",
      genre: "general",
      energy: 0.5,
      currentNotes: [],
      chordProgression: [],
    };

    // Visual elements
    this.particles = [];
    this.waves = [];
    this.shapes = [];

    this.initializeCanvas();
  }

  // Initialize HTML5 Canvas for visuals
  initializeCanvas() {
    if (typeof document !== "undefined") {
      this.canvas = document.createElement("canvas");
      this.canvas.width = 800;
      this.canvas.height = 600;
      this.ctx = this.canvas.getContext("2d");

      // Set up canvas styling
      this.canvas.style.background = "#000";
      this.canvas.style.border = "1px solid #333";
    }
  }

  // Update music parameters from the MIDI device
  updateMusicData(musicAnalysis) {
    this.musicData = {
      ...this.musicData,
      ...musicAnalysis,
    };

    // Adjust visual parameters based on music
    this.adaptVisualsToMusic();
  }

  // Adapt visual parameters based on musical characteristics
  adaptVisualsToMusic() {
    const { mood, genre, energy, tempo, scale } = this.musicData;

    // Color palette based on mood and key
    this.visualParams.colorPalette = this.getColorPaletteForMood(mood, scale);

    // Visual style based on genre
    this.visualParams.visualStyle = this.getVisualStyleForGenre(genre);

    // Intensity based on energy
    this.visualParams.intensity = energy;

    // Speed based on tempo
    this.visualParams.speed = Math.max(0.5, Math.min(2.0, tempo / 120));

    // Complexity based on musical complexity
    this.visualParams.complexity = this.musicData.complexity || 0.5;

    post("Visual parameters updated for " + mood + " " + genre + " music\\n");
  }

  // Get color palette based on mood and scale
  getColorPaletteForMood(mood, scale) {
    const palettes = {
      happy: {
        major: ["#FFD700", "#FF6B35", "#F7931E", "#FFE135"],
        minor: ["#FF8C42", "#FF6B6B", "#C44569", "#F8B500"],
      },
      sad: {
        major: ["#6C5CE7", "#A29BFE", "#74B9FF", "#00B894"],
        minor: ["#2D3436", "#636E72", "#B2BEC3", "#74B9FF"],
      },
      energetic: {
        major: ["#E17055", "#E84393", "#FD79A8", "#FDCB6E"],
        minor: ["#D63031", "#E84393", "#A29BFE", "#00B894"],
      },
      calm: {
        major: ["#00B894", "#55A3FF", "#74B9FF", "#81ECEC"],
        minor: ["#6C5CE7", "#A29BFE", "#DDA0DD", "#98D8C8"],
      },
      mysterious: {
        major: ["#2D3436", "#636E72", "#6C5CE7", "#A29BFE"],
        minor: ["#000000", "#2D3436", "#6C5CE7", "#E84393"],
      },
      romantic: {
        major: ["#FD79A8", "#E84393", "#FF7675", "#FDCB6E"],
        minor: ["#E84393", "#A29BFE", "#6C5CE7", "#FD79A8"],
      },
    };

    return palettes[mood]
      ? palettes[mood][scale] || palettes[mood].major
      : palettes.happy.major;
  }

  // Get visual style based on genre
  getVisualStyleForGenre(genre) {
    const styles = {
      jazz: "smokyParticles",
      classical: "flowingWaves",
      electronic: "geometricShapes",
      rock: "energyBursts",
      pop: "colorfulParticles",
      blues: "liquidWaves",
      ambient: "floatingOrbs",
      general: "adaptiveParticles",
    };

    return styles[genre] || styles.general;
  }

  // Start visual generation
  startVisuals() {
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.initializeVisualElements();
    this.animate();

    post("Visual generation started\\n");
  }

  // Stop visual generation
  stopVisuals() {
    this.isPlaying = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    this.clearCanvas();
    post("Visual generation stopped\\n");
  }

  // Initialize visual elements based on current style
  initializeVisualElements() {
    this.particles = [];
    this.waves = [];
    this.shapes = [];

    const style = this.visualParams.visualStyle;

    switch (style) {
      case "particles":
      case "colorfulParticles":
      case "smokyParticles":
        this.initializeParticles();
        break;
      case "flowingWaves":
      case "liquidWaves":
        this.initializeWaves();
        break;
      case "geometricShapes":
        this.initializeShapes();
        break;
      case "floatingOrbs":
        this.initializeOrbs();
        break;
      default:
        this.initializeParticles();
    }
  }

  // Initialize particle system
  initializeParticles() {
    const count = Math.floor(50 + this.visualParams.complexity * 100);

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.visualParams.speed,
        vy: (Math.random() - 0.5) * this.visualParams.speed,
        size: Math.random() * 5 + 2,
        color: this.getRandomColor(),
        life: 1.0,
        decay: 0.01 + Math.random() * 0.02,
      });
    }
  }

  // Initialize wave system
  initializeWaves() {
    const count = Math.floor(5 + this.visualParams.complexity * 10);

    for (let i = 0; i < count; i++) {
      this.waves.push({
        amplitude: 50 + Math.random() * 100,
        frequency: 0.01 + Math.random() * 0.05,
        phase: Math.random() * Math.PI * 2,
        speed: this.visualParams.speed * (0.5 + Math.random()),
        color: this.getRandomColor(),
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
  }

  // Initialize geometric shapes
  initializeShapes() {
    const count = Math.floor(10 + this.visualParams.complexity * 20);

    for (let i = 0; i < count; i++) {
      this.shapes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 50 + 10,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1 * this.visualParams.speed,
        color: this.getRandomColor(),
        type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
      });
    }
  }

  // Initialize floating orbs
  initializeOrbs() {
    const count = Math.floor(15 + this.visualParams.complexity * 25);

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.visualParams.speed * 0.5,
        vy: (Math.random() - 0.5) * this.visualParams.speed * 0.5,
        size: Math.random() * 30 + 10,
        color: this.getRandomColor(),
        glow: Math.random() * 20 + 10,
        pulse: Math.random() * 0.1 + 0.05,
      });
    }
  }

  // Get random color from current palette
  getRandomColor() {
    const palette = this.visualParams.colorPalette;
    return palette[Math.floor(Math.random() * palette.length)];
  }

  // Main animation loop
  animate() {
    if (!this.isPlaying) return;

    this.clearCanvas();
    this.updateVisualElements();
    this.renderVisualElements();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  // Update visual elements
  updateVisualElements() {
    const style = this.visualParams.visualStyle;

    switch (style) {
      case "particles":
      case "colorfulParticles":
      case "smokyParticles":
      case "floatingOrbs":
        this.updateParticles();
        break;
      case "flowingWaves":
      case "liquidWaves":
        this.updateWaves();
        break;
      case "geometricShapes":
        this.updateShapes();
        break;
    }
  }

  // Update particle positions and properties
  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply music reactivity
      if (this.musicData.currentNotes.length > 0) {
        const noteInfluence =
          this.musicData.currentNotes.length * this.visualParams.reactivity;
        particle.vx += (Math.random() - 0.5) * noteInfluence * 0.1;
        particle.vy += (Math.random() - 0.5) * noteInfluence * 0.1;
      }

      // Boundary wrapping
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      // Update life for particles with decay
      if (particle.life !== undefined) {
        particle.life -= particle.decay;
        if (particle.life <= 0) {
          this.particles.splice(i, 1);
          // Add new particle to maintain count
          this.particles.push(this.createNewParticle());
        }
      }
    }
  }

  // Update wave animations
  updateWaves() {
    this.waves.forEach((wave) => {
      wave.phase += wave.speed * 0.1;
    });
  }

  // Update shape rotations and positions
  updateShapes() {
    this.shapes.forEach((shape) => {
      shape.rotation += shape.rotationSpeed;

      // React to music
      if (this.musicData.currentNotes.length > 0) {
        const noteInfluence =
          this.musicData.currentNotes.length * this.visualParams.reactivity;
        shape.size += Math.sin(Date.now() * 0.01) * noteInfluence;
      }
    });
  }

  // Render all visual elements
  renderVisualElements() {
    const style = this.visualParams.visualStyle;

    switch (style) {
      case "particles":
      case "colorfulParticles":
        this.renderParticles();
        break;
      case "smokyParticles":
        this.renderSmokyParticles();
        break;
      case "floatingOrbs":
        this.renderFloatingOrbs();
        break;
      case "flowingWaves":
      case "liquidWaves":
        this.renderWaves();
        break;
      case "geometricShapes":
        this.renderShapes();
        break;
    }
  }

  // Render basic particles
  renderParticles() {
    this.particles.forEach((particle) => {
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = particle.life || 1.0;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0;
  }

  // Render smoky particles with trails
  renderSmokyParticles() {
    this.ctx.globalCompositeOperation = "screen";
    this.particles.forEach((particle) => {
      const gradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, "transparent");

      this.ctx.fillStyle = gradient;
      this.ctx.globalAlpha = (particle.life || 1.0) * 0.6;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.globalAlpha = 1.0;
  }

  // Render floating orbs with glow
  renderFloatingOrbs() {
    this.particles.forEach((particle) => {
      // Glow effect
      const glowGradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size + particle.glow
      );
      glowGradient.addColorStop(0, particle.color);
      glowGradient.addColorStop(1, "transparent");

      this.ctx.fillStyle = glowGradient;
      this.ctx.globalAlpha = 0.3;
      this.ctx.beginPath();
      this.ctx.arc(
        particle.x,
        particle.y,
        particle.size + particle.glow,
        0,
        Math.PI * 2
      );
      this.ctx.fill();

      // Core orb
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = 0.8;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0;
  }

  // Render flowing waves
  renderWaves() {
    this.waves.forEach((wave) => {
      this.ctx.strokeStyle = wave.color;
      this.ctx.lineWidth = 2;
      this.ctx.globalAlpha = wave.opacity;
      this.ctx.beginPath();

      for (let x = 0; x <= this.canvas.width; x += 5) {
        const y =
          this.canvas.height / 2 +
          Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;

        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }

      this.ctx.stroke();
    });
    this.ctx.globalAlpha = 1.0;
  }

  // Render geometric shapes
  renderShapes() {
    this.shapes.forEach((shape) => {
      this.ctx.save();
      this.ctx.translate(shape.x, shape.y);
      this.ctx.rotate(shape.rotation);
      this.ctx.fillStyle = shape.color;
      this.ctx.globalAlpha = 0.7;

      switch (shape.type) {
        case 0: // Circle
          this.ctx.beginPath();
          this.ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          this.ctx.fill();
          break;
        case 1: // Square
          this.ctx.fillRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size
          );
          break;
        case 2: // Triangle
          this.ctx.beginPath();
          this.ctx.moveTo(0, -shape.size / 2);
          this.ctx.lineTo(-shape.size / 2, shape.size / 2);
          this.ctx.lineTo(shape.size / 2, shape.size / 2);
          this.ctx.closePath();
          this.ctx.fill();
          break;
      }

      this.ctx.restore();
    });
    this.ctx.globalAlpha = 1.0;
  }

  // Create a new particle
  createNewParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * this.visualParams.speed,
      vy: (Math.random() - 0.5) * this.visualParams.speed,
      size: Math.random() * 5 + 2,
      color: this.getRandomColor(),
      life: 1.0,
      decay: 0.01 + Math.random() * 0.02,
    };
  }

  // Clear canvas
  clearCanvas() {
    if (this.ctx) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // React to MIDI note events
  onNoteOn(note, velocity) {
    this.musicData.currentNotes.push({ note, velocity, time: Date.now() });

    // Create visual burst for note events
    if (this.visualParams.reactivity > 0.5) {
      this.createNoteBurst(note, velocity);
    }

    // Clean up old notes
    const now = Date.now();
    this.musicData.currentNotes = this.musicData.currentNotes.filter(
      (n) => now - n.time < 1000
    );
  }

  // Create visual burst for note events
  createNoteBurst(note, velocity) {
    const x = (note / 127) * this.canvas.width;
    const y = this.canvas.height - (velocity / 127) * this.canvas.height;

    // Add burst particles
    for (let i = 0; i < 10; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        size: Math.random() * 8 + 3,
        color: this.getRandomColor(),
        life: 1.0,
        decay: 0.02,
      });
    }
  }

  // Export current frame as image
  exportFrame() {
    if (this.canvas) {
      return this.canvas.toDataURL("image/png");
    }
    return null;
  }

  // Set visual parameters
  setVisualParams(params) {
    this.visualParams = { ...this.visualParams, ...params };
    this.adaptVisualsToMusic();
  }
}

// Export for Max/MSP integration
if (typeof module !== "undefined" && module.exports) {
  module.exports = MusicVisualGenerator;
} else {
  this.MusicVisualGenerator = MusicVisualGenerator;
}

// Global instance for Max integration
var visualGenerator = null;

// Max/MSP interface functions
function initVisuals() {
  visualGenerator = new MusicVisualGenerator();
  post("Visual generator initialized\\n");
}

function startVisuals() {
  if (visualGenerator) {
    visualGenerator.startVisuals();
  }
}

function stopVisuals() {
  if (visualGenerator) {
    visualGenerator.stopVisuals();
  }
}

function updateVisuals(musicData) {
  if (visualGenerator && typeof musicData === "object") {
    visualGenerator.updateMusicData(musicData);
  }
}

function setVisualStyle(style) {
  if (visualGenerator) {
    visualGenerator.setVisualParams({ visualStyle: style });
  }
}

function noteOn(note, velocity) {
  if (visualGenerator) {
    visualGenerator.onNoteOn(note, velocity);
  }
}

// Utility function for Max logging
function post(message) {
  if (typeof console !== "undefined") {
    console.log(message);
  }
}
