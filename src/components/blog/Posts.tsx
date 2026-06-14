"use client";

import { Grid, Heading, Button } from '@/once-ui/components';
import Post from './Post';

interface Post {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
  };
  content: string;
}

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
    posts?: Post[];
}

export function Posts({
    range,
    columns = '2',
    thumbnail = true,
    direction,
    posts = []
}: PostsProps) {
    const sortedBlogs = posts.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    return (
        <>
            <Heading as="h1" variant="heading-strong-xl">
                📌 Featured Posts
            </Heading>

            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="16">
                    {displayedBlogs.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}

            <Button
                onClick={() => window.open("https://www.linkedin.com/in/gyanankur-baruah-797205338", "_blank")}
                variant="primary">
                Connect on LinkedIn 🚀
            </Button>
        </>
    );
}
