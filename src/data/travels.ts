export interface TravelDestination {
  name: string;
  country: string;
  lat: number;
  lng: number;
  emoji: string;
}

export const travels: TravelDestination[] = [
  { name: "Switzerland", country: "Switzerland", lat: 46.8182, lng: 8.2275, emoji: "🇨🇭" },
  { name: "Germany", country: "Germany", lat: 51.1657, lng: 10.4515, emoji: "🇩🇪" },
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, emoji: "🇫🇷" },
  { name: "London", country: "UK", lat: 51.5074, lng: -0.1278, emoji: "🇬🇧" },
  { name: "Manchester", country: "UK", lat: 53.4808, lng: -2.2426, emoji: "🇬🇧" },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, emoji: "🇨🇦" },
  { name: "USA", country: "USA", lat: 37.0902, lng: -95.7129, emoji: "🇺🇸" },
  { name: "Thailand", country: "Thailand", lat: 15.8700, lng: 100.9925, emoji: "🇹🇭" },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, emoji: "🇸🇬" },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, emoji: "🇰🇷" },
  { name: "Taipei", country: "Taiwan", lat: 25.0330, lng: 121.5654, emoji: "🇹🇼" },
  { name: "Nepal", country: "Nepal", lat: 28.3949, lng: 84.1240, emoji: "🇳🇵" },
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708, emoji: "🇦🇪" },
  { name: "Belgium", country: "Belgium", lat: 50.8503, lng: 4.3517, emoji: "🇧🇪" },
  { name: "Zanzibar", country: "Tanzania", lat: -6.1659, lng: 39.2026, emoji: "🇹🇿" },
  { name: "Ladakh", country: "India", lat: 34.1526, lng: 77.5771, emoji: "🏔️" },
  { name: "Solan", country: "India (Home)", lat: 30.9045, lng: 77.0967, emoji: "🏠" },
];
