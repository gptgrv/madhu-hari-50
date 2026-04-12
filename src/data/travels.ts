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
  { name: "France", country: "France", lat: 46.2276, lng: 2.2137, emoji: "🇫🇷" },
  { name: "UK", country: "UK", lat: 55.3781, lng: -3.4360, emoji: "🇬🇧" },
  { name: "Canada", country: "Canada", lat: 56.1304, lng: -106.3468, emoji: "🇨🇦" },
  { name: "USA", country: "USA", lat: 37.0902, lng: -95.7129, emoji: "🇺🇸" },
  { name: "Thailand", country: "Thailand", lat: 15.8700, lng: 100.9925, emoji: "🇹🇭" },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, emoji: "🇸🇬" },
  { name: "South Korea", country: "South Korea", lat: 35.9078, lng: 127.7669, emoji: "🇰🇷" },
  { name: "Taiwan", country: "Taiwan", lat: 23.6978, lng: 120.9605, emoji: "🇹🇼" },
  { name: "Nepal", country: "Nepal", lat: 28.3949, lng: 84.1240, emoji: "🇳🇵" },
  { name: "UAE", country: "UAE", lat: 23.4241, lng: 53.8478, emoji: "🇦🇪" },
  { name: "Belgium", country: "Belgium", lat: 50.8503, lng: 4.3517, emoji: "🇧🇪" },
  { name: "Tanzania", country: "Tanzania", lat: -6.3690, lng: 34.8888, emoji: "🇹🇿" },
  { name: "India", country: "India", lat: 20.5937, lng: 78.9629, emoji: "🇮🇳" },
  { name: "Solan", country: "India (Home)", lat: 30.9045, lng: 77.0967, emoji: "🏠" },
];
