export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt?: string;
  songUrl?: string;
  progressMs: number;
  durationMs: number;
}

export interface SpotifyConfig {
  enabled: boolean;
  lanyardUserId?: string; // Optional Discord User ID for Lanyard API live Spotify tracking
}

/**
 * 🎵 SPOTIFY ACTIVITY CONFIGURATION
 * Provide your Discord User ID below to automatically stream live Spotify activity via Lanyard API!
 */
export const SPOTIFY_CONFIG: SpotifyConfig = {
  enabled: true,
  // Provide your Discord User ID here (e.g. lanyardUserId: "123456789012345678")
  lanyardUserId: "957196694393614367",
};

/**
 * Helper to fetch live Spotify activity from Lanyard API
 */
export async function getSpotifyActivity(): Promise<SpotifyTrack | null> {
  if (SPOTIFY_CONFIG.lanyardUserId) {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${SPOTIFY_CONFIG.lanyardUserId}`);
      const data = await res.json();
      if (data.success && data.data?.spotify) {
        const s = data.data.spotify;
        const now = Date.now();
        const start = s.timestamps?.start || now;
        const end = s.timestamps?.end || now + 180000;
        return {
          isPlaying: true,
          title: s.song,
          artist: s.artist,
          album: s.album,
          albumArt: s.album_art_url,
          songUrl: `https://open.spotify.com/track/${s.track_id}`,
          progressMs: Math.max(0, now - start),
          durationMs: Math.max(1, end - start),
        };
      }
    } catch {
      // Fallback on network error
    }
  }

  return null;
}
