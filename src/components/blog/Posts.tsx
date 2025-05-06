"use client";

import { getPosts } from '@/app/utils/utils';
import { Grid, Heading, Button } from '@/once-ui/components';
import Post from './Post';
import styles from './Posts.module.scss';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Posts({
    range,
    columns = '2',
    thumbnail = true,
    direction
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'blog', 'posts']);

    const sortedBlogs = allBlogs.sort((a, b) => {
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
            <Heading as="h1" variant="heading-strong-xl" className={styles.header}>
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
                onClick={() => window.open("https://www.linkedin.com/in/gyanankur", "_blank")}
                variant="primary"
                className={styles.linkedinButton}>
                Connect on LinkedIn 🚀
            </Button>
        </>
    );
}
