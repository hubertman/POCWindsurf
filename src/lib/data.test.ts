import { blogPosts, projects, talks } from './data';

describe('Data Utilities', () => {
  describe('blogPosts', () => {
    it('should be an array', () => {
      expect(Array.isArray(blogPosts)).toBe(true);
    });

    it('should have at least one blog post', () => {
      expect(blogPosts.length).toBeGreaterThan(0);
    });

    it('each blog post should have required fields', () => {
      blogPosts.forEach(post => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('summary');
        expect(post).toHaveProperty('excerpt');
        expect(post).toHaveProperty('content');
      });
    });

    it('blog post ids should be unique', () => {
      const ids = blogPosts.map(post => post.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('blog post ids should be numbers', () => {
      blogPosts.forEach(post => {
        expect(typeof post.id).toBe('number');
      });
    });

    it('blog post titles should be strings', () => {
      blogPosts.forEach(post => {
        expect(typeof post.title).toBe('string');
        expect(post.title.length).toBeGreaterThan(0);
      });
    });
  });

  describe('projects', () => {
    it('should be an array', () => {
      expect(Array.isArray(projects)).toBe(true);
    });

    it('should have at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('each project should have required fields', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('image');
      });
    });

    it('project ids should be unique', () => {
      const ids = projects.map(project => project.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('project images should be strings', () => {
      projects.forEach(project => {
        expect(typeof project.image).toBe('string');
        expect(project.image).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('talks', () => {
    it('should be an array', () => {
      expect(Array.isArray(talks)).toBe(true);
    });

    it('should have at least one talk', () => {
      expect(talks.length).toBeGreaterThan(0);
    });

    it('each talk should have required fields', () => {
      talks.forEach(talk => {
        expect(talk).toHaveProperty('id');
        expect(talk).toHaveProperty('title');
        expect(talk).toHaveProperty('summary');
        expect(talk).toHaveProperty('image');
        expect(talk).toHaveProperty('content');
      });
    });

    it('talk ids should be unique', () => {
      const ids = talks.map(talk => talk.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('talk content should contain HTML', () => {
      talks.forEach(talk => {
        expect(typeof talk.content).toBe('string');
        expect(talk.content).toMatch(/<h[1-6]>|<p>/);
      });
    });
  });
});
