import { createRoot } from 'react-dom/client';
import AeroShards from './AeroShards.jsx';

const host = document.getElementById('aero-bg');
if (host) {
  createRoot(host).render(
    <AeroShards
      backgroundColor="#090312"
      shardColor="#896ABD"
      accentColor="#A855F7"
      placement="full"
      flow="stream"
      material="pearl"
      detail="balanced"
      effect="none"
      scale={1}
      spread={1}
      depth={1}
      speed={1}
      spin={1}
      interaction="repel"
      density={1.5}
      shardSize={1.1}
      stretch={1}
      turbulence={1}
      glow={1}
      edgeSoftness={2}
      bloom={0.5}
      grain={0.05}
      chromaticAberration={0.0075}
      transitionDuration={1}
      interactionRadius={1.5}
      interactionStrength={0.5}
      rippleIntensity={1}
      holdToGather
      paused={false}
    />
  );
}
