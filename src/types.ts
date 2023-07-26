import {MouseEventHandler, ReactNode} from "react";

export type AnonymousEventHandler = () => void;
export type PropsWithStatus = { status: string };
export type PropsWithOpen = { open: boolean };
export type ClickableProps = { onClick: MouseEventHandler };
export type PropsWithChildren = { children?: ReactNode };
export type PropsWithMargin = {
    m?: number,
    mt?: number,
    mb?: number,
    ml?: number,
    mr?: number
    mx?: number,
    my?: number
};
export type PropsWithPadding = {
    p?: number,
    pt?: number,
    pb?: number,
    pl?: number,
    pr?: number,
    px?: number,
    py?: number
};
export type DefaultProps = PropsWithChildren & PropsWithMargin & PropsWithPadding;