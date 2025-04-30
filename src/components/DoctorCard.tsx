
import { Doctor } from '@/types/doctor';
import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Doctor Image and Rating */}
        <div className="flex flex-col items-center w-full md:w-1/4 lg:w-1/5">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
            <img 
              src={doctor.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"} 
              alt={`Dr. ${doctor.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <span className="text-green-600 font-semibold mr-1">{doctor.rating}</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">({doctor.reviewCount})</span>
          </div>
        </div>
        
        {/* Doctor Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-apollo-blue">{doctor.name}</h3>
              <p className="text-gray-700">{doctor.specialty}</p>
              <p className="text-gray-600 text-sm">{doctor.qualification}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-500 text-sm">{doctor.experience} years experience</p>
              <p className="text-apollo-blue font-semibold">₹{doctor.fee} Consultation</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="mb-3">
            <p className="text-gray-700 text-sm">{doctor.clinicName}, {doctor.location}</p>
          </div>
          
          {/* Languages */}
          <div className="mb-3">
            <p className="text-gray-600 text-sm">
              <span className="font-medium">Languages:</span> {doctor.languages.join(", ")}
            </p>
          </div>
          
          {/* Consultation Modes */}
          <div className="flex flex-wrap gap-2 mb-4">
            {doctor.consultationModes.map(mode => (
              <Badge key={mode} variant="outline" className="text-xs py-1 px-2 bg-apollo-lightBlue text-apollo-blue border-apollo-blue">
                {mode} Consultation
              </Badge>
            ))}
          </div>
          
          {/* Availability and Booking */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 pt-3 border-t">
            <div className="mb-3 sm:mb-0">
              {doctor.availability.today ? (
                <span className="text-apollo-accent flex items-center text-sm">
                  <CheckSquare className="w-4 h-4 mr-1" />
                  Available Today
                </span>
              ) : doctor.availability.tomorrow ? (
                <span className="text-blue-500 flex items-center text-sm">
                  <CheckSquare className="w-4 h-4 mr-1" />
                  Available Tomorrow
                </span>
              ) : (
                <span className="text-gray-500 text-sm">
                  Next Available: {doctor.availability.nextAvailable}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="border-apollo-blue text-apollo-blue hover:bg-apollo-lightBlue">
                View Profile
              </Button>
              <Button size="sm" className="bg-apollo-blue hover:bg-apollo-darkBlue">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
