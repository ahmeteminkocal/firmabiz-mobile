import { Text } from '@/components/atoms/text';
import { THEME } from "@/lib/theme";
import { TriggerRef } from "@rn-primitives/dropdown-menu";
import { useRef } from "react";
import { Icon } from "../atoms/icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";

const OPTIONS = [
    {
        title: 'All',
        action: () => {}
    },
    {
        title: 'Deposit only',
        action: () => {}
    },
    {
        title: 'Withdrawal only',
        action: () => {}
    }
]

export function FileDownloadButton() {

    const menuRef = useRef<TriggerRef>(null);
    return (
      <DropdownMenu>
          <DropdownMenuTrigger ref={menuRef}>
            <Icon name='fileDownload' width={24} color={THEME.foreground} />
          </DropdownMenuTrigger> 
          <DropdownMenuContent align="end" className="border border-border rounded-[6px] mt-1 gap-1 p-2">
            {OPTIONS.map((option) => (
                <DropdownMenuItem 
                    closeOnPress={false}
                    key={option.title} className="active:bg-splash" onPress={() => {
                        option.action();
                        menuRef.current?.close();
                    }}>
                    <Text>{option.title}</Text>
                </DropdownMenuItem>
            ))}
          </DropdownMenuContent> 
        </DropdownMenu>
    )
}

export default FileDownloadButton
