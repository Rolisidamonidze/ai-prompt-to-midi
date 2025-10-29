# AI Prompt-to-MIDI Max for Live Device

An intelligent Max for Live device that transforms text prompts and creative ideas into MIDI sequences using AI/ML techniques.

## Features

- **Text-to-MIDI Generation**: Enter creative prompts like "energetic jazz chord progression" or "melancholic ambient melody"
- **Style Control**: Parameters for musical style, tempo, key, and complexity
- **Real-time Generation**: Live MIDI output that can be recorded or played into other devices
- **Preset System**: Save and recall your favorite prompt-to-MIDI configurations
- **AI Integration**: Uses machine learning models to interpret musical concepts from natural language

## Project Structure

```
ideator/
├── devices/           # Max for Live .amxd device files
├── max-patches/       # Max/MSP .maxpat patch files
├── js/               # JavaScript for AI integration and MIDI processing
├── presets/          # Device presets and saved configurations
├── docs/             # Documentation and usage examples
└── README.md         # This file
```

## Installation

1. Copy the `.amxd` device file from the `devices/` folder to your Ableton Live User Library
2. The device will appear in Live's browser under Max for Live > Max MIDI Effect
3. Drag the device onto a MIDI track

## Usage

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