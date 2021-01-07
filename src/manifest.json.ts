import { searchEngineMatches } from './common/search-engines';

exportAsJson('manifest.json', {
  background: {
    // #if CHROME
    persistent: false,
    // #endif
    scripts: ['scripts/background.js'],
  },
  browser_action: {
    default_icon: {
      19: 'images/icon-grey-19.png',
      38: 'images/icon-grey-38.png',
    },
    default_popup: 'html/popup.html',
  },
  /* #if FIREFOX && DEVELOPMENT
  browser_specific_settings: {
    gecko: {
      id: '@ublacklist',
    },
  },
  */
  // #endif
  content_scripts: [
    {
      js: ['scripts/content-script.js'],
      matches: searchEngineMatches.google,
      run_at: 'document_start',
    },
  ],
  default_locale: 'en',
  description: '__MSG_extensionDescription__',
  icons: {
    16: 'images/icon-16.png',
    48: 'images/icon-48.png',
    128: 'images/icon-128.png',
  },
  // #if CHROME
  key:
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm+2y1Q2VH/S9rGxa/2kzRRspyxcA8R5QBa49JK/wca2kqyfpI/traqNnNY8SfRzOugtVP+8/WbyOY44wgr427VYws6thZ//cV2NDadEMqUF5dba9LR26QHXPFUWdbUyCtNHNVP4keG/OeGJ6thOrKUlxYorK9JAmdG1szucyOKt8+k8HNVfZFTi2UHGLn1ANLAsu6f4ykb6Z0QNNCysWuNHqtFEy4j0B4T+h5VZ+Il2l3yf8uGk/zAbJE7x0C7SIscBrWQ9jcliS/e25C6mEr5lrMhQ+VpVVsRVGg7PwY7xLywKHZM8z1nzLdpMs7egEqV25HiA/PEcaQRWwDKDqwQIDAQAB',
  // #endif
  manifest_version: 2,
  name: '__MSG_extensionName__',
  optional_permissions: ['*://*/*'],
  options_ui: {
    // #if CHROME
    chrome_style: false,
    /* #else
    browser_style: false,
    */
    // #endif
    open_in_tab: true,
    page: 'html/options.html',
  },
  permissions: ['activeTab', 'alarms', 'identity', 'storage'],
  version: '0.1.0',
});
