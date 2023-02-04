import { h, Fragment } from 'preact';

export function VideoControls(props): JSX.Element {
  const { mediaEntityId } = props;
  // const mediaEntity = hass.states[mediaEntityId] || {};
  const mediaEntity = { state: 'wat', entity_id: 'foo' };
  // const remoteEntity = hass.states[mediaEntityId.replace("media_player", "remote")] || {};
  const remoteEntity = { state: 'wat', entity_id: 'foo' };

  function mediaCommand(command: string, extraArgs = {}): void {
    // hass.callService('media_player', command, {
    //   entity_id: mediaEntity.entity_id,
    //   ...extraArgs
    // });
  }

  function remoteCommand(command: string): void {
    if (!remoteEntity) { return }
    // hass.callService('remote', 'send_command', {
    //   entity_id: remoteEntity.entity_id,
    //   command
    // });
  }

  function setSource(sourceName: string): void {
    mediaCommand('turn_on');
    if (sourceName == "App") {
      remoteCommand("Home");
    } else {
      mediaCommand('select_source', { source: sourceName });
    }
  }

  function autoPlayPause(): void {
    // hass.callService('script', 'turn_on', {
    //   entity_id: 'script.contextual_media_play_pause'
    // });
  }

  return (
    <>
      <div class="lcars-row">
        <div class="lcars-bracket left hollow lcars-u-1-half" />
        <div class="lcars-column">
          <div class="lcars-row">
            <div class="lcars-element button lcars-vu-2" onMouseUp={() => setSource('HDMI 4') }>AUX</div>
            <div class="lcars-element button lcars-vu-2" onMouseUp={() => setSource('HDMI 3/ARC') }>PS4</div>
            <div class="lcars-element button lcars-vu-2" onMouseUp={() => setSource('HDMI 2') }>SWT</div>
            <div class="lcars-element button lcars-vu-2" onMouseUp={() => setSource('HDMI 1') }>DNNS</div>
            <div class="lcars-element button lcars-vu-2" onMouseUp={() => setSource('App') }>APP</div>
          </div>
          <div class="lcars-row">
            <div class="lcars-element lcars-u-1-2 button" onMouseUp={() => mediaCommand('turn_off')}>OFF</div>
            <div class="lcars-column">
              <div class="lcars-element lcars-u-2 button" onMouseUp={() => mediaCommand('volume_up')}>VOL UP</div>
              <div class="lcars-element lcars-u-2 button" onMouseUp={() => mediaCommand('volume_down')}>VOL DN</div>
            </div>
            <div class="lcars-element lcars-u-2-2 button" onMouseUp={() => autoPlayPause()}>PL/PS</div>
          </div>
        </div>
      </div>
      <div class="lcars-bar double-spacer" />
      <div class="lcars-row">
        <div style="min-width: 1.5rem" />
        <div class="lcars-element lcars-u-5" style="background: linear-gradient(90deg, #d64 0%, #fc6 100%)">
          VOL
        </div>
      </div>
      <div class="lcars-bar double-spacer" />
      <div class="lcars-row">
        <div class="lcars-element lcars-u-1 button rounded" onMouseUp={() => remoteCommand('Return')}>BK</div>
        <div class="lcars-u-1" />
        <div class="lcars-element lcars-u-1 button" onMouseUp={() => remoteCommand('Up')}>UP</div>
        <div class="lcars-u-1" />
      </div>
      <div class="lcars-row">
        <div class="lcars-u-1" />
        <div class="lcars-element lcars-u-1 button left-rounded" onMouseUp={() => remoteCommand('Left')}>LT</div>
        <div class="lcars-element lcars-u-1 button" onMouseUp={() => remoteCommand('Confirm')}>SEL</div>
        <div class="lcars-element lcars-u-1 button right-rounded" onMouseUp={() => remoteCommand('Right')}>RT</div>
      </div>
      <div class="lcars-row">
        <div class="lcars-u-1" />
        <div class="lcars-u-1" />
        <div class="lcars-element lcars-u-1 button" onMouseUp={() => remoteCommand('Down')}>DN</div>
        <div class="lcars-u-1" />
      </div>
    </>
  );
}
