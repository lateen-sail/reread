import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { http, HttpResponse } from "msw";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/* ---------------- schema ---------------- */
const schema = z.object({
  email: z.string().email("メールアドレスを入力してください"),
  name: z.string().min(1, "名前は必須です"),
});

type Values = z.infer<typeof schema>;

/* ---------------- meta ---------------- */
const meta: Meta = {
  title: "examples/Form",
  parameters: {
    layout: "centered",
    msw: {
      handlers: [
        http.post("/api/submit", async ({ request }) => {
          const body = (await request.json()) as Values;
          return HttpResponse.json({
            success: true,
            received: body,
          });
        }),
      ],
    },
  },
};

export default meta;

/* ---------------- story ---------------- */
export const Basic: StoryObj = {
  render: () => {
    const form = useForm<Values>({
      resolver: zodResolver(schema),
      defaultValues: { email: "", name: "" },
      mode: "onBlur",
    });

    const onSubmit = async (values: Values) => {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      alert(JSON.stringify(json, null, 2));
    };

    return (
      <div className="w-[360px] space-y-6">
        <h2 className="text-lg font-semibold">Contact form (mock)</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};
