"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { User, Phone, Mail, MapPin, Send } from "lucide-react";

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

      <FieldGroup className="">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <Field data-invalid={!!errors.fullName}>
            <FieldLabel htmlFor="fullName" className="text-base">
              Họ và tên <span className="text-primary">*</span>
            </FieldLabel>

            <InputGroup className="h-12 rounded-xl">
              <InputGroupAddon align="inline-start" className="">
                <User className="text-muted-foreground size-5" />
              </InputGroupAddon>

              <InputGroupInput
                id="fullName"
                placeholder="Nguyễn Văn A"
                value={values.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                className="text-base"
                aria-invalid={!!errors.fullName}
              />
            </InputGroup>

            <FieldError>{errors.fullName}</FieldError>
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="phone" className="text-base">
              Số điện thoại <span className="text-primary">*</span>
            </FieldLabel>
            <InputGroup className="h-12 rounded-xl">
              <InputGroupAddon align="inline-start" className="">
                <Phone className="text-muted-foreground size-5" />
              </InputGroupAddon>
              <InputGroupInput
                id="phone"
                type="tel"
                placeholder="090 123 4567"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="text-base"
                aria-invalid={!!errors.phone}
              />
            </InputGroup>
            <FieldError>{errors.phone}</FieldError>
          </Field>
        </div>

        {/* Row 2: Email & Country */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email" className="text-base">
              Địa chỉ Email <span className="text-primary">*</span>
            </FieldLabel>
            <InputGroup className="h-12 rounded-xl">
              <InputGroupAddon align="inline-start" className="">
                <Mail className="text-muted-foreground size-5" />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                className="text-base"
                aria-invalid={!!errors.email}
              />
            </InputGroup>
            <FieldError>{errors.email}</FieldError>
          </Field>

          <Field data-invalid={!!errors.country}>
            <FieldLabel htmlFor="country" className="text-base">
              Quốc gia / Tỉnh thành <span className="text-primary">*</span>
            </FieldLabel>
            <InputGroup className="h-12 rounded-xl">
              <InputGroupAddon align="inline-start" className="">
                <MapPin className="text-muted-foreground size-5" />
              </InputGroupAddon>
              <InputGroupInput
                id="country"
                placeholder="Cần Thơ, Việt Nam"
                value={values.country}
                onChange={(e) => setField("country", e.target.value)}
                className="text-base"
                aria-invalid={!!errors.country}
              />
            </InputGroup>
            <FieldError>{errors.country}</FieldError>
          </Field>
        </div>

        {/* Type of Inquiry (Pills) */}
        <Field>
          <FieldLabel id="inquiry-type-label" className="text-base">
            Loại yêu cầu
          </FieldLabel>

          <ToggleGroup
            value={values.subject ? [values.subject] : []}
            onValueChange={(val) => {
              if (val.length > 0) setField("subject", val[0]);
            }}
            className=""
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
                    "rounded-xl",
                    isActive
                      ? "bg-primary/10 text-primary ring-primary/60 ring-2"
                      : ""
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
          <FieldLabel htmlFor="message" className="text-base">
            Nội dung chi tiết <span className="text-primary">*</span>
          </FieldLabel>
          <Textarea
            id="message"
            placeholder="Bạn muốn hỏi thêm về thông tin gì..."
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className="focus-visible:!border-primary focus-visible:!ring-primary/20 min-h-[140px] rounded-xl bg-zinc-50/70 px-4 py-3 text-base transition-colors focus-visible:!ring-[3px] dark:bg-zinc-900/50"
            aria-invalid={!!errors.message}
          />
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
          className="rounded-xl py-6 text-base"
        >
          {isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu ngay"}
        </Button>
      </FieldGroup>
    </form>
  );
}
