"use client";
import Link from "next/link";

export default function ArticlePage({
    params,
    searchParams
}: {
    params: { articlesId: string };
    searchParams: { lang ? : "en " | "fr" | "de" | "es" };
}) {
    const { articlesId } = params;
    const { lang="en" } = searchParams;
    return (
        <div>
            <h1>Article Page</h1>
            <p>Article Id: {articlesId}</p>
            <p>Language: {lang}</p>
            <Link href={`/articles/${articlesId}/comments`}>Go to comments</Link>
        </div>
    );
}