# Whisper Transcriber

A simple transcription tool using OpenAI's Whisper model.

## Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

Place your audio files in the `audio` directory and run:
```bash
python transcribe.py path/to/your/audio/file.m4a
```

The transcription will be saved in the `transcriptions` directory.

## Supported Audio Formats

- M4A
- MP3
- WAV
- MP4
- M4V
- WEBM 