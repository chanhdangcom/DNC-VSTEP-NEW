"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  User,
  Phone as PhoneIcon,
  EnvelopeSimple,
  MapPin,
  ChatCircleText,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

type ContactFormValues = {
  fullName: string;
  country: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  subscribe: boolean;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

function getInitialValues(): ContactFormValues {
  return {
    fullName: "",
    country: "",
    phone: "",
    email: "",
    subject: "Tư vấn khóa học",
    message: "",
    subscribe: false,
  };
}

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Vui lòng nhập họ và tên";
  if (!values.country.trim())
    errors.country = "Vui lòng nhập quốc gia / tỉnh thành";
  if (!values.phone.trim()) errors.phone = "Vui lòng nhập số điện thoại";
  if (!values.email.trim()) {
    errors.email = "Vui lòng nhập email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Email không hợp lệ";
  }
  if (!values.message.trim()) {
    errors.message = "Vui lòng nhập nội dung";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(() =>
    getInitialValues()
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const isSent = status === "sent";
  const isSubmitting = status === "submitting";

  function setField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("sent");
      setValues(getInitialValues());
    }, 800);
  }

  const subjects = [
    "Hỗ trợ đăng ký thi",
    "Tư vấn khóa học",
    "Thắc mắc kết quả",
    "Khác",
  ];

  return (
    <form onSubmit={onSubmit} className="flex flex-1 flex-col gap-6">
      {isSent && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 shadow-sm">
          <p className="text-sm font-semibold">Gửi yêu cầu thành công!</p>
          <p className="mt-1 text-xs text-emerald-800">
            Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.
          </p>
        </div>
      )}

      <FieldGroup className="animate-in fade-in slide-in-from-bottom-4 flex flex-col gap-6 duration-700 sm:gap-8">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <Field data-invalid={!!errors.fullName}>
            <FieldLabel
              htmlFor="fullName"
              className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
            >
              Họ và tên <span className="text-primary">*</span>
            </FieldLabel>
            <div className="group focus-within:border-primary focus-within:ring-primary/10 flex items-center gap-2.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-1 transition-all duration-300 focus-within:bg-white focus-within:ring-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="group-focus-within:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors duration-300 group-focus-within:text-white dark:bg-zinc-800 dark:text-zinc-400">
                <User className="size-5" weight="bold" />
              </div>
              <Input
                id="fullName"
                placeholder="Nguyễn Văn A"
                value={values.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                className="h-10 flex-1 border-none bg-transparent px-1 text-base shadow-none focus-visible:ring-0 focus-visible:outline-none dark:text-white"
                aria-invalid={!!errors.fullName}
              />
            </div>
            <FieldError>{errors.fullName}</FieldError>
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel
              htmlFor="phone"
              className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
            >
              Số điện thoại <span className="text-primary">*</span>
            </FieldLabel>
            <div className="group focus-within:border-primary focus-within:ring-primary/10 flex items-center gap-2.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-1 transition-all duration-300 focus-within:bg-white focus-within:ring-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="group-focus-within:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors duration-300 group-focus-within:text-white dark:bg-zinc-800 dark:text-zinc-400">
                <PhoneIcon className="size-5" weight="bold" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="090 123 4567"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="h-10 flex-1 border-none bg-transparent px-1 text-base shadow-none focus-visible:ring-0 focus-visible:outline-none dark:text-white"
                aria-invalid={!!errors.phone}
              />
            </div>
            <FieldError>{errors.phone}</FieldError>
          </Field>
        </div>

        {/* Row 2: Email & Country */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <Field data-invalid={!!errors.email}>
            <FieldLabel
              htmlFor="email"
              className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
            >
              Địa chỉ Email <span className="text-primary">*</span>
            </FieldLabel>
            <div className="group focus-within:border-primary focus-within:ring-primary/10 flex items-center gap-2.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-1 transition-all duration-300 focus-within:bg-white focus-within:ring-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="group-focus-within:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors duration-300 group-focus-within:text-white dark:bg-zinc-800 dark:text-zinc-400">
                <EnvelopeSimple className="size-5" weight="bold" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                className="h-10 flex-1 border-none bg-transparent px-1 text-base shadow-none focus-visible:ring-0 focus-visible:outline-none dark:text-white"
                aria-invalid={!!errors.email}
              />
            </div>
            <FieldError>{errors.email}</FieldError>
          </Field>

          <Field data-invalid={!!errors.country}>
            <FieldLabel
              htmlFor="country"
              className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
            >
              Quốc gia / Tỉnh thành <span className="text-primary">*</span>
            </FieldLabel>
            <div className="group focus-within:border-primary focus-within:ring-primary/10 flex items-center gap-2.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-1 transition-all duration-300 focus-within:bg-white focus-within:ring-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="group-focus-within:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors duration-300 group-focus-within:text-white dark:bg-zinc-800 dark:text-zinc-400">
                <MapPin className="size-5" weight="bold" />
              </div>
              <Input
                id="country"
                placeholder="Cần Thơ, Việt Nam"
                value={values.country}
                onChange={(e) => setField("country", e.target.value)}
                className="h-10 flex-1 border-none bg-transparent px-1 text-base shadow-none focus-visible:ring-0 focus-visible:outline-none dark:text-white"
                aria-invalid={!!errors.country}
              />
            </div>
            <FieldError>{errors.country}</FieldError>
          </Field>
        </div>

        {/* Type of Inquiry (Pills) */}
        <Field>
          <FieldLabel
            id="inquiry-type-label"
            className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
          >
            Loại yêu cầu
          </FieldLabel>
          <ToggleGroup
            value={values.subject ? [values.subject] : []}
            onValueChange={(val) => {
              if (val.length > 0) setField("subject", val[0]);
            }}
            className="flex flex-wrap justify-start gap-2 sm:gap-3"
            aria-labelledby="inquiry-type-label"
          >
            {subjects.map((sub) => {
              const isActive = values.subject === sub;
              return (
                <ToggleGroupItem
                  key={sub}
                  value={sub}
                  variant="outline"
                  className={cn(
                    "rounded-xl px-5 py-5 text-sm font-bold transition-all duration-200 sm:py-6 sm:text-[15px]",
                    isActive
                      ? "!border-primary !text-primary ring-primary/20 dark:!text-primary !bg-red-50/90 shadow-sm ring-2 dark:!bg-red-950/50"
                      : "border-zinc-200/90 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                  )}
                >
                  {sub}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </Field>

        {/* Message */}
        <Field data-invalid={!!errors.message} className="flex flex-col">
          <FieldLabel
            htmlFor="message"
            className="text-sm font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
          >
            Nội dung chi tiết <span className="text-primary">*</span>
          </FieldLabel>
          <div className="group focus-within:border-primary focus-within:ring-primary/10 flex items-start gap-2.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-2 transition-all duration-300 focus-within:bg-white focus-within:ring-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="group-focus-within:bg-primary mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-zinc-200/60 text-zinc-500 transition-colors duration-300 group-focus-within:text-white dark:bg-zinc-800 dark:text-zinc-400">
              <ChatCircleText className="size-5" weight="bold" />
            </div>
            <Textarea
              id="message"
              placeholder="Bạn muốn hỏi thêm về thông tin gì..."
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              className="min-h-[140px] flex-1 resize-none border-none bg-transparent p-1 text-base shadow-none focus-visible:ring-0 focus-visible:outline-none dark:text-white"
              aria-invalid={!!errors.message}
            />
          </div>
          <FieldError>{errors.message}</FieldError>
        </Field>

        {/* Checkbox */}
        <Field orientation="horizontal" className="items-center">
          <Checkbox
            id="subscribe"
            checked={values.subscribe}
            onCheckedChange={(checked) =>
              setField("subscribe", checked === true)
            }
          />
          <FieldLabel
            htmlFor="subscribe"
            className="cursor-pointer text-base text-zinc-700 dark:text-zinc-300"
          >
            Tôi muốn nhận thông tin ưu đãi và cập nhật mới nhất
          </FieldLabel>
        </Field>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group from-primary shadow-primary/25 hover:shadow-primary/35 relative flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r via-red-600 to-rose-600 px-8 text-[1.05rem] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:w-auto sm:min-w-[240px]"
        >
          <span>
            {isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu ngay"}
          </span>
          {!isSubmitting && (
            <PaperPlaneTilt
              className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              weight="bold"
            />
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
