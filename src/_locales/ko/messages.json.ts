import { exportMessages } from '../../locale';

export default exportMessages({
  extensionName: 'uBlacklist',
  extensionDescription: 'Google 검색 결과에 나타나는 특정 사이트들을 차단합니다',
  dayjsLocale: 'ko',
  error: '오류: $1',
  unauthorizedError: '계정 인증에 실패했습니다. 동기화 중단 후 다시 설정해 주세요.',
  cancelButton: '취소',
  okButton: '확인',
  content_singleSiteBlocked: 'uBlacklist가 사이트 1개를 차단했습니다',
  content_multipleSitesBlocked: 'uBlacklist가 사이트 $1개를 차단했습니다',
  content_showBlockedSitesLink: '보기',
  content_hideBlockedSitesLink: '숨기기',
  content_blockSiteLink: '이 사이트 차단하기',
  content_unblockSiteLink: '이 사이트 차단 해제하기',
  popup_blockSiteTitle: '이 사이트 차단하기',
  popup_unblockSiteTitle: '이 사이트 차단 해제하기',
  popup_details: '자세히',
  popup_pageURLLabel: '페이지 URL',
  popup_pathDepth: '계층',
  popup_addedRulesLabel: '추가할 규칙',
  popup_removedRulesLabel: '제거할 규칙',
  popup_blockSiteButton: '차단',
  popup_unblockSiteButton: '차단 해제',
  popup_openOptionsLink: '옵션',
  options_generalTitle: '일반',
  options_blacklistLabel: 'Google 검색 결과에서 차단한 사이트',
  options_blacklistHelper:
    '[매치 패턴](https://developer.mozilla.org/ko/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) 또는 [정규 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)을 사용할 수 있습니다.',
  options_blacklistExample: '예시: $1',
  options_blacklistUpdated: '업데이트 했습니다.',
  options_reloadBlacklistButton: '새로고침',
  options_importBlacklistButton: '가져오기',
  options_exportBlacklistButton: '내보내기',
  options_saveBlacklistButton: '저장',
  options_importBlacklistDialog_title: '가져오기',
  options_importBlacklistDialog_fromFile: '파일에서 가져오기',
  options_importBlacklistDialog_selectFile: '파일 선택',
  options_importBlacklistDialog_fromPB: '차단 목록 붙여넣기',
  options_importBlacklistDialog_append: '기존 목록에 덧붙이기',
  options_importBlacklistDialog_importButton: '가져오기',
  options_otherSearchEngines: '다른 검색 엔진',
  options_otherSearchEnginesDescription: '아래 검색 엔진에서도 차단 기능을 사용할 수 있습니다.',
  options_registerSearchEngine: '활성화',
  options_searchEngineRegistered: '활성화 됨',
  options_skipBlockDialogLabel: "'이 사이트 차단하기' 다이얼로그 표시하지 않음",
  options_hideBlockLinksLabel: "'이 사이트 차단하기' 링크 숨김",
  options_hideControlLabel: "차단한 사이트 수와 '보기' 링크 숨김",
  options_syncTitle: '동기화',
  options_syncFeatureUpdated:
    '동기화 기능이 업데이트 되었습니다. 계속 동기화를 사용하려면 "동기화 설정" 버튼을 눌러주세요.',
  options_syncFeature: '클라우드 동기화',
  options_syncFeatureDescription:
    '클라우드를 통해 여러 기기간에 차단 목록을 동기화 할 수 있습니다.',
  options_turnOnSync: '동기화 설정',
  options_turnOnSyncDialog_title: '동기화 설정',
  options_turnOnSyncDialog_turnOnSyncButton: '확인',
  options_turnOffSync: '동기화 중단',
  options_syncResult: '최근 동기화',
  options_syncNever: '동기화를 하지 않았습니다.',
  options_syncRunning: '동기화 중...',
  options_syncNowButton: '지금 동기화',
  options_syncInterval: '동기화 주기',
  options_subscriptionTitle: '구독',
  options_subscriptionFeature: '차단 목록 구독',
  options_subscriptionFeatureDescription:
    '구독을 추가하면 해당 URL에서 차단 목록이 정기적으로 다운로드됩니다.',
  options_addSubscriptionButton: '구독 추가',
  options_subscriptionNameHeader: '이름',
  options_subscriptionURLHeader: 'URL',
  options_subscriptionUpdateResultHeader: '최근 업데이트',
  options_noSubscriptionsAdded: '추가한 구독이 없습니다',
  options_subscriptionUpdateRunning: '업데이트 중...',
  options_showSubscriptionMenu: '보기',
  options_updateSubscriptionNowMenu: '지금 업데이트',
  options_removeSubscriptionMenu: '삭제',
  options_updateAllSubscriptionsNowButton: '지금 업데이트',
  options_addSubscriptionDialog_title: '구독 추가',
  options_addSubscriptionDialog_nameLabel: '이름',
  options_addSubscriptionDialog_urlLabel: 'URL',
  options_addSubscriptionDialog_addButton: '추가',
  options_updateInterval: '업데이트 주기',
  clouds_googleDriveSync: 'Google Drive로 동기화',
  clouds_googleDriveSyncDescription: '숨겨진 앱 데이터 공간에 파일이 생성됩니다.',
  clouds_googleDriveSyncTurnedOn: 'Google Drive와 동기화 되었습니다.',
  clouds_dropboxSync: 'Dropbox로 동기화',
  clouds_dropboxSyncDescription: '"/Apps/uBlacklist/" 위치에 파일이 생성됩니다.',
  clouds_dropboxSyncTurnedOn: 'Dropbox와 동기화 되었습니다.',
});
