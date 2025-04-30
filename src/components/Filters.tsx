import { useState } from "react";
import { FilterOptions } from "@/types/doctor";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
}

const Filters = ({ onFilterChange, currentFilters }: FiltersProps) => {
  const specialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic",
    "Neurologist",
    "Gynecologist",
    "Pediatrician",
    "ENT Specialist",
    "Psychiatrist",
    "Urologist",
  ];

  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Marathi",
    "Gujarati",
  ];

  const consultationModes = ["Clinic", "Video", "Hospital"];

  const availabilityOptions = ["Today", "Tomorrow", "Next 3 Days", "Next Week"];

  const experienceRanges = [
    { label: "0-5 years", value: 5 },
    { label: "5-10 years", value: 10 },
    { label: "10-15 years", value: 15 },
    { label: "15+ years", value: 20 },
  ];

  const handleSpecialtyChange = (specialty: string) => {
    if (currentFilters.specialty === specialty) {
      // If it's already selected, deselect it
      onFilterChange({ ...currentFilters, specialty: undefined });
    } else {
      onFilterChange({ ...currentFilters, specialty });
    }
  };

  const handleExperienceChange = (experience: number) => {
    if (currentFilters.experience === experience) {
      // If it's already selected, deselect it
      onFilterChange({ ...currentFilters, experience: undefined });
    } else {
      onFilterChange({ ...currentFilters, experience });
    }
  };

  const handleLanguageChange = (language: string) => {
    const currentLanguages = currentFilters.languages || [];
    let newLanguages;

    if (currentLanguages.includes(language)) {
      newLanguages = currentLanguages.filter((lang) => lang !== language);
    } else {
      newLanguages = [...currentLanguages, language];
    }

    // Only set languages if there are any selected, otherwise set to undefined
    onFilterChange({
      ...currentFilters,
      languages: newLanguages.length > 0 ? newLanguages : undefined,
    });
  };

  const handleConsultationModeChange = (mode: string) => {
    if (currentFilters.consultationMode === mode) {
      // If it's already selected, deselect it
      onFilterChange({ ...currentFilters, consultationMode: undefined });
    } else {
      onFilterChange({ ...currentFilters, consultationMode: mode });
    }
  };

  const handleAvailabilityChange = (availability: string) => {
    if (currentFilters.availability === availability) {
      // If it's already selected, deselect it
      onFilterChange({ ...currentFilters, availability: undefined });
    } else {
      onFilterChange({ ...currentFilters, availability });
    }
  };

  const handleSortChange = (sortBy: string) => {
    onFilterChange({ ...currentFilters, sortBy });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-apollo-blue">Filters</h2>

      <Accordion
        type="multiple"
        defaultValue={["specialty", "experience", "consultationMode"]}
      >
        {/* Specialty Filter */}
        <AccordionItem value="specialty">
          <AccordionTrigger className="text-base font-medium">
            Specialty
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center space-x-2">
                  <Checkbox
                    id={`specialty-${specialty}`}
                    checked={currentFilters.specialty === specialty}
                    onCheckedChange={() => handleSpecialtyChange(specialty)}
                  />
                  <Label
                    htmlFor={`specialty-${specialty}`}
                    className="cursor-pointer text-sm"
                  >
                    {specialty}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Experience Filter */}
        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-medium">
            Experience
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {experienceRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`exp-${range.value}`}
                    checked={currentFilters.experience === range.value}
                    onCheckedChange={() => handleExperienceChange(range.value)}
                  />
                  <Label
                    htmlFor={`exp-${range.value}`}
                    className="cursor-pointer text-sm"
                  >
                    {range.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Consultation Mode Filter */}
        <AccordionItem value="consultationMode">
          <AccordionTrigger className="text-base font-medium">
            Consultation Mode
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {consultationModes.map((mode) => (
                <div key={mode} className="flex items-center space-x-2">
                  <Checkbox
                    id={`mode-${mode}`}
                    checked={currentFilters.consultationMode === mode}
                    onCheckedChange={() => handleConsultationModeChange(mode)}
                  />
                  <Label
                    htmlFor={`mode-${mode}`}
                    className="cursor-pointer text-sm"
                  >
                    {mode}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability Filter */}
        <AccordionItem value="availability">
          <AccordionTrigger className="text-base font-medium">
            Availability
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {availabilityOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`avail-${option}`}
                    checked={currentFilters.availability === option}
                    onCheckedChange={() => handleAvailabilityChange(option)}
                  />
                  <Label
                    htmlFor={`avail-${option}`}
                    className="cursor-pointer text-sm"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Languages Filter */}
        <AccordionItem value="languages">
          <AccordionTrigger className="text-base font-medium">
            Languages
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {languages.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox
                    id={`lang-${language}`}
                    checked={currentFilters.languages?.includes(language)}
                    onCheckedChange={() => handleLanguageChange(language)}
                  />
                  <Label
                    htmlFor={`lang-${language}`}
                    className="cursor-pointer text-sm"
                  >
                    {language}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Sort By */}
        <AccordionItem value="sort">
          <AccordionTrigger className="text-base font-medium">
            Sort By
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={currentFilters.sortBy}
              onValueChange={handleSortChange}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relevance" id="sort-relevance" />
                <Label
                  htmlFor="sort-relevance"
                  className="cursor-pointer text-sm"
                >
                  Relevance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="experience" id="sort-experience" />
                <Label
                  htmlFor="sort-experience"
                  className="cursor-pointer text-sm"
                >
                  Experience
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fee-low-to-high" id="sort-fee-low" />
                <Label
                  htmlFor="sort-fee-low"
                  className="cursor-pointer text-sm"
                >
                  Fee: Low to High
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fee-high-to-low" id="sort-fee-high" />
                <Label
                  htmlFor="sort-fee-high"
                  className="cursor-pointer text-sm"
                >
                  Fee: High to Low
                </Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
