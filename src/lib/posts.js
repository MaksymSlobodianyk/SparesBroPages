/**
 * Blog post utilities
 *
 * This file will contain functions to:
 * - Get all blog posts
 * - Get a single post by slug
 * - Parse MDX content
 *
 * To enable blog functionality:
 * 1. Install MDX dependencies: npm install @next/mdx @mdx-js/loader @mdx-js/react
 * 2. Configure next.config.js for MDX
 * 3. Add posts to /src/content/posts/ as .mdx files
 * 4. Implement the functions below
 */

// Placeholder - will be implemented when blog is needed
export async function getAllPosts() {
  // TODO: Read all .mdx files from /src/content/posts/
  // Parse frontmatter and return array of posts
  return [];
}

export async function getPostBySlug(slug) {
  // TODO: Read single .mdx file by slug
  // Parse frontmatter and content
  return null;
}

export function sortPostsByDate(posts) {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
