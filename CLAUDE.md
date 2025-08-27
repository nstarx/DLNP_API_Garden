# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a JavaScript-to-JSON converter utility and a large collection of mock data files. The main tool (`convert-js-to-json-safe.js`) converts JavaScript module exports to JSON format while handling various data types safely.

## Key Commands

### Running the converter
```bash
node convert-js-to-json-safe.js
```
Recursively converts all .js files to .json in the current directory, skipping node_modules and hidden directories.

### Testing specific file conversion
To test conversion of a single file, you can require the module and use the `processJsFile` function directly:
```javascript
const { processJsFile } = require('./convert-js-to-json-safe');
const result = processJsFile('path/to/file.js');
```

## Architecture

### Core Components

1. **convert-js-to-json-safe.js**: Main converter utility
   - `convertJsToJsonSafe()`: Safely converts JavaScript objects to JSON-compatible format
   - `processJsFile()`: Processes individual JS files, handling both ES6 and CommonJS exports
   - `extractExportsDirectly()`: Fallback method for extracting exports from malformed files
   - Uses VM module for safe code execution in sandboxed environment

### Data Organization

The `client_mock_def/` directory contains converted mock data organized by feature:
- **admin/**: Admin dashboard and user management mock data
- **agentic/**: Agent templates and CI/CD pipeline configurations
- **connections/**: Database and cloud connection configurations
- **converge/**: Video-to-text transcription mock data
- **ai-catalog/**: AI models, datasets, and experiments
- **assets/**: Various application mock data including charts and metrics

### Conversion Strategy

The converter handles:
- ES6 module exports (named, default, destructured)
- CommonJS exports
- Functions, symbols, bigints, dates, regex, and errors
- Multiple exports (creates separate JSON files for each export)
- Malformed JavaScript files through direct extraction