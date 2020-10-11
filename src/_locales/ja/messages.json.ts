import { exportMessages } from '../../locale';

export default exportMessages({
  extensionName: 'uBlacklist',
  extensionDescription: '指定したサイトが Google の検索結果で表示されないようにします',
  dayjsLocale: 'ja',
  error: 'エラー: $1',
  unauthorizedError: '認証が解除されています。同期をオフにして、再度有効にして下さい。',
  cancelButton: 'キャンセル',
  okButton: 'OK',
  content_singleSiteBlocked: 'uBlacklist により 1 サイトがブロックされました',
  content_multipleSitesBlocked: 'uBlacklist により $1 サイトがブロックされました',
  content_showBlockedSitesLink: '表示する',
  content_hideBlockedSitesLink: '表示しない',
  content_blockSiteLink: 'このサイトをブロックする',
  content_unblockSiteLink: 'このサイトのブロックを解除する',
  popup_blockSiteTitle: 'このサイトをブロックする',
  popup_unblockSiteTitle: 'このサイトのブロックを解除する',
  popup_details: '詳細',
  popup_pageURLLabel: 'ページの URL',
  popup_pathDepth: '階層',
  popup_addedRulesLabel: '追加されるルール',
  popup_removedRulesLabel: '削除されるルール',
  popup_blockSiteButton: 'ブロック',
  popup_unblockSiteButton: 'ブロックを解除',
  popup_openOptionsLink: 'オプション',
  options_generalTitle: '一般',
  options_blacklistLabel: 'Google の検索結果で表示されないようにするサイト',
  options_blacklistHelper:
    '[マッチパターン](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)か[正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)が使用できます。',
  options_blacklistExample: '例: $1',
  options_blacklistUpdated: '更新されています',
  options_reloadBlacklistButton: '再読み込み',
  options_importBlacklistButton: 'インポート',
  options_exportBlacklistButton: 'エクスポート',
  options_saveBlacklistButton: '保存',
  options_importBlacklistDialog_title: 'インポート',
  options_importBlacklistDialog_fromFile: 'ファイルからインポートする',
  options_importBlacklistDialog_selectFile: 'ファイルを選択',
  options_importBlacklistDialog_fromPB: 'Personal Blocklist からインポートする',
  options_importBlacklistDialog_append: '既存のリストに追加する',
  options_importBlacklistDialog_importButton: 'インポート',
  options_otherSearchEngines: 'その他の検索エンジン',
  options_otherSearchEnginesDescription:
    'Google 以外の検索エンジンでもこの拡張機能を使用できるようにします。',
  options_registerSearchEngine: '有効にする',
  options_searchEngineRegistered: '有効',
  options_skipBlockDialogLabel: '「このサイトをブロックする」ダイアログを使用しない',
  options_hideBlockLinksLabel: '「このサイトをブロックする」リンクを表示しない',
  options_hideControlLabel: 'ブロックしたサイトの数と「表示する」リンクを表示しない',
  options_syncTitle: '同期',
  options_syncFeatureUpdated:
    '同期機能がアップデートされました。引き続き同期を使用するには、「同期を有効にする」ボタンを押して下さい。',
  options_syncFeature: 'クラウドと同期する',
  options_syncFeatureDescription:
    'クラウドを通して、複数の端末でブラックリストを同期することができます。',
  options_turnOnSync: '同期を有効にする',
  options_turnOnSyncDialog_title: '同期を有効にする',
  options_turnOnSyncDialog_turnOnSyncButton: '有効にする',
  options_turnOffSync: 'オフにする',
  options_syncResult: '最後の同期',
  options_syncNever: 'まだ同期されていません',
  options_syncRunning: '同期中...',
  options_syncNowButton: '今すぐ同期',
  options_syncInterval: '同期の間隔',
  options_subscriptionTitle: '購読',
  options_subscriptionFeature: 'ブラックリストを購読する',
  options_subscriptionFeatureDescription:
    '購読を追加すると、指定した URL から定期的にブラックリストがダウンロードされます。',
  options_addSubscriptionButton: '購読を追加する',
  options_subscriptionNameHeader: '名前',
  options_subscriptionURLHeader: 'URL',
  options_subscriptionUpdateResultHeader: '最後の更新',
  options_noSubscriptionsAdded: '購読が追加されていません',
  options_subscriptionUpdateRunning: '更新中...',
  options_showSubscriptionMenu: '表示',
  options_updateSubscriptionNowMenu: '今すぐ更新',
  options_removeSubscriptionMenu: '削除',
  options_updateAllSubscriptionsNowButton: '今すぐ更新',
  options_addSubscriptionDialog_title: '購読を追加する',
  options_addSubscriptionDialog_nameLabel: '名前',
  options_addSubscriptionDialog_urlLabel: 'URL',
  options_addSubscriptionDialog_addButton: '追加',
  options_updateInterval: '更新の間隔',
  clouds_googleDriveSync: 'Google ドライブと同期する',
  clouds_googleDriveSyncDescription: '非表示のアプリデータフォルダにファイルが作成されます。',
  clouds_googleDriveSyncTurnedOn: 'Google ドライブと同期しています',
  clouds_dropboxSync: 'Dropbox と同期する',
  clouds_dropboxSyncDescription: 'フォルダ "/アプリ/uBlacklist/" にファイルが作成されます。',
  clouds_dropboxSyncTurnedOn: 'Dropbox と同期しています',
});
