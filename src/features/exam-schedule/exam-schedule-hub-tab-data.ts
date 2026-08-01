export const examScheduleHubTabs = [
  {
    value: "lich-thi",
    label: "Lịch thi",
    href: "/lich-thi",
    typeValue: "Lịch thi",
    iconSrc: "/images/exam-schedule/exam-schedule-tab.png",
  },
  {
    value: "on-thi",
    label: "Thông báo ôn thi",
    href: "/on-thi",
    typeValue: "Thông báo ôn thi",
    iconSrc: "/images/exam-schedule/exam-review-tab.png",
  },
  {
    value: "ke-hoach-nam",
    label: "Kế hoạch năm",
    href: "/ke-hoach-nam",
    typeValue: "Kế hoạch năm",
    iconSrc: "/images/exam-schedule/yearly-plan-tab.png",
  },
] as const;

export type ExamScheduleHubTabValue =
  (typeof examScheduleHubTabs)[number]["value"];

export function getExamScheduleHubTabByPathname(pathname: string) {
  return (
    examScheduleHubTabs.find((tab) => tab.href === pathname) ??
    examScheduleHubTabs[0]
  );
}

export function getExamScheduleHubTabByType(typeValue: string) {
  return (
    examScheduleHubTabs.find((tab) => tab.typeValue === typeValue) ??
    examScheduleHubTabs[0]
  );
}
