/** Chef profile enquiry destinations. Preference only until availability is confirmed. */

export function chefInquiryId(slug: string): string {
  return slug.replace(/^\/chefs\//, '').replace(/^\//, '')
}

export function chefInquiryHref(slug: string): string {
  return `/inquiry?from=chef&chef=${encodeURIComponent(chefInquiryId(slug))}`
}
