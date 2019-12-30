/// <reference types="react-scripts" />

interface Navigator {
  // navigator.share method
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
  share?(options: { url: string; text: string; title: string }): Promise<void>
}
