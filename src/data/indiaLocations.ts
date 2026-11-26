export interface IndiaLocation {
  id: string;
  name: string;
  district: string;
  state: string;
  lat: number;
  lon: number;
  isCalibratedPreset?: boolean;
}

export const INDIA_STATES_AND_UTS: string[] = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  // Union Territories (8)
  'Andaman & Nicobar Islands',
  'Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu',
  'Delhi NCR',
  'Jammu & Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

export const INDIA_LOCATIONS: IndiaLocation[] = [
  // Delhi NCR
  { id: 'delhi-anand-vihar', name: 'Delhi — Anand Vihar', district: 'East Delhi', state: 'Delhi NCR', lat: 28.6469, lon: 77.3160, isCalibratedPreset: true },
  { id: 'delhi-connaught-place', name: 'Delhi — Central (Mandir Marg)', district: 'New Delhi', state: 'Delhi NCR', lat: 28.6341, lon: 77.2005, isCalibratedPreset: true },
  { id: 'delhi-dwarka', name: 'Dwarka', district: 'South West Delhi', state: 'Delhi NCR', lat: 28.5921, lon: 77.0460 },
  { id: 'delhi-rohini', name: 'Rohini', district: 'North West Delhi', state: 'Delhi NCR', lat: 28.7041, lon: 77.1025 },

  // Karnataka
  { id: 'bengaluru-indiranagar', name: 'Bengaluru — Indiranagar / BTM', district: 'Bengaluru Urban', state: 'Karnataka', lat: 12.9784, lon: 77.6408, isCalibratedPreset: true },
  { id: 'bengaluru-whitefield', name: 'Bengaluru — Whitefield IT Corridor', district: 'Bengaluru Urban', state: 'Karnataka', lat: 12.9698, lon: 77.7500, isCalibratedPreset: true },
  { id: 'mysuru', name: 'Mysuru', district: 'Mysuru', state: 'Karnataka', lat: 12.2958, lon: 76.6394 },
  { id: 'mangaluru', name: 'Mangaluru', district: 'Dakshina Kannada', state: 'Karnataka', lat: 12.9141, lon: 74.8560 },
  { id: 'hubballi', name: 'Hubballi-Dharwad', district: 'Dharwad', state: 'Karnataka', lat: 15.3647, lon: 75.1240 },
  { id: 'belagavi', name: 'Belagavi', district: 'Belagavi', state: 'Karnataka', lat: 15.8497, lon: 74.4977 },

  // Maharashtra
  { id: 'mumbai-bkc', name: 'Mumbai — BKC / Bandra', district: 'Mumbai Suburban', state: 'Maharashtra', lat: 19.0657, lon: 72.8687, isCalibratedPreset: true },
  { id: 'pune-shivajinagar', name: 'Pune — Shivajinagar', district: 'Pune', state: 'Maharashtra', lat: 18.5308, lon: 73.8475, isCalibratedPreset: true },
  { id: 'nagpur', name: 'Nagpur', district: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882 },
  { id: 'nashik', name: 'Nashik', district: 'Nashik', state: 'Maharashtra', lat: 19.9975, lon: 73.7898 },
  { id: 'thane', name: 'Thane', district: 'Thane', state: 'Maharashtra', lat: 19.2183, lon: 72.9781 },
  { id: 'chhatrapati-sambhajinagar', name: 'Chhatrapati Sambhajinagar', district: 'Aurangabad', state: 'Maharashtra', lat: 19.8762, lon: 75.3433 },

  // West Bengal
  { id: 'kolkata-victoria', name: 'Kolkata — Victoria Memorial', district: 'Kolkata', state: 'West Bengal', lat: 22.5448, lon: 88.3426, isCalibratedPreset: true },
  { id: 'howrah', name: 'Howrah', district: 'Howrah', state: 'West Bengal', lat: 22.5958, lon: 88.2636 },
  { id: 'siliguri', name: 'Siliguri', district: 'Darjeeling', state: 'West Bengal', lat: 26.7271, lon: 88.3953 },
  { id: 'durgapur', name: 'Durgapur', district: 'Paschim Bardhaman', state: 'West Bengal', lat: 23.5204, lon: 87.3119 },

  // Tamil Nadu
  { id: 'chennai-adyar', name: 'Chennai — Adyar Coastal', district: 'Chennai', state: 'Tamil Nadu', lat: 13.0012, lon: 80.2565, isCalibratedPreset: true },
  { id: 'coimbatore', name: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lon: 76.9558 },
  { id: 'madurai', name: 'Madurai', district: 'Madurai', state: 'Tamil Nadu', lat: 9.9252, lon: 78.1198 },
  { id: 'tiruchirappalli', name: 'Tiruchirappalli', district: 'Tiruchirappalli', state: 'Tamil Nadu', lat: 10.7905, lon: 78.7047 },

  // Telangana
  { id: 'hyderabad-sanathnagar', name: 'Hyderabad — Sanathnagar', district: 'Hyderabad', state: 'Telangana', lat: 17.4578, lon: 78.4428, isCalibratedPreset: true },
  { id: 'warangal', name: 'Warangal', district: 'Warangal', state: 'Telangana', lat: 17.9689, lon: 79.5941 },
  { id: 'nizamabad', name: 'Nizamabad', district: 'Nizamabad', state: 'Telangana', lat: 18.6725, lon: 78.0941 },

  // Andhra Pradesh
  { id: 'visakhapatnam', name: 'Visakhapatnam', district: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185 },
  { id: 'vijayawada', name: 'Vijayawada', district: 'NTR', state: 'Andhra Pradesh', lat: 16.5062, lon: 80.6480 },
  { id: 'tirupati', name: 'Tirupati', district: 'Tirupati', state: 'Andhra Pradesh', lat: 13.6288, lon: 79.4192 },
  { id: 'guntur', name: 'Guntur', district: 'Guntur', state: 'Andhra Pradesh', lat: 16.3067, lon: 80.4365 },

  // Uttar Pradesh
  { id: 'lucknow', name: 'Lucknow', district: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462 },
  { id: 'kanpur', name: 'Kanpur', district: 'Kanpur Nagar', state: 'Uttar Pradesh', lat: 26.4499, lon: 80.3319 },
  { id: 'noida', name: 'Noida', district: 'Gautam Buddha Nagar', state: 'Uttar Pradesh', lat: 28.5355, lon: 77.3910 },
  { id: 'ghaziabad', name: 'Ghaziabad', district: 'Ghaziabad', state: 'Uttar Pradesh', lat: 28.6692, lon: 77.4538 },
  { id: 'varanasi', name: 'Varanasi', district: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lon: 82.9739 },
  { id: 'agra', name: 'Agra', district: 'Agra', state: 'Uttar Pradesh', lat: 27.1767, lon: 78.0081 },
  { id: 'prayagraj', name: 'Prayagraj', district: 'Prayagraj', state: 'Uttar Pradesh', lat: 25.4358, lon: 81.8463 },

  // Haryana
  { id: 'gurugram', name: 'Gurugram', district: 'Gurugram', state: 'Haryana', lat: 28.4595, lon: 77.0266 },
  { id: 'faridabad', name: 'Faridabad', district: 'Faridabad', state: 'Haryana', lat: 28.4089, lon: 77.3178 },
  { id: 'panipat', name: 'Panipat', district: 'Panipat', state: 'Haryana', lat: 29.3909, lon: 76.9635 },
  { id: 'ambala', name: 'Ambala', district: 'Ambala', state: 'Haryana', lat: 30.3782, lon: 76.7767 },

  // Rajasthan
  { id: 'jaipur', name: 'Jaipur', district: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873 },
  { id: 'jodhpur', name: 'Jodhpur', district: 'Jodhpur', state: 'Rajasthan', lat: 26.2389, lon: 73.0243 },
  { id: 'udaipur', name: 'Udaipur', district: 'Udaipur', state: 'Rajasthan', lat: 24.5854, lon: 73.7125 },
  { id: 'kota', name: 'Kota', district: 'Kota', state: 'Rajasthan', lat: 25.2138, lon: 75.8648 },
  { id: 'bikaner', name: 'Bikaner', district: 'Bikaner', state: 'Rajasthan', lat: 28.0229, lon: 73.3119 },

  // Gujarat
  { id: 'ahmedabad', name: 'Ahmedabad', district: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714 },
  { id: 'surat', name: 'Surat', district: 'Surat', state: 'Gujarat', lat: 21.1702, lon: 72.8311 },
  { id: 'vadodara', name: 'Vadodara', district: 'Vadodara', state: 'Gujarat', lat: 22.3072, lon: 73.1812 },
  { id: 'rajkot', name: 'Rajkot', district: 'Rajkot', state: 'Gujarat', lat: 22.3039, lon: 70.8022 },

  // Madhya Pradesh
  { id: 'bhopal', name: 'Bhopal', district: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126 },
  { id: 'indore', name: 'Indore', district: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lon: 75.8577 },
  { id: 'gwalior', name: 'Gwalior', district: 'Gwalior', state: 'Madhya Pradesh', lat: 26.2183, lon: 78.1828 },
  { id: 'jabalpur', name: 'Jabalpur', district: 'Jabalpur', state: 'Madhya Pradesh', lat: 23.1815, lon: 79.9864 },

  // Bihar
  { id: 'patna', name: 'Patna', district: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376 },
  { id: 'gaya', name: 'Gaya', district: 'Gaya', state: 'Bihar', lat: 24.7914, lon: 85.0002 },
  { id: 'muzaffarpur', name: 'Muzaffarpur', district: 'Muzaffarpur', state: 'Bihar', lat: 26.1197, lon: 85.3910 },

  // Punjab
  { id: 'ludhiana', name: 'Ludhiana', district: 'Ludhiana', state: 'Punjab', lat: 30.9010, lon: 75.8573 },
  { id: 'amritsar', name: 'Amritsar', district: 'Amritsar', state: 'Punjab', lat: 31.6340, lon: 74.8723 },
  { id: 'jalandhar', name: 'Jalandhar', district: 'Jalandhar', state: 'Punjab', lat: 31.3260, lon: 75.5762 },
  { id: 'patiala', name: 'Patiala', district: 'Patiala', state: 'Punjab', lat: 30.3398, lon: 76.3869 },

  // Kerala
  { id: 'kochi', name: 'Kochi', district: 'Ernakulam', state: 'Kerala', lat: 9.9312, lon: 76.2673 },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', district: 'Thiruvananthapuram', state: 'Kerala', lat: 8.5241, lon: 76.9366 },
  { id: 'kozhikode', name: 'Kozhikode', district: 'Kozhikode', state: 'Kerala', lat: 11.2588, lon: 75.7804 },

  // Odisha
  { id: 'bhubaneswar', name: 'Bhubaneswar', district: 'Khordha', state: 'Odisha', lat: 20.2961, lon: 85.8245 },
  { id: 'cuttack', name: 'Cuttack', district: 'Cuttack', state: 'Odisha', lat: 20.4625, lon: 85.8830 },
  { id: 'rourkela', name: 'Rourkela', district: 'Sundargarh', state: 'Odisha', lat: 22.2604, lon: 84.8536 },

  // Assam
  { id: 'guwahati', name: 'Guwahati', district: 'Kamrup Metropolitan', state: 'Assam', lat: 26.1445, lon: 91.7362 },
  { id: 'dibrugarh', name: 'Dibrugarh', district: 'Dibrugarh', state: 'Assam', lat: 27.4728, lon: 94.9120 },

  // Jharkhand
  { id: 'ranchi', name: 'Ranchi', district: 'Ranchi', state: 'Jharkhand', lat: 23.3441, lon: 85.3096 },
  { id: 'jamshedpur', name: 'Jamshedpur', district: 'East Singhbhum', state: 'Jharkhand', lat: 22.8046, lon: 86.2029 },
  { id: 'dhanbad', name: 'Dhanbad', district: 'Dhanbad', state: 'Jharkhand', lat: 23.7957, lon: 86.4304 },

  // Chhattisgarh
  { id: 'raipur', name: 'Raipur', district: 'Raipur', state: 'Chhattisgarh', lat: 21.2514, lon: 81.6296 },
  { id: 'bilaspur', name: 'Bilaspur', district: 'Bilaspur', state: 'Chhattisgarh', lat: 22.0797, lon: 82.1409 },

  // Uttarakhand
  { id: 'dehradun', name: 'Dehradun', district: 'Dehradun', state: 'Uttarakhand', lat: 30.3165, lon: 78.0322 },
  { id: 'haridwar', name: 'Haridwar', district: 'Haridwar', state: 'Uttarakhand', lat: 29.9457, lon: 78.1642 },
  { id: 'nainital', name: 'Nainital', district: 'Nainital', state: 'Uttarakhand', lat: 29.3919, lon: 79.4542 },

  // Himachal Pradesh
  { id: 'shimla', name: 'Shimla', district: 'Shimla', state: 'Himachal Pradesh', lat: 31.1048, lon: 77.1734 },
  { id: 'dharamshala', name: 'Dharamshala', district: 'Kangra', state: 'Himachal Pradesh', lat: 32.2190, lon: 76.3234 },

  // Goa
  { id: 'panaji', name: 'Panaji', district: 'North Goa', state: 'Goa', lat: 15.4909, lon: 73.8278 },
  { id: 'margao', name: 'Margao', district: 'South Goa', state: 'Goa', lat: 15.2832, lon: 73.9862 },

  // North-East States
  { id: 'itanagar', name: 'Itanagar', district: 'Papum Pare', state: 'Arunachal Pradesh', lat: 27.0844, lon: 93.6053 },
  { id: 'imphal', name: 'Imphal', district: 'Imphal West', state: 'Manipur', lat: 24.8170, lon: 93.9368 },
  { id: 'shillong', name: 'Shillong', district: 'East Khasi Hills', state: 'Meghalaya', lat: 25.5788, lon: 91.8933 },
  { id: 'aizawl', name: 'Aizawl', district: 'Aizawl', state: 'Mizoram', lat: 23.7271, lon: 92.7176 },
  { id: 'kohima', name: 'Kohima', district: 'Kohima', state: 'Nagaland', lat: 25.6751, lon: 94.1086 },
  { id: 'gangtok', name: 'Gangtok', district: 'Gangtok', state: 'Sikkim', lat: 27.3314, lon: 88.6138 },
  { id: 'agartala', name: 'Agartala', district: 'West Tripura', state: 'Tripura', lat: 23.8315, lon: 91.2868 },

  // Remaining Union Territories
  { id: 'chandigarh', name: 'Chandigarh', district: 'Chandigarh', state: 'Chandigarh', lat: 30.7333, lon: 76.7794 },
  { id: 'srinagar', name: 'Srinagar', district: 'Srinagar', state: 'Jammu & Kashmir', lat: 34.0837, lon: 74.7973 },
  { id: 'jammu', name: 'Jammu', district: 'Jammu', state: 'Jammu & Kashmir', lat: 32.7266, lon: 74.8570 },
  { id: 'leh', name: 'Leh', district: 'Leh', state: 'Ladakh', lat: 34.1526, lon: 77.5771 },
  { id: 'puducherry', name: 'Puducherry', district: 'Puducherry', state: 'Puducherry', lat: 11.9416, lon: 79.8083 },
  { id: 'port-blair', name: 'Sri Vijaya Puram (Port Blair)', district: 'South Andaman', state: 'Andaman & Nicobar Islands', lat: 11.6234, lon: 92.7265 },
  { id: 'daman', name: 'Daman', district: 'Daman', state: 'Dadra & Nagar Haveli and Daman & Diu', lat: 20.3974, lon: 72.8328 },
  { id: 'kavaratti', name: 'Kavaratti', district: 'Lakshadweep', state: 'Lakshadweep', lat: 10.5593, lon: 72.6358 },
];

export function searchLocalIndiaLocations(query: string, stateFilter?: string): IndiaLocation[] {
  const q = query.trim().toLowerCase();
  return INDIA_LOCATIONS.filter((loc) => {
    if (stateFilter && stateFilter !== 'ALL' && loc.state !== stateFilter) return false;
    if (!q) return true;
    return (
      loc.name.toLowerCase().includes(q) ||
      loc.district.toLowerCase().includes(q) ||
      loc.state.toLowerCase().includes(q)
    );
  });
}

export async function searchRemoteIndiaLocations(query: string): Promise<IndiaLocation[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=10&language=en&format=json`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    const results = Array.isArray(data?.results) ? data.results : [];
    return results
      .filter((r: any) => r.country_code === 'IN' && typeof r.latitude === 'number' && typeof r.longitude === 'number')
      .map((r: any) => ({
        id: `in-${r.id}`,
        name: r.name,
        district: r.admin2 || r.admin1 || 'India',
        state: r.admin1 || 'India',
        lat: Number(r.latitude.toFixed(4)),
        lon: Number(r.longitude.toFixed(4)),
        isCalibratedPreset: false,
      }));
  } catch {
    return [];
  }
}
