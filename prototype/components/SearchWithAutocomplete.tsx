import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface SearchWithAutocompleteProps {
  onSearch?: (query: string) => void;
}

export function SearchWithAutocomplete({ onSearch }: SearchWithAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'college internship',
    'student internship',
    'university internship',
    'summer internship',
    'virtual internship',
    'part-time internship',
    'online internship for students'
  ];

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch?.(suggestion);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl">
      <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border shadow-sm">
        <Search className="h-5 w-5 text-gray-400" />
        <Input 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="college internship" 
          className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {showSuggestions && query && filteredSuggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 p-2 shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </Card>
      )}
    </div>
  );
}
