import { FunctionComponent, h } from 'preact';
import { StateUpdater, useEffect, useLayoutEffect, useState } from 'preact/hooks';
import { searchEngineMatches } from '../../common/search-engines';
import { apis } from '../apis';
import { Button, LinkButton } from '../components/button';
import { CheckBox } from '../components/checkbox';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogProps,
  DialogTitle,
} from '../components/dialog';
import { Indent } from '../components/indent';
import { Label, LabelItem } from '../components/label';
import { expandLinks } from '../components/link';
import { List, ListItem } from '../components/list';
import { Portal } from '../components/portal';
import { Row, RowItem } from '../components/row';
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionItem,
  SectionTitle,
} from '../components/section';
import { Text } from '../components/text';
import { TextArea } from '../components/textarea';
import { addMessageListeners, sendMessage } from '../messages';
import { searchEngineMessageNames } from '../search-engines/message-names';
import { MessageName0, SearchEngineId } from '../types';
import { lines, stringEntries, translate } from '../utilities';
import { useOptionsContext } from './options-context';
import { Select, SelectOption } from './select';
import { SetBooleanItem } from './set-boolean-item';

const ImportBlacklistDialog: FunctionComponent<
  { setBlacklist: StateUpdater<string>; setBlacklistDirty: StateUpdater<boolean> } & DialogProps
> = ({ close, open, setBlacklist, setBlacklistDirty }) => {
  const [source, setSource] = useState<'file' | 'pb'>('file');
  const [pb, setPB] = useState('');
  const [append, setAppend] = useState(false);
  useLayoutEffect(() => {
    if (open) {
      setSource('file');
      setPB('');
      setAppend(false);
    }
  }, [open]);
  const replaceOrAppend = (newBlacklist: string) => {
    if (append) {
      setBlacklist(
        oldBlacklist => `${oldBlacklist}${oldBlacklist && newBlacklist ? '\n' : ''}${newBlacklist}`,
      );
    } else {
      setBlacklist(() => newBlacklist);
    }
    setBlacklistDirty(true);
  };
  return (
    <Dialog close={close} open={open} width="480px">
      <DialogHeader>
        <DialogTitle>{translate('options_importBlacklistDialog_title')}</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <Row>
          <RowItem>
            <Select
              class="js-focus-start"
              value={source}
              onInput={e => {
                setSource(e.currentTarget.value as 'file' | 'pb');
              }}
            >
              <SelectOption value="file">
                {translate('options_importBlacklistDialog_fromFile')}
              </SelectOption>
              <SelectOption value="pb">
                {translate('options_importBlacklistDialog_fromPB')}
              </SelectOption>
            </Select>
          </RowItem>
        </Row>
        {source === 'pb' && (
          <Row>
            <RowItem expanded>
              <Label forFullWidth>
                <LabelItem>{translate('options_importBlacklistDialog_helper')}</LabelItem>
                <LabelItem>{translate('options_blacklistExample', 'example.com')}</LabelItem>
              </Label>
              <TextArea
                rows={5}
                value={pb}
                wrap="off"
                onInput={e => {
                  setPB(e.currentTarget.value);
                }}
              />
            </RowItem>
          </Row>
        )}
        <Row>
          <RowItem>
            <Indent>
              <CheckBox
                checked={append}
                id="append"
                onInput={e => {
                  setAppend(e.currentTarget.checked);
                }}
              />
            </Indent>
          </RowItem>
          <RowItem expanded>
            <Label for="append">
              <LabelItem primary>{translate('options_importBlacklistDialog_append')}</LabelItem>
            </Label>
          </RowItem>
        </Row>
      </DialogBody>
      <DialogFooter>
        <Row right>
          <RowItem>
            <Button class={source === 'pb' && !pb ? 'js-focus-end' : undefined} onClick={close}>
              {translate('cancelButton')}
            </Button>
          </RowItem>
          <RowItem>
            {source === 'file' ? (
              <Button
                class="js-focus-end"
                primary
                onClick={() => {
                  const fileInput = document.createElement('input');
                  fileInput.accept = 'text/plain';
                  fileInput.type = 'file';
                  fileInput.addEventListener('input', () => {
                    const file = fileInput.files?.[0];
                    if (!file) {
                      console.log('!file');
                      return;
                    }
                    const fileReader = new FileReader();
                    fileReader.addEventListener('load', () => {
                      console.log('load');
                      replaceOrAppend(fileReader.result as string);
                    });
                    fileReader.readAsText(file);
                    close();
                  });
                  fileInput.click();
                }}
              >
                {translate('options_importBlacklistDialog_selectFile')}
              </Button>
            ) : (
              <Button
                class={pb ? 'js-focus-end' : undefined}
                disabled={!pb}
                primary
                onClick={() => {
                  let newBlacklist = '';
                  for (const domain of lines(pb)) {
                    if (/^([A-Za-z0-9-]+\.)*[A-Za-z0-9-]+$/.test(domain)) {
                      newBlacklist = `${newBlacklist}${newBlacklist ? '\n' : ''}*://*.${domain}/*`;
                    }
                  }
                  replaceOrAppend(newBlacklist);
                  close();
                }}
              >
                {translate('options_importBlacklistDialog_importButton')}
              </Button>
            )}
          </RowItem>
        </Row>
      </DialogFooter>
    </Dialog>
  );
};

