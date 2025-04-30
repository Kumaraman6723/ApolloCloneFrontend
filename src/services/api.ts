import { Doctor, DoctorsResponse, FilterOptions } from "@/types/doctor";

const API_URL = "https://apolloclonebackend.onrender.com/api";

export async function fetchDoctors(
  filters: FilterOptions = {}
): Promise<DoctorsResponse> {
  const queryParams = new URLSearchParams();

  // Add filters to query params
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        // Handle array values like languages
        value.forEach((v) => queryParams.append(key, v));
      } else {
        queryParams.append(key, value.toString());
      }
    }
  });

  const response = await fetch(`${API_URL}/doctors?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }

  return response.json();
}

export async function addDoctor(
  doctorData: Omit<Doctor, "_id">
): Promise<Doctor> {
  const response = await fetch(`${API_URL}/doctors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctorData),
  });

  if (!response.ok) {
    throw new Error("Failed to add doctor");
  }

  return response.json();
}
