"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  CaretDown,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

function getInitialValues(): ContactFormValues {
  return {
    fullName: "",
    email: "",
    phone: "",
    subject: "Hỗ trợ đăng ký thi",
    message: "",
  };
}

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Vui lòng nhập họ và tên";
  if (!values.phone.trim()) errors.phone = "Vui lòng nhập số điện thoại";
  if (!values.email.trim()) {
    errors.email = "Vui lòng nhập email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Email không hợp lệ";
  }
  if (!values.message.trim()) {
    errors.message = "Vui lòng nhập nội dung cần hỗ trợ";
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

  function setField<K extends keyof ContactFormValues>(key: K, value: string) {
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

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
      {isSent ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
          <p className="text-sm font-semibold">Gửi yêu cầu thành công!</p>
          <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300">
            Cảm ơn bạn đã liên hệ. Trung tâm sẽ phản hồi sớm nhất qua Email /
            SĐT của bạn.
          </p>
        </div>
      ) : null}

      <FieldGroup className="gap-5">
        {/* Họ và tên */}
        <Field data-invalid={!!errors.fullName}>
          <FieldLabel htmlFor="fullName">
            Họ và tên <span className="text-primary">*</span>
          </FieldLabel>
          <Input
            id="fullName"
            placeholder="Nhập họ và tên của bạn"
            value={values.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
          />
          <FieldError>{errors.fullName}</FieldError>
        </Field>

        {/* Email & SĐT */}
        <div className="flex flex-col gap-4">
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">
              Email <span className="text-primary">*</span>
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
            />
            <FieldError>{errors.email}</FieldError>
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="phone">
              Số điện thoại <span className="text-primary">*</span>
            </FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="09xx xxx xxx"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
            />
            <FieldError>{errors.phone}</FieldError>
          </Field>
        </div>

        {/* Chủ đề */}
        <Field>
          <FieldLabel htmlFor="subject">Chủ đề cần tư vấn</FieldLabel>
          <div className="relative">
            <select
              id="subject"
              value={values.subject}
              onChange={(e) => setField("subject", e.target.value)}
              className="border-input bg-background focus-visible:ring-ring flex h-9 w-full appearance-none rounded-md border px-3 py-1 text-sm shadow-xs transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="Hỗ trợ đăng ký thi">
                Hỗ trợ đăng ký thi VSTEP
              </option>
              <option value="Tư vấn khóa học">
                Tư vấn khóa học / Luyện thi
              </option>
              <option value="Thắc mắc kết quả">
                Thắc mắc kết quả / Dấu chứng chỉ
              </option>
              <option value="Khác">Yêu cầu khác</option>
            </select>
            <CaretDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
          </div>
        </Field>

        {/* Nội dung chi tiết */}
        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="message">
            Nội dung chi tiết <span className="text-primary">*</span>
          </FieldLabel>
          <textarea
            id="message"
            rows={4}
            placeholder="Nhập nội dung cần hỗ trợ tại đây..."
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm shadow-xs focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          <FieldError>{errors.message}</FieldError>
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-medium"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu hỗ trợ"}
        </Button>
      </FieldGroup>
    </form>
  );
}
