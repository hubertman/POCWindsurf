export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
}

const API_BASE_URL = 'http://localhost:3001';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts();
    return posts.find(post => post.id === id) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
