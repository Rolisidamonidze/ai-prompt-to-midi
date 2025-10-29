// AI Prompt-to-MIDI Generator
// JavaScript for Max for Live device
// Processes text prompts and generates MIDI sequences

// Global variables
var currentPrompt = "";
var tempo = 120;
var complexity = 0.5;
var generatedSequence = [];
var isPlaying = false;

// Initialize
function bang() {
    if (currentPrompt.length > 0) {
        generateMIDI();
    } else {
        post("Please enter a prompt first\\n");
    }
}

// Handle text input from the prompt field
function msg_text() {
    var prompt = arrayfromargs(arguments).join(" ");
    currentPrompt = prompt;
    post("Prompt received: " + currentPrompt + "\\n");
}

// Set tempo parameter
function setTempo(value) {
    tempo = Math.max(60, Math.min(200, value));
    post("Tempo set to: " + tempo + "\\n");
}

// Set complexity parameter
function setComplexity(value) {
    complexity = Math.max(0, Math.min(1, value));
    post("Complexity set to: " + complexity + "\\n");
}

// Main MIDI generation function
function generateMIDI() {
    post("Generating MIDI from prompt: '" + currentPrompt + "'\\n");
    
    // Analyze prompt for musical keywords
    var analysis = analyzePrompt(currentPrompt);
    
    // Generate MIDI sequence based on analysis
    generatedSequence = createMIDISequence(analysis);
    
    // Start playback
    playSequence();
}

// Analyze the text prompt for musical concepts
function analyzePrompt(prompt) {
    var analysis = {
        mood: "neutral",
        key: "C",
        scale: "major",
        rhythm: "quarter",
        genre: "general",
        energy: 0.5,
        chordProgression: [0, 3, 5, 0] // I-IV-V-I in scale degrees
    };
    
    var lowerPrompt = prompt.toLowerCase();
    
    // Mood detection
    if (lowerPrompt.includes("happy") || lowerPrompt.includes("uplifting") || lowerPrompt.includes("cheerful")) {
        analysis.mood = "happy";
        analysis.scale = "major";
        analysis.energy = 0.8;
    } else if (lowerPrompt.includes("sad") || lowerPrompt.includes("melancholic") || lowerPrompt.includes("dark")) {
        analysis.mood = "sad";
        analysis.scale = "minor";
        analysis.energy = 0.3;
    } else if (lowerPrompt.includes("energetic") || lowerPrompt.includes("driving") || lowerPrompt.includes("intense")) {
        analysis.mood = "energetic";
        analysis.energy = 0.9;
    }
    
    // Key detection
    var keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    for (var i = 0; i < keys.length; i++) {
        if (lowerPrompt.includes(keys[i].toLowerCase())) {
            analysis.key = keys[i];
            break;
        }
    }
    
    // Genre detection
    if (lowerPrompt.includes("jazz")) {
        analysis.genre = "jazz";
        analysis.chordProgression = [0, 5, 1, 4]; // ii-V-I progression
    } else if (lowerPrompt.includes("techno") || lowerPrompt.includes("house")) {
        analysis.genre = "electronic";
        analysis.rhythm = "eighth";
    } else if (lowerPrompt.includes("classical")) {
        analysis.genre = "classical";
    }
    
    return analysis;
}

// Create MIDI sequence based on analysis
function createMIDISequence(analysis) {
    var sequence = [];
    var baseNote = getKeyNumber(analysis.key);
    var scale = getScale(analysis.scale);
    
    // Generate 16 notes (4 bars of quarter notes)
    var sequenceLength = 16;
    var currentTime = 0;
    var noteDuration = 500; // milliseconds
    
    for (var i = 0; i < sequenceLength; i++) {
        var note = generateNote(baseNote, scale, analysis, i);
        
        sequence.push({
            note: note,
            velocity: Math.floor(64 + (analysis.energy * 63)),
            time: currentTime,
            duration: noteDuration
        });
        
        currentTime += noteDuration;
    }
    
    return sequence;
}

// Generate a single note based on musical analysis
function generateNote(baseNote, scale, analysis, position) {
    var scalePosition = Math.floor(Math.random() * scale.length);
    
    // Add some musical logic based on position
    if (position % 4 === 0) {
        // Emphasize chord tones on strong beats
        scalePosition = analysis.chordProgression[Math.floor(position / 4) % analysis.chordProgression.length];
    }
    
    // Apply complexity to note selection
    if (Math.random() < complexity) {
        // Higher complexity allows more chromatic notes
        scalePosition = Math.floor(Math.random() * 12);
        return baseNote + scalePosition + 60; // Middle C region
    } else {
        return baseNote + scale[scalePosition] + 60;
    }
}

// Get MIDI note number for key
function getKeyNumber(key) {
    var keyMap = {
        "C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5,
        "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11
    };
    return keyMap[key] || 0;
}

// Get scale intervals
function getScale(scaleType) {
    if (scaleType === "minor") {
        return [0, 2, 3, 5, 7, 8, 10]; // Natural minor
    } else {
        return [0, 2, 4, 5, 7, 9, 11]; // Major scale
    }
}

// Play the generated sequence
function playSequence() {
    if (generatedSequence.length === 0) return;
    
    isPlaying = true;
    post("Playing generated sequence...\\n");
    
    for (var i = 0; i < generatedSequence.length; i++) {
        var note = generatedSequence[i];
        
        // Schedule note on
        var task1 = new Task(sendNoteOn, this, note.note, note.velocity);
        task1.schedule(note.time);
        
        // Schedule note off
        var task2 = new Task(sendNoteOff, this, note.note);
        task2.schedule(note.time + note.duration);
    }
}

// Send MIDI note on
function sendNoteOn(note, velocity) {
    outlet(0, note, velocity);
}

// Send MIDI note off
function sendNoteOff(note) {
    outlet(0, note, 0);
}

// Handle incoming messages
function msg_int(value) {
    // Handle parameter changes from Max patch
}

function msg_float(value) {
    // Handle parameter changes from Max patch
}

// Utility function for logging
function post(message) {
    if (typeof post !== 'undefined') {
        post(message);
    }
}