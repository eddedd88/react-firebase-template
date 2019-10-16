// log it in dev and use gtag in prod
let gaTrackingId = 'GA_TRACKING_ID'
let tracker = console.log

if (
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_GA_TRACKING_ID
) {
  gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID
  tracker = global.gtag
  tracker('js', new Date())
}

/**
 * Track a screen viewed event using gtag, for more info see
 * https://developers.google.com/analytics/devguides/collection/gtagjs/screens
 */
export const pageViewed = ({
  pageTitle,
  pagePath
}: {
  pageTitle: string
  pagePath: string
}): void =>
  tracker('config', gaTrackingId, {
    page_path: pagePath,
    page_title: pageTitle
  })

/**
 * Track an event using gtag, for more info see
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export const track = (
  action: string,
  {
    category,
    label,
    value,
    ...rest
  }: {
    category: string
    label: string
    value: number
  }
): void =>
  tracker('event', action, {
    ...rest,
    event_category: category,
    event_label: label,
    value
  })
