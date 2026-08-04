"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

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
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <p className="text-sm font-semibold">Gửi yêu cầu thành công!</p>
          <p className="mt-1 text-xs text-emerald-800">
            Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.
          </p>
        </div>
      )}

      <FieldGroup className="flex flex-col gap-5">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.fullName}>
            <FieldLabel
              className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              htmlFor="fullName"
            >
              Họ và tên <span className="text-rose-500">*</span>
            </FieldLabel>
            <Input
              id="fullName"
              placeholder="VD: Nguyễn Văn A"
              value={values.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              className="focus:border-primary focus:ring-primary/20 h-12 rounded-xl border-zinc-200 bg-white px-5 transition-all focus:ring-2"
              aria-invalid={!!errors.fullName}
            />
            <FieldError>{errors.fullName}</FieldError>
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel
              className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              htmlFor="phone"
            >
              Số điện thoại <span className="text-rose-500">*</span>
            </FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="VD: 0901234567"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className="focus:border-primary focus:ring-primary/20 h-12 rounded-xl border-zinc-200 bg-white px-5 transition-all focus:ring-2"
              aria-invalid={!!errors.phone}
            />
            <FieldError>{errors.phone}</FieldError>
          </Field>
        </div>

        {/* Row 2: Email & Country */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.email}>
            <FieldLabel
              className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              htmlFor="email"
            >
              Địa chỉ Email <span className="text-rose-500">*</span>
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="VD: example@gmail.com"
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              className="focus:border-primary focus:ring-primary/20 h-12 rounded-xl border-zinc-200 bg-white px-5 transition-all focus:ring-2"
              aria-invalid={!!errors.email}
            />
            <FieldError>{errors.email}</FieldError>
          </Field>

          <Field data-invalid={!!errors.country}>
            <FieldLabel
              className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              htmlFor="country"
            >
              Quốc gia / Tỉnh thành <span className="text-rose-500">*</span>
            </FieldLabel>
            <Input
              id="country"
              placeholder="VD: Cần Thơ, Việt Nam"
              value={values.country}
              onChange={(e) => setField("country", e.target.value)}
              className="focus:border-primary focus:ring-primary/20 h-12 rounded-xl border-zinc-200 bg-white px-5 transition-all focus:ring-2"
              aria-invalid={!!errors.country}
            />
            <FieldError>{errors.country}</FieldError>
          </Field>
        </div>

        {/* Type of Inquiry (Pills) */}
        <Field>
          <FieldLabel
            id="inquiry-type-label"
            className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            Loại yêu cầu
          </FieldLabel>
          <div
            className="flex flex-wrap gap-2"
            role="radiogroup"
            aria-labelledby="inquiry-type-label"
          >
            {subjects.map((sub) => (
              <button
                key={sub}
                type="button"
                role="radio"
                aria-checked={values.subject === sub}
                onClick={() => setField("subject", sub)}
                className={cn(
                  "rounded-xl border px-5 py-3 text-[15px] font-semibold transition-all duration-300 active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm",
                  values.subject === sub
                    ? "border-primary bg-primary ring-primary/20 text-white shadow-md ring-2 ring-offset-1"
                    : "border-slate-300 bg-white text-slate-600 shadow-sm hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600"
                )}
              >
                {sub}
              </button>
            ))}
          </div>
        </Field>

        {/* Message */}
        <Field data-invalid={!!errors.message} className="flex flex-col">
          <FieldLabel
            className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            htmlFor="message"
          >
            Nội dung chi tiết <span className="text-rose-500">*</span>
          </FieldLabel>
          <textarea
            id="message"
            placeholder="Hãy mô tả chi tiết yêu cầu của bạn..."
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className="focus:border-primary focus:ring-primary/20 min-h-[220px] w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm shadow-sm transition-all outline-none focus:ring-2 disabled:opacity-50"
            aria-invalid={!!errors.message}
          />
          <FieldError>{errors.message}</FieldError>
        </Field>

        {/* Checkbox */}
        <Field orientation="horizontal" className="items-center">
          <input
            type="checkbox"
            id="subscribe"
            checked={values.subscribe}
            onChange={(e) => setField("subscribe", e.target.checked)}
            className="text-primary focus:ring-primary size-4 cursor-pointer rounded border-2 border-zinc-300 transition-all dark:border-slate-700"
          />
          <FieldLabel
            htmlFor="subscribe"
            className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Tôi muốn nhận thông tin ưu đãi và cập nhật mới nhất
          </FieldLabel>
        </Field>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="from-primary to-primary/90 hover:ring-primary/20 h-12 w-full rounded-xl bg-gradient-to-r text-base font-bold shadow-md transition-all hover:shadow-lg hover:ring-2 hover:ring-offset-2 active:scale-[0.98] dark:ring-offset-slate-950"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
        </Button>
      </FieldGroup>
    </form>
  );
}
