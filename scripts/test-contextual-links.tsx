import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter, Link } from 'react-router'
import BlogProse from '../src/components/blog/BlogProse'
import { blogLinkState, linkBlogText, prepareBlogHtml, privateChefBodyLinkCount } from '../src/lib/blogEditorial'

// The standalone TSX runner uses the classic JSX transform; Vite supplies the
// automatic runtime in the website build.
Object.assign(globalThis, { React })

const linked = (text: string, path: string) => linkBlogText(text, blogLinkState(path)).filter(p => typeof p !== 'string')
assert.equal(linked('Office catering for a weekly team lunch.', '/blog/compare-catering-quotes-dubai')[0]?.href, '/office-catering-dubai')
assert.equal(linked('A business lunch for visiting clients.', '/blog/compare-catering-quotes-dubai')[0]?.href, '/business-lunch-catering-dubai')
assert.equal(linked('Office catering for a weekly team lunch.', '/corporate')[0]?.href, '/office-catering-dubai')
assert.equal(linked('Office catering for a weekly team lunch.', '/office-catering-dubai').length, 0)
for (const path of ['/', '/yachts', '/birthday-catering-dubai']) assert.equal(blogLinkState(path).rules.length, 0)

const html = renderToStaticMarkup(<MemoryRouter initialEntries={['/corporate']}><BlogProse>
  <h2>Office catering and business lunch catering</h2>
  <p>Choose office catering for the weekly team lunch.</p>
  <p>Office catering for the next team day.</p>
  <p>Keep the existing <Link to="/menus">menu link</Link> beside business lunch catering.</p>
</BlogProse></MemoryRouter>)
assert.match(html, /<h2>Office catering and business lunch catering<\/h2>/)
assert.equal((html.match(/class="blog-context-link"/g) || []).length, 1)
assert.match(html, /<p>Office catering for the next team day\.<\/p>/)
assert.match(html, /href="\/menus"/)

const state = blogLinkState('/blog/compare-catering-quotes-dubai')
const words = ['office catering', 'business lunch', 'passed canapés', 'wedding catering', 'grazing table', 'buffet catering', 'BBQ catering', 'yacht catering', 'private chef prices', 'weekly meal prep']
for (const word of words) linkBlogText(word, { ...state, remaining: 1 })
assert.equal([...state.uses.values()].reduce((sum, n) => sum + n, 0), 8)
console.log('Contextual links: correct owners, protected pages, existing links, headings, repetition and article limit verified.')

const guidePath = '/blog/private-chef-trial-dubai'
for (const href of ['/private-chef-dubai', 'https://www.mychef.ae/private-chef-dubai', 'https://mychef.ae/private-chef-dubai/#options']) {
  const authored = `<p>Compare private chef services in Dubai.</p><p>Explore <a href="${href}">the service for your home</a>.</p><p>A household chef can help.</p>`
  assert.equal(privateChefBodyLinkCount(prepareBlogHtml(authored, guidePath).html), 1, `Preserve authored link: ${href}`)
}
const repeated = '<p>Compare private chef services in Dubai.</p><p>A household chef can help.</p><p>A personal chef in Dubai.</p>'
assert.equal(privateChefBodyLinkCount(prepareBlogHtml(repeated, guidePath).html), 1)
const prose = renderToStaticMarkup(<MemoryRouter initialEntries={[guidePath]}><BlogProse>
  <p>Compare private chef services in Dubai.</p>
  <p>Explore <Link to="/private-chef-dubai">the cooking service</Link>.</p>
  <p>A personal chef in Dubai.</p>
</BlogProse></MemoryRouter>)
assert.equal(privateChefBodyLinkCount(prose), 1)
console.log('Private-chef overview: authored links prevent automatic duplicates; unlinked articles receive at most one automatic overview link.')
