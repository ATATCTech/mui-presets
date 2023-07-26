/**
 * Expand every margin-related key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandMarginKeys(props) {
    return {
        margin: props?.m,
        marginTop: props?.mt,
        marginBottom: props?.mb,
        marginLeft: props?.ml,
        marginRight: props?.mr,
        marginX: props?.mx,
        marginY: props?.my
    };
}
/**
 * Expand every padding-related key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandPaddingKeys(props) {
    return {
        padding: props?.p,
        paddingTop: props?.pt,
        paddingBottom: props?.pb,
        paddingLeft: props?.pl,
        paddingRight: props?.pr,
        paddingX: props?.px,
        paddingY: props?.py
    };
}
/**
 * Expand every key to its full name if applicable.
 * Note that this only leaves expanded keys.
 * @param props
 */
export function expandAllKeys(props) {
    return {
        ...expandMarginKeys(props),
        ...expandPaddingKeys(props)
    };
}
//# sourceMappingURL=types.js.map