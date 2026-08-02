"use client";

import * as React from "react";
import { MagnifyingGlass, Keyboard } from "@phosphor-icons/react/dist/ssr";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function GlobalSearchUI() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Ctrl+F or Cmd+F for Command Palette
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleCustomEvent = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-global-search", handleCustomEvent);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-global-search", handleCustomEvent);
    };
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Tìm kiếm tài liệu, khóa học, thông tin VSTEP..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
            <CommandGroup heading="Truy cập nhanh">
              <CommandItem>
                <MagnifyingGlass className="mr-2 size-4" />
                <span>Giới thiệu chứng chỉ VSTEP</span>
              </CommandItem>
              <CommandItem>
                <MagnifyingGlass className="mr-2 size-4" />
                <span>Lịch thi đánh giá năng lực 2026</span>
              </CommandItem>
              <CommandItem>
                <MagnifyingGlass className="mr-2 size-4" />
                <span>Tài liệu ôn thi VSTEP</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Gợi ý tính năng">
              <CommandItem>
                <Keyboard className="mr-2 size-4" />
                <span>Chat với trợ lý AI</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
