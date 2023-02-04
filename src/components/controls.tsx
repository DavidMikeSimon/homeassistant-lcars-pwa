import { h, Fragment } from 'preact';

import { SwitchButton } from './switch-button';
import { VideoControls } from './video-controls';

export function Controls(): JSX.Element {
  return (
    <>
      <SwitchButton label="CNR LMP" entityId="switch.corner_lamp" />
      <SwitchButton label="DAVID BED LMP" entityId="switch.davids_bedside_lamp" />
      <SwitchButton label="VOICE CTL" entityId="switch.voice_command_input" />
      <h3>VID</h3>
      <VideoControls mediaEntityId="media_player.sony_bravia_tv" />
    </>
  );
}
