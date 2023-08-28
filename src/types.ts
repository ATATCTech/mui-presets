import {ReactNode} from "react";

export type AnonymousEventHandler = () => void;
export type ChangeEvent<T> = (v: T) => void;
export type PropsWithStatus = { status: string };
export type PropsWithOpen = { open: boolean };
export type PropsWithChildren = { children?: ReactNode };
export type ControlledProps<T> = { value: T, onChange: ChangeEvent<T>};
export type PropsWithMargin = {
    m?: number,
    mt?: number,
    mb?: number,
    ml?: number,
    mr?: number
    mx?: number,
    my?: number
};
export type PropsWithMarginF = {
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    marginX?: number,
    marginY?: number
};
/**
 * Expand every margin-related key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandMarginKeys(props: PropsWithMargin | any): PropsWithMarginF {
    return {
        margin: props?.m,
        marginTop: props?.mt,
        marginBottom: props?.mb,
        marginLeft: props?.ml,
        marginRight: props?.mr,
        marginX: props?.mx,
        marginY: props?.my,
        ...props
    };
}
export type PropsWithPadding = {
    p?: number,
    pt?: number,
    pb?: number,
    pl?: number,
    pr?: number,
    px?: number,
    py?: number
};
export type PropsWithPaddingF = {
    padding?: number,
    paddingTop?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingX?: number,
    paddingY?: number
};
/**
 * Expand every padding-related key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandPaddingKeys(props:PropsWithPadding | any): PropsWithPaddingF {
    return {
        padding: props?.p,
        paddingTop: props?.pt,
        paddingBottom: props?.pb,
        paddingLeft: props?.pl,
        paddingRight: props?.pr,
        paddingX: props?.px,
        paddingY: props?.py,
        ...props
    };
}
export type PropsWithMarginAndPadding = PropsWithMargin & PropsWithPadding;
export type PropsWithMarginAndPaddingF = PropsWithMarginF & PropsWithPaddingF;

/**
 * Expand every key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandAllKeys(props: PropsWithMarginAndPadding | any): PropsWithMarginAndPaddingF {
    return {
        ...expandMarginKeys(props),
        ...expandPaddingKeys(props)
    };
}
export type DefaultProps = PropsWithChildren & PropsWithMarginAndPadding;