import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";
import Pagination from "@/components/Pagination";
import { Doctor, DoctorsResponse, FilterOptions } from "@/types/doctor";
import { fetchDoctors } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

const ITEMS_PER_PAGE = 10;

const Index = () => {
  const { toast } = useToast();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({
    page: 1,
    limit: ITEMS_PER_PAGE,
    specialty: "General Physician",
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters({ ...newFilters, page: 1 });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setFilters({ ...filters, page });
  };

  useEffect(() => {
    const getDoctors = async () => {
      setLoading(true);
      try {
        const data = await fetchDoctors(filters);
        setDoctors(data.doctors);
        setTotalDoctors(data.totalDoctors);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast({
          title: "Error",
          description: "Failed to fetch doctors. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    getDoctors();
  }, [filters, toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="flex flex-wrap items-center">
            <li>
              <a href="/" className="text-gray-500 hover:text-apollo-blue">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li>
              <a
                href="/specialties"
                className="text-gray-500 hover:text-apollo-blue"
              >
                Specialties
              </a>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="font-medium text-apollo-blue">General Physician</li>
          </ol>
        </nav>

        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            General Physician in Chennai
          </h1>
          <p className="text-gray-600 mt-1">
            Book appointments with the best General Physicians
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="block md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="w-full justify-between"
          >
            Filters
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isMobileFilterOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside
            className={`${
              isMobileFilterOpen ? "block" : "hidden"
            } md:block md:w-1/4 lg:w-1/5`}
          >
            <Filters
              onFilterChange={handleFilterChange}
              currentFilters={filters}
            />
          </aside>

          {/* Doctors Listing */}
          <div className="flex-1">
            {/* Results info */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                {loading
                  ? "Loading..."
                  : `Showing ${doctors.length} of ${totalDoctors} doctors`}
              </p>
            </div>

            {/* Doctor Cards */}
            <div className="space-y-4">
              {loading ? (
                // Skeleton loader
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex flex-col items-center w-full md:w-1/4 lg:w-1/5">
                        <Skeleton className="w-32 h-32 rounded-full" />
                        <Skeleton className="h-5 w-20 mt-2" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <Skeleton className="h-6 w-40 mb-2" />
                            <Skeleton className="h-4 w-32 mb-1" />
                            <Skeleton className="h-4 w-48" />
                          </div>
                          <div>
                            <Skeleton className="h-4 w-24 mb-1" />
                            <Skeleton className="h-5 w-28" />
                          </div>
                        </div>
                        <Skeleton className="h-4 w-full max-w-md mb-3" />
                        <Skeleton className="h-4 w-full max-w-sm mb-3" />
                        <div className="flex gap-2 mb-4">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-24" />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 border-t">
                          <Skeleton className="h-5 w-32 mb-3 sm:mb-0" />
                          <div className="flex gap-2">
                            <Skeleton className="h-9 w-24" />
                            <Skeleton className="h-9 w-32" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-700">
                    No Doctors Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your filters to find more doctors
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {!loading && doctors.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Doctor Finder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
