let clickMap = {};

export function trackEvent(key) {
  clickMap[key] = (clickMap[key] || 0) + 1;
}

export function getClickMap() {
  return clickMap;
}

