"use client";

import {
  addDays,
  addMonths,
  addYears,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  setMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
  type Locale,
} from "date-fns";
import { vi } from "date-fns/locale";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type FullCalendarView = "month" | "year";

export type FullCalendarEvent = {
  id: string;
  start: Date;
  end: Date;
  title: string;
  color?: "default" | "blue" | "green" | "pink" | "purple";
};

type FullCalendarContextValue = {
  view: FullCalendarView;
  setView: (view: FullCalendarView) => void;
  date: Date;
  setDate: (date: Date) => void;
  events: FullCalendarEvent[];
  locale: Locale;
  today: Date;
  weekStartsOn: 0 | 1;
};

const FullCalendarContext = createContext<FullCalendarContextValue | null>(
  null
);

export function useFullCalendar() {
  const context = useContext(FullCalendarContext);
  if (!context) {
    throw new Error("useFullCalendar must be used within FullCalendar");
  }
  return context;
}

type FullCalendarProps = {
  children: ReactNode;
  defaultDate?: Date;
  defaultView?: FullCalendarView;
  events?: FullCalendarEvent[];
  locale?: Locale;
  weekStartsOn?: 0 | 1;
  className?: string;
};

export function FullCalendar({
  children,
  defaultDate = new Date(),
  defaultView = "month",
  events = [],
  locale = vi,
  weekStartsOn = 1,
  className,
}: FullCalendarProps) {
  const [view, setView] = useState<FullCalendarView>(defaultView);
  const [date, setDate] = useState(defaultDate);
  const today = useMemo(() => new Date(), []);

  return (
    <FullCalendarContext.Provider
      value={{
        view,
        setView,
        date,
        setDate,
        events,
        locale,
        today,
        weekStartsOn,
      }}
    >
      <div className={cn("flex flex-col", className)}>{children}</div>
    </FullCalendarContext.Provider>
  );
}

export const FullCalendarViewTrigger = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { view: FullCalendarView }
>(function FullCalendarViewTrigger(
  { view, className, children, onClick, ...props },
  ref
) {
  const { view: currentView, setView } = useFullCalendar();
  const isCurrent = currentView === view;

  return (
    <button
      ref={ref}
      type="button"
      aria-current={isCurrent ? "true" : undefined}
      className={cn(
        "rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-all",
        "hover:text-zinc-900",
        "aria-current:bg-white aria-current:text-zinc-950 aria-current:shadow-sm aria-current:ring-1 aria-current:ring-black/5",
        className
      )}
      onClick={(event) => {
        setView(view);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
});

export const FullCalendarPrevTrigger = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function FullCalendarPrevTrigger({ onClick, className, ...props }, ref) {
  const { date, setDate, view } = useFullCalendar();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950",
        className
      )}
      onClick={(event) => {
        setDate(view === "year" ? subYears(date, 1) : subMonths(date, 1));
        onClick?.(event);
      }}
      {...props}
    />
  );
});

export const FullCalendarNextTrigger = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function FullCalendarNextTrigger({ onClick, className, ...props }, ref) {
  const { date, setDate, view } = useFullCalendar();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950",
        className
      )}
      onClick={(event) => {
        setDate(view === "year" ? addYears(date, 1) : addMonths(date, 1));
        onClick?.(event);
      }}
      {...props}
    />
  );
});

export const FullCalendarTodayTrigger = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function FullCalendarTodayTrigger({ onClick, className, ...props }, ref) {
  const { setDate, today } = useFullCalendar();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100",
        className
      )}
      onClick={(event) => {
        setDate(today);
        onClick?.(event);
      }}
      {...props}
    />
  );
});

export function FullCalendarCurrentDate({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  const { date, view, locale } = useFullCalendar();

  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl",
        className
      )}
      {...props}
    >
      {view === "year"
        ? format(date, "yyyy", { locale })
        : format(date, "MMMM yyyy", { locale })}
    </h2>
  );
}

