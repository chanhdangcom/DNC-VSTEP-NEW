"use client";

import { ArrowDownAZ, Search } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";

const TYPES: V2ExamScheduleType[] = [
  "Lịch thi",
  "Thông báo ôn thi",
  "Kế hoạch năm",
];

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
    <div className="flex w-full flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      {/* Left Side: Type Toggle (Tabs) */}
      <Tabs
        value={type}
        onValueChange={(val) => onTypeChange(val as V2ExamScheduleType)}
        className="w-full max-w-full shrink-0 xl:w-auto"
      >
        <TabsList className="h-11 w-full [scrollbar-width:none] justify-start overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] sm:w-auto [&::-webkit-scrollbar]:hidden">
          {TYPES.map((t) => (
            <TabsTrigger
              key={t}
              value={t}
              className="data-active:text-primary hover:text-primary shrink-0 px-5 text-sm"
            >
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Right Side: Search Input & Sort Select */}
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center xl:w-auto">
        <InputGroup className="w-full sm:w-[300px] lg:w-[400px]">
          <InputGroupInput
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Tìm kiếm kỳ thi, khóa ôn..."
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <Search size={16} strokeWidth={2} className="text-primary" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <Select
          value={dateSort}
          onValueChange={(v) =>
            onDateSortChange(v as ExamScheduleDateSortValue)
          }
        >
          <SelectTrigger className="w-full sm:w-48">
            <ArrowDownAZ className="text-primary mr-2" size={16} />
            <SelectValue placeholder="Lọc theo ngày...">
              {examScheduleDateSortOptions.find(opt => opt.value === dateSort)?.label ?? "Lọc theo ngày..."}
            </SelectValue>
          </SelectTrigger>

          <SelectContent className="">
            <SelectGroup>
              {examScheduleDateSortOptions.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="rounded-lg"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
