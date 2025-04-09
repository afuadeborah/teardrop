export type ControlFormInputs = {
    date?: string; 
    color: string;
    speed: number;
    connectingLine: ConnectingLineOptions;
    enableHover: boolean;
    hover: OnHoverBehaviour;
    opacity: number;
    density: number;
}

export enum OnHoverBehaviour {
    'Repulse',
    'Grab',
    'None'
}

export enum ConnectingLineOptions {
    'Alone',
    'Others'
}