import type { ComponentType } from 'react';
import type { DoorKind } from '@/lib/types';
import { ArchDoor } from './ArchDoor';
import { BlueprintDoor } from './BlueprintDoor';
import { GateDoor } from './GateDoor';
import { LabDoor } from './LabDoor';
import { SecureDoor } from './SecureDoor';
import { SlatDoor } from './SlatDoor';
import { VaultDoor } from './VaultDoor';

const faceByKind = {
  blueprint: BlueprintDoor,
  vault: VaultDoor,
  arch: ArchDoor,
  gate: GateDoor,
  lab: LabDoor,
  slat: SlatDoor,
  secure: SecureDoor,
} as const satisfies Record<DoorKind, ComponentType<{ className?: string }>>;

export type DoorFaceProps = {
  doorKind: DoorKind;
  className?: string;
};

export function DoorFace({ doorKind, className }: DoorFaceProps) {
  const Face = faceByKind[doorKind];
  return <Face className={className} />;
}
