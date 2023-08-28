import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Avatar, Backdrop, Box, Button, Checkbox, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputAdornment, Link, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { Delete, Lightbulb, Person } from "@mui/icons-material";
import { useRef, useState } from "react";
import { expandAllKeys } from "./types";
export function Center(props) {
    return (_jsx(Box, { width: 1, display: "flex", flexDirection: "column", alignItems: "center", ...expandAllKeys(props), children: props.children }));
}
export function Column(props) {
    const [...children] = props.children;
    return (_jsxs(Stack, { direction: "row", alignItems: "center", ...expandAllKeys(props), children: [children.slice(0, -1), _jsx(Box, { flexGrow: 1 }), children.at(-1)] }));
}
export function Copyright(props) {
    return (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", ...expandAllKeys(props), children: ["Powered by ", _jsx(Link, { href: "https://athena2.atatctech.com", color: "inherit", underline: "hover", children: "Athena2" }), ". Copyright \u00A9 ", props.startYear, " - ", new Date().getFullYear(), " ", props.companyName, " All rights reserved."] }));
}
export function ErrorHint(props) {
    return (props.status != null && props.status.length > 2 ?
        _jsx(Alert, { severity: "error", sx: { mt: -2, mb: 2 }, children: props.status.substring(2) }) : null);
}
export function StatusSnackbar(props) {
    return (_jsx(Snackbar, { open: props.status != null && props.status.length > 2 && (props.status.startsWith("s/") || props.status.startsWith("i/") || props.status.startsWith("f/")), autoHideDuration: 3000, onClose: props.clearStatus, children: _jsx(Alert, { onClose: props.clearStatus, severity: props.status.startsWith("f/") ? "error" : props.status.startsWith("i/") ? "info" : "success", sx: { width: '100%' }, children: props.status.substring(2) }) }));
}
export function LoadingBackdrop(props) {
    return (_jsx(Backdrop, { sx: { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }, open: props.open, children: _jsx(CircularProgress, { color: "inherit" }) }));
}
export function PaperAtCenter(props) {
    return (_jsx(Grid, { width: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", children: _jsx(Paper, { elevation: 16, sx: {
                width: { xs: 0.95, sm: 0.6, md: 0.5, lg: 0.4 },
                px: 4,
                py: 8,
                display: "flex",
                alignItems: "center"
            }, children: props.children }) }));
}
export function MainContainer(props) {
    return (_jsx(Container, { component: "main", children: _jsx(Center, { mt: 2, children: props.children }) }));
}
export function ConfirmDialog(props) {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    return (_jsxs(Box, { children: [_jsxs(Dialog, { open: open, children: [_jsx(DialogTitle, { children: "Confirm to Proceed" }), _jsxs(DialogContent, { children: [props.notice == null ? null :
                                _jsx(Alert, { severity: "warning", sx: { mb: 1 }, children: props.notice }), _jsxs(DialogContentText, { children: ["Type in ", _jsx("b", { children: props.passcode }), " to proceed."] }), _jsx(TextField, { required: true, autoFocus: true, fullWidth: true, type: "text", placeholder: props.passcode, onChange: (e) => {
                                    setDisabled(e.target?.value !== props.passcode);
                                }, sx: { mt: 1 } })] }), _jsxs(DialogActions, { children: [_jsx(Button, { variant: "contained", disabled: disabled, onClick: () => {
                                    props.and();
                                    setOpen(false);
                                }, children: "Confirm" }), _jsx(Button, { onClick: () => {
                                    setOpen(false);
                                }, children: "Close" })] })] }), _jsx(Box, { onClick: () => {
                    setOpen(true);
                }, children: props.children })] }));
}
export function Profile(props) {
    return (props.username == null || props.username.length < 0 ?
        _jsx(Person, { onClick: props.onClick }) :
        _jsx(Avatar, { src: props.profile, onClick: props.onClick, children: props.username[0] }));
}
export function InstructionDialog(props) {
    const [open, setOpen] = useState(false);
    return (_jsxs(Box, { ...expandAllKeys(props), children: [_jsxs(Dialog, { open: open, children: [props.children, _jsx(DialogActions, { children: _jsx(Button, { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }) })] }), _jsx(IconButton, { size: "small", onClick: () => {
                    setOpen(true);
                }, children: _jsx(Lightbulb, {}) })] }));
}
export function SelectUsers(props) {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef();
    const filter = props.filter == null ? "Name" : props.filter;
    const keywordPrefix = props.keywordPrefix == null ? "@" : props.keywordPrefix;
    return (_jsxs(Grid, { container: true, children: [_jsx(Menu, { open: open, onClose: () => setOpen(false), anchorEl: anchorRef.current, children: users.map((u, i) => (JSON.stringify(props.value).includes(JSON.stringify(u)) ? null :
                    _jsxs(MenuItem, { children: [_jsx(Checkbox, { sx: { ml: -1 }, onChange: () => props.onChange(Array.from(new Set(props.value).add(u))) }), _jsx(Profile, { username: u.displayName, profile: u.profile }), _jsxs(Typography, { marginLeft: 1, children: ["@", u.name] })] }, i))) }), _jsx(Grid, { item: true, sm: 12, md: props.horizontal ? 5 : undefined, children: _jsx(TextField, { inputRef: anchorRef, label: filter, size: "small", onKeyDown: (e) => {
                        if (e.key !== "Enter")
                            return;
                        const keyword = e.target.value;
                        props.search(keyword).then(setUsers).catch((_) => {
                        });
                        setOpen(true);
                    }, InputProps: { startAdornment: _jsx(InputAdornment, { position: "start", children: keywordPrefix }) } }) }), _jsx(Grid, { item: true, sm: 12, md: props.horizontal ? 7 : undefined, children: _jsx(List, { dense: true, children: props.value.map((u, i) => (_jsxs(ListItem, { secondaryAction: _jsx(IconButton, { edge: "end", onClick: () => {
                                const su = new Set(props.value);
                                su.delete(u);
                                props.onChange(Array.from(su));
                            }, children: _jsx(Delete, {}) }), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { children: _jsx(Profile, { username: u.displayName, profile: u.profile }) }) }), _jsx(ListItemText, { primary: u.displayName, secondary: "@" + u.name })] }, i))) }) })] }));
}
//# sourceMappingURL=components.js.map