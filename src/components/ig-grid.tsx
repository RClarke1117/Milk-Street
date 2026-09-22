"use client";

import { useState } from "react";
import { PhotoModal, type Shot } from "@/components/photo-modal";
import { instagramPosts, profile, type IgPost } from "@/lib/instagram";

function toShot(post: IgPost): Shot {
  return {
    src: post.image,
    alt: post.alt,
    title: post.caption,
    kicker: `${profile.handle} · ${post.date}`,
    credit: "Instagram · Milk Street Distillery",
    href: post.href,
    hrefLabel: "Open this post on Instagram",
  };
}

export function IgGrid({ limit }: { limit?: number }) {
  const posts = limit ? instagramPosts.slice(0, limit) : instagramPosts;
  const [shot, setShot] = useState<Shot | null>(null);

  return (
    <>
      <div className="ig-grid">
        {posts.map((post) => (
          <button
            key={post.id}
            type="button"
            className="ig-cell"
            onClick={() => setShot(toShot(post))}
          >
            <img src={post.image} alt={post.alt} />
            <span>
              <small>{post.kind}</small>
              {post.caption}
            </span>
          </button>
        ))}
      </div>
      <PhotoModal shot={shot} onClose={() => setShot(null)} />
    </>
  );
}
