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
    Repulse = 'repulse',
    Grab = 'grab',
    None = 'none'
}

export enum ConnectingLineOptions {
    Alone = 'alone',
    Others = 'others'
}

// Declaring type in order for particleJS to be recognized on the window object
declare global {
    interface Window {
        particlesJS: any;
        particlesDOM: any[];
    }
}