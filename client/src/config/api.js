// API configuration
// Production Backend URL: https://skillswapstartup-1.onrender.com
// Production Frontend URL: https://skill-swap-startup.vercel.app

// Socket.IO URL - connects to production backend by default
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || import.meta.env.VITE_API_URL || 'https://skillswapstartup-1.onrender.com';

// API Base URL - used for direct API calls if needed
// In development, vite proxy handles /api/* requests
// In production, Vercel rewrites handle /api/* requests (see vercel.json)
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper function to build API URLs
// Use this if you need absolute URLs (e.g., for external services)
const buildApiUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (API_BASE_URL) {
    // Production: use absolute URL
    return `${API_BASE_URL}/${cleanPath}`;
  }
  // Development: use relative URL (vite proxy will handle it)
  return `/${cleanPath}`;
};

export { API_BASE_URL, SOCKET_URL, buildApiUrl };

