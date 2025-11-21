import { FiMonitor, FiMessageCircle, FiHardDrive, FiActivity } from 'react-icons/fi';

export const DEPLOY_STEPS = [
  { status: 'complete', time: '10:23:45', message: 'Monitoring agent initialized', detail: 'Connected to family network' },
  { status: 'complete', time: '10:23:46', message: 'Device discovery completed', detail: '4 devices detected' },
  { status: 'complete', time: '10:23:47', message: 'Content filters activated', detail: 'Safe Browse enabled' },
  { status: 'complete', time: '10:23:48', message: 'Screen time limits configured', detail: 'Age-appropriate restrictions applied' },
  { status: 'active', time: '10:23:49', message: 'Real-time monitoring active', detail: 'Protecting your family 24/7' },
];

export const KEY_FEATURES = [
    {
        icon: <FiActivity />,
        title: 'Live Monitoring',
        description: 'Real-time activity tracking across all devices',
    },
    {
        icon: <FiHardDrive />,
        title: 'Smart Control',
        description: 'Intelligent access control over essentials',
    },
    {
        icon: <FiMessageCircle />,
        title: 'Communication',
        description: 'Monitor messages and social interactions',
    },
    {
        icon: <FiMonitor />,
        title: 'Multi-Device',
        description: 'Unified control across all family devices',
    }
];