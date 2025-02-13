import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface Props{
  searchQuery:string;
  setSearchQuery: (query: string) => void;
}
export const SearchBar = ({searchQuery,setSearchQuery}:Props) =>(
  <div className="max-w-md mx-auto mb-6">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        placeholder="Search backgrounds..."
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  </div>
)