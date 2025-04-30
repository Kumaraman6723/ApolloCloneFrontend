
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-apollo-blue font-bold text-2xl">HealthCare</h1>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 mx-10">
            <div className="relative w-full max-w-xl">
              <Input
                type="text"
                placeholder="Search for doctors, specialties, clinics..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-gray-600 hover:text-apollo-blue">
                  Consult
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-apollo-blue">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-apollo-blue">
                  Diagnostics
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          
          {/* Login Button */}
          <div className="hidden md:block ml-4">
            <Button className="bg-apollo-blue hover:bg-apollo-darkBlue">Login / Signup</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
