import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

export function DatePicker({ formatter }: { formatter?: (date: Date) => string }){
    const prettyPrint = formatter ?? function (date: Date){
        const [day, month, year] = date.toLocaleString('en-In', {month: 'short', day: '2-digit', year: 'numeric'}).split(' ');
        console.log(day, month, year, `${day} - ${month} - ${year}`);
        return `${day} - ${month} - ${year}`;
    }
    const [date, toggleDate] = useState<Date>(new Date());
    const [Open, toggleOpen] = useState<boolean>(false);

    return (
        <Popover open={Open} onOpenChange={toggleOpen}>
            <PopoverTrigger asChild  className="datePickerPopOver">
                <button> {prettyPrint(date)} </button>
            </PopoverTrigger>

            <PopoverContent className="datePickerPopoverContent">
                <Calendar
                className="datePickerCalendar"
                mode="single"
                selected={new Date()}
                onSelect={
                    (date) => {
                        toggleDate(date ?? new Date());
                        toggleOpen(prev => !prev)
                    }
                }
                />
            </PopoverContent>
        </Popover>
    )
}