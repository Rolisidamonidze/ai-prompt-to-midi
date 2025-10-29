# AI Prompt-to-MIDI Device - User Guide

## Overview

The AI Prompt-to-MIDI device transforms natural language descriptions into musical MIDI sequences. Simply type what kind of music you want to create, and the device will generate appropriate MIDI patterns in real-time.

## Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Install in Ableton Live**

   - Copy the `.amxd` file from `/devices/` to your Ableton Live User Library
   - The device will appear under Max for Live > Max MIDI Effect

3. **Max/MSP Setup**
   - Ensure Max/MSP 8.0+ is installed
   - The JavaScript files in `/js/` need to be accessible to Max

## Quick Start

1. **Load the Device**: Drag the AI Prompt MIDI device onto a MIDI track
2. **Enter a Prompt**: Type your musical idea (e.g., "happy jazz chord progression")
3. **Adjust Parameters**: Set tempo, complexity, and other controls
4. **Generate**: Click the Generate button to create MIDI
5. **Record**: Enable recording on your track to capture the generated MIDI

## Writing Effective Prompts

### Mood Keywords

- **Happy**: joyful, uplifting, cheerful, bright
- **Sad**: melancholic, dark, gloomy, mournful
- **Energetic**: driving, powerful, intense, aggressive
- **Calm**: peaceful, gentle, relaxing, ambient
- **Mysterious**: eerie, haunting, suspenseful

### Genre Keywords

- **Jazz**: swing, bebop, fusion
- **Electronic**: techno, house, ambient, synth
- **Classical**: baroque, romantic, symphony
- **Rock**: metal, punk, grunge
- **Blues**: delta, chicago

### Musical Elements

- **Key**: "in C major", "F# minor"
- **Tempo**: "slow ballad", "fast driving", "moderate pace"
- **Instruments**: piano, guitar, violin, synth
- **Structure**: "chord progression", "melody", "bassline"

### Example Prompts

```
"Create a romantic piano ballad in Bb major"
"Generate an energetic techno bassline"
"Mysterious film score melody with strings"
"Happy birthday song in minor key"
"Driving rock progression with power chords"
"Gentle ambient pad sounds"
"Uplifting house music chord progression"
"Dark atmospheric soundtrack"
```

## Parameters

### Tempo Control

- Range: 60-200 BPM
- Affects the speed of generated sequences
- Can be overridden by prompt keywords

### Complexity Control

- Range: 0.0-1.0
- 0.0: Simple, basic patterns
- 0.5: Moderate complexity
- 1.0: Complex, intricate patterns

### Additional Controls

- **Key Selection**: Choose the musical key
- **Scale Type**: Major, minor, blues, etc.
- **Length**: Number of bars to generate

## Technical Details

### AI Processing

The device uses a hybrid approach:

1. **Local Analysis**: Pattern matching for musical keywords
2. **AI Enhancement**: Optional integration with external AI services
3. **Music Theory**: Built-in knowledge of scales, progressions, and patterns

### MIDI Output

- Generates standard MIDI note events
- Velocity responds to energy level
- Timing based on tempo and rhythm analysis
- Compatible with all MIDI instruments and effects

### File Structure

```
/devices/          # Max for Live .amxd files
/max-patches/      # Max/MSP .maxpat patch files
/js/              # JavaScript processing files
/presets/         # Saved device presets
/docs/            # Documentation
```

## Troubleshooting

### No MIDI Output

- Check that the device is on a MIDI track
- Verify MIDI routing in Live
- Ensure an instrument is receiving MIDI

### Poor Generation Quality

- Try more specific prompts
- Adjust complexity parameter
- Use musical terminology
- Reference specific genres or moods

### Performance Issues

- Reduce complexity for real-time use
- Check Max/MSP console for errors
- Ensure JavaScript files are properly loaded

## Advanced Usage

### Chaining with Other Devices

- Use before MIDI effects like arpeggiators
- Combine with Ableton's MIDI tools
- Route to multiple instruments

### Custom Presets

1. Set up your ideal parameters
2. Save as device preset in Live
3. Share preset files in `/presets/` folder

### API Integration

For enhanced AI features:

1. Set OpenAI API key in environment variables
2. Restart Max/MSP
3. Enhanced analysis will be available

## Tips for Best Results

1. **Be Specific**: "Jazz chord progression" vs "music"
2. **Use Musical Terms**: Reference scales, keys, instruments
3. **Combine Concepts**: "Sad blues guitar in E minor"
4. **Experiment**: Try unusual combinations
5. **Iterate**: Generate multiple versions and pick the best

## Known Limitations

- Generated sequences are typically 4-8 bars
- Works best with harmonic content (chords, progressions)
- Melodic generation is simplified
- Real-time generation has computational limits

## Support

For issues or feature requests:

- Check the GitHub repository
- Review Max/MSP console for error messages
- Ensure all dependencies are installed
- Test with simple prompts first
