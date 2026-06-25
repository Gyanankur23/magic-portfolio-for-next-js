"use client";

import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { social } from "@/app/resources/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const portfolioOwner = "Gyanankur Baruah";

  return (
    <Flex
      as="footer"
      fillWidth
      padding="16"
      horizontal="center"
      vertical="center"
      mobileDirection="column"
    >
      <Flex
        maxWidth="m"
        paddingY="16"
        paddingX="24"
        gap="20"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="xs">{portfolioOwner}</Text>
          <Text onBackground="neutral-weak">
            / Crafted with{" "}
            <SmartLink href="https://once-ui.com/templates/magic-portfolio">
              Once UI
            </SmartLink>
          </Text>
        </Text>

        <Flex gap="20">
          {social.map(
            (item) =>
              item.link && (
                <IconButton key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </Flex>
      </Flex>

      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
