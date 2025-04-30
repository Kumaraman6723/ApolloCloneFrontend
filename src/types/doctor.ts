
export interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: number;
  languages: string[];
  location: string;
  clinicName: string;
  fee: number;
  rating: number;
  reviewCount: number;
  availability: {
    today: boolean;
    tomorrow: boolean;
    nextAvailable: string;
  };
  consultationModes: ('Clinic' | 'Video' | 'Hospital')[];
  image: string;
  about: string;
}

export interface DoctorsResponse {
  doctors: Doctor[];
  totalDoctors: number;
  totalPages: number;
  currentPage: number;
}

export interface FilterOptions {
  specialty?: string;
  experience?: number;
  languages?: string[];
  consultationMode?: string;
  availability?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
}
