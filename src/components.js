import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Avatar, Backdrop, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Link, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { Lightbulb, Person } from "@mui/icons-material";
import { useState } from "react";
export function Center(props) {
    return (_jsx(Box, { width: 1, display: "flex", flexDirection: "column", alignItems: "center", ...props, children: props.children }));
}
export function Column(props) {
    const [...children] = props.children;
    return (_jsxs(Stack, { direction: "row", alignItems: "center", ...props, children: [children.slice(0, -1), _jsx(Box, { flexGrow: 1 }), children.at(-1)] }));
}
export function Copyright(props) {
    return (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", ...props, children: ["Powered by ", _jsx(Link, { href: "https://athena2.atatctech.com", color: "inherit", underline: "hover", children: "Athena2" }), ". Copyright \u00A9 ", props.startYear, " - ", new Date().getFullYear(), " ", props.companyName, " All rights reserved."] }));
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
    return (_jsx(Container, { component: "main", children: _jsx(Box, { marginTop: 2, display: "flex", flexDirection: "column", alignItems: "center", children: props.children }) }));
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
    return (_jsxs(Box, { ...props, children: [_jsxs(Dialog, { open: open, children: [props.children, _jsx(DialogActions, { children: _jsx(Button, { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }) })] }), _jsx(IconButton, { size: "small", onClick: () => {
                    setOpen(true);
                }, children: _jsx(Lightbulb, {}) })] }));
}
//# sourceMappingURL=components.js.map