import type { PortableTextBlock } from '@portabletext/types';

export interface NewsSectionType {
    h1NewsSection: string;
    subHeadlineNewsSection: string;
    newsNewsSection: NewsItem[];
}

export interface NewsItem {
    _id: string;
    title: string;
    date: string;
    category: Category;
    content: PortableTextBlock[];
    gallery: {
        url: string;
        alt?: string;
        featured?: boolean;
    }[];
}

interface Category {
    category: string;
}

