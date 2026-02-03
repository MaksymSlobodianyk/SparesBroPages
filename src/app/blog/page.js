import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Blog - SparesBro',
  description: 'Tips, updates, and insights about managing your consumables with SparesBro.',
};

// Placeholder blog page - will be enhanced with MDX support later
export default function BlogPage() {
  return (
    <PageLayout>
      <h1 className="page-title">Blog</h1>

      <p className="intro-text">
        Tips, updates, and insights about managing your consumables with SparesBro.
      </p>

      <div className="info-card">
        <h3>Coming Soon</h3>
        <p>
          We're working on bringing you helpful content about consumable tracking,
          home organization tips, and SparesBro updates. Check back soon!
        </p>
      </div>

      {/*
        Future: This page will list blog posts from /src/content/posts/
        Posts will be written in MDX format and automatically rendered here.

        Example post structure:
        ---
        title: "My First Post"
        date: "2026-02-03"
        description: "A short description"
        ---

        Post content in Markdown...
      */}
    </PageLayout>
  );
}
