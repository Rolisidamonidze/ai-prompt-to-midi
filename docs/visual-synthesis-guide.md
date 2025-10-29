# AI Prompt-to-MIDI Visual Synthesis Guide

## Overview

The enhanced AI Prompt-to-MIDI device now includes real-time visual generation that responds to your music! The visuals are automatically synchronized with the generated MIDI sequences, creating an immersive audiovisual experience.

## Visual Features

### 🎨 Automatic Visual Mapping

- **Mood-based Colors**: Happy music gets bright yellows and oranges, sad music gets blues and purples
- **Genre-specific Styles**: Jazz gets smoky particles, electronic gets geometric shapes, classical gets flowing waves
- **Key-sensitive Palettes**: Different musical keys trigger different color schemes
- **Energy-reactive Intensity**: High-energy music creates more intense, faster-moving visuals

### 🎛️ Visual Controls

#### Core Visual Parameters

- **Start/Stop Visuals**: Control visual generation independently from MIDI
- **Visual Style**: Choose from 7 different visual styles
- **Visual Intensity**: Control the brightness and activity level (0.0-1.0)
- **Music Reactivity**: How much the visuals respond to MIDI notes (0.0-1.0)

#### Advanced Features

- **Export Frame**: Save the current visual frame as an image
- **Fullscreen Mode**: Expand visuals to full screen for performances
- **Real-time Sync**: Visuals automatically sync with MIDI timing

## Visual Styles

### 1. **Particles** (Default)

- Classic particle system with colorful dots
- Particles move based on tempo and react to notes
- Best for: General use, melodic content

### 2. **Smoky Particles**

- Soft, blurred particles with trail effects
- Creates atmospheric, ethereal visuals
- Best for: Jazz, blues, ambient music

### 3. **Flowing Waves**

- Sine wave patterns that undulate across the screen
- Wave frequency matches musical harmony
- Best for: Classical, orchestral, smooth music

### 4. **Liquid Waves**

- More organic, fluid wave movements
- Multiple wave layers create depth
- Best for: Electronic, trance, flowing melodies

### 5. **Geometric Shapes**

- Rotating circles, squares, and triangles
- Sharp, precise movements
- Best for: Electronic, techno, structured music

### 6. **Floating Orbs**

- Large, glowing spheres that pulse and drift
- Soft glow effects create dreamy atmosphere
- Best for: Ambient, new age, meditative music

### 7. **Energy Bursts**

- Explosive particle effects triggered by notes
- High-energy, reactive visual style
- Best for: Rock, metal, high-energy music

## Color Palettes by Mood

### Happy Music

- **Major Key**: Gold, orange, bright yellow, sunny colors
- **Minor Key**: Warm oranges, coral, amber tones

### Sad Music

- **Major Key**: Cool blues, soft purples, gentle grays
- **Minor Key**: Deep blues, dark grays, muted purples

### Energetic Music

- **Major Key**: Bright reds, hot pink, vibrant oranges
- **Minor Key**: Electric reds, magenta, neon blues

### Calm Music

- **Major Key**: Soft greens, light blues, peaceful teal
- **Minor Key**: Lavender, soft purple, gentle blue-green

### Mysterious Music

- **Major Key**: Dark grays, deep purple, subtle blues
- **Minor Key**: Black, dark purple, electric blue accents

### Romantic Music

- **Major Key**: Soft pink, warm coral, golden yellow
- **Minor Key**: Rose, deep pink, purple highlights

## Prompt Examples for Visual Generation

### Color-Specific Prompts

```
"energetic jazz with blue visuals"
"romantic ballad with pink and gold colors"
"dark ambient music with purple atmosphere"
"bright techno with rainbow particles"
"ocean-themed melody with teal and blue waves"
```

### Style-Specific Prompts

```
"classical symphony with flowing wave visuals"
"electronic dance music with geometric shapes"
"ambient soundscape with floating orbs"
"rock anthem with energy burst effects"
"jazz club atmosphere with smoky particles"
```

### Combined Prompts

