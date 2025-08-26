export const mockStats = {
    totalTranscriptions: 127,
    averageProcessingTime: '2.3 min',
    successRate: 98.5
};
export const mockRecentActivity = [
    {
        id: 1,
        title: 'YouTube video transcribed',
        time: '2 minutes ago',
        status: 'completed',
        icon: 'pi pi-check-circle',
        details: 'AI Conference 2024 - 15 min video',
        source: 'https://youtube.com/watch?v=example1',
        duration: '15:32',
        fileSize: '45.2 MB'
    },
export const mockTranscriptionResults = {
    txt: 'This is a sample transcribed text from your video. The AI has successfully converted the audio content into readable text format. This demonstrates the capabilities of our advanced transcription system, which can handle various audio qualities and languages. The system processes the audio through multiple stages including noise reduction, speech recognition, and text formatting to provide you with accurate and readable transcriptions.',
    srt: '1\n00:00:00,000 --> 00:00:05,000\nThis is a sample transcribed text from your video.\n\n2\n00:00:05,000 --> 00:00:10,000\nThe AI has successfully converted the audio content.\n\n3\n00:00:10,000 --> 00:00:15,000\ninto readable text format.',
    vtt: 'WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nThis is a sample transcribed text from your video.\n\n00:00:05.000 --> 00:00:10.000\nThe AI has successfully converted the audio content.\n\n00:00:10.000 --> 00:00:15.000\ninto readable text format.',
    sbv: '0:00:00.000,0:00:05.000\nThis is a sample transcribed text from your video.\n\n0:00:05.000,0:00:10.000\nThe AI has successfully converted the audio content.\n\n0:00:10.000,0:00:15.000\ninto readable text format.'
};
export const mockContentAnalytics = {
    confidence: 92,
    wpm: 145,
    speakers: 2,
    sentiment: 'Positive',
    uniqueWords: 156,
    sentences: 12,
    paragraphs: 3,
    avgWordsPerSentence: 18,
    readingLevel: 'High School',
    audioDuration: '12:34',
    sampleRate: '44.1 kHz',
    audioQuality: 'Excellent',
    noiseLevel: 'Low',
    silentPeriods: 15,
    processingTime: '2.3s',
    detectedLanguage: 'English (US)',
    languageConfidence: 95,
    profanityCount: 0,
    namedEntities: 8,
    keyTopics: 1,
    complexityScore: 7,
    keyPhrases: [{ text: 'dell pro 14 premium', frequency: 1 }],
    cotentCategories: [
        { name: 'Technology', confidence: 92 },
        { name: 'Education', confidence: 78 },
        { name: 'Business', confidence: 65 },
        { name: 'Science', confidence: 58 }
    ]
};
export const mockTips = [
    {
        icon: 'pi pi-info-circle',
        color: 'text-blue-500',
        text: 'For best results, use clear audio with minimal background noise'
    },
export const mockTranscriptionPhases = ['Uploading and processing...', 'Extracting audio...', 'Running AI transcription...', 'Generating output formats...', 'Finalizing results...'];

// Helper functions for generating dynamic mock data
export function generateMockAnalytics(text) {
    if (!text) {
        return {
            confidence: 0,
            wpm: 0,
            speakers: 0,
            sentiment: 'Neutral',
            uniqueWords: 0,
            sentences: 0,
            paragraphs: 0,
            avgWordsPerSentence: 0,
            readingLevel: 'N/A',
            audioDuration: '0:00',
            sampleRate: '0 Hz',
            audioQuality: 'Unknown',
            noiseLevel: 'Unknown',
            silentPeriods: 0,
            processingTime: '0s',
            detectedLanguage: 'Unknown',
            languageConfidence: 0,
            profanityCount: 0,
            namedEntities: 0,
            keyTopics: 0,
            complexityScore: 0,
            keyPhrases: [],
            contentCategories: []
        };
    }

    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    const uniqueWords = [...new Set(words.map((w) => w.toLowerCase()))];

    return {
        ...mockContentAnalytics,
        uniqueWords: uniqueWords.length,
        sentences: sentences.length,
        paragraphs: Math.max(paragraphs.length, 1),
        avgWordsPerSentence: sentences.length > 0 ? Math.round(words.length / sentences.length) : 0,
        confidence: Math.floor(Math.random() * 15) + 85,
        wpm: Math.floor(Math.random() * 50) + 120,
        speakers: Math.floor(Math.random() * 3) + 1,
        sentiment: ['Positive', 'Neutral', 'Negative'][Math.floor(Math.random() * 3)]
    };
}
export function generateHistogramData(text) {
    if (!text) return [];

    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter((word) => word.length > 2);

    const wordCount = {};
    words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const sortedWords = Object.entries(wordCount)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 15);

    const maxCount = sortedWords[0]?.[1] || 1;

    return sortedWords.map(([word, count]) => {
        const height = Math.max(10, (count / maxCount) * 100);
        let color;

        if (count >= 10) color = '#3b82f6';
        else if (count >= 5) color = '#10b981';
        else if (count >= 2) color = '#f59e0b';
        else color = '#ef4444';

        return {
            word: word.length > 8 ? word.substring(0, 8) + '...' : word,
            count,
            height,
            color
        };
    });
}
export function generateHistogramStats(text) {
    if (!text) {
        return {
            totalUniqueWords: 0,
            averageFrequency: 0,
            mostFrequentWord: 'N/A',
            vocabularyRichness: 0
        };
    }

    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter((word) => word.length > 2);

    const wordCount = {};
    words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const uniqueWords = Object.keys(wordCount);
    const totalOccurrences = Object.values(wordCount).reduce((sum, count) => sum + count, 0);
    const averageFrequency = uniqueWords.length > 0 ? Math.round((totalOccurrences / uniqueWords.length) * 10) / 10 : 0;

    const mostFrequent = Object.entries(wordCount).sort(([, a], [, b]) => b - a)[0];

    const vocabularyRichness = words.length > 0 ? Math.round((uniqueWords.length / words.length) * 100) : 0;

    return {
        totalUniqueWords: uniqueWords.length,
        averageFrequency,
        mostFrequentWord: mostFrequent ? mostFrequent[0] : 'N/A',
        vocabularyRichness
    };
}