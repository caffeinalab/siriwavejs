import SiriWaveController from "./siriwave";
import { ICurveDefinition, ICurve } from "./types";
export declare class iOS9Curve implements ICurve {
    ctrl: SiriWaveController;
    definition: ICurveDefinition;
    spawnAt: number;
    noOfCurves: number;
    prevMaxY: number;
    phases: number[];
    amplitudes: number[];
    despawnTimeouts: number[];
    offsets: number[];
    speeds: number[];
    finalAmplitudes: number[];
    widths: number[];
    verses: number[];
    GRAPH_X: number;
    AMPLITUDE_FACTOR: number;
    SPEED_FACTOR: number;
    DEAD_PX: number;
    ATT_FACTOR: number;
    DESPAWN_FACTOR: number;
    NOOFCURVES_RANGES: [number, number];
    AMPLITUDE_RANGES: [number, number];
    OFFSET_RANGES: [number, number];
    WIDTH_RANGES: [number, number];
    SPEED_RANGES: [number, number];
    DESPAWN_TIMEOUT_RANGES: [number, number];
    constructor(ctrl: SiriWaveController, definition: ICurveDefinition);
    getRandomRange(e: [number, number]): number;
    respawnSingle(ci: number): void;
    getEmptyArray(count: number): number[];
    respawn(): void;
    globalAttFn(x: number): number;
    sin(x: number, phase: number): number;
    _grad(x: number, a: number, b: number): number;
    yRelativePos(i: number): number;
    _ypos(i: number): number;
    _xpos(i: number): number;
    drawSupportLine(): void;
    draw(): void;
    static getDefinition(): ICurveDefinition[];
}
