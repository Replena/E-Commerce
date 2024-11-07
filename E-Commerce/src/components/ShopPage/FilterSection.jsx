import React from "react";
import { LayoutGrid, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const FilterSection = ({
  totalItems,
  displayedItemsCount,
  viewMode,
  setViewMode,
  sortOption,
  onSortChange,
  searchText,
  onSearchChange,
  onFilterClick,
}) => {
  return (
    <div className="container flex justify-between items-center mb-6">
      <div className="text-sm text-gray-600">
        Showing {displayedItemsCount} of {totalItems} results
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Views:</span>
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Select value={sortOption} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price:asc">Price: Low to High</SelectItem>
            <SelectItem value="price:desc">Price: High to Low</SelectItem>
            <SelectItem value="rating:asc">Rating: Low to High</SelectItem>
            <SelectItem value="rating:desc">Rating: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="Filter products..."
          value={searchText}
          onChange={onSearchChange}
          className="max-w-[200px]"
        />
        <Button
          className="bg-secondary hover:bg-secondary/90 text-white"
          onClick={onFilterClick}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
