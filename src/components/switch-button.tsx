import { h } from 'preact';

export function SwitchButton(props): JSX.Element {
  const { entityId, label } = props;

  // const entity = hass.states[entityId] || {};
  const entity = { state: 'wat', entity_id: 'foo' };

  const on = entity.state && entity.state !== 'off' && entity.state != 'unavailable';

  function handleToggle(): void {
    // hass.callService('switch', 'toggle', {
    //   entity_id: entity.entity_id,
    // })
    // poke(entityId);
  }

  return (
    <div className={`lcars-element left-rounded lcars-u-2 button`} onClick={handleToggle}>
      <div className={`lcars-element-decorator right ${on ? 'lcars-lilac-bg' : 'lcars-gray-bg'}`} />
      {label}
    </div>
  );
}
