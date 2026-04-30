import Link from "next/link";
import { ArrowRight, Clock3, MapPin } from "lucide-react";

import { contactMethods, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const contactMethodNotes: Record<string, string> = {
  [siteConfig.email]: "Best for project inquiries, retainers, and direct collaboration.",
  [siteConfig.phone]: "Tap to call directly from your phone or desktop dialer.",
  LinkedIn: "Professional background, recommendations, and quick introductions.",
  GitHub: "Code samples, implementation detail, and technical range.",
  WhatsApp: "Send a direct WhatsApp message without any extra steps.",
  Instagram: "A lighter look at process, inspiration, and behind-the-scenes craft.",
  "Book a Call": "Opens a ready-to-send message so visitors can schedule a call quickly.",
};

export function ContactSection() {
  return (
    <section id="contact" className="anchor-offset section-shell section-padding">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="glass-panel rounded-[2rem] border border-border/70 p-7 md:p-8">
          <SectionHeading
            eyebrow="Contact"
            title="If the vision is ambitious, the build should feel that way too."
            description="Whether you need a standout portfolio, a premium marketing site, or a sharper frontend system, Will partners with teams that care about execution, detail, and momentum."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {contactMethods.map((item) => {
              const opensInNewTab = item.href.startsWith("http");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={opensInNewTab ? "_blank" : undefined}
                  rel={opensInNewTab ? "noreferrer" : undefined}
                  className="group rounded-[1.75rem] border border-border/70 bg-background/52 p-5 transition hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="break-all font-medium leading-snug text-foreground transition group-hover:text-primary">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {contactMethodNotes[item.label]}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel rounded-[2rem] border border-border/70 p-7 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Availability</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-balance md:text-4xl">
              {siteConfig.availability}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Best suited for premium website launches, high-conviction product marketing pages,
              case-study storytelling, and frontend systems that need both aesthetic polish and
              engineering discipline.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-border/70 bg-background/55 p-5">
                <div className="flex items-center gap-3 text-primary">
                  <Clock3 className="size-4" />
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Typical Reply
                  </p>
                </div>
                <p className="mt-3 font-display text-3xl font-semibold">24-48 hrs</p>
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/55 p-5">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="size-4" />
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Base
                  </p>
                </div>
                <p className="mt-3 font-display text-3xl font-semibold text-balance">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
              <Link href={`mailto:${siteConfig.email}`}>
                Start the Conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(216,197,140,0.1))] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Working Style</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/86">
              Clear communication, sharp execution, and enough taste to make the final result feel
              intentional rather than merely functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