```
"mysterious film score with dark purple geometric shapes"
"uplifting house music with bright orange flowing waves"
"melancholic piano with soft blue floating orbs"
"driving techno with neon green energy bursts"
"peaceful meditation music with gentle teal particles"
```

## Technical Details

### Visual Engine Specifications

- **Resolution**: 800x600 pixels (scalable)
- **Frame Rate**: 60 FPS target
- **Color Depth**: 32-bit RGBA
- **Particle Count**: 50-150 (adjustable by complexity)
- **Real-time Processing**: < 16ms per frame

### Performance Optimization

- **GPU Acceleration**: Uses HTML5 Canvas with hardware acceleration
- **Adaptive Quality**: Automatically adjusts particle count for performance
- **Memory Management**: Efficient particle recycling system
- **CPU Usage**: Typically 5-15% on modern systems

### Export Capabilities

- **Image Export**: PNG format with transparency
- **Resolution Options**: Up to 1920x1080
- **Batch Export**: Frame sequences for video creation
- **Real-time Capture**: Live recording during performance

## Setup and Installation

### Requirements

- **Max/MSP 8.0+** with JavaScript support
- **Modern Web Browser** (for visual rendering)
- **Graphics Card** with OpenGL 2.0+ support
- **4GB RAM** minimum (8GB recommended)

### Installation Steps

1. Copy `AI-Prompt-MIDI-Visual.amxd` to your Live User Library
2. Ensure `visual-generator.js` is in the Max patch search path
3. Load the device on a MIDI track in Ableton Live
4. Click "Start Visuals" to initialize the visual engine

### Troubleshooting

#### Visuals Not Appearing

- Check Max/MSP console for JavaScript errors
- Verify browser security settings allow local canvas access
- Ensure graphics drivers are up to date

#### Poor Performance

- Reduce Visual Intensity setting
- Lower Music Reactivity to reduce processing load
- Close unnecessary applications
- Check CPU usage in system monitor

#### Color Issues

- Verify prompt contains mood/color keywords
- Try different visual styles
- Check if custom color palettes are loaded correctly

## Advanced Usage

### Custom Color Palettes

You can extend the device with custom color schemes by modifying the `visual-generator.js` file:

```javascript
const customPalettes = {
  sunset: ["#FF6B35", "#F7931E", "#FFD23F", "#FF8C42"],
  ocean: ["#006994", "#13A3D6", "#87CEEB", "#40E0D0"],
  forest: ["#228B22", "#32CD32", "#98FB98", "#00FF7F"],
};
```

### MIDI Integration

The visual system responds to:

- **Note On/Off**: Triggers particle bursts and color changes
- **Velocity**: Controls visual intensity and brightness
- **Pitch**: Influences particle position and movement
- **Timing**: Synchronizes animations with musical rhythm

### Performance Features

- **Live Mode**: Optimized for real-time performance
- **Recording Mode**: Higher quality for video capture
- **Fullscreen Projection**: For live concerts and installations
- **Multi-Monitor Support**: Span visuals across multiple displays

## Creative Tips

### 1. **Layering Styles**

Combine different visual styles by using multiple instances of the device with different settings.

### 2. **Color Coordination**

Match visual colors to your track's album artwork or branding by including color keywords in prompts.

### 3. **Performance Integration**

Use the visual intensity and reactivity controls as performance tools, adjusting them live during sets.

### 4. **Video Creation**

Export frames at key moments to create music video content or promotional materials.

### 5. **Installation Art**

Use fullscreen mode with ambient music for interactive art installations.

## Future Enhancements

### Planned Features

- **3D Visualization**: Depth and perspective effects
- **Custom Shaders**: User-programmable visual effects
- **Audio Analysis**: FFT-based frequency visualization
- **OSC Integration**: Control visuals from external software
- **VR/AR Support**: Immersive visual experiences

### Community Extensions

- **Preset Sharing**: Community-created visual presets
- **Plugin Architecture**: Third-party visual effect plugins
- **Template System**: Pre-configured visual setups for different genres
- **Collaboration Tools**: Multi-user visual sessions

The visual synthesis system transforms your AI-generated music into a complete audiovisual experience, perfect for performances, installations, and creative exploration!
