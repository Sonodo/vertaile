import {
  Home,
  Zap,
  Landmark,
  Shield,
  Tag,
  Wrench,
  Scale,
  TrendingUp,
  Truck,
  Key,
  Heart,
  Baby,
  Briefcase,
  Target,
  Layers,
  type LucideProps,
} from 'lucide-react';
import type { CSSProperties } from 'react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Home,
  Zap,
  Landmark,
  Shield,
  Tag,
  Wrench,
  Scale,
  TrendingUp,
  Truck,
  Key,
  Heart,
  Baby,
  Briefcase,
  Target,
  Layers,
};

interface SpokeIconProps {
  iconName: string;
  className?: string;
  size?: number;
  style?: CSSProperties;
}

export function SpokeIcon({ iconName, className, size = 24, style }: SpokeIconProps) {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return <Layers className={className} size={size} style={style} />;
  }

  return <IconComponent className={className} size={size} style={style} />;
}

export default SpokeIcon;
