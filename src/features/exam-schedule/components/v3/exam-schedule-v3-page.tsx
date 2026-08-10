"use client";

import { useMemo } from "react";
import { format, isToday } from "date-fns";
import { cn } from "@/lib/utils";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import { examSchedulePageItems } from "../../exam-schedule-page-data";
import { ExamScheduleItemCard } from "../exam-schedule-item-card";
import {
  FullCalendar,
  FullCalendarCurrentDate,
  FullCalendarMonthView,
  FullCalendarNextTrigger,
  FullCalendarPrevTrigger,
  FullCalendarTodayTrigger,
  FullCalendarViewTrigger,
  FullCalendarYearView,
  type FullCalendarEvent,
} from "@/components/ui/full-calendar";

type ExamScheduleV3PageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function ExamScheduleV3Page({
  banner,
  breadcrumbs,
}: ExamScheduleV3PageProps) {
  const events = useMemo<FullCalendarEvent[]>(() => {
    return examSchedulePageItems.map((item) => {
      const [day, month, year] = item.date.split(".").map(Number);
      const dateObj = new Date(year, month - 1, day);
      
      let color: FullCalendarEvent["color"] = "default";
      if (item.label === "Lịch thi") {
        color = "blue";
      } else if (item.label === "Thông báo ôn thi") {
        color = "green";
      } else if (item.label === "Kế hoạch năm") {
        color = "purple";
      }

      return {
        id: item.id,
        start: dateObj,
        end: dateObj,
        title: item.title,
        color,
      };
    });
  }, []);

  return (
    <PageHubShell
      banner={banner}
      breadcrumbs={breadcrumbs}
    >
      <div className="mx-auto flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Tổng quan Lịch thi & Ôn luyện
          </h1>
          <p className="text-zinc-500">
            Xem kế hoạch tổ chức thi VSTEP và lịch khai giảng các lớp ôn tập theo từng tháng trong năm. 
            Nhấn vào các ngày có đánh dấu để xem chi tiết thông báo.
          </p>
          
          <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium text-zinc-600">
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-blue-500"></span>
              Lịch thi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-green-500"></span>
              Thông báo ôn thi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-purple-500"></span>
              Kế hoạch năm
            </span>
          </div>
        </div>

        <FullCalendar defaultView="year" events={events} className="min-h-[80vh]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <FullCalendarCurrentDate />
            <div className="flex items-center space-x-2">
              <div className="flex items-center rounded-md bg-zinc-100 p-1">
                <FullCalendarViewTrigger view="year">
                  Năm
                </FullCalendarViewTrigger>
                <FullCalendarViewTrigger view="month">
                  Tháng
                </FullCalendarViewTrigger>
              </div>
              <div className="flex items-center gap-1">
                <FullCalendarPrevTrigger />
                <FullCalendarTodayTrigger>
                  Hôm nay
                </FullCalendarTodayTrigger>
                <FullCalendarNextTrigger />
              </div>
            </div>
          </div>
          
          <FullCalendarYearView
            hideDays={true}
            renderMonthFooter={({ events }) => {
              const event = events[0];
              const originalItem = examSchedulePageItems.find(
                (item) => item.id === event?.id
              );

              return (
                <div className="mt-2 w-full">
                  {originalItem ? (
                    <ExamScheduleItemCard item={originalItem} />
                  ) : (
                    <div className="flex h-32 w-full items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-2 shadow-sm">
                      <span className="text-[0.875rem] font-medium text-zinc-400">
                        Không có sự kiện
                      </span>
                    </div>
                  )}
                </div>
              );
            }}
          />
          <FullCalendarMonthView />
        </FullCalendar>
      </div>
    </PageHubShell>
  );
}
