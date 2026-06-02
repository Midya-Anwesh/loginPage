import type { dashboardData } from "../dummyData/matchDetInfo";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function CustomToggleGroup({ filters }: { filters: typeof dashboardData['ratios'][0]['activeFilter'] }){
    return (
        <ToggleGroup defaultValue={filters[0]} type="single" className="toggleStat" spacing={0}>
        {
            filters.map(
                filter => (
                    <ToggleGroupItem key={filter} value={filter as string} className="toggle"> {filter} </ToggleGroupItem>
                )
            )
        }
        </ToggleGroup>
    )
}