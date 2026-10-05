import assert from 'node:assert/strict'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from '../src/App'
import { preloadRoute, routes } from '../src/routes'
import { BLOG_SERVICE_TARGETS, blogServiceFor } from '../src/content/blogServiceTargets'
import { RYZE_BLOG_PATHS } from '../src/content/ryzeBlogPaths'
import { isParked } from '../src/content/parkedUrls'
import { prepareBlogHtml } from '../src/lib/blogEditorial'
import { updateChefShortlist, type ChefShortlistState } from '../src/components/household/HouseholdProfiles'

// Run through Vite's SSR module loader, so these checks exercise real route
// chunks and JSON glob loaders without a browser or any enquiry submission.
for (const path of [
  '/private-chef-dubai',
  '/corporate',
  '/catering-dubai',
  '/blog',
  '/blog/',
  '/bbq-catering-dubai',
  '/school-catering-dubai',
  '/catering-packages-dubai',
  '/drop-off-catering-dubai',
  '/our-chefs',
  '/grazing-table-dubai',
  '/diwali-catering-dubai',
  '/breakfast-catering-dubai',
  '/yachts',
  '/private-party-catering-dubai',
  '/canteen-management-dubai',
  '/blog/best-private-chefs-in-dubai-for-home-dining',
  '/blog/best-drop-off-catering-services-in-dubai',
  '/blog/chef-maison-alternatives-in',
  '/blog/catering-for-embassies-in-dubai-complete-guide',
  '/blog/private-chefs-for-new-parents-in-dubai-complete-guide',
  '/blog/catering-for-film-and-tv-productions-in-dubai-complete-guide',
  '/blog/private-chefs-for-expat-families-in-dubai-complete-guide',
  '/blog/catering-for-real-estate-open-houses-in-dubai-complete-guide',
  '/blog/mychef-vs-dish-ae-which-is-better-in',
  '/private-chef-dubai/?utm_source=readiness-test',
]) {
  await preloadRoute(path)
  const html = renderToString(<HelmetProvider><MemoryRouter initialEntries={[path]}><App /></MemoryRouter></HelmetProvider>)
  assert.doesNotMatch(html, /Switched to client rendering|did not finish this Suspense boundary|<template data-msg=/, `${path}: no late suspension after preload`)
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one visible primary heading`)
  if (path === '/private-chef-dubai') assert.match(html, /data-chef-expansion/)
  if (path === '/corporate') assert.match(html, /data-catering-expansion/)
  if (RYZE_BLOG_PATHS.includes(path)) {
    const service = blogServiceFor(path.slice('/blog/'.length))
    // A contextual article link can replace the generic service box. Check the
    // article itself, so the site-wide navigation cannot satisfy this assertion.
    const articleHtml = html.match(/<article\b[\s\S]*?<\/article>/)?.[0] || ''
    assert.ok(articleHtml.includes(`href="${service.href}"`) || articleHtml.includes(`href="https://www.mychef.ae${service.href}"`), `${path}: article links to its commercial owner`)
    assert.ok(html.includes(`href="${service.href}"`), `${path}: commercial service is linked`)
  }
  console.log(`PASS ready on first render: ${path}`)
}

const livePaths = new Set(routes.map(route => route.path))
for (const path of RYZE_BLOG_PATHS) {
  const slug = path.slice('/blog/'.length)
  assert.ok(BLOG_SERVICE_TARGETS[slug], `${path}: explicit service destination`)
  const target = blogServiceFor(slug).href
  assert.ok(target !== path && !isParked(target), `${path}: service is active and distinct`)
  assert.ok(livePaths.has(target), `${path}: service resolves directly in the SPA without a server redirect`)
}
const content = prepareBlogHtml('<p>Compare private chefs in Dubai before choosing a service.</p><p>Keep <a href="/menus">the menu link</a> beside private chef Dubai.</p>', '/blog/chef-maison-alternatives-in')
assert.match(content.html, /href="\/private-chef-dubai">private chefs in Dubai<\/a>/)
assert.match(content.html, /Keep <a href="\/menus">the menu link<\/a> beside private chef Dubai/)
const image = prepareBlogHtml('<img src="/images/blog-2026/drop-off-delivery-spread.webp" loading="lazy" alt="Delivered dishes">', '/blog/best-drop-off-catering-services-in-dubai').html
assert.match(image, /width="1536" height="1024"/)
assert.match(image, /loading="lazy"/)
assert.match(image, /srcset=/)
assert.equal(prepareBlogHtml(image, '/blog/best-drop-off-catering-services-in-dubai').html, image, 'image attributes are not duplicated on repeated formatting')
console.log(`PASS commercial destinations for ${RYZE_BLOG_PATHS.length} articles and contextual-link preservation`)

let shortlist: ChefShortlistState = { selected: [], notice: '' }
for (const id of ['hc01', 'hc11', 'hc24', 'hc02']) shortlist = updateChefShortlist(shortlist, id)
assert.deepEqual(shortlist.selected, ['hc01', 'hc11', 'hc24'], 'shortlist stays capped at three styles')
assert.ok(shortlist.notice, 'a fourth selection explains the limit')
shortlist = updateChefShortlist(shortlist, 'hc11')
assert.equal(shortlist.notice, '', 'removing a style clears the limit notice')
shortlist = updateChefShortlist(shortlist, 'hc02')
assert.deepEqual(shortlist.selected, ['hc01', 'hc24', 'hc02'], 'a freed slot can be reused without losing other choices')
console.log('PASS chef shortlist selection, limit, removal and replacement')
