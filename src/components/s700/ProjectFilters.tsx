
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ProjectType, TechStack, ImpactArea } from '@/pages/S700';

// Filter option definitions
const projectTypes: { value: ProjectType; label: string }[] = [
  { value: 'web', label: 'Web Applications' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI/ML Projects' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'iot', label: 'IoT Solutions' },
  { value: 'research', label: 'Research Papers' },
];

const techStacks: { value: TechStack; label: string }[] = [
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'tensorflow', label: 'TensorFlow' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'aws', label: 'AWS' },
];

const impactAreas: { value: ImpactArea; label: string }[] = [
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'environment', label: 'Environment' },
  { value: 'social', label: 'Social Impact' },
  { value: 'finance', label: 'Finance' },
];

const institutions: { value: string; label: string }[] = [
  { value: 'MIT', label: 'MIT' },
  { value: 'Stanford', label: 'Stanford' },
  { value: 'Berkeley', label: 'UC Berkeley' },
  { value: 'Harvard', label: 'Harvard' },
  { value: 'Cornell', label: 'Cornell' },
  { value: 'Uniford', label: 'Uniford' },
];

interface ProjectFiltersProps {
  activeFilters: {
    projectType: ProjectType[];
    techStack: TechStack[];
    impactAreas: ImpactArea[];
    institution: string[];
  };
  onFilterChange: (filterType: keyof ProjectFiltersProps['activeFilters'], values: any[]) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeFilters,
  onFilterChange,
}) => {
  const toggleFilter = (
    filterType: keyof ProjectFiltersProps['activeFilters'],
    value: string
  ) => {
    const isActive = activeFilters[filterType].includes(value as never);
    let newValues;
    
    if (isActive) {
      newValues = activeFilters[filterType].filter(item => item !== value);
    } else {
      newValues = [...activeFilters[filterType], value as never];
    }
    
    onFilterChange(filterType, newValues);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-6 text-gray-900">Filters</h2>

      {/* Project Type Filter */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-900 mb-3">Project Type</h3>
        <div className="space-y-2">
          {projectTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type.value}`}
                checked={activeFilters.projectType.includes(type.value)}
                onCheckedChange={() => toggleFilter('projectType', type.value)}
              />
              <label
                htmlFor={`type-${type.value}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Filter */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-900 mb-3">Tech Stack</h3>
        <div className="space-y-2">
          {techStacks.map((tech) => (
            <div key={tech.value} className="flex items-center space-x-2">
              <Checkbox
                id={`tech-${tech.value}`}
                checked={activeFilters.techStack.includes(tech.value)}
                onCheckedChange={() => toggleFilter('techStack', tech.value)}
              />
              <label
                htmlFor={`tech-${tech.value}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {tech.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Areas Filter */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-900 mb-3">Impact</h3>
        <div className="space-y-2">
          {impactAreas.map((area) => (
            <div key={area.value} className="flex items-center space-x-2">
              <Checkbox
                id={`area-${area.value}`}
                checked={activeFilters.impactAreas.includes(area.value)}
                onCheckedChange={() => toggleFilter('impactAreas', area.value)}
              />
              <label
                htmlFor={`area-${area.value}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {area.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Institution Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Institution</h3>
        <div className="space-y-2">
          {institutions.map((institution) => (
            <div key={institution.value} className="flex items-center space-x-2">
              <Checkbox
                id={`institution-${institution.value}`}
                checked={activeFilters.institution.includes(institution.value)}
                onCheckedChange={() => toggleFilter('institution', institution.value)}
              />
              <label
                htmlFor={`institution-${institution.value}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {institution.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
