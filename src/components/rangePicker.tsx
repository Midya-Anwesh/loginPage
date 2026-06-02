import { useState } from "react"
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import '../styles/datePicker.css';

type datePickerPropType = {
    dateFormatter?: (date: Date) => string
}

export function RangePicker({ dateFormatter }: datePickerPropType){

    const [dateRange, toggleDateRange] = useState({
        from: new Date(),
        to: new Date()
    });

    const formatDate = (date: Date) => {
        const s =  date.toLocaleDateString('en-IN', {month: 'short', day: '2-digit'}).split(' ');
        return `${s[1]} ${s[0]}`;
    }

    const formatter = dateFormatter ?? formatDate;

    return (
        <Popover>
            <PopoverTrigger asChild className="datePickerPopOver">
                <button> { `${formatter(dateRange.from)} -  ${formatter(dateRange.to)}`} </button> 
            </PopoverTrigger>

            <PopoverContent className="datePickerPopoverContent">
                <Calendar 
                mode={  "range" }
                defaultMonth={dateRange.from}
                selected={dateRange}
                numberOfMonths={ 2 }

                onSelect={(range) => 
                    {
                        toggleDateRange({
                            from: range?.from ?? new Date(),
                            to: range?.to ?? new Date()
                        });
                    }
                }
                className="datePickerCalendar"
                />
            </PopoverContent>
        </Popover>
    )
}