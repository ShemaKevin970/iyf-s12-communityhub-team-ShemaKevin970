
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createPost } from './postUtils.js'

test('creates a post with valid title and content', () => {
  const post = createPost('Hello', 'Welcome to CommunityHub')

  assert.equal(post.title, 'Hello')
  assert.equal(post.content, 'Welcome to CommunityHub')
})

test('removes unnecessary spaces from title and content', () => {
  const post = createPost('  Hello  ', '  Welcome everyone  ')

  assert.equal(post.title, 'Hello')
  assert.equal(post.content, 'Welcome everyone')
})

test('returns null when title or content is empty', () => {
  assert.equal(createPost('', 'Some content'), null)
  assert.equal(createPost('Some title', ''), null)
})
