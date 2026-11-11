
export function createPost(title, content) {
  if (!title.trim() || !content.trim()) {
    return null
  }

  return {
    id: Date.now(),
    title: title.trim(),
    content: content.trim(),
  }
}
