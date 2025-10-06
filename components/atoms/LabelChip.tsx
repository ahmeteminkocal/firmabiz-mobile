import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/utils';
import Card from './card';

export default function LabelChip({ label, color, backgroundColor}: { label: string, color: string, backgroundColor: string }) {
    const backgroundColorClass = `bg-[${backgroundColor}]`;
    const colorClass = `text-[${color}]`;
    
    return (
        <Card
            className={cn('flex-row justify-center items-center border-0 p-1')} style={{ backgroundColor: backgroundColor }}> 
            <Text className={cn('text-[8px] font-bold')} style={{color: color}}>{label}</Text>  
        </Card>
    );
}