function getDaysInMonth(date: Date, weekStartsOn: 0 | 1) {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn });
  return Array.from({ length: 42 }, (_, index) => addDays(start, index));
}

function generateWeekdays(
  locale: Locale,
  weekStartsOn: 0 | 1,
  pattern: string = "EEE"
) {
  const start = startOfWeek(new Date(), { weekStartsOn });
  return Array.from({ length: 7 }, (_, index) =>
    format(addDays(start, index), pattern, { locale })
  );
}

type FullCalendarMonthViewProps = {
  className?: string;
  renderDay?: (args: {
    day: Date;
    events: FullCalendarEvent[];
    inCurrentMonth: boolean;
  }) => ReactNode;
  onDayClick?: (day: Date, events: FullCalendarEvent[]) => void;
};

export function FullCalendarMonthView({
  className,
  renderDay,
  onDayClick,
}: FullCalendarMonthViewProps) {
  const { date, view, events, locale, weekStartsOn } = useFullCalendar();
  const monthDates = useMemo(
    () => getDaysInMonth(date, weekStartsOn),
    [date, weekStartsOn]
  );
  const weekDays = useMemo(
    () => generateWeekdays(locale, weekStartsOn),
    [locale, weekStartsOn]
  );

  if (view !== "month") return null;

  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      <div className="grid grid-cols-7 border-b border-zinc-200">
        {weekDays.map((day) => (
          <div
            key={day}
            className="px-1 py-1.5 text-center text-[0.7rem] font-medium text-zinc-500 sm:text-xs"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-7 grid-rows-6 border-l border-zinc-200">
        {monthDates.map((day) => {
          const dayEvents = events.filter((event) =>
            isSameDay(event.start, day)
          );
          const inCurrentMonth = isSameMonth(day, date);

          const hasEvents = dayEvents.length > 0;

          return (
            <div
              key={day.toISOString()}
              onClick={
                onDayClick ? () => onDayClick(day, dayEvents) : undefined
              }
              className={cn(
                "relative flex min-h-0 flex-col gap-1 border-r border-b border-zinc-200 p-1 text-left transition-colors sm:p-1.5",
                !inCurrentMonth && "bg-zinc-50/40",
                onDayClick && !hasEvents && "cursor-pointer hover:bg-zinc-50"
              )}
            >
              {renderDay ? (
                renderDay({ day, events: dayEvents, inCurrentMonth })
              ) : (
                <>
                  <span
                    className={cn(
                      "ml-auto inline-flex size-7 items-center justify-center text-sm",
                      !inCurrentMonth && "text-zinc-300",
                      inCurrentMonth && "text-zinc-800",
                      isToday(day) &&
                        "bg-primary rounded-full font-medium text-white"
                    )}
                  >
                    {format(day, "d")}
                  </span>
                  <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-hidden">
                    {dayEvents.slice(0, 3).map((event) => (
                      <span
                        key={event.id}
                        className="bg-primary/10 text-primary truncate rounded px-1.5 py-0.5 text-[0.65rem] leading-4"
                      >
                        {event.title}
                      </span>
                    ))}
                    {dayEvents.length > 3 ? (
                      <span className="px-1 text-[0.65rem] text-zinc-500">
                        +{dayEvents.length - 3}
                      </span>
                    ) : null}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type FullCalendarYearViewProps = {
  className?: string;
  onMonthClick?: (monthDate: Date) => void;
  renderDay?: (args: {
    day: Date;
    events: FullCalendarEvent[];
    inCurrentMonth: boolean;
    isToday: boolean;
  }) => ReactNode;
  renderMonthHeader?: (args: {
    monthDate: Date;
    eventCount: number;
  }) => ReactNode;
  renderMonthFooter?: (args: {
    monthDate: Date;
    events: FullCalendarEvent[];
  }) => ReactNode;
  hideDays?: boolean;
};

export function FullCalendarYearView({
  className,
  onMonthClick,
  renderDay,
  renderMonthHeader,
  renderMonthFooter,
  hideDays,
}: FullCalendarYearViewProps) {
  const { date, view, events, locale, weekStartsOn, setDate, setView } =
    useFullCalendar();

  const months = useMemo(
    () => Array.from({ length: 12 }, (_, index) => setMonth(date, index)),
    [date]
  );

  const weekDays = useMemo(
    () => generateWeekdays(locale, weekStartsOn, "EEEEE"),
    [locale, weekStartsOn]
  );

  const openMonth = useCallback(
    (monthDate: Date) => {
      setDate(monthDate);
      setView("month");
      onMonthClick?.(monthDate);
    },
    [onMonthClick, setDate, setView]
  );

  if (view !== "year") return null;

  return (
    <div
      className={cn("flex h-full min-h-0 flex-col overflow-y-auto", className)}
    >
      {/*
        Apple year view model:
        - 4×3 grid on wide screens (fewer rows → more line height per month)
        - Month blocks sized by content, not stretched to fill
        - Fixed day-row height so numbers never collide
        - Leftover space goes into gutters; horizontal inset owned by page shell
      */}
      <div className="flex min-h-full w-full flex-1 items-center py-[clamp(0.75rem,2vh,1.5rem)]">
        <div className="grid w-full grid-cols-2 gap-x-[clamp(1.25rem,3.5vw,3rem)] gap-y-[clamp(1.5rem,4vh,2.75rem)] sm:grid-cols-3 xl:grid-cols-4">
          {months.map((monthDate) => {
            const days = getDaysInMonth(monthDate, weekStartsOn);
            const monthEvents = events.filter((event) =>
              isSameMonth(event.start, monthDate)
            );

            return (
              <div
                key={monthDate.toISOString()}
                className="flex flex-col gap-1.5"
              >
                {renderMonthHeader ? (
                  renderMonthHeader({
                    monthDate,
                    eventCount: monthEvents.length,
                  })
                ) : (
                  <button
                    type="button"
                    onClick={() => openMonth(monthDate)}
                    className="text-primary shrink-0 text-left text-[0.9375rem] font-medium capitalize hover:underline"
                  >
                    {format(monthDate, "MMMM", { locale })}
                  </button>
                )}

                {!hideDays && (
                  <div
                    className="grid grid-cols-7"
                    style={{
                      gridTemplateRows: "1.25rem repeat(6, 1.7rem)",
                    }}
                  >
                  {weekDays.map((day, weekdayIndex) => (
                    <div
                      key={`${monthDate.toISOString()}-wd-${weekdayIndex}`}
                      className="flex items-center justify-center text-[0.625rem] font-medium text-zinc-400"
                    >
                      {day}
                    </div>
                  ))}

                  {days.map((day) => {
                    const inCurrentMonth = isSameMonth(day, monthDate);
                    const dayEvents = events.filter((event) =>
                      isSameDay(event.start, day)
                    );
                    const dayIsToday = isToday(day);
                    const hasEvents = dayEvents.length > 0;

                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        onClick={() => openMonth(day)}
                        className={cn(
                          "relative flex items-center justify-center rounded-sm transition-colors hover:bg-zinc-50/80",
                          !renderDay && !inCurrentMonth && "text-zinc-300",
                          !renderDay &&
                            inCurrentMonth &&
                            !hasEvents &&
                            !dayIsToday &&
                            "text-zinc-800",
                          !renderDay &&
                            hasEvents &&
                            !dayIsToday &&
                            "ring-primary text-primary font-medium ring-1",
                          !renderDay &&
                            dayIsToday &&
                            "bg-primary font-medium text-white"
                        )}
                      >
                        {renderDay ? (
                          renderDay({
                            day,
                            events: dayEvents,
                            inCurrentMonth,
                            isToday: dayIsToday,
                          })
                        ) : (
                          <span className="text-[0.75rem] tabular-nums">
                            {format(day, "d")}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                )}
                {renderMonthFooter &&
                  renderMonthFooter({
                    monthDate,
                    events: monthEvents,
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
