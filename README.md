# AI Prompt-to-MIDI Max for Live Device with Visual Synthesis

An intelligent Max for Live device that transforms text prompts and creative ideas into MIDI sequences and reactive visuals using AI/ML techniques.

## Features

### 🎵 MIDI Generation

- **Text-to-MIDI Generation**: Enter creative prompts like "energetic jazz chord progression" or "melancholic ambient melody"
- **Style Control**: Parameters for musical style, tempo, key, and complexity
- **Real-time Generation**: Live MIDI output that can be recorded or played into other devices
- **Preset System**: Save and recall your favorite prompt-to-MIDI configurations
- **AI Integration**: Uses machine learning models to interpret musical concepts from natural language

### 🎨 Visual Synthesis (NEW!)

- **Reactive Visuals**: Automatically generated visuals that respond to your music
- **7 Visual Styles**: Particles, waves, geometric shapes, orbs, and more
- **Mood-based Colors**: Colors automatically match the emotional content of your music
- **Real-time Sync**: Visuals perfectly synchronized with MIDI timing
- **Export Capabilities**: Save visual frames as images or create video content

## Project Structure

```
ideator/
├── devices/                    # Max for Live .amxd device files
│   ├── AI-Prompt-MIDI.amxd           # Basic MIDI-only device
│   └── AI-Prompt-MIDI-Visual.amxd    # Enhanced device with visuals
├── max-patches/               # Max/MSP .maxpat patch files
│   ├── ai-prompt-midi.maxpat         # Basic MIDI generation patch
│   └── ai-prompt-midi-visual.maxpat  # Enhanced patch with visual synthesis
├── js/                        # JavaScript modules
│   ├── prompt-to-midi.js             # Core MIDI generation engine
│   ├── ai-prompt-processor.js        # Advanced AI analysis
│   └── visual-generator.js           # Visual synthesis engine
├── presets/                   # Device presets and configurations
├── docs/                      # Documentation and usage examples
│   ├── user-guide.md                 # Complete user documentation
│   ├── developer-guide.md            # Technical development guide
│   ├── installation-guide.md         # Step-by-step installation
│   └── visual-synthesis-guide.md     # Visual features documentation
└── README.md                  # This file
```

## Installation

### Basic Device (MIDI Only)

1. Copy `AI-Prompt-MIDI.amxd` from the `devices/` folder to your Ableton Live User Library
2. The device will appear in Live's browser under Max for Live > Max MIDI Effect

### Enhanced Device (MIDI + Visuals)

1. Copy `AI-Prompt-MIDI-Visual.amxd` from the `devices/` folder to your Ableton Live User Library
2. Ensure JavaScript files in `/js/` are accessible to Max/MSP
3. The enhanced device includes all MIDI features plus real-time visual generation

## Quick Start

1. **Enter Prompt**: Type your musical idea into the text input (e.g., "mysterious film score melody")
2. **Set Parameters**: Adjust style, tempo, key, and other musical parameters
3. **Generate**: Click the generate button to create MIDI sequences
4. **Play & Record**: The device outputs MIDI that can be recorded or sent to instruments

## Development

This project requires:

- Max/MSP 8.0 or higher
- Ableton Live 11+ with Max for Live
- Node.js (for AI processing backend)

## Technical Details

The device consists of:

- **Main Max patch**: User interface and MIDI generation logic
- **AI Backend**: JavaScript/Node.js service for text processing and pattern generation
- **MIDI Engine**: Real-time MIDI sequence generation and output

## Examples

Try these prompts:

- "Happy birthday song in minor key"
- "Driving techno bassline"
- "Contemplative piano chords"
- "Uplifting house music progression"
- "Dark atmospheric pad sounds"

## License

This project is open source. See LICENSE file for details.
