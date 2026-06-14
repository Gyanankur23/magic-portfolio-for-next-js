"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text, Button } from '@/once-ui/components';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: {
        slug: string;
        metadata: {
            title: string;
            publishedAt: string;
            image?: string;
            tag?: string;
            summary?: string;
        };
    };
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
    return (
        <SmartLink
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={direction}
                radius="l"
                mobileDirection="column"
                fillWidth>
                
                {post.metadata.image && thumbnail && (
                    <SmartImage
                        priority
                        sizes="(max-width: 768px) 100vw, 640px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={post.metadata.image}
                        alt={`Thumbnail of ${post.metadata.title}`}
                        aspectRatio="16 / 9"
                    />
                )}
                
                <Column
                    position="relative"
                    fillWidth
                    gap="8"
                    padding="24"
                    vertical="center">
                    
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    
                    <Text variant="label-default-s" onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                    
                    {post.metadata.tag && (
                        <Tag className="mt-12" label={post.metadata.tag} variant="neutral" />
                    )}

                    {post.metadata.summary && (
                        <Text variant="body-default-m">
                            {post.metadata.summary}
                        </Text>
                    )}

                    <Flex horizontal="center" paddingTop="16">
                        <Button onClick={() => window.open("https://www.linkedin.com/in/gyanankur-baruah-797205338", "_blank")}>
                            Connect on LinkedIn
                        </Button>
                    </Flex>
                </Column>
            </Flex>
        </SmartLink>
    );
}
