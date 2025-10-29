# AI Prompt-to-MIDI Device - Developer Guide

## Architecture Overview

The AI Prompt-to-MIDI device consists of three main components:

1. **Max for Live Interface** (`.maxpat` / `.amxd`)
2. **JavaScript Processing Engine** (`prompt-to-midi.js`)
3. **AI Analysis Module** (`ai-prompt-processor.js`)

## Component Details

### Max for Live Interface

**File**: `max-patches/ai-prompt-midi.maxpat`

The Max patch provides:

- Text input for prompts
- Parameter controls (tempo, complexity)
- MIDI output routing
- JavaScript object integration

**Key Objects**:

- `textedit`: Prompt input
- `js`: JavaScript processing
- `midiout`: MIDI output
- `dial`: Parameter controls

### JavaScript Engine

**File**: `js/prompt-to-midi.js`

Core functions:

- `generateMIDI()`: Main generation entry point
- `analyzePrompt()`: Text analysis
- `createMIDISequence()`: Sequence generation
- `playSequence()`: MIDI output

### AI Processing Module

**File**: `js/ai-prompt-processor.js`

Advanced features:

- Natural language processing
- Music theory knowledge base
- External AI API integration
- Pattern generation algorithms

## Development Setup

### Prerequisites

- Max/MSP 8.0 or higher
- Node.js 14.0 or higher
- Ableton Live 11+ with Max for Live

### Installation

```bash
# Install Node.js dependencies
npm install

# Install development tools
npm install -g nodemon

# Set up environment variables (optional)
export OPENAI_API_KEY="your-api-key-here"
```

### File Organization

```
ideator/
├── devices/                 # Compiled .amxd files
│   └── ai-prompt-midi.amxd
├── max-patches/            # Source .maxpat files
│   └── ai-prompt-midi.maxpat
├── js/                     # JavaScript modules
│   ├── prompt-to-midi.js   # Max integration
│   └── ai-prompt-processor.js # AI engine
├── presets/               # Device presets
├── docs/                  # Documentation
└── package.json          # Node.js config
```

## Core Algorithms

### Prompt Analysis Pipeline

1. **Text Preprocessing**

   - Convert to lowercase
   - Tokenize words
   - Remove stop words

2. **Keyword Extraction**

   - Mood detection
   - Genre identification
   - Musical elements

3. **Parameter Mapping**
   - Scale selection
   - Chord progressions
   - Rhythm patterns

### MIDI Generation Process

1. **Harmonic Structure**

   ```javascript
   const chordProgression = getProgressionForGenre(genre);
   const scale = getScaleForKey(key, scaleType);
   ```

2. **Rhythmic Patterns**

   ```javascript
   const rhythm = generateRhythm(tempo, complexity);
   const noteValues = distributeNotes(rhythm);
   ```

3. **Note Selection**
   ```javascript
   const notes = generateNotes(scale, chordProgression, complexity);
   ```

## Extending the Device

### Adding New Genres

1. **Define Chord Progressions**

   ```javascript
   chordProgressions: {
     newGenre: [
       [0, 3, 5, 0],
       [1, 4, 0, 5],
     ];
   }
   ```

2. **Add Genre Keywords**
   ```javascript
   const genreKeywords = {
     newGenre: ["keyword1", "keyword2"],
   };
   ```

### Custom Analysis Functions

```javascript
function detectCustomElement(prompt) {
  // Your analysis logic
  return result;
}
```

### External AI Integration

```javascript
async function callExternalAI(prompt) {
  const response = await fetch("https://api.example.com/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return response.json();
}
```

## Max/MSP Integration

### JavaScript in Max

**Communication Methods**:

- `inlet`: Receive data from Max
- `outlet()`: Send data to Max
- `post()`: Console output

**Example**:

```javascript
// Receive from Max
function msg_text() {
  var prompt = arrayfromargs(arguments).join(" ");
  processPrompt(prompt);
}

// Send to Max
function sendMIDI(note, velocity) {
  outlet(0, note, velocity);
}
```

### Max Patch Design

**Key Considerations**:

- UI responsiveness
- Parameter automation
- MIDI routing
- Error handling

## Testing

### Unit Tests

```bash
# Test AI processing
node js/test-prompt-processor.js

# Test MIDI generation
node js/test-midi-output.js
```

### Integration Testing

1. Load patch in Max
2. Test prompt input
3. Verify MIDI output
4. Check parameter responses

### Performance Testing

- Measure generation time
- Test with complex prompts
- Monitor memory usage

## Optimization

### Performance Tips

1. **Caching**

   ```javascript
   const analysisCache = new Map();
   if (analysisCache.has(prompt)) {
     return analysisCache.get(prompt);
   }
   ```

2. **Lazy Loading**

   ```javascript
   let aiModule;
   function getAIModule() {
     if (!aiModule) {
       aiModule = require("./ai-processor");
     }
     return aiModule;
   }
   ```

3. **Batch Processing**
   ```javascript
   function processBatch(prompts) {
     return prompts.map(analyzePrompt);
   }
   ```

## Building Distributions

### Creating .amxd Files

1. Open `.maxpat` in Max
2. File > Save As... > Max for Live Device
3. Test in Live
4. Copy to User Library

### Package Management

```bash
# Build distribution
npm run build

# Package for release
npm run package
```

## API Reference

### Core Functions

#### `analyzePrompt(prompt)`

Analyzes text prompt for musical content.

**Parameters**:

- `prompt` (string): Natural language description

**Returns**:

- Analysis object with musical parameters

#### `generateMIDISequence(analysis, options)`

Creates MIDI sequence from analysis.

**Parameters**:

- `analysis` (object): Prompt analysis result
- `options` (object): Generation options

**Returns**:

- Array of MIDI events

### Music Theory Utilities

#### `getScale(scaleType, key)`

Returns scale intervals for key.

#### `getChordProgression(genre)`

Returns common progressions for genre.

#### `rhythmPattern(style, complexity)`

Generates rhythm patterns.

## Contributing

### Code Style

- Use ES6+ features
- Follow Max/MSP naming conventions
- Comment complex algorithms
- Include type hints where possible

### Pull Request Process

1. Fork repository
2. Create feature branch
3. Add tests
4. Update documentation
5. Submit pull request

## Debugging

### Common Issues

**JavaScript Errors**:

- Check Max console
- Verify file paths
- Test functions individually

**MIDI Problems**:

- Check MIDI routing
- Verify note ranges
- Test with simple sequences

**Performance Issues**:

- Profile generation times
- Check memory usage
- Optimize algorithms

### Debugging Tools

```javascript
// Enhanced logging
function debugLog(message, data) {
  console.log(`[DEBUG] ${message}:`, JSON.stringify(data, null, 2));
}

// Performance monitoring
function timeFunction(fn, name) {
  const start = Date.now();
  const result = fn();
  console.log(`${name} took ${Date.now() - start}ms`);
  return result;
}
```

## Future Enhancements

### Planned Features

- Real-time prompt editing
- Advanced AI model integration
- Multi-track generation
- Style transfer capabilities
- Collaborative features

### Technical Roadmap

- WebAssembly integration for performance
- Cloud-based AI processing
- Mobile app companion
- Plugin architecture for extensions
