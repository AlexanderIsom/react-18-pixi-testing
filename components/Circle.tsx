import { Stage, Sprite } from "@pixi/react-pixi";

export default function PixiApp() {
  return (
    <Stage width={500} height={500}>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        anchor={0.5}
        scale={4}
      />
    </Stage>
  );
}
