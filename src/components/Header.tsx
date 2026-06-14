"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade, Flex, Line, ToggleButton, Heading } from "@/once-ui/components";
import { routes, display } from "@/app/resources";
import { person, about, blog, work, gallery } from "@/app/resources/content";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="16" fillWidth vertical="center">
          <Heading as="h2" variant="heading-strong-m">{person.name}’s Portfolio</Heading>
        </Flex>
        
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            shadow="l"
            padding="xs"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="xs" vertical="center">
              {routes["/"] && <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {routes["/about"] && (
                <ToggleButton prefixIcon="person" href="/about" label={about.label} selected={pathname === "/about"} />
              )}
              {routes["/work"] && (
                <ToggleButton prefixIcon="grid" href="/work" label={work.label} selected={pathname.startsWith("/work")} />
              )}
              {routes["/blog"] && (
                <ToggleButton prefixIcon="book" href="/blog" label={blog.label} selected={pathname.startsWith("/blog")} />
              )}
              {routes["/gallery"] && (
                <ToggleButton prefixIcon="gallery" href="/gallery" label={gallery.label} selected={pathname.startsWith("/gallery")} />
              )}
              
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="16" horizontal="end" gap="20">
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
