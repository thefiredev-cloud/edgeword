import { createClient, LiveTranscriptionEvents } from '@deepgram/sdk';
import { logger } from '../utils/logger';

/**
 * Deepgram streaming ASR wrapper.
 * Provides <300ms speaker-diarized transcription.
 */
export class DeepgramTranscriber {
  private client = createClient(process.env.DEEPGRAM_API_KEY!);

  async startStream(onTranscript: (text: string, speaker: number) => void) {
    const connection = this.client.listen.live({
      model: 'nova-2',
      language: 'en-US',
      smart_format: true,
      diarize: true,
      interim_results: true,
    });

    connection.on(LiveTranscriptionEvents.Transcript, (data) => {
      const alt = data.channel?.alternatives?.[0];
      if (alt?.transcript) {
        const speaker = alt.words?.[0]?.speaker ?? 0;
        onTranscript(alt.transcript, speaker);
      }
    });

    connection.on(LiveTranscriptionEvents.Error, (err) => {
      logger.error('Deepgram error', { error: err });
    });

    return connection;
  }
}
