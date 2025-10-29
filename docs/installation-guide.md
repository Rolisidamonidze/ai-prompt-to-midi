# AI Prompt-to-MIDI Device Installation Guide

## Installation Steps

### 1. Prerequisites
- **Ableton Live 11 or higher** with Max for Live
- **Max/MSP 8.0 or higher** (comes with Live Suite or available separately)
- **Node.js 14.0+** (for advanced AI features - optional)

### 2. Install the Device

#### Option A: Direct Installation
1. Download the `AI-Prompt-MIDI.amxd` file from the `/devices/` folder
2. Copy it to your Ableton Live User Library:
   - **macOS**: `~/Music/Ableton/User Library/Max for Live/Max MIDI Effect/`
   - **Windows**: `C:\Users\[Username]\Documents\Ableton\User Library\Max for Live\Max MIDI Effect\`
3. Restart Ableton Live
4. The device will appear in Live's Browser under: **Max for Live > Max MIDI Effect**

#### Option B: Development Installation
If you want to modify the device:
1. Clone this repository: `git clone https://github.com/Rolisidamonidze/ai-prompt-to-midi.git`
2. Open `max-patches/ai-prompt-midi.maxpat` in Max/MSP
3. Edit as needed
4. Save as `.amxd` file: **File > Save As... > Max for Live Device**

### 3. Usage in Ableton Live

1. **Create a MIDI Track** in Ableton Live
2. **Drag the AI-Prompt-MIDI device** onto the track (before any instruments)
3. **Add an instrument** after the device (e.g., Wavetable, Simpler, etc.)
4. **Arm the track** for recording
5. **Enter a prompt** in the device (e.g., "romantic jazz ballad in Bb major")
6. **Click Generate** to create MIDI
7. **Record the output** or use it live

### 4. Device Layout

```
┌─────────────────────────────────────────────────────┐
│           AI Prompt-to-MIDI Generator               │
│   Enter a musical prompt and generate MIDI         │
├─────────────────────────────────────────────────────┤
│  [Text Input Box for Prompt]                       │
│  "romantic jazz ballad in Bb major"                │
├─────────────────────────────────────────────────────┤
│ [Generate] [Tempo] [Complex] [Key] [Scale] [Clear]  │
│            120 BPM   0.5      C    Major           │
└─────────────────────────────────────────────────────┘
```

### 5. Parameters

- **Prompt Text**: Natural language description of desired music
- **Generate Button**: Click to create MIDI from the prompt
- **Tempo**: BPM setting (60-200)
- **Complexity**: Musical complexity (0.0-1.0)
- **Key**: Musical key (C, C#, D, etc.)
- **Scale**: Scale type (Major, Minor, Dorian, Blues, Pentatonic)
- **Clear**: Clear the prompt text

### 6. Example Prompts

Try these examples to get started:
- `"happy birthday song in minor key"`
- `"energetic techno bassline"`
- `"mysterious film score melody"`
- `"romantic piano ballad in Bb major"`
- `"driving rock chord progression"`
- `"gentle ambient pad sounds"`
- `"uplifting house music chords"`

### 7. Troubleshooting

#### Device doesn't appear in Live
- Ensure Max for Live is properly installed
- Check that the `.amxd` file is in the correct User Library folder
- Restart Ableton Live

#### No MIDI output
- Check that the device is on a MIDI track
- Ensure an instrument is placed after the device
- Verify the track is armed and monitoring is enabled

#### JavaScript errors
- Open Max/MSP and check the console for errors
- Ensure the `js/prompt-to-midi.js` file is accessible
- Check file paths in the device

#### Poor generation quality
- Try more specific prompts with musical terminology
- Adjust the complexity parameter
- Use genre-specific keywords (jazz, techno, classical, etc.)

### 8. Advanced Setup (Optional)

For enhanced AI features:

1. **Install Node.js dependencies**:
   ```bash
   cd path/to/ai-prompt-to-midi
   npm install
   ```

2. **Set up OpenAI API** (optional):
   ```bash
   export OPENAI_API_KEY="your-api-key-here"
   ```

3. **Run the AI processor**:
   ```bash
   npm start
   ```

### 9. File Structure

```
ai-prompt-to-midi/
├── devices/
│   └── AI-Prompt-MIDI.amxd     # Main device file
├── max-patches/
│   └── ai-prompt-midi.maxpat   # Source Max patch
├── js/
│   ├── prompt-to-midi.js       # Core processing
│   └── ai-prompt-processor.js  # Advanced AI
├── presets/
│   ├── jazz-ballad.json        # Sample presets
│   ├── driving-techno.json
│   └── ambient-pad.json
└── docs/
    ├── user-guide.md           # Detailed usage
    └── developer-guide.md      # Development info
```

### 10. Tips for Best Results

1. **Be specific**: Use musical terminology
2. **Include genre**: "jazz", "techno", "classical"
3. **Mention mood**: "happy", "sad", "energetic"
4. **Specify instruments**: "piano", "synth", "guitar"
5. **Add key/scale**: "in C major", "minor key"
6. **Experiment**: Try unusual combinations

### 11. Performance Notes

- Generation time: 1-3 seconds typical
- MIDI output: Standard MIDI notes (velocity responsive)
- CPU usage: Low during playback, moderate during generation
- Compatibility: Live 11+, Max 8+

### 12. Support

- Check the [GitHub repository](https://github.com/Rolisidamonidze/ai-prompt-to-midi) for updates
- Review Max/MSP console for error messages
- Ensure all dependencies are properly installed