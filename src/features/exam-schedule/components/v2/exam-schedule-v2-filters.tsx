"use client";

import {
  Search,
  GraduationCap,
  BookOpenText,
  Library,
  ArrowDownUp,
} from "lucide-react";
import type { V2ExamScheduleType } from "./exam-schedule-v2-page";
import type { ExamScheduleDateSortValue } from "../../utils/filter-exam-schedule";
import { examScheduleDateSortOptions } from "../../utils/filter-exam-schedule";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TYPES = [
  { value: "Lịch thi", icon: GraduationCap },
  { value: "Thông báo ôn thi", icon: BookOpenText },
  { value: "Kế hoạch năm", icon: Library },
] as const;

type ExamScheduleV2FiltersProps = {
  query: string;
  onQueryChange: (q: string) => void;
  type: V2ExamScheduleType;
  onTypeChange: (t: V2ExamScheduleType) => void;
  dateSort: ExamScheduleDateSortValue;
  onDateSortChange: (v: ExamScheduleDateSortValue) => void;
};

export function ExamScheduleV2Filters({
  query,
  onQueryChange,
  type,
  onTypeChange,
  dateSort,
  onDateSortChange,
}: ExamScheduleV2FiltersProps) {
  return (
    <div className="relative z-10 flex w-full flex-col items-center overflow-hidden rounded-2xl bg-linear-to-t from-zinc-50 to-zinc-200/40 p-4 backdrop-blur-xl md:p-8">
      <div className="z-10 flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-6">
        {/* Cột 1: Thanh tìm kiếm */}
        <div className="flex w-full flex-[2] flex-col space-y-2">
          <Label className="text-muted-foreground ml-1 text-sm font-medium">
            Thông tin tìm kiếm
          </Label>
          <div className="relative w-full">
            <Search
              size={20}
              className="text-primary absolute top-1/2 left-4 -translate-y-1/2"
            />
            <Input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Tìm kiếm lịch thi, thông báo, kế hoạch..."
              className="focus-visible:ring-primary/20 h-[52px] w-full rounded-xl border-none bg-white pr-4 pl-[44px] text-base font-medium text-zinc-900 shadow-sm ring-1 ring-black/5 transition-all placeholder:text-zinc-400 focus-visible:ring-2"
            />
          </div>
        </div>

        {/* Cột 2: Select Danh mục */}
        <div className="flex w-full flex-1 flex-col space-y-2">
          <Label className="text-muted-foreground ml-1 text-sm font-medium">
            Danh mục
          </Label>
          <Select
            value={type}
            onValueChange={(val) => onTypeChange(val as V2ExamScheduleType)}
          >
            <SelectTrigger className="focus:ring-primary/20 mb-0 !h-[52px] w-full rounded-xl border-none bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm ring-1 ring-black/5 hover:bg-zinc-50 focus:ring-2">
              <SelectValue placeholder="Chọn danh mục">
                <div className="flex items-center gap-2">
                  {(() => {
                    const selectedType = TYPES.find((t) => t.value === type);
                    const Icon = selectedType?.icon || GraduationCap;
                    return <Icon size={20} className="text-primary" />;
                  })()}
                  <span className="truncate">{type}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="rounded-xl" align="start">
              <SelectGroup>
                {TYPES.map((t) => {
                  return (
                    <SelectItem
                      key={t.value}
                      value={t.value}
                      className="cursor-pointer rounded-lg py-3 text-sm font-medium"
                    >
                      {t.value}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Cột 3: Sắp xếp */}
        <div className="flex w-full flex-1 flex-col space-y-2">
          <Label className="text-muted-foreground ml-1 text-sm font-medium">
            Sắp xếp
          </Label>
          <Select
            value={dateSort}
            onValueChange={(v) =>
              onDateSortChange(v as ExamScheduleDateSortValue)
            }
          >
            <SelectTrigger className="focus:ring-primary/20 mb-0 !h-[52px] w-full rounded-xl border-none bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm ring-1 ring-black/5 hover:bg-zinc-50 focus:ring-2">
              <SelectValue placeholder="Sắp xếp">
                <div className="flex items-center gap-2">
                  <ArrowDownUp size={20} className="text-primary" />
                  <span className="truncate">
                    {examScheduleDateSortOptions.find(
                      (opt) => opt.value === dateSort
                    )?.label ?? "Sắp xếp"}
                  </span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="rounded-xl" align="end">
              <SelectGroup>
                {examScheduleDateSortOptions.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    className="cursor-pointer rounded-lg py-3 text-sm font-medium"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
