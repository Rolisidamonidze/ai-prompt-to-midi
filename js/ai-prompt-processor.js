// Advanced AI Integration for Prompt-to-MIDI
// This module handles integration with external AI services
// for more sophisticated text-to-music generation

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AIPromptProcessor {
    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY || '';
        this.modelName = 'gpt-3.5-turbo';
        this.musicTheoryKnowledge = this.loadMusicTheory();
    }

    // Load music theory knowledge base
    loadMusicTheory() {
        return {
            scales: {
                major: [0, 2, 4, 5, 7, 9, 11],
                minor: [0, 2, 3, 5, 7, 8, 10],
                dorian: [0, 2, 3, 5, 7, 9, 10],
                mixolydian: [0, 2, 4, 5, 7, 9, 10],
                pentatonic: [0, 2, 4, 7, 9],
                blues: [0, 3, 5, 6, 7, 10]
            },
            chordProgressions: {
                pop: [[0, 3, 5, 0], [0, 5, 6, 3], [0, 4, 1, 5]],
                jazz: [[1, 4, 0], [0, 5, 1, 4], [1, 5, 0]],
                classical: [[0, 3, 4, 0], [0, 4, 0, 5, 0]],
                blues: [[0, 0, 0, 0], [3, 3, 0, 0], [4, 3, 0, 0]]
            },
            rhythmPatterns: {
                simple: [1, 0, 1, 0],
                complex: [1, 0, 1, 1, 0, 1, 0, 1],
                syncopated: [1, 0, 0, 1, 0, 1, 0, 0],
                triplet: [1, 0, 0, 1, 0, 0]
            }
        };
    }

    // Process text prompt using AI
    async processPrompt(prompt, parameters = {}) {
        try {
            // First, analyze prompt locally for basic musical concepts
            const localAnalysis = this.analyzePromptLocally(prompt);
            
            // If AI API is available, enhance analysis
            if (this.apiKey) {
                const aiAnalysis = await this.enhanceWithAI(prompt, localAnalysis);
                return this.combineAnalyses(localAnalysis, aiAnalysis);
            }
            
            return localAnalysis;
        } catch (error) {
            console.error('Error processing prompt:', error);
            return this.analyzePromptLocally(prompt); // Fallback to local analysis
        }
    }

    // Local prompt analysis without external AI
    analyzePromptLocally(prompt) {
        const analysis = {
            mood: this.detectMood(prompt),
            genre: this.detectGenre(prompt),
            key: this.detectKey(prompt),
            scale: this.detectScale(prompt),
            tempo: this.detectTempo(prompt),
            energy: this.detectEnergy(prompt),
            complexity: this.detectComplexity(prompt),
            instruments: this.detectInstruments(prompt),
            structure: this.detectStructure(prompt)
        };

        return analysis;
    }

    // Detect mood from prompt text
    detectMood(prompt) {
        const moodKeywords = {
            happy: ['happy', 'joyful', 'uplifting', 'cheerful', 'bright', 'optimistic'],
            sad: ['sad', 'melancholic', 'depressing', 'dark', 'gloomy', 'mournful'],
            energetic: ['energetic', 'driving', 'powerful', 'intense', 'aggressive'],
            calm: ['calm', 'peaceful', 'serene', 'gentle', 'relaxing', 'ambient'],
            mysterious: ['mysterious', 'eerie', 'haunting', 'suspenseful', 'ominous'],
            romantic: ['romantic', 'love', 'tender', 'intimate', 'passionate']
        };

        const lowerPrompt = prompt.toLowerCase();
        for (const [mood, keywords] of Object.entries(moodKeywords)) {
            if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
                return mood;
            }
        }
        return 'neutral';
    }

    // Detect musical genre
    detectGenre(prompt) {
        const genreKeywords = {
            jazz: ['jazz', 'swing', 'bebop', 'fusion'],
            classical: ['classical', 'baroque', 'romantic', 'symphony'],
            electronic: ['electronic', 'techno', 'house', 'ambient', 'synth'],
            rock: ['rock', 'metal', 'punk', 'grunge'],
            pop: ['pop', 'commercial', 'radio'],
            blues: ['blues', 'delta', 'chicago'],
            country: ['country', 'folk', 'bluegrass'],
            latin: ['latin', 'salsa', 'bossa nova', 'tango']
        };

        const lowerPrompt = prompt.toLowerCase();
        for (const [genre, keywords] of Object.entries(genreKeywords)) {
            if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
                return genre;
            }
        }
        return 'general';
    }

    // Detect key signature
    detectKey(prompt) {
        const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const lowerPrompt = prompt.toLowerCase();
        
        for (const key of keys) {
            if (lowerPrompt.includes(key.toLowerCase()) || 
                lowerPrompt.includes(key.toLowerCase() + ' major') ||
                lowerPrompt.includes(key.toLowerCase() + ' minor')) {
                return key;
            }
        }
        return 'C'; // Default to C
    }

    // Detect scale type
    detectScale(prompt) {
        const scaleKeywords = {
            major: ['major', 'happy', 'bright'],
            minor: ['minor', 'sad', 'dark'],
            dorian: ['dorian', 'modal'],
            blues: ['blues', 'bluesy'],
            pentatonic: ['pentatonic', 'asian', 'simple']
        };

        const lowerPrompt = prompt.toLowerCase();
        for (const [scale, keywords] of Object.entries(scaleKeywords)) {
            if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
                return scale;
            }
        }
        return 'major'; // Default
    }

    // Detect tempo indicators
    detectTempo(prompt) {
        const tempoKeywords = {
            slow: ['slow', 'ballad', 'adagio', 'largo'],
            medium: ['medium', 'moderate', 'andante'],
            fast: ['fast', 'quick', 'allegro', 'presto', 'driving'],
            very_fast: ['very fast', 'frantic', 'breakneck']
        };

        const lowerPrompt = prompt.toLowerCase();
        for (const [tempo, keywords] of Object.entries(tempoKeywords)) {
            if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
                switch(tempo) {
                    case 'slow': return 70;
                    case 'medium': return 120;
                    case 'fast': return 140;
                    case 'very_fast': return 180;
                }
            }
        }
        return 120; // Default BPM
    }

    // Detect energy level
    detectEnergy(prompt) {
        const energyKeywords = {
            low: ['quiet', 'gentle', 'soft', 'whisper', 'calm'],
            medium: ['moderate', 'normal', 'steady'],
            high: ['loud', 'powerful', 'intense', 'energetic', 'driving']
        };

        const lowerPrompt = prompt.toLowerCase();
        for (const [energy, keywords] of Object.entries(energyKeywords)) {
            if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
                switch(energy) {
                    case 'low': return 0.3;
                    case 'medium': return 0.6;
                    case 'high': return 0.9;
                }
            }
        }
        return 0.5; // Default
    }

    // Detect complexity level
    detectComplexity(prompt) {
        const complexityKeywords = {
            simple: ['simple', 'basic', 'easy', 'minimal'],
            complex: ['complex', 'sophisticated', 'intricate', 'advanced']
        };

        const lowerPrompt = prompt.toLowerCase();
        if (complexityKeywords.simple.some(keyword => lowerPrompt.includes(keyword))) {
            return 0.2;
        }
        if (complexityKeywords.complex.some(keyword => lowerPrompt.includes(keyword))) {
            return 0.8;
        }
        return 0.5; // Default
    }

    // Detect instrument mentions
    detectInstruments(prompt) {
        const instruments = ['piano', 'guitar', 'violin', 'drums', 'bass', 'synth', 'organ', 'trumpet', 'saxophone'];
        const detected = [];
        
        const lowerPrompt = prompt.toLowerCase();
        for (const instrument of instruments) {
            if (lowerPrompt.includes(instrument)) {
                detected.push(instrument);
            }
        }
        
        return detected.length > 0 ? detected : ['piano']; // Default to piano
    }

    // Detect song structure
    detectStructure(prompt) {
        if (prompt.toLowerCase().includes('verse') || prompt.toLowerCase().includes('chorus')) {
            return 'song';
        }
        if (prompt.toLowerCase().includes('loop') || prompt.toLowerCase().includes('pattern')) {
            return 'loop';
        }
        return 'phrase'; // Default
    }

    // Generate MIDI sequence from analysis
    generateMIDISequence(analysis, options = {}) {
        const {
            length = 32, // Number of notes
            octave = 4,
            velocity = 100
        } = options;

        const sequence = [];
        const scale = this.musicTheoryKnowledge.scales[analysis.scale] || this.musicTheoryKnowledge.scales.major;
        const keyOffset = this.getKeyOffset(analysis.key);
        const baseNote = 60 + keyOffset; // Middle C + key offset

        // Generate chord progression
        const progressions = this.musicTheoryKnowledge.chordProgressions[analysis.genre] || 
                           this.musicTheoryKnowledge.chordProgressions.pop;
        const progression = progressions[Math.floor(Math.random() * progressions.length)];

        let currentTime = 0;
        const noteDuration = 60000 / analysis.tempo; // Duration in milliseconds

        for (let i = 0; i < length; i++) {
            const chordIndex = Math.floor(i / 4) % progression.length;
            const chordRoot = progression[chordIndex];
            
            // Generate note based on chord and scale
            let note;
            if (Math.random() < 0.7) { // 70% chance for chord tone
                note = baseNote + scale[chordRoot] + (octave * 12);
            } else { // 30% chance for scale tone
                const scaleIndex = Math.floor(Math.random() * scale.length);
                note = baseNote + scale[scaleIndex] + (octave * 12);
            }

            // Add some complexity-based variation
            if (Math.random() < analysis.complexity) {
                note += Math.floor((Math.random() - 0.5) * 4); // ±2 semitones
            }

            // Ensure note is in valid MIDI range
            note = Math.max(21, Math.min(127, note));

            sequence.push({
                note: note,
                velocity: Math.floor(velocity * analysis.energy),
                time: currentTime,
                duration: noteDuration
            });

            currentTime += noteDuration;
        }

        return sequence;
    }

    // Get MIDI key offset
    getKeyOffset(key) {
        const keyMap = {
            'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5,
            'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
        };
        return keyMap[key] || 0;
    }

    // Enhance analysis with external AI (placeholder for API integration)
    async enhanceWithAI(prompt, localAnalysis) {
        // This would integrate with OpenAI, Claude, or other AI services
        // For now, return enhanced local analysis
        return {
            ...localAnalysis,
            aiConfidence: 0.8,
            suggestions: ['Try adding syncopation', 'Consider using 7th chords']
        };
    }

    // Combine local and AI analyses
    combineAnalyses(local, ai) {
        return {
            ...local,
            ...ai,
            source: 'hybrid'
        };
    }
}

// Export for use in Max/MSP JavaScript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIPromptProcessor;
} else {
    // Make available in Max environment
    this.AIPromptProcessor = AIPromptProcessor;
}

// Example usage for testing
if (require.main === module) {
    const processor = new AIPromptProcessor();
    
    async function test() {
        const analysis = await processor.processPrompt("Create a happy jazz chord progression in C major");
        console.log('Analysis:', JSON.stringify(analysis, null, 2));
        
        const sequence = processor.generateMIDISequence(analysis);
        console.log('Generated sequence length:', sequence.length);
    }
    
    test().catch(console.error);
}