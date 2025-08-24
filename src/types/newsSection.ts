import type { PortableTextBlock } from '@portabletext/types';

export interface NewsSectionType {
    h1NewsSection: string;
    subHeadlineNewsSection: string;
    newsNewsSection: News[];
}

export interface News {
    _id: string;
    title: string;
    date: string;
    category: Category;
    content: PortableTextBlock[];
}

interface Category {
    category: string;
}