const SetBlacklist: FunctionComponent = () => {
  const {
    initialItems: { blacklist: initialBlacklist },
  } = useOptionsContext();
  const [blacklist, setBlacklist] = useState(initialBlacklist);
  const [blacklistDirty, setBlacklistDirty] = useState(false);
  const [latestBlacklist, setLatestBlacklist] = useState<string | null>(null);
  const [importBlacklistDialogOpen, setImportBlacklistDialogOpen] = useState(false);
  useEffect(
    () =>
      addMessageListeners({
        'blacklist-set': (latestBlacklist, source) => {
          if (source !== 'options') {
            setLatestBlacklist(latestBlacklist);
          }
        },
      }),
    [],
  );
  return (
    <SectionItem>
      <Row>
        <RowItem expanded>
          <Label forFullWidth>
            <LabelItem primary>{translate('options_blacklistLabel')}</LabelItem>
            <LabelItem>{expandLinks(translate('options_blacklistHelper'))}</LabelItem>
            <LabelItem>{translate('options_blacklistExample', '*://*.example.com/*')}</LabelItem>
            <LabelItem>{translate('options_blacklistExample', '/example\\.(net|org)/')}</LabelItem>
          </Label>
          <TextArea
            rows={10}
            value={blacklist}
            wrap="off"
            onInput={e => {
              setBlacklist(e.currentTarget.value);
              setBlacklistDirty(true);
            }}
          />
        </RowItem>
      </Row>
      <Row multiline right>
        {latestBlacklist != null && (
          <RowItem expanded>
            <Text>
              {translate('options_blacklistUpdated')}{' '}
              <LinkButton
                onClick={() => {
                  setBlacklist(latestBlacklist);
                  setBlacklistDirty(false);
                  setLatestBlacklist(null);
                }}
              >
                {translate('options_reloadBlacklistButton')}
              </LinkButton>
            </Text>
          </RowItem>
        )}
        <RowItem>
          <Row>
            <RowItem>
              <Button
                onClick={() => {
                  setImportBlacklistDialogOpen(true);
                }}
              >
                {translate('options_importBlacklistButton')}
              </Button>
            </RowItem>
            <RowItem>
              <Button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = `data:text/plain;charset=UTF-8,${encodeURIComponent(blacklist)}`;
                  a.download = 'uBlacklist.txt';
                  a.click();
                }}
              >
                {translate('options_exportBlacklistButton')}
              </Button>
            </RowItem>
            <RowItem>
              <Button
                disabled={!blacklistDirty}
                primary
                onClick={() => {
                  void sendMessage('set-blacklist', blacklist, 'options');
                  setBlacklistDirty(false);
                  setLatestBlacklist(null);
                }}
              >
                {translate('options_saveBlacklistButton')}
              </Button>
            </RowItem>
          </Row>
        </RowItem>
      </Row>
      <Portal>
        <ImportBlacklistDialog
          close={() => setImportBlacklistDialogOpen(false)}
          open={importBlacklistDialogOpen}
          setBlacklist={setBlacklist}
          setBlacklistDirty={setBlacklistDirty}
        />
      </Portal>
    </SectionItem>
  );
};

const RegisterSearchEngine: FunctionComponent<{
  id: SearchEngineId;
  matches: string[];
  messageNames: { name: MessageName0 };
}> = ({ id, matches, messageNames }) => {
  const [registered, setRegistered] = useState(false);
  useEffect(() => {
    void (async () => {
      const registered = await apis.permissions.contains({ origins: matches });
      setRegistered(registered);
    })();
  }, [matches]);
  return (
    <Row>
      <RowItem expanded>{translate(messageNames.name)}</RowItem>
      <RowItem>
        {registered ? (
          <Button disabled>{translate('options_searchEngineRegistered')}</Button>
        ) : (
          <Button
            onClick={async () => {
              const registered = await apis.permissions.request({
                origins: matches,
              });
              if (registered) {
                void sendMessage('register-search-engine', id);
              }
              setRegistered(registered);
            }}
          >
            {translate('options_registerSearchEngine')}
          </Button>
        )}
      </RowItem>
    </Row>
  );
};

const RegisterSearchEngines: FunctionComponent = () => {
  return (
    <SectionItem>
      <Row>
        <RowItem expanded>
          <Label>
            <LabelItem primary>{translate('options_otherSearchEngines')}</LabelItem>
            <LabelItem>{translate('options_otherSearchEnginesDescription')}</LabelItem>
          </Label>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <Indent />
        </RowItem>
        <RowItem expanded>
          <List>
            {stringEntries(searchEngineMatches).map(
              ([id, matches]) =>
                id !== 'google' && (
                  <ListItem key={id}>
                    <RegisterSearchEngine
                      id={id}
                      matches={matches}
                      messageNames={searchEngineMessageNames[id]}
                    />
                  </ListItem>
                ),
            )}
          </List>
        </RowItem>
      </Row>
    </SectionItem>
  );
};

export const GeneralSection: FunctionComponent = () => (
  <Section id="general">
    <SectionHeader>
      <SectionTitle>{translate('options_generalTitle')}</SectionTitle>
    </SectionHeader>
    <SectionBody>
      <SetBlacklist />
      <RegisterSearchEngines />
      <SetBooleanItem itemKey="skipBlockDialog" label={translate('options_skipBlockDialogLabel')} />
      <SetBooleanItem itemKey="hideBlockLinks" label={translate('options_hideBlockLinksLabel')} />
      <SetBooleanItem itemKey="hideControl" label={translate('options_hideControlLabel')} />
    </SectionBody>
  </Section>
);